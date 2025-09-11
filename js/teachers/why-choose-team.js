// Why Choose Our Team section translations and functionality
const whyChooseTeamTranslations = {
    en: {
        'why-choose-title': 'Why Choose Our Team?',
        'why-choose-subtitle': 'What makes our educators and support staff exceptional',
        'why-choose-feature-title-1': 'Proven Expertise',
        'why-choose-feature-desc-1': 'All our coaches have achieved high IELTS scores and years of teaching experience',
        'why-choose-feature-title-2': 'Personal Attention',
        'why-choose-feature-desc-2': 'Small class sizes ensure every student receives individual attention and feedback',
        'why-choose-feature-title-3': 'Innovative Methods',
        'why-choose-feature-desc-3': 'Creative teaching approaches that make learning engaging and effective',
        'why-choose-feature-title-4': 'Passionate Teaching',
        'why-choose-feature-desc-4': 'Our team is genuinely passionate about helping students achieve their goals'
    },
    vi: {
        'why-choose-title': 'Tại Sao Chọn Đội Ngũ Chúng Tôi?',
        'why-choose-subtitle': 'Điều gì làm cho đội ngũ giáo dục và hỗ trợ của chúng tôi trở nên đặc biệt',
        'why-choose-feature-title-1': 'Chuyên Môn Đã Được Chứng Minh',
        'why-choose-feature-desc-1': 'Tất cả giáo viên của chúng tôi đều đạt điểm IELTS cao và có nhiều năm kinh nghiệm giảng dạy',
        'why-choose-feature-title-2': 'Chú Ý Cá Nhân Hóa',
        'why-choose-feature-desc-2': 'Lớp học nhỏ đảm bảo mỗi học viên nhận được sự chú ý và phản hồi cá nhân',
        'why-choose-feature-title-3': 'Phương Pháp Đổi Mới',
        'why-choose-feature-desc-3': 'Cách tiếp cận giảng dạy sáng tạo làm cho việc học tập trở nên hấp dẫn và hiệu quả',
        'why-choose-feature-title-4': 'Giảng Dạy Với Đam Mê',
        'why-choose-feature-desc-4': 'Đội ngũ của chúng tôi thực sự đam mê giúp đỡ học viên đạt được mục tiêu'
    }
};

// Update why choose team section language
function updateWhyChooseTeamLanguage(language) {
    const translations = whyChooseTeamTranslations[language];
    if (!translations) return;

    for (const [className, text] of Object.entries(translations)) {
        const elements = document.querySelectorAll(`.${className}`);
        elements.forEach(element => {
            element.textContent = text;
        });
    }
}

// Load why choose team component
async function loadWhyChooseTeam() {
    try {
        const response = await fetch('components/teachers/why-choose-team.html');
        const html = await response.text();
        const container = document.getElementById('why-choose-team-container');
        if (container) {
            container.innerHTML = html;
            
            // Update language based on current setting
            const currentLanguage = window.currentLanguage || localStorage.getItem('language') || 'en';
            updateWhyChooseTeamLanguage(currentLanguage);
            
            // Dispatch loaded event
            window.dispatchEvent(new CustomEvent('whyChooseTeamLoaded'));
        }
    } catch (error) {
        console.error('Error loading why choose team component:', error);
    }
}

// Listen for language changes
document.addEventListener('languageChanged', (event) => {
    updateWhyChooseTeamLanguage(event.detail.language);
});

// Load why choose team when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadWhyChooseTeam);
} else {
    loadWhyChooseTeam();
}