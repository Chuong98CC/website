// Staff module - handles staff data and rendering

// Factory function for creating staff data with consistent structure
function createStaff(name, title, titleVi, description, descriptionVi, imageUrl, role, roleVi, gradientStart, gradientEnd, tags, starsCount = 5) {
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

// Staff data structure
const staffData = [
    createStaff(
        "Chi Trang",
        "Administrative Manager",
        "Quản Lý Hành Chính",
        "Manages all administrative operations, student enrollment, scheduling, and ensures smooth daily operations. Always ready to assist students with any queries or concerns.",
        "Quản lý tất cả các hoạt động hành chính, đăng ký học viên, lập lịch và đảm bảo hoạt động hàng ngày diễn ra suôn sẻ. Luôn sẵn sàng hỗ trợ học viên với mọi thắc mắc và quan ngại.",
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "Admin Manager",
        "Quản Lý Hành Chính",
        "emerald",
        "teal",
        [
            { text: "Administration", textVi: "Hành Chính", color: "blue" },
            { text: "Student Support", textVi: "Hỗ Trợ Học Viên", color: "green" },
            { text: "Operations", textVi: "Vận Hành", color: "purple" }
        ]
    ),
    createStaff(
        "Jaden Vo",
        "IELTS Buddy & IT Support",
        "IELTS Buddy & Hỗ Trợ IT",
        "Provides technical support for online learning platforms and assists students with digital tools. Also serves as IELTS Buddy for additional practice sessions and study guidance.",
        "Cung cấp hỗ trợ kỹ thuật cho các nền tảng học trực tuyến và hỗ trợ học viên với các công cụ kỹ thuật số. Cũng đóng vai trò như IELTS Buddy cho các buổi luyện tập bổ sung và hướng dẫn học tập.",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "IELTS Buddy",
        "IELTS Buddy",
        "cyan",
        "blue",
        [
            { text: "IT Support", textVi: "Hỗ Trợ IT", color: "blue" },
            { text: "IELTS Buddy", textVi: "IELTS Buddy", color: "green" },
            { text: "Digital Tools", textVi: "Công Cụ Số", color: "purple" }
        ]
    ),
    createStaff(
        "Minh Anh",
        "Student Advisor",
        "Cố Vấn Học Viên",
        "Provides academic counseling and helps students choose the right courses for their goals. Excellent communication skills and deep understanding of student needs and learning paths.",
        "Cung cấp tư vấn học tập và giúp học viên chọn các khóa học phù hợp với mục tiêu của họ. Kỹ năng giao tiếp xuất sắc và hiểu biết sâu sắc về nhu cầu học viên và lộ trình học tập.",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "Student Advisor",
        "Cố Vấn Học Viên",
        "rose",
        "pink",
        [
            { text: "Counseling", textVi: "Tư Vấn", color: "blue" },
            { text: "Course Planning", textVi: "Lập Kế Hoạch Khóa Học", color: "green" },
            { text: "Student Care", textVi: "Chăm Sóc Học Viên", color: "purple" }
        ]
    )
];

// Global function to render staff cards
function renderStaffCards(currentLanguage = 'en') {
    if (!window.cardRenderer.templates['teacher-card']) {
        window.cardRenderer.loadTemplate('teacher-card', 'components/teachers/teacher-card.html')
            .then(() => {
                window.cardRenderer.renderCards('.staff-grid', 'teacher-card', staffData, currentLanguage);
            });
    } else {
        window.cardRenderer.renderCards('.staff-grid', 'teacher-card', staffData, currentLanguage);
    }
}

// Global function to update staff cards language
function updateStaffLanguage(currentLanguage) {
    window.cardRenderer.updateCardsLanguage('.staff-grid', currentLanguage);
}

// Export for global use
window.createStaff = createStaff;
window.staffData = staffData;
window.renderStaffCards = renderStaffCards;
window.updateStaffLanguage = updateStaffLanguage;