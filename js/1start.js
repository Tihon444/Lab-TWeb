document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".logo");

    if (logo) {
        logo.addEventListener("mouseenter", function () {
            logo.style.transform = "scale(1.2)";
        });

        logo.addEventListener("mouseleave", function () {
            logo.style.transform = "scale(1)";
        });

    }
});
