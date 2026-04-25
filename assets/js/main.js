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
  // const form = qs("[data-contact-form]");
  // const success = qs("[data-form-success]");
  // if (form) {
  //   form.addEventListener("submit", (e) => {
  //     e.preventDefault();
  //     const name = qs("[name='name']", form)?.value?.trim() || "";
  //     const phone = qs("[name='phone']", form)?.value?.trim() || "";
  //     if (!name || !phone) return;

  //     form.reset();
  //     if (success) {
  //       success.classList.add("show");
  //       window.setTimeout(() => success.classList.remove("show"), 4500);
  //     }
  //   });
  // }

  // Init i18n
  window.addEventListener("DOMContentLoaded", () => {
    const lang = window.LyuksI18n?.getLang?.() || "uz";
    window.LyuksI18n?.applyTranslations?.(lang);
  });
})();

document.querySelector('[data-contact-form]').addEventListener('submit', async function(e) {
  e.preventDefault();

  const form = e.target;
  const submitBtn = form.querySelector('[type="submit"]');
  const successMsg = form.querySelector('[data-form-success]');
  
  // 1. Telegram sozlamalari
  const botToken = "8306691330:AAEx4lPju7t84e-OoQt04wc7ymBUhzVszBs"; // BotFather dan olingan token
  const chatIds = ["1366945441", "5948657931"]; // Xabar borishi kerak bo'lgan ID lar

  // 2. Formadan ma'lumotlarni olish
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const serviceElement = document.getElementById('service');
  const service = serviceElement.options[serviceElement.selectedIndex].text;
  const message = document.getElementById('msg').value || "Xabar yozilmadi";

  // 3. Xabar matnini tayyorlash
  const text = `
🆕 **Yangi buyurtma!**
👤 **Ism:** ${name}
📞 **Tel:** ${phone}
🛠 **Xizmat:** ${service}
📝 **Xabar:** ${message}
  `.trim();

  // Yuborish tugmasini vaqtincha o'chirish
  submitBtn.disabled = true;
  submitBtn.textContent = "Yuborilmoqda...";

  try {
    // 4. Har bir ID uchun xabar yuborish (Loop)
    const requests = chatIds.map(chatId => {
      return fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: "Markdown"
        })
      });
    });

    await Promise.all(requests);

    // 5. Muvaffaqiyatli yakun
    successMsg.style.display = 'block';
    form.reset();
  } catch (error) {
    alert("Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.");
    console.error(error);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Yuborish";
  }
});

