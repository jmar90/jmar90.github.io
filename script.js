// Set up TypeIt script
new TypeIt('#hero-header', {
  strings: ["Hi, I'm Julia.",  "A full stack web developer."],
  speed: 60,
  waitUntilVisible: true
}).go();

// Smooth scrolling when clicking on a tags
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});