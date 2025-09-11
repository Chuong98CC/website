// Common JavaScript functionality for The English Studio website

// Navigation translations
const navigationTranslations = {
    en: {
        navTagline: "Education Campus - IELTS Prep - Academy Consultancy",
        navHome: "Home",
        navCourses: "Courses",
        navTeachers: "Teachers",
        navContact: "Contact"
    },
    vi: {
        navTagline: "Trung Tâm Giáo Dục - Luyện Thi IELTS - Tư Vấn Học Thuật",
        navHome: "Trang Chủ",
        navCourses: "Khóa Học",
        navTeachers: "Giảng Viên",
        navContact: "Liên Hệ"
    }
};

// Footer translations
const footerTranslations = {
    en: {
        contactTitle: "Get in touch",
        followUs: "Follow us",
        copyright: "© 2025 The English Studio Da Nang. All rights reserved."
    },
    vi: {
        contactTitle: "Liên hệ với chúng tôi",
        followUs: "Theo dõi chúng tôi",
        copyright: "© 2025 The English Studio Da Nang. Tất cả quyền được bảo lưu."
    }
};

// Global language state (defaults to English)
let globalLanguage = 'en';

// Current navigation language state (defaults to English)
let navigationLanguage = 'en';

// Function to update navigation language
function updateNavigationLanguage(language) {
    navigationLanguage = language;
    
    // Update navigation elements
    const navTagline = document.querySelector('.nav-tagline');
    const navHome = document.querySelector('.nav-home');
    const navCourses = document.querySelector('.nav-courses');
    const navTeachers = document.querySelector('.nav-teachers');
    const navContact = document.querySelector('.nav-contact');

    if (navTagline) {
        navTagline.textContent = navigationTranslations[language].navTagline;
    }
    if (navHome) {
        navHome.textContent = navigationTranslations[language].navHome;
    }
    if (navCourses) {
        navCourses.textContent = navigationTranslations[language].navCourses;
    }
    if (navTeachers) {
        navTeachers.textContent = navigationTranslations[language].navTeachers;
    }
    if (navContact) {
        navContact.textContent = navigationTranslations[language].navContact;
    }

    console.log(`Navigation language updated to: ${language}`);
}

// Function to update footer language
function updateFooterLanguage(language) {
    // Update footer elements
    const contactTitle = document.querySelector('.footer-contact-title');
    const followUsTitle = document.querySelector('.footer-follow-us');
    const copyrightText = document.querySelector('.footer-copyright');

    if (contactTitle) {
        contactTitle.textContent = footerTranslations[language].contactTitle;
    }
    if (followUsTitle) {
        followUsTitle.textContent = footerTranslations[language].followUs;
    }
    if (copyrightText) {
        copyrightText.textContent = footerTranslations[language].copyright;
    }

    console.log(`Footer language updated to: ${language}`);
}

// Function to toggle global language
function toggleGlobalLanguage() {
    globalLanguage = globalLanguage === 'en' ? 'vi' : 'en';
    
    // Set global language state for components
    window.currentLanguage = globalLanguage;
    
    // Store language preference
    localStorage.setItem('language', globalLanguage);
    
    // Dispatch global language change event
    document.dispatchEvent(new CustomEvent('languageChanged', {
        detail: { language: globalLanguage }
    }));
    
    // Update toggle button display
    updateToggleButton();
    
    console.log(`Global language toggled to: ${globalLanguage}`);
}

// Function to update toggle button display
function updateToggleButton() {
    const flagIcon = document.getElementById('flag-icon');
    const langText = document.getElementById('lang-text');

    if (flagIcon && langText) {
        if (globalLanguage === 'en') {
            flagIcon.textContent = '🇺🇸';
            langText.textContent = 'EN';
        } else {
            flagIcon.textContent = '🇻🇳';
            langText.textContent = 'VN';
        }
    }
}

