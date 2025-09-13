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
        "Co-founder. Manages all administrative operations, student enrollment, scheduling, and ensures smooth daily operations. Always ready to assist students with any queries or concerns.",
        "Quản lý tất cả các hoạt động hành chính, đăng ký học viên, lập lịch và đảm bảo hoạt động hàng ngày diễn ra suôn sẻ. Luôn sẵn sàng hỗ trợ học viên với mọi thắc mắc và quan ngại.",
        "https://scontent-phx1-1.xx.fbcdn.net/v/t39.30808-6/513867470_1303138491820118_4889116908656270509_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_ohc=xz-x-ApXJUIQ7kNvwHnHSs5&_nc_oc=Adn6IUhQ1X-NTKZa56jYAwYow-JGUrHNy4POyDxMrxdh8XPGVpphy1ZgTR52sVkvKc0&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=H4v5YyqYvcQUcx7JHe7kgw&oh=00_Afb6EGDWXGGpw6B3K36TTGJPLCs98RaIIprD_BZ5KfcbFQ&oe=68CA969D",
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
        "IELTS Buddy & Office Support",
        "IELTS Buddy & Hỗ Trợ Văn Phòng",
        "Office assistant. Specializing in tutoring English for beginners and grammar for intermediate learners. Also serves as IELTS Buddy for additional practice sessions and study guidance.",
        "Trợ lý văn phòng. Chuyên gia dạy tiếng Anh cho người mới bắt đầu và ngữ pháp cho người học trình độ trung cấp. Cũng đóng vai trò là IELTS Buddy để hỗ trợ thêm các buổi luyện tập và hướng dẫn học tập.",
        "https://scontent-phx1-1.xx.fbcdn.net/v/t39.30808-6/513087095_1303137951820172_282783202588533902_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=GACYbXRn9gMQ7kNvwHFw-e_&_nc_oc=AdkfrRyt9aTYxoEGBBabNufwvADUl0WuYWzoAvg3JyGMA3ENyj1qrJa8MMIumaCG9ZE&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=JeIdAXEP79MYHtPcXiC1XQ&oh=00_AfYdob5HdHhBFPxjgHPrwJk7gKh5SYwKWbfI2HCZIXNU-w&oe=68CA8186",
        "IELTS Buddy",
        "IELTS Buddy",
        "cyan",
        "blue",
        [
            { text: "IELTS Buddy", textVi: "IELTS Buddy", color: "green" },
            { text: "Office assistant", textVi: "Trợ Lý Văn Phòng", color: "purple" }
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