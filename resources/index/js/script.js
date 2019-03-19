////////////////////////////////
// TYPE IT SCRIPT FOR HEADER //
///////////////////////////////
new TypeIt('#hero-header', {
  strings: ["Hi, I'm Julia.",  "A full stack web developer."],
  speed: 60,
  waitUntilVisible: true
}).go();


////////////////////////////////
//      DOM MANIPULATION     //
///////////////////////////////
// Smooth scrolling when clicking on anchor tags
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// If someone clicks on the hamburger menu icon, show mobile nav
const icon = document.querySelector('.mobile-nav-icon i');
const nav = document.querySelector('#nav');
const navIconComb = document.querySelector('nav .row');

const mobileNav = () => {
  if(icon.classList.contains('fa-bars') && nav.classList.contains('flex-nav')){
    icon.classList.add('fa-times');
    icon.classList.remove('fa-bars');
    nav.classList.add('mobile-nav');
    nav.classList.remove('flex-nav');
  } else {
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-times');
    nav.classList.add('flex-nav');
    nav.classList.remove('mobile-nav');
  }
}

icon.addEventListener('click', mobileNav);

// Set Event Listeners for When Mobile Nav Menu Should Close
const closeMobileNav = () => {
  nav.classList.add('flex-nav');
  nav.classList.remove('mobile-nav');
  icon.classList.add('fa-bars');
  icon.classList.remove('fa-times');
}

document.addEventListener('click', function(event) {  //If you click outside menu, close menu
  let isClickInside = navIconComb.contains(event.target);
  if(!isClickInside){
    closeMobileNav();
  }
})

document.addEventListener('touchstart', function(event) {  //If you touch outside menu, close it
  let isTouchInside = navIconComb.contains(event.target);
  if(!isTouchInside){
    closeMobileNav();
  }
})

navIconComb.addEventListener('mouseleave', () => {  //If mouse leaves menu, close after 550 ms
  setTimeout(closeMobileNav, 550);
});

window.addEventListener('scroll', closeMobileNav);  //If you scroll, close menu
