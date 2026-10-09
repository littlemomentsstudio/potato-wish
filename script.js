// =========================
// POTATO WISH — JAVASCRIPT
// =========================

// 1. Mobile navigation menu

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close mobile menu after clicking a navigation link

const navigationItems = navLinks.querySelectorAll("a");

navigationItems.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});


// 2. Automatically update footer year

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


// 3. Contact buttons — add real links later

const whatsappLink = document.getElementById("whatsapp-link");
const instagramLink = document.getElementById("instagram-link");

// These are placeholders until the business owner
// provides the correct contact details.

whatsappLink.addEventListener("click", function (event) {
    if (whatsappLink.getAttribute("href") === "#") {
        event.preventDefault();
        alert("WhatsApp contact details will be added soon! 💗");
    }
});

instagramLink.addEventListener("click", function (event) {
    if (instagramLink.getAttribute("href") === "#") {
        event.preventDefault();
        alert("Instagram profile link will be added soon! 🎀");
    }
});


// 4. Log a welcome message in the browser console

console.log("🥔 Welcome to Potato Wish!");
console.log("Little Gifts, Big Smiles 💗");
