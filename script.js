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
                    'ficus-blue': '#0071BC',
                    'ficus-green': '#39B54A',
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
// 3. Inject the Header HTML and add interactivity
document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById("ficus-header-container");

    if (headerContainer) {
        
        const headerHTML = `
            <header class="bg-white text-black shadow-md fixed w-full z-50 top-0 left-0 cursor-default">
                
                <div class="w-full px-4 sm:px-8 relative">
                    <div class="flex justify-between items-center h-24 lg:h-28">
                      
                        <!-- Logo Area -->
                        <div class="flex-shrink-0 flex items-center gap-3 cursor-pointer" onclick="window.location.href='index.html'">
                            
                            <!-- Increased size: changed h-10 to h-16, and lg:h-12 to lg:h-20 -->
                            <img src="picha/fodo logo.png" alt="Ficus Logo" class="h-16 lg:h-20 w-auto object-contain">
                            
                            <!-- If your PNG already has the word "FICUS" inside it, you can delete the <span> below. Otherwise, leave it. -->
                            <span class="font-black text-2xl md:text-3xl tracking-tight">FIDO</span>
                            

                        </div>

                        <!-- Desktop Navigation -->
                        <nav class="hidden lg:flex space-x-6 items-center">
                            <a href="index.html" class="nav-link text-black hover:text-ficus-green transition duration-300 font-bold text-sm uppercase tracking-wide">Home</a>
                            <a href="about.html" class="nav-link text-black hover:text-ficus-green transition duration-300 font-bold text-sm uppercase tracking-wide">About Us</a>
                            <a href="themes.html" class="nav-link text-black hover:text-ficus-green transition duration-300 font-bold text-sm uppercase tracking-wide">Our Themes</a>
                            <a href="program.html" class="nav-link text-black hover:text-ficus-green transition duration-300 font-bold text-sm uppercase tracking-wide">Programs</a>
                            <a href="gallery.html" class="nav-link text-black hover:text-ficus-green transition duration-300 font-bold text-sm uppercase tracking-wide">Gallery</a>
                            <a href="involved.html" class="nav-link text-black hover:text-ficus-green transition duration-300 font-bold text-sm uppercase tracking-wide">Get Involved</a>
                            <a href="news.html" class="nav-link text-black hover:text-ficus-green transition duration-300 font-bold text-sm uppercase tracking-wide">News & Updates</a>
                            <a href="contact.html" class="nav-link text-black hover:text-ficus-green transition duration-300 font-bold text-sm uppercase tracking-wide">Contact</a>

                            <a href="donate.html" class="bg-ficus-blue text-white px-7 py-3 rounded-full font-black hover:bg-ficus-green transition duration-300 shadow-md uppercase tracking-wide text-sm ml-2">
                                Donate
                            </a>
                        </nav>

                        <!-- Mobile Menu Button -->
                        <div class="lg:hidden flex items-center">
                            <button id="mobile-menu-btn" class="text-black hover:text-ficus-green focus:outline-none transition duration-300">
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
                <!-- FIX: Added 'top-full left-0' so it attaches exactly to the bottom of the header, and 'bg-white pb-6' ensures the background ends tightly below the button -->
                <div id="mobile-menu" class="hidden lg:hidden bg-white border-t border-gray-100 absolute top-full left-0 w-full shadow-2xl rounded-b-2xl">
                    <div class="px-4 pt-2 pb-6 space-y-1">
                        <a href="index.html" class="nav-link block px-4 py-3 rounded-xl text-base font-bold text-black hover:text-ficus-green hover:bg-gray-50 transition">Home</a>
                        <a href="about.html" class="nav-link block px-4 py-3 rounded-xl text-base font-bold text-black hover:text-ficus-green hover:bg-gray-50 transition">About Us</a>
                        <a href="themes.html" class="nav-link block px-4 py-3 rounded-xl text-base font-bold text-black hover:text-ficus-green hover:bg-gray-50 transition">Our Themes</a>
                        <a href="program.html" class="nav-link block px-4 py-3 rounded-xl text-base font-bold text-black hover:text-ficus-green hover:bg-gray-50 transition">Programs</a>
                        <a href="gallery.html" class="nav-link block px-4 py-3 rounded-xl text-base font-bold text-black hover:text-ficus-green hover:bg-gray-50 transition">Gallery</a>
                        <a href="involved.html" class="nav-link block px-4 py-3 rounded-xl text-base font-bold text-black hover:text-ficus-green hover:bg-gray-50 transition">Get Involved</a>
                        <a href="news.html" class="nav-link block px-4 py-3 rounded-xl text-base font-bold text-black hover:text-ficus-green hover:bg-gray-50 transition">News & Updates</a>
                        <a href="contact.html" class="nav-link block px-4 py-3 rounded-xl text-base font-bold text-black hover:text-ficus-green hover:bg-gray-50 transition">Contact</a>
                        
                        <a href="donate.html" class="block mt-4 px-4 py-4 text-center rounded-xl text-lg font-black bg-ficus-blue text-white hover:bg-ficus-green transition duration-300 shadow-md">
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
        let currentPath = window.location.pathname.split('/').pop();
        if (currentPath === "" || currentPath === "/") currentPath = "index.html"; 

        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            
            if (linkPath === currentPath) {
                // Change default black text to active ficus-green
                link.classList.remove('text-black');
                link.classList.add('text-ficus-green');
                
                if (link.closest('nav')) { 
                    // Desktop active styling (Green underline)
                    link.classList.add('border-b-2', 'border-ficus-green', 'pb-1');
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
        
        // Column 2: Quick Links
        quickLinks: [
            { text: 'Home', url: 'index.html' },
            { text: 'About Us', url: 'about.html' },
            { text: 'Our Themes', url: 'themes.html' },
            { text: 'Our Program', url: 'program.html' },
            { text: 'Get Involved', url: 'involved.html' },
            { text: 'Donate', url: 'donate.html' }
        ],

        // Column 3: Relevant Links
        relevantLinks: [
            { text: 'News & Updates', url: 'news.html' },
            { text: 'Careers', url: 'careers.html' },
            { text: 'Gallery', url: 'gallery.html' },
            { text: 'Our Programs', url: 'program.html' },
            { text: 'Contact Us', url: 'contact.html' }
        ],

        // Column 4: Social Media
        socialLinks: [
            { platform: 'Instagram', icon: 'fa-instagram', url: 'https://instagram.com/ficusdev' },
            { platform: 'TikTok', icon: 'fa-tiktok', url: 'https://tiktok.com/@ficusdev' },
            { platform: 'LinkedIn', icon: 'fa-linkedin-in', url: 'https://linkedin.com/company/ficusdev' },
            { platform: 'Facebook', icon: 'fa-facebook-f', url: 'https://facebook.com/ficusdev' }
        ],

        // Column 5: Get In Touch
        contact: {
            phone: '+255 700 123 456', 
            whatsapp: '+255 700 123 456',
            whatsappUrl: 'https://wa.me/255700123456',
            email: 'info@ficusdev.org',
            address: 'Mwanza Tanzania'
        },

        // Bottom Bar Info
        copyright: '© 2026 Ficus Development Organization',
        privacyText: 'Privacy Policy',
        privacyUrl: 'privacy.html',
        termsText: 'Terms of Service',
        termsUrl: 'terms.html',
        poweredBy: 'Powered by African Tech'
    };

    // ============================
    //  SAFE SCOPED STYLES
    // ============================
    const safeStyles = `
        /* Strictly scoped to the footer to prevent page collisions */
        #${CONFIG.containerId} {
            display: block;
            width: 100%;
            clear: both;
            position: relative;
            z-index: 40;
            margin-top: 4rem; /* Adds safe breathing room above the footer */
        }
        #${CONFIG.containerId} * {
            box-sizing: border-box;
        }
    `;

    // ============================
    //  BUILD FOOTER HTML
    // ============================
    const footerHtml = `
    <footer class="bg-black text-white pt-16 pb-12 font-sans w-full">
        <!-- 100% width container to reduce left/right empty space -->
        <div class="w-full px-4 sm:px-8 lg:px-12 mx-auto">
            
            <!-- Main Grid: Perfectly balanced 1/3, 1/3, 1/3 across the screen -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-gray-800">
                
                <!-- Column 1: About FIDO (Takes 4 cols width) -->
                <div class="lg:col-span-4">
                    <h3 class="text-1xl font-bold text-yellow-400 tracking-wide mb-6">${CONFIG.orgName}</h3>
                    <p class="text-white  text-sm leading-relaxed pr-4 lg:pr-10">${CONFIG.aboutText}</p>
                </div>

                <!-- Columns 2 & 3: Links (Takes 4 cols width, side-by-side on ALL screens) -->
                <div class="lg:col-span-4 grid grid-cols-2 gap-4 sm:gap-6">
                    <!-- Column 2 -->
                    <div>
                        <h4 class="text-ficus-yellow font-bold uppercase tracking-wider text-xs mb-6 border-b border-gray-800 pb-2 inline-block">Quick Links</h4>
                        <ul class="space-y-3">
                            ${CONFIG.quickLinks.map(l => `
                                <li><a href="${l.url}" class="text-gray-400 hover:text-ficus-yellow transition-colors duration-200 text-sm flex items-center gap-2 group">
                                    <i class="fas fa-chevron-right text-[10px] opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all text-ficus-yellow"></i>
                                    ${l.text}
                                </a></li>
                            `).join('')}
                        </ul>
                    </div>

                    <!-- Column 3 -->
                    <div>
                        <h4 class="text-ficus-yellow font-bold uppercase tracking-wider text-xs mb-6 border-b border-gray-800 pb-2 inline-block">Relevant Links</h4>
                        <ul class="space-y-3">
                            ${CONFIG.relevantLinks.map(l => `
                                <li><a href="${l.url}" class="text-gray-400 hover:text-ficus-yellow transition-colors duration-200 text-sm flex items-center gap-2 group">
                                    <i class="fas fa-chevron-right text-[10px] opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all text-ficus-yellow"></i>
                                    ${l.text}
                                </a></li>
                            `).join('')}
                        </ul>
                    </div>
                </div>

                <!-- Columns 4 & 5: Social & Contact (Takes 4 cols width, side-by-side on ALL screens) -->
                <div class="lg:col-span-4 grid grid-cols-2 gap-4 sm:gap-6">
                    <!-- Column 4 -->
                    <div>
                        <h4 class="text-ficus-yellow font-bold uppercase tracking-wider text-xs mb-6 border-b border-gray-800 pb-2 inline-block">Connect With Us</h4>
                        <ul class="space-y-4">
                            ${CONFIG.socialLinks.map(s => `
                                <li><a href="${s.url}" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-ficus-yellow transition-colors duration-200 text-xs sm:text-sm flex items-center gap-3 group">
                                    <div class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-ficus-yellow group-hover:text-black transition-colors shrink-0">
                                        <i class="fab ${s.icon}"></i>
                                    </div>
                                    <span class="truncate">${s.platform}</span>
                                </a></li>
                            `).join('')}
                        </ul>
                    </div>

                    <!-- Column 5 -->
                    <div>
                        <h4 class="text-ficus-yellow font-bold uppercase tracking-wider text-xs mb-6 border-b border-gray-800 pb-2 inline-block">Get In Touch</h4>
                        <ul class="space-y-4 text-xs sm:text-sm text-gray-400">
                            <li class="flex items-center gap-3 group">
                                <div class="text-ficus-yellow shrink-0"><i class="fas fa-phone-alt"></i></div>
                                <a href="tel:${CONFIG.contact.phone.replace(/\s/g,'')}" class="group-hover:text-white transition-colors whitespace-nowrap">${CONFIG.contact.phone}</a>
                            </li>
                            <li class="flex items-center gap-3 group">
                                <div class="text-green-500 shrink-0"><i class="fab fa-whatsapp text-lg"></i></div>
                                <a href="${CONFIG.contact.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="group-hover:text-white transition-colors whitespace-nowrap">${CONFIG.contact.whatsapp}</a>
                            </li>
                            <li class="flex items-center gap-3 group">
                                <div class="text-ficus-yellow shrink-0"><i class="fas fa-envelope"></i></div>
                                <a href="mailto:${CONFIG.contact.email}" class="group-hover:text-white transition-colors break-all">${CONFIG.contact.email}</a>
                            </li>
                            <li class="flex items-start gap-3 group">
                                <div class="mt-0.5 text-ficus-yellow shrink-0"><i class="fas fa-map-marker-alt"></i></div>
                                <span class="group-hover:text-white transition-colors leading-snug break-words">${CONFIG.contact.address}</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <!-- Bottom bar: Copyright | Privacy/Policy | Powered by -->
            <div class="flex flex-col sm:flex-row items-center justify-between text-gray-400 text-xs gap-4 pt-8">
                <div class="text-center sm:text-left">
                    ${CONFIG.copyright}
                </div>
                <div class="flex gap-4 order-last sm:order-none">
                    <a href="${CONFIG.privacyUrl}" class="hover:text-ficus-yellow transition-colors">${CONFIG.privacyText}</a>
                    <span>|</span>
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
        
        if (!document.getElementById('ficus-footer-safe-style')) {
            const styleTag = document.createElement('style');
            styleTag.id = 'ficus-footer-safe-style';
            styleTag.textContent = safeStyles;
            document.head.appendChild(styleTag);
        }

        container.innerHTML = footerHtml;
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectFooter);
    } else {
        injectFooter();
    }
})();
