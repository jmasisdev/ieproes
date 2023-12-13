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

document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-button');
  const portfolioItems = document.querySelectorAll('.item');

  filterButtons.forEach(button => {
      button.addEventListener('click', function () {
          const category = this.getAttribute('data-filter');
          filterPortfolio(category);
      });
  });

  function filterPortfolio(category) {
      portfolioItems.forEach(item => {
          const itemCategory = item.getAttribute('data-category');

          if (category === 'all' || category === itemCategory) {
              item.classList.remove('hidden');
          } else {
              item.classList.add('hidden');
          }
      });
  }
});

