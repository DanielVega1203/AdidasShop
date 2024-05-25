var video = document.getElementById("myVideo");

    video.addEventListener("ended", function() {
        video.currentTime = 0; // Reiniciar el video al principio
        video.play(); // Reproducir el video automáticamente
});