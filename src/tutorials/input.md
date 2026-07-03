# Reading Raw Input

The most direct way to know what the player is doing is to ask the hardware every frame: *is W held right now? did they just click? how far is the stick pushed?* This is **polling**, and it lives in the `CometEngine::Input` namespace. It's perfect for prototypes, game jams, fixed control schemes and touch handling.

> [!TIP]
> When you're ready for rebindable controls and first-class gamepad support, graduate to the [Input Actions system](#tutorials/input-actions) — the same input, but bound to named actions you configure in the editor. This tutorial is the raw layer underneath it.

## The three verbs: Down, Pressed, Up

For every button — keyboard, mouse or controller — there are three queries, and choosing the right one is most of the battle:

| Query | True when... | Use it for |
|-------|--------------|-----------|
| **`GetKeyDown(key)`** | the **first frame** of the press (an edge) | one-shot actions: jump, shoot, confirm, toggle |
| **`GetKeyPressed(key)`** | **every frame** the key is held (a level) | continuous actions: walking, charging, aiming |
| **`GetKeyUp(key)`** | the frame it is **released** (an edge) | release actions: release a charged shot |

```angelscript
using namespace CometEngine;
using namespace CometEngine::Input;

class Player : CometBehaviour
{
    float speed = 5.0F;

    void Update()
    {
        // Continuous movement from held keys (level).
        Vector2 move(0, 0);
        if (Input::GetKeyPressed(KeyCode::W)) move.y += 1.0F;
        if (Input::GetKeyPressed(KeyCode::S)) move.y -= 1.0F;
        if (Input::GetKeyPressed(KeyCode::A)) move.x -= 1.0F;
        if (Input::GetKeyPressed(KeyCode::D)) move.x += 1.0F;

        // Fire once per press (edge).
        if (Input::GetKeyDown(KeyCode::SPACE))
        {
            Fire();
        }

        transform.Translate(move * speed * Time::GetDeltaTime(), Space::World);
    }

    void Fire() { }
}
```

`KeyCode` covers the whole keyboard: letters (`A`–`Z`), digits, `SPACE`, `RETURN`, `ESCAPE`, the arrows (`UP`/`DOWN`/`LEFT`/`RIGHT`), function keys (`F1`–`F12`) and modifiers (`SHIFT_LEFT`, `CONTROL_LEFT`, ...).

## Mouse

```angelscript
using namespace CometEngine;
using namespace CometEngine::Input;

Vector2 mousePos = Input::GetMousePosition();     // screen space, (0,0) top-left
Vector2 delta = Input::GetMouseMotion();          // movement since last frame
float wheel = Input::GetMouseScrollMotion();      // scroll delta

if (Input::GetMouseButtonDown(MouseCode::LEFT))   { /* click */ }
if (Input::GetMouseButtonPressed(MouseCode::RIGHT)) { /* hold to aim */ }
```

`MouseCode` is `LEFT`, `MIDDLE`, `RIGHT`, `BUTTON_4`, `BUTTON_5`. Mouse position is in **screen space** — to convert it to world space, go through your camera.

## Controllers

Comet supports up to eight controllers. Pass a `ControllerNumber` to target a specific one, or `CONTROLLER_ANY` for the first connected:

```angelscript
using namespace CometEngine;
using namespace CometEngine::Input;

// Analog stick — a Vector2 in the range -1..+1 on each axis.
Vector2 leftStick = Input::GetControllerAxisValue(ControllerAxis::LEFT, ControllerNumber::CONTROLLER_1);
float rightTrigger = Input::GetControllerTriggerValue(ControllerTrigger::RIGHT, ControllerNumber::CONTROLLER_1);

// Buttons — same Down / Pressed / Up trio as the keyboard.
if (Input::GetControllerButtonDown(ControllerCode::A, ControllerNumber::CONTROLLER_1))
{
    Jump();
    Input::MakeControllerRumble(0.6F, 0.2F);   // strength 0..1, duration in seconds
}

// Discover what's plugged in at runtime.
array<ControllerNumber> pads = Input::GetControllersConnected();
```

`ControllerCode` names the face buttons (`A`/`B`/`X`/`Y`), the D-pad (`DPAD_UP`...), shoulders, stick clicks and analog-stick directions as virtual buttons (`LEFT_AXIS_UP`...). `MakeControllerRumble` and `PlayHapticPreset` drive vibration. `GetActiveInputDevice()` tells you whether the player is currently on keyboard-and-mouse or a gamepad, so you can swap on-screen button prompts to match.

## Touch

Touch is multi-touch aware: each finger is a `Touch` with a **stable `id`** you can follow across frames, plus `position`, `motion` and a `state` (`STARTED` / `MOVED` / `ENDED`):

```angelscript
using namespace CometEngine;
using namespace CometEngine::Input;

uint64 touchCount = Input::GetTouchCount();
for (uint64 i = 0; i < touchCount; i++)
{
    Touch touch = Input::GetTouchByIndex(i);
    if (touch.state == TouchState::ENDED) continue;

    // touch.id follows this finger; touch.position is screen space.
    Debug::Log("finger " + touch.id + " at " + touch.position.ToString());
}
```

This is how the sample project's mobile controller builds a virtual joystick — it claims the first finger that lands on the left half of the screen (tracking it by `id`) and reads its offset from the touch-down point each frame. `Input::IsPinching()` and `Input::GetPinchZoom()` give you two-finger pinch for zoom.

## Reading a whole character controller

Putting the verbs together — keyboard *and* gamepad, movement *and* a one-shot fire, exactly as the sample project's `Player` script does it:

```angelscript
using namespace CometEngine;
using namespace CometEngine::Input;

class Player : CometBehaviour
{
    float speed = 6.0F;

    void Update()
    {
        // Movement: keyboard OR left stick, whichever the player uses.
        Vector2 velocity = Input::GetControllerAxisValue(ControllerAxis::LEFT, ControllerNumber::CONTROLLER_1);
        if (Input::GetKeyPressed(KeyCode::W)) velocity.y += 1.0F;
        if (Input::GetKeyPressed(KeyCode::S)) velocity.y -= 1.0F;
        if (Input::GetKeyPressed(KeyCode::A)) velocity.x -= 1.0F;
        if (Input::GetKeyPressed(KeyCode::D)) velocity.x += 1.0F;

        // Fire: space OR the A button, once per press.
        if (Input::GetKeyDown(KeyCode::SPACE) ||
            Input::GetControllerButtonDown(ControllerCode::A, ControllerNumber::CONTROLLER_1))
        {
            Fire();
        }

        transform.Translate(velocity * speed * Time::GetDeltaTime(), Space::World);
    }

    void Fire() { }
}
```

> [!WARNING]
> Notice this reads two hard-coded keys for every action, and there's no way for the player to rebind them or for a designer to tune deadzones. That's fine for a jam — but the moment you want remappable controls, "hold to charge", or clean multi-device support, it's time for [Input Actions](#tutorials/input-actions).

## Where to go next

Turn these reads into movement with [Physics](#tutorials/physics), or step up to rebindable, designer-friendly controls with [Input Actions](#tutorials/input-actions).
