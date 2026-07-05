# Extending the Editor

The Comet editor is built on the same AngelScript you write your game in — which means you can extend it. Anything you wish the editor did — a bespoke tool in the menu bar, a specialized inspector with a "Bake" button, a whole dockable window for editing your game's data — you write in script. No C++, no recompiling the engine: save the file and the editor picks it up.

## Editor scripts live in an `Editor/` folder

Any folder named **`Editor`** (for example `Assets/Editor/`) is special. Scripts inside it are compiled **only for the editor** and stripped from every exported build — they're where your tooling goes so it never ships in the game. (Under the hood they're compiled with `COMET_EDITOR` defined; see [Exporting Builds](/tutorials/build-and-patches).)

There are two base classes, both in the `CometEditor` namespace:

- **`EditorBehaviour`** — hosts **menu-bar items** and **custom inspectors**.
- **`EditorWindow`** — a **dockable window** you draw yourself.

Every example below starts with:

```angelscript
using namespace CometEngine;
using namespace CometEditor;
```

## Adding items to the main menu bar

Put `[MainMenuItem("Path/Name")]` on a method of an `EditorBehaviour` and it appears in the top menu bar. The path builds the submenu structure; the last segment is the clickable item.

```angelscript
using namespace CometEngine;
using namespace CometEditor;

class ProjectTools : EditorBehaviour
{
    [MainMenuItem("Tools/Open Design Doc")]
    void OpenDesignDoc()
    {
        App::OpenURL("https://docs.google.com/document/d/your-doc-here");
    }

    [MainMenuItem("Tools/Rebuild Atlas")]
    void RebuildAtlas()
    {
        Debug::Log("Rebuilding atlas...");
        // ...run your tool: read assets, write files, call Shell::ExecuteCommand, etc.
    }
}
```

`Tools` becomes a top-level menu (or nests under an existing one), with **Open Design Doc** and **Rebuild Atlas** beneath it. This is the fastest way to wire a one-shot tool — an importer, a validator, a "download latest localizations" button — into the editor UI.

## Custom inspectors

There are two levels of control over how a component looks in the **Inspector**.

### 1. Decorate the fields (the quick way)

Most of the time you don't need a full custom inspector — you just want a field labelled, clamped or hidden. Annotate the fields of your `CometBehaviour` directly:

```angelscript
using namespace CometEngine;

class Enemy : CometBehaviour
{
    [Header("Stats")]
    [Range(1, 100)] int health = 50;
    [Tooltip("Seconds between attacks")] float attackCooldown = 1.5F;

    [Space]
    [Header("Visuals")]
    [PreviewTexture] Texture portrait;

    [HideInInspector] float internalTimer;   // still serialized, just not shown
    [ReadOnly] int spawnId;                   // shown, but greyed out
}
```

The field attributes:

| Attribute | Effect |
| --- | --- |
| `[Header("...")]` | A bold section label above the following field. |
| `[Tooltip("...")]` | Hover help on the field. |
| `[Range(min, max)]` | Draw a slider; `[Min(n)]` / `[Max(n)]` clamp one end. |
| `[Space]` | A vertical gap. |
| `[HideInInspector]` | Keep the field serialized but hide it from the Inspector. |
| `[ReadOnly]` | Show the value greyed-out and non-editable. |
| `[PreviewTexture]` | Draw a thumbnail for a `Texture` / `Sprite` field. |
| `[TreeNodeDefaultOpen]` | Start a nested object expanded. |
| `[AssetIcon]` | Use the referenced asset's icon. |

### 2. Draw the whole inspector yourself

When you want buttons, coloured text, live previews or conditional layout, take the inspector over completely. Put `[CustomInspector("TargetType")]` on an `EditorBehaviour` and implement `OnCustomInspector`:

