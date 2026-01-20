// ============================================
// ASTRUM INVICTUM - Interactive JavaScript
// ============================================

// === Starfield Generator ===
function createStarfield() {
    const starfield = document.getElementById('starfield');
    const starCount = 200;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size (1-3px)
        const size = Math.random() * 2 + 1;
        
        // Random animation delay
        const delay = Math.random() * 3;
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${delay}s`;
        
        starfield.appendChild(star);
    }
}

// === Scroll Animations ===
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all content sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
}

// === Smooth Scroll for Hero Button ===
function initSmoothScroll() {
    const heroScroll = document.querySelector('.hero-scroll');
    if (heroScroll) {
        heroScroll.addEventListener('click', () => {
            const firstSection = document.querySelector('#fall');
            if (firstSection) {
                firstSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

// === Navigation Scroll Effect ===
function initNavScrollEffect() {
    const nav = document.querySelector('.main-nav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.style.background = 'rgba(10, 22, 40, 0.95)';
            nav.style.boxShadow = '0 4px 20px rgba(212, 175, 55, 0.1)';
        } else {
            nav.style.background = 'rgba(10, 22, 40, 0.85)';
            nav.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
}

// === Parallax Effect for Hero ===
function initParallax() {
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        
        if (hero && scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });
}

// === Add Glow Effect to Images on Hover ===
function initImageEffects() {
    const imageFrames = document.querySelectorAll('.image-frame');
    
    imageFrames.forEach(frame => {
        frame.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 40px rgba(212, 175, 55, 0.5)';
        });
        
        frame.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.3)';
        });
    });
}

// === Frame Corner Animation ===
function animateFrameCorners() {
    const corners = document.querySelectorAll('.frame-corner');
    
    corners.forEach((corner, index) => {
        setTimeout(() => {
            corner.style.opacity = '0';
            corner.style.opacity = '1';
            corner.style.transition = 'opacity 0.5s ease';
        }, index * 100);
    });
}

// === Cursor Trail Effect (Optional - subtle golden particles) ===
function initCursorTrail() {
    let particles = [];
    const maxParticles = 20;
    
    document.addEventListener('mousemove', (e) => {
        // Only create particles occasionally to avoid performance issues
        if (Math.random() > 0.9) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = '3px';
            particle.style.height = '3px';
            particle.style.borderRadius = '50%';
            particle.style.background = 'rgba(212, 175, 55, 0.6)';
            particle.style.pointerEvents = 'none';
            particle.style.left = e.clientX + 'px';
            particle.style.top = e.clientY + 'px';
            particle.style.zIndex = '9999';
            particle.style.transition = 'opacity 1s ease, transform 1s ease';
            
            document.body.appendChild(particle);
            particles.push(particle);
            
            // Fade out and remove
            setTimeout(() => {
                particle.style.opacity = '0';
                particle.style.transform = 'translateY(20px)';
            }, 10);
            
            setTimeout(() => {
                particle.remove();
                particles = particles.filter(p => p !== particle);
            }, 1000);
            
            // Limit particles
            if (particles.length > maxParticles) {
                const oldest = particles.shift();
                oldest.remove();
            }
        }
    });
}

// === Tech Feature Interaction ===
function initTechFeatures() {
    const techFeatures = document.querySelectorAll('.tech-feature');
    
    techFeatures.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.background = 'rgba(0, 212, 255, 0.1)';
        });
        
        feature.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.background = 'rgba(0, 212, 255, 0.05)';
        });
    });
}

// === Initialize All ===
document.addEventListener('DOMContentLoaded', () => {
    console.log('🌟 Astrum Invictum - Initializing...');
    
    // Core features
    createStarfield();
    initScrollAnimations();
    initSmoothScroll();
    initNavScrollEffect();
    initParallax();
    
    // Visual enhancements
    initImageEffects();
    initTechFeatures();
    animateFrameCorners();
    
    // Optional: Uncomment for cursor trail effect (may impact performance on slower devices)
    // initCursorTrail();
    
    console.log('✨ Astrum Invictum - Ready');
});

// === Easter Egg: Konami Code ===
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 
    'ArrowDown', 'ArrowDown', 
    'ArrowLeft', 'ArrowRight', 
    'ArrowLeft', 'ArrowRight', 
    'b', 'a'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Easter egg: Make all gold elements glow intensely
        document.documentElement.style.setProperty('--shadow-gold', '0 0 60px rgba(212, 175, 55, 0.9)');
        document.documentElement.style.setProperty('--glow-text', '0 0 30px rgba(212, 175, 55, 1)');
        
        setTimeout(() => {
            document.documentElement.style.setProperty('--shadow-gold', '0 0 30px rgba(212, 175, 55, 0.3)');
            document.documentElement.style.setProperty('--glow-text', '0 0 10px rgba(212, 175, 55, 0.6)');
        }, 3000);
        
        console.log('🌟 Hexaterion activated! 🌟');
    }
});
