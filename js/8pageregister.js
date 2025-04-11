document.addEventListener("DOMContentLoaded", function () {
    const fullnameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const registerButton = document.getElementById("registerButton");

    function checkInputs() {
        if (fullnameInput.value.trim() !== "" && emailInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
            registerButton.removeAttribute("disabled");
        } else {
            registerButton.setAttribute("disabled", "true");
        }
    }

    fullnameInput.addEventListener("input", checkInputs);
    emailInput.addEventListener("input", checkInputs);
    passwordInput.addEventListener("input", checkInputs);

    registerButton.addEventListener("click", function () {
        const fullname = fullnameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;

        fetch("../users/register.php", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `fullname=${encodeURIComponent(fullname)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
        })
        .then(response => response.text())
        .then(data => {
            if (data === "success") {
               alert("Înregistrare reușită!");
                window.location.href = "7pagelogin.php"; 
            } else {
                alert(data); 
            }
        })
        .catch(error => console.error("Eroare:", error));
    });
});
