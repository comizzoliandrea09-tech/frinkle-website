document.addEventListener('DOMContentLoaded', function() {
    // Inizializza le animazioni 3D
    init3DEffects();

    // Inizializza il parallax
    initParallax();

    // Inizializza l'header scroll effect
    initHeaderScroll();

    // Aggiungi effetti di hover migliorati
    initHoverEffects();

    // Animazione di caricamento della pagina
    initPageLoadAnimation();
});

function init3DEffects() {
    const bottles = document.querySelectorAll('.bottle');

    bottles.forEach(bottle => {
        const flavorCard = bottle.closest('.flavor-card');

        // Rotazione automatica lenta
        let rotationY = 0;
        let rotationX = 20; // Angolazione iniziale

        function autoRotate() {
            rotationY += 0.1; // Velocità di rotazione
            bottle.style.transform = `translate(-50%, -50%) rotateX(${rotationX}deg) rotateY(${rotationY}deg) rotateZ(0deg)`;
            requestAnimationFrame(autoRotate);
        }

        autoRotate();

        // Interazione mouse
        flavorCard.addEventListener('mousemove', (e) => {
            const rect = flavorCard.getBoundingClientRect();
            const x = e.clientX - rect.left; // posizione x nel elemento
            const y = e.clientY - rect.top;  // posizione y nel elemento

            // Calcola la rotazione basata sulla posizione del mouse
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / centerY * 10; // Massimo 10 gradi
            const rotateY = (centerX - x) / centerX * 10; // Massimo 10 gradi (invertito per naturalezza)

            bottle.style.transition = 'transform 0.1s ease-out';
            bottle.style.transform = `translate(-50%, -50%) rotateX(${20 + rotateX}deg) rotateY(${rotateY}deg) rotateZ(0deg)`;
        });

        flavorCard.addEventListener('mouseleave', () => {
            bottle.style.transition = 'transform 0.5s ease-out';
            bottle.style.transform = `translate(-50%, -50%) rotateX(20deg) rotateY(0deg) rotateZ(0deg)`;
        });
    });
}

function initParallax() {
    // Parallax per lo sfondo hero
    const heroBg = document.querySelector('.hero-bg');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3; // Velocità del parallax
        heroBg.style.backgroundPositionY = `${rate}px`;
    });

    // Parallax per le sezioni
    const sections = document.querySelectorAll('.flavor-card, .about');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(section);
    });
}

function initHeaderScroll() {
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

function initHoverEffects() {
    // Effetto hover sui link del menu
    const navLinks = document.querySelectorAll('.nav a');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-2px)';
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)');
        });
    });

    // Effetto hover sui social links
    const socialLinks = document.querySelectorAll('.social-links a');

    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-3px) scale(1.1)';
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0) scale(1)';
        });
    });
}

function initPageLoadAnimation() {
    // Animazione di ingresso per gli elementi
    const heroContent = document.querySelector('.hero-content');
    const flavorIndicators = document.querySelector('.flavor-indicators');

    // Imposta stato iniziale
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    flavorIndicators.style.opacity = '0';
    flavorIndicators.style.transform = 'translateY(20px)';

    // Anima dopo un breve ritardo
    setTimeout(() => {
        heroContent.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';

        flavorIndicators.style.transition = 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s';
        flavorIndicators.style.opacity = '1';
        flavorIndicators.style.transform = 'translateY(0)';
    }, 300);

    // Animazione di ingresso per le bottiglie
    const bottles = document.querySelectorAll('.bottle');
    bottles.forEach((bottle, index) => {
        bottle.style.opacity = '0';
        bottle.style.transform = 'translate(-50%, -50%) rotateX(20deg) rotateY(-30deg)';

        setTimeout(() => {
            bottle.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            bottle.style.opacity = '1';
            bottle.style.transform = `translate(-50%, -50%) rotateX(20deg) rotateY(${index * 10}deg)`;
        }, 500 + (index * 200));
    });
}

// Effetto di liquido che si muove realmente (uso di canvas per simulazione più realistica)
// Per semplicità, abbiamo usato CSS, ma ecco una funzione per migliorare con canvas se necessario
function initLiquidCanvas() {
    // Questo sarebbe implementato se volessimo un effetto liquido più realistico
    // Per ora manteniamo la versione CSS
}

// Gestione dello stato di caricamento immagini (se ne aggiungessimo)
function preloadImages() {
    const images = [
        // Aggiungi qui eventuali immagini da pre-caricare
    ];

    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Effetto particelle nello sfondo (opzionale)
function initBackgroundParticles() {
    // Questo sarebbe per un effetto particelle nello sfondo
    // Per ora manteniamo lo sfondo semplice con gradienti
}

// Aggiorna dimensioni canvas al resize
window.addEventListener('resize', () => {
    // Aggiorna eventuali canvas o elementi che dipendono dalle dimensioni
});

// Supporto per touch devices
document.addEventListener('touchstart', function handleTouchStart() {
    // Disabilita questo listener dopo il primo tocco
    document.body.classList.add('touch-device');
    document.removeEventListener('touchstart', handleTouchStart, true);
}, true);

// Aggiunge classe per animazioni ridotte se l'utente ha preferito ridurre il movimento
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.body.classList.add('reduced-motion');
}

// Inizializza al caricamento
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});