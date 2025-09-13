// Testimonials functionality for The English Studio website

// Testimonials data with enhanced styling
const testimonialsData = [
    {
        imageUrl: "https://scontent-phx1-1.xx.fbcdn.net/v/t39.30808-6/540457849_1360283052772328_1227578994591147431_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_ohc=XVT_OcXo3MEQ7kNvwGvZSqv&_nc_oc=Adn2vWCLac57k2sW1r1BlEQHI7-cxNYhLbhxLbaXsiX2APqupuQr9roL7KNgxtIWhtw&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=hXz7U_IkEm52MBE8PRl0GA&oh=00_AfaG7aMKvCz6JOg8JyBl4eAwEWBtqHxt4G_oC242mHwHzQ&oe=68CAB946",
        gradientStart: "yellow",
        gradientEnd: "amber",
        borderColor: "#D4A933",
        achievement: "IELTS 7.0",
        nameEn: "Tran Thi Thao Nguyen",
        nameVi: "Trần Thị Thảo Nguyên",
        titleEn: "IELTS 7.0",
        titleVi: "IELTS 7.0",
        textEn: "At 'Té' I didn't study IELTS, I studied mindset, I studied open-minded thinking through debates and being forced to speak. My English learning became easier and much less stressful.",
        textVi: "Ở 'Té' em không học IELTS mà học mindset, học lối tư duy cởi mở thông qua các buổi debate và 'bị bắt' nói. Việc học tiếng Anh của em dễ dàng và đỡ áp lực hơn hẳn."
    },
    {
        imageUrl: "https://scontent-phx1-1.xx.fbcdn.net/v/t39.30808-6/513083401_1306394501494517_3521676361182297419_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=64Kg4LvR7ukQ7kNvwEehXG5&_nc_oc=AdmFpA1MTIpDkDiX3srk97WgLCwTClhu3Zdk8LKt7zgPdTbOnT2KWgNfFVROQ9_-36Q&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=yj_0HBCTld5LJ9I20sbe3A&oh=00_AfZFoPDQ8KVlSYgFFRM1L31T7sMo6lp2zfCLfBHFzXvqPw&oe=68CAB2BD",
        gradientStart: "blue",
        gradientEnd: "indigo",
        borderColor: "#3B82F6",
        achievement: "Student of TES",
        nameEn: "Nguyễn Thiện Anh Thi",
        nameVi: "Nguyễn Thiện Anh Thi",
        titleEn: "Student of TES",
        titleVi: "Học viên của TES",
        textEn: "At Té I not only got to study IELTS, but I was also taught how to use language in a way that's beautiful, natural; it was also an attitude towards learning and improving thinking.",
        textVi: "Ở Té mình không chỉ được học IELTS, mà còn được chỉ cách sử dụng ngôn ngữ sao cho được hay, được tự nhiên; còn là thái độ học và cải thiện lối tư duy."
    },
    {
        imageUrl: "https://scontent-phx1-1.xx.fbcdn.net/v/t39.30808-6/498133707_1267147422085892_135235030213438527_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_ohc=2Ba0oxV-GtIQ7kNvwHwRutK&_nc_oc=AdlUE-6qaGqazhs0RnZ2xjgyO-0OOxtCWhMU5JKAH9HQp87B5WyQs6-dlQnDgpvxgi8&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=mj9j7sgwMmye2YNxQaFEVA&oh=00_Afbr3YuJgWLHZ3YlVu0XCtYgzunaVTxzZ8LTiN0JImK1yA&oe=68CADDCD",
        gradientStart: "emerald",
        gradientEnd: "teal",
        borderColor: "#10B981",
        achievement: "Student of TES",
        nameEn: "Hong Hanh",
        nameVi: "Hồng Hạnh",
        titleEn: "Student of TES",
        titleVi: "Học viên của TES",
        textEn: "The center gave me a comfortable feeling when learning. Learning in a truly English way of thinking. TES is my second home! 🫶🏻🥰",
        textVi: "Trung tâm mang lại cho mình cảm giác thoải mái khi học. Học theo cách đúng nghĩa tiếng Anh tư duy. TES is my second home! 🫶🏻🥰"
    }
];

// Function to generate star rating HTML
function generateStarsHtml() {
    return Array(5).fill(0).map(() => `
        <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
        </svg>
    `).join('');
}

// Function to create a testimonial card
function createTestimonialCard(testimonial) {
    return fetch('components/index/testimonial-card.html')
        .then(response => response.text())
        .then(template => {
            const starsHtml = generateStarsHtml();
            
            return template
                .replace(/{{gradientStart}}/g, testimonial.gradientStart)
                .replace(/{{gradientEnd}}/g, testimonial.gradientEnd)
                .replace(/{{borderColor}}/g, testimonial.borderColor)
                .replace(/{{imageUrl}}/g, testimonial.imageUrl)
                .replace(/{{name}}/g, testimonial.nameEn)
                .replace(/{{achievement}}/g, testimonial.achievement)
                .replace(/{{starsHtml}}/g, starsHtml)
                .replace(/{{textEn}}/g, testimonial.textEn)
                .replace(/{{textVi}}/g, testimonial.textVi)
                .replace(/{{nameEn}}/g, testimonial.nameEn)
                .replace(/{{nameVi}}/g, testimonial.nameVi)
                .replace(/{{titleEn}}/g, testimonial.titleEn)
                .replace(/{{titleVi}}/g, testimonial.titleVi);
        });
}

