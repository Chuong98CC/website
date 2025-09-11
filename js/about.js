// About section functionality for The English Studio website

// About translations
const aboutTranslations = {
    en: {
        title: "ABOUT US",
        subtitle: "Discover what makes our English teaching approach unique and effective",
        cards: [
            {
                title: "Unique & Fun Learning",
                text: "Transform learning into an exciting adventure! Our innovative methods make mastering English an enjoyable journey for everyone."
            },
            {
                title: "Personalized Excellence",
                text: "Everyone learns differently! Our custom-tailored classes ensure you get the attention and support needed to thrive and excel."
            },
            {
                title: "Confidence Through Debate",
                text: "Build unstoppable confidence! Our interactive discussions and debates develop critical thinking and communication skills for future success."
            },
            {
                title: "Ignite Learning Passion",
                text: "\"I want to explore more!\" - We spark curiosity and create lifelong learners who love discovering the world through English."
            }
        ]
    },
    vi: {
        title: "VỀ CHÚNG TÔI",
        subtitle: "Khám phá điều gì làm cho phương pháp dạy tiếng Anh của chúng tôi độc đáo và hiệu quả",
        cards: [
            {
                title: "Học Tập Độc Đáo & Thú Vị",
                text: "Biến việc học thành một cuộc phiêu lưu thú vị! Phương pháp đổi mới của chúng tôi làm cho việc thành thạo tiếng Anh trở thành một hành trình thú vị cho mọi người."
            },
            {
                title: "Sự Xuất Sắc Được Cá Nhân Hóa",
                text: "Mỗi người học theo cách khác nhau! Các lớp học được thiết kế riêng của chúng tôi đảm bảo bạn nhận được sự chú ý và hỗ trợ cần thiết để phát triển và vượt trội."
            },
            {
                title: "Tự Tin Thông Qua Tranh Luận",
                text: "Xây dựng sự tự tin không thể cản phá! Các cuộc thảo luận và tranh luận tương tác của chúng tôi phát triển tư duy phản biện và kỹ năng giao tiếp cho thành công trong tương lai."
            },
            {
                title: "Khơi Dậy Đam Mê Học Tập",
                text: "\"Tôi muốn khám phá thêm!\" - Chúng tôi khơi dậy sự tò mò và tạo ra những người học suốt đời yêu thích khám phá thế giới thông qua tiếng Anh."
            }
        ]
    }
};

// Current about language state (defaults to English)
let aboutLanguage = 'en';

// Function to update about language
function updateAboutLanguage(language) {
    aboutLanguage = language;
    
    // Update about section title and subtitle
    const aboutTitle = document.querySelector('.about-title');
    const aboutSubtitle = document.querySelector('.about-subtitle');

    if (aboutTitle) {
        aboutTitle.textContent = aboutTranslations[language].title;
    }
    if (aboutSubtitle) {
        aboutSubtitle.textContent = aboutTranslations[language].subtitle;
    }

    // Update individual cards
    aboutTranslations[language].cards.forEach((card, index) => {
        const titleElement = document.querySelector(`.about-card-title-${index + 1}`);
        const textElement = document.querySelector(`.about-card-text-${index + 1}`);

        if (titleElement) {
            titleElement.textContent = card.title;
        }
        if (textElement) {
            textElement.textContent = card.text;
        }
    });

    console.log(`About language updated to: ${language}`);
}

// Function to load about component
function loadAbout() {
    const aboutContainer = document.getElementById('about-container');
    if (!aboutContainer) {
        console.log('About container not found');
        return;
    }

    console.log('Loading about component...');
    fetch('components/about.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            aboutContainer.innerHTML = html;
            console.log('About component loaded successfully');
            
            // Check if there's a global language state
            if (window.currentLanguage) {
                aboutLanguage = window.currentLanguage;
            }
            
            // Update about with current language
            updateAboutLanguage(aboutLanguage);
            
            // Dispatch custom event to notify that about is loaded
            document.dispatchEvent(new CustomEvent('aboutLoaded'));
        })
        .catch(error => {
            console.error('Error loading about component:', error);
            console.log('About component failed to load');
        });
}

// Initialize about when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadAbout();
});

// Listen for global language changes
document.addEventListener('languageChanged', function(event) {
    const newLanguage = event.detail.language;
    updateAboutLanguage(newLanguage);
});

// Listen for navigation loaded to sync language state
document.addEventListener('navigationLoaded', function() {
    if (window.currentLanguage) {
        updateAboutLanguage(window.currentLanguage);
    }
});