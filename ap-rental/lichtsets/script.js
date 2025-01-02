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










document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery img'); // Selecteer alle afbeeldingen
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeLightbox = document.getElementById('close-lightbox');

    // Open de lightbox met de geselecteerde afbeelding
    images.forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImage.src = img.src; // Gebruik dezelfde afbeelding
            lightboxImage.alt = img.alt;
        });
    });

    // Sluit de lightbox bij klik op het kruisje
    closeLightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Sluit de lightbox als er buiten de afbeelding wordt geklikt
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});



fetch('../../form-huren/contactFormLICHTSETS.html')
        .then(response => response.text())
        .then(data => {
        document.getElementById('form').innerHTML = data;
        })
        .catch(error => console.error('Error loading form:', error));