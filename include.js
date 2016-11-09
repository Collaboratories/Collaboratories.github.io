$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Make it work with hover over td not img

// Baljinder Benipal

// Creates a hover effect with each of the profile pictures for the About page
function hover(element) {
  // Stores the id corresponding to which member is hovered over
  var childElement = element.firstChild;
  // Changes image source depending on 'name' to display appropriate executive
  childElement.setAttribute('src', 'wolfpackExecutives/' + childElement + '.jpg');
  // Sets border-radius to 5em for aesthetic appeal
  childElement.style.borderRadius = "5em";
  // Add class to alter background for profile section
  element.className += " isHover";
}
// Changes image back to logo upon mouseout
function unhover(element) {
  var childElement = element.firstChild;
  childElement.setAttribute('src', 'New_WolfPack_Logo.svg');
  childElement.style.borderRadius = "0em";
  element.className = element.className.split(" ")[0];
}
