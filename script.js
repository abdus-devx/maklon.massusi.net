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
// LUCIDE ICON
// =======================================

lucide.createIcons({
    attrs: {
        "stroke-width": 1.25
    }
});