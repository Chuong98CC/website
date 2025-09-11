// Teachers module - handles teacher data and rendering

// Factory function for creating teacher data with consistent structure
function createTeacher(name, title, titleVi, description, descriptionVi, imageUrl, role, roleVi, gradientStart, gradientEnd, tags, starsCount = 5) {
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

// Teacher data structure
const teacherData = [
    createTeacher(
        "Tram Vu",
        "Head IELTS Coach",
        "Giảng Viên IELTS Chính",
        "Founder of TES with 10+ years of IELTS teaching experience. IELTS 8.5 overall score. Specialized in Writing and Speaking modules with innovative teaching methods.",
        "Người sáng lập TES với hơn 8 năm kinh nghiệm giảng dạy IELTS. Điểm IELTS tổng thể 8.5. Chuyên về các phần thi Viết và Nói với phương pháp giảng dạy đổi mới.",
        "https://images.unsplash.com/photo-1494790108755-2616c668e23d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "IELTS Coach",
        "Giảng Viên IELTS",
        "blue",
        "purple",
        [
            { text: "IELTS 8.5", textVi: "IELTS 8.5", color: "blue" },
            { text: "10+ Years", textVi: "10+ Năm", color: "green" },
            { text: "Writing Expert", textVi: "Chuyên Gia Viết", color: "purple" }
        ]
    ),
    createTeacher(
        "Andrew Wernette",
        "Native Speaker Coach",
        "Giảng Viên Người Bản Ngữ",
        "Native English speaker from USA with TESOL certification. Specialized in Speaking and Listening modules. Creates engaging and fun learning environment for students.",
        "Người bản ngữ tiếng Anh từ Mỹ với chứng chỉ TESOL. Chuyên về các phần thi Nói và Nghe. Tạo môi trường học tập hấp dẫn và vui vẻ cho học viên.",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "IELTS Coach",
        "Giảng Viên IELTS",
        "green",
        "blue",
        [
            { text: "Native Speaker", textVi: "Người Bản Ngữ", color: "blue" },
            { text: "TESOL", textVi: "TESOL", color: "green" },
            { text: "Speaking Expert", textVi: "Chuyên Gia Nói", color: "purple" }
        ]
    ),
    createTeacher(
        "Max Tran",
        "Senior IELTS Coach",
        "Giảng Viên IELTS Cao Cấp",
        "Senior coach with 6+ years experience. Specialized in Band 7.0+ score improvement strategies. Expert in all four IELTS modules with proven track record.",
        "Giảng viên cao cấp với hơn 6 năm kinh nghiệm. Chuyên về các chiến lược cải thiện điểm số Band 7.0+. Chuyên gia trong cả bốn kỹ năng IELTS với thành tích đã được chứng minh.",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "IELTS Coach",
        "Giảng Viên IELTS",
        "purple",
        "pink",
        [
            { text: "Band 7.0+ Expert", textVi: "Chuyên Gia Band 7.0+", color: "purple" },
            { text: "6+ Years", textVi: "6+ Năm", color: "green" },
            { text: "All Skills", textVi: "Tất Cả Kỹ Năng", color: "blue" }
        ]
    ),
    createTeacher(
        "Amy Bui",
        "IELTS Writing Specialist",
        "Chuyên Gia IELTS Writing",
        "IELTS Writing specialist with focus on Task 1 & Task 2 improvement. Helps students achieve Band 7+ in Writing module through systematic approach and personalized feedback.",
        "Chuyên gia IELTS Writing tập trung vào cải thiện Task 1 & Task 2. Giúp học viên đạt Band 7+ trong phần thi Writing thông qua phương pháp có hệ thống và phản hồi cá nhân hóa.",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "IELTS Coach",
        "Giảng Viên IELTS",
        "rose",
        "orange",
        [
            { text: "Writing Expert", textVi: "Chuyên Gia Viết", color: "rose" },
            { text: "Band 7+ Focus", textVi: "Tập Trung Band 7+", color: "orange" },
            { text: "Task 1 & 2", textVi: "Task 1 & 2", color: "purple" }
        ]
    ),
    createTeacher(
        "David Chen",
        "Speaking & Pronunciation Coach",
        "Huấn Luyện Viên Nói & Phát Âm",
        "Speaking specialist focusing on pronunciation, fluency, and confidence building. Native-like accent training and interview simulation for optimal Speaking band scores.",
        "Chuyên gia Speaking tập trung vào phát âm, độ trôi chảy và xây dựng sự tự tin. Luyện giọng như người bản ngữ và mô phỏng phỏng vấn để đạt điểm Speaking tối ưu.",
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "IELTS Coach",
        "Giảng Viên IELTS",
        "emerald",
        "teal",
        [
            { text: "Speaking Expert", textVi: "Chuyên Gia Nói", color: "emerald" },
            { text: "Pronunciation", textVi: "Phát Âm", color: "teal" },
            { text: "Confidence Builder", textVi: "Xây Dựng Tự Tin", color: "blue" }
        ]
    ),
    createTeacher(
        "Jenny Nguyen",
        "Reading & Listening Coach",
        "Huấn Luyện Viên Đọc & Nghe",
        "Expert in Reading and Listening modules with advanced skimming and scanning techniques. Helps students master time management and achieve consistent high scores.",
        "Chuyên gia trong các phần thi Reading và Listening với kỹ thuật skimming và scanning nâng cao. Giúp học viên thành thạo quản lý thời gian và đạt điểm cao ổn định.",
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "IELTS Coach",
        "Giảng Viên IELTS",
        "cyan",
        "blue",
        [
            { text: "Reading Expert", textVi: "Chuyên Gia Đọc", color: "cyan" },
            { text: "Listening Expert", textVi: "Chuyên Gia Nghe", color: "blue" },
            { text: "Time Management", textVi: "Quản Lý Thời Gian", color: "green" }
        ]
    )
];

// Global function to render teacher cards
function renderTeacherCards(currentLanguage = 'en') {
    if (!window.cardRenderer.templates['teacher-card']) {
        window.cardRenderer.loadTemplate('teacher-card', 'components/teacher-card.html')
            .then(() => {
                window.cardRenderer.renderCards('.teachers-grid', 'teacher-card', teacherData, currentLanguage);
            });
    } else {
        window.cardRenderer.renderCards('.teachers-grid', 'teacher-card', teacherData, currentLanguage);
    }
}

// Global function to update teacher cards language
function updateTeachersLanguage(currentLanguage) {
    window.cardRenderer.updateCardsLanguage('.teachers-grid', currentLanguage);
}

// Export for global use
window.createTeacher = createTeacher;
window.teacherData = teacherData;
window.renderTeacherCards = renderTeacherCards;
window.updateTeachersLanguage = updateTeachersLanguage;