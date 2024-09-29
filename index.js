let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

// Show the current slide
function showSlide(index) {
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots[i].classList.remove('active');
  });

  dots[currentSlide].classList.add('active');
}

// Next/previous controls
document.querySelector('.prev').addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

document.querySelector('.next').addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

// Dot controls
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
  });
});

// Auto slide every 5 seconds
setInterval(() => {
  showSlide(currentSlide + 1);
}, 5000);
