const PREFIX_CORE_KEY = "__modPrefixCore";
const PREFIX_QUEUE_KEY = "__modPrefixPendingPacks";

let fieldSynergyHost = null;

const PREFIX_DEFAULTS = [
  {
    name: "Angelic",
    cssClass: "mod-angelic",
    weight: 1,
    effects: { off: 0.08, mid: 0.06, def: 0.04 },
    labelBackground: "linear-gradient(90deg,#ffe68f,#ffb347)",
    labelColor: "#232018",
    glow: "0 0 34px 8px rgba(255,240,180,.85)"
  },
  {
    name: "Demonic",
    cssClass: "mod-demonic",
    weight: 1,
    effects: { off: 0.1, mid: 0.02, def: -0.04 },
    labelBackground: "linear-gradient(90deg,#5a0000,#ff2b2b)",
    labelColor: "#ffffff",
    glow: "0 0 36px 10px rgba(255,40,40,.85)"
  },
  {
    name: "Ethereal",
    cssClass: "mod-ethereal",
    weight: 1,
    effects: { off: 0.02, mid: 0.08, def: 0.04 },
    labelBackground: "linear-gradient(90deg,#75e5ff,#908dff)",
    labelColor: "#ffffff",
    glow: "0 0 36px 10px rgba(160,180,255,.85)"
  },
  {
    name: "Cursed",
    cssClass: "mod-cursed",
    weight: 1,
    effects: { off: -0.04, mid: 0, def: 0.12 },
    labelBackground: "linear-gradient(90deg,#161616,#4a4a4a)",
    labelColor: "#f4f4f4",
    glow: "0 0 36px 10px rgba(150,0,255,.75)"
  },
  {
    name: "Mythic",
    cssClass: "mod-mythic",
    weight: 1,
    effects: { off: 0.12, mid: 0.12, def: 0.12 },
    labelBackground: "linear-gradient(90deg,#ffe9ff,#a978ff)",
    labelColor: "#2b103a",
    glow: "0 0 42px 12px rgba(175,120,255,.9)"
  },
  {
    name: "Arcane",
    cssClass: "mod-arcane",
    weight: 2,
    effects: { off: 0.03, mid: 0.07, def: 0.04 },
    labelBackground: "linear-gradient(90deg,#3f2b96,#a8c0ff)",
    labelColor: "#f7f9ff",
    glow: "0 0 32px 9px rgba(100,120,255,.85)"
  },
  {
    name: "Savage",
    cssClass: "mod-savage",
    weight: 2,
    effects: { off: 0.14, mid: -0.01, def: -0.02 },
    labelBackground: "linear-gradient(90deg,#7a0b00,#ff6f3c)",
    labelColor: "#fff3e6",
    glow: "0 0 36px 10px rgba(255,105,60,.75)"
  },
  {
    name: "Juggernaut",
    cssClass: "mod-juggernaut",
    weight: 1,
    effects: { off: 0.1, mid: 0.05, def: 0.06 },
    labelBackground: "linear-gradient(90deg,#2f4858,#46b5d1)",
    labelColor: "#e9fcff",
    glow: "0 0 38px 11px rgba(70,181,209,.85)"
  },
  {
    name: "Frostbound",
    cssClass: "mod-frostbound",
    weight: 2,
    effects: { off: 0.02, mid: 0.03, def: 0.09 },
    labelBackground: "linear-gradient(90deg,#9ddfff,#3f9cd6)",
    labelColor: "#063452",
    glow: "0 0 40px 11px rgba(125,205,255,.8)"
  },
  {
    name: "Stormborn",
    cssClass: "mod-stormborn",
    weight: 3,
    effects: { off: 0.08, mid: 0.06, def: -0.01 },
    labelBackground: "linear-gradient(90deg,#00416a,#e4e5e6)",
    labelColor: "#f2fbff",
    glow: "0 0 38px 10px rgba(0,100,180,.8)"
  },
  {
    name: "Verdant",
    cssClass: "mod-verdant",
    weight: 5,
    effects: { off: 0.02, mid: 0.02, def: 0.02 },
    labelBackground: "linear-gradient(90deg,#145a32,#6ab04c)",
    labelColor: "#e8ffe1",
    glow: "0 0 28px 8px rgba(80,200,120,.75)"
  },
  {
    name: "Phantom",
    cssClass: "mod-phantom",
    weight: 2,
    effects: { off: -0.01, mid: 0.04, def: 0.08 },
    labelBackground: "linear-gradient(90deg,#4b4b92,#151530)",
    labelColor: "#dce5ff",
    glow: "0 0 34px 9px rgba(90,90,180,.8)"
  },
  {
    name: "Infernal",
    cssClass: "mod-infernal",
    weight: 1,
    effects: { off: 0.13, mid: 0.02, def: -0.06 },
    labelBackground: "linear-gradient(90deg,#8a0000,#ff8a00)",
    labelColor: "#fff5e6",
    glow: "0 0 42px 12px rgba(255,90,0,.85)"
  },
  {
    name: "Gilded",
    cssClass: "mod-gilded",
    weight: 4,
    effects: { off: 0.05, mid: 0.05, def: 0.02 },
    labelBackground: "linear-gradient(90deg,#c79081,#dfa579)",
    labelColor: "#2e1a09",
    glow: "0 0 30px 8px rgba(220,170,120,.75)"
  },
  {
    name: "Chronoshift",
    cssClass: "mod-chronoshift",
    weight: 1,
    effects: { off: 0.04, mid: 0.11, def: 0.05 },
    labelBackground: "linear-gradient(90deg,#0f2027,#2c5364)",
    labelColor: "#e0f5ff",
    glow: "0 0 36px 10px rgba(45,120,150,.8)"
  },
  {
    name: "Rogue",
    cssClass: "mod-rogue",
    weight: 4,
    effects: { off: 0.06, mid: 0.01, def: -0.03 },
    labelBackground: "linear-gradient(90deg,#1a1a1a,#434343)",
    labelColor: "#f5f5f5",
    glow: "0 0 28px 8px rgba(60,60,60,.75)"
  },
  {
    name: "Stonewall",
    cssClass: "mod-stonewall",
    weight: 3,
    effects: { off: -0.02, mid: 0.03, def: 0.14 },
    labelBackground: "linear-gradient(90deg,#5f5f5f,#a9a9a9)",
    labelColor: "#1e1e1e",
    glow: "0 0 34px 9px rgba(120,120,120,.85)"
  },
  {
    name: "Mirage",
    cssClass: "mod-mirage",
    weight: 2,
    effects: { off: 0.01, mid: 0.07, def: 0.05 },
    labelBackground: "linear-gradient(90deg,#f6d365,#fda085)",
    labelColor: "#4b250c",
    glow: "0 0 32px 9px rgba(250,170,110,.8)"
  },
  {
    name: "Thunderstrike",
    cssClass: "mod-thunderstrike",
    weight: 2,
    effects: { off: 0.11, mid: 0.04, def: -0.03 },
    labelBackground: "linear-gradient(90deg,#141e30,#243b55)",
    labelColor: "#f2f8ff",
    glow: "0 0 38px 10px rgba(40,80,140,.85)"
  },
  {
    name: "Nebula",
    cssClass: "mod-nebula",
    weight: 2,
    effects: { off: 0.05, mid: 0.06, def: 0.04 },
    labelBackground: "linear-gradient(90deg,#1b1b3a,#6f86d6)",
    labelColor: "#dde4ff",
    glow: "0 0 36px 10px rgba(130,150,220,.85)"
  },
  {
    name: "Abyssal",
    cssClass: "mod-abyssal",
    weight: 1,
    effects: { off: 0.02, mid: -0.02, def: 0.13 },
    labelBackground: "linear-gradient(90deg,#000428,#004e92)",
    labelColor: "#d4ecff",
    glow: "0 0 40px 11px rgba(0,80,150,.8)"
  },
  {
    name: "Blitz",
    cssClass: "mod-blitz",
    weight: 3,
    effects: { off: 0.09, mid: 0.03, def: -0.02 },
    labelBackground: "linear-gradient(90deg,#1f4037,#99f2c8)",
    labelColor: "#07281f",
    glow: "0 0 34px 9px rgba(70,200,160,.8)"
  },
  {
    name: "Vanguard",
    cssClass: "mod-vanguard",
    weight: 3,
    effects: { off: 0.06, mid: 0.05, def: 0.06 },
    labelBackground: "linear-gradient(90deg,#42275a,#734b6d)",
    labelColor: "#f5e9ff",
    glow: "0 0 36px 10px rgba(110,70,130,.85)"
  },
  {
    name: "Harmony",
    cssClass: "mod-harmony",
    weight: 4,
    effects: { off: 0.03, mid: 0.05, def: 0.04 },
    labelBackground: "linear-gradient(90deg,#00b09b,#96c93d)",
    labelColor: "#f1fff0",
    glow: "0 0 30px 8px rgba(90,200,120,.75)"
  },
  {
    name: "Radiant",
    cssClass: "mod-radiant",
    weight: 2,
    effects: { off: 0.07, mid: 0.08, def: 0.05 },
    labelBackground: "linear-gradient(90deg,#fff6b7,#f6416c)",
    labelColor: "#351a2a",
    glow: "0 0 34px 9px rgba(255,140,120,.85)"
  },
  {
    name: "Obsidian",
    cssClass: "mod-obsidian",
    weight: 2,
    effects: { off: 0.03, mid: -0.01, def: 0.15 },
    labelBackground: "linear-gradient(90deg,#2c3e50,#000000)",
    labelColor: "#d8e6ff",
    glow: "0 0 38px 10px rgba(30,45,60,.85)"
  },
  {
    name: "Tempest",
    cssClass: "mod-tempest",
    weight: 1,
    effects: { off: 0.12, mid: 0.09, def: -0.02 },
    labelBackground: "linear-gradient(90deg,#000c40,#00b4db)",
    labelColor: "#e8fbff",
    glow: "0 0 40px 11px rgba(0,140,200,.85)"
  },
  {
    name: "Sentinel",
    cssClass: "mod-sentinel",
    weight: 3,
    effects: { off: 0.02, mid: 0.05, def: 0.1 },
    labelBackground: "linear-gradient(90deg,#0f3443,#34e89e)",
    labelColor: "#eafff5",
    glow: "0 0 32px 9px rgba(70,220,160,.8)"
  },
  {
    name: "Trickster",
    cssClass: "mod-trickster",
    weight: 3,
    effects: { off: 0.05, mid: 0.04, def: -0.04 },
    labelBackground: "linear-gradient(90deg,#41295a,#f3904f)",
    labelColor: "#ffece0",
    glow: "0 0 30px 8px rgba(230,120,150,.8)"
  },
  {
    name: "Titanforged",
    cssClass: "mod-titanforged",
    weight: 1,
    effects: { off: 0.14, mid: 0.08, def: 0.08 },
    labelBackground: "linear-gradient(90deg,#232526,#414345)",
    labelColor: "#f3f5f6",
    glow: "0 0 42px 12px rgba(110,120,130,.85)"
  },
  {
    name: "Shadowveil",
    cssClass: "mod-shadowveil",
    weight: 2,
    effects: { off: 0.01, mid: 0.06, def: 0.07 },
    labelBackground: "linear-gradient(90deg,#1f1c2c,#928dab)",
    labelColor: "#f0ecff",
    glow: "0 0 32px 9px rgba(90,80,140,.85)"
  },
  {
    name: "Solarflare",
    cssClass: "mod-solarflare",
    weight: 1,
    effects: { off: 0.16, mid: 0.04, def: -0.03 },
    labelBackground: "linear-gradient(90deg,#f83600,#f9d423)",
    labelColor: "#311603",
    glow: "0 0 40px 11px rgba(255,120,40,.85)"
  },
  {
    name: "Lunarblessed",
    cssClass: "mod-lunarblessed",
    weight: 2,
    effects: { off: 0.04, mid: 0.1, def: 0.03 },
    labelBackground: "linear-gradient(90deg,#141e30,#243b55)",
    labelColor: "#eaf1ff",
    glow: "0 0 36px 10px rgba(70,110,170,.85)"
  },
  {
    name: "Avalanche",
    cssClass: "mod-avalanche",
    weight: 2,
    effects: { off: -0.01, mid: 0.03, def: 0.12 },
    labelBackground: "linear-gradient(90deg,#83a4d4,#b6fbff)",
    labelColor: "#08304a",
    glow: "0 0 34px 9px rgba(150,210,255,.8)"
  },
  {
    name: "Emberheart",
    cssClass: "mod-emberheart",
    weight: 3,
    effects: { off: 0.1, mid: 0.02, def: 0 },
    labelBackground: "linear-gradient(90deg,#c31432,#240b36)",
    labelColor: "#ffe4f0",
    glow: "0 0 32px 9px rgba(200,40,80,.85)"
  },
  {
    name: "Ironclad",
    cssClass: "mod-ironclad",
    weight: 4,
    effects: { off: 0.03, mid: 0.02, def: 0.08 },
    labelBackground: "linear-gradient(90deg,#606c88,#3f4c6b)",
    labelColor: "#eef3ff",
    glow: "0 0 30px 8px rgba(90,110,150,.8)"
  },
  {
    name: "Oracle",
    cssClass: "mod-oracle",
    weight: 2,
    effects: { off: 0.02, mid: 0.09, def: 0.02 },
    labelBackground: "linear-gradient(90deg,#11998e,#38ef7d)",
    labelColor: "#e9fff4",
    glow: "0 0 34px 9px rgba(80,230,160,.8)"
  },
  {
    name: "Riftwalker",
    cssClass: "mod-riftwalker",
    weight: 1,
    effects: { off: 0.06, mid: 0.12, def: 0.04 },
    labelBackground: "linear-gradient(90deg,#412a7a,#6fd6ff)",
    labelColor: "#f1f8ff",
    glow: "0 0 38px 10px rgba(120,150,255,.85)"
  },
  {
    name: "Stormguard",
    cssClass: "mod-stormguard",
    weight: 3,
    effects: { off: 0.07, mid: 0.05, def: 0.07 },
    labelBackground: "linear-gradient(90deg,#0f2027,#203a43)",
    labelColor: "#e4f5ff",
    glow: "0 0 32px 9px rgba(40,90,130,.85)"
  },
  {
    name: "Bloodlust",
    cssClass: "mod-bloodlust",
    weight: 1,
    effects: { off: 0.18, mid: -0.02, def: -0.05 },
    labelBackground: "linear-gradient(90deg,#8a0000,#330000)",
    labelColor: "#ffd6d6",
    glow: "0 0 42px 12px rgba(160,20,20,.85)"
  },
  {
    name: "Seraphic",
    cssClass: "mod-seraphic",
    weight: 1,
    effects: { off: 0.09, mid: 0.1, def: 0.09 },
    labelBackground: "linear-gradient(90deg,#fbd3e9,#bb377d)",
    labelColor: "#371125",
    glow: "0 0 40px 11px rgba(240,140,190,.85)"
  },
  {
    name: "Warden",
    cssClass: "mod-warden",
    weight: 3,
    effects: { off: 0, mid: 0.04, def: 0.11 },
    labelBackground: "linear-gradient(90deg,#0b486b,#f56217)",
    labelColor: "#ffeade",
    glow: "0 0 34px 9px rgba(120,90,60,.8)"
  },
  {
    name: "Catalyst",
    cssClass: "mod-catalyst",
    weight: 2,
    effects: { off: 0.08, mid: 0.07, def: 0.02 },
    labelBackground: "linear-gradient(90deg,#ec008c,#fc6767)",
    labelColor: "#330018",
    glow: "0 0 34px 9px rgba(255,110,150,.8)"
  },
  {
    name: "Hexbound",
    cssClass: "mod-hexbound",
    weight: 2,
    effects: { off: 0.04, mid: -0.03, def: 0.13 },
    labelBackground: "linear-gradient(90deg,#355c7d,#6c5b7b)",
    labelColor: "#f0e8ff",
    glow: "0 0 36px 10px rgba(120,90,150,.85)"
  },
  {
    name: "Skybreaker",
    cssClass: "mod-skybreaker",
    weight: 1,
    effects: { off: 0.15, mid: 0.09, def: 0.01 },
    labelBackground: "linear-gradient(90deg,#4facfe,#00f2fe)",
    labelColor: "#062b3b",
    glow: "0 0 40px 11px rgba(80,210,255,.85)"
  },
  {
    name: "Geomancer",
    cssClass: "mod-geomancer",
    weight: 3,
    effects: { off: 0.01, mid: 0.04, def: 0.11 },
    labelBackground: "linear-gradient(90deg,#2d572c,#9be15d)",
    labelColor: "#0d2205",
    glow: "0 0 32px 9px rgba(90,200,90,.8)"
  },
  {
    name: "Whisperwind",
    cssClass: "mod-whisperwind",
    weight: 4,
    effects: { off: -0.01, mid: 0.08, def: 0.03 },
    labelBackground: "linear-gradient(90deg,#d7d2cc,#304352)",
    labelColor: "#26303b",
    glow: "0 0 30px 8px rgba(80,100,120,.75)"
  },
  {
    name: "Berserker",
    cssClass: "mod-berserker",
    weight: 2,
    effects: { off: 0.17, mid: -0.03, def: -0.05 },
    labelBackground: "linear-gradient(90deg,#8e0e00,#1f1c18)",
    labelColor: "#ffe0d5",
    glow: "0 0 42px 12px rgba(200,40,0,.85)"
  },
  {
    name: "Aurora",
    cssClass: "mod-aurora",
    weight: 3,
    effects: { off: 0.05, mid: 0.07, def: 0.05 },
    labelBackground: "linear-gradient(90deg,#8ec5fc,#e0c3fc)",
    labelColor: "#2c1b3a",
    glow: "0 0 36px 10px rgba(180,150,255,.85)"
  },
  {
    name: "Tidecaller",
    cssClass: "mod-tidecaller",
    weight: 3,
    effects: { off: 0.02, mid: 0.05, def: 0.09 },
    labelBackground: "linear-gradient(90deg,#2b5876,#4e4376)",
    labelColor: "#eef3ff",
    glow: "0 0 34px 9px rgba(70,110,190,.85)"
  },
  {
    name: "Starforged",
    cssClass: "mod-starforged",
    weight: 1,
    effects: { off: 0.11, mid: 0.11, def: 0.11 },
    labelBackground: "linear-gradient(90deg,#f7971e,#ffd200)",
    labelColor: "#2d1a05",
    glow: "0 0 44px 12px rgba(255,180,70,.9)"
  },
  {
    name: "Runebound",
    cssClass: "mod-runebound",
    weight: 2,
    effects: { off: 0.04, mid: 0.09, def: 0.02 },
    labelBackground: "linear-gradient(90deg,#1a2980,#26d0ce)",
    labelColor: "#e5fcff",
    glow: "0 0 36px 10px rgba(40,200,200,.85)"
  },
  {
    name: "Nightfall",
    cssClass: "mod-nightfall",
    weight: 2,
    effects: { off: 0.02, mid: 0.06, def: 0.09 },
    labelBackground: "linear-gradient(90deg,#141e30,#2a4858)",
    labelColor: "#d9ecff",
    glow: "0 0 34px 9px rgba(60,80,110,.85)"
  },
  {
    name: "Sunseeker",
    cssClass: "mod-sunseeker",
    weight: 4,
    effects: { off: 0.06, mid: 0.05, def: 0.03 },
    labelBackground: "linear-gradient(90deg,#f3904f,#ffb56b)",
    labelColor: "#4a2d11",
    glow: "0 0 34px 9px rgba(255,160,80,.85)"
  },
  {
    name: "Galeheart",
    cssClass: "mod-galeheart",
    weight: 3,
    effects: { off: 0.1, mid: 0.04, def: 0 },
    labelBackground: "linear-gradient(90deg,#00b4db,#0083b0)",
    labelColor: "#e8fbff",
    glow: "0 0 32px 9px rgba(70,170,210,.85)"
  },
  {
    name: "Bastion",
    cssClass: "mod-bastion",
    weight: 2,
    effects: { off: 0, mid: 0.03, def: 0.14 },
    labelBackground: "linear-gradient(90deg,#5a3f37,#2c7744)",
    labelColor: "#f2efe4",
    glow: "0 0 32px 9px rgba(120,140,90,.8)"
  },
  {
    name: "Wildbloom",
    cssClass: "mod-wildbloom",
    weight: 5,
    effects: { off: 0.03, mid: 0.03, def: 0.01 },
    labelBackground: "linear-gradient(90deg,#56ab2f,#a8e063)",
    labelColor: "#13320a",
    glow: "0 0 28px 8px rgba(120,220,120,.75)"
  },
  {
    name: "Emberstorm",
    cssClass: "mod-emberstorm",
    weight: 2,
    effects: { off: 0.12, mid: 0.06, def: -0.01 },
    labelBackground: "linear-gradient(90deg,#f12711,#f5af19)",
    labelColor: "#3b0c02",
    glow: "0 0 36px 10px rgba(255,120,40,.85)"
  },
  {
    name: "Spellweaver",
    cssClass: "mod-spellweaver",
    weight: 2,
    effects: { off: 0.01, mid: 0.12, def: 0.03 },
    labelBackground: "linear-gradient(90deg,#5433ff,#20bdff)",
    labelColor: "#f0f9ff",
    glow: "0 0 36px 10px rgba(90,150,255,.85)"
  },
  {
    name: "Ironroot",
    cssClass: "mod-ironroot",
    weight: 3,
    effects: { off: -0.01, mid: 0.04, def: 0.12 },
    labelBackground: "linear-gradient(90deg,#3c3b3f,#605c3c)",
    labelColor: "#f1f0df",
    glow: "0 0 30px 8px rgba(120,110,70,.8)"
  },
  {
    name: "Voidtouched",
    cssClass: "mod-voidtouched",
    weight: 1,
    effects: { off: -0.05, mid: 0.09, def: 0.14 },
    labelBackground: "linear-gradient(90deg,#0f0c29,#302b63,#24243e)",
    labelColor: "#d9d3ff",
    glow: "0 0 40px 11px rgba(90,70,160,.85)"
  },
  {
    name: "Horizonwalker",
    cssClass: "mod-horizonwalker",
    weight: 2,
    effects: { off: 0.07, mid: 0.08, def: 0.02 },
    labelBackground: "linear-gradient(90deg,#ff512f,#dd2476)",
    labelColor: "#2d0615",
    glow: "0 0 36px 10px rgba(255,90,150,.85)"
  },
  {
    name: "Glacial",
    cssClass: "mod-glacial",
    weight: 3,
    effects: { off: -0.02, mid: 0.04, def: 0.12 },
    labelBackground: "linear-gradient(90deg,#a1c4fd,#c2e9fb)",
    labelColor: "#0a1f3a",
    glow: "0 0 34px 9px rgba(130,180,255,.85)"
  },
  {
    name: "Dreadnought",
    cssClass: "mod-dreadnought",
    weight: 1,
    effects: { off: 0.13, mid: 0.07, def: 0.09 },
    labelBackground: "linear-gradient(90deg,#1e3c72,#2a5298)",
    labelColor: "#e7efff",
    glow: "0 0 40px 11px rgba(70,110,200,.85)"
  },
  {
    name: "None",
    cssClass: "",
    weight: 2,
    effects: { off: 0, mid: 0, def: 0 }
  }
];

