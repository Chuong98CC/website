// Advantages section translations and functionality
const advantagesTranslations = {
    en: {
        'advantages-card-title-1': 'Smaller Class Sizes for Better Focus',
        'advantages-card-text-1': 'Get the personalized attention you deserve! Our intimate class sizes ensure every learner gets the guidance needed to succeed.',
        'advantages-card-cta-1': 'EXPLORE OUR CLASSES →',
        'advantages-card-title-2': 'Expert Tutoring That Inspires',
        'advantages-card-text-2': 'Blossom under the guidance of passionate educators! Our attentive tutoring creates a supportive environment for growth and achievement.',
        'advantages-card-cta-2': 'MEET OUR EXPERTS →',
        'advantages-card-title-3': 'Fun Events & Activities',
        'advantages-card-text-3': 'Learning should be exciting! Join our engaging events and activities that make English learning an unforgettable adventure.',
        'advantages-card-cta-3': 'SEE OUR ACTIVITIES →'
    },
    vi: {
        'advantages-card-title-1': 'Lớp Học Nhỏ Để Tập Trung Tốt Hơn',
        'advantages-card-text-1': 'Nhận được sự chú ý cá nhân mà bạn xứng đáng! Quy mô lớp học nhỏ gọn đảm bảo mỗi học viên đều nhận được sự hướng dẫn cần thiết để thành công.',
        'advantages-card-cta-1': 'KHÁM PHÁ LỚP HỌC →',
        'advantages-card-title-2': 'Hướng Dẫn Chuyên Nghiệp Truyền Cảm Hứng',
        'advantages-card-text-2': 'Phát triển dưới sự hướng dẫn của những nhà giáo dục đam mê! Việc dạy kèm tận tâm tạo ra môi trường hỗ trợ cho sự phát triển và thành tích.',
        'advantages-card-cta-2': 'GẶP GỠ CHUYÊN GIA →',
        'advantages-card-title-3': 'Sự Kiện & Hoạt Động Thú Vị',
        'advantages-card-text-3': 'Học tập nên thú vị! Tham gia các sự kiện và hoạt động hấp dẫn khiến việc học tiếng Anh trở thành cuộc phiêu lưu khó quên.',
        'advantages-card-cta-3': 'XEM HOẠT ĐỘNG →'
    }
};

// Update advantages section language
function updateAdvantagesLanguage(language) {
    const translations = advantagesTranslations[language];
    if (!translations) return;

    for (const [className, text] of Object.entries(translations)) {
        const elements = document.querySelectorAll(`.${className}`);
        elements.forEach(element => {
            element.textContent = text;
        });
    }
}

// Load advantages component
async function loadAdvantages() {
    try {
        const response = await fetch('components/index/advantages.html');
        const html = await response.text();
        const container = document.getElementById('advantages-container');
        if (container) {
            container.innerHTML = html;
            
            // Update language based on current setting
            const currentLanguage = window.currentLanguage || localStorage.getItem('language') || 'en';
            updateAdvantagesLanguage(currentLanguage);
            
            // Dispatch loaded event
            window.dispatchEvent(new CustomEvent('advantagesLoaded'));
        }
    } catch (error) {
        console.error('Error loading advantages component:', error);
    }
}

// Listen for language changes
document.addEventListener('languageChanged', (event) => {
    updateAdvantagesLanguage(event.detail.language);
});

// Load advantages when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAdvantages);
} else {
    loadAdvantages();
}