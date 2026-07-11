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