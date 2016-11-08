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

// Creates a hover effect with each of the profile pictures for the About page
function hover(element) {
  // Stores the id corresponding to which member is hovered over
  var name = element.id;
  // Changes image source depending on 'name' to display appropriate executive
  element.setAttribute('src', 'wolfpackExecutives/' + name + '.jpg');
  // Sets border-radius to 5em for aesthetic appeal
  element.style.borderRadius = "5em";
}
// Changes image back to logo upon mouseout
function unhover(element) {
  element.setAttribute('src', 'WolfPack_Logo.svg');
  element.style.borderRadius = "0em";
}
