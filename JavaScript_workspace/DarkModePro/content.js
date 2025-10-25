let darkEnabled = false;

function applyDarkMode(enable) {
  const cssId = "custom-dark-mode-style";
  let styleTag = document.getElementById(cssId);

  if (enable) {
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = cssId;
      styleTag.innerHTML = `
        * {
          background-color: #121212 !important;
          color: #e0e0e0 !important;
          border-color: #555 !important;
        }

        a, a * {
          color: #4da3ff !important;
        }

        input, textarea, select, button {
          background-color: #1e1e1e !important;
          color: #ffffff !important;
          border: 1px solid #666 !important;
          border-radius: 4px;
        }

        input::placeholder, textarea::placeholder {
          color: #bbbbbb !important;
        }

        button:hover {
          background-color: #2c2c2c !important;
        }

        img, video, iframe {
          filter: brightness(0.9) contrast(1.1);
        }

        body {
          background-color: #121212 !important;
        }
      `;
      document.head.appendChild(styleTag);
    }
  } else {
    if (styleTag) styleTag.remove();
  }
}

chrome.runtime.onMessage.addListener((req) => {
  if (req.action === "toggleDarkMode") {
    darkEnabled = !darkEnabled;
    applyDarkMode(darkEnabled);
  }
});
