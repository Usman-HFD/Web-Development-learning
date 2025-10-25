// =======================
// popup.js — Dark Mode Pro
// =======================

// 🔹 Button element select karo
const toggleDarkBtn = document.getElementById("toggleDark");

// 🔹 Jab user button click kare
toggleDarkBtn.addEventListener("click", () => {
  // Current active tab find karo
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0) {
      // Us tab par message send karo
      chrome.tabs.sendMessage(tabs[0].id, { action: "toggleDarkMode" });
    }
  });
});
