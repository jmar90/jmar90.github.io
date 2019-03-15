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

// Click event listener for mobile nav
