// Script voor het hamburger-menu
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    // Controleer of hamburger en navLinks bestaan voordat je een listener toevoegt
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function() {
            navLinks.classList.toggle("active"); // Toggle de 'active'-class op nav-links
        });
    }
});