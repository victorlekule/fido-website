// 1. Dynamically inject the Poppins Font into the document head
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

// 2. Configure Tailwind Theme Variables
if (window.tailwind) {
    window.tailwind.config = {
        theme: {
            extend: {
                colors: {
                    'ficus-yellow': '#F2B705',    // Golden Yellow
                    'ficus-charcoal': '#1F2933',  // Charcoal
                    'ficus-sand': '#F4EFEA',      // Soft Sand
                    'ficus-blue': '#003366',
                          // Added Blue (Standard Royal Blue)
                },
                fontFamily: {
                    sans: ['Poppins', 'sans-serif'],
                }
            }
        }
    }
}

// 3. Inject the Header HTML and add interactivity
document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById("ficus-header-container");

    if (headerContainer) {
        
        const headerHTML = `
            <header class="bg-white text-black shadow-md fixed w-full z-50 top-0 left-0 cursor-default">
                
                <div class="w-full px-4 sm:px-8">
                    <!-- INCREASED HEIGHT: h-24 on mobile, lg:h-24 on desktop -->
                    <div class="flex justify-between items-center h-24 lg:h-28">
                        
                        <!-- Logo Area -->
                        <div class="flex-shrink-0 flex items-center gap-3 cursor-pointer" onclick="window.location.href='index.html'">
                            <svg class="h-10 w-10 lg:h-12 lg:w-12 text-ficus-yellow" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L8 8H10V14C10 15.1 9.1 16 8 16H6V18H8C10.2 18 12 16.2 12 14V8H14L12 2ZM16 12L14 15H15V22H17V15H18L16 12ZM7 12L5 15H6V22H8V15H9L7 12Z" />
                            </svg>
                            <span class="font-black text-2xl md:text-3xl tracking-tight">FICUS</span>
                        </div>

                        <!-- Desktop Navigation (Text made bold, added 'nav-link' class for JS targeting) -->
                        <nav class="hidden lg:flex space-x-6 items-center">
                            <a href="index.html" class="nav-link text-gray-800 hover:text-ficus-yellow transition duration-300 font-bold text-sm uppercase tracking-wide">Home</a>
                            <a href="about.html" class="nav-link text-gray-800 hover:text-ficus-yellow transition duration-300 font-bold text-sm uppercase tracking-wide">About Us</a>
                            <a href="program.html" class="nav-link text-gray-800 hover:text-ficus-yellow transition duration-300 font-bold text-sm uppercase tracking-wide">Programs</a>
                            <a href="impact.html" class="nav-link text-gray-800 hover:text-ficus-yellow transition duration-300 font-bold text-sm uppercase tracking-wide">Impact</a>
                            <a href="involved.html" class="nav-link text-gray-800 hover:text-ficus-yellow transition duration-300 font-bold text-sm uppercase tracking-wide">Get Involved</a>
                            <a href="news.html" class="nav-link text-gray-800 hover:text-ficus-yellow transition duration-300 font-bold text-sm uppercase tracking-wide">News & Updates</a>
                            <a href="contact.html" class="nav-link text-gray-800 hover:text-ficus-yellow transition duration-300 font-bold text-sm uppercase tracking-wide">Contact</a>

                            <a href="donate.html" class="bg-ficus-yellow text-black px-7 py-3 rounded-full font-black hover:bg-yellow-500 transition duration-300 shadow-md uppercase tracking-wide text-sm ml-2">
                                Donate
                            </a>
                        </nav>

                        <!-- Mobile Menu Button -->
                        <div class="lg:hidden flex items-center">
                            <button id="mobile-menu-btn" class="text-black hover:text-ficus-yellow focus:outline-none transition duration-300">
                                <svg id="menu-icon" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <svg id="close-icon" class="h-8 w-8 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Mobile Navigation Dropdown -->
                <div id="mobile-menu" class="hidden lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-2xl">
                    <div class="px-4 pt-2 pb-6 space-y-1">
                        <a href="index.html" class="nav-link block px-4 py-3 rounded-xl text-base font-bold text-gray-800 hover:text-ficus-yellow hover:bg-gray-50 transition">Home</a>
                        <a href="about.html" class="nav-link block px-4 py-3 rounded-xl text-base font-bold text-gray-800 hover:text-ficus-yellow hover:bg-gray-50 transition">About Us</a>
                        <a href="program.html" class="nav-link block px-4 py-3 rounded-xl text-base font-bold text-gray-800 hover:text-ficus-yellow hover:bg-gray-50 transition">Programs</a>
                        <a href="impact.html" class="nav-link block px-4 py-3 rounded-xl text-base font-bold text-gray-800 hover:text-ficus-yellow hover:bg-gray-50 transition">Impact</a>
                        <a href="involved.html" class="nav-link block px-4 py-3 rounded-xl text-base font-bold text-gray-800 hover:text-ficus-yellow hover:bg-gray-50 transition">Get Involved</a>
                        <a href="news.html" class="nav-link block px-4 py-3 rounded-xl text-base font-bold text-gray-800 hover:text-ficus-yellow hover:bg-gray-50 transition">News & Updates</a>
                        <a href="contact.html" class="nav-link block px-4 py-3 rounded-xl text-base font-bold text-gray-800 hover:text-ficus-yellow hover:bg-gray-50 transition">Contact</a>
                        
                        <a href="donate.html" class="block mt-4 px-4 py-4 text-center rounded-xl text-lg font-black bg-ficus-yellow text-black shadow-md">
                            Donate Now
                        </a>
                    </div>
                </div>
            </header>
        `;

        // Inject the HTML
        headerContainer.innerHTML = headerHTML;

        // ==========================================
        // ACTIVE STATE LOGIC
        // ==========================================
        // Get the current file name (e.g., "about.html" or "" if on root)
        let currentPath = window.location.pathname.split('/').pop();
        if (currentPath === "" || currentPath === "/") currentPath = "index.html"; 

        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            
            if (linkPath === currentPath) {
                // Remove default text color and apply active Ficus Yellow
                link.classList.remove('text-gray-800');
                link.classList.add('text-ficus-yellow');
                
                // Add an underline for desktop links, background for mobile links
                if (link.closest('nav')) { 
                    // Desktop active styling
                    link.classList.add('border-b-2', 'border-ficus-yellow', 'pb-1');
                } else { 
                    // Mobile active styling
                    link.classList.add('bg-gray-50'); 
                }
            }
        });

        // ==========================================
        // MOBILE MENU TOGGLE LOGIC
        // ==========================================
        const btn = document.getElementById("mobile-menu-btn");
        const menu = document.getElementById("mobile-menu");
        const menuIcon = document.getElementById("menu-icon");
        const closeIcon = document.getElementById("close-icon");

        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
            menuIcon.classList.toggle("hidden");
            closeIcon.classList.toggle("hidden");
        });
        
    } else {
        console.error("Header container '#ficus-header-container' not found in the DOM.");
    }
});