// Testimonials translations for title and quote
const testimonialsTranslations = {
    en: {
        title: "OUR DIFFERENTIATION",
        quote: "Learning is a journey, not a destination",
        facebookReviews: {
            title: "More Reviews",
            text: "See what our students say about us on Facebook",
            button: "View on Facebook"
        }
    },
    vi: {
        title: "SỰ KHÁC BIỆT CỦA CHÚNG TÔI",
        quote: "Học tập là một cuộc hành trình, không phải đích đến",
        facebookReviews: {
            title: "Thêm Đánh Giá",
            text: "Xem học viên nói gì về chúng tôi trên Facebook",
            button: "Xem trên Facebook"
        }
    }
};

// Current testimonials language state (defaults to English)
let testimonialsLanguage = 'en';

// Function to update testimonials language
function updateTestimonialsLanguage(language) {
    testimonialsLanguage = language;
    
    // Update testimonials section title and quote
    const testimonialsTitle = document.querySelector('.testimonials-title');
    const testimonialsQuote = document.querySelector('.testimonials-quote');

    if (testimonialsTitle) {
        testimonialsTitle.textContent = testimonialsTranslations[language].title;
    }
    if (testimonialsQuote) {
        testimonialsQuote.textContent = `"${testimonialsTranslations[language].quote}"`;
    }

    // Update Facebook reviews card
    const facebookReviewsTitle = document.querySelector('.facebook-reviews-title');
    const facebookReviewsText = document.querySelector('.facebook-reviews-text');
    const facebookReviewsButton = document.querySelector('.facebook-reviews-button');

    if (facebookReviewsTitle) {
        facebookReviewsTitle.textContent = testimonialsTranslations[language].facebookReviews.title;
    }
    if (facebookReviewsText) {
        facebookReviewsText.textContent = testimonialsTranslations[language].facebookReviews.text;
    }
    if (facebookReviewsButton) {
        facebookReviewsButton.textContent = testimonialsTranslations[language].facebookReviews.button;
    }

    // Update testimonial card content
    const testimonialTexts = document.querySelectorAll('.testimonial-text');
    const testimonialNames = document.querySelectorAll('.testimonial-name');
    const testimonialTitles = document.querySelectorAll('.testimonial-title');

    testimonialTexts.forEach((element, index) => {
        const data = testimonialsData[index];
        if (data) {
            element.textContent = language === 'en' ? data.textEn : data.textVi;
        }
    });

    testimonialNames.forEach((element, index) => {
        const data = testimonialsData[index];
        if (data) {
            element.textContent = language === 'en' ? data.nameEn : data.nameVi;
        }
    });

    testimonialTitles.forEach((element, index) => {
        const data = testimonialsData[index];
        if (data) {
            element.textContent = language === 'en' ? data.titleEn : data.titleVi;
        }
    });

    console.log(`Testimonials language updated to: ${language}`);
}

// Function to load testimonials component
function loadTestimonials() {
    const testimonialsContainer = document.getElementById('testimonials-container');
    if (!testimonialsContainer) {
        console.log('Testimonials container not found');
        return;
    }

    console.log('Loading testimonials component...');
    fetch('components/index/testimonials.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            testimonialsContainer.innerHTML = html;
            console.log('Testimonials component loaded successfully');
            
            // Load testimonial cards
            loadTestimonialCards();
        })
        .catch(error => {
            console.error('Error loading testimonials component:', error);
            console.log('Testimonials component failed to load');
        });
}

// Function to load testimonial cards
function loadTestimonialCards() {
    const testimonialsGrid = document.getElementById('testimonials-grid');
    if (!testimonialsGrid) {
        console.log('Testimonials grid not found');
        return;
    }

    // Create all testimonial cards
    Promise.all(testimonialsData.map(testimonial => createTestimonialCard(testimonial)))
        .then(cards => {
            // Insert testimonial cards at the beginning of the grid
            // This preserves the Facebook reviews card that's already in the HTML
            const testimonialsHTML = cards.join('');
            const existingContent = testimonialsGrid.innerHTML;
            testimonialsGrid.innerHTML = testimonialsHTML + existingContent;
            
            // Check if there's a global language state
            if (window.currentLanguage) {
                testimonialsLanguage = window.currentLanguage;
            }
            
            // Update testimonials with current language
            updateTestimonialsLanguage(testimonialsLanguage);
            
            // Dispatch custom event to notify that testimonials are loaded
            document.dispatchEvent(new CustomEvent('testimonialsLoaded'));
        })
        .catch(error => {
            console.error('Error loading testimonial cards:', error);
        });
}

// Initialize testimonials when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadTestimonials();
});

// Listen for global language changes
document.addEventListener('languageChanged', function(event) {
    const newLanguage = event.detail.language;
    updateTestimonialsLanguage(newLanguage);
});

// Listen for navigation loaded to sync language state
document.addEventListener('navigationLoaded', function() {
    if (window.currentLanguage) {
        updateTestimonialsLanguage(window.currentLanguage);
    }
});