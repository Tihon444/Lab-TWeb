document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const button = document.querySelector(".btn");

    container.style.opacity = "0";
    container.style.transform = "translateY(20px)";
    container.style.transition = "opacity 1s ease-out, transform 1s ease-out";

    setTimeout(() => {
        container.style.opacity = "1";
        container.style.transform = "translateY(0)";
    }, 300);


    button.addEventListener("mouseenter", function () {
        button.style.transform = "scale(1.1)";
        button.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)";
    });

    button.addEventListener("mouseleave", function () {
        button.style.transform = "scale(1)";
        button.style.boxShadow = "none";
    });
});
