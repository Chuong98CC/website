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
        "Người sáng lập TES với hơn 10+ năm kinh nghiệm giảng dạy IELTS. Điểm IELTS tổng thể 8.5. Chuyên về các phần thi Viết và Nói với phương pháp giảng dạy đổi mới.",
        "https://scontent-phx1-1.xx.fbcdn.net/v/t39.30808-6/513698859_1303137511820216_2788626323466197141_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=nsRYJHwQ9LgQ7kNvwEumPGz&_nc_oc=AdkOQKTckYT7WCJCS8w9RPXHcU2rtXx_Oyr3oPi9NujDb6wPwyOaH33Uq9A5PWoQBT0&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=4QZboZFGhZpkDF3iZAcLkA&oh=00_AfZDeRx96xPfNwxNPapPexaKjJ0r9OLNdsUxtp5kXCIHOQ&oe=68CA83B2",
        "IELTS Coach",
        "Giảng Viên IELTS",
        "blue",
        "purple",
        [
            { text: "IELTS 8.5", textVi: "IELTS 8.5", color: "blue" },
            { text: "TESOL", textVi: "Chứng chỉ TESOL", color: "purple" },
            { text: "10+ Years", textVi: "10+ Năm", color: "green" },
        ]
    ),
    createTeacher(
        "Andrew Wernette",
        "Native Speaker Coach",
        "Giảng Viên Người Bản Ngữ",
        "Native English speaker from USA with TESOL certification. Specialized in Speaking and Listening modules. Creates engaging and fun learning environment for students.",
        "Người bản ngữ tiếng Anh từ Mỹ với chứng chỉ TESOL. Chuyên về các phần thi Nói và Nghe. Tạo môi trường học tập hấp dẫn và vui vẻ cho học viên.",
        "https://scontent-phx1-1.xx.fbcdn.net/v/t39.30808-6/490362820_1235769841890317_3529497655518823670_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_ohc=5oAM-s0-ZyMQ7kNvwEhj4yV&_nc_oc=AdmzSZX6S9Lf7q-Gr3KiOpqvecy3Rp1LgQMb-mgqdzuN4sQEZ-fdgAatGXookT2K_UA&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=yPRd28gSwj62ahmCGZSLnQ&oh=00_AfbCqkxU-2Q9KqObiKj7MQ6y3RKB7EIfaAjRMh61j6_WWw&oe=68CA6A61",
        "IELTS Coach",
        "Giảng Viên IELTS",
        "green",
        "blue",
        [
            { text: "Native Speaker", textVi: "Người Bản Ngữ", color: "blue" },
            { text: "TESOL", textVi: "Chứng chỉ TESOL", color: "green" },
            { text: "Speaking Expert", textVi: "Chuyên Gia Nói", color: "purple" }
        ]
    ),
    createTeacher(
        "Alex Nguyen",
        "Senior IELTS Coach",
        "Giảng Viên IELTS Cao Cấp",
        "Senior coach with 4+ years experience. Expert in all four IELTS modules with proven track record.",
        "Giảng viên cao cấp với hơn 4 năm kinh nghiệm. Chuyên gia trong cả bốn kỹ năng IELTS với thành tích đã được chứng minh.",
        "https://scontent-phx1-1.xx.fbcdn.net/v/t39.30808-6/512719115_1303138461820121_5804855003617289996_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_ohc=SvPxyktNSDoQ7kNvwGYQUlO&_nc_oc=Admwx7p2eEAdYsS0M5OUbM-gDLltMx9xizSkIRJgwVunOk8PetjNsQs79UbjDaa1AWs&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=2jPIdoxa3EZR9kgKQBD79A&oh=00_Afa85pUMenqJpLVr2Xaqxz0DBF3Rh8mns2Hn5HSNDfWUrg&oe=68CA8F4D",
        "IELTS Coach",
        "Giảng Viên IELTS",
        "purple",
        "pink",
        [
            { text: "IELTS 8.0", textVi: "IELTS 8.0", color: "purple" },
            { text: "4+ Years", textVi: "4+ Năm", color: "green" },
            { text: "All Skills", textVi: "Tất Cả Kỹ Năng", color: "blue" }
        ]
    ),
    createTeacher(
        "Halsey",
        "Senior IELTS Coach",
        "Giảng Viên IELTS Cao Cấp",
        "IELTS Writing and Reading specialist. Develops students through systematic approach and personalized feedback.",
        "Chuyên gia IELTS đọc và viết. Phát triển học viên thông qua phương pháp có hệ thống và phản hồi cá nhân hóa.",
        "https://scontent-phx1-1.xx.fbcdn.net/v/t39.30808-6/497824991_1267129962087638_8984087693444569673_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_ohc=3YCp9OO4IAsQ7kNvwEskt0O&_nc_oc=AdmorNoSYk4CNrcrAFGO6wvj0NWMedewxtBenhiENec_3Tw_5wCcDueYIkGdTmWL18A&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=PvN2tB-WRhC55TdZ5l2J1A&oh=00_AfbWmHmMURtB9d4WxnbgDO3u9rZibXzOrbO4j7pwqRMqMw&oe=68CA6544",
        "IELTS Coach",
        "Giảng Viên IELTS",
        "rose",
        "orange",
        [
            { text: "IELTS 7.5", textVi: "IELTS 7.5", color: "orange" },
            { text: "Writing Expert", textVi: "Chuyên Gia Viết", color: "rose" },
        ]
    ),
    createTeacher(
        "Nick",
        "Speaking & Pronunciation Coach",
        "Huấn Luyện Viên Nói & Phát Âm",
        "Speaking specialist focusing on pronunciation, fluency, and confidence building. Native-like accent training and interview simulation for optimal Speaking band scores.",
        "Chuyên gia Speaking tập trung vào phát âm, độ trôi chảy và xây dựng sự tự tin. Luyện giọng như người bản ngữ và mô phỏng phỏng vấn để đạt điểm Speaking tối ưu.",
        "https://scontent-phx1-1.xx.fbcdn.net/v/t39.30808-6/535530045_1356635943137039_8657268165874831547_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GO-NoztPC4AQ7kNvwFIwV1d&_nc_oc=AdmBCGCZLI1THWvLMLOBOXKkQYWy-OzGxL2EZc7E2I-Zh_G-kPUorHBWntBXclb2x8E&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=akqABx557ePWIDv2vmW4Zw&oh=00_Afag0ZQNsblWgWeSwB2AnuGHs5PWfFuTLAtQ4BsaEav1fQ&oe=68CA7AE3",
        "IELTS Coach",
        "Giảng Viên IELTS",
        "emerald",
        "teal",
        [
            { text: "Speaking Expert", textVi: "Chuyên Gia Nói", color: "emerald" },
            { text: "Pronunciation", textVi: "Phát Âm", color: "teal" },
            { text: "Confidence Builder", textVi: "Xây Dựng Tự Tin", color: "blue" }
        ]
    )
];


// Global function to render teacher cards
function renderTeacherCards(currentLanguage = 'en') {
    if (!window.cardRenderer.templates['teacher-card']) {
        window.cardRenderer.loadTemplate('teacher-card', 'components/teachers/teacher-card.html')
            .then(() => {
                window.cardRenderer.renderCards('.teachers-grid', 'teacher-card', teacherData, currentLanguage);
            });
    } else {
        window.cardRenderer.renderCards('.teachers-grid', 'teacher-card', teacherData, currentLanguage);
    }
}

// Global function to render teacher cards
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

// Global function to update teacher cards language
function updateTeachersLanguage(currentLanguage) {
    window.cardRenderer.updateCardsLanguage('.teachers-grid', currentLanguage);
}

// Export for global use
window.createTeacher = createTeacher;
window.teacherData = teacherData;
window.renderTeacherCards = renderTeacherCards;
window.updateTeachersLanguage = updateTeachersLanguage;