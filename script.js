/* =========================================
   POTATO WISH
   Website Interactions
========================================= */


/* ---------- 1. Translation Dictionary ---------- */

const translations = {
    en: {
        pageTitle: "Potato Wish | Fresh Potatoes, Fair Prices",
        pageDescription:
            "Potato Wish offers fresh potatoes at affordable prices. Explore our products and contact us for orders.",

        brandTagline: "Freshness You Can Trust",

        navHome: "Home",
        navProducts: "Products",
        navAbout: "About Us",
        navContact: "Contact",

        languageLabel: "Language",
        menuOpen: "Menu",
        menuClose: "Close",
        menuOpenLabel: "Open navigation",
        menuCloseLabel: "Close navigation",

        heroEyebrow: "FRESH FROM THE FARM",
        heroTitle: "Fresh Potatoes for Every Kitchen",
        heroDescription:
            "Quality potatoes at fair prices for homes, shops and food businesses.",
        exploreProducts: "Explore Products",
        contactUs: "Contact Us",

        imageComingSoon: "Product image coming soon",
        heroImageLabel: "Potato product image placeholder",
        regularImageLabel: "Regular potatoes image placeholder",
        premiumImageLabel: "Premium potatoes image placeholder",
        largeImageLabel: "Large potatoes image placeholder",
        bulkImageLabel: "Bulk potatoes image placeholder",
        aboutImageLabel: "Potato business image placeholder",

        benefitQualityTitle: "Quality First",
        benefitQualityText: "Potatoes selected with care.",
        benefitPriceTitle: "Fair Prices",
        benefitPriceText: "Options for different budgets.",
        benefitServiceTitle: "Customer Focus",
        benefitServiceText: "Helpful service for every order.",

        productsEyebrow: "OUR PRODUCTS",
        productsTitle: "Choose Your Potatoes",
        productsDescription:
            "Explore our available options and choose what suits your needs.",

        productCategory: "FRESH POTATOES",
        productRegular: "Regular Potatoes",
        regularDescription: "An everyday choice for home cooking.",
        productPremium: "Premium Potatoes",
        premiumDescription:
            "A carefully selected option for your kitchen.",
        productLarge: "Large Potatoes",
        largeDescription: "A practical option for larger meals.",
        productBulk: "Bulk Potatoes",
        bulkDescription: "An option for shops and food businesses.",

        priceLabel: "Price",
        orderNow: "Order Now",

        pricingNote:
            "Listed prices are temporary examples. Final prices and selling units will be confirmed by the business owner.",

        aboutEyebrow: "ABOUT POTATO WISH",
        aboutTitle: "Simple Shopping. Honest Service.",
        aboutDescription:
            "Potato Wish is focused on making potato shopping straightforward, with clear product options, transparent pricing and helpful customer service.",
        aboutPointOne: "Clear product and price information",
        aboutPointTwo: "Options for household and business needs",
        aboutPointThree: "Direct contact for order enquiries",

        contactEyebrow: "GET IN TOUCH",
        contactTitle: "Ready to Place an Order?",
        contactDescription:
            "Contact us to confirm availability, quantity, prices and delivery details.",
        contactBusinessLabel: "Business",
        contactAvailabilityLabel: "Product availability",
        contactAvailabilityValue: "Confirm before ordering",
        whatsappContact: "WhatsApp",
        instagramContact: "Instagram",
        contactNote:
            "Contact links will be activated when the business owner provides the correct details.",

        footerDescription:
            "Fresh potatoes. Fair prices. Reliable service.",
        rightsReserved: "All rights reserved.",

        orderAlertTitle: "Order Enquiry",
        orderAlertProduct: "Product",
        orderAlertPrice: "Displayed price",
        orderAlertUnit:
            "The selling unit has not been confirmed yet.",
        orderAlertContact:
            "Please contact the business owner to confirm availability and place your order.",

        whatsappUnavailable:
            "The WhatsApp link has not been added yet.",
        instagramUnavailable:
            "The Instagram link has not been added yet."
    },

    ur: {
        pageTitle: "پوٹیٹو وش | تازہ آلو، مناسب قیمت",
        pageDescription:
            "پوٹیٹو وش پر مناسب قیمت میں آلو دستیاب ہیں۔ مصنوعات دیکھیں اور آرڈر کے لیے رابطہ کریں۔",

        brandTagline: "تازگی جس پر آپ اعتماد کریں",

        navHome: "ہوم",
        navProducts: "مصنوعات",
        navAbout: "ہمارے بارے میں",
        navContact: "رابطہ",

        languageLabel: "زبان",
        menuOpen: "مینو",
        menuClose: "بند کریں",
        menuOpenLabel: "نیویگیشن کھولیں",
        menuCloseLabel: "نیویگیشن بند کریں",

        heroEyebrow: "کھیتوں سے تازہ",
        heroTitle: "ہر کچن کے لیے تازہ آلو",
        heroDescription:
            "گھروں، دکانوں اور کاروبار کے لیے مناسب قیمت پر معیاری آلو۔",
        exploreProducts: "مصنوعات دیکھیں",
        contactUs: "رابطہ کریں",

        imageComingSoon: "مصنوعات کی تصویر جلد شامل ہوگی",
        heroImageLabel: "آلو کی تصویر کے لیے جگہ",
        regularImageLabel: "عام آلو کی تصویر کے لیے جگہ",
        premiumImageLabel: "بہترین آلو کی تصویر کے لیے جگہ",
        largeImageLabel: "بڑے آلو کی تصویر کے لیے جگہ",
        bulkImageLabel: "تھوک آلو کی تصویر کے لیے جگہ",
        aboutImageLabel: "کاروبار کی تصویر کے لیے جگہ",

        benefitQualityTitle: "معیار ہماری ترجیح",
        benefitQualityText: "احتیاط سے منتخب کیے گئے آلو۔",
        benefitPriceTitle: "مناسب قیمتیں",
        benefitPriceText: "مختلف بجٹ کے مطابق انتخاب۔",
        benefitServiceTitle: "صارفین کی اہمیت",
        benefitServiceText: "ہر آرڈر کے لیے مددگار سروس۔",

        productsEyebrow: "ہماری مصنوعات",
        productsTitle: "اپنی پسند کے آلو منتخب کریں",
        productsDescription:
            "دستیاب اقسام دیکھیں اور اپنی ضرورت کے مطابق انتخاب کریں۔",

        productCategory: "تازہ آلو",
        productRegular: "عام آلو",
        regularDescription: "روزمرہ کھانا پکانے کے لیے موزوں۔",
        productPremium: "اعلیٰ معیار کے آلو",
        premiumDescription: "آپ کے کچن کے لیے منتخب کردہ آلو۔",
        productLarge: "بڑے آلو",
        largeDescription: "زیادہ مقدار میں کھانا بنانے کے لیے موزوں۔",
        productBulk: "تھوک آلو",
        bulkDescription: "دکانوں اور فوڈ کاروبار کے لیے۔",

        priceLabel: "قیمت",
        orderNow: "آرڈر کریں",

        pricingNote:
            "یہ قیمتیں عارضی مثالیں ہیں۔ حتمی قیمت اور فروخت کی اکائی کاروبار کا مالک تصدیق کرے گا۔",

        aboutEyebrow: "پوٹیٹو وش کے بارے میں",
        aboutTitle: "آسان خریداری، قابلِ اعتماد سروس",
        aboutDescription:
            "پوٹیٹو وش کا مقصد آلو کی خریداری کو آسان بنانا ہے، جہاں مصنوعات کی واضح تفصیلات، مناسب قیمتیں اور مددگار سروس فراہم کی جائے۔",
        aboutPointOne: "مصنوعات اور قیمتوں کی واضح معلومات",
        aboutPointTwo: "گھریلو اور کاروباری ضروریات کے لیے انتخاب",
        aboutPointThree: "آرڈر کی معلومات کے لیے براہِ راست رابطہ",

        contactEyebrow: "ہم سے رابطہ کریں",
        contactTitle: "کیا آپ آرڈر دینا چاہتے ہیں؟",
        contactDescription:
            "دستیابی، مقدار، قیمت اور ڈیلیوری کی تفصیلات کی تصدیق کے لیے رابطہ کریں۔",
        contactBusinessLabel: "کاروبار",
        contactAvailabilityLabel: "مصنوعات کی دستیابی",
        contactAvailabilityValue: "آرڈر سے پہلے تصدیق کریں",
        whatsappContact: "واٹس ایپ",
        instagramContact: "انسٹاگرام",
        contactNote:
            "کاروبار کا مالک درست تفصیلات فراہم کرے گا تو رابطے کے لنکس شامل کر دیے جائیں گے۔",

        footerDescription:
            "تازہ آلو، مناسب قیمتیں، قابلِ اعتماد سروس۔",
        rightsReserved: "جملہ حقوق محفوظ ہیں۔",

        orderAlertTitle: "آرڈر کی معلومات",
        orderAlertProduct: "مصنوعات",
        orderAlertPrice: "درج شدہ قیمت",
        orderAlertUnit:
            "فروخت کی اکائی کی ابھی تصدیق نہیں ہوئی۔",
        orderAlertContact:
            "دستیابی کی تصدیق اور آرڈر کے لیے کاروبار کے مالک سے رابطہ کریں۔",

        whatsappUnavailable:
            "واٹس ایپ کا لنک ابھی شامل نہیں کیا گیا۔",
        instagramUnavailable:
            "انسٹاگرام کا لنک ابھی شامل نہیں کیا گیا۔"
    }
};