const UTILITY_TOKENS = new Set(["UTIL", "UTILITY", "UTL"]);

function getPrefixRoot() {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof window !== "undefined") return window;
  if (typeof self !== "undefined") return self;
  return {};
}

function ensurePrefixCore() {
  const root = getPrefixRoot();
  if (root[PREFIX_CORE_KEY]) {
    return root[PREFIX_CORE_KEY];
  }

  function normalisePrefix(raw) {
    if (!raw || !raw.name) return null;
    const effects = raw.effects || {};
    return {
      name: String(raw.name),
      cssClass: raw.cssClass ? String(raw.cssClass) : "",
      weight: Number.isFinite(raw.weight) && raw.weight > 0 ? Math.round(raw.weight) : 1,
      effects: {
        off: Number.isFinite(effects.off) ? effects.off : 0,
        mid: Number.isFinite(effects.mid) ? effects.mid : 0,
        def: Number.isFinite(effects.def) ? effects.def : 0
      },
      labelBackground: raw.labelBackground ? String(raw.labelBackground) : null,
      labelColor: raw.labelColor ? String(raw.labelColor) : null,
      glow: raw.glow ? String(raw.glow) : null,
      accentColor: raw.accentColor ? String(raw.accentColor) : null
    };
  }

  function loadAssignments(storeKey, prefixByName) {
    if (typeof root.localStorage === "undefined") return {};
    try {
      const raw = root.localStorage.getItem(storeKey);
      if (!raw) return {};
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return {};
      return Object.fromEntries(
        Object.entries(parsed).filter(([, value]) => value && prefixByName[value])
      );
    } catch (err) {
      console.warn("[mod] failed to load prefix assignments", err);
      return {};
    }
  }

  const configSource = Array.isArray(root.MOD_PREFIX_CONFIG) && root.MOD_PREFIX_CONFIG.length
    ? root.MOD_PREFIX_CONFIG
    : PREFIX_DEFAULTS;
  const prefixes = configSource.map(normalisePrefix).filter(Boolean);
  if (!prefixes.length) {
    console.warn("[mod] prefix configuration empty, aborting");
    const emptyCore = {
      prefixes: [],
      cssClasses: [],
      assignments: {},
      ensurePrefixFor: () => null,
      collectAliasKeys: () => [],
      applyPack: pack => pack,
      persistAssignments: () => {}
    };
    root[PREFIX_CORE_KEY] = emptyCore;
    return emptyCore;
  }

  const prefixByName = Object.fromEntries(prefixes.map(p => [p.name, p]));
  const cssClasses = prefixes.map(p => p.cssClass).filter(Boolean);
  const weightedPool = prefixes.flatMap(p => Array.from({ length: p.weight }, () => p.name));
  const STORE_KEY = "mod.prefix.map.v5";
  let assignmentsDirty = false;
  const prefixAssignments = loadAssignments(STORE_KEY, prefixByName);

  function persistAssignments() {
    if (!assignmentsDirty || typeof root.localStorage === "undefined") return;
    try {
      root.localStorage.setItem(STORE_KEY, JSON.stringify(prefixAssignments));
      assignmentsDirty = false;
    } catch (err) {
      console.warn("[mod] failed to save prefix assignments", err);
    }
  }

  function getStoredPrefixName(key) {
    if (!key) return null;
    const name = prefixAssignments[key];
    if (name && prefixByName[name]) {
      return name;
    }
    if (name) {
      delete prefixAssignments[key];
      assignmentsDirty = true;
    }
    return null;
  }

  function setStoredPrefixName(key, name) {
    if (!key || !name || !prefixByName[name]) return;
    if (prefixAssignments[key] === name) return;
    prefixAssignments[key] = name;
    assignmentsDirty = true;
  }

  function syncAliasAssignments(prefixName, keys) {
    keys.forEach(key => setStoredPrefixName(key, prefixName));
  }

  function ensurePrefixFor(key, aliasKeys) {
    if (!key) return null;
    const keys = new Set([key]);
    if (Array.isArray(aliasKeys)) {
      aliasKeys.forEach(alias => alias && keys.add(alias));
    }
    let name = null;
    for (const candidate of keys) {
      const stored = getStoredPrefixName(candidate);
      if (stored) {
        name = stored;
        break;
      }
    }
    if (!name) {
      const fallbackName = prefixes[0].name;
      const randomName = weightedPool[Math.floor(Math.random() * weightedPool.length)] || fallbackName;
      name = prefixByName[randomName] ? randomName : fallbackName;
    }
    syncAliasAssignments(name, Array.from(keys));
    return prefixByName[name];
  }

  function normaliseName(value) {
    return value ? String(value).trim().replace(/\s+/g, " ").toUpperCase() : "";
  }

  function collectAliasKeys(pid, player) {
    const aliases = new Set();
    if (player && typeof player === "object") {
      if (player.pid && player.pid !== pid) {
        aliases.add(`pid:${player.pid}`);
      }
      if (player.bookId) {
        aliases.add(`book:${player.bookId}`);
      }
      const pushName = (first, last) => {
        const firstNorm = normaliseName(first);
        const lastNorm = normaliseName(last);
        const combined = [firstNorm, lastNorm].filter(Boolean).join(" ").trim();
        if (combined) {
          aliases.add(`name:${combined}`);
        }
      };
      if (player.firstname || player.surname) {
        pushName(player.firstname, player.surname);
        pushName(player.firstname, null);
        pushName(null, player.surname);
      }
      if (player.name) {
        const combined = normaliseName(player.name);
        if (combined) {
          aliases.add(`name:${combined}`);
        }
      }
      if (player.displayName) {
        const combined = normaliseName(player.displayName);
        if (combined) {
          aliases.add(`name:${combined}`);
        }
      }
      if (player.nickname) {
        const combined = normaliseName(player.nickname);
        if (combined) {
          aliases.add(`name:${combined}`);
        }
      }
      if (player.firstname_fic_m || player.surname_fic) {
        pushName(player.firstname_fic_m, player.surname_fic);
      }
      if (player.firstname_fic_f || player.surname_fic) {
        pushName(player.firstname_fic_f, player.surname_fic);
      }
    }
    if (pid) {
      aliases.add(`pid:${pid}`);
    }
    return Array.from(aliases);
  }

  function roundStat(value) {
    return Math.round(value * 100) / 100;
  }

  function roundAwesomeness(value) {
    return Math.max(1, Math.round(value));
  }

  function applyStatEffects(player, prefix) {
    if (!player || !prefix || prefix.name === "None") return;
    if (player.__modPrefixAdjusted) return;
    const eff = prefix.effects || {};
    const statKeys = ["off", "mid", "def"];
    let originalTotals = 0;
    let adjustedTotals = 0;

    const applyToYear = year => {
      if (!year || typeof year !== "object") return;
      let yearOriginal = 0;
      let yearAdjusted = 0;
      statKeys.forEach(stat => {
        const base = year[stat];
        if (typeof base === "number" && Number.isFinite(base)) {
          const multiplier = 1 + (eff[stat] || 0);
          const next = roundStat(base * multiplier);
          yearOriginal += base;
          yearAdjusted += next;
          year[stat] = next;
        }
      });
      if (typeof year.total === "number" && yearAdjusted > 0) {
        year.total = roundStat(yearAdjusted);
      }
      if (typeof year.awesomeness === "number" && yearOriginal > 0) {
        const ratio = yearAdjusted > 0 ? yearAdjusted / yearOriginal : 0;
        year.awesomeness = roundAwesomeness(year.awesomeness * (ratio || 1));
      } else if (typeof year.awesomeness === "number" && yearAdjusted > 0) {
        year.awesomeness = roundAwesomeness(year.total * 120);
      }
      originalTotals += yearOriginal;
      adjustedTotals += yearAdjusted;
    };

    if (player.career && typeof player.career === "object") {
      Object.values(player.career).forEach(applyToYear);
    }
    if (player.best && typeof player.best === "object") {
      applyToYear(player.best);
    }

    const averageMultiplier =
      originalTotals > 0 && adjustedTotals > 0
        ? adjustedTotals / originalTotals
        : ["off", "mid", "def"].reduce((acc, stat) => acc + (1 + (eff[stat] || 0)), 0) / 3;
    if (typeof player.rating === "number" && Number.isFinite(player.rating) && averageMultiplier > 0) {
      player.rating = Math.max(1, Math.round(player.rating * averageMultiplier));
    }
    player.__modPrefixName = prefix.name;
    player.__modPrefixAdjusted = true;
  }

  function applyPack(pack) {
    if (!pack || typeof pack !== "object") return pack;
    Object.entries(pack).forEach(([pid, player]) => {
      const key = `pid:${pid}`;
      const aliasKeys = collectAliasKeys(pid, player);
      const prefix = ensurePrefixFor(key, aliasKeys);
      if (prefix) {
        applyStatEffects(player, prefix);
      }
    });
    persistAssignments();
    return pack;
  }

  const core = {
    prefixes,
    cssClasses,
    assignments: prefixAssignments,
    ensurePrefixFor,
    collectAliasKeys,
    applyPack,
    persistAssignments,
    applyStatEffects,
    normaliseName,
    get assignmentsDirty() {
      return assignmentsDirty;
    }
  };

  root[PREFIX_CORE_KEY] = core;
  root.__prefixAssignments = prefixAssignments;
  root.__prefixConfig = prefixes;
  if (typeof root.__resetPrefixCore !== "function") {
    root.__resetPrefixCore = function () {
      delete root[PREFIX_CORE_KEY];
      return ensurePrefixCore();
    };
  }
  return core;
}