//home//
//hero sectio//
// 1. Dynamically inject Anime.js for the dynamic animations
const animeLink = document.createElement('script');
animeLink.src = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js';
animeLink.integrity = 'sha512-z4OUqw38qNL41D5W9tQZz583f76h9G8v14479EAFV3GM5N4D3zFf1C508C6a55N+p2bW8s2o+E5i6C8n1V3sEw==';
animeLink.crossOrigin = 'anonymous';
animeLink.referrerPolicy = 'no-referrer';
document.head.appendChild(animeLink);

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. HERO ANIMATION LOGIC (Professionals Entry) ---
    // Make sure Anime.js is loaded before trying to use it
    const triggerHeroAnimation = () => {
        if (typeof anime !== 'undefined') {
            
            // a. Animate the placeholder content FROM THE RIGHT to its center position
            const heroImageAnimate = document.getElementById('hero-image-animate');
            if (heroImageAnimate) {
                heroImageAnimate.classList.remove('hidden'); // Show initially hidden container
                anime({
                    targets: '#hero-image-animate',
                    translateX: ['100vw', 0], // From off-screen right to zero
                    opacity: [0, 1],
                    easing: 'easeOutExpo',
                    duration: 1800,
                    delay: 200 // Slight delay to let standard page elements load
                });
            }
            
            // b. Animate the text and buttons FROM THE LEFT to create a professional entry
            anime({
                targets: '#hero-text-content > *', // Animate children elements directly for a cascading effect
                translateX: ['-100vw', 0], // From off-screen left to zero
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 1500,
                delay: anime.stagger(100, {start: 400}) // Stagger entry after image has started
            });
            
        } else {
            // Anime.js is not loaded yet, retry shortly...
            setTimeout(triggerHeroAnimation, 100);
        }
    };
    
    // Call the hero animation logic on DOM content load
    triggerHeroAnimation();
    
    
    // --- 2. ANIMATED COUNTERS LOGIC (Retained) ---
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(() => animateCounter(counter), 1);
        } else {
            counter.innerText = target.toLocaleString();
        }
    };

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                animateCounter(counter);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });

});

