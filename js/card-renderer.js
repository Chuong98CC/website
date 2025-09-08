// Card renderer utility for dynamic card generation

// Factory function for creating course data with consistent structure
function createCourse(id, name, subtitle, emoji, gradientStart, gradientEnd, targetColor, targetText, objectiveText, readingText, speakingText, writingText, targetScoreText) {
    return {
        id,
        name,
        subtitle,
        emoji,
        gradientStart,
        gradientEnd,
        targetTitle: "Dành cho:",
        targetText,
        targetColor,
        objectiveTitle: objectiveText.includes("Mục tiêu") ? "Mục tiêu:" : "Yêu cầu:",
        objectiveText,
        objectiveColor: targetColor,
        readingTitle: "📚 Reading & Listening",
        readingText,
        readingColor: targetColor,
        speakingTitle: "🗣️ Speaking",
        speakingText,
        speakingColor: targetColor,
        writingTitle: "✍️ Writing",
        writingText,
        writingColor: targetColor,
        targetScoreTitle: "🎯 Target",
        targetScoreText,
        targetScoreColor: targetColor
    };
}

// Factory functions for creating teacher and staff data
function createTeacher(name, title, description, imageUrl, role, gradientStart, gradientEnd, tags, starsCount = 5) {
    return {
        name,
        title,
        description,
        imageUrl,
        role,
        gradientStart,
        gradientEnd,
        stars: Array(starsCount).fill(1),
        tags
    };
}

function createStaff(name, title, description, imageUrl, role, gradientStart, gradientEnd, tags, starsCount = 5) {
    return {
        name,
        title,
        description,
        imageUrl,
        role,
        gradientStart,
        gradientEnd,
        stars: Array(starsCount).fill(1),
        tags
    };
}

// Utility functions
const Utils = {
    generateStars: (count) => Array(count).fill(1),
    createTag: (text, color = "blue") => typeof text === 'string' ? { text, color } : text
};

class CardRenderer {
    constructor() {
        this.templates = {};
    }

    // Load template from HTML file
    async loadTemplate(templateName, templatePath) {
        try {
            const response = await fetch(templatePath);
            const html = await response.text();
            this.templates[templateName] = html;
            return html;
        } catch (error) {
            console.error(`Error loading template ${templateName}:`, error);
            return null;
        }
    }

    // Render template with data
    render(templateName, data) {
        const template = this.templates[templateName];
        if (!template) {
            console.error(`Template ${templateName} not found`);
            return '';
        }

        let rendered = template;
        
        // Replace simple variables
        Object.keys(data).forEach(key => {
            if (typeof data[key] === 'string' || typeof data[key] === 'number') {
                const regex = new RegExp(`{{${key}}}`, 'g');
                rendered = rendered.replace(regex, data[key]);
            }
        });

        // Handle array data (like stars and tags)
        if (data.stars && Array.isArray(data.stars)) {
            const starsHtml = data.stars.map(() => '<span class="w-3 h-3 bg-yellow-400 rounded-full"></span>').join('');
            rendered = rendered.replace('{{#each stars}}.*?{{/each}}', starsHtml);
        }

        if (data.tags && Array.isArray(data.tags)) {
            const tagsHtml = data.tags.map(tag => {
                if (typeof tag === 'string') {
                    return `<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">${tag}</span>`;
                } else if (typeof tag === 'object') {
                    return `<span class="bg-${tag.color}-100 text-${tag.color}-800 px-3 py-1 rounded-full text-xs font-semibold">${tag.text}</span>`;
                }
            }).join('');
            rendered = rendered.replace('{{#each tags}}.*?{{/each}}', tagsHtml);
        }

        return rendered;
    }

    // Render multiple cards
    renderCards(containerSelector, templateName, cardsData) {
        const container = document.querySelector(containerSelector);
        if (!container) {
            console.error(`Container ${containerSelector} not found`);
            return;
        }

        const cardsHtml = cardsData.map(cardData => this.render(templateName, cardData)).join('');
        container.innerHTML = cardsHtml;
    }

    // Simple string replacement for static templates
    static renderSimple(template, data) {
        let rendered = template;
        Object.keys(data).forEach(key => {
            const regex = new RegExp(`{{${key}}}`, 'g');
            rendered = rendered.replace(regex, data[key]);
        });
        return rendered;
    }
}

// Teacher data structure
const teacherData = [
    createTeacher(
        "Tram Vu",
        "Head IELTS Coach",
        "Founder of TES with 8+ years of IELTS teaching experience. IELTS 8.5 overall score. Specialized in Writing and Speaking modules with innovative teaching methods.",
        "https://images.unsplash.com/photo-1494790108755-2616c668e23d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "IELTS Coach",
        "blue",
        "purple",
        [
            { text: "IELTS 8.5", color: "blue" },
            { text: "8+ Years", color: "green" },
            { text: "Writing Expert", color: "purple" }
        ]
    ),
    createTeacher(
        "Andrew Wernette",
        "Native Speaker Coach",
        "Native English speaker from USA with TESOL certification. Specialized in Speaking and Listening modules. Creates engaging and fun learning environment for students.",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "IELTS Coach",
        "green",
        "blue",
        [
            { text: "Native Speaker", color: "blue" },
            { text: "TESOL", color: "green" },
            { text: "Speaking Expert", color: "purple" }
        ]
    ),
    createTeacher(
        "Max Tran",
        "Senior IELTS Coach",
        "IELTS 8.0 scorer with 6 years of teaching experience. Expert in Reading and Listening modules. Known for analytical approach and systematic teaching methodology.",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "IELTS Coach",
        "indigo",
        "purple",
        [
            { text: "IELTS 8.0", color: "blue" },
            { text: "6+ Years", color: "green" },
            { text: "Reading Expert", color: "purple" }
        ]
    ),
    createTeacher(
        "Alex Nguyen",
        "IELTS Coach",
        "Young and energetic coach with IELTS 7.5 score. Specializes in motivating students and creating dynamic learning environments. Expert in all four skills with focus on practical application.",
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "IELTS Coach",
        "yellow",
        "orange",
        [
            { text: "IELTS 7.5", color: "blue" },
            { text: "4+ Years", color: "green" },
            { text: "All Skills", color: "purple" }
        ]
    ),
    createTeacher(
        "Katheryn Uyen Bui",
        "IELTS Buddy",
        "Support coach who provides additional practice sessions and one-on-one guidance. IELTS 7.0 scorer with excellent student rapport and mentoring skills.",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "IELTS Buddy",
        "pink",
        "red",
        [
            { text: "IELTS 7.0", color: "blue" },
            { text: "Mentoring", color: "green" },
            { text: "Support", color: "purple" }
        ]
    ),
    createTeacher(
        "Sarah Thompson",
        "Advanced IELTS Coach",
        "British native speaker with Cambridge CELTA certification. Specializes in advanced level students aiming for bands 7.0+. Expert in academic writing and complex grammar structures.",
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "IELTS Coach",
        "indigo",
        "purple",
        [
            { text: "Native Speaker", color: "blue" },
            { text: "CELTA", color: "green" },
            { text: "Advanced Level", color: "purple" }
        ]
    )
];

// Staff data structure
const staffData = [
    createStaff(
        "Chi Trang",
        "Administrative Manager",
        "Manages all administrative operations, student enrollment, scheduling, and ensures smooth daily operations. Always ready to assist students with any queries or concerns.",
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "Admin Manager",
        "emerald",
        "teal",
        [
            { text: "Administration", color: "blue" },
            { text: "Student Support", color: "green" },
            { text: "Operations", color: "purple" }
        ]
    ),
    createStaff(
        "Jaden Vo",
        "IELTS Buddy & IT Support",
        "Provides technical support for online learning platforms and assists students with digital tools. Also serves as IELTS Buddy for additional practice sessions and study guidance.",
        "https://images.unsplash.com/photo-1500648767791-00dcc极t-a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "IELTS Buddy",
        "cyan",
        "blue",
        [
            { text: "IT Support", color: "blue" },
            { text: "IELTS Buddy", color: "green" },
            { text: "Digital Tools", color: "purple" }
        ]
    ),
    createStaff(
        "Minh Anh",
        "Student Advisor",
        "Provides academic counseling and helps students choose the right courses for their goals. Excellent communication skills and deep understanding of student needs and learning paths.",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "Student Advisor",
        "rose",
        "pink",
        [
            { text: "Counseling", color: "blue" },
            { text: "Course Planning", color: "green" },
            { text: "Student Care", color: "purple" }
        ]
    )
];

// Course data structure
const courseData = [
    {
        id: "candy",
        name: "Level Candy",
        subtitle: "Beginner Level - IELTS Foundation",
        emoji: "🍭",
        gradientStart: "green",
        gradientEnd: "blue",
        targetTitle: "Dành cho:",
        targetText: "Không dành cho vỡ lòng, mất gốc, mất căn bản. Dành cho những bạn chưa làm quen với IELTS, chưa tiếp xúc nhiều với tiếng Anh.",
        targetColor: "pink",
        objectiveTitle: "Mục tiêu:",
        objectiveText: "Định hướng, giới thiệu về IELTS. Tập trung ôn lại một số chủ điểm ngữ pháp chính, bổ sung từ vựng cơ bản theo chủ đề, từ vựng về IELTS.",
        objectiveColor: "pink",
        readingTitle: "📚 Reading & Listening",
        readingText: "Làm quen các bài đơn giản, đoạn văn ngắn, tập phân tích, hiểu yêu cầu đề bài",
        readingColor: "pink",
        speakingTitle: "🗣️ Speaking",
        speakingText: "Làm quen với câu hỏi đơn giản, tập trung vào phát triển ý, phát âm và phản xạ",
        speakingColor: "pink",
        writingTitle: "✍️ Writing",
        writingText: "Tập viết câu hoàn chỉnh, tập triển khai ý. Phân biệt được văn nói và văn viết trong IELTS",
        writingColor: "pink",
        targetScoreTitle: "🎯 Target",
        targetScoreText: "Band 2.5 - Nền tảng vững chắc cho các level tiếp theo",
        targetScoreColor: "pink"
    },
    {
        id: "cookies",
        name: "Level Cookies",
        subtitle: "Elementary Level - IELTS Introduction",
        emoji: "🍪",
        gradientStart: "blue",
        gradientEnd: "indigo",
        targetTitle: "Dành cho:",
        targetText: "Những bạn đã từng học IELTS dưới 3 tháng (điểm test đầu vào từ 3.0+) hoặc học viên đã qua level Candy.",
        targetColor: "orange",
        objectiveTitle: "Mục tiêu:",
        objectiveText: "Các bạn bắt đầu tiếp xúc format IELTS, làm quen các dạng bài ở các kỹ năng.",
        objectiveColor: "orange",
        readingTitle: "📚 Reading & Listening",
        readingText: "Làm các dạng bài ngắn, tập trung vào phân tích bài và nâng cấp từ vựng",
        readingColor: "orange",
        speakingTitle: "🗣️ Speaking",
        speakingText: "Luyện nói chủ đề đời sống quen thuộc, tập trung vào phát triển ý theo format IELTS",
        speakingColor: "orange",
        writingTitle: "✍️ Writing",
        writingText: "Làm quen với lý thuyết Viết: biểu đồ Task 1 và các dạng bài Task 2",
        writingColor: "orange",
        targetScoreTitle: "🎯 Target",
        targetScoreText: "Band 3.5 - Hiểu rõ format và cách làm bài IELTS",
        targetScoreColor: "orange"
    },
    {
        id: "donuts",
        name: "Level Donuts",
        subtitle: "Intermediate Level - IELTS Progress",
        emoji: "🍩",
        gradientStart: "indigo",
        gradientEnd: "purple",
        targetTitle: "Dành cho:",
        targetText: "Những bạn đã từng học IELTS (điểm test đầu vào từ 4.0+) hoặc học viên đã qua level Cookies.",
        targetColor: "indigo",
        objectiveTitle: "Yêu cầu:",
        objectiveText: "Các bạn đã có kiến thức cơ bản IELTS và các dạng bài (level này vẫn ôn lại lý thuyết Viết).",
        objectiveColor: "indigo",
        readingTitle: "📚 Reading & Listening",
        readingText: "Bắt đầu làm các bài dài và thử thách hơn, đẩy mạnh kỹ năng phân tích bài",
        readingColor: "indigo",
        speakingTitle: "🗣️ Speaking",
        speakingText: "Luyện nói chủ đề quen thuộc, tăng cường phát âm và phản xạ, nâng cao từ vựng B1&B2",
        speakingColor: "indigo",
        writingTitle: "✍️ Writing",
        writingText: "Luyện viết các dạng biểu đồ Task 1 và Task 2, đẩy mạnh kỹ năng phân tích và lập dàn ý",
        writingColor: "indigo",
        targetScoreTitle: "🎯 Target",
        targetScoreText: "Band 4.5 - Thành thạo các kỹ năng IELTS cơ bản",
        targetScoreColor: "indigo"
    },
    {
        id: "bagels",
        name: "Level Bagels",
        subtitle: "Upper Intermediate - IELTS Mastery",
        emoji: "🥯",
        gradientStart: "purple",
        gradientEnd: "pink",
        targetTitle: "Dành cho:",
        targetText: "Những bạn đã từng học IELTS (điểm test đầu vào từ 4.5+) hoặc học viên đã qua level Donuts.",
        targetColor: "teal",
        objectiveTitle: "Yêu cầu:",
        objectiveText: "Các bạn đã có nền tảng về IELTS và muốn nâng cao kỹ năng để đạt điểm cao hơn.",
        objectiveColor: "teal",
        readingTitle: "📚 Reading & Listening",
        readingText: "Làm quen với các bài đọc và nghe dài, độ khó tăng dần, đẩy mạnh từ vựng học thuật",
        readingColor: "teal",
        speakingTitle: "🗣️ Speaking",
        speakingText: "Luyện tập với các chủ đề phong phú, phát triển ý logic, nâng cao phát âm",
        speakingColor: "teal",
        writingTitle: "✍️ Writing",
        writingText: "Luyện viết theo format chuẩn, đẩy mạnh kỹ năng lập luận, sử dụng từ vựng nâng cao",
        writingColor: "teal",
        targetScoreTitle: "🎯 Target",
        target极ext: "Band 5.0+ - Nâng cao và tinh chỉnh các kỹ năng IELTS",
        targetScoreColor: "teal"
    },
    {
        id: "burgers",
        name: "Level Burgers",
        subtitle: "Advanced Level - IELTS Excellence",
        emoji: "🍔",
        gradientStart: "pink",
        gradientEnd: "red",
        targetTitle: "Dành cho:",
        targetText: "Những bạn đã từng học IELTS (điểm test đầu vào 5.0+) hoặc học viên đã qua level Donuts.",
        targetColor: "red",
        objectiveTitle: "Yêu cầu:",
        objectiveText: "Các bạn đã nắm chắc kiến thức IELTS và kỹ năng làm bài cơ bản ở các kỹ năng.",
        objectiveColor: "red",
        readingTitle: "📚 Reading & Listening",
        readingText: "Luyện đề thi thật, đẩy mạnh kỹ năng phân tích bài và nâng từ vựng, áp lực thời gian",
        readingColor: "red",
        speakingTitle: "🗣️ Speaking",
        speakingText: "Luyện nói chủ đề mới, phong phú hơn, đẩy mạnh phát âm, phản xạ và phát triển ý",
        speakingColor: "red",
        writingTitle: "✍️ Writing",
        writingText: "Viết thành thạo các dạng bài, đẩy mạnh kỹ năng phân tích, áp dụng cấu trúc phức tạp",
        writingColor: "red",
        targetScoreTitle: "🎯 Target",
        targetScoreText: "Band 5.5+ - Đạt điểm cao và chuẩn bị cho các level nâng cao",
        targetScoreColor: "red"
    },
    {
        id: "pizzas",
        name: "Level Pizzas",
        subtitle: "Expert Level - IELTS Perfection",
        emoji: "🍕",
        gradientStart: "red",
        gradientEnd: "orange",
        targetTitle: "Dành cho:",
        targetText: "Những bạn đã có nền tảng vững chắc về IELTS (điểm test đầu vào từ 6.0+) hoặc học viên đã qua level Burgers.",
        targetColor: "cyan",
        objectiveTitle: "Yêu cầu:",
        objectiveText: "Các bạn đã quen với format bài thi và muốn tối ưu hóa chiến lược làm bài để đạt band cao hơn.",
        objectiveColor: "cyan",
        readingTitle: "📚 Reading & Listening",
        readingText: "Luyện đề nâng cao, làm quen với nội dung học thuật chuyên sâu, phát triển kỹ năng scan, skim",
        readingColor: "cyan",
        speakingTitle: "🗣️ Speaking",
        speakingText: "Luyện tập với các chủ đề học thuật và trừu tượng, đẩy mạnh khả năng phát triển ý",
        speakingColor: "cyan",
        writingTitle: "✍️ Writing",
        writingText: "Luyện viết các dạng bài nâng cao, tối ưu hóa bố cục bài viết, sử dụng từ vựng học thuật",
        writingColor: "cyan",
        targetScoreTitle: "🎯 Target",
        targetScoreText: "Band 6.5+ - Đạt điểm cao trong kỳ thi IELTS",
        targetScoreColor: "cyan"
    },
    {
        id: "intensive",
        name: "Level Intensive",
        subtitle: "Elite Level - IELTS Conqueror",
        emoji: "🚀",
        gradientStart: "orange",
        gradientEnd: "orange",
        targetTitle: "Dành cho:",
        targetText: "Những bạn đã đăng ký thi IELTS trong quý và đã qua bài Mock Test từ 4.5+ trở lên (tuỳ theo đầu ra để chọn những đầu vào phù hợp).",
        targetColor: "yellow",
        objectiveTitle: "",
        objectiveText: "",
        objectiveColor: "yellow",
        readingTitle: "👨‍🏫 Expert Coaching",
        readingText: "Học viên được luyện tập với đề thi thật IELTS cùng giáo viên kinh nghiệm nhiều năm",
        readingColor: "yellow",
        speakingTitle: "📊 Mock Tests",
        speakingText: "Tổ chức thi thử, đưa ra đánh giá chi tiết điểm số cho 4 tiêu chí của IELTS",
        speakingColor: "yellow",
        writingTitle: "💻 E-learning",
        writingText: "Học viên được sử dụng hệ thống E-learning của STUDIO để trả bài tập về nhà",
        writingColor: "yellow",
        targetScoreTitle: "🎯 Exam Ready",
        targetScoreText: "Chuẩn bị tâm lý trước khi thi, luyện tập theo thể thức thi thực tế",
        targetScoreColor: "yellow"
    }
];

// Initialize card rendering
document.addEventListener('DOMContentLoaded', function() {
    const renderer = new CardRenderer();
    
    // Load teacher template and render
    renderer.loadTemplate('teacher-card', 'components/teacher-card.html')
        .then(() => {
            renderer.renderCards('.teachers-grid', 'teacher-card', teacherData);
        });
    
    // Load staff template and render
    renderer.loadTemplate('teacher-card', 'components/teacher-card.html')
        .then(() => {
            renderer.renderCards('.staff-grid', 'teacher-card', staffData);
        });
    
    // Load course template and render
    renderer.loadTemplate('course-card', 'components/course-card.html')
        .then(() => {
            renderer.renderCards('.courses-grid', 'course-card', courseData);
        });
});

// Export for global use
window.CardRenderer = CardRenderer;
window.teacherData = teacherData;
window.staffData = staffData;
window.courseData = courseData;
