$(document).ready(function() {
  $('.slider').slick({
    dots: true, // Show navigation dots
    infinite: true, // Enable infinite scrolling
    speed: 500, // Animation speed in milliseconds
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1 // Number of slides to scroll at a time
  });

function scrollToSection(sectionId) {
  $('html, body').animate({
    scrollTop: $(sectionId).offset().top
  }, 800);
}


  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.back-to-top-btn').fadeIn();
    } else {
      $('.back-to-top-btn').fadeOut();
    }
  });

  $('.back-to-top-btn').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 800);
  });

  const navbarToggle = document.getElementById("navbarToggle");
  const navbarMenu = document.getElementById("navbarMenu");
  
  navbarToggle.addEventListener("click", function() {
    navbarMenu.classList.toggle("active");
  });

});


