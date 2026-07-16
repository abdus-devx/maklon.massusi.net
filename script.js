// =======================================
// ELEMENT
// =======================================

const header = document.querySelector(".lpm-header");
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

// =======================================
// SCROLL EFFECT
// =======================================

function handleScroll() {

    // Header
    header.classList.toggle("scrolled", window.scrollY > 50);

    // Active Navigation
    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + current
        );

    });

}

window.addEventListener("scroll", handleScroll, {
    passive: true
});

// Jalankan sekali saat halaman selesai dimuat
handleScroll();


// =======================================
// TAB VARIAN PRODUK
// =======================================

const tabs = document.querySelectorAll(".lpm-varian-tabs button");
const panels = document.querySelectorAll(".lpm-panel");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(btn => btn.classList.remove("active"));
        panels.forEach(panel => panel.classList.remove("active"));

        tab.classList.add("active");

        document
            .getElementById(tab.dataset.tab)
            ?.classList.add("active");

    });

});

// =======================================
// FAQ ACCORDION
// =======================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        const isActive = item.classList.contains("active");

        faqItems.forEach(faq => {

            faq.classList.remove("active");
            faq.querySelector(".faq-answer").style.maxHeight = null;

        });

        if (!isActive) {

            item.classList.add("active");

            const answer = item.querySelector(".faq-answer");

            answer.style.maxHeight = answer.scrollHeight + "px";

        }

    });

});

// buka item pertama saat halaman dimuat
const firstFaq = document.querySelector(".faq-item.active");

if (firstFaq) {

    const answer = firstFaq.querySelector(".faq-answer");

    answer.style.maxHeight = answer.scrollHeight + "px";

}

// =======================================
// LUCIDE ICON
// =======================================

lucide.createIcons({
    attrs: {
        "stroke-width": 1.25
    }
});