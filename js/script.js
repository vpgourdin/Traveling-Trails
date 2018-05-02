function toggleMenu(){
   $(".hamburger-menu").slideToggle();
   $(".hamburger-button").toggleClass("active");
 };

function rotateCarousel() {
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    // nav-text["",""],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });
}

function issueInstructions() {


  $(".hamburger-button").click(toggleMenu);
   rotateCarousel();
 }


$( document ).ready(issueInstructions);
