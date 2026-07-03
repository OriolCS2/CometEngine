# Networking & Multiplayer

Comet ships a complete high-level multiplayer stack: swap-in transport peers (ENet, WebSocket, WebRTC), attribute-driven **RPCs**, automatic **state replication**, networked **spawning**, and a host-authoritative model that scales from a LAN co-op prototype to a 4-player arena. This tutorial walks the whole pipeline using the engine's own multiplayer sample as the guide.

![A networked entity: the Multiplayer Synchronizer in the Inspector, ready to replicate its transform to every peer.](./tutorials/multiplayer-game.png)

## The lay of the land

- One machine is the **host** (also called the server) — it owns the truth. Everyone else is a **client**.
- Every connected machine gets a **unique peer id**: the host is always `1`, clients get `2`, `3`, ...
- A **transport peer** object moves the bytes. You create one and hand it to the global `Network::Multiplayer` API; from then on RPCs, replication and spawning ride on it:

| Transport | Use when |
|-----------|----------|
| `ENetMultiplayerPeer` | Desktop builds — UDP with reliability channels. The default choice. |
| `WebSocketMultiplayerPeer` | Web builds, or mixed web+desktop games with a socket server. |
| `WebRTCMultiplayerPeer` | Peer-to-peer with a signaling server. |
| `OfflineMultiplayerPeer` | Single-player that reuses your multiplayer code paths untouched. |

> [!WARNING]
> Web builds cannot open native UDP/TCP sockets — on the web platform use **WebSocket** (or WebRTC); the ENet peer is desktop-only.

## Hosting and joining

This is the sample's main menu, condensed. One button hosts, the other joins the address typed into an InputField:

```angelscript
using namespace CometEngine;
using namespace CometEngine::UI;
using namespace CometEngine::SceneManagement;

class MenuButton : CometBehaviour, IPointerClickAction
{
    int port = 7777;
    string serverAddress = "127.0.0.1";
    string roomSceneName = "Room";

    // Keep the peer in a member handle: it must outlive this function!
    private CometEngine::Network::ENetMultiplayerPeer peer;

    void Host()
    {
        peer = CometEngine::Network::ENetMultiplayerPeer();
        if (peer.CreateServer(port, 8))                    // port, max peers
        {
            Network::Multiplayer::SetMultiplayerPeer(peer);
            Debug::Log("Hosting, my id = " + formatInt(Network::Multiplayer::GetUniqueId()));
            SceneManager::LoadScene(roomSceneName);
        }
        else
        {
            Debug::Log("Could not host on port " + formatInt(port));
        }
    }

    void Join()
    {
        peer = CometEngine::Network::ENetMultiplayerPeer();
        if (peer.CreateClient(ReadIp(), port))
        {
            Network::Multiplayer::SetMultiplayerPeer(peer);
            SceneManager::LoadScene(roomSceneName);
        }
    }

    void OnPointerClick(PointerEvent event)
    {
        if (entity.name == "HostButton") Host();
        else if (entity.name == "JoinButton") Join();
    }

    string ReadIp()
    {
        Entity ipEntity = Entity::Find("IpInput");
        if (ipEntity !is null)
        {
            InputField field = InputField::Get(ipEntity);
            if (field !is null && field.textValue.length() > 0)
            {
                return field.textValue;
            }
        }
        return serverAddress;
    }
}
```

> [!IMPORTANT]
> Store the peer in a **class member**, like `peer` above. A peer declared as a local variable is destroyed when the function returns — and the connection dies with it.

### Reacting to peers coming and going

The host typically watches connections to manage lobby slots:

