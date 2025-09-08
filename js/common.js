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

// Initialize all common functionality
function initCommon() {
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
