// script.js
document.addEventListener("DOMContentLoaded", function() {
    const toTopButton = document.createElement("button");
    toTopButton.textContent = "Naar boven";
    toTopButton.classList.add("to-top");
    document.body.appendChild(toTopButton);

    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            toTopButton.classList.add("visible");
        } else {
            toTopButton.classList.remove("visible");
        }
    });

    toTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});