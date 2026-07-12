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
document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById("ficus-header-container");

    if (headerContainer) {

        const headerHTML = `
            <!-- Wrapper that fixes the entire header block to the top -->
            <div class="fixed w-full top-0 left-0 z-50">

                <!-- TOP INFO BAR – Layout: LEFT (Location) | CENTER (WhatsApp & Email) | RIGHT (Social Icons) -->
                <div class="bg-ficus-blue text-white text-xs sm:text-sm py-2 px-4 sm:px-8 border-b border-white/20">
                    <div class="flex justify-center sm:justify-between items-center gap-2">
                        
                        <!-- LEFT: Location (hidden on mobile, now clickable) -->
                        <a href="https://maps.google.com/?q=Mwanza+Tanzania" target="_blank" 
                           class="hidden sm:flex items-center gap-1 whitespace-nowrap hover:text-yellow-400 transition-colors duration-300">
                            <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Mwanza, Tanzania
                        </a>

                        <!-- CENTER: WhatsApp & Email (always visible, now clickable with yellow hover) -->
                        <div class="flex items-center gap-3 sm:gap-4">
                            <!-- WhatsApp (clickable, opens WhatsApp) -->
                            <a href="https://wa.me/+255753834422" target="_blank" 
                               class="flex items-center gap-1 whitespace-nowrap hover:text-yellow-400 transition-colors duration-300">
                                <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +255 753 834 422
                                
                            </a>
                            <!-- Email (clickable, opens mail client) -->
                            <a href="mailto:ficus.dev.org@gmail.com" 
                               class="flex items-center gap-1 whitespace-nowrap hover:text-yellow-400 transition-colors duration-300">
                                <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                ficus.dev.org@gmail.com
                            </a>
                        </div>

                        <!-- RIGHT: Social Icons (hidden on mobile, hover: yellow-400) -->
                        <div class="hidden sm:flex items-center space-x-3">
                            <!-- Instagram -->
                            <a href="#" class="hover:text-yellow-400 transition-colors duration-300" aria-label="Instagram">
                                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                            </a>
                            <!-- TikTok -->
                            <a href="#" class="hover:text-yellow-400 transition-colors duration-300" aria-label="TikTok">
                                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                            </a>
                            <!-- Facebook -->
                            <a href="#" class="hover:text-yellow-400 transition-colors duration-300" aria-label="Facebook">
                                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                            </a>
                            <!-- LinkedIn -->
                            <a href="#" class="hover:text-yellow-400 transition-colors duration-300" aria-label="LinkedIn">
                                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- MAIN HEADER (shadow strengthened, blue mobile menu) -->
                <header class="bg-white text-black shadow-lg relative">
                    
                    <div class="w-full px-4 sm:px-8">
                        <div class="flex justify-between items-center h-24 lg:h-28">
                          
                            <!-- Logo Area -->
                            <div class="flex-shrink-0 flex items-center gap-3 cursor-pointer" onclick="window.location.href='index.html'">
                                <img src="picha/fodo logo.png" alt="Ficus Logo" class="h-16 lg:h-20 w-auto object-contain">
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

                    <!-- Mobile Navigation Dropdown (Blue background, white text) -->
                    <div id="mobile-menu" class="hidden lg:hidden bg-ficus-blue border-t border-white/20 absolute top-full left-0 w-full shadow-2xl rounded-b-2xl">
                        <div class="px-4 pt-2 pb-6 space-y-1">
                            <a href="index.html" class="nav-link block px-4 py-3 rounded-xl text-base font-bold text-white hover:bg-white/20 transition">Home</a>
                            <a href="about.html" class="nav-link block px-4 py-3 rounded-xl text-base font-bold text-white hover:bg-white/20 transition">About Us</a>
                            <a href="themes.html" class="nav-link block px-4 py-3 rounded-xl text-base font-bold text-white hover:bg-white/20 transition">Our Themes</a>
                            <a href="program.html" class="nav-link block px-4 py-3 rounded-xl text-base font-bold text-white hover:bg-white/20 transition">Programs</a>
                            <a href="gallery.html" class="nav-link block px-4 py-3 rounded-xl text-base font-bold text-white hover:bg-white/20 transition">Gallery</a>
                            <a href="involved.html" class="nav-link block px-4 py-3 rounded-xl text-base font-bold text-white hover:bg-white/20 transition">Get Involved</a>
                            <a href="news.html" class="nav-link block px-4 py-3 rounded-xl text-base font-bold text-white hover:bg-white/20 transition">News & Updates</a>
                            <a href="contact.html" class="nav-link block px-4 py-3 rounded-xl text-base font-bold text-white hover:bg-white/20 transition">Contact</a>
                            
                            <a href="donate.html" class="block mt-4 px-4 py-4 text-center rounded-xl text-lg font-black bg-white text-ficus-blue hover:bg-ficus-green hover:text-white transition duration-300 shadow-md">
                                Donate Now
                            </a>
                        </div>
                    </div>
                </header>

            </div><!-- end fixed wrapper -->
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
                link.classList.remove('text-black');
                link.classList.add('text-ficus-green');

                if (link.closest('nav')) {
                    link.classList.add('border-b-2', 'border-ficus-green', 'pb-1');
                } else {
                    link.classList.add('bg-white/20'); // subtle active for mobile blue menu
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





// ============================
//  FICUS FOOTER – SELF‑INJECTING
// ============================
(function () {
    'use strict';

    // =================================================================
    //  CONFIGURATION – Edit the URLs and text here
    // =================================================================
    const CONFIG = {
        containerId: 'ficus-footer',   // ID of the empty div where footer will be placed
        orgName: 'Ficus Development Organization',
        aboutText: 'Ficus Development Organization (FIDO) is a Tanzanian non‑profit that partners with rural communities to deliver lasting solutions in sustainable agriculture, quality education, clean water, and economic empowerment. Rooted in the belief that real change must be locally owned, we invest in grassroots leaders, women, and youth to build self‑reliant futures across Africa.',

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

        // Column 4: Social Media (update URLs if needed)
        socialLinks: [
            { platform: 'Instagram', icon: 'fa-instagram', url: 'https://www.instagram.com/ficus.development.organization?igsh=cDh0Z3h5aXM2c2Q1' },
            { platform: 'TikTok', icon: 'fa-tiktok', url: 'https://tiktok.com/@ficusdev' },
            { platform: 'LinkedIn', icon: 'fa-linkedin-in', url: 'https://linkedin.com/company/ficusdev' },
            { platform: 'Facebook', icon: 'fa-facebook-f', url: 'https://www.facebook.com/share/194e73dtSj/' }
        ],

        // Column 5: Get In Touch
        contact: {
            phone: '+255 753 834 422',
            whatsapp: '+255 753 834 422',
            whatsappUrl: 'https://wa.me/255753834422',   // WhatsApp link (auto‑creates chat)
            email: 'ficus.dev.org@gmail.com',
            address: 'Nyamagana Mwanza'
        },

        // ============================================================
        //  BOTTOM BAR – Privacy, Terms, and Powered By links
        //  Edit the URLs here – they become clickable automatically
        // ============================================================
        copyright: '© 2026 Ficus Development Organization',
        privacyText: 'Privacy Policy',
        privacyUrl: 'privacy.html',                // ← YOUR PRIVACY PAGE URL
        termsText: 'Terms of Service',
        termsUrl: 'terms.html',                    // ← YOUR TERMS PAGE URL
        poweredBy: 'Powered by African Tech',
        poweredByUrl: 'https://africana-tech.com/'   // ← YOUR POWERED BY URL (set to '' for plain text)
    };

    // ============================
    //  SAFE SCOPED STYLES
    // ============================
    const safeStyles = `
        #${CONFIG.containerId} {
            display: block;
            width: 100%;
            clear: both;
            position: relative;
            z-index: 40;
            margin-top: 4rem;
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
        <div class="w-full px-4 sm:px-8 lg:px-12 mx-auto">
            
            <!-- Main grid: 12 columns -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-gray-800">
                
                <!-- Column 1: About -->
                <div class="lg:col-span-4">
                    <h3 class="text-1xl font-bold text-yellow-400 tracking-wide mb-6">${CONFIG.orgName}</h3>
                    <p class="text-white text-sm leading-relaxed pr-4 lg:pr-10">${CONFIG.aboutText}</p>
                </div>

                <!-- Columns 2 & 3: Quick Links + Relevant Links -->
                <div class="lg:col-span-4 grid grid-cols-2 gap-4 sm:gap-6">
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

                <!-- Columns 4 & 5: Social + Contact -->
                <div class="lg:col-span-4 grid grid-cols-2 gap-4 sm:gap-6">
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
                    <div>
                        <h4 class="text-ficus-yellow font-bold uppercase tracking-wider text-xs mb-6 border-b border-gray-800 pb-2 inline-block">Get In Touch</h4>
                        <ul class="space-y-4 text-xs sm:text-sm text-gray-400">
                            <li class="flex items-center gap-3 group">
                                <div class="text-ficus-yellow shrink-0"><i class="fas fa-phone-alt"></i></div>
                                <a href="tel:${CONFIG.contact.phone.replace(/\s/g, '')}" class="group-hover:text-white transition-colors whitespace-nowrap">${CONFIG.contact.phone}</a>
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

            <!-- ============================================================
                 BOTTOM BAR – Privacy, Terms, and Powered By
                 All URLs come from the CONFIG above
            ============================================================ -->
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
                    ${CONFIG.poweredByUrl ?
            `<a href="${CONFIG.poweredByUrl}" class="hover:underline" target="_blank" rel="noopener noreferrer">${CONFIG.poweredBy}</a>` :
            CONFIG.poweredBy}
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