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
        "https://scontent-phx1-1.xx.fbcdn.net/v/t39.30808-6/496208944_1263216835812284_8490991798496101331_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_ohc=5txwWYZROQgQ7kNvwHNcUbA&_nc_oc=Adn9AcFCPt4oyY3UjJxEdhRTR40EIPmy9za6kRz7LTnzdz1J2g6MR3Lf364qn9FMz8Q&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=F7u8UfGK6efmPuunoVAu6g&oh=00_Afb4afHemBU2CVQK9-SaliW5ppK2pw4llTPKuHfZLldJ7w&oe=68CAAD28",
        "IELTS Tutor",
        "Gia Sư IELTS",
        "emerald",
        "teal",
        [
            { text: "IELTS 7.5", textVi: "IELTS 7.5", color: "emerald" },
        ]
    ),
    createBuddy(
        "Jordan",
        "Former TES Student",
        "Cựu Học Viên TES",
        "Currently pursuing a degree at University of Foreign Languages. Provides peer support and personalized study guidance as an IELTS Buddy.",
        "Hiện đang theo học tại Đại học Ngoại ngữ. Hỗ trợ kĩ năng và mẹo học tập với vai trò là IELTS Buddy.",
        "https://scontent-phx1-1.xx.fbcdn.net/v/t39.30808-6/497874845_1267060505427917_925544585791484378_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_ohc=f0ADvcNnWhwQ7kNvwHnOus6&_nc_oc=AdnAIMrlrh1chf2reUwyd1Fg8JLg84x1ahdce_eXzdbccsk3O0nrsXEk-K4xsQbP3Hk&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=GiHHux4kM56b3dg7JaZiaw&oh=00_AfaKh1zOiWMUGcQCTkPwX33LaxNJVeNuEld3kq0qCLZDfQ&oe=68CA9C67",
        "IELTS Tutor",
        "Gia Sư IELTS",
        "blue",
        "indigo",
        [
            { text: "IELTS 6.5", textVi: "IELTS 6.5", color: "blue" },
        ]
    ),
    createBuddy(
        "Ethan",
        "IELTS Tutor",
        "Gia Sư IELTS",
        "Specialized in English for Communication, private tutoring, Excellent in Building Reading and Listening skills.",
        "Chuyên về các phần thi Nói và Nghe với kỹ năng giao tiếp xuất sắc. Giúp học viên xây dựng sự tự tin và cải thiện độ trôi chảy thông qua các buổi luyện tập tương tác.",
        "https://scontent-phx1-1.xx.fbcdn.net/v/t39.30808-6/497536832_1263216765812291_4507708882537148025_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=oLwek_q9LecQ7kNvwF-UqQN&_nc_oc=AdnFwBWa0PkQ0yFWRPxVjeR7oVmxVde5XNqLQYW4EyrZmo2TUMaCOgECfObaGLg3lK4&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=ovZU9nSefFBkCLG0jZnPuQ&oh=00_Afa28QHlXWnIQpbEu0SvNKEuFXeWeUlXQekKw_CBMzwR5Q&oe=68CAC8BE",
        "IELTS Private Tutor",
        "Gia Sư IELTS",
        "purple",
        "pink",
        [
            { text: "Writing Expert", textVi: "Chuyên Gia Viết", color: "purple" },
            { text: "Listening Focus", textVi: "Tập Trung Nghe", color: "pink" },
        ]
    ),
    createBuddy(
        "Chris Luong",
        "IELTS Tutor",
        "Gia Sư IELTS",
        "Specializes in Speaking and Listening modules with excellent communication skills. Helps students build confidence and improve fluency through interactive practice sessions.",
        "Chuyên về các phần thi Nói và Nghe với kỹ năng giao tiếp xuất sắc. Giúp học viên xây dựng sự tự tin và cải thiện độ trôi chảy thông qua các buổi luyện tập tương tác.",
        "https://scontent-phx1-1.xx.fbcdn.net/v/t39.30808-6/494695657_1252172580250043_4629450622560368071_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wmv8gFH9ycMQ7kNvwHI7NIW&_nc_oc=AdnTP_P8w66hzzKCwJZipgfV0Mg4KExVqUM0nWp4nAi6sic_61JHRfhYfQMNcIdhe0E&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=RN2SOpfVT4flxUmDbVhoEw&oh=00_AfYfS1YdR0427inIu1_e5qtwqkqfl2BDSYKIIwDxG4o6AQ&oe=68CACC0D",
        "IELTS Tutor",
        "Gia Sư IELTS",
        "orange",
        "red",
        [
            { text: "IELTS 7.5", textVi: "IELTS 7.5", color: "orange" },
        ]
    ),
    createBuddy(
        "Amber Huynh",
        "IELTS Tutor",
        "Gia Sư IELTS",
        "Currently working and living in Germany, specialized in Reading, Listening and Communication courses.",
        "Chuyên về các khóa học Đọc, Nghe và Giao tiếp. Hiện đang làm việc và sinh sống tại Đức.",
        "https://scontent-phx1-1.xx.fbcdn.net/v/t39.30808-6/493924856_1249599013840733_5363158701443348183_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=fUXgd6YQkggQ7kNvwFnf05e&_nc_oc=Adn5HAMO6EpMtX7Ks1Jfk2EBpQ5PMd6PakYDRxX9cB39iYmlWPmivKAN5ziCyLmbB80&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=PrqJD2iqdcXK-Drr3nAhPQ&oh=00_AfaaHEOLhlFWGuDGwXxHep3iOXyFueBfE_6den0MYPIJzw&oe=68CAA947",
        "IELTS Tutor",
        "Gia Sư IELTS",
        "cyan",
        "blue",
        [
            { text: "IELTS 7.0", textVi: "IELTS 7.0", color: "cyan" },
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