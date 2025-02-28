document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".logo-container img");
    const button = document.querySelector(".button");

    if (logo) {
        logo.addEventListener("mouseenter", function () {
            logo.style.transform = "scale(1.2)";
        });

        logo.addEventListener("mouseleave", function () {
            logo.style.transform = "scale(1)";
        });

    }

    if (button) {
        button.addEventListener("mouseenter", function () {
            button.style.backgroundColor = "#333";
            button.style.color = "#fff";
        });

        button.addEventListener("mouseleave", function () {
            button.style.backgroundColor = "";
            button.style.color = "";
        });
    }
});