```angelscript
void Start()
{
    if (!Network::Multiplayer::HasMultiplayerPeer())
    {
        return;
    }

    Network::Multiplayer::GetOnPeerConnected().Add(CometDelegateuint64(OnPeerConnected));
    Network::Multiplayer::GetOnPeerDisconnected().Add(CometDelegateuint64(OnPeerDisconnected));
}

void OnPeerConnected(uint64 peerId)
{
    if (!Network::Multiplayer::IsServer()) return;   // only the host manages slots
    Debug::Log("Peer joined: " + formatInt(peerId));
}

void OnPeerDisconnected(uint64 peerId)
{
    if (!Network::Multiplayer::IsServer()) return;
    Debug::Log("Peer left: " + formatInt(peerId));
}
```

## RPCs: calling methods across the network

Decorate a method with `[Rpc(...)]` and it becomes remotely callable. The decorator takes up to four values:

```angelscript
[Rpc(<mode>, <sync>, <transfer>, channel = 0)]
```

| Slot | Values | Meaning |
|------|--------|---------|
| **mode** | `"any_peer"` / `"authority"` | Who may invoke it: anyone, or only the entity's authority. |
| **sync** | `"call_local"` / `""` | Whether the *caller* also runs it locally. |
| **transfer** | `"reliable"` / `"unreliable"` / `"unreliable_ordered"` | Delivery guarantee. |
| **channel** | `0–15` | Ordering group for reliable packets. |

Send with the two global helpers — broadcast, or to one peer:

```angelscript
// Broadcast to everyone (including yourself thanks to call_local):
Network::Multiplayer::Rpc(this, "SyncScore", score, wave);

// Only to the host (peer 1):
Network::Multiplayer::RpcId(this, 1, "RequestColor", colorIndex);
```

And receive on the other side:

```angelscript
// Clients ask the host for something; the host validates and answers.
[Rpc("any_peer", "reliable")]
void RequestColor(int colorIndex)
{
    if (!Network::Multiplayer::IsServer()) return;

    // Which client called us?
    int clientId = Network::Multiplayer::GetRemoteSenderId();
    Debug::Log("Peer " + formatInt(clientId) + " wants color " + formatInt(colorIndex));
}

// The host pushes state to everyone; call_local means the host applies it too.
[Rpc("authority", "call_local", "reliable")]
void SyncScore(int score, int wave)
{
    UpdateHud(score, wave);
}
```

