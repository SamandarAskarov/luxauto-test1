/* Shared UI behaviors */
(function () {
  function qs(sel, root = document) {
    return root.querySelector(sel);
  }

  // Mobile menu
  const menuBtn = qs("[data-menu-btn]");
  const menuPanel = qs("[data-menu-panel]");
  if (menuBtn && menuPanel) {
    menuBtn.addEventListener("click", () => {
      menuPanel.classList.toggle("open");
      menuBtn.setAttribute(
        "aria-expanded",
        menuPanel.classList.contains("open") ? "true" : "false"
      );
    });
    menuPanel.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => menuPanel.classList.remove("open"));
    });
  }

  // Language switcher
  document.querySelectorAll("[data-lang-select]").forEach((sel) => {
    sel.addEventListener("change", (e) => {
      window.LyuksI18n?.setLang(e.target.value);
    });
  });

  // Contact form (no tokens/secrets on client)
  const form = qs("[data-contact-form]");
  const success = qs("[data-form-success]");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = qs("[name='name']", form)?.value?.trim() || "";
      const phone = qs("[name='phone']", form)?.value?.trim() || "";
      if (!name || !phone) return;

      form.reset();
      if (success) {
        success.classList.add("show");
        window.setTimeout(() => success.classList.remove("show"), 4500);
      }
    });
  }

  // Init i18n
  window.addEventListener("DOMContentLoaded", () => {
    const lang = window.LyuksI18n?.getLang?.() || "uz";
    window.LyuksI18n?.applyTranslations?.(lang);
  });
})();

