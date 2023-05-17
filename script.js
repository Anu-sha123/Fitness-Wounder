let currentSlide = 0;
const carouselImages = document.querySelectorAll('.carousel img');
const totalSlides = carouselImages.length;

function showSlide(slideIndex) {
  if (slideIndex >= carouselImages.length) {
    currentSlide = 0;
  } else if (slideIndex < 0) {
    currentSlide = carouselImages.length - 1;
  } else {
    currentSlide = slideIndex;
  }

  // Hide all images
  for (var i = 0; i < carouselImages.length; i++) {
    carouselImages[i].style.display = 'none';
  }

  // Show the current slide
  carouselImages[currentSlide].style.display = 'block';
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function previousSlide() {
  showSlide(currentSlide - 1);
}

setInterval(nextSlide, 3000);


function changeSlide(direction) {
  // Increment or decrement current slide index based on direction
  currentSlide += direction;

  // Show the updated slide
  showSlide(currentSlide);
}



// scroll gototop

window.addEventListener('scroll', function () {
  var goTopButton = document.querySelector('.go-top-button');
  if (window.pageYOffset > 200) {
    goTopButton.style.display = 'block';
  } else {
    goTopButton.style.display = 'none';
  }
});

document
  .querySelector('.go-top-button')
  .addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
