document.addEventListener("DOMContentLoaded", function () {
    const fullnameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const registerButton = document.getElementById("registerButton");

    function checkInputs() {
        const fullname = fullnameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        registerButton.disabled = fullname === "" || email === "" || password === "";
    }

    fullnameInput.addEventListener("input", checkInputs);
    emailInput.addEventListener("input", checkInputs);
    passwordInput.addEventListener("input", checkInputs);

    registerButton.addEventListener("click", function () {
        const fullname = fullnameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!fullname || !email || !password) {
            alert("Toate câmpurile sunt obligatorii!");
            return;
        }

        localStorage.setItem("fullname", fullname);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        console.log("Date salvate în Local Storage:");
        console.log("Fullname:", localStorage.getItem("fullname"));
        console.log("Email:", localStorage.getItem("email"));
        console.log("Password:", localStorage.getItem("password"));

        window.location.href = "7pagelogin.php";
    });
});
