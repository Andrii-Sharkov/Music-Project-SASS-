// Fixed Header
window.addEventListener('scroll', () => {
  const header = document.querySelector('#header');
  header.classList.toggle('fixed-header', window.scrollY > 0);
});

// Getting Current Year
const year = document.querySelector('.year');
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

// Open Side Menu
const btnCloseMenu = document.querySelector('.btn-close-menu ');
const openMenu = document.querySelector('.bar-menu');
const navMenu = document.querySelector('.nav-menu');

// Open Menu
openMenu.addEventListener('click', function () {
  if(navMenu) {
    navMenu.classList.add('side-menu');
  }
});

// Closing the Side Menu by clicking on Nav Menu
navMenu.addEventListener('click', function (event) {
  const closeSideMenu = event.target;
  closeSideMenu.classList.remove('side-menu');
});

// If Scroll Y > 500 the Pointer Up will be shown
const pointerUp = document.querySelector('.pointer-up');
window.addEventListener('scroll', scrollDown);
function scrollDown() {
  if(scrollY > 500) {
    pointerUp.style.display = 'block';
  } 
  if(!scrollY) {
    pointerUp.style.display = 'none';
  }
}

// Scroll Up after clicking the Pointer Up
// After clicking on Pointer Up the Side Menu will be closed
pointerUp.addEventListener('click', function () {
  window.scrollTo(0, 0);
  if (pointerUp) {
    navMenu.classList.remove('side-menu');
  }
});

// To show Form
const loginContainer = document.querySelector('.login-container');
const login = document.getElementById('login');
login.addEventListener('click', function () {
  loginContainer.style.display = 'block';
  
});

const btnCloseForm = document.querySelector('.btn-close-form ');
btnCloseForm.addEventListener('click', (event) => {
  loginContainer.style.display = 'none';

  event.preventDefault();
});


