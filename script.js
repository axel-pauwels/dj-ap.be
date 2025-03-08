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

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length; // Zorg dat het opnieuw begint na de laatste afbeelding
    slideshowImage.src = images[currentIndex];
}
setInterval(nextImage, 5000);




// document.addEventListener('DOMContentLoaded', () => {
//     // Smooth scroll voor directe klikken op de pagina
//     document.getElementById("scrollInfo")?.addEventListener("click", function(event) {
//         event.preventDefault();
//         document.getElementById("info")?.scrollIntoView({ behavior: "smooth" });
//     });

//     document.getElementById("scrollReferenties")?.addEventListener("click", function(event) {
//         event.preventDefault();
//         document.getElementById("referenties")?.scrollIntoView({ behavior: "smooth" });
//     });

//     document.getElementById("scrollPictures")?.addEventListener("click", function(event) {
//         event.preventDefault();
//         document.getElementById("pictures")?.scrollIntoView({ behavior: "smooth" });
//     });

//     document.getElementById("scrollContact")?.addEventListener("click", function(event) {
//         event.preventDefault();
//         document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
//     });

//     // Check bij het laden van de pagina of er een fragment-ID in de URL staat
//     const hash = window.location.hash;
//     if (hash) {
//         const target = document.querySelector(hash);
//         if (target) {
//             target.scrollIntoView({ behavior: 'smooth' });
//         }
//     }
// });


// // Bij het laden van de pagina, de hash uitlezen en er naartoe scrollen
// window.addEventListener("load", function() {
//     const hash = window.location.hash;
//     if (hash) {
//         const target = document.querySelector(hash);
//         if (target) {
//             target.scrollIntoView({ behavior: "smooth" });
//         }
//     }
// });




// PICTURES
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const thumbnails = document.querySelectorAll('.thumbnail');
const closeBtn = document.querySelector('.close');

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = thumbnail.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});





// TO TOP KNOP
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


// CONTACT FORM
fetch('../form/contactForm.html')
.then(response => response.text())
.then(data => {
  document.getElementById('form').innerHTML = data;
})
.catch(error => console.error('Error loading form:', error));