// --- 3. HERO IMAGE CROSSFADE CYCLING LOGIC ---
// --- 3. HERO IMAGE & INFINITY COLOR CYCLING LOGIC ---
const startHeroImageCycle = () => {
    const heroImages = document.querySelectorAll('.hero-cycle-img');
    const infinityOutline = document.getElementById('infinity-outline');
    
    if (heroImages.length === 0) return;
    
    // The colors mapped to each image index
    // Index 0: Agriculture (Yellow)
    // Index 1: Education (Sand)
    // Index 2: Community (Charcoal - though with dark bg, we use white/gray for visibility)
    // Index 3: Environment (Blue)
    // Index 4: Innovation (Blue)
    const shapeColors = [
        'text-ficus-yellow', 
        'text-ficus-sand', 
        'text-gray-300', // Substituted Charcoal for gray so it stays visible against the dark background
        'text-ficus-blue', 
        'text-ficus-blue'
    ];
    
    let currentImageIndex = 0;
    
    setInterval(() => {
        // 1. Fade out current image
        heroImages[currentImageIndex].classList.remove('opacity-100');
        heroImages[currentImageIndex].classList.add('opacity-0');
        
        // Remove current color from the infinite shape
        if (infinityOutline) {
            infinityOutline.classList.remove(shapeColors[currentImageIndex]);
        }
        
        // 2. Move to next index
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
        
        // 3. Fade in new image
        heroImages[currentImageIndex].classList.remove('opacity-0');
        heroImages[currentImageIndex].classList.add('opacity-100');
        
        // Apply new color to the infinite shape
        if (infinityOutline) {
            infinityOutline.classList.add(shapeColors[currentImageIndex]);
        }
        
    }, 4000); 
};

// Start the cycle
startHeroImageCycle();

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. PREMIUM SCROLL REVEAL ANIMATIONS ---
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing once revealed to only animate once
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Triggers when 15% of the element is visible
    });

    revealElements.forEach(el => scrollObserver.observe(el));


    // --- 2. IMPACT COUNTERS ANIMATION ---
    const counters = document.querySelectorAll('.fido-counter');
    const speed = 150; // Controls counter speed

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                
                const updateCount = () => {
                    const count = +counter.innerText.replace(/,/g, '');
                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc).toLocaleString();
                        setTimeout(updateCount, 15);
                    } else {
                        counter.innerText = target.toLocaleString();
                    }
                };
                
                updateCount();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));


    // --- 3. TESTIMONIAL SLIDER LOGIC ---
    const slides = document.querySelectorAll('.fido-slide');
    const btnNext = document.getElementById('slide-next');
    const btnPrev = document.getElementById('slide-prev');
    let currentSlide = 0;

    if (slides.length > 0 && btnNext && btnPrev) {
        const updateSlider = (newIndex) => {
            // Hide current slide
            slides[currentSlide].classList.remove('opacity-100', 'translate-x-0');
            slides[currentSlide].classList.add('opacity-0', '-translate-x-8', 'pointer-events-none');
            
            // Update index
            currentSlide = newIndex;
            
            // Handle looping
            if (currentSlide >= slides.length) currentSlide = 0;
            if (currentSlide < 0) currentSlide = slides.length - 1;
            
            // Reset the incoming slide position before fading in to ensure smooth slide direction
            slides[currentSlide].classList.remove('-translate-x-8', 'translate-x-8');
            
            // Small timeout to allow browser to calculate position reset before animating in
            setTimeout(() => {
                slides[currentSlide].classList.remove('opacity-0', 'pointer-events-none');
                slides[currentSlide].classList.add('opacity-100', 'translate-x-0');
            }, 50);
        };

        btnNext.addEventListener('click', () => updateSlider(currentSlide + 1));
        btnPrev.addEventListener('click', () => {
            // Set the outgoing slide to slide right instead of left
            slides[currentSlide].classList.remove('opacity-100', 'translate-x-0');
            slides[currentSlide].classList.add('opacity-0', 'translate-x-8', 'pointer-events-none');
            updateSlider(currentSlide - 1);
        });
    }
});







