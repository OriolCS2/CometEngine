# Input: Keyboard, Gamepad & Actions

Reading the player's intent comes in two flavours in Comet. **Polling** asks the hardware directly — "is W held right now?" — and is perfect for quick prototypes. The **action system** binds named, rebindable *actions* ("Jump", "Move") to keys, buttons and sticks, which is what you want for a shippable game with gamepad support and remappable controls.

## Polling the hardware

Everything lives in the `CometEngine::Input` namespace. The three verbs matter:

- **`GetKeyPressed(key)`** — true **every frame** the key is held (a level). Use it for continuous movement.
- **`GetKeyDown(key)`** — true only on the **first frame** of the press (an edge). Use it for actions that fire once: jump, shoot, confirm.
- **`GetKeyUp(key)`** — true on the frame the key is **released**.

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

Mouse and controllers follow the same pattern:

```angelscript
// Mouse
Vector2 mousePos = Input::GetMousePosition();        // screen space
float wheel = Input::GetMouseScrollMotion();
if (Input::GetMouseButtonDown(MouseCode::LEFT)) { /* click */ }

// Gamepad (CONTROLLER_1..8, or CONTROLLER_ANY for the first connected)
Vector2 stick = Input::GetControllerAxisValue(ControllerAxis::LEFT, ControllerNumber::CONTROLLER_1);
if (Input::GetControllerButtonDown(ControllerCode::A, ControllerNumber::CONTROLLER_1))
{
    Input::MakeControllerRumble(0.6F, 0.2F);  // strength, seconds
}
```

Touch is multi-touch aware — each finger is a `Touch` with a stable `id`, `position`, `motion` and `state` (`STARTED` / `MOVED` / `ENDED`). The sample project's mobile controller builds a virtual joystick by tracking a finger on the left half of the screen:

```angelscript
uint64 touchCount = Input::GetTouchCount();
for (uint64 i = 0; i < touchCount; i++)
{
    Touch touch = Input::GetTouchByIndex(i);
    if (touch.state == TouchState::ENDED) continue;
    // ... use touch.position, touch.id ...
}
```

## The action system

Hard-coding `KeyCode::SPACE` everywhere means no rebinding and no easy gamepad support. **Input actions** fix that: you define named actions in **Project Settings → Input**, each with one or more **bindings** (keyboard, mouse, controller, or composites like WASD → a `Vector2`), grouped into **input groups** ("UI", "Gameplay").

An action has a **value type** — `Button`, `Axis` (1D) or `Vector2` (2D) — and you read it by name:

```angelscript
using namespace CometEngine;
using namespace CometEngine::InputSettings;

class PlayerController : CometBehaviour
{
    private InputAction moveAction;
    private InputAction jumpAction;

    void Start()
    {
        InputGroup group = InputSettings::GetGroupByName("Gameplay");
        if (group !is null)
        {
            moveAction = group.GetActionByName("Move");
            jumpAction = group.GetActionByName("Jump");
        }
    }

    void Update()
    {
        if (moveAction !is null)
        {
            // One Vector2, whether it came from WASD, arrows or a stick.
            Vector2 move = moveAction.GetVector2();
            transform.Translate(move * 5.0F * Time::GetDeltaTime(), Space::World);
        }

        // wasPressedThisFrame is the action-system equivalent of GetKeyDown.
        if (jumpAction !is null && jumpAction.wasPressedThisFrame)
        {
            Jump();
        }
    }

    void Jump() { }
}
```

`isPressed` (held), `wasPressedThisFrame` / `wasReleasedThisFrame` (edges), and the typed getters `GetBool()` / `GetFloat()` / `GetVector2()` cover every case. You can also subscribe to callbacks instead of polling:

```angelscript
void Start()
{
    InputGroup group = InputSettings::GetGroupByName("Gameplay");
    jumpAction = group.GetActionByName("Jump");
    jumpAction.onStarted.Add(InputActionCallback(OnJump));
}

void OnJump(InputAction action)
{
    Debug::Log("jump!");
}
```

### Bindings, processors and interactions

Each binding can carry **processors** (deadzone, invert, scale, response curve) and **interactions** (press, hold, tap, multi-tap) — so "hold to charge" or "double-tap to dash" are configured, not coded. Composite bindings turn four buttons into a `Vector2`, or two into an axis.

> [!TIP]
> The editor generates a typed **InputWrapper** accessor for your groups, so you can write `InputWrapper::Gameplay.Move.GetVector2()` with autocompletion instead of looking actions up by string every time.

## Which to use

- **Polling** — jams, prototypes, fixed control schemes, mobile touch handling.
- **Action system** — shipping games that need gamepad support, rebindable controls, or "hold/tap" interactions.

They coexist freely; use whichever fits each situation.

## Where to go next

Feed input into [physics forces](#tutorials/physics), drive an [animator's parameters](#tutorials/animation), or wire buttons in your [UI](#tutorials/ui-system).