Pick the transfer mode by what the data is worth: **unreliable** for high-frequency input and cosmetic state (drops don't matter, the next packet fixes it), **reliable** for anything that must not be missed — fire commands, score changes, match flow.

## Replicating state automatically

Writing RPCs for every variable gets old fast. Comet replicates **fields** for you with two decorators:

```angelscript
class ShipController : CometBehaviour
{
    // Sent once, inside the spawn packet — seeds late joiners.
    [ReplicateOnSpawn] int ownerPeerId = 0;
    [ReplicateOnSpawn] int colorIndex = 0;

    // Sent as reliable deltas whenever the value changes.
    [Replicate("on_change")] int health = 10;
    [Replicate("on_change")] bool alive = true;

    // "always" mode would send every frame, unreliably - for values that
    // change constantly anyway.
}
```

For transforms, don't replicate fields by hand — add a **MultiplayerSynchronizer** behaviour to the entity and configure it once:

```angelscript
void Start()
{
    MultiplayerSynchronizer sync = MultiplayerSynchronizer::Get(entity);
    if (sync !is null)
    {
        sync.AddTransformPreset();   // replicate position/rotation/scale
        sync.interpolate = true;     // smooth over network ticks on clients
    }
}
```

The synchronizer can also hide an entity from specific peers — `SetVisibilityFor(peerId, false)` — for fog of war or per-player secrets.

## Spawning entities across the network

When the host instantiates a networked entity, every client needs a copy. A **MultiplayerSpawner** behaviour handles it: it registers spawnable prefabs (its `spawnLimit` caps runaway counts) and mirrors spawn/despawn to everyone:

```angelscript
// HOST only: spawn one ship per occupied lobby slot.
void StartMatch()
{
    for (int i = 0; i < 4; i++)
    {
        if (slotPeer[i] == 0) continue;

        Entity ship = shipSpawner.Spawn(0);   // spawnable index 0
        if (ship !is null)
        {
            ShipController sc = ShipController::Get(ship);
            sc.ownerPeerId = slotPeer[i];      // [ReplicateOnSpawn] fields...
            sc.colorIndex  = slotColor[i];     // ...travel inside the spawn packet
        }
    }

    Network::Multiplayer::Rpc(this, "BeginMatch");
}
```

Because `ownerPeerId` and `colorIndex` are `[ReplicateOnSpawn]`, every client — even one that joins later — receives the ship already configured.

## Authority: who simulates what

Every entity has a **multiplayer authority** — the peer that simulates it. By default that's the host. Three calls on `Behaviour` manage it:

```angelscript
IsMultiplayerAuthority();          // am I the one simulating this entity?
GetMultiplayerAuthority();         // whose is it? (peer id)
SetMultiplayerAuthority(peerId);   // hand it over
```

The sample's ships stay **host-authoritative**, which yields the classic, cheat-resistant split — *owners send input, the host simulates, state replicates back*:

```angelscript
void Update()
{
    // 1. The OWNING player reads input and ships it to the host.
    if (IsOwner() && alive)
    {
        float mx = 0.0F, my = 0.0F;
        if (Input::GetKeyPressed(KeyCode::W)) my += 1.0F;
        if (Input::GetKeyPressed(KeyCode::S)) my -= 1.0F;
        if (Input::GetKeyPressed(KeyCode::A)) mx -= 1.0F;
        if (Input::GetKeyPressed(KeyCode::D)) mx += 1.0F;

        if (Network::Multiplayer::IsServer())
        {
            inX = mx; inY = my;                                   // host: apply directly
        }
        else
        {
            Network::Multiplayer::RpcId(this, 1, "RecvInput", mx, my);   // client: send
        }
    }

    // 2. The HOST simulates every ship from the latest input.
    if (IsMultiplayerAuthority() && alive)
    {
        transform.Translate(Vector3(inX, inY, 0) * speed * Time::GetDeltaTime(), Space::World);
        // position replicates to everyone via the MultiplayerSynchronizer
    }
}

bool IsOwner()
{
    return ownerPeerId == Network::Multiplayer::GetUniqueId();
}

[Rpc("any_peer", "unreliable")]      // input: high-rate, drop-tolerant
void RecvInput(float mx, float my)
{
    if (!IsMultiplayerAuthority()) return;
    inX = mx; inY = my;
}
```

Note the guard inside every RPC — **never trust the network**: `RecvInput` ignores calls when this peer isn't the authority, and host-side handlers validate requests before applying them.

## Cheat sheet

| Task | Call |
|------|------|
| Install a transport | `Network::Multiplayer::SetMultiplayerPeer(peer)` |
| Who am I? | `GetUniqueId()` (host = 1), `IsServer()` |
| Broadcast an RPC | `Rpc(this, "Method", args...)` (up to 8 args) |
| RPC to one peer | `RpcId(this, peerId, "Method", args...)` |
| Who called this RPC? | `GetRemoteSenderId()` |
| Peer joined/left | `GetOnPeerConnected() / GetOnPeerDisconnected()` `.Add(CometDelegateuint64(Handler))` |
| Kick a peer | `DisconnectPeer(peerId, force)` |
| Sync fields | `[Replicate("on_change")]`, `[Replicate("always")]`, `[ReplicateOnSpawn]` |
| Sync transforms | `MultiplayerSynchronizer` + `AddTransformPreset()` |
| Networked spawn | `MultiplayerSpawner.Spawn(index)` on the host |
| Leave the session | `Network::Multiplayer::ClearMultiplayerPeer()` |

## Where to go next

Build the lobby screen with the [UI system](#tutorials/ui-system), then package a client for your friends in [Exporting Builds & Shipping Patches](#tutorials/build-and-patches).
