function showMessage(message, color = "darkred") {
    let msgBox = $("#messageBox");

    if (msgBox.length) {
        msgBox.remove();
    }

    msgBox = $("<div></div>")
        .attr("id", "messageBox")
        .css({
            position: "fixed",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "10px",
            backgroundColor: color,
            color: "white",
            borderRadius: "5px",
            zIndex: "1000",
            opacity: "0",
            transition: "opacity 0.5s ease-in-out"
        })
        .text(message);

    $("body").append(msgBox);

    setTimeout(() => msgBox.css("opacity", "1"), 50);
    setTimeout(() => {
        msgBox.css("opacity", "0");
        setTimeout(() => msgBox.remove(), 500);
    }, 3000);
}

$(document).ready(function () {
    $("#nextButton").on("click", function () {
        const emailInput = $("#email");
        const passwordInput = $("#password");
        const email = emailInput.val().trim();
        const password = passwordInput.val().trim();

        if (!email || !password) {
            showMessage("Toate câmpurile sunt obligatorii!");
            emailInput.toggleClass("input-error", !email);
            passwordInput.toggleClass("input-error", !password);
            return;
        }

        $.ajax({
            url: "users/login.php",
            method: "POST",
            data: {
                email: email,
                password: password
            },
            success: function (data) {
                if (data === "success") {
                    showMessage("Autentificare reușită!", "green");
                    setTimeout(() => {
                        window.location.href = "3page.php";
                    }, 1000);
                } else {
                    showMessage(data);
                }
            },
            error: function () {
                showMessage("Eroare la conectare. Încearcă din nou.");
            }
        });
    });

    $("input").on("input", function () {
        $(this).removeClass("input-error");
        $("#messageBox").remove();
    });
});