// Function to initialize language toggle button
function initializeLanguageToggle() {
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        // Remove any existing event listeners
        languageToggle.replaceWith(languageToggle.cloneNode(true));
        
        // Get the new reference and add event listener
        const newToggle = document.getElementById('language-toggle');
        if (newToggle) {
            newToggle.addEventListener('click', toggleGlobalLanguage);
            console.log('Language toggle button initialized');
        }
    }
}

// Function to load navigation component
function loadNavigation() {
    const navContainer = document.getElementById('nav-container');
    if (!navContainer) {
        console.log('Navigation container not found');
        return;
    }

    console.log('Loading navigation component...');
    fetch('components/navigation.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            navContainer.innerHTML = html;
            console.log('Navigation component loaded successfully');
            
            // Check if there's a global language state
            if (window.currentLanguage) {
                navigationLanguage = window.currentLanguage;
                globalLanguage = window.currentLanguage;
            }
            
            // Update navigation with current language
            updateNavigationLanguage(navigationLanguage);
            
            // Initialize language toggle button
            initializeLanguageToggle();
            
            // Update toggle button display
            updateToggleButton();
            
            // Dispatch custom event to notify that navigation is loaded
            document.dispatchEvent(new CustomEvent('navigationLoaded'));
        })
        .catch(error => {
            console.error('Error loading navigation component:', error);
            console.log('Creating fallback navigation...');
            
            // Create a simple fallback navigation if loading fails
            navContainer.innerHTML = `
                <nav class="fixed w-full shadow-lg z-50 bg-white">
                    <div class="max-w-7xl mx-auto px-6">
                        <div class="flex justify-between items-center py-4">
                            <div class="flex items-center space-x-3">
                                <img src="assess/logo.jpg" alt="The English Studio Logo" class="w-16 h-16 rounded-lg object-cover">
                                <div class="flex flex-col">
                                    <span class="font-bold text-4xl leading-tight">
                                        <span style="color: #D4A933;">T</span><span style="color: #1D4B3B;">he </span><span style="color: #D4A933;">E</span><span style="color: #1D4B3B;">nglish </span><span style="color: #D4A933;">S</span><span style="color: #1D4B3B;">tudio</span>
                                    </span>
                                    <span class="nav-tagline text-xs text-gray-600 font-medium leading-tight">Education Campus - IELTS Prep - Academy Consultancy</span>
                                </div>
                            </div>
                            
                            <div class="flex items-center space-x-12">
                                <div class="hidden md:flex space-x-8">
                                    <a href="index.html" class="nav-home font-bold text-xl text-black hover:opacity-80 transition-colors px-3 py-2 rounded-lg hover:bg-gray-100">Home</a>
                                    <a href="courses.html" class="nav-courses font-bold text-xl text-black hover:opacity-80 transition-colors px-3 py-2 rounded-lg hover:bg-gray-100">Courses</a>
                                    <a href="teachers.html" class="nav-teachers font-bold text-xl text-black hover:opacity-80 transition-colors px-3 py-2 rounded-lg hover:bg-gray-100">Teachers</a>
                                    <a href="#contact" class="nav-contact font-bold text-xl text-black hover:opacity-80 transition-colors px-3 py-2 rounded-lg hover:bg-gray-100">Contact</a>
                                </div>
                                
                                <button id="language-toggle" class="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl" style="background: linear-gradient(135deg, #1D4B3B 0%, #2D5A47 100%); color: #D4A933; border: 2px solid #D4A933;">
                                    <span id="current-lang" class="flex items-center space-x-2">
                                        <span id="flag-icon">🇺🇸</span>
                                        <span id="lang-text">EN</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            `;
            
            // Initialize language toggle button for fallback
            initializeLanguageToggle();
            updateToggleButton();
            
            console.log('Fallback navigation created');
        });
}

// Function to load footer component
function loadFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (!footerContainer) {
        console.log('Footer container not found');
        return;
    }

    console.log('Loading footer component...');
    fetch('components/footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            footerContainer.innerHTML = html;
            console.log('Footer component loaded successfully');
            
            // Check if there's a global language state
            if (window.currentLanguage) {
                navigationLanguage = window.currentLanguage;
            }
            
            // Update footer with current language
            updateFooterLanguage(navigationLanguage);
            
            // Dispatch custom event to notify that footer is loaded
            document.dispatchEvent(new CustomEvent('footerLoaded'));
        })
        .catch(error => {
            console.error('Error loading footer component:', error);
            console.log('Creating fallback footer...');
            
            // Create a simple fallback footer if loading fails
            footerContainer.innerHTML = `
                <footer id="contact" class="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
                    <div class="max-w-7xl mx-auto px-6">
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div>
                                <h2 class="footer-contact-title font-heading text-4xl font-bold mb-8" style="color: #D4A933;">Get in touch</h2>
                                <div class="space-y-6">
                                    <div class="flex items-start space-x-4">
                                        <svg class="w-6 h-6 mt-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                        <p class="text-lg">148 Tong Phuoc Pho St.<br>Hai Chau Dist., Da Nang, VN</p>
                                    </div>
                                    <div class="flex items-center space-x-4">
                                        <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                        </svg>
                                        <a href="mailto:theenglishstudiodanang@gmail.com" class="text-lg hover:text-primary transition-colors">
                                            theenglishstudiodanang@gmail.com
                                        </a>
                                    </div>
                                    <div class="flex items-center space-x-4">
                                        <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                        </svg>
                                        <a href="tel:+84981487770" class="text-lg hover:text-primary transition-colors">
                                            0981 487 770
                                        </a>
                                    </div>
                                    <p class="text-gray-300">Zalo Available at 0981 487 770</p>
                                </div>
                            </div>
                            <div>
                                <h3 class="footer-follow-us font-heading text-2xl font-bold mb-6" style="color: #D4A933;">Follow us</h3>
                                <div class="flex space-x-6">
                                    <a href="#" class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="border-t border-gray-700 mt-12 pt-8 text-center">
                            <p class="footer-copyright text-gray-400">© 2025 The English Studio Da Nang. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            `;
            console.log('Fallback footer created');
        });
}

// Initialize common functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Common.js loaded - initializing components...');
    
    // Initialize language from localStorage or default to English
    // Uncomment the next line to force reset to English for testing:
    // localStorage.removeItem('language');
    const savedLanguage = localStorage.getItem('language') || 'en';
    globalLanguage = savedLanguage;
    console.log('Common.js: Initial language set to:', globalLanguage);
    
    // Initialize global language state
    window.currentLanguage = globalLanguage;
    
    loadNavigation();
    loadFooter();
    
    // Dispatch initial language event after a short delay to ensure components are loaded
    setTimeout(() => {
        document.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: globalLanguage }
        }));
        console.log(`Initial language event dispatched: ${globalLanguage}`);
    }, 100);
});

// Listen for global language change events
document.addEventListener('languageChanged', function(event) {
    const newLanguage = event.detail.language;
    console.log(`Common.js received language change event: ${newLanguage}`);
    
    // Update global language state
    globalLanguage = newLanguage;
    navigationLanguage = newLanguage;
    
    // Update all components
    updateNavigationLanguage(newLanguage);
    updateFooterLanguage(newLanguage);
    updateToggleButton();
});

// Export functions for use in other scripts
window.Common = {
    loadNavigation,
    loadFooter,
    updateNavigationLanguage,
    updateFooterLanguage,
    toggleGlobalLanguage,
    updateToggleButton,
    initializeLanguageToggle,
    getNavigationTranslations: () => navigationTranslations,
    getFooterTranslations: () => footerTranslations,
    getCurrentNavigationLanguage: () => navigationLanguage,
    getCurrentGlobalLanguage: () => globalLanguage
};

console.log('common.js loaded successfully');
