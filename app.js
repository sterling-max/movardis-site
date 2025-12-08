// ====================================================================
// Movardis Website - Main Application Logic
// ====================================================================

// State Management
let currentLanguage = 'en';

// ====================================================================
// i18n - Internationalization
// ====================================================================
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            const translation = translations[lang][key];

            // Check if it's an input placeholder
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });

    // Update active language button (for index.html dropdown)
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Update button text if exists
    const currentLangSpan = document.querySelector('.current-lang');
    if (currentLangSpan) {
        currentLangSpan.textContent = lang.toUpperCase();
    }

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// ====================================================================
// Navigation
// ====================================================================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect for navbar
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    if (navLinks) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu) navMenu.classList.remove('active');
            });
        });

        // Smooth scroll for anchor links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                // Only handle hash links that are on the same page
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const offsetTop = target.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }
}

// ====================================================================
// Language Selector (Dropdown)
// ====================================================================
function initLanguageSelector() {
    const langBtn = document.getElementById('lang-icon-btn');
    const langDropdown = document.getElementById('lang-dropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    const currentLangSpan = document.querySelector('.current-lang');

    // Also support old button style for safety (zap-studio was updated but good to be safe)
    const oldLangBtns = document.querySelectorAll('.lang-btn');
    if (oldLangBtns.length > 0) {
        oldLangBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                setLanguage(lang);
            });
        });
    }

    if (!langBtn || !langDropdown) return;

    // Toggle dropdown
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('active');
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
            langDropdown.classList.remove('active');
        }
    });

    // Handle language selection
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            setLanguage(lang);

            // Close dropdown
            langDropdown.classList.remove('active');
        });
    });
}

// ====================================================================
// Product Section - Collapsible
// ====================================================================
function initProductSection() {
    const toggleBtn = document.getElementById('product-toggle-btn');
    const expandedContent = document.getElementById('product-expanded');

    if (toggleBtn && expandedContent) {
        toggleBtn.addEventListener('click', () => {
            const isExpanded = expandedContent.classList.contains('active');

            if (isExpanded) {
                expandedContent.classList.remove('active');
                toggleBtn.classList.remove('expanded');
                if (translations[currentLanguage] && translations[currentLanguage]['product.expand']) {
                    toggleBtn.querySelector('span').textContent = translations[currentLanguage]['product.expand'];
                }
            } else {
                expandedContent.classList.add('active');
                toggleBtn.classList.add('expanded');
                if (translations[currentLanguage] && translations[currentLanguage]['product.collapse']) {
                    toggleBtn.querySelector('span').textContent = translations[currentLanguage]['product.collapse'];
                }
            }
        });
    }
}

// ====================================================================
// FAQ Section - Accordion
// ====================================================================
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });

                // Toggle current item
                if (isActive) {
                    item.classList.remove('active');
                } else {
                    item.classList.add('active');
                }
            });
        }
    });
}

// ====================================================================
// Contact Form
// ====================================================================
function initContactForm() {
    const form = document.getElementById('contact-form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            // Here you would normally send the data to a server
            console.log('Form submitted:', data);

            // Show success message (you can customize this)
            alert(translations[currentLanguage]['contact.form.submit'] + ' ✓');

            // Reset form
            form.reset();
        });
    }
}

// ====================================================================
// Scroll Animations
// ====================================================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// ====================================================================
// Placeholder Logo Handler
// ====================================================================
function handlePlaceholderLogos() {
    const logos = [
        { id: 'nav-logo', path: './assets/logo.svg' },
        { id: 'footer-logo', path: './assets/logo.svg' },
        { id: 'product-logo', path: './assets/zap-studio-logo.svg' }
    ];

    logos.forEach(logo => {
        const element = document.getElementById(logo.id);
        if (element) {
            element.addEventListener('error', () => {
                // If image fails to load, create a placeholder
                const placeholder = document.createElement('div');

                // Copy class lists
                placeholder.className = element.className;

                placeholder.style.width = element.width || '40px';
                placeholder.style.height = element.height || '40px';
                // Movardis Gradient: Deep Blue to Cyan
                placeholder.style.background = 'linear-gradient(135deg, #0A3D62, #12CBC4)';
                placeholder.style.borderRadius = '8px';
                placeholder.style.display = 'inline-block';

                element.replaceWith(placeholder);
            });
        }
    });
}

// ====================================================================
// Initialize Application
// ====================================================================
function init() {
    // Load saved language preference or default to English
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';

    // Ensure translations exist
    if (typeof translations !== 'undefined') {
        setLanguage(savedLanguage);
    } else {
        console.error('Translations not loaded!');
    }

    // Initialize all components
    initNavigation();
    initProductSection();
    initFAQ();
    initContactForm();
    initLanguageSelector();
    initScrollAnimations();
    handlePlaceholderLogos();

    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    console.log('Movardis Website initialized successfully');
}

// ====================================================================
// Run on DOM Content Loaded
// ====================================================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
