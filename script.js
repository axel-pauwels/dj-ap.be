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


const images = [
    "images/DJAPDVJ-6.jpg",
    "images/DJAPDVJ-15.jpg",
    "images/DJAPDVJ-14.jpg",
    "images/DJAPDVJ-6.jpg",
    "images/IMG_0156-08.jpg",
    "images/IMG-20240702-WA0017.jpg",
    "images/IMG-20240702-WA0014.jpg"
];

// Selecteer het element waar de afbeelding wordt getoond
const slideshowImage = document.getElementById("slideshow-image");
let currentIndex = 0;

// Functie om naar de volgende afbeelding te gaan
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length; // Zorg dat het opnieuw begint na de laatste afbeelding
    slideshowImage.src = images[currentIndex];
}

// Wissel de afbeelding om de 5 seconden
setInterval(nextImage, 5000);



// Script voor de "Naar boven" knop
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