```angelscript
using namespace CometEngine;
using namespace CometEditor;

[CustomInspector("Enemy")]
class EnemyInspector : EditorBehaviour
{
    void OnCustomInspector(Enemy target)
    {
        GUI::TextColored(Color::red, "Enemy - danger level " + target.health);

        GUI::ShowProperty("health");          // the default widget for one field
        GUI::ShowProperty("attackCooldown");

        if (GUI::Button("Kill"))
            target.health = 0;
        GUI::SameLine();
        if (GUI::Button("Full Heal"))
            target.health = 100;

        GUI::ShowTexture(target.portrait, Vector2(150, 100));
    }
}
```

- `[CustomInspector("Enemy")]` binds this drawer to the `Enemy` component by class name. Engine resource types work too — the built-in rule-tile editors use `[CustomInspector("CometEngine::Tilemaps::RuleTile")]`.
- `OnCustomInspector(Enemy target)` runs every frame the component is selected. `target` is the **live instance** — read and write its fields directly and the scene updates.
- `GUI::ShowProperty("name")` draws the default widget for a single field; `GUI::ShowAllProperties()` draws them all at once — a handy starting point you then add buttons around.

## The `GUI` API

Everything you draw — in an inspector or a window — goes through the immediate-mode **`GUI`** namespace. You call a widget **every frame**, and its return value *is* the interaction: `GUI::Button` returns `true` on the frame it's clicked, input widgets return the edited value.

```angelscript
GUI::Text("A plain label");
GUI::TextColored(Color::green, "A coloured one");

if (GUI::Button("Do it")) { /* clicked this frame */ }

// Input widgets take the current value and return the (possibly) edited one.
// Store that value in a member field so it survives to the next frame.
count   = GUI::InputInt("Count", count);
speed   = GUI::DragInt("Speed", speed, 0.1F);   // drag left/right to scrub
enabled = GUI::Checkbox("Enabled", enabled);

bool edited = false;
name = GUI::InputText("Name", name, edited, GUI::InputTextFlags::EnterToAccept);
if (edited) Debug::Log("Committed: " + name);

if (GUI::BeginCombo("Mode", mode, GUI::ComboFlags::HeightLargest))
{
    if (GUI::Selectable("Easy", mode == "Easy")) mode = "Easy";
    if (GUI::Selectable("Hard", mode == "Hard")) mode = "Hard";
    GUI::EndCombo();
}
```

A few things you'll reach for constantly:

- **Layout** — `GUI::SameLine()` keeps the next widget on the current row; `GUI::SetCursorPosX(x)` places it by hand.
- **IDs in loops** — when you draw the same label inside a loop, wrap each iteration in `GUI::PushIDNum(i)` / `GUI::PopID()` so every widget keeps a unique identity (otherwise they fight over one).
- **Inspector helpers** — `GUI::ShowProperty`, `GUI::ShowAllProperties`, `GUI::ShowTexture`, `GUI::ShowSprite`, and asset pickers like `GUI::ShowResourceProperty`.
- **Filtering** — a `GUI::TextFilter` gives you a search box that filters a list with `.Pass(text)`.

> [!TIP]
> Bracket a change with `GUI::SaveState()` right **before** you mutate the target, and the edit joins the editor's undo history — Ctrl+Z restores the previous value.

## Custom editor windows

For bigger tools — a level validator, an asset browser, a spawn-table editor — subclass **`EditorWindow`**. Its `OnGUI()` runs every frame the window is open, drawn with the same `GUI` API:

