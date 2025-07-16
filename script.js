// Animation de texte
const typedTextSpan = document.querySelector(".text-animate h3");
const textArray = ["Développeur Mobile FullStack (Kotlin , SpringBoot) ", "Développeur Web (Angular)", "Passionné par la robotique"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, newTextDelay + 250);
});

// En-tête fixe
let header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 100);
});

// Menu mobile
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Navigation active
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });

    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Animation des compétences
const skillBars = document.querySelectorAll('.bar span');

function animateSkills() {
    skillBars.forEach(bar => {
        const width = bar.parentElement.querySelector('h3 span').textContent;
        bar.style.width = width;
    });
}

const skillsSection = document.querySelector('.competences');
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skillsObserver.observe(skillsSection);

// Formulaire de contact
const contactForm = document.querySelector('form');
const submitBtn = document.querySelector('.btn[type="submit"]');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    submitBtn.textContent = 'Envoi en cours...';
    
    setTimeout(() => {
        submitBtn.textContent = 'Message envoyé!';
        contactForm.reset();
        
        setTimeout(() => {
            submitBtn.textContent = 'Envoyer';
        }, 3000);
    }, 1500);
});

// Téléchargement du CV
const downloadBtn = document.querySelector('.btn[download]');
downloadBtn.addEventListener('click', () => {
    // Vous pouvez ajouter un suivi des téléchargements ici
    alert('Téléchargement du CV en cours...');
    console.log('CV téléchargé');
});

// Observer pour les animations au défilement
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.classList.remove('hide');
        } else {
            entry.target.classList.add('hide');
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.1
});

// Observer pour la section d'accueil (différents éléments à animer)
const homeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.3
});

// Appliquer les observers à toutes les sections
document.querySelectorAll('section').forEach(section => {
    if (section.id === 'home') {
        homeObserver.observe(section);
    } else {
        observer.observe(section);
    }
});

// Activer les animations des barres de compétences

if (document.querySelector('.skills')) {
    skillsObserver.observe(document.querySelector('.skills'));
}

// Menu mobile

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Changement de l'en-tête au défilement
window.addEventListener('scroll', () => {
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    // Fermer le menu mobile lors du défilement
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});

// Animation de texte

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, newTextDelay + 250);
});