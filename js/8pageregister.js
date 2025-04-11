$(document).ready(function () {
    const fullnameInput = $("#fullname");
    const emailInput = $("#email");
    const passwordInput = $("#password");
    const registerButton = $("#registerButton");

    function checkInputs() {
        if (
            fullnameInput.val().trim() !== "" &&
            emailInput.val().trim() !== "" &&
            passwordInput.val().trim() !== ""
        ) {
            registerButton.prop("disabled", false);
        } else {
            registerButton.prop("disabled", true);
        }
    }

    fullnameInput.on("input", checkInputs);
    emailInput.on("input", checkInputs);
    passwordInput.on("input", checkInputs);

    registerButton.on("click", function () {
        const fullname = fullnameInput.val().trim();
        const email = emailInput.val().trim();
        const password = passwordInput.val();

        $.ajax({
            url: "../users/register.php",
            method: "POST",
            data: {
                fullname: fullname,
                email: email,
                password: password
            },
            success: function (data) {
                if (data === "success") {
                    alert("Înregistrare reușită!");
                    window.location.href = "7pagelogin.php";
                } else {
                    alert(data);
                }
            },
            error: function (xhr, status, error) {
                console.error("Eroare:", error);
            }
        });
    });
});
