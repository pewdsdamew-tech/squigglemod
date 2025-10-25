// === Prefix Mod v4 ===
// Prefixes persist across rounds via localStorage

(function () {
  console.log("[mod] Prefix system with persistence initializing...");

  const PREFIXES = [
    { name: "Angelic", css: "mod-angelic" },
    { name: "Demonic", css: "mod-demonic" },
    { name: "Ethereal", css: "mod-ethereal" },
    { name: "Cursed", css: "mod-cursed" },
  ];

  const STORAGE_KEY = "squiggle_prefixes_v1";
  let prefixMap = new Map();

  // Load stored prefixes
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && typeof saved === "object") {
      prefixMap = new Map(Object.entries(saved));
      console.log(`[mod] Loaded ${prefixMap.size} saved prefixes`);
    }
  } catch (e) {
    console.warn("[mod] Failed to load saved prefixes", e);
  }

  function savePrefixes() {
    const obj = Object.fromEntries(prefixMap);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
  }

  function getPrefixForPlayer(player) {
    if (!player || !player.pid) return null;

    if (prefixMap.has(player.pid)) {
      const prefixName = prefixMap.get(player.pid);
      return PREFIXES.find((p) => p.name === prefixName) || null;
    }

    // Assign a random one
    const randomPrefix = PREFIXES[Math.floor(Math.random() * PREFIXES.length)];
    prefixMap.set(player.pid, randomPrefix.name);
    savePrefixes();
    return randomPrefix;
  }

  function applyPrefixToCard(cardEl, player) {
    if (!cardEl || !player) return;
    const prefix = getPrefixForPlayer(player);
    if (!prefix) return;

    cardEl.classList.add("mod-card-prefix", prefix.css);

    let label = cardEl.querySelector(".mod-prefix-box");
    if (!label) {
      label = document.createElement("div");
      label.className = "mod-prefix-box";
      cardEl.appendChild(label);
    }

    label.textContent = prefix.name;
    label.dataset.type = prefix.name;
  }

  function scanAllCards() {
    const cards = document.querySelectorAll("div.card");
    cards.forEach((card, i) => {
      if (!card.dataset.pid) card.dataset.pid = `temp-${i}`;
      applyPrefixToCard(card, { pid: card.dataset.pid });
    });
  }

  // Watch DOM + rescan periodically
  const observer = new MutationObserver(scanAllCards);
  observer.observe(document.body, { childList: true, subtree: true });
  setInterval(scanAllCards, 2000);

  console.log("[mod] Persistent prefix system active");
})();