function queuePackForPrefixes(pack) {
  if (!pack || typeof pack !== "object") return pack;
  const core = ensurePrefixCore();
  if (!core || !core.prefixes || !core.prefixes.length) {
    return pack;
  }
  try {
    return core.applyPack(pack);
  } catch (err) {
    console.warn("[mod] failed to apply prefixes immediately", err);
    return pack;
  }
}

  function stripBOM(s) {
    return s && s.charCodeAt(0) === 0xfeff ? s.slice(1) : s;
  }
      const x = new XMLHttpRequest();
      x.open("GET", url, false);
      if (x.status && (x.status < 200 || x.status >= 300)) {
        throw new Error("HTTP " + x.status);
      }
      if (data && data.book && typeof data.book === "object") {
        data = data.book;
      }
      data = queuePackForPrefixes(data);
      console.log("[mod] XHR loaded", url, "count", Object.keys(data || {}).length);
  const u1 = new URL(`./assets/data/players-${era}.json`, location.href).href;
  const u2 = new URL(`./data/players-${era}.json`, location.href).href;

// ---------- Prefix Mod v5 (randomised startup assignments + stat injection) ----------
    if (![...document.querySelectorAll('link[rel="stylesheet"]')].some(link => link.href.endsWith('prefix-cards.css'))) {
  const core = ensurePrefixCore();
  const PREFIXES = core && Array.isArray(core.prefixes) ? core.prefixes : [];
  if (!core || !PREFIXES.length) {
    console.warn('[mod] prefix configuration empty, aborting');
    return;
  }

  const cssClasses = Array.isArray(core.cssClasses) ? core.cssClasses : [];
  const prefixAssignments = core.assignments || {};
  const ensurePrefixFor = typeof core.ensurePrefixFor === 'function' ? core.ensurePrefixFor : () => null;
  const persistAssignments = typeof core.persistAssignments === 'function' ? core.persistAssignments : () => {};

  const PLAYERS_URL = /players-\d{4}s\.json/i;
  const applyPrefixesToPack = pack => core.applyPack(pack);

  if (typeof window !== 'undefined') {
    window.MOD_PREFIX_APPLY_PACK = applyPrefixesToPack;
    if (!Array.isArray(window[PREFIX_QUEUE_KEY])) {
      window[PREFIX_QUEUE_KEY] = [];
    }
  }

  if (window.fetch) {
    const originalFetch = window.fetch.bind(window);
    window.fetch = function patchedFetch(input, init) {
      const fetchPromise = originalFetch(input, init);
      return fetchPromise.then(response => {
        try {
          const requestUrl =
            (typeof input === 'string' ? input : input && input.url) || response.url;
          if (!requestUrl || !PLAYERS_URL.test(requestUrl)) {
            return response;
          }
          return response
            .clone()
            .text()
            .then(raw => {
              try {
                const parsed = JSON.parse(raw);
                const patched = applyPrefixesToPack(parsed);
                const body = JSON.stringify(patched);
                const headers = new Headers(response.headers);
                if (!headers.has('content-type')) {
                  headers.set('content-type', 'application/json');
                }
                const newResponse = new Response(body, {
                  status: response.status,
                  statusText: response.statusText,
                  headers
                });
                try {
                  Object.defineProperty(newResponse, 'url', {
                    value: response.url,
                    configurable: true
                  });
                } catch (defineErr) {
                  console.warn('[mod] unable to copy response url', defineErr);
                }
                return newResponse;
              } catch (err) {
                console.warn('[mod] failed to parse player data', err);
                return response;
              }
            });
        } catch (err) {
          console.warn('[mod] fetch prefix hook failed', err);
          return response;
        }
      });
    };
  }

  if (window.Response && Response.prototype && Response.prototype.json) {
    const originalJson = Response.prototype.json;
    Response.prototype.json = function patchedJson() {
      return originalJson.call(this).then(payload => {
        try {
          if (this.url && PLAYERS_URL.test(this.url)) {
            return applyPrefixesToPack(payload);
          }
        } catch (err) {
          console.warn('[mod] failed to augment player data', err);
        }
        return payload;
      });
    };
  }

  const SYNERGY_RULES = (() => {
    const defaultRequired = 2;
    const combos = [
      { key: 'eclipse', name: 'Eclipse', line: 'off', bonus: 5.4, requiredEach: 2, description: 'Holy power surges, unstable synergy.', prefixes: ['Angelic', 'Demonic'] },
      { key: 'heavens-fall', name: "Heaven's Fall", line: 'off', bonus: 5.0, requiredEach: 2, description: 'Purity corrupted, turning defense into offense.', prefixes: ['Angelic', 'Cursed'] },
      { key: 'divine-requiem', name: 'Divine Requiem', line: 'mid', bonus: 4.9, requiredEach: 2, description: 'Ultimate light aura grants a morale swell.', prefixes: ['Angelic', 'Seraphic'] },
      { key: 'hellchain', name: 'Hellchain', line: 'def', bonus: 4.6, requiredEach: 2, description: 'Burning retaliation whenever the line is attacked.', prefixes: ['Demonic', 'Infernal'] },
      { key: 'abyssal-choir', name: 'Abyssal Choir', line: 'def', bonus: 4.4, requiredEach: 2, description: 'A fear aura that lowers enemy resolve.', prefixes: ['Demonic', 'Ethereal'] },
      { key: 'judgment-day', name: 'Judgment Day', line: 'off', bonus: 5.3, requiredEach: 2, description: 'Massive clash bonus when light and void collide.', prefixes: ['Seraphic', 'Abyssal'] },
      { key: 'overcharge', name: 'Overcharge', line: 'off', bonus: 5.2, requiredEach: 2, description: 'Stormborn and Thunderstrike ignite rapid attacks.', prefixes: ['Stormborn', 'Thunderstrike'] },
      { key: 'absolute-zero', name: 'Absolute Zero', line: 'def', bonus: 4.7, requiredEach: 2, description: 'Glacial calm and Frostbound chill freeze advances.', prefixes: ['Glacial', 'Frostbound'] },
      { key: 'kindling', name: 'Kindling', line: 'off', bonus: 5.1, requiredEach: 2, description: 'Emberheart and Emberstorm stack flame power.', prefixes: ['Emberheart', 'Emberstorm'] },
      { key: 'eruption', name: 'Eruption', line: 'off', bonus: 5.6, requiredEach: 2, description: 'Infernal fury and Savage ferocity risk critical bursts.', prefixes: ['Infernal', 'Savage'] },
      { key: 'cyclone-wall', name: 'Cyclone Wall', line: 'def', bonus: 4.8, requiredEach: 2, description: 'Tempest offense rotates into Stormguard shields.', prefixes: ['Tempest', 'Stormguard'] },
      { key: 'magnetar-pulse', name: 'Magnetar Pulse', line: 'off', bonus: 5.5, requiredEach: 2, description: 'Starforged focus with Stormborn arcs for AoE bursts.', prefixes: ['Starforged', 'Stormborn'] },
      { key: 'solar-eclipse', name: 'Solar Eclipse', line: 'mid', bonus: 4.8, requiredEach: 2, description: 'Solarflare and Lunarblessed sync with time of day.', prefixes: ['Solarflare', 'Lunarblessed'] },
      { key: 'verdant-rebirth', name: 'Verdant Rebirth', line: 'def', bonus: 4.3, requiredEach: 2, description: 'Verdant growth and Wildbloom renewal grant regeneration.', prefixes: ['Verdant', 'Wildbloom'] },
      { key: 'stonegrowth', name: 'Stonegrowth', line: 'def', bonus: 4.9, requiredEach: 2, description: 'Ironroot steadiness and Geomancer shaping scale defense.', prefixes: ['Ironroot', 'Geomancer'] },
      { key: 'bastion-bloom', name: 'Bastion Bloom', line: 'def', bonus: 4.5, requiredEach: 2, description: 'Bastion fortifications meld with Verdant healing.', prefixes: ['Bastion', 'Verdant'] },
      { key: 'ironwood-legion', name: 'Ironwood Legion', line: 'def', bonus: 4.6, requiredEach: 2, description: 'Ironclad walls entwine with Wildbloom resilience.', prefixes: ['Ironclad', 'Wildbloom'] },
      { key: 'earthen-warden', name: 'Earthen Warden', line: 'def', bonus: 4.7, requiredEach: 2, description: 'Warden vigilance and Ironroot bark reduce damage.', prefixes: ['Warden', 'Ironroot'] },
      { key: 'thornfield-pact', name: 'Thornfield Pact', line: 'def', bonus: 4.5, requiredEach: 2, description: 'Verdant thorns and Savage rage reflect blows.', prefixes: ['Verdant', 'Savage'] },
      { key: 'elderseal', name: 'Elderseal', line: 'mid', bonus: 5.0, requiredEach: 2, description: 'Arcane wisdom and Mythic power amplify all synergies.', prefixes: ['Arcane', 'Mythic'] },
      { key: 'runic-loop', name: 'Runic Loop', line: 'mid', bonus: 4.6, requiredEach: 2, description: 'Arcane sigils and Spellweaver threads enable chain casts.', prefixes: ['Arcane', 'Spellweaver'] },
      { key: 'foresight', name: 'Foresight', line: 'mid', bonus: 4.9, requiredEach: 2, description: 'Chronoshift control with Oracle vision anticipates plays.', prefixes: ['Chronoshift', 'Oracle'] },
      { key: 'event-horizon', name: 'Event Horizon', line: 'mid', bonus: 4.7, requiredEach: 2, description: 'Riftwalker gravity couples with Nebula drift to snare foes.', prefixes: ['Riftwalker', 'Nebula'] },
      { key: 'void-resonance', name: 'Void Resonance', line: 'def', bonus: 4.8, requiredEach: 2, description: 'Voidtouched whispers and Abyssal tides slow enemies.', prefixes: ['Voidtouched', 'Abyssal'] },
      { key: 'celestial-convergence', name: 'Celestial Convergence', line: 'mid', bonus: 5.1, requiredEach: 2, description: 'Starforged zeal with Aurora hope boosts morale.', prefixes: ['Starforged', 'Aurora'] },
      { key: 'chrono-forge', name: 'Chrono Forge', line: 'off', bonus: 5.6, requiredEach: 2, description: 'Chronoshift timing with Titanforged heft lands double strikes.', prefixes: ['Chronoshift', 'Titanforged'] },
      { key: 'umbral-veil', name: 'Umbral Veil', line: 'def', bonus: 4.6, requiredEach: 2, description: 'Phantom blur and Shadowveil dusk hide defenders.', prefixes: ['Phantom', 'Shadowveil'] },
      { key: 'silent-image', name: 'Silent Image', line: 'mid', bonus: 4.5, requiredEach: 2, description: 'Mirage decoys and Whisperwind misdirection block the first hit.', prefixes: ['Mirage', 'Whisperwind'] },
      { key: 'dirty-deeds', name: 'Dirty Deeds', line: 'off', bonus: 5.0, requiredEach: 2, description: 'Rogue cunning with Trickster flair steals critical openings.', prefixes: ['Rogue', 'Trickster'] },
      { key: 'cursed-reflection', name: 'Cursed Reflection', line: 'def', bonus: 4.4, requiredEach: 2, description: 'Cursed mirrors and Trickster traps counterattack damage.', prefixes: ['Cursed', 'Trickster'] },
      { key: 'midnight-pact', name: 'Midnight Pact', line: 'mid', bonus: 4.7, requiredEach: 2, description: 'Shadowveil shade and Nightfall chill thrive under pressure.', prefixes: ['Shadowveil', 'Nightfall'] },
      { key: 'ghost-circuit', name: 'Ghost Circuit', line: 'mid', bonus: 4.8, requiredEach: 2, description: 'Phantom slips combined with Arcane jumps boost dodge.', prefixes: ['Phantom', 'Arcane'] },
      { key: 'irresistible-force', name: 'Irresistible Force', line: 'off', bonus: 5.7, requiredEach: 2, description: 'Juggernaut drive with Titanforged might scales with damage taken.', prefixes: ['Juggernaut', 'Titanforged'] },
      { key: 'wardlocked', name: 'Wardlocked', line: 'def', bonus: 4.9, requiredEach: 2, description: 'Ironclad plates and Bastion wards grant a flat team shield.', prefixes: ['Ironclad', 'Bastion'] },
      { key: 'watchkeepers', name: 'Watchkeepers', line: 'def', bonus: 4.8, requiredEach: 2, description: 'Warden guardians and Sentinel focus protect allies.', prefixes: ['Warden', 'Sentinel'] },
      { key: 'dreadsteel-march', name: 'Dreadsteel March', line: 'off', bonus: 5.5, requiredEach: 2, description: 'Dreadnought momentum with Ironclad armor grinds ahead.', prefixes: ['Dreadnought', 'Ironclad'] },
      { key: 'corebreaker', name: 'Corebreaker', line: 'off', bonus: 5.6, requiredEach: 2, description: 'Titanforged force and Catalyst spikes shatter buffs.', prefixes: ['Titanforged', 'Catalyst'] },
      { key: 'siegeborn', name: 'Siegeborn', line: 'off', bonus: 5.3, requiredEach: 2, description: 'Juggernaut heft with Stonewall patience forms an unstoppable push.', prefixes: ['Juggernaut', 'Stonewall'] },
      { key: 'blood-oath', name: 'Blood Oath', line: 'off', bonus: 5.4, requiredEach: 2, description: 'Berserker fury and Savage hunger grow with every fall.', prefixes: ['Berserker', 'Savage'] },
      { key: 'battle-trance', name: 'Battle Trance', line: 'mid', bonus: 4.9, requiredEach: 2, description: 'Berserker rhythm steadied by Harmony sustains offense.', prefixes: ['Berserker', 'Harmony'] },
      { key: 'rage-engine', name: 'Rage Engine', line: 'off', bonus: 5.5, requiredEach: 2, description: 'Bloodlust frenzy and Juggernaut drive erupt at low health.', prefixes: ['Bloodlust', 'Juggernaut'] },
      { key: 'burning-heart', name: 'Burning Heart', line: 'off', bonus: 5.2, requiredEach: 2, description: 'Emberheart passion with Bloodlust fervor fuels offense.', prefixes: ['Emberheart', 'Bloodlust'] },
      { key: 'primal-storm', name: 'Primal Storm', line: 'off', bonus: 5.3, requiredEach: 2, description: 'Savage instincts and Tempest chaos unleash wild crits.', prefixes: ['Savage', 'Tempest'] },
      { key: 'dawn-chorus', name: 'Dawn Chorus', line: 'mid', bonus: 4.7, requiredEach: 2, description: 'Sunseeker warmth with Radiant song uplifts morale.', prefixes: ['Sunseeker', 'Radiant'] },
      { key: 'skydrift', name: 'Skydrift', line: 'off', bonus: 5.0, requiredEach: 2, description: 'Skybreaker agility with Horizonwalker poise boosts accuracy.', prefixes: ['Skybreaker', 'Horizonwalker'] },
      { key: 'solarwind', name: 'Solarwind', line: 'off', bonus: 5.2, requiredEach: 2, description: 'Solarflare energy carried by Stormborn gusts builds momentum.', prefixes: ['Solarflare', 'Stormborn'] },
      { key: 'heavens-gate', name: "Heaven's Gate", line: 'def', bonus: 4.6, requiredEach: 2, description: 'Angelic wards with Skybreaker watch provide ranged cover.', prefixes: ['Angelic', 'Skybreaker'] },
      { key: 'lunar-echo', name: 'Lunar Echo', line: 'mid', bonus: 4.6, requiredEach: 2, description: 'Lunarblessed calm and Whisperwind grace blend regen with evasion.', prefixes: ['Lunarblessed', 'Whisperwind'] },
      { key: 'tidal-rhythm', name: 'Tidal Rhythm', line: 'mid', bonus: 4.8, requiredEach: 2, description: 'Tidecaller flow with Harmony balance self-heals the line.', prefixes: ['Tidecaller', 'Harmony'] },
      { key: 'frozen-current', name: 'Frozen Current', line: 'def', bonus: 4.7, requiredEach: 2, description: 'Frostbound chill and Tidecaller pull create control-heavy slows.', prefixes: ['Frostbound', 'Tidecaller'] },
      { key: 'maelstrom', name: 'Maelstrom', line: 'mid', bonus: 4.8, requiredEach: 2, description: 'Tidecaller undertow with Tempest surge deals area damage.', prefixes: ['Tidecaller', 'Tempest'] },
      { key: 'abyss-current', name: 'Abyss Current', line: 'def', bonus: 4.5, requiredEach: 2, description: 'Abyssal depths and Tidecaller flow grant lifesteal shields.', prefixes: ['Abyssal', 'Tidecaller'] },
      { key: 'crashing-silence', name: 'Crashing Silence', line: 'mid', bonus: 4.7, requiredEach: 2, description: 'Whisperwind calm and Tidecaller rhythm unleash delayed bursts.', prefixes: ['Whisperwind', 'Tidecaller'] },
      { key: 'quantum-lattice', name: 'Quantum Lattice', line: 'mid', bonus: 5.0, requiredEach: 2, description: 'Mythic insight interlocks with Chronoshift timing for precision.', prefixes: ['Mythic', 'Chronoshift'] },
      { key: 'blazing-phalanx', name: 'Blazing Phalanx', line: 'def', bonus: 4.8, requiredEach: 2, description: 'Bastion walls wreathed in Emberstorm fire absorb assaults.', prefixes: ['Bastion', 'Emberstorm'] },
      { key: 'gale-resonance', name: 'Gale Resonance', line: 'off', bonus: 5.1, requiredEach: 2, description: 'Whisperwind tempo amplifies Stormborn strikes.', prefixes: ['Whisperwind', 'Stormborn'] },
      { key: 'twilight-guard', name: 'Twilight Guard', line: 'def', bonus: 4.6, requiredEach: 2, description: 'Nightfall vigilance with Sentinel focus shields the backline.', prefixes: ['Nightfall', 'Sentinel'] }
    ].map((combo, index) => ({ ...combo, order: index }));

    const byLine = { off: [], mid: [], def: [] };
    combos.forEach(combo => {
      const key = combo.line && byLine[combo.line] ? combo.line : 'off';
      byLine[key].push(combo);
    });

    return { defaultRequired, combos, byLine };
  })();

  const LINE_TOKEN_SETS = {
    off: new Set([
      'FWD',
      'FOR',
      'FORWARD',
      'FORWARDS',
      'ATTACKER',
      'ATTACKERS',
      'ATT',
      'ATTACK',
      'GOAL',
      'STR',
      'STRIKER',
      'STRIKERS',
      'SCORER',
      'HF',
      'HFF',
      'FF',
      'FP',
      'CHF',
      'CHFWD',
      'HALFFORWARD',
      'POCKET',
      'FRONT',
      'WFP',
      'INSIDE50'
    ]),
    mid: new Set([
      'MID',
      'MIDFIELD',
      'MIDFIELDER',
      'MIDFIELDERS',
      'CENTRE',
      'CENTER',
      'CEN',
      'ONBALL',
      'ONB',
      'WING',
      'WINGMAN',
      'ROVER',
      'ROV',
      'RUC',
      'RUCK',
      'RK',
      'RR',
      'MR',
      'INSIDE',
      'OUTSIDE'
    ]),
    def: new Set([
      'DEF',
      'DEFENCE',
      'DEFENSE',
      'BACK',
      'BACKS',
      'BACKMAN',
      'BACKMEN',
      'FULLBACK',
      'HALFBACK',
      'HB',
      'HBF',
      'FB',
      'BP',
      'BPF',
      'KPD',
      'KEYDEF',
      'DEFENDER',
      'DEFENDERS',
      'STOP',
      'STOPPER',
      'SWEEP',
      'SWEEPER',
      'INTERCEPT',
      'GUARD',
      'SHUTDOWN'
    ])
  function normaliseLineKey(value) {
    if (!value && value !== 0) return null;
    const key = String(value).trim().toLowerCase();
    if (!key) return null;
    if (key === 'off' || key === 'offense' || key === 'offence' || key === 'forward' || key === 'forwards') {
      return 'off';
    if (
      key === 'mid' ||
      key === 'midfield' ||
      key === 'midfielder' ||
      key === 'centre' ||
      key === 'center' ||
      key === 'ruck'
    ) {
      return 'mid';
    }
    if (key === 'def' || key === 'defence' || key === 'defense' || key === 'back' || key === 'backs') {
      return 'def';
    }
    return null;
  const LINE_HINT_ATTRS = [
    'data-line',
    'data-slot',
    'data-role',
    'data-position',
    'data-lane',
    'data-lanes',
    'data-band',
    'data-zone',
    'data-area',
    'data-group',
    'data-row',
    'data-column',
    'data-col',
    'data-side',
    'data-label'
  ];

  const LINE_CLASS_KEYWORD_PATTERN = /(forward|forw|attack|att|goal|strik|front|mid|wing|centr|ruck|rover|inside|outside|def|back|guard|stop|sweep|zone|lane|line|band|pocket|flank|grid|arc|bow)/i;

  function tokenizeLineHint(value) {
    if (!value) return [];
    return String(value)
      .replace(/[_/]+/g, ' ')
      .split(/\s+/)
      .map(part => part.replace(/[^a-z0-9]/gi, '').toUpperCase())
      .filter(Boolean);
  }

  function findAncestorDataAttribute(element, attr) {
    if (!element || !attr) return null;
    let node = element.parentElement;
    while (node && node !== document.documentElement) {
      if (typeof node.getAttribute === 'function') {
        const direct = node.getAttribute(attr);
        if (direct) return direct;
      }
      if (attr.startsWith('data-') && node.dataset) {
        const key = attr
          .slice(5)
          .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
        if (key && node.dataset[key]) {
          return node.dataset[key];
        }
      }
      node = node.parentElement;
    }
    return null;
  }

  function collectLineHints(cardEl) {
    const hints = [];
    if (!cardEl || cardEl.nodeType !== 1) return hints;

    const pushHint = (value, weight) => {
      if (!value) return;
      hints.push({ value, weight });
    };

    LINE_HINT_ATTRS.forEach(attr => {
      pushHint(findDataAttribute(cardEl, attr), 6);
      pushHint(findAncestorDataAttribute(cardEl, attr), 4);
    });

    if (cardEl.dataset) {
      Object.keys(cardEl.dataset).forEach(key => {
        if (/line|slot|role|position|lane|area|zone|side|band|tier|group|row|column|col/i.test(key)) {
          pushHint(cardEl.dataset[key], 5);
        }
      });
    }

    const vpEl = cardEl.querySelector('.card-vp');
    if (vpEl) {
      const vpClass = Array.from(vpEl.classList || []).find(cls => cls && cls.startsWith('card-vp-'));
      if (vpClass) {
        pushHint(vpClass.slice('card-vp-'.length), 4);
      }
      pushHint(vpEl.textContent, 3);
    }

    const slotLabel = cardEl.querySelector('[class*="slot" i], [class*="line" i]');
    if (slotLabel && slotLabel !== vpEl) {
      pushHint(slotLabel.textContent, 2.5);
    }

    let ancestor = cardEl.parentElement;
    let depth = 0;
    while (ancestor && ancestor !== document.documentElement && depth < 6) {
      if (ancestor.dataset) {
        Object.keys(ancestor.dataset).forEach(key => {
          if (/line|slot|role|position|lane|area|zone|side|band|tier|group|row|column|col/i.test(key)) {
            const value = ancestor.dataset[key];
            if (value) {
              pushHint(value, Math.max(3 - depth * 0.4, 1.5));
            }
          }
        });
      }
      LINE_HINT_ATTRS.forEach(attr => {
        const value = ancestor.getAttribute && ancestor.getAttribute(attr);
        if (value) {
          pushHint(value, Math.max(3 - depth * 0.4, 1.5));
        }
      });
      if (ancestor.classList && ancestor.classList.length) {
        ancestor.classList.forEach(cls => {
          if (LINE_CLASS_KEYWORD_PATTERN.test(cls)) {
            pushHint(cls, Math.max(2.2 - depth * 0.3, 1));
          }
        });
      }
      const aria = ancestor.getAttribute && ancestor.getAttribute('aria-label');
      if (aria) {
        pushHint(aria, Math.max(2.2 - depth * 0.3, 1));
      }
      ancestor = ancestor.parentElement;
      depth += 1;
    }

    return hints;
  }

  function resolveLineFromHints(hints) {
    if (!hints || !hints.length) return null;
    const scores = { off: 0, mid: 0, def: 0 };
    const counts = { off: 0, mid: 0, def: 0 };
    let utilityWeight = 0;

    hints.forEach(({ value, weight }) => {
      const tokens = tokenizeLineHint(value);
      if (!tokens.length) return;
      const applied = new Set();
      tokens.forEach(token => {
        if (UTILITY_TOKENS.has(token)) {
          utilityWeight = Math.max(utilityWeight, weight);
          return;
        }
        if (LINE_TOKEN_SETS.off.has(token)) {
          scores.off += weight;
          if (!applied.has('off')) counts.off += 1;
          applied.add('off');
        }
        if (LINE_TOKEN_SETS.mid.has(token)) {
          scores.mid += weight;
          if (!applied.has('mid')) counts.mid += 1;
          applied.add('mid');
        }
        if (LINE_TOKEN_SETS.def.has(token)) {
          scores.def += weight;
          if (!applied.has('def')) counts.def += 1;
          applied.add('def');
        }
      });
    });

    const entries = ['off', 'mid', 'def']
      .map(line => ({ line, score: scores[line], count: counts[line] }))
      .filter(item => item.score > 0);
    if (!entries.length) {
      return null;
    }

    entries.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      if (b.count !== a.count) return b.count - a.count;
      return 0;
    });

    const best = entries[0];
    const tied = entries.filter(entry => Math.abs(entry.score - best.score) < 0.01);
    if (tied.length > 1) {
      if (utilityWeight > 0) {
        const defEntry = tied.find(entry => entry.line === 'def');
        const offEntry = tied.find(entry => entry.line === 'off');
        if (defEntry && !offEntry) {
          return 'def';
        }
        if (offEntry && !defEntry) {
          return 'off';
        }
      }
      const priority = ['def', 'off', 'mid'];
      const prioritized = tied.sort((a, b) => priority.indexOf(a.line) - priority.indexOf(b.line));
      return prioritized[0].line;
    }

    return best.line;
  }

  const CONTEXT_LINEUP_KEYWORDS = [
    'pitch',
    'lineup',
    'play',
    'match',
    'field',
    'board',
    'ground',
    'team-board',
    'teamgrid',
    'team-grid',
    'teamboard',
    'team-slot',
    'teamcard',
    'gameboard',
    'formation',
    'lineupcard',
    'linegrid',
    'line-grid',
    'depthchart',
    'depth-chart',
    'lineboard'
  ];
  const CONTEXT_COLLECTION_KEYWORDS = ['deck', 'collection', 'modal', 'popup', 'market', 'shop', 'library'];

  function normaliseText(value) {
    return value ? String(value).trim().toUpperCase() : '';
  }

  function deriveCardLine(cardEl) {
    if (!cardEl || cardEl.nodeType !== 1) return null;
    const hints = collectLineHints(cardEl);
    const resolved = resolveLineFromHints(hints);
    if (resolved) return resolved;

    const vpEl = cardEl.querySelector('.card-vp');
    let code = '';
    if (vpEl) {
      const vpClasses = (vpEl.className || '').split(/\s+/);
      const matching = vpClasses.find(cls => cls && cls.startsWith('card-vp-'));
      if (matching) {
        code = matching.slice('card-vp-'.length);
      }
    }
    const probe = normaliseText(code) || normaliseText(vpEl ? vpEl.textContent : '');
    const tokens = tokenizeLineHint(probe);
    let fallback = null;
    tokens.forEach(token => {
      if (UTILITY_TOKENS.has(token)) return;
      if (!fallback && LINE_TOKEN_SETS.off.has(token)) {
        fallback = 'off';
      }
      if (!fallback && LINE_TOKEN_SETS.mid.has(token)) {
        fallback = 'mid';
      }
      if (!fallback && LINE_TOKEN_SETS.def.has(token)) {
        fallback = 'def';
      }
    });
    return fallback;
  }

  function inferCardContext(cardEl) {
    if (!cardEl || cardEl.nodeType !== 1) return 'unknown';
    if (
      cardEl.getAttribute('data-lineup') ||
      cardEl.getAttribute('data-slot') ||
      cardEl.dataset?.lineup ||
      cardEl.dataset?.slot ||
      findAncestorDataAttribute(cardEl, 'data-lineup') ||
      findAncestorDataAttribute(cardEl, 'data-slot') ||
      findAncestorDataAttribute(cardEl, 'data-formation') ||
      findAncestorDataAttribute(cardEl, 'data-zone')
    ) {
      return 'lineup';
    }
    let node = cardEl;
    while (node && node !== document.documentElement) {
      if (node.classList && node.classList.size) {
        const classList = Array.from(node.classList);
        if (classList.some(cls => CONTEXT_COLLECTION_KEYWORDS.some(keyword => cls.includes(keyword)))) {
          return 'collection';
        }
        if (classList.some(cls => CONTEXT_LINEUP_KEYWORDS.some(keyword => cls.includes(keyword)))) {
          return 'lineup';
        }
        if (classList.some(cls => cls.includes('oppo'))) {
          return 'opponent';
        }
      }
      node = node.parentElement;
    }
    return 'unknown';
  }

  function applyCardMetadata(cardEl) {
    if (!cardEl || cardEl.nodeType !== 1) return;
    const derivedLine = normaliseLineKey(deriveCardLine(cardEl));
    const slotLine = normaliseLineKey(cardEl.dataset ? cardEl.dataset.modPrefixSlotLine : null);
    const existingLine = normaliseLineKey(cardEl.dataset ? cardEl.dataset.modPrefixLine : null);
    const finalLine = derivedLine || slotLine || existingLine || null;
    if (finalLine) {
      cardEl.dataset.modPrefixLine = finalLine;
    } else {
      delete cardEl.dataset.modPrefixLine;
    }

    const context = inferCardContext(cardEl);
    if (context && context !== 'unknown') {
      cardEl.dataset.modPrefixContext = context;
      if (context !== 'lineup' && cardEl.dataset && cardEl.dataset.modPrefixSlotLine) {
        delete cardEl.dataset.modPrefixSlotLine;
      }
    } else if (cardEl.dataset && cardEl.dataset.modPrefixContext) {
      // Preserve an existing context (such as "lineup") when we can't infer a new one.
    } else if (cardEl.dataset) {
      delete cardEl.dataset.modPrefixContext;
    }
  }

  function extractColorToken(input) {
    if (!input) return null;
    const str = String(input);
    const match = str.match(/(rgba?\([^)]*\)|#(?:[0-9a-fA-F]{3,8}))/);
    return match ? match[1] : null;
  }

  function getAccentColor(prefix) {
    if (!prefix) return null;
    if (prefix.accentColor) {
      const explicit = extractColorToken(prefix.accentColor) || prefix.accentColor;
      if (explicit) return explicit;
    }
    const glowColor = extractColorToken(prefix.glow);
    if (glowColor) return glowColor;
    const bgColor = extractColorToken(prefix.labelBackground);
    if (bgColor) return bgColor;
    const textColor = extractColorToken(prefix.labelColor);
    if (textColor) return textColor;
    return null;
  }

  function decorateCard(cardEl, playerKey, prefix) {
    if (!cardEl) return;
    applyCardMetadata(cardEl);
    cardEl.querySelectorAll(':scope > .mod-prefix-box').forEach(node => node.remove());
    cardEl.classList.remove('mod-card-prefix', ...cssClasses);
    cardEl.style.removeProperty('--mod-prefix-glow');
    cardEl.style.removeProperty('--mod-prefix-outline');

    if (!prefix || prefix.name === 'None') {
      cardEl.dataset.modPrefixApplied = '1';
      cardEl.dataset.modPrefixKey = playerKey || '';
      cardEl.dataset.modPrefixName = '';
      delete cardEl.dataset.modPrefix;
      return;
    }
    if (prefix.cssClass) cardEl.classList.add(prefix.cssClass);

    box.dataset.type = prefix.name;
    box.textContent = prefix.name;
    if (prefix.labelBackground) {
      box.style.setProperty('--mod-prefix-bg', prefix.labelBackground);
    }
    if (prefix.labelColor) {
      box.style.setProperty('--mod-prefix-text', prefix.labelColor);
    }
    const accent = getAccentColor(prefix) || 'rgba(255,255,255,0.35)';
    const glowValue = prefix.glow ? prefix.glow : `0 0 36px 10px ${accent}`;
    cardEl.style.setProperty('--mod-prefix-glow', glowValue);
    cardEl.style.setProperty('--mod-prefix-outline', accent);

    cardEl.dataset.modPrefix = prefix.name;
    cardEl.dataset.modPrefixApplied = '1';
    cardEl.dataset.modPrefixKey = playerKey || '';
    cardEl.dataset.modPrefixName = prefix.name;
  function decorateDetail(detailEl, playerKey, prefix) {
    if (!detailEl) return;
    detailEl.querySelectorAll('.mod-prefix-detail').forEach(node => node.remove());
    detailEl.classList.remove('mod-card-prefix', ...cssClasses, 'mod-prefix-detail-active');
    detailEl.style.removeProperty('--mod-prefix-glow');
    detailEl.style.removeProperty('--mod-prefix-outline');
    detailEl.dataset.modPrefixApplied = '1';
    detailEl.dataset.modPrefixKey = playerKey || '';
    detailEl.dataset.modPrefixName = prefix && prefix.name ? prefix.name : '';
    detailEl.dataset.modPrefixContext = 'detail';

    if (!prefix || prefix.name === 'None') {
      delete detailEl.dataset.modPrefix;
      return;
    }

    detailEl.classList.add('mod-prefix-detail-active');
    if (prefix.cssClass) detailEl.classList.add(prefix.cssClass);
    const accent = getAccentColor(prefix) || 'rgba(255,255,255,0.35)';
    const glowValue = prefix.glow ? prefix.glow : `0 0 36px 10px ${accent}`;
    detailEl.style.setProperty('--mod-prefix-glow', glowValue);
    detailEl.style.setProperty('--mod-prefix-outline', accent);
    const holder = document.createElement('div');
    holder.className = 'mod-prefix-detail';
    holder.dataset.type = prefix.name;

    const chip = document.createElement('div');
    chip.className = 'mod-prefix-chip';
    chip.textContent = prefix.name;
    if (prefix.labelBackground) {
      chip.style.setProperty('--mod-prefix-bg', prefix.labelBackground);
    }
    if (prefix.labelColor) {
      chip.style.setProperty('--mod-prefix-text', prefix.labelColor);
    }
    holder.appendChild(chip);

    const positionEl = detailEl.querySelector('.card-vp');
    if (positionEl && positionEl.parentNode) {
      positionEl.insertAdjacentElement('afterend', holder);
    } else {
      detailEl.appendChild(holder);
    }
  }

  function findDataAttribute(element, attr) {
    if (!element || element.nodeType !== 1) return null;
    if (typeof element.getAttribute === 'function') {
      const direct = element.getAttribute(attr);
      if (direct) return direct;
    }
    if (attr.startsWith('data-') && element.dataset) {
      const key = attr
        .slice(5)
        .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
      if (key && element.dataset[key]) {
        return element.dataset[key];
      }
    }
    if (typeof element.querySelector === 'function') {
      const child = element.querySelector(`[${attr}]`);
      if (child) {
        const value = child.getAttribute(attr);
        if (value) return value;
      }
    }
    return null;
  }

  function extractCardKeys(cardEl) {
    if (!cardEl || cardEl.nodeType !== 1) return null;
    const aliasSet = new Set();
    const coreNormaliseName = typeof core.normaliseName === 'function' ? core.normaliseName : value =>
      (value ? String(value).trim().replace(/\s+/g, ' ').toUpperCase() : '');

    const storedKey = cardEl.dataset?.modPrefixKey;
    if (storedKey) {
      aliasSet.add(storedKey);
    }

    const pid = findDataAttribute(cardEl, 'data-pid');
    if (pid) {
      aliasSet.add(`pid:${pid}`);
    }

    const bookId = findDataAttribute(cardEl, 'data-bookid');
    if (bookId) {
      aliasSet.add(`book:${bookId}`);
    }
    if (nameNode) {
      const rawName = nameNode.textContent || '';
      const normalised = coreNormaliseName(rawName);
      if (normalised) {
        aliasSet.add(`name:${normalised}`);
      }
    }
    if (!aliasSet.size) {
      return null;
    }

    const ordered = Array.from(aliasSet);
    const primary = ordered.find(key => key.startsWith('pid:')) || ordered[0];
    const aliases = ordered.filter(key => key !== primary);
    return { key: primary, aliases };
  }

  function processCard(card) {
    if (!card || card.nodeType !== 1) return;
    if ('isConnected' in card && !card.isConnected) return;
    const identifiers = extractCardKeys(card);
    if (!identifiers) return;
    const { key, aliases } = identifiers;
    const prefix = ensurePrefixFor(key, aliases);
    const currentName = card.dataset.modPrefixName || '';
    const incomingName = prefix ? prefix.name : '';
    const isDetail = typeof card.matches === 'function' && card.matches('div.current-player-front');
    const expectedClass = prefix
      ? isDetail
        ? 'mod-prefix-detail-active'
        : 'mod-card-prefix'
      : null;
    const hasExpectedClass = expectedClass
      ? card.classList && card.classList.contains(expectedClass)
      : !prefix;
    const hasPrefixCssClass =
      !prefix || !prefix.cssClass || !card.classList
        ? true
        : card.classList.contains(prefix.cssClass);
    const classesCleanWhenNone =
      prefix || !card.classList
        ? true
        : !card.classList.contains('mod-card-prefix') &&
          !card.classList.contains('mod-prefix-detail-active');
    if (
      card.dataset.modPrefixKey === key &&
      currentName === incomingName &&
      hasExpectedClass &&
      hasPrefixCssClass &&
      classesCleanWhenNone
    ) {
      return;
    }
    if (isDetail) {
      decorateDetail(card, key, prefix);
    } else {
      decorateCard(card, key, prefix);
    }
  }

  const pendingCards = new Set();
  const pendingAnalyses = new Set();
  let flushScheduled = false;
  let analysisScheduled = false;
  const scheduleFrame =
    typeof window !== 'undefined' && typeof window.requestAnimationFrame === 'function'
      ? window.requestAnimationFrame.bind(window)
      : callback => setTimeout(callback, 16);

  function flushCards() {
    if (!pendingCards.size) return;
    const cards = Array.from(pendingCards);
    pendingCards.clear();
    cards.forEach(processCard);
    persistAssignments();
    scheduleAnalysisUpdate(true);
  }

  function getAnalysisType(element) {
    if (!element || element.nodeType !== 1) return null;
    if (element.dataset && element.dataset.modPrefixType) {
      return element.dataset.modPrefixType;
    }
    if (!element.classList) return null;
    if (element.classList.contains('analysis-off')) return 'off';
    if (element.classList.contains('analysis-mid')) return 'mid';
    if (element.classList.contains('analysis-def')) return 'def';
  function readAnalysisValue(element) {
    if (!element || element.nodeType !== 1) return null;
    const valueContainer = element.querySelector('.analysis-value');
    if (!valueContainer) return null;
    const integers = [];
    Array.from(valueContainer.children || []).forEach(child => {
      if (child && typeof child.matches === 'function' && child.matches('section[aria-label]')) {
        const label = child.getAttribute('aria-label') || '';
        const cleaned = label.replace(/[^0-9]/g, '');
        integers.push(cleaned || '0');
      }
    });
    let integerPart = integers.join('');
    if (!integerPart) integerPart = '0';
    const decimalContainer = valueContainer.querySelector('.analysis-value-decimal');
    let decimalPart = '';
    if (decimalContainer) {
      decimalContainer.querySelectorAll('section[aria-label]').forEach(dec => {
        const label = dec.getAttribute('aria-label') || '';
        const cleaned = label.replace(/[^0-9]/g, '');
        decimalPart += cleaned;
      });
    }
    const combined = decimalPart ? `${integerPart}.${decimalPart}` : integerPart;
    const value = parseFloat(combined);
    return Number.isNaN(value) ? null : value;
  }

  function processAnalysisElement(element) {
    if (!element || element.nodeType !== 1) return;
    const type = getAnalysisType(element);
    if (!type) return;
    element.dataset.modPrefixType = type;
    if (!element.dataset.modPrefixBaseValue) {
      const baseValue = readAnalysisValue(element);
      if (Number.isFinite(baseValue)) {
        element.dataset.modPrefixBaseValue = String(baseValue);
      }
    }
  }

  function classifySlotElement(slotEl) {
    const result = { line: null, bench: false };
    if (!slotEl || slotEl.nodeType !== 1) return result;
    const hints = [];
    const pushHint = (value, weight) => {
      if (!value) return;
      hints.push({ value, weight });
    };
    const classList = Array.from(slotEl.classList || []);
    classList.forEach(cls => {
      if (!cls) return;
      const upper = cls.toUpperCase();
      if (upper.includes('INTERCHANGE') || upper.includes('BENCH')) {
        result.bench = true;
      }
      if (cls.startsWith('position-row-')) {
        const token = cls.slice('position-row-'.length);
        pushHint(token, 2.4);
        const upperToken = token ? token.toUpperCase() : '';
        if (upperToken === 'I' || upperToken === 'T') {
          result.bench = true;
        }
      } else if (cls.startsWith('position-class-')) {
        pushHint(cls.slice('position-class-'.length), 2.6);
      } else if (cls.startsWith('position-')) {
        pushHint(cls.slice('position-'.length), 1.8);
      } else if (LINE_CLASS_KEYWORD_PATTERN.test(cls)) {
        pushHint(cls, 1.5);
      }
    });
    const slotName = slotEl.querySelector('.gameplan-slotname');
    if (slotName && slotName.textContent) {
      pushHint(slotName.textContent, 3.2);
    }
    slotEl.querySelectorAll('.gameplan-vps .card-vp').forEach(vp => {
      pushHint(vp.textContent, 2.8);
    });
    const bonus = slotEl.querySelector('.gameplan-slotbonus');
    if (bonus && bonus.textContent) {
      pushHint(bonus.textContent, 1.6);
    }
    const aria = slotEl.getAttribute && slotEl.getAttribute('aria-label');
    if (aria) {
      pushHint(aria, 1.4);
    }

    const resolved = resolveLineFromHints(hints);
    if (resolved) {
      result.line = resolved;
    } else if (hints.length) {
      const tokens = [];
      hints.forEach(({ value }) => {
        tokenizeLineHint(value).forEach(token => tokens.push(token));
      });
      for (const token of tokens) {
        if (!token || UTILITY_TOKENS.has(token)) continue;
        if (
          LINE_TOKEN_SETS.off.has(token) ||
          token === 'F'
        ) {
          result.line = 'off';
          break;
        }
        if (
          LINE_TOKEN_SETS.mid.has(token) ||
          /^(?:RK|R[0-9]+)$/.test(token) ||
          /^C[0-9]+$/.test(token) ||
          token === 'R' ||
          token === 'C'
        ) {
          result.line = 'mid';
          break;
        }
        if (
          LINE_TOKEN_SETS.def.has(token) ||
          /^H?B[0-9]*$/.test(token) ||
          /^CHB/.test(token) ||
          token === 'B'
        ) {
          result.line = 'def';
          break;
        }
        if (/^F[0-9]*$/.test(token) || /^HF[0-9]*$/.test(token) || /^CH?F/.test(token)) {
          result.line = 'off';
          break;
        }
      }
    }

    return result;
  }

  function collectFieldPlacements() {
    const field = document.querySelector('.board .field');
    if (!field) return [];
    const slotEls = Array.from(field.querySelectorAll('.slots .empty-position'));
    if (!slotEls.length) return [];
    const slots = slotEls.map((slotEl, index) => {
      const info = classifySlotElement(slotEl);
      const rect = typeof slotEl.getBoundingClientRect === 'function' ? slotEl.getBoundingClientRect() : null;
      return {
        el: slotEl,
        index,
        rect,
        line: info.line,
        bench: info.bench,
        used: false
      };
    });
    const activeSlots = slots.filter(slot => slot.rect && (slot.rect.width > 0 || slot.rect.height > 0));
    const placements = [];
    const positionEls = Array.from(field.querySelectorAll('.positions .position'));
    positionEls.forEach((positionEl, idx) => {
      const card = positionEl.querySelector('.card');
      if (!card) return;
      applyCardMetadata(card);
      const rect = typeof positionEl.getBoundingClientRect === 'function' ? positionEl.getBoundingClientRect() : null;
      let matchedSlot = null;
      let bestDistance = Infinity;
      if (rect && activeSlots.length) {
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        let bestBenchSlot = null;
        let bestBenchDistance = Infinity;
        let bestFieldSlot = null;
        let bestFieldDistance = Infinity;
        activeSlots.forEach(slot => {
          if (slot.used || !slot.rect) return;
          const srect = slot.rect;
          const sx = srect.left + srect.width / 2;
          const sy = srect.top + srect.height / 2;
          const dx = cx - sx;
          const dy = cy - sy;
          const distance = dx * dx + dy * dy;
          if (slot.bench) {
            if (distance < bestBenchDistance) {
              bestBenchDistance = distance;
              bestBenchSlot = slot;
            }
          } else if (distance < bestFieldDistance) {
            bestFieldDistance = distance;
            bestFieldSlot = slot;
          }
          if (distance < bestDistance) {
            bestDistance = distance;
            matchedSlot = slot;
          }
        });
        if (!matchedSlot || (bestFieldSlot && matchedSlot.bench && bestFieldSlot !== matchedSlot)) {
          matchedSlot = bestFieldSlot || matchedSlot;
        }
        if (!matchedSlot && bestBenchSlot) {
          matchedSlot = bestBenchSlot;
        }
      }
      if (!matchedSlot) {
        const desired = normaliseLineKey(card.dataset.modPrefixLine);
        matchedSlot = slots.find(slot => !slot.used && normaliseLineKey(slot.line) === desired && desired) ||
          slots.find(slot => !slot.used) ||
          null;
      }
      if (!matchedSlot) return;
      matchedSlot.used = true;
      const slotLine = normaliseLineKey(matchedSlot.line) || normaliseLineKey(card.dataset.modPrefixLine);
      if (slotLine) {
        card.dataset.modPrefixLine = slotLine;
        card.dataset.modPrefixSlotLine = slotLine;
      } else {
        delete card.dataset.modPrefixLine;
        if (card.dataset) {
          delete card.dataset.modPrefixSlotLine;
        }
      }
      card.dataset.modPrefixContext = 'lineup';
      const prefixName = (card.dataset.modPrefixName || card.dataset.modPrefix || '').trim();
      placements.push({
        card,
        prefix: prefixName,
        line: slotLine,
        bench: matchedSlot.bench
      });
    });
    return placements;
  }

  function computeLineupSynergy() {
    const totalsByLine = { off: 0, mid: 0, def: 0 };
    const prefixCounts = new Map();
    let placementsUsed = false;

    const incrementPrefix = name => {
      if (!name) return;
      const trimmed = String(name).trim();
      if (!trimmed) return;
      prefixCounts.set(trimmed, (prefixCounts.get(trimmed) || 0) + 1);
    };

    const placements = collectFieldPlacements();
    if (placements && placements.length) {
      placements.forEach(({ prefix, line, bench }) => {
        if (!prefix || bench) return;
        const resolvedLine = normaliseLineKey(line);
        if (resolvedLine && Object.prototype.hasOwnProperty.call(totalsByLine, resolvedLine)) {
          totalsByLine[resolvedLine] += 1;
        }
        incrementPrefix(prefix);
        placementsUsed = true;
      });
    }

    if (!placementsUsed) {
      const cards = document.querySelectorAll('div.card[data-mod-prefix-line]');
      cards.forEach(card => {
        applyCardMetadata(card);
        const line = normaliseLineKey(card.dataset.modPrefixLine);
        if (!line || !Object.prototype.hasOwnProperty.call(totalsByLine, line)) return;
        const context = card.dataset.modPrefixContext;
        if (context && context !== 'lineup') return;
        const prefixName = (card.dataset.modPrefixName || card.dataset.modPrefix || '').trim();
        if (!prefixName) return;
        totalsByLine[line] += 1;
        incrementPrefix(prefixName);
      });
    }

    const summary = { off: null, mid: null, def: null };

    const evaluateCombo = combo => {
      if (!combo || !Array.isArray(combo.prefixes) || !combo.prefixes.length) {
        return null;
      }
      const requiredEach = Number.isFinite(combo.requiredEach) && combo.requiredEach > 0
        ? combo.requiredEach
        : SYNERGY_RULES.defaultRequired;
      const prefixDetails = combo.prefixes.map(name => {
        const count = prefixCounts.get(name) || 0;
        return { name, count, required: requiredEach };
      });
      const minCount = prefixDetails.reduce((acc, entry) => Math.min(acc, entry.count), prefixDetails.length ? Infinity : 0);
      const satisfied = prefixDetails.every(entry => entry.count >= requiredEach);
      const missing = prefixDetails.reduce((acc, entry) => acc + Math.max(0, requiredEach - entry.count), 0);
      const ratio = prefixDetails.length
        ? Math.min(...prefixDetails.map(entry => entry.required ? entry.count / entry.required : 0))
        : 0;
      const sumCounts = prefixDetails.reduce((acc, entry) => acc + entry.count, 0);
      const lineTotal = totalsByLine[combo.line] || 0;
      return {
        key: combo.key,
        name: combo.name,
        line: combo.line,
        description: combo.description,
        prefixes: prefixDetails,
        requiredEach,
        minCount: Number.isFinite(minCount) ? minCount : 0,
        ratio: Number.isFinite(ratio) ? ratio : 0,
        sumCounts,
        active: satisfied,
        bonus: satisfied ? combo.bonus : 0,
        potentialBonus: combo.bonus,
        missing,
        totalCards: lineTotal,
        target: requiredEach,
        count: Number.isFinite(minCount) ? minCount : 0,
        total: lineTotal,
        prefix: combo.name,
        order: Number.isFinite(combo.order) ? combo.order : 0
      };
    };

    Object.keys(summary).forEach(line => {
      const combos = SYNERGY_RULES.byLine[line] || [];
      if (!combos.length) {
        summary[line] = null;
        return;
      }
      let best = null;
      combos.forEach(combo => {
        const detail = evaluateCombo(combo);
        if (!detail) return;
        if (!best) {
          best = detail;
          return;
        }
        if (detail.active && !best.active) {
          best = detail;
          return;
        }
        if (!detail.active && best.active) {
          return;
        }
        if (detail.active && best.active) {
          if (detail.potentialBonus !== best.potentialBonus) {
            if (detail.potentialBonus > best.potentialBonus) best = detail;
            return;
          }
          if (detail.minCount !== best.minCount) {
            if (detail.minCount > best.minCount) best = detail;
            return;
          }
          if (detail.sumCounts !== best.sumCounts) {
            if (detail.sumCounts > best.sumCounts) best = detail;
            return;
          }
        } else {
          if (detail.ratio !== best.ratio) {
            if (detail.ratio > best.ratio) best = detail;
            return;
          }
          if (detail.sumCounts !== best.sumCounts) {
            if (detail.sumCounts > best.sumCounts) best = detail;
            return;
          }
          if (detail.potentialBonus !== best.potentialBonus) {
            if (detail.potentialBonus > best.potentialBonus) best = detail;
            return;
          }
        }
        if (detail.order < best.order) {
          best = detail;
        }
      });
      summary[line] = best;
    });

    if (typeof window !== 'undefined') {
      window.__prefixSynergy = summary;
    }
    return summary;
  }

  function removeFieldSynergyHost() {
    if (fieldSynergyHost && fieldSynergyHost.parentNode) {
      fieldSynergyHost.remove();
    }
    fieldSynergyHost = null;
  }

  function ensureFieldSynergyHost() {
    const field = document.querySelector('.board .field');
    if (!field) {
      removeFieldSynergyHost();
      return null;
    }
    if (fieldSynergyHost && fieldSynergyHost.parentElement === field) {
      return fieldSynergyHost;
    }
    removeFieldSynergyHost();
    const host = document.createElement('div');
    host.className = 'mod-prefix-field-synergy';
    const list = document.createElement('div');
    list.className = 'mod-prefix-field-synergy-list';
    host.appendChild(list);
    field.insertBefore(host, field.firstChild || null);
    fieldSynergyHost = host;
    return host;
  }

  function renderFieldSynergyPanel(summary) {
    const field = document.querySelector('.board .field');
    if (!field) {
      removeFieldSynergyHost();
      return;
    }
    const host = ensureFieldSynergyHost();
    if (!host) return;
    const list = host.querySelector('.mod-prefix-field-synergy-list');
    if (!list) return;
    const core = ensurePrefixCore();
    const availablePrefixes = core && Array.isArray(core.prefixes) ? core.prefixes : [];
    const order = [
      { key: 'off', label: 'OFF' },
      { key: 'mid', label: 'MID' },
      { key: 'def', label: 'DEF' }
    ];
    list.innerHTML = '';
    let hasAny = false;
    order.forEach(({ key, label }) => {
      const data = summary ? summary[key] : null;
      const row = document.createElement('div');
      row.className = 'mod-prefix-field-synergy-row';
      row.dataset.line = key;
      const lineBadge = document.createElement('span');
      lineBadge.className = 'mod-prefix-field-line';
      lineBadge.textContent = label;
      row.appendChild(lineBadge);
      const chip = document.createElement('span');
      chip.className = 'mod-prefix-field-chip';
      const progress = document.createElement('span');
      progress.className = 'mod-prefix-field-progress';
      const status = document.createElement('span');
      status.className = 'mod-prefix-field-status';

      if (data && data.name) {
        hasAny = true;
        row.dataset.active = data.active ? '1' : '0';
        if (data.key) {
          row.dataset.synergyKey = data.key;
        } else {
          delete row.dataset.synergyKey;
        }
        chip.textContent = data.name;
        chip.title = data.description || data.name;
        const prefixDetails = Array.isArray(data.prefixes) ? data.prefixes : [];
        const prefixMetas = prefixDetails
          .map(detail => availablePrefixes.find(p => p && p.name === detail.name))
          .filter(Boolean);
        const accentCandidates = prefixMetas
          .map(meta => getAccentColor(meta))
          .filter(Boolean);

        if (accentCandidates.length >= 2) {
          const firstColor = accentCandidates[0];
          const lastColor = accentCandidates[accentCandidates.length - 1];
          chip.style.setProperty('--mod-prefix-field-chip-bg', `linear-gradient(120deg, ${firstColor} 0%, ${lastColor} 100%)`);
        } else if (prefixMetas[0] && prefixMetas[0].labelBackground) {
          chip.style.setProperty('--mod-prefix-field-chip-bg', prefixMetas[0].labelBackground);
        } else {
          chip.style.removeProperty('--mod-prefix-field-chip-bg');
        }

        const textColorMeta = prefixMetas.find(meta => meta && meta.labelColor);
        if (textColorMeta && textColorMeta.labelColor) {
          chip.style.setProperty('--mod-prefix-field-chip-color', textColorMeta.labelColor);
        } else {
          chip.style.removeProperty('--mod-prefix-field-chip-color');
        }

        const progressParts = prefixDetails.map(detail => {
          const have = Math.min(detail.count || 0, detail.required || 0);
          const needed = detail.required || 0;
          const short = detail.name ? detail.name.split(/\s+/)[0] : '';
          return `${short || detail.name}: ${have}/${needed}`;
        });
        const progressText = progressParts.length ? progressParts.join(' • ') : '—';
        progress.textContent = progressText;
        progress.dataset.progress = progressText;
        if (data.description) {
          progress.title = data.description;
        } else {
          progress.removeAttribute('title');
        }

        const missingDetails = prefixDetails
          .filter(detail => detail.required && detail.count < detail.required)
          .map(detail => `${detail.name}×${detail.required - detail.count}`);
        const bonusValue = Number(data.bonus);
        if (data.active && Number.isFinite(bonusValue) && bonusValue !== 0) {
          status.textContent = `+${bonusValue.toFixed(1)}`;
          status.dataset.state = 'bonus';
        } else if (missingDetails.length) {
          status.textContent = `need ${missingDetails.join(', ')}`;
          status.dataset.state = 'need';
        } else if (progressParts.length) {
          status.textContent = '';
          status.dataset.state = data.minCount > 0 ? 'ready' : 'idle';
        } else {
          status.textContent = '';
          status.dataset.state = 'idle';
        }

        const accentColor = data.accentColor || (accentCandidates.length ? accentCandidates[0] : null);
        if (accentColor) {
          row.style.setProperty('--mod-prefix-field-accent', accentColor);
          status.style.setProperty('--mod-prefix-field-accent', accentColor);
        } else {
          row.style.removeProperty('--mod-prefix-field-accent');
          status.style.removeProperty('--mod-prefix-field-accent');
        }
      } else {
        chip.textContent = '—';
        chip.removeAttribute('title');
        chip.style.removeProperty('--mod-prefix-field-chip-bg');
        chip.style.removeProperty('--mod-prefix-field-chip-color');
        const target = SYNERGY_RULES.defaultRequired || 0;
        const placeholder = target ? `0/${target}` : '0';
        progress.textContent = placeholder;
        progress.dataset.progress = placeholder;
        progress.removeAttribute('title');
        status.textContent = '';
        status.dataset.state = 'idle';
        row.dataset.active = '0';
        row.classList.add('mod-prefix-field-empty');
        row.style.removeProperty('--mod-prefix-field-accent');
        status.style.removeProperty('--mod-prefix-field-accent');
      }

      row.appendChild(chip);
      row.appendChild(progress);
      row.appendChild(status);
      list.appendChild(row);
    if (hasAny) {
      host.classList.remove('mod-prefix-field-hidden');
    } else {
      host.classList.add('mod-prefix-field-hidden');
    }
  }

  function cleanupAnalysisElement(element) {
    if (!element || element.nodeType !== 1) return;
    const note = element.querySelector('.mod-prefix-analysis-note');
    if (note) {
      const host = note.parentElement;
      note.remove();
      if (
        host &&
        host.classList &&
        host.classList.contains('mod-prefix-title-host') &&
        !host.querySelector('.mod-prefix-analysis-note')
      ) {
        host.classList.remove('mod-prefix-title-host');
      }
    }
    const title = element.querySelector('.analysis-title');
    if (
      title &&
      title.classList &&
      title.classList.contains('mod-prefix-title-host') &&
      !title.querySelector('.mod-prefix-analysis-note')
    ) {
      title.classList.remove('mod-prefix-title-host');
    }
    element.classList.remove('mod-prefix-analysis-has-synergy');
    if (element.dataset) {
      delete element.dataset.modPrefixSynergyBonus;
      delete element.dataset.modPrefixSynergyTotal;
      delete element.dataset.modPrefixSynergyPrefix;
      delete element.dataset.modPrefixSynergyCount;
      delete element.dataset.modPrefixSynergyTarget;
      delete element.dataset.modPrefixSynergyActive;
      delete element.dataset.modPrefixSynergyNeeded;
      delete element.dataset.modPrefixSynergyTotalCards;
      delete element.dataset.modPrefixSynergyName;
      delete element.dataset.modPrefixSynergyPair;
      delete element.dataset.modPrefixSynergyPairDetail;
      delete element.dataset.modPrefixSynergyNeededDetail;
    }
  }

  function applySynergyToAnalysis(element, synergyData) {
    if (!element || element.nodeType !== 1) return;
    cleanupAnalysisElement(element);
    const type = element.dataset.modPrefixType || getAnalysisType(element);
    if (!type) return;
    const base = parseFloat(element.dataset.modPrefixBaseValue || '');
    if (!Number.isFinite(base)) return;
    const synergy = synergyData && synergyData[type];
    if (!synergy || !Array.isArray(synergy.prefixes) || !synergy.prefixes.length) {
      return;
    }
    const requiredEach = Number.isFinite(synergy.requiredEach)
      ? synergy.requiredEach
      : Number.isFinite(synergy.target)
        ? Number(synergy.target)
        : SYNERGY_RULES.defaultRequired;
    const prefixDetails = synergy.prefixes.map(detail => ({
      name: detail && detail.name ? detail.name : '',
      count: Number(detail && detail.count) || 0,
      required: Number.isFinite(detail && detail.required) ? detail.required : requiredEach
    }));
    const minCount = Number.isFinite(synergy.minCount) ? synergy.minCount : prefixDetails.reduce((acc, entry) => Math.min(acc, entry.count), prefixDetails.length ? Infinity : 0);
    if (!Number.isFinite(minCount) || minCount <= 0) {
      return;
    }
    const totalValue = Number(synergy.totalCards);
    const fallbackTotal = Number(synergy.total);
    const totalCards = Number.isFinite(totalValue)
      ? totalValue
      : Number.isFinite(fallbackTotal)
        ? fallbackTotal
        : prefixDetails.reduce((acc, entry) => acc + entry.count, 0);
    const target = Number.isFinite(requiredEach) ? requiredEach : 0;
    const cappedCount = target ? Math.min(minCount, target) : minCount;
    const missingTotal = prefixDetails.reduce((acc, entry) => acc + Math.max(0, (entry.required || target) - entry.count), 0);
    const active = !!synergy.active;
    const bonusValue = Number(synergy.bonus);
    const bonus = active && Number.isFinite(bonusValue) ? bonusValue : 0;
    const total = base + bonus;
    const pairSummary = prefixDetails.map(entry => entry.name).join('+');
    const pairDetail = prefixDetails.map(entry => `${entry.name}:${entry.count}`).join(',');
    const missingDetail = prefixDetails
      .filter(entry => (entry.required || target) > entry.count)
      .map(entry => `${entry.name}:${(entry.required || target) - entry.count}`)
      .join(',');

    element.dataset.modPrefixSynergyBonus = bonus.toFixed(1);
    element.dataset.modPrefixSynergyTotal = total.toFixed(1);
    element.dataset.modPrefixSynergyPrefix = synergy.name || synergy.prefix || '';
    element.dataset.modPrefixSynergyName = synergy.name || '';
    element.dataset.modPrefixSynergyCount = String(cappedCount);
    if (target) {
      element.dataset.modPrefixSynergyTarget = String(target);
    } else {
      delete element.dataset.modPrefixSynergyTarget;
    }
    element.dataset.modPrefixSynergyActive = active ? '1' : '0';
    element.dataset.modPrefixSynergyNeeded = String(missingTotal);
    element.dataset.modPrefixSynergyTotalCards = String(totalCards);
    if (pairSummary) {
      element.dataset.modPrefixSynergyPair = pairSummary;
    } else {
      delete element.dataset.modPrefixSynergyPair;
    }
    if (pairDetail) {
      element.dataset.modPrefixSynergyPairDetail = pairDetail;
    } else {
      delete element.dataset.modPrefixSynergyPairDetail;
    }
    if (missingDetail) {
      element.dataset.modPrefixSynergyNeededDetail = missingDetail;
    } else {
      delete element.dataset.modPrefixSynergyNeededDetail;
    }
    element.classList.add('mod-prefix-analysis-has-synergy');
  }

  function updateAnalysisSynergy() {
    const analyses = document.querySelectorAll('div.analysis');
    analyses.forEach(processAnalysisElement);
    const synergyData = computeLineupSynergy();
    analyses.forEach(analysis => {
      applySynergyToAnalysis(analysis, synergyData);
    });
    renderFieldSynergyPanel(synergyData);
  }

  function scheduleAnalysisUpdate(force) {
    if (!force && !pendingAnalyses.size) return;
    if (analysisScheduled) return;
    analysisScheduled = true;
    scheduleFrame(() => {
      analysisScheduled = false;
      if (pendingAnalyses.size) {
        const analyses = Array.from(pendingAnalyses);
        pendingAnalyses.clear();
        analyses.forEach(processAnalysisElement);
      }
      updateAnalysisSynergy();
    });
  }

  function ensureFlushScheduled() {
    if (flushScheduled) return;
    flushScheduled = true;
    scheduleFrame(() => {
      flushScheduled = false;
      flushCards();
    });
  }

  function queuePotentialCards(node) {
    if (!node || node.nodeType !== 1) return;
    const element = node;
    if (typeof element.matches === 'function' && element.matches('div.card')) {
      pendingCards.add(element);
    }
    if (typeof element.matches === 'function' && element.matches('div.current-player-front')) {
      pendingCards.add(element);
    }
    if (typeof element.matches === 'function' && element.matches('div.analysis')) {
      pendingAnalyses.add(element);
    }
    if (typeof element.querySelectorAll === 'function') {
      element.querySelectorAll('div.card').forEach(card => pendingCards.add(card));
      element.querySelectorAll('div.current-player-front').forEach(detail => pendingCards.add(detail));
      element.querySelectorAll('div.analysis').forEach(analysis => pendingAnalyses.add(analysis));
    }
    if (pendingCards.size) {
      ensureFlushScheduled();
    }
    if (pendingAnalyses.size) {
      scheduleAnalysisUpdate();
    }
  }

  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type === 'childList') {
        mutation.addedNodes && mutation.addedNodes.forEach(queuePotentialCards);
      } else if (mutation.type === 'attributes') {
        const target = mutation.target;
        if (!target || target.nodeType !== 1) return;
        const element = target;
        let card = null;
        if (typeof element.matches === 'function' && element.matches('div.card')) {
          card = element;
        } else if (typeof element.closest === 'function') {
          card = element.closest('div.card');
        }
        if (card) {
          pendingCards.add(card);
          ensureFlushScheduled();
        }
        let detail = null;
        if (typeof element.matches === 'function' && element.matches('div.current-player-front')) {
          detail = element;
        } else if (typeof element.closest === 'function') {
          detail = element.closest('div.current-player-front');
        }
        if (detail) {
          pendingCards.add(detail);
          ensureFlushScheduled();
        }
        let analysis = null;
        if (typeof element.matches === 'function' && element.matches('div.analysis')) {
          analysis = element;
        } else if (typeof element.closest === 'function') {
          analysis = element.closest('div.analysis');
        }
        if (analysis) {
          pendingAnalyses.add(analysis);
          scheduleAnalysisUpdate();
        }
      }
    });
  });
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['class', 'data-pid', 'data-bookid']
  });

  function kickstart() {
    document.querySelectorAll('div.card').forEach(card => pendingCards.add(card));
    document.querySelectorAll('div.current-player-front').forEach(detail => pendingCards.add(detail));
    document.querySelectorAll('div.analysis').forEach(analysis => pendingAnalyses.add(analysis));
    if (pendingCards.size) {
      flushCards();
    }
    if (pendingAnalyses.size) {
      pendingAnalyses.forEach(processAnalysisElement);
      pendingAnalyses.clear();
      updateAnalysisSynergy();
    } else {
      updateAnalysisSynergy();
    }
  }

  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', kickstart);
  } else {
    kickstart();
  window.__prefixAssignments = prefixAssignments;
  window.__prefixConfig = PREFIXES;
  console.log('[mod] prefixes: installed with', PREFIXES.length, 'variants');
})();
