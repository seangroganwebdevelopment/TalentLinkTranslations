const colorButton = document.getElementById('colorButton');
const body = document.body;

colorButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});


// hamburger menu 

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function() {
  menu.classList.toggle('show');
});

const menuItems = menu.querySelectorAll('a');
menuItems.forEach(function(item) {
  item.addEventListener('click', function() {
    menu.classList.remove('show');
  });
});