/* ---------- 2. Language Switching ---------- */

const languageSelect = document.getElementById("language-select");

function setLanguage(language) {
    const selectedLanguage = translations[language]
        ? language
        : "en";

    const dictionary = translations[selectedLanguage];

    // Update document language and text direction.
    document.documentElement.lang = selectedLanguage;
    document.documentElement.dir =
        selectedLanguage === "ur" ? "rtl" : "ltr";

    // Update translated text.
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;

        if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
            element.textContent = dictionary[key];
        }
    });

    // Update accessible image descriptions.
    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
        const key = element.dataset.i18nAria;

        if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
            element.setAttribute("aria-label", dictionary[key]);
        }
    });

    // Update page metadata.
    document.title = dictionary.pageTitle;

    const description = document.querySelector(
        'meta[name="description"]'
    );

    if (description) {
        description.setAttribute("content", dictionary.pageDescription);
    }

    // Keep language selection in sync.
    if (languageSelect) {
        languageSelect.value = selectedLanguage;
    }

    // Update mobile navigation labels.
    updateMenuButton();

    // Update HTML lang and direction for assistive technologies.
    document.documentElement.setAttribute("lang", selectedLanguage);
}

if (languageSelect) {
    languageSelect.addEventListener("change", (event) => {
        setLanguage(event.target.value);
    });
}


