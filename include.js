function w3IncludeHTML() {
  var z, i, a, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    if (z[i].getAttribute("w3-include-html")) {
      a = z[i].cloneNode(false);
      file = z[i].getAttribute("w3-include-html");
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          a.removeAttribute("w3-include-html");
          a.innerHTML = xhttp.responseText;

          z[i].parentNode.replaceChild(a, z[i]);
          w3IncludeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}

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
