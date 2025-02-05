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

    
        if (sectionPosition < windowHeight - 50) {
            section.classList.remove('invisible')
            section.classList.add('visible');
        }
        else{
            section.classList.remove('visible')
            section.classList.add('invisible')
        }
    });
});
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section'); 
    const navLinks = document.querySelectorAll('.a-navbar'); 

    sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        
        if (sectionTop < window.innerHeight/2 && sectionBottom > 0) {
            navLinks.forEach(link => link.classList.remove('underlines'));
            if (navLinks[index]) {
                navLinks[index].classList.add('underlines');
            }
        }
    });
});
function scrollToWhere (id){
    const element = document.getElementById(id)
    element.scrollIntoView({behavior : "smooth"})
}

window.addEventListener('scroll', function(){
    const queryNavbar = document.querySelector('.a-navbar')
    const scrollPosition = window.scrollY
    const element = document.getElementById('a-navbar')
    const scrollElement = element.scrollY

    if(scrollPosition == scrollElement){
        queryNavbar.classList.add('underline')
    }
})

const text = "I am a front-end web developer, coding enthusiast, and love to learn about technology.";
const typingElement = document.getElementById('typing-effect');
let index = 0;
let isDeleting = false;

function type() {
    let currentText = text.substring(0, index);
    typingElement.innerHTML = currentText + "<span class='cursor'>|</span>"; // Tambahkan cursor
    
    if (!isDeleting && index < text.length) {
        index++;
        setTimeout(type, 50);
    } else if (isDeleting && index > 0) {
        index--;
        setTimeout(type, 50);
    } else {
        isDeleting = !isDeleting; // Ganti mode (ketik/hapus)
        setTimeout(type, 2200); // Tunggu 1 detik sebelum mulai lagi
    }
}

type();