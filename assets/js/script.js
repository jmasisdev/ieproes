let currentIndex = 0;
const slideContainer = document.querySelector('.carousel-slide');
const thumbnails = document.querySelectorAll('.thumbnails img');
const totalSlides = thumbnails.length;

function mostrarImagen(index) {
  currentIndex = index;
  actualizarSlide();
}

function actualizarSlide() {
  const translateValue = -currentIndex * 100 + '%';
  slideContainer.style.transform = 'translateX(' + translateValue + ')';
}

function siguienteSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  actualizarSlide();
}

function iniciarCarrusel() {
  setInterval(siguienteSlide, 3000);
}

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    mostrarImagen(index);
  });
});

iniciarCarrusel();
