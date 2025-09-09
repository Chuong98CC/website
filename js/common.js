// Common JavaScript functionality for The English Studio website

// Language translations - Base structure
const translations = {
    en: {
        // Common translations that can be extended by individual pages
        contactTitle: "Get in touch",
        followUs: "Follow us",
        copyright: "© 2025 The English Studio Da Nang. All rights reserved.",
        // Navigation
        home: "Home",
        courses: "Courses",
        teachers: "Teachers",
        contact: "Contact"
    },
    vi: {
        // Common translations that can be extended by individual pages
        contactTitle: "Liên hệ với chúng tôi",
        followUs: "Theo dõi chúng tôi",
        copyright: "© 2025 The English Studio Da Nang. Tất cả quyền được bảo lưu.",
        // Navigation
        home: "Trang Chủ",
        courses: "Khóa Học",
        teachers: "Giảng Viên",
        contact: "Liên Hệ"
    }
};

// Current language state
let currentLanguage = 'en';

// Language toggle functionality
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'vi' : 'en';
    updateLanguage();
    updateToggleButton();
    // Save language preference to localStorage
    localStorage.setItem('preferredLanguage', currentLanguage);
}

function updateToggleButton() {
    const flagIcon = document.getElementById('flag-icon');
    const langText = document.getElementById('lang-text');

    if (flagIcon && langText) {
        if (currentLanguage === 'en') {
            flagIcon.textContent = '🇺🇸';
            langText.textContent = 'EN';
        } else {
            flagIcon.textContent = '🇻🇳';
            langText.textContent = 'VN';
        }
    }
}

// Update common elements (navigation, footer)
function updateCommonElements() {
    // Update navigation links if they exist
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const linkText = link.textContent.toLowerCase();
        if (linkText.includes('home') && translations[currentLanguage].home) {
            link.textContent = translations[currentLanguage].home;
        } else if (linkText.includes('courses') && translations[currentLanguage].courses) {
            link.textContent = translations[currentLanguage].courses;
        } else if (linkText.includes('teachers') && translations[currentLanguage].teachers) {
            link.textContent = translations[currentLanguage].teachers;
        } else if (linkText.includes('contact') && translations[currentLanguage].contact) {
            link.textContent = translations[currentLanguage].contact;
        }
    });

    // Update footer content
    const contactTitle = document.querySelector('#contact h2');
    const followUsTitle = document.querySelector('#contact h3');
    const copyrightText = document.querySelector('#contact .text-gray-400');

    if (contactTitle && translations[currentLanguage].contactTitle) {
        contactTitle.textContent = translations[currentLanguage].contactTitle;
    }
    if (followUsTitle && translations[currentLanguage].followUs) {
        followUsTitle.textContent = translations[currentLanguage].followUs;
    }
    if (copyrightText && translations[currentLanguage].copyright) {
        copyrightText.textContent = translations[currentLanguage].copyright;
    }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
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
}

// Intersection Observer for animations
function initAnimations() {
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

    // Observe elements for animation
    document.querySelectorAll('section > div').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
}

// Initialize language from localStorage or browser preference
function initLanguage() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    const browserLanguage = navigator.language.startsWith('vi') ? 'vi' : 'en';
    
    currentLanguage = savedLanguage || browserLanguage;
    updateToggleButton();
    updateCommonElements();
}

// Function to load navigation component
function loadNavigation() {
    const navigationContainer = document.getElementById('navigation-container');
    if (navigationContainer) {
        console.log('Loading navigation component...');
        fetch('components/navigation.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                navigationContainer.innerHTML = data;
                // Initialize language toggle for the loaded navigation
                const languageToggle = document.getElementById('language-toggle');
                if (languageToggle) {
                    languageToggle.addEventListener('click', toggleLanguage);
                }
                console.log('Navigation component loaded successfully');
            })
            .catch(error => {
                console.error('Error loading navigation component:', error);
                console.log('Using fallback navigation...');
                // Fallback: create basic navigation if component fails to load
                navigationContainer.innerHTML = `
                    <nav class="fixed w-full shadow-lg z-50 bg-white">
                        <div class="max-w-7xl mx-auto px-6">
                            <div class="flex justify-between items-center py-4">
                                <div class="flex items-center space-x-3">
                                    <img src="assess/logo.jpg" alt="The English Studio Logo" class="w-16 h-16 rounded-lg object-cover">
                                    <div class="flex flex-col">
                                        <span class="font-bold text-4xl leading-tight">
                                            <span style="color: #D4A933;">T</span><span style="color: #1D4B3B;">he </span><span style="color: #D4A933;">E</span><span style="color: #1D4B3B;">nglish </span><span style="color: #D4A933;">S</span><span style="color: #1D4B3B;">tudio</span>
                                        </span>
                                        <span class="text-xs text-gray-600 font-medium leading-tight">Education Campus - IELTS Prep - Academy Consultancy</span>
                                    </div>
                                </div>
                                
                                <div class="hidden md:flex space-x-8">
                                    <a href="index.html" class="font-bold text-xl text-black hover:opacity-80 transition-colors px-3 py-2 rounded-lg hover:bg-gray-100">Home</a>
                                    <a href="courses.html" class="font-bold text-xl text-black hover:opacity-80 transition-colors px-3 py-2 rounded-lg hover:bg-gray-100">Courses</a>
                                    <a href="teachers.html" class="font-bold text-xl text-black hover:opacity-80 transition-colors px-3 py-2 rounded-lg hover:bg-gray-100">Teachers</a>
                                    <a href="#contact" class="font-bold text-xl text-black hover:opacity-80 transition-colors px-3 py-2 rounded-lg hover:bg-gray-100">Contact</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                    
                    <!-- Language Toggle Button - Fixed Position -->
                    <button id="language-toggle" class="fixed top-4 right-4 z-50 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl" style="background: linear-gradient(135deg, #1D4B3B 0%, #2D5A47 100%); color: #D4A933; border: 2px solid #D4A933;">
                        <span id="current-lang" class="flex items-center space-x-2">
                            <span id="flag-icon">🇺🇸</span>
                            <span id="lang-text">EN</span>
                        </span>
                    </button>
                `;
            });
    } else {
        console.error('Navigation container not found');
    }
}

// Initialize all common functionality
function initCommon() {
    // Load navigation component
    loadNavigation();

    // Initialize language toggle
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
    }

    // Initialize smooth scrolling
    initSmoothScrolling();

    // Initialize animations
    initAnimations();

    // Initialize language
    initLanguage();

    console.log('Common functionality initialized');
}

// Export functions for use in other scripts
window.Common = {
    toggleLanguage,
    updateToggleButton,
    updateCommonElements,
    initSmoothScrolling,
    initAnimations,
    initLanguage,
    initCommon,
    currentLanguage: () => currentLanguage,
    translations: () => translations
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initCommon);

// Test if script is loading
console.log('common.js loaded successfully');
alert('common.js loaded - navigation should appear soon');
