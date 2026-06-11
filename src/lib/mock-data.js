// Demo data shown while Supabase is not configured yet (see MARKETPLACE_SETUP.md).
// Shapes mirror exactly what the Supabase queries return (snake_case columns,
// embedded `profiles` object) so the pages work identically in both modes.

function placeholder(text, bg, fg = '#ffffff', w = 640, h = 360) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">` +
    `<rect width="100%" height="100%" fill="${bg}"/>` +
    `<text x="50%" y="50%" fill="${fg}" font-family="Arial, sans-serif" font-size="${Math.round(h / 9)}" font-weight="bold" text-anchor="middle" dominant-baseline="middle">${text}</text>` +
    `</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const DEMO_AUTHOR = { display_name: 'Demo Publisher', avatar_url: placeholder('DP', '#ff8c00', '#fff', 96, 96) };

export const MOCK_PACKAGES = [
  {
    id: 'mock-1',
    owner_id: 'demo-user',
    slug: 'comet-particles-pro',
    name: 'Comet Particles Pro',
    summary: 'Advanced particle system presets: fire, smoke, magic, rain and 40+ ready-to-use effects.',
    description_md: `# Comet Particles Pro\n\nA collection of **40+ production-ready particle effects** for Comet Engine.\n\n## Features\n\n- Fire, smoke, explosions and sparks\n- Weather: rain, snow, fog\n- Magic and sci-fi effects\n- Fully tweakable from the editor\n\n## Usage\n\nExtract the zip into your project's \`RuntimeAssets\` folder and load any effect with \`LoadResource\`.\n\n> This is **demo data** — connect Supabase to see real packages.`,
    category: 'Tools',
    tags: ['particles', 'vfx', 'effects'],
    license: 'MIT',
    homepage_url: 'https://www.cometengine.org',
    repo_url: 'https://github.com/OriolCS2/CometEngine',
    min_engine_version: '2.1',
    icon_url: placeholder('PP', '#e25822', '#fff', 128, 128),
    screenshots: [
      placeholder('Fire FX', '#7a2410'),
      placeholder('Rain FX', '#1e3a5f'),
      placeholder('Magic FX', '#4a1e5f'),
    ],
    status: 'published',
    latest_version: '2.1.0',
    download_count: 12473,
    created_at: '2026-01-12T10:00:00Z',
    updated_at: '2026-05-28T16:30:00Z',
    profiles: DEMO_AUTHOR,
  },
  {
    id: 'mock-2',
    owner_id: 'demo-user',
    slug: 'pixel-ui-kit',
    name: 'Pixel UI Kit',
    summary: 'Complete retro pixel-art UI pack: buttons, panels, health bars, icons and 9-slice frames.',
    description_md: `# Pixel UI Kit\n\nEverything you need to build a **retro game UI**: buttons, sliders, panels, inventory frames and 200+ icons.\n\n- 16x16 and 32x32 variants\n- 9-slice ready frames\n- Light and dark themes`,
    category: 'UI',
    tags: ['ui', 'pixel-art', '2d'],
    license: 'CC0-1.0',
    homepage_url: '',
    repo_url: '',
    min_engine_version: '2.0',
    icon_url: placeholder('UI', '#2a7a4b', '#fff', 128, 128),
    screenshots: [placeholder('UI Pack', '#1d4d31'), placeholder('Icons', '#28543c')],
    status: 'published',
    latest_version: '1.3.2',
    download_count: 8231,
    created_at: '2026-02-02T09:00:00Z',
    updated_at: '2026-04-15T11:00:00Z',
    profiles: DEMO_AUTHOR,
  },
  {
    id: 'mock-3',
    owner_id: 'demo-user-2',
    slug: 'chiptune-audio-pack',
    name: 'Chiptune Audio Pack',
    summary: '80 looping chiptune music tracks and 150 retro SFX, ready to drop into any Comet project.',
    description_md: `# Chiptune Audio Pack\n\n80 looping tracks + 150 SFX in OGG format.\n\n## Contents\n\n- Battle, exploration and menu themes\n- Jump, coin, hit, explosion SFX\n- All loops seamless`,
    category: 'Audio',
    tags: ['music', 'sfx', 'chiptune'],
    license: 'CC0-1.0',
    homepage_url: '',
    repo_url: '',
    min_engine_version: '2.0',
    icon_url: placeholder('♪', '#5f4ae2', '#fff', 128, 128),
    screenshots: [placeholder('Audio Pack', '#2e2470')],
    status: 'published',
    latest_version: '1.0.1',
    download_count: 4502,
    created_at: '2026-03-20T18:00:00Z',
    updated_at: '2026-03-25T18:00:00Z',
    profiles: { display_name: 'Retro Sounds', avatar_url: placeholder('RS', '#5f4ae2', '#fff', 96, 96) },
  },
  {
    id: 'mock-4',
    owner_id: 'demo-user',
    slug: 'platformer-template',
    name: 'Platformer Template',
    summary: 'Full platformer starter project: player controller, enemies, checkpoints, camera and levels.',
    description_md: `# Platformer Template\n\nA complete starter project to kickstart your platformer:\n\n- Smooth player controller (coyote time, jump buffering)\n- Patrolling and flying enemies\n- Checkpoints and level transitions\n- Camera follow with look-ahead`,
    category: 'Templates',
    tags: ['template', 'platformer', 'starter'],
    license: 'MIT',
    homepage_url: '',
    repo_url: '',
    min_engine_version: '2.1',
    icon_url: placeholder('PT', '#c2274b', '#fff', 128, 128),
    screenshots: [placeholder('Level 1', '#5f1426'), placeholder('Editor view', '#46101d')],
    status: 'published',
    latest_version: '1.1.0',
    download_count: 6817,
    created_at: '2026-04-01T12:00:00Z',
    updated_at: '2026-06-01T09:00:00Z',
    profiles: DEMO_AUTHOR,
  },
];

