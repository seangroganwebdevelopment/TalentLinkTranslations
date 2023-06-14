const colorButton = document.getElementById('colorButton');
const body = document.body;

colorButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});


// hamburger menu 

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}