/* ---------- 3. Mobile Navigation ---------- */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

function updateMenuButton() {
    if (!menuToggle) return;

    const language = document.documentElement.lang || "en";
    const dictionary = translations[language] || translations.en;
    const isOpen = navLinks?.classList.contains("open") || false;

    menuToggle.textContent = isOpen
        ? dictionary.menuClose
        : dictionary.menuOpen;

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? dictionary.menuCloseLabel : dictionary.menuOpenLabel
    );
}

function closeMobileMenu() {
    if (!menuToggle || !navLinks) return;

    navLinks.classList.remove("open");
    updateMenuButton();
}

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        updateMenuButton();
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMobileMenu);
    });

    // Close menu when clicking outside it.
    document.addEventListener("click", (event) => {
        const clickedInsideNav = navLinks.contains(event.target);
        const clickedToggle = menuToggle.contains(event.target);

        if (!clickedInsideNav && !clickedToggle) {
            closeMobileMenu();
        }
    });

    // Close the mobile menu when switching to desktop width.
    window.addEventListener("resize", () => {
        if (window.innerWidth > 760) {
            closeMobileMenu();
        }
    });
}


/* ---------- 4. Product Order Buttons ---------- */

document.querySelectorAll(".order-button").forEach((button) => {
    button.addEventListener("click", () => {
        const language = document.documentElement.lang || "en";
        const dictionary = translations[language] || translations.en;

        const productName = button.dataset.productName || "Potatoes";
        const productPrice = button.dataset.productPrice || "0";

        const message = [
            dictionary.orderAlertTitle,
            "",
            `${dictionary.orderAlertProduct}: ${productName}`,
            `${dictionary.orderAlertPrice}: Rs. ${productPrice}`,
            "",
            dictionary.orderAlertUnit,
            dictionary.orderAlertContact
        ].join("\n");

        window.alert(message);
    });
});


/* ---------- 5. Contact Link Placeholders ---------- */

function setupContactPlaceholder(elementId, messageKey) {
    const link = document.getElementById(elementId);

    if (!link) return;

    link.addEventListener("click", (event) => {
        const url = link.getAttribute("href");

        // Prevent placeholder links from navigating nowhere.
        if (!url || url === "#") {
            event.preventDefault();

            const language = document.documentElement.lang || "en";
            const dictionary = translations[language] || translations.en;

            window.alert(dictionary[messageKey]);
        }
    });
}

setupContactPlaceholder(
    "whatsapp-link",
    "whatsappUnavailable"
);

setupContactPlaceholder(
    "instagram-link",
    "instagramUnavailable"
);


/* ---------- 6. Automatic Footer Year ---------- */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* ---------- 7. Initialize Website ---------- */

// Default language: English.
setLanguage("en");

console.log("Potato Wish website initialized.");

