(() => {
  const root = document.documentElement;
  let theme = "dark";
  try {
    const stored = localStorage.getItem("botplus-theme");
    if (stored === "light" || stored === "dark") theme = stored;
  } catch {}
  root.dataset.theme = theme;

  const updateButton = () => {
    const button = document.querySelector(".theme-toggle");
    if (!button) return;
    button.setAttribute("aria-label", theme === "dark" ? button.dataset.lightLabel : button.dataset.darkLabel);
    document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#11101a" : "#f8f8fc";
  };

  document.addEventListener("DOMContentLoaded", () => {
    updateButton();
    document.querySelector(".theme-toggle").addEventListener("click", () => {
      theme = theme === "dark" ? "light" : "dark";
      root.dataset.theme = theme;
      try { localStorage.setItem("botplus-theme", theme); } catch {}
      updateButton();
    });
  });
})();
