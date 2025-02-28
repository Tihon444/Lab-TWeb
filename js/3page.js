document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".logo-container img");
    const images = document.querySelectorAll(".table-container img");

    if (logo) {
        logo.addEventListener("mouseenter", function () {
            logo.style.transform = "scale(1.2)";
        });

        logo.addEventListener("mouseleave", function () {
            logo.style.transform = "scale(1)";
        });
    }

    images.forEach((img) => {
        img.style.opacity = "0";
        img.style.transition = "opacity 1s ease-in-out";

        setTimeout(() => {
            img.style.opacity = "1";
        }, 500);
    });
});
