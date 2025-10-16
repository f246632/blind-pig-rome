// ==========================================
// BLIND PIG ROMA - INTERACTIVE JAVASCRIPT
// Bringing the speakeasy to life
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // ENTRANCE ANIMATION - SECRET KNOCK
    // ==========================================
    const entranceOverlay = document.getElementById('entrance-overlay');
    const enterBtn = document.getElementById('enter-btn');
    const knockCircles = document.querySelectorAll('.knock-circle');
    let knockCount = 0;
    const requiredKnocks = 3;

    // Knock interaction
    knockCircles.forEach((circle, index) => {
        circle.addEventListener('click', () => {
            if (knockCount === index) {
                circle.classList.add('knocked');
                knockCount++;

                // Play knock sound (if you add audio)
                playKnockSound();

                if (knockCount === requiredKnocks) {
                    enterBtn.style.animation = 'knockPulse 0.5s ease 3';
                    enterBtn.style.background = 'linear-gradient(135deg, var(--gold), var(--deep-red))';
                }
            }
        });
    });

    // Enter button
    enterBtn.addEventListener('click', () => {
        entranceOverlay.classList.add('hidden');
        document.body.style.overflow = 'auto';

        // Play door opening sound (if you add audio)
        playDoorSound();

        setTimeout(() => {
            entranceOverlay.style.display = 'none';
        }, 1500);
    });

    // Auto-enter after 10 seconds if user doesn't knock
    setTimeout(() => {
        if (!entranceOverlay.classList.contains('hidden')) {
            enterBtn.click();
        }
    }, 10000);

    // ==========================================
    // NAVIGATION
    // ==========================================
    const navbar = document.getElementById('navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking nav link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // ==========================================
    // SMOOTH SCROLLING
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ==========================================
    // INTERSECTION OBSERVER - FADE IN ANIMATIONS
    // ==========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements
    const animateElements = document.querySelectorAll('.cocktail-card, .event-feature, .food-item, .stat, .about-text, .about-image');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    // ==========================================
    // PARALLAX EFFECT
    // ==========================================
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero, .cocktails-bg, .events-overlay');

        parallaxElements.forEach(el => {
            const speed = 0.5;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // ==========================================
    // CURSOR GLOW EFFECT
    // ==========================================
    const createCursorGlow = () => {
        const cursorGlow = document.createElement('div');
        cursorGlow.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(212, 175, 55, 0.4), transparent);
            pointer-events: none;
            z-index: 9998;
            transition: transform 0.1s ease;
            mix-blend-mode: screen;
        `;
        document.body.appendChild(cursorGlow);

        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = `${e.clientX - 10}px`;
            cursorGlow.style.top = `${e.clientY - 10}px`;
        });

        // Enlarge on interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .cocktail-card, .event-feature');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorGlow.style.transform = 'scale(3)';
            });
            el.addEventListener('mouseleave', () => {
                cursorGlow.style.transform = 'scale(1)';
            });
        });
    };

    // Only on desktop
    if (window.innerWidth > 768) {
        createCursorGlow();
    }

    // ==========================================
    // COCKTAIL CARD TILT EFFECT
    // ==========================================
    const cocktailCards = document.querySelectorAll('.cocktail-card');

    cocktailCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // ==========================================
    // TYPING EFFECT FOR HERO TAGLINE
    // ==========================================
    const typeWriter = (element, text, speed = 100) => {
        let i = 0;
        element.textContent = '';
        element.style.opacity = '1';

        const type = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        };

        type();
    };

    // Start typing after entrance animation
    setTimeout(() => {
        const tagline = document.querySelector('.hero-tagline');
        if (tagline) {
            const originalText = tagline.textContent;
            typeWriter(tagline, originalText, 80);
        }
    }, 2000);

    // ==========================================
    // RESERVE BUTTON FUNCTIONALITY
    // ==========================================
    const reserveButtons = document.querySelectorAll('.reserve-btn, .cta-button');

    reserveButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (!btn.getAttribute('href')) {
                e.preventDefault();
                // You can integrate with a booking system here
                alert('Reservations: Call +39 06 8775 0714 or visit us directly at Via La Spezia 72, Rome');
            }
        });
    });

    // ==========================================
    // GLITCH TEXT EFFECT
    // ==========================================
    const glitchText = document.querySelector('.glitch');

    setInterval(() => {
        if (Math.random() > 0.95) {
            glitchText.style.textShadow = `
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #d4af37,
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #8b0000
            `;

            setTimeout(() => {
                glitchText.style.textShadow = '0 0 10px var(--gold), 0 0 20px var(--gold), 0 0 40px var(--deep-red)';
            }, 100);
        }
    }, 3000);

    // ==========================================
    // SOUND EFFECTS (Optional - requires audio files)
    // ==========================================
    function playKnockSound() {
        // const knockSound = new Audio('assets/sounds/knock.mp3');
        // knockSound.play();
    }

    function playDoorSound() {
        // const doorSound = new Audio('assets/sounds/door-open.mp3');
        // doorSound.play();
    }

    // ==========================================
    // LAZY LOADING IMAGES (if you add images later)
    // ==========================================
    const lazyImages = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // ==========================================
    // PERFORMANCE: Reduce animations on low-end devices
    // ==========================================
    const isLowEndDevice = () => {
        return navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
    };

    if (isLowEndDevice()) {
        document.body.classList.add('reduce-motion');
    }

    // ==========================================
    // CONSOLE EASTER EGG
    // ==========================================
    console.log('%c🐷 Welcome to Blind Pig Roma 🐷', 'font-size: 20px; color: #d4af37; font-weight: bold;');
    console.log('%cLooking for secrets? The password is: "Speak Easy"', 'font-size: 14px; color: #f5f5dc;');
    console.log('%cWebsite crafted with prohibition-era passion 🍸', 'font-size: 12px; color: #8b0000; font-style: italic;');

});

// ==========================================
// SERVICE WORKER (Optional - for PWA)
// ==========================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // navigator.serviceWorker.register('/sw.js');
    });
}
