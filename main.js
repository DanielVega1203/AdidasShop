var video = document.getElementById("myVideo");

    video.addEventListener("ended", function() {
        video.currentTime = 0; // Reiniciar el video al principio
        video.play(); // Reproducir el video automáticamente
});
let currentIndex = 0;

function moveCarousel() {
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.card');
    const cardWidth = cards[0].offsetWidth + 10; // Ancho de la tarjeta más margen
    const totalWidth = cardWidth * cards.length;

    currentIndex++;

    // Asegurar que el índice sea válido
    if (currentIndex >= cards.length) {
        currentIndex = 0;
    }

    const offset = -currentIndex * cardWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}

// Mover el carrusel cada 3 segundos
setInterval(moveCarousel, 3000);
