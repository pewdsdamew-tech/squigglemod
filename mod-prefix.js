// Optional override for the prefix mod. Edit this list to add/remove prefixes or tweak their effects.
// The main mod script will fall back to its built-in defaults if this file is not loaded.
window.MOD_PREFIX_CONFIG = [
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

if (typeof window !== "undefined" && typeof window.__resetPrefixCore === "function") {
  window.__resetPrefixCore();
}
