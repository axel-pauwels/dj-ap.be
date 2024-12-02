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

// Houd de huidige afbeeldingindex per galerij bij
const galleryIndices = {};

// Functie om de afbeelding te tonen op basis van de index voor een specifieke galerij
function showImage(galleryId, index) {
    const gallery = document.querySelector(`.gallery[data-gallery="${galleryId}"]`);
    if (!gallery) return; // Check of de galerij bestaat
    const images = gallery.querySelectorAll('.gallery-image');

    // Stel de index in als hij buiten bereik is
    if (index < 0) {
        index = images.length - 1;
    } else if (index >= images.length) {
        index = 0;
    }

    // Update de huidige index voor deze galerij
    galleryIndices[galleryId] = index;

    // Alle afbeeldingen verbergen en alleen de juiste afbeelding tonen
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

// Functie om naar de vorige afbeelding in de galerij te gaan
function prevImage(galleryId) {
    const currentIndex = galleryIndices[galleryId] || 0;
    showImage(galleryId, currentIndex - 1);
}

// Functie om naar de volgende afbeelding in de galerij te gaan
function nextImage(galleryId) {
    const currentIndex = galleryIndices[galleryId] || 0;
    showImage(galleryId, currentIndex + 1);
}

// Initialiseer elke galerij met de eerste afbeelding zichtbaar
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.gallery').forEach(gallery => {
        const galleryId = gallery.getAttribute('data-gallery');
        galleryIndices[galleryId] = 0; // Begin bij de eerste afbeelding
        showImage(galleryId, 0); // Toon de eerste afbeelding
    });
});



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
