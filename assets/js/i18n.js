/* Simple static i18n (no fetch; works on file://) */
(function () {
  const TRANSLATIONS = {
    uz: {
      lang_name: "O‘zbek",
      nav_home: "Bosh sahifa",
      nav_about: "Biz haqimizda",
      nav_services: "Xizmatlar",
      nav_branches: "Filiallar",
      nav_reviews: "Sharhlar",
      nav_partners: "Hamkorlarimiz",
      nav_contact: "Aloqa",
      nav_call: "Qo‘ng‘iroq",

      hero_kicker: "Premium avtoservis",
      hero_title_a: "Ishonchli",
      hero_title_b: "Car Service",
      hero_title_c: "Toshkentda",
      hero_sub:
        "Lyuks Auto — professional avtoservis. Dvigatel taʼmiri, kompyuter diagnostikasi, moy almashtirish va boshqa kompleks xizmatlar.",
      hero_book: "Xizmatga yozilish",

      home_services_kicker: "Xizmatlar",
      home_services_title: "Barcha turdagi xizmatlar",
      home_services_sub: "Minimalistik, tartibli, tez va sifatli servis.",
      home_services_cta: "Batafsil ko‘rish",

      about_kicker: "Biz haqimizda",
      about_title: "Sifat, ishonch va tajriba",
      about_sub:
        "Biz zamonaviy jihozlar va yuqori malakali ustalar bilan avtomobilingizga ehtiyotkorlik bilan xizmat ko‘rsatamiz.",
      about_point_1_t: "10 yil tajriba",
      about_point_1_d: "Stabil sifat va sinovdan o‘tgan jarayonlar.",
      about_point_2_t: "Kompleks xizmatlar",
      about_point_2_d: "Diagnostika, taʼmir, servis va profilaktika.",
      about_point_3_t: "Yuqori malakali ustalar",
      about_point_3_d: "Sertifikatlangan, tajribali mutaxassislar.",

      services_kicker: "Xizmatlar",
      services_title: "Asosiy yo‘nalishlar",
      services_sub:
        "Har bir xizmat aniq tartib va shaffof yondashuv bilan bajariladi.",
      srv_01_t: "Dvigatel taʼmiri",
      srv_01_d: "Diagnostika va kapital taʼmir ishlari.",
      srv_02_t: "Kompyuter diagnostikasi",
      srv_02_d: "Zamonaviy skanerlar bilan to‘liq tekshiruv.",
      srv_03_t: "Moy va filtr",
      srv_03_d: "Reja bo‘yicha almashtirish va tekshiruv.",
      srv_04_t: "Tormoz tizimi",
      srv_04_d: "Kolodka, disk va tizim sozlamalari.",
      srv_05_t: "Transmissiya",
      srv_05_d: "Mexanik/avtomat uzatma diagnostikasi va taʼmiri.",
      srv_06_t: "Elektrika",
      srv_06_d: "Elektr tizim va sensorlar bo‘yicha xizmat.",

      branches_kicker: "Filiallar",
      branches_title: "Manzillarimiz",
      branches_sub: "Toshkent bo‘ylab qulay joylashuvlar.",
      branch_01_name: "Lyuks Auto Chorsu",
      branch_01_addr: "Toshkent, Shayxontohur tumani, Chorsu",
      branch_02_name: "Lyuks Auto Chinobod",
      branch_02_addr: "Toshkent, Yunusobod tumani, Atchapar-1",
      branch_03_name: "Lyuks Auto Sergeli",
      branch_03_addr: "Toshkent, Sergeli tumani, Obihayot ko‘chasi, 39",
      branches_hours: "09:00 – 21:00, har kuni",

      reviews_kicker: "Sharhlar",
      reviews_title: "Mijozlar fikri",
      reviews_sub: "Qisqa, aniq va real tajribalar.",
      r1_text:
        "Servis juda tartibli. Diagnostika tez bo‘ldi, narx oldindan aytildi — hammasi shaffof.",
      r1_name: "Alisher",
      r2_text:
        "Moy almashtirish va tekshiruv bir tashrifda tugadi. Tez va chiroyli muomala.",
      r2_name: "Zulfiya",
      r3_text:
        "Professional yondashuv. Mashina topshirilgandan keyin aniq muddatda tayyor bo‘ldi.",
      r3_name: "Bobur",

      partners_kicker: "Hamkorlarimiz",
      partners_title: "Biz bilan ishlaydigan brendlar",
      partners_sub:
        "Logotiplar gorizontal yumshoq animatsiya bilan aylanishda.",
      partners_c1_t: "OEM",
      partners_c1_d: "Original ehtiyot qismlar bilan moslashuv.",
      partners_c2_t: "Uskunalar",
      partners_c2_d: "Zamonaviy diagnostika va servis uskunalari.",
      partners_c3_t: "Standartlar",
      partners_c3_d: "Jarayonlar sifati va tartibga e’tibor.",

      contact_kicker: "Aloqa",
      contact_title: "Biz bilan bog‘laning",
      contact_sub:
        "Forma yuboring — biz siz bilan tez orada bog‘lanamiz. Yoki telefon orqali qo‘ng‘iroq qiling.",
      form_name: "Ism",
      form_phone: "Telefon",
      form_service: "Xizmat turi",
      form_msg: "Xabar",
      form_service_pick: "-- Tanlang --",
      form_submit: "Yuborish",
      form_success: "Xabaringiz qabul qilindi. Tez orada aloqaga chiqamiz.",

      footer_note:
        "Lyuks Auto — minimalistik dizayn, tez va sifatli servis."
    },

    "uz-Cyrl": {
      lang_name: "Ўзбек (Кирилл)",
      nav_home: "Бош саҳифа",
      nav_about: "Биз ҳақимизда",
      nav_services: "Хизматлар",
      nav_branches: "Филиаллар",
      nav_reviews: "Шарҳлар",
      nav_partners: "Ҳамкорларимиз",
      nav_contact: "Алоқа",
      nav_call: "Қўнғироқ",

      hero_kicker: "Премиум автосервис",
      hero_title_a: "Ишончли",
      hero_title_b: "Car Service",
      hero_title_c: "Тошкентда",
      hero_sub:
        "Lyuks Auto — профессионал автосервис. Двигатель таъмири, компьютер диагностикаси, мой алмаштириш ва бошқа комплекс хизматлар.",
      hero_book: "Хизматга ёзилиш",

      home_services_kicker: "Хизматлар",
      home_services_title: "Барча турдаги хизматлар",
      home_services_sub: "Минималистик, тартибли, тез ва сифатли сервис.",
      home_services_cta: "Батафсил кўриш",

      about_kicker: "Биз ҳақимизда",
      about_title: "Сифат, ишонч ва тажриба",
      about_sub:
        "Биз замонавий жиҳозлар ва юқори малакали усталар билан автомобилингизга эҳтиёткорлик билан хизмат кўрсатамиз.",
      about_point_1_t: "10 йил тажриба",
      about_point_1_d: "Барқарор сифат ва синовдан ўтган жараёнлар.",
      about_point_2_t: "Комплекс хизматлар",
      about_point_2_d: "Диагностика, таъмир, сервис ва профилактика.",
      about_point_3_t: "Юқори малакали усталар",
      about_point_3_d: "Сертификатланган, тажрибали мутахассислар.",

      services_kicker: "Хизматлар",
      services_title: "Асосий йўналишлар",
      services_sub:
        "Ҳар бир хизмат аниқ тартиб ва шаффоф ёндашув билан бажарилади.",
      srv_01_t: "Двигатель таъмири",
      srv_01_d: "Диагностика ва капитал таъмир ишлари.",
      srv_02_t: "Компьютер диагностикаси",
      srv_02_d: "Замонавий сканерлар билан тўлиқ текширув.",
      srv_03_t: "Мой ва фильтр",
      srv_03_d: "Режа бўйича алмаштириш ва текширув.",
      srv_04_t: "Тормоз тизими",
      srv_04_d: "Колодка, диск ва тизим созламалари.",
      srv_05_t: "Трансмиссия",
      srv_05_d: "Механик/автомат узатма диагностикаси ва таъмири.",
      srv_06_t: "Электрика",
      srv_06_d: "Электр тизим ва сенсорлар бўйича хизмат.",

      branches_kicker: "Филиаллар",
      branches_title: "Манзилларимиз",
      branches_sub: "Тошкент бўйлаб қулай жойлашувлар.",
      branch_01_name: "Lyuks Auto Chorsu",
      branch_01_addr: "Тошкент, Шайхонтоҳур тумани, Чорсу",
      branch_02_name: "Lyuks Auto Chinobod",
      branch_02_addr: "Тошкент, Юнусобод тумани, Атчапар-1",
      branch_03_name: "Lyuks Auto Sergeli",
      branch_03_addr: "Тошкент, Сергели тумани, Обихаёт кўчаси, 39",
      branches_hours: "09:00 – 21:00, ҳар куни",

      reviews_kicker: "Шарҳлар",
      reviews_title: "Мижозлар фикри",
      reviews_sub: "Қисқа, аниқ ва реал тажрибалар.",
      r1_text:
        "Сервис жуда тартибли. Диагностика тез бўлди, нарх олдиндан айтилди — ҳаммаси шаффоф.",
      r1_name: "Алишер",
      r2_text:
        "Мой алмаштириш ва текширув бир ташрифда тугади. Тез ва чиройли муомала.",
      r2_name: "Зулфия",
      r3_text:
        "Профессионал ёндашув. Машина топширилгандан кейин аниқ муддатда тайёр бўлди.",
      r3_name: "Бобур",

      partners_kicker: "Ҳамкорларимиз",
      partners_title: "Биз билан ишлайдиган брендлар",
      partners_sub:
        "Логотиплар горизонтал юмшоқ анимация билан айланишда.",
      partners_c1_t: "OEM",
      partners_c1_d: "Оригинал эҳтиёт қисмлар билан мослашув.",
      partners_c2_t: "Ускуналар",
      partners_c2_d: "Замонавий диагностика ва сервис ускуналари.",
      partners_c3_t: "Стандартлар",
      partners_c3_d: "Жараёнлар сифати ва тартибга эътибор.",

      contact_kicker: "Алоқа",
      contact_title: "Биз билан боғланинг",
      contact_sub:
        "Форма юборинг — биз сиз билан тез орада боғланамиз. Ёки телефон орқали қўнғироқ қилинг.",
      form_name: "Исм",
      form_phone: "Телефон",
      form_service: "Хизмат тури",
      form_msg: "Хабар",
      form_service_pick: "-- Танланг --",
      form_submit: "Юбориш",
      form_success: "Хабарингиз қабул қилинди. Тез орада алоқага чиқамиз.",

      footer_note:
        "Lyuks Auto — минималистик дизайн, тез ва сифатли сервис."
    },

    ru: {
      lang_name: "Русский",
      nav_home: "Главная",
      nav_about: "О нас",
      nav_services: "Услуги",
      nav_branches: "Филиалы",
      nav_reviews: "Отзывы",
      nav_partners: "Партнёры",
      nav_contact: "Контакты",
      nav_call: "Позвонить",

      hero_kicker: "Премиальный автосервис",
      hero_title_a: "Надёжный",
      hero_title_b: "Car Service",
      hero_title_c: "в Ташкенте",
      hero_sub:
        "Lyuks Auto — профессиональный автосервис. Ремонт двигателя, компьютерная диагностика, замена масла и комплексные услуги.",
      hero_book: "Записаться",

      home_services_kicker: "Услуги",
      home_services_title: "Все виды сервиса",
      home_services_sub: "Современно, минималистично и с отличной организацией.",
      home_services_cta: "Подробнее",

      about_kicker: "О нас",
      about_title: "Качество, доверие и опыт",
      about_sub:
        "Современное оборудование и мастера высокой квалификации для вашего автомобиля.",
      about_point_1_t: "10 лет опыта",
      about_point_1_d: "Стабильное качество и отработанные процессы.",
      about_point_2_t: "Комплексные услуги",
      about_point_2_d: "Диагностика, ремонт, сервис и профилактика.",
      about_point_3_t: "Высококвалифицированные мастера",
      about_point_3_d: "Сертифицированные специалисты с опытом.",

      services_kicker: "Услуги",
      services_title: "Основные направления",
      services_sub:
        "Каждая услуга выполняется по понятному и прозрачному регламенту.",
      srv_01_t: "Ремонт двигателя",
      srv_01_d: "Диагностика и капитальный ремонт.",
      srv_02_t: "Компьютерная диагностика",
      srv_02_d: "Полная проверка современными сканерами.",
      srv_03_t: "Масло и фильтры",
      srv_03_d: "Замена по регламенту и контроль.",
      srv_04_t: "Тормозная система",
      srv_04_d: "Колодки, диски и настройка.",
      srv_05_t: "Трансмиссия",
      srv_05_d: "Диагностика и ремонт МКПП/АКПП.",
      srv_06_t: "Электрика",
      srv_06_d: "Электросистема и датчики.",

      branches_kicker: "Филиалы",
      branches_title: "Наши адреса",
      branches_sub: "Удобные локации по Ташкенту.",
      branch_01_name: "Lyuks Auto Chorsu",
      branch_01_addr: "Ташкент, Шайхантахур, Чорсу",
      branch_02_name: "Lyuks Auto Chinobod",
      branch_02_addr: "Ташкент, Юнусабад, Атчапар-1",
      branch_03_name: "Lyuks Auto Sergeli",
      branch_03_addr: "Ташкент, Сергели, ул. Обихайот 39",
      branches_hours: "09:00 – 21:00, ежедневно",

      reviews_kicker: "Отзывы",
      reviews_title: "Мнение клиентов",
      reviews_sub: "Коротко, по делу и из реального опыта.",
      r1_text:
        "Очень аккуратный сервис. Диагностика быстро, цена заранее — всё прозрачно.",
      r1_name: "Алишер",
      r2_text:
        "Замена масла и проверка — за один визит. Быстро и вежливо.",
      r2_name: "Зульфия",
      r3_text:
        "Профессиональный подход. Авто было готово точно в срок.",
      r3_name: "Бобур",

      partners_kicker: "Партнёры",
      partners_title: "Бренды, с которыми мы работаем",
      partners_sub: "Логотипы плавно прокручиваются по горизонтали.",
      partners_c1_t: "OEM",
      partners_c1_d: "Совместимость с оригинальными запчастями.",
      partners_c2_t: "Оборудование",
      partners_c2_d: "Современная диагностика и сервисные инструменты.",
      partners_c3_t: "Стандарты",
      partners_c3_d: "Внимание к качеству и порядку процессов.",

      contact_kicker: "Контакты",
      contact_title: "Свяжитесь с нами",
      contact_sub:
        "Отправьте форму — мы скоро перезвоним. Или позвоните по телефону.",
      form_name: "Имя",
      form_phone: "Телефон",
      form_service: "Услуга",
      form_msg: "Сообщение",
      form_service_pick: "-- Выберите --",
      form_submit: "Отправить",
      form_success: "Заявка принята. Мы свяжемся с вами в ближайшее время.",

      footer_note: "Lyuks Auto — минимализм, скорость и качество."
    },

    en: {
      lang_name: "English",
      nav_home: "Home",
      nav_about: "About",
      nav_services: "Services",
      nav_branches: "Branches",
      nav_reviews: "Reviews",
      nav_partners: "Partners",
      nav_contact: "Contact",
      nav_call: "Call",

      hero_kicker: "Premium car service",
      hero_title_a: "Reliable",
      hero_title_b: "Car Service",
      hero_title_c: "in Tashkent",
      hero_sub:
        "Lyuks Auto — professional car service. Engine repair, diagnostics, oil change and comprehensive maintenance.",
      hero_book: "Book a service",

      home_services_kicker: "Services",
      home_services_title: "All essential services",
      home_services_sub: "Modern, clean, minimal, and well-organized.",
      home_services_cta: "View details",

      about_kicker: "About",
      about_title: "Quality, trust, experience",
      about_sub:
        "Modern equipment and highly skilled specialists for your vehicle.",
      about_point_1_t: "10 years of experience",
      about_point_1_d: "Consistent quality and refined processes.",
      about_point_2_t: "Complex services",
      about_point_2_d: "Diagnostics, repair, service, prevention.",
      about_point_3_t: "Highly skilled specialists",
      about_point_3_d: "Certified technicians with real experience.",

      services_kicker: "Services",
      services_title: "Main directions",
      services_sub: "Clear process, transparent communication, predictable results.",
      srv_01_t: "Engine repair",
      srv_01_d: "Diagnostics and overhaul work.",
      srv_02_t: "Computer diagnostics",
      srv_02_d: "Full scan with modern tools.",
      srv_03_t: "Oil & filter",
      srv_03_d: "Scheduled replacement and check.",
      srv_04_t: "Brake system",
      srv_04_d: "Pads, discs, system setup.",
      srv_05_t: "Transmission",
      srv_05_d: "Diagnostics and repair (manual/auto).",
      srv_06_t: "Electrical",
      srv_06_d: "Electrical system and sensors.",

      branches_kicker: "Branches",
      branches_title: "Our locations",
      branches_sub: "Convenient spots across Tashkent.",
      branch_01_name: "Lyuks Auto Chorsu",
      branch_01_addr: "Tashkent, Shaykhantahur, Chorsu",
      branch_02_name: "Lyuks Auto Chinobod",
      branch_02_addr: "Tashkent, Yunusabad, Atchapar-1",
      branch_03_name: "Lyuks Auto Sergeli",
      branch_03_addr: "Tashkent, Sergeli, Obihayot St., 39",
      branches_hours: "09:00 – 21:00, daily",

      reviews_kicker: "Reviews",
      reviews_title: "What clients say",
      reviews_sub: "Short, clear, and real experiences.",
      r1_text:
        "Very organized service. Fast diagnostics, price explained upfront — transparent.",
      r1_name: "Alisher",
      r2_text:
        "Oil change and inspection done in one visit. Quick and polite.",
      r2_name: "Zulfiya",
      r3_text:
        "Professional approach. The car was ready right on time.",
      r3_name: "Bobur",

      partners_kicker: "Partners",
      partners_title: "Brands we work with",
      partners_sub: "Logos scroll smoothly horizontally.",
      partners_c1_t: "OEM",
      partners_c1_d: "Compatibility with original parts.",
      partners_c2_t: "Equipment",
      partners_c2_d: "Modern diagnostics and service tools.",
      partners_c3_t: "Standards",
      partners_c3_d: "Focus on quality and disciplined processes.",

      contact_kicker: "Contact",
      contact_title: "Get in touch",
      contact_sub:
        "Submit the form and we’ll call you back soon. Or call us directly.",
      form_name: "Name",
      form_phone: "Phone",
      form_service: "Service",
      form_msg: "Message",
      form_service_pick: "-- Select --",
      form_submit: "Send",
      form_success: "Request received. We will contact you soon.",

      footer_note: "Lyuks Auto — minimal design, fast and quality service."
    }
  };

  const STORAGE_KEY = "lyuksauto_lang";
  const DEFAULT_LANG = "uz";

  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return TRANSLATIONS[saved] ? saved : DEFAULT_LANG;
  }

  function setLang(lang) {
    if (!TRANSLATIONS[lang]) lang = DEFAULT_LANG;
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations(lang);
  }

  function applyTranslations(lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];
    document.documentElement.lang = lang === "uz-Cyrl" ? "uz" : lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = dict[key];
      if (typeof value === "string") el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      const value = dict[key];
      if (typeof value === "string") el.innerHTML = value;
    });

    const selects = document.querySelectorAll("[data-lang-select]");
    selects.forEach((sel) => {
      if (sel.value !== lang) sel.value = lang;
    });
  }

  window.LyuksI18n = { getLang, setLang, applyTranslations, TRANSLATIONS };
})();

