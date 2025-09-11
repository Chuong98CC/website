// Testimonials functionality for The English Studio website

// Testimonials translations
const testimonialsTranslations = {
    en: {
        title: "OUR DIFFERENTIATION",
        quote: "Learning is a journey, not a destination",
        testimonials: [
            {
                text: "\"At 'Té' I didn't study IELTS, I studied mindset, I studied open-minded thinking through debates and being forced to speak. My English learning became easier and much less stressful.\"",
                name: "Tran Thi Thao Nguyen",
                title: "IELTS 7.0"
            },
            {
                text: "\"At Té I not only got to study IELTS, but I was also taught how to use language in a way that's beautiful, natural; it was also an attitude towards learning and improving thinking.\"",
                name: "Nguyễn Thiện Anh Thi",
                title: "Student of TES"
            },
            {
                text: "\"The center gave me a comfortable feeling when learning. Learning in a truly English way of thinking. TES is my second home! 🫶🏻🥰\"",
                name: "Hong Hanh",
                title: "Student of TES"
            }
        ]
    },
    vi: {
        title: "SỰ KHÁC BIỆT CỦA CHÚNG TÔI",
        quote: "Học tập là một cuộc hành trình, không phải đích đến",
        testimonials: [
            {
                text: "\"Ở 'Té' em không học IELTS mà học mindset, học lối tư duy cởi mở thông qua các buổi debate và 'bị bắt' nói. Việc học tiếng Anh của em dễ dàng và đỡ áp lực hơn hẳn.\"",
                name: "Trần Thị Thảo Nguyên",
                title: "IELTS 7.0"
            },
            {
                text: "\"Ở Té mình không chỉ được học IELTS, mà còn được chỉ cách sử dụng ngôn ngữ sao cho được hay, được tự nhiên; còn là thái độ học và cải thiện lối tư duy.\"",
                name: "Nguyễn Thiện Anh Thi",
                title: "Học viên của TES"
            },
            {
                text: "\"Trung tâm mang lại cho mình cảm giác thoải mái khi học. Học theo cách đúng nghĩa tiếng Anh tư duy. TES is my second home! 🫶🏻🥰\"",
                name: "Hồng Hạnh",
                title: "Học viên của TES"
            }
        ]
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

    // Update individual testimonials
    testimonialsTranslations[language].testimonials.forEach((testimonial, index) => {
        const textElement = document.querySelector(`.testimonial-text-${index + 1}`);
        const nameElement = document.querySelector(`.testimonial-name-${index + 1}`);
        const titleElement = document.querySelector(`.testimonial-title-${index + 1}`);

        if (textElement) {
            textElement.textContent = testimonial.text;
        }
        if (nameElement) {
            nameElement.textContent = testimonial.name;
        }
        if (titleElement) {
            titleElement.textContent = testimonial.title;
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
            console.error('Error loading testimonials component:', error);
            console.log('Testimonials component failed to load');
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