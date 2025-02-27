// Ini JavaScript External

//Navigasi
document.querySelector('a[href="#our-packages-section"]').addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("our-packages-section").scrollIntoView({ behavior: "smooth" });
});

document.querySelector('a[href="#call-us-section"]').addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("call-us-section").scrollIntoView({ behavior: "smooth" });
});


//Banner
let indexBanner = 0;
const banners = [
    "https://i.pinimg.com/736x/0f/e3/fc/0fe3fcb613bd741a02b71b302593293b.jpg",
    "https://i.pinimg.com/736x/c8/01/73/c8017322e162a20c5bdc6089cfdf4ab2.jpg",
    "https://i.pinimg.com/736x/72/0f/10/720f10f1eea9231d3289ba9ee2b10e19.jpg"
];

function showBanner() {
    const banner = document.querySelector('.main-banner');
    if (banner) {
        banner.style.backgroundImage = `url(${banners[indexBanner]})`;
        indexBanner = (indexBanner + 1) % banners.length;
    }
}

// Auto Play setiap 1 detik
setInterval(showBanner, 1000);

// Tampilkan banner pertama kali
window.onload = showBanner;


//Form
document.getElementById("message-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Hentikan submit sementara untuk validasi

    const form = event.target; // Ambil form yang sedang di-submit
    const name = form["full-name"].value.trim();
    const email = form["email"].value.trim();
    const messages = form["message"].value.trim();

    let isValid = true;

    // Reset error messages
    document.getElementById("error-name").innerHTML = "";
    document.getElementById("error-email").innerHTML = "";
    document.getElementById("error-message").innerHTML = "";

    // Validasi tiap field
    if (name === "") {
        document.getElementById("error-name").innerHTML = "Nama tidak boleh kosong";
        isValid = false;
    }
    if (email === "") {
        document.getElementById("error-email").innerHTML = "Email tidak boleh kosong";
        isValid = false;
    }
    if (messages === "") {
        document.getElementById("error-message").innerHTML = "Pesan tidak boleh kosong";
        isValid = false;
    }

    if (!isValid) return; 
    form.submit();
});