//footer//
(function() {
    'use strict';

    // ============================
    //  CONFIGURATION (edit freely)
    //  ============================
    const CONFIG = {
        containerId: 'ficus-footer',
        orgName: 'Ficus Development Organization',
        aboutText: 'Ficus is a community-driven non‑profit dedicated to sustainable agriculture, quality education, clean water, and economic empowerment across Africa. We believe in lasting, locally‑led change.',
        // 👇 Change the 'url' values to your actual links or section IDs (e.g. '#home', '/about')
        quickLinks: [
            { text: 'Home', url: '#' },
            { text: 'About Us', url: '#' },
            { text: 'Our Impact', url: '#' },
            { text: 'Get Involved', url: '#' },
            { text: 'Donate', url: '#' }
        ],
        programs: [
            { text: 'Sustainable Farming', url: '#' },
            { text: 'Girls Education', url: '#' },
            { text: 'Water & Sanitation', url: '#' },
            { text: 'Microfinance', url: '#' },
            { text: 'Climate Resilience', url: '#' }
        ],
        contact: {
            address: '123 Ficus Avenue, Green Valley, Nairobi, Kenya',
            phone: '+254 700 123 456',
            email: 'info@ficusdev.org'
        },
        social: [
            { icon: 'fa-facebook-f', url: '#' },
            { icon: 'fa-twitter', url: '#' },
            { icon: 'fa-instagram', url: '#' },
            { icon: 'fa-linkedin-in', url: '#' },
            { icon: 'fa-youtube', url: '#' }
        ],
        copyright: '© 2026 Ficus Development Organization',
        privacyText: 'Privacy Policy',
        privacyUrl: '#',
        termsText: 'Terms of Service',
        termsUrl: '#',
        poweredBy: 'Powered by African Tech'
    };

    // ============================
    //  GLOBAL RESET + STICKY FOOTER STYLES
    // ============================
    const stickyStyles = `
        /* Remove all default whitespace and ensure sticky footer */
        html, body {
            margin: 0;
            padding: 0;
        }
        #${CONFIG.containerId} {
            margin-bottom: 0 !important;
            padding: 0 !important;
            width: 100%;
        }
        /* Ensure no trailing spaces inside the footer */
        #${CONFIG.containerId} * {
            margin-bottom: 0;
        }
        #${CONFIG.containerId} .ficus-footer-bottom-bar {
            padding-bottom: 0 !important;
            margin-bottom: 0 !important;
        }
    `;

    // ============================
    //  BUILD FOOTER HTML
    // ============================
    const footerHtml = `
    <footer class="bg-ficus-blue text-white pt-16 font-sans w-full" style="padding-bottom:0!important; margin-bottom:0!important;">
        <div class="w-full px-4 sm:px-6 lg:px-8" style="padding-bottom:0!important;">
            <!-- 4‑column grid (on mobile: about, then side‑by‑side programs/links, then contact) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-gray-700">
                
                <!-- Column 1: About -->
                <div class="lg:col-span-1">
                    <div class="flex items-center gap-3 mb-4">
                        <i class="ytext-3xl text-ficus-yellow"></i>
                        <h3 class="text-xl font-bold text-white">${CONFIG.orgName}</h3>
                    </div>
                    <p class="text-gray-300 text-sm leading-relaxed mb-6">${CONFIG.aboutText}</p>
                </div>

                <!-- Wrapper that becomes side‑by‑side on mobile, disappears on sm+ -->
                <div class="flex flex-row sm:contents gap-4 sm:gap-0">
                    <!-- Column 2: Programs (left on mobile) -->
                    <div class="flex-1 lg:auto">
                        <h4 class="text-ficus-yellow font-semibold uppercase tracking-wider text-sm mb-4 border-b border-ficus-yellow pb-2 inline-block">Our Programs</h4>
                        <ul class="space-y-2">
                            ${CONFIG.programs.map(p => `<li><a href="${p.url}" class="text-gray-300 hover:text-ficus-yellow transition-colors duration-200 text-sm">${p.text}</a></li>`).join('')}
                        </ul>
                    </div>

                    <!-- Column 3: Quick Links (right on mobile) -->
                    <div class="flex-1 lg:auto">
                        <h4 class="text-ficus-yellow font-semibold uppercase tracking-wider text-sm mb-4 border-b border-ficus-yellow pb-2 inline-block">Quick Links</h4>
                        <ul class="space-y-2">
                            ${CONFIG.quickLinks.map(l => `<li><a href="${l.url}" class="text-gray-300 hover:text-ficus-yellow transition-colors duration-200 text-sm">${l.text}</a></li>`).join('')}
                        </ul>
                    </div>
                </div>

                <!-- Column 4: Get In Touch + Social Icons -->
                <div class="lg:col-span-1">
                    <h4 class="text-ficus-yellow font-semibold uppercase tracking-wider text-sm mb-4 border-b border-ficus-yellow pb-2 inline-block">Get In Touch</h4>
                    <ul class="space-y-3 text-sm text-gray-300 mb-4">
                        <li class="flex items-start gap-3">
                            <i class="fas fa-map-marker-alt text-ficus-yellow w-5 mt-1"></i>
                            <span>${CONFIG.contact.address}</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <i class="fas fa-phone-alt text-ficus-yellow w-5"></i>
                            <a href="tel:${CONFIG.contact.phone.replace(/\s/g,'')}" class="hover:text-ficus-yellow transition-colors">${CONFIG.contact.phone}</a>
                        </li>
                        <li class="flex items-center gap-3">
                            <i class="fas fa-envelope text-ficus-yellow w-5"></i>
                            <a href="mailto:${CONFIG.contact.email}" class="hover:text-ficus-yellow transition-colors">${CONFIG.contact.email}</a>
                        </li>
                    </ul>
                    
                    <!-- Horizontal social icons -->
                    <div class="flex flex-wrap gap-3 mt-4">
                        ${CONFIG.social.map(s => `
                            <a href="${s.url}" aria-label="social" class="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-ficus-yellow hover:text-ficus-charcoal transition-all duration-300 text-white text-base">
                                <i class="fab ${s.icon}"></i>
                            </a>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- Bottom bar: Copyright | Privacy/Policy | Powered by -->
            <div class="ficus-footer-bottom-bar flex flex-col sm:flex-row items-center justify-between text-white text-xs gap-3"
                 style="padding: 2rem 0!important; margin-bottom:0!important;">
                <div class="text-center sm:text-left">
                    ${CONFIG.copyright}
                </div>
                <div class="flex gap-4 order-last sm:order-none">
                    <a href="${CONFIG.privacyUrl}" class="hover:text-ficus-yellow transition-colors">${CONFIG.privacyText}</a>
                    <span class="text-gray-600">|</span>
                    <a href="${CONFIG.termsUrl}" class="hover:text-ficus-yellow transition-colors">${CONFIG.termsText}</a>
                </div>
                <div class="text-center sm:text-right font-medium text-ficus-yellow">
                    ${CONFIG.poweredBy}
                </div>
            </div>
        </div>
    </footer>
    `;

    // ============================
    //  INJECTION LOGIC
    // ============================
    function injectFooter() {
        const container = document.getElementById(CONFIG.containerId);
        if (!container) {
            console.error(`Ficus Footer: Element with id "${CONFIG.containerId}" not found.`);
            return;
        }
        // Inject global styles only once
        if (!document.getElementById('ficus-footer-sticky-style')) {
            const styleTag = document.createElement('style');
            styleTag.id = 'ficus-footer-sticky-style';
            styleTag.textContent = stickyStyles;
            document.head.appendChild(styleTag);
        }

        // Clear the container and insert footer
        container.style.margin = '0';
        container.style.padding = '0';
        container.innerHTML = footerHtml;
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectFooter);
    } else {
        injectFooter();
    }
})();