export const MOCK_VERSIONS = {
  'mock-1': [
    {
      id: 'mv-1-3', package_id: 'mock-1', version: '2.1.0', zip_path: '#', zip_size: 18200000,
      download_count: 3120, created_at: '2026-05-28T16:30:00Z',
      changelog_md: `## 2.1.0\n\n- **New:** 8 sci-fi effects (lasers, warp, shields)\n- Improved smoke performance by 30%\n- Fixed flickering on the rain preset`,
    },
    {
      id: 'mv-1-2', package_id: 'mock-1', version: '2.0.0', zip_path: '#', zip_size: 16100000,
      download_count: 6200, created_at: '2026-03-10T10:00:00Z',
      changelog_md: `## 2.0.0\n\n- Reworked all presets for Comet Engine 2.1\n- **Breaking:** renamed effect files to kebab-case`,
    },
    {
      id: 'mv-1-1', package_id: 'mock-1', version: '1.0.0', zip_path: '#', zip_size: 9400000,
      download_count: 3153, created_at: '2026-01-12T10:00:00Z',
      changelog_md: `## 1.0.0\n\nInitial release with 25 effects.`,
    },
  ],
  'mock-2': [
    {
      id: 'mv-2-2', package_id: 'mock-2', version: '1.3.2', zip_path: '#', zip_size: 5200000,
      download_count: 4100, created_at: '2026-04-15T11:00:00Z',
      changelog_md: `## 1.3.2\n\n- Fixed transparent pixels on dark theme panels\n- Added 12 new inventory icons`,
    },
    {
      id: 'mv-2-1', package_id: 'mock-2', version: '1.0.0', zip_path: '#', zip_size: 4100000,
      download_count: 4131, created_at: '2026-02-02T09:00:00Z',
      changelog_md: `## 1.0.0\n\nInitial release.`,
    },
  ],
  'mock-3': [
    {
      id: 'mv-3-2', package_id: 'mock-3', version: '1.0.1', zip_path: '#', zip_size: 22800000,
      download_count: 2300, created_at: '2026-03-25T18:00:00Z',
      changelog_md: `## 1.0.1\n\n- Fixed loop point on "Cave Theme"\n- Normalized SFX volume`,
    },
    {
      id: 'mv-3-1', package_id: 'mock-3', version: '1.0.0', zip_path: '#', zip_size: 22700000,
      download_count: 2202, created_at: '2026-03-20T18:00:00Z',
      changelog_md: `## 1.0.0\n\nInitial release.`,
    },
  ],
  'mock-4': [
    {
      id: 'mv-4-2', package_id: 'mock-4', version: '1.1.0', zip_path: '#', zip_size: 12500000,
      download_count: 3400, created_at: '2026-06-01T09:00:00Z',
      changelog_md: `## 1.1.0\n\n- Added flying enemy type\n- Camera look-ahead is now configurable\n- Fixed double-jump triggering on slopes`,
    },
    {
      id: 'mv-4-1', package_id: 'mock-4', version: '1.0.0', zip_path: '#', zip_size: 11900000,
      download_count: 3417, created_at: '2026-04-01T12:00:00Z',
      changelog_md: `## 1.0.0\n\nInitial release.`,
    },
  ],
};
