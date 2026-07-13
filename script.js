const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});

// =======================================
// TAB VARIAN PRODUK
// =======================================

const tabs = document.querySelectorAll(".lpm-varian-tabs button");
const panels = document.querySelectorAll(".lpm-panel");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        // hapus active semua tombol
        tabs.forEach(btn => btn.classList.remove("active"));

        // aktifkan tombol yg dipilih
        tab.classList.add("active");

        // sembunyikan semua panel
        panels.forEach(panel => {
            panel.classList.remove("active");
        });

        // tampilkan panel sesuai data-tab
        const target = document.getElementById(tab.dataset.tab);

        if(target){
            target.classList.add("active");
        }

    });

});

const header = document.querySelector(".lpm-header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

lucide.createIcons({
    attrs: {
      "stroke-width": 1.25
    }
  });