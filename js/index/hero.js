// Hero section component with bilingual support

// Hero translations
const heroTranslations = {
    en: {
        mainText: "MASTER ENGLISH WITH",
        accent1: "CONFIDENCE",
        accent2: "SUCCESS",
        description: "Join thousands of learners who trust us to ignite passion for English mastery. Our proven methodology combines fun, personalized coaching, and real-world skills to help you conquer IELTS and unlock your future potential!",
        btnExplore: "EXPLORE NOW",
        btnAssessment: "FREE ASSESSMENT"
    },
    vi: {
        mainText: "CHINH PHỤC TIẾNG ANH VỚI",
        accent1: "TỰ TIN",
        accent2: "THÀNH CÔNG",
        description: "Hãy tham gia cùng hàng nghìn học viên tin tưởng chúng tôi để khơi dậy đam mê chinh phục tiếng Anh. Phương pháp đã được chứng minh của chúng tôi kết hợp niềm vui, huấn luyện cá nhân hóa và kỹ năng thực tế để giúp bạn chinh phục IELTS và mở khóa tiềm năng tương lai!",
        btnExplore: "KHÁM PHÁ NGAY",
        btnAssessment: "ĐÁNH GIÁ MIỄN PHÍ"
    }
};

// Update hero language
function updateHeroLanguage(language = 'en') {
    const translations = heroTranslations[language];
    
    // Update main text
    const mainTextElement = document.querySelector('.hero-main-text');
    if (mainTextElement) {
        mainTextElement.textContent = translations.mainText;
    }
    
    // Update accent text
    const accent1Element = document.querySelector('.hero-accent-1');
    if (accent1Element) {
        accent1Element.textContent = translations.accent1;
    }
    
    const accent2Element = document.querySelector('.hero-accent-2');
    if (accent2Element) {
        accent2Element.textContent = translations.accent2;
    }
    
    // Update description
    const descriptionElement = document.querySelector('.hero-description');
    if (descriptionElement) {
        descriptionElement.textContent = translations.description;
    }
    
    // Update button text
    const btnExploreElement = document.querySelector('.btn-explore-text');
    if (btnExploreElement) {
        btnExploreElement.textContent = translations.btnExplore;
    }
    
    const btnAssessmentElement = document.querySelector('.btn-assessment-text');
    if (btnAssessmentElement) {
        btnAssessmentElement.textContent = translations.btnAssessment;
    }
}

// Load hero component
async function loadHero() {
    try {
        const response = await fetch('components/index/hero.html');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const heroHTML = await response.text();
        
        const heroContainer = document.getElementById('hero-container');
        if (heroContainer) {
            heroContainer.innerHTML = heroHTML;
            
            // Get current language from localStorage or default to 'en'
            const currentLanguage = localStorage.getItem('language') || 'en';
            updateHeroLanguage(currentLanguage);
        } else {
            console.error('Hero container not found');
        }
    } catch (error) {
        console.error('Error loading hero component:', error);
    }
}

// Listen for language changes
document.addEventListener('languageChanged', function(event) {
    const newLanguage = event.detail.language;
    updateHeroLanguage(newLanguage);
});

// Auto-load hero when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadHero();
});

// Export functions for manual loading if needed
if (typeof window !== 'undefined') {
    window.loadHero = loadHero;
    window.updateHeroLanguage = updateHeroLanguage;
}