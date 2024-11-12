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



// Functie om de modal te openen met de geklikte afbeelding
function openModal(imgElement) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    modalImg.src = imgElement.src;  // Zet de bron van de geklikte afbeelding in de modal
    modal.style.display = "flex";   // Toon de modal
}

// Functie om de modal te sluiten
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";   // Verberg de modal
}