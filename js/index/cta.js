// CTA section component with bilingual support

// CTA translations
const ctaTranslations = {
    en: {
        title: "🚀 READY TO TRANSFORM YOUR FUTURE?",
        subtitle: "Join the Success Journey! Get Your FREE 1-1 Assessment Today:",
        feature1: "Personalized Learning Plan",
        feature2: "Expert Assessment & Guidance",
        feature3: "Path to IELTS Success",
        button: "BOOK A FREE ASSESSMENT"
    },
    vi: {
        title: "🚀 SẴN SÀNG THAY ĐỔI TƯƠNG LAI CỦA BẠN?",
        subtitle: "Tham gia Hành Trình Thành Công! Nhận Đánh Giá MIỄN PHÍ 1-1 Ngay Hôm Nay:",
        feature1: "Kế Hoạch Học Tập Cá Nhân Hóa",
        feature2: "Đánh Giá & Hướng Dẫn Chuyên Gia",
        feature3: "Con Đường Đến Thành Công IELTS",
        button: "ĐẶT LỊCH ĐÁNH GIÁ MIỄN PHÍ"
    }
};

// Update CTA language
function updateCTALanguage(language = 'en') {
    const translations = ctaTranslations[language];
    
    // Update title
    const titleElement = document.querySelector('.cta-title');
    if (titleElement) {
        titleElement.textContent = translations.title;
    }
    
    // Update subtitle
    const subtitleElement = document.querySelector('.cta-subtitle');
    if (subtitleElement) {
        subtitleElement.textContent = translations.subtitle;
    }
    
    // Update features
    const feature1Element = document.querySelector('.cta-feature-1');
    if (feature1Element) {
        feature1Element.textContent = translations.feature1;
    }
    
    const feature2Element = document.querySelector('.cta-feature-2');
    if (feature2Element) {
        feature2Element.textContent = translations.feature2;
    }
    
    const feature3Element = document.querySelector('.cta-feature-3');
    if (feature3Element) {
        feature3Element.textContent = translations.feature3;
    }
    
    // Update button text
    const buttonElement = document.querySelector('.cta-button');
    if (buttonElement) {
        buttonElement.textContent = translations.button;
    }
}

// Load CTA component
async function loadCTA() {
    try {
        const response = await fetch('components/index/cta.html');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const ctaHTML = await response.text();
        
        const ctaContainer = document.getElementById('cta-container');
        if (ctaContainer) {
            ctaContainer.innerHTML = ctaHTML;
            
            // Get current language from localStorage or default to 'en'
            const currentLanguage = localStorage.getItem('language') || 'en';
            updateCTALanguage(currentLanguage);
        } else {
            console.error('CTA container not found');
        }
    } catch (error) {
        console.error('Error loading CTA component:', error);
    }
}

// Listen for language changes
document.addEventListener('languageChanged', function(event) {
    const newLanguage = event.detail.language;
    updateCTALanguage(newLanguage);
});

// Auto-load CTA when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadCTA();
});

// Export functions for manual loading if needed
if (typeof window !== 'undefined') {
    window.loadCTA = loadCTA;
    window.updateCTALanguage = updateCTALanguage;
}