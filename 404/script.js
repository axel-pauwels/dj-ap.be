document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".button");
    button.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = e.target.getAttribute("href");
    });
});