```angelscript
using namespace CometEngine;
using namespace CometEditor;

[MainMenuItemWindow("Tools/Spawn Editor", "Spawn Editor")]
class SpawnEditor : EditorWindow
{
    private array<string> entries = {"Goblin", "Slime", "Bat"};
    private string filter;

    void Awake()
    {
        saveChangesMessage = "Save changes to the spawn table?";
    }

    void OnGUI()
    {
        GUI::Text("Spawn table");
        filter = GUI::InputText("Filter", filter);
        GUI::TextFilter tf = GUI::TextFilter(filter);

        int toRemove = -1;
        for (uint i = 0; i < entries.length(); i++)
        {
            if (!tf.Pass(entries[i])) continue;

            GUI::PushIDNum(i);                 // unique id per row
            GUI::Text(entries[i]);
            GUI::SameLine();
            if (GUI::Button("Remove")) toRemove = int(i);
            GUI::PopID();
        }
        if (toRemove >= 0)                     // mutate after the loop, not during
        {
            entries.removeAt(toRemove);
            hasUnsavedChanges = true;
        }

        if (GUI::Button("Add Goblin"))
        {
            entries.insertLast("Goblin");
            hasUnsavedChanges = true;
        }
    }

    WindowConfig OnGetWindowConfig()
    {
        WindowConfig config;
        config.initialSize = Vector2i(360, 480);
        config.initialPositionType = WindowConfigPositionType::CENTERED;
        config.dockable = true;
        config.iconRaw = RawIcon::AddressBook;
        return config;
    }
}
```

### Opening a window

Two ways, and you'll often use both:

- **`[MainMenuItemWindow("Tools/Spawn Editor", "Spawn Editor")]`** on the class adds a menu-bar item that opens it. The second argument is the window title.
- **`EditorWindow::CreateOrShow("SpawnEditor", "Spawn Editor")`** opens (or focuses, if it's already open) the window by class name — call it from a `[MainMenuItem]`, a button in a custom inspector, anywhere.

### Configuring the window

`OnGetWindowConfig()` is optional and sets the window up the first time it appears. Beyond the fields above, `WindowConfig` also carries `initialPosition` (with `WindowConfigPositionType::CUSTOM`), `resizable`, `hasMenuBar`, `hasCloseButton`, `hasTitleBar`, `canCollapse` and more. `iconRaw` takes a `RawIcon::` name for the tab icon.

### A menu bar inside your window

Set `hasMenuBar` and draw one at the top of `OnGUI` with the menu widgets:

```angelscript
if (GUI::BeginMenuBar())
{
    if (GUI::BeginMenu("File"))
    {
        if (GUI::MenuItem("Save"))  Save();
        if (GUI::MenuItem("Close")) Close();
        GUI::EndMenu();
    }
    GUI::EndMenuBar();
}
```

### Unsaved changes

Set `hasUnsavedChanges = true` whenever the user edits something. If they try to close the window with unsaved work, the editor shows a confirmation using your `saveChangesMessage`, then calls **`OnSaveChanges()`** or **`OnDiscardChanges()`** so you can react:

```angelscript
void OnSaveChanges()    { WriteTableToDisk(); hasUnsavedChanges = false; }
void OnDiscardChanges() { ReloadTableFromDisk(); }
```

Windows also expose `Focus()`, `Show()`, `Hide()`, `Close()`, and read-only state like `isDocked`, `isFocused`, `isHovered` and `isVisible` — handy when one tool drives another.

## Custom asset types on the Create menu

`[AssetMenu("Display Name", "Path/In/Create/Menu")]` on a `CometObject` script adds an entry to the Project panel's **Create** menu, so you (and your team) can make instances of your own data types right in the editor:

```angelscript
using namespace CometEngine;

[AssetMenu("Dialogue Table", "Gameplay/Dialogue Table")]
class DialogueTable : CometObject
{
    array<string> speakers;
    array<string> lines;
}
```

Now **Create → Gameplay → Dialogue Table** drops a new `DialogueTable` asset into the project, editable in the Inspector — and skinnable with a `[CustomInspector("DialogueTable")]` of its own.

## Where to go next

Editor tooling compounds. A `[CustomInspector]` with a **Bake** button, an `EditorWindow` that lists every broken reference in your scenes, a `[MainMenuItem]` that kicks off your [export pipeline](/tutorials/build-and-patches) — each one shaves minutes off every day. And because it all lives in an `Editor/` folder, none of it ships in the game: it exists purely to make *building* the game faster.
