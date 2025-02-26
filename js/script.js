// Ini JavaScript External

document.getElementById("message-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form submit

    const form = event.target; // Ambil form yang sedang di-submit
    const name = form["full-name"].value.trim();
    const email = form["email"].value.trim();
    const nomorTelepon = form["nomor-telepon"].value.trim();
    const birthDate = form["birth-date"].value.trim();
    const gender = form["gender"].value.trim();
    const messages = form["messages"].value.trim();

    let isValid = true;

    // Reset error messages
    document.getElementById("error-name").innerHTML = "";
    document.getElementById("error-email").innerHTML = "";
    document.getElementById("error-nomor-telepon").innerHTML = "";
    document.getElementById("error-birth-date").innerHTML = "";
    document.getElementById("error-gender").innerHTML = "";
    document.getElementById("error-messages").innerHTML = "";

    // Validasi tiap field
    if (name === "") {
        document.getElementById("error-name").innerHTML = "Tidak boleh kosong";
        isValid = false;
    }
    if (email === "") {
        document.getElementById("error-email").innerHTML = "Tidak boleh kosong";
        isValid = false;
    }
    if (nomorTelepon === "") {
        document.getElementById("error-nomor-telepon").innerHTML = "Tidak boleh kosong";
        isValid = false;
    }
    if (birthDate === "") {
        document.getElementById("error-birth-date").innerHTML = "Tidak boleh kosong";
        isValid = false;
    }
    if (gender === "") {
        document.getElementById("error-gender").innerHTML = "Tidak boleh kosong";
        isValid = false;
    }
    if (messages === "") {
        document.getElementById("error-messages").innerHTML = "Tidak boleh kosong";
        isValid = false;
    }

    if (!isValid) return; // Stop kalau ada error

    setSenderUI(name, email, nomorTelepon, birthDate, gender, messages);
});

function setSenderUI(name, email, nomorTelepon, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-email").innerHTML = email;
    document.getElementById("sender-nomor-telepon").innerHTML = nomorTelepon;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}

