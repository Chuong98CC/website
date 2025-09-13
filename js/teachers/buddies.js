// Buddy module - handles Buddy data and rendering

// Factory function for creating Buddy data with consistent structure
function createBuddy(name, title, titleVi, description, descriptionVi, imageUrl, role, roleVi, gradientStart, gradientEnd, tags, starsCount = 5) {
    return {
        name,
        title,
        titleVi,
        description,
        descriptionVi,
        imageUrl,
        role,
        roleVi,
        gradientStart,
        gradientEnd,
        stars: Array(starsCount).fill(1),
        tags: tags.map(tag => ({
            text: tag.text,
            textVi: tag.textVi,
            color: tag.color
        }))
    };
}

// Buddy data structure
const buddyData = [
    createBuddy(
        "Liam Nguyen",
        "Former TES Student",
        "Cựu Học Viên TES",
        "Currently pursuing a degree at Diplomatic Academy of Vietnam. Provides peer support and study tips as an IELTS Buddy.",
        "Hiện đang theo học tại Học viện Ngoại giao Việt Nam. Hỗ trợ kĩ năng và mẹo học tập với vai trò là IELTS Buddy.",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "IELTS Tutor",
        "Gia Sư IELTS",
        "emerald",
        "teal",
        [
            { text: "IELTS 7.5", textVi: "IELTS 7.5", color: "blue" },
            { text: "Peer Support", textVi: "Hỗ Trợ Đồng Đẳng", color: "green" },
            { text: "Study Tips", textVi: "Mẹo Học Tập", color: "purple" }
        ]
    ),
    createBuddy(
        "Jordan Nguyen",
        "Former TES Student",
        "Cựu Học Viên TES",
        "Currently pursuing a degree at University of Foreign Languages. Provides peer support and personalized study guidance as an IELTS Buddy with focus on Speaking and Writing skills.",
        "Hiện đang theo học tại Đại học Ngoại ngữ. Hỗ trợ kĩ năng và mẹo học tập với vai trò là IELTS Buddy, tập trung vào kỹ năng Nói và Viết.",
        "https://images.unsplash.com/photo-1494790108755-2616c668e23d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "IELTS Tutor",
        "Gia Sư IELTS",
        "blue",
        "purple",
        [
            { text: "IELTS 6.5", textVi: "IELTS 6.5", color: "blue" },
            { text: "Speaking Focus", textVi: "Tập Trung Nói", color: "green" },
            { text: "Writing Support", textVi: "Hỗ Trợ Viết", color: "purple" }
        ]
    ),
    createBuddy(
        "Chris Luong",
        "IELTS Tutor",
        "Gia Sư IELTS",
        "Specializes in Speaking and Listening modules with excellent communication skills. Helps students build confidence and improve fluency through interactive practice sessions.",
        "Chuyên về các phần thi Nói và Nghe với kỹ năng giao tiếp xuất sắc. Giúp học viên xây dựng sự tự tin và cải thiện độ trôi chảy thông qua các buổi luyện tập tương tác.",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "IELTS Tutor",
        "Gia Sư IELTS",
        "cyan",
        "blue",
        [
            { text: "Speaking Expert", textVi: "Chuyên Gia Nói", color: "cyan" },
            { text: "Listening Focus", textVi: "Tập Trung Nghe", color: "blue" },
            { text: "Confidence Building", textVi: "Xây Dựng Tự Tin", color: "green" }
        ]
    )
];

// Global function to render Buddy cards
function renderBuddyCards(currentLanguage = 'en') {
    if (!window.cardRenderer.templates['teacher-card']) {
        window.cardRenderer.loadTemplate('teacher-card', 'components/teachers/teacher-card.html')
            .then(() => {
                window.cardRenderer.renderCards('.buddy-grid', 'teacher-card', buddyData, currentLanguage);
            });
    } else {
        window.cardRenderer.renderCards('.buddy-grid', 'teacher-card', buddyData, currentLanguage);
    }
}

// Global function to update Buddy cards language
function updateBuddyLanguage(currentLanguage) {
    window.cardRenderer.updateCardsLanguage('.buddy-grid', currentLanguage);
}

// Export for global use
window.createBuddy = createBuddy;
window.buddyData = buddyData;
window.renderBuddyCards = renderBuddyCards;
window.updateBuddyLanguage = updateBuddyLanguage;