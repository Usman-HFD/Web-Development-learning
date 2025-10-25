chrome.runtime.onInstalled.addListener(() => {
    // Default settings on first install
    chrome.storage.sync.set({
      enabled: false,
      brightness: 100,
      contrast: 100
    });
  });
  
  // Listen for storage changes and update all active tabs
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === "sync") {
      chrome.tabs.query({}, (tabs) => {
        for (const tab of tabs) {
          chrome.tabs.sendMessage(tab.id, {
            action: "update-storage",
            changes
          });
        }
      });
    }
  });
  