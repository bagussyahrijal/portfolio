window.addEventListener('load', function () {
    document.querySelectorAll('section, section div, section div img, section a').forEach(function (element) {
        element.classList.remove('opacity-0', 'translate-y-5');
    });
});

window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar-container');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        navbar.style.backgroundColor = 'rgba(30, 41, 59, 1)';
    } else {
        navbar.style.background = 'linear-gradient(to bottom, rgba(30, 41, 59, 0.88), rgba(0, 0, 0, 0))';
    }
});

window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.fade-in');

    sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

    
        if (sectionPosition < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
});