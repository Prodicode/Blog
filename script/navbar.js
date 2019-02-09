window.onscroll = function() {adjustNavbar()};
window.onresize = function() {loadsticky()};
var header = document.getElementById("header");
var navbar = document.getElementById("navbar");
var sticky = 0;

function loadsticky() {
  sticky = header.offsetHeight;
}
function adjustNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 
