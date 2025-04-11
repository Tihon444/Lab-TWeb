function showMessage(message, color = "darkred") {
    let msgBox = document.getElementById("messageBox");

    if (msgBox) {
        msgBox.remove();
    }

    msgBox = document.createElement("div");
    msgBox.id = "messageBox";
    msgBox.style.position = "fixed";
    msgBox.style.top = "10px";
    msgBox.style.left = "50%";
    msgBox.style.transform = "translateX(-50%)";
    msgBox.style.padding = "10px";
    msgBox.style.backgroundColor = color;
    msgBox.style.color = "white";
    msgBox.style.borderRadius = "5px";
    msgBox.style.zIndex = "1000";
    msgBox.style.opacity = "0";
    msgBox.style.transition = "opacity 0.5s ease-in-out";
    msgBox.textContent = message;

    document.body.appendChild(msgBox);

    setTimeout(() => {
        msgBox.style.opacity = "1";
    }, 50);

    setTimeout(() => {
        msgBox.style.opacity = "0";
        setTimeout(() => {
            if (msgBox) msgBox.remove();
        }, 500);
    }, 3000);
}

document.getElementById("nextButton").addEventListener("click", function () {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
        showMessage("Toate câmpurile sunt obligatorii!");
        emailInput.classList.toggle("input-error", !email);
        passwordInput.classList.toggle("input-error", !password);
        return;
    }

    fetch("users/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
    })
        .then(res => res.text())
        .then(data => {
            if (data === "success") {
                showMessage("Autentificare reușită!", "green");
                setTimeout(() => {
                    window.location.href = "3page.php";
                }, 1000);
            } else {
                showMessage(data); 
            }
        })
        .catch(error => {
            console.error("Eroare:", error);
            showMessage("Eroare la conectare. Încearcă din nou.");
        });
});

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", function () {
        input.classList.remove("input-error");
        const msgBox = document.getElementById("messageBox");
        if (msgBox) msgBox.remove();
    });
});
