// Course component system with bilingual support

// Course data structure with all course information
const courseData = {
    candy: {
        id: 'candy',
        icon: '🍭',
        iconSize: 'text-xl',
        containerClasses: 'bg-gradient-to-br from-green-200 via-green-300 to-blue-300',
        iconBgClasses: 'bg-gradient-to-br from-green-300 to-blue-400',
        skillColorClass: 'text-pink-600',
        ringColor: 'ring-green-300'
    },
    cookies: {
        id: 'cookies',
        icon: '🍪',
        iconSize: 'text-2xl',
        containerClasses: 'bg-gradient-to-br from-blue-200 via-blue-300 to-indigo-300',
        iconBgClasses: 'bg-gradient-to-br from-blue-300 to-indigo-400',
        skillColorClass: 'text-orange-600',
        ringColor: 'ring-blue-300'
    },
    donuts: {
        id: 'donuts',
        icon: '🍩',
        iconSize: 'text-2xl',
        containerClasses: 'bg-gradient-to-br from-indigo-200 via-indigo-300 to-purple-300',
        iconBgClasses: 'bg-gradient-to-br from-indigo-300 to-purple-400',
        skillColorClass: 'text-indigo-600',
        ringColor: 'ring-indigo-300'
    },
    bagels: {
        id: 'bagels',
        icon: '🥯',
        iconSize: 'text-2xl',
        containerClasses: 'bg-gradient-to-br from-purple-200 via-purple-300 to-pink-300',
        iconBgClasses: 'bg-gradient-to-br from-purple-300 to-pink-400',
        skillColorClass: 'text-teal-600',
        ringColor: 'ring-purple-300'
    },
    burgers: {
        id: 'burgers',
        icon: '🍔',
        iconSize: 'text-2xl',
        containerClasses: 'bg-gradient-to-br from-pink-200 via-pink-300 to-red-300',
        iconBgClasses: 'bg-gradient-to-br from-pink-300 to-red-400',
        skillColorClass: 'text-red-600',
        ringColor: 'ring-pink-300'
    },
    pizzas: {
        id: 'pizzas',
        icon: '🍕',
        iconSize: 'text-2xl',
        containerClasses: 'bg-gradient-to-br from-red-200 via-red-300 to-orange-300',
        iconBgClasses: 'bg-gradient-to-br from-red-300 to-orange-400',
        skillColorClass: 'text-cyan-600',
        ringColor: 'ring-red-300'
    },
    intensive: {
        id: 'intensive',
        icon: '🚀',
        iconSize: 'text-2xl',
        containerClasses: 'bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 text-white',
        iconBgClasses: 'bg-white/10 backdrop-blur-sm',
        skillColorClass: 'text-yellow-300',
        ringColor: 'ring-orange-300',
        isIntensive: true
    }
};

// Course translations
const courseTranslations = {
    en: {
        candy: {
            title: "Level Candy",
            subtitle: "Beginner Level - IELTS Foundation",
            targetLabel: "For:",
            targetDescription: "The Candy Class is designed for beginner learners who are just starting their English journey. ",
            goalLabel: "Goals:",
            goalDescription: [
                "Build a strong foundation in basic grammar, speaking, and listening",
                "Boost everyday communication skills through interactive practice",
                "Expand vocabulary through familiar topics (family, food, daily routines, hobbies)",
                "Distinguish between communication English and academic English",
                "Learn to use language in both real-life and study contexts"
            ],
            readingTitle: "📚 Reading & Listening",
            readingDescription: "Get familiar with simple exercises, short passages, practice analysis, and understanding question requirements",
            speakingTitle: "🗣️ Speaking",
            speakingDescription: "Get familiar with simple questions, focus on idea development, pronunciation and reflexes",
            writingTitle: "✍️ Writing",
            writingDescription: "Practice writing complete sentences, practice idea development. Distinguish between spoken and written language in IELTS",
            targetTitle: "🎯 Target",
            targetBand: "Band 3.0 - Solid foundation for next levels"
        },
        cookies: {
            title: "Level Cookies",
            subtitle: "Elementary Level - IELTS Introduction",
            targetLabel: "For:",
            targetDescription: "Students who have studied IELTS for less than 3 months (entry test score from 3.0+) or students who have completed Level Candy.",
            goalLabel: "Goals:",
            goalDescription: [
                "Get familiar with IELTS format and structure",
                "Learn different question types across all four skills",
                "Develop basic test-taking strategies",
                "Build confidence in English communication",
                "Prepare for intermediate IELTS levels"
            ],
            readingTitle: "📚 Reading & Listening",
            readingDescription: "Work on short exercises, focus on passage analysis and vocabulary upgrading",
            speakingTitle: "🗣️ Speaking",
            speakingDescription: "Practice speaking on familiar daily topics, focus on idea development according to IELTS format",
            writingTitle: "✍️ Writing",
            writingDescription: "Get familiar with writing theory: Task 1 charts and Task 2 question types",
            targetTitle: "🎯 Target",
            targetBand: "Band 3.5 - Clear understanding of IELTS format and approach"
        },
        donuts: {
            title: "Level Donuts",
            subtitle: "Intermediate Level - IELTS Progress",
            targetLabel: "For:",
            targetDescription: "Students who have studied IELTS before (entry test score from 4.0+) or students who have completed Level Cookies.",
            goalLabel: "Requirements:",
            goalDescription: [
                "Have basic IELTS knowledge and question types understanding",
                "Review writing theory and enhance skills",
                "Work on longer and more challenging exercises",
                "Enhance passage analysis skills",
                "Build B1&B2 vocabulary level"
            ],
            readingTitle: "📚 Reading & Listening",
            readingDescription: "Start working on longer and more challenging exercises, enhance passage analysis skills",
            speakingTitle: "🗣️ Speaking",
            speakingDescription: "Practice speaking on familiar topics, improve pronunciation and reflexes, enhance B1&B2 vocabulary",
            writingTitle: "✍️ Writing",
            writingDescription: "Practice writing various Task 1 charts and Task 2, enhance analysis and outline planning skills",
            targetTitle: "🎯 Target",
            targetBand: "Band 4.5 - Master basic IELTS skills"
        },
        bagels: {
            title: "Level Bagels",
            subtitle: "Upper Intermediate - IELTS Mastery",
            targetLabel: "For:",
            targetDescription: "Students who have studied IELTS before (entry test score from 4.5+) or students who have completed Level Donuts.",
            goalLabel: "Requirements:",
            goalDescription: [
                "Have solid IELTS foundation knowledge",
                "Want to improve skills to achieve higher scores",
                "Work with longer reading and listening passages",
                "Enhance academic vocabulary",
                "Develop logical thinking and argumentation skills"
            ],
            readingTitle: "📚 Reading & Listening",
            readingDescription: "Get familiar with longer reading and listening passages, gradually increasing difficulty, enhance academic vocabulary",
            speakingTitle: "🗣️ Speaking",
            speakingDescription: "Practice with diverse topics, develop logical thinking, improve pronunciation",
            writingTitle: "✍️ Writing",
            writingDescription: "Practice writing in standard format, enhance argumentation skills, use advanced vocabulary",
            targetTitle: "🎯 Target",
            targetBand: "Band 5.0+ - Enhance and refine IELTS skills"
        },
        burgers: {
            title: "Level Burgers",
            subtitle: "Advanced Level - IELTS Excellence",
            targetLabel: "For:",
            targetDescription: "Students who have studied IELTS before (entry test score 5.0+) or students who have completed Level Donuts.",
            goalLabel: "Requirements:",
            goalDescription: [
                "Have solid IELTS knowledge and basic test-taking skills",
                "Work on complex passages and recordings",
                "Enhance speed and accuracy in all question types",
                "Develop fluency and coherence",
                "Master complex grammar structures and advanced vocabulary"
            ],
            readingTitle: "📚 Reading & Listening",
            readingDescription: "Work on complex passages and recordings, enhance speed and accuracy in all question types",
            speakingTitle: "🗣️ Speaking",
            speakingDescription: "Practice advanced topics, develop fluency and coherence, master complex grammar structures",
            writingTitle: "✍️ Writing",
            writingDescription: "Master advanced writing techniques, sophisticated vocabulary and complex sentence structures",
            targetTitle: "🎯 Target",
            targetBand: "Band 5.5+ - Advanced IELTS proficiency"
        },
        pizzas: {
            title: "Level Pizzas",
            subtitle: "Expert Level - IELTS Mastery",
            targetLabel: "For:",
            targetDescription: "Students with solid IELTS foundation (entry test score from 6.0+) or students who have completed Level Burgers.",
            goalLabel: "Requirements:",
            goalDescription: [
                "Have strong IELTS foundation",
                "Want to achieve high band scores for academic or professional purposes",
                "Master complex academic texts and recordings",
                "Achieve near-native comprehension levels",
                "Produce sophisticated academic writing with advanced linguistic features"
            ],
            readingTitle: "📚 Reading & Listening",
            readingDescription: "Master complex academic texts and recordings, achieve near-native comprehension levels",
            speakingTitle: "🗣️ Speaking",
            speakingDescription: "Achieve native-like fluency, master advanced discourse markers and sophisticated vocabulary",
            writingTitle: "✍️ Writing",
            writingDescription: "Produce sophisticated academic writing with complex argumentation and advanced linguistic features",
            targetTitle: "🎯 Target",
            targetBand: "Band 6.5+ - Expert level IELTS mastery"
        },
        intensive: {
            title: "Level Intensive",
            subtitle: "Elite Level - IELTS Conqueror",
            targetLabel: "For:",
            targetDescription: "Elite students with strong IELTS foundation (entry test score 6.5+) targeting band 7.0+ for universities or immigration.",
            goalLabel: "Requirements:",
            goalDescription: [
                "Demonstrate advanced English proficiency and strategic thinking",
                "Master the most challenging academic materials",
                "Achieve consistent high performance under time pressure",
                "Demonstrate native-like fluency with sophisticated vocabulary",
                "Produce publication-quality academic writing"
            ],
            readingTitle: "�‍🏫 Expert Coaching",
            readingDescription: "Master the most challenging academic materials, achieve consistent high performance under time pressure",
            speakingTitle: "� Mock Tests",
            speakingDescription: "Demonstrate native-like fluency with sophisticated vocabulary and natural discourse patterns",
            writingTitle: "💻 E-learning",
            writingDescription: "Produce publication-quality academic writing with advanced analytical and critical thinking skills",
            targetTitle: "🎯 Exam Ready",
            targetBand: "Band 7.0+ - IELTS Champion Level"
        }
    },
    vi: {
        candy: {
            title: "Cấp Candy",
            subtitle: "Cấp Độ Cơ Bản - Nền Tảng IELTS",
            targetLabel: "Dành cho:",
            targetDescription: "Lớp Candy được thiết kế cho người học mới bắt đầu hành trình tiếng Anh.",
            goalLabel: "Mục tiêu:",
            goalDescription: [
                "Xây dựng nền tảng vững chắc về ngữ pháp cơ bản, kỹ năng nghe và nói",
                "Tăng cường kỹ năng giao tiếp hằng ngày thông qua thực hành tương tác",
                "Mở rộng vốn từ vựng qua các chủ đề quen thuộc (gia đình, đồ ăn, thói quen hằng ngày, sở thích)",
                "Phân biệt giữa tiếng Anh giao tiếp và tiếng Anh học thuật",
                "Học cách sử dụng ngôn ngữ trong cả đời sống thực tế và trong học tập"
            ],
            readingTitle: "📚 Reading & Listening",
            readingDescription: "Làm quen các bài đơn giản, đoạn văn ngắn, tập phân tích, hiểu yêu cầu đề bài",
            speakingTitle: "🗣️ Speaking",
            speakingDescription: "Làm quen với câu hỏi đơn giản, tập trung vào phát triển ý, phát âm và phản xạ",
            writingTitle: "✍️ Writing",
            writingDescription: "Tập viết câu hoàn chỉnh, tập triển khai ý. Phân biệt được văn nói và văn viết trong IELTS",
            targetTitle: "🎯 Target",
            targetBand: "Band 2.5 - Nền tảng vững chắc cho các level tiếp theo"
        },
        cookies: {
            title: "Cấp Cookies",
            subtitle: "Cấp Độ Sơ Cấp - Giới Thiệu IELTS",
            targetLabel: "Dành cho:",
            targetDescription: "Những bạn đã từng học IELTS dưới 3 tháng (điểm test đầu vào từ 3.0+) hoặc học viên đã qua level Candy.",
            goalLabel: "Mục tiêu:",
            goalDescription: [
                "Làm quen với format và cấu trúc IELTS",
                "Học các dạng câu hỏi khác nhau trong cả bốn kỹ năng",
                "Phát triển chiến lược làm bài cơ bản",
                "Xây dựng sự tự tin trong giao tiếp tiếng Anh",
                "Chuẩn bị cho các cấp độ IELTS trung cấp"
            ],
            readingTitle: "📚 Reading & Listening",
            readingDescription: "Làm các dạng bài ngắn, tập trung vào phân tích bài và nâng cấp từ vựng",
            speakingTitle: "🗣️ Speaking",
            speakingDescription: "Luyện nói chủ đề đời sống quen thuộc, tập trung vào phát triển ý theo format IELTS",
            writingTitle: "✍️ Writing",
            writingDescription: "Làm quen với lý thuyết Viết: biểu đồ Task 1 và các dạng bài Task 2",
            targetTitle: "🎯 Target",
            targetBand: "Band 3.5 - Hiểu rõ format và cách làm bài IELTS"
        },
        donuts: {
            title: "Cấp Donuts",
            subtitle: "Cấp Độ Trung Cấp - Tiến Bộ IELTS",
            targetLabel: "Dành cho:",
            targetDescription: "Những bạn đã từng học IELTS (điểm test đầu vào từ 4.0+) hoặc học viên đã qua level Cookies.",
            goalLabel: "Yêu cầu:",
            goalDescription: [
                "Đã có kiến thức cơ bản IELTS và các dạng bài",
                "Ôn lại lý thuyết Viết và nâng cao kỹ năng",
                "Làm các bài dài và thử thách hơn",
                "Đẩy mạnh kỹ năng phân tích bài",
                "Xây dựng vốn từ vựng B1&B2"
            ],
            readingTitle: "📚 Reading & Listening",
            readingDescription: "Bắt đầu làm các bài dài và thử thách hơn, đẩy mạnh kỹ năng phân tích bài",
            speakingTitle: "🗣️ Speaking",
            speakingDescription: "Luyện nói chủ đề quen thuộc, tăng cường phát âm và phản xạ, nâng cao từ vựng B1&B2",
            writingTitle: "✍️ Writing",
            writingDescription: "Luyện viết các dạng biểu đồ Task 1 và Task 2, đẩy mạnh kỹ năng phân tích và lập dàn ý",
            targetTitle: "🎯 Target",
            targetBand: "Band 4.5 - Thành thạo các kỹ năng IELTS cơ bản"
        },
        bagels: {
            title: "Cấp Bagels",
            subtitle: "Cấp Độ Trung Cấp Cao - Thành Thạo IELTS",
            targetLabel: "Dành cho:",
            targetDescription: "Những bạn đã từng học IELTS (điểm test đầu vào từ 4.5+) hoặc học viên đã qua level Donuts.",
            goalLabel: "Yêu cầu:",
            goalDescription: [
                "Đã có nền tảng về IELTS và muốn nâng cao kỹ năng",
                "Muốn đạt điểm cao hơn trong IELTS",
                "Làm quen với các bài đọc và nghe dài hơn",
                "Đẩy mạnh từ vựng học thuật",
                "Phát triển kỹ năng lập luận và tư duy logic"
            ],
            readingTitle: "📚 Reading & Listening",
            readingDescription: "Làm quen với các bài đọc và nghe dài, độ khó tăng dần, đẩy mạnh từ vựng học thuật",
            speakingTitle: "🗣️ Speaking",
            speakingDescription: "Luyện tập với các chủ đề phong phú, phát triển ý logic, nâng cao phát âm",
            writingTitle: "✍️ Writing",
            writingDescription: "Luyện viết theo format chuẩn, đẩy mạnh kỹ năng lập luận, sử dụng từ vựng nâng cao",
            targetTitle: "🎯 Target",
            targetBand: "Band 5.0+ - Nâng cao và tinh chỉnh các kỹ năng IELTS"
        },
        burgers: {
            title: "Cấp Burgers",
            subtitle: "Cấp Độ Nâng Cao - Xuất Sắc IELTS",
            targetLabel: "Dành cho:",
            targetDescription: "Những bạn đã từng học IELTS (điểm test đầu vào 5.0+) hoặc học viên đã qua level Donuts.",
            goalLabel: "Yêu cầu:",
            goalDescription: [
                "Đã nắm chắc kiến thức IELTS và kỹ năng làm bài cơ bản",
                "Làm các bài phức tạp và nâng cao",
                "Tăng tốc độ và độ chính xác trong tất cả dạng câu hỏi",
                "Phát triển độ trôi chảy và mạch lạc",
                "Thành thạo ngữ pháp phức tạp và từ vựng tinh tế"
            ],
            readingTitle: "📚 Reading & Listening",
            readingDescription: "Làm các bài phức tạp, nâng cao tốc độ và độ chính xác trong tất cả dạng câu hỏi",
            speakingTitle: "🗣️ Speaking",
            speakingDescription: "Luyện tập chủ đề nâng cao, phát triển độ trôi chảy và mạch lạc, thành thạo ngữ pháp phức tạp",
            writingTitle: "✍️ Writing",
            writingDescription: "Thành thạo kỹ thuật viết nâng cao, từ vựng tinh tế và cấu trúc câu phức tạp",
            targetTitle: "🎯 Target",
            targetBand: "Band 5.5+ - Trình độ IELTS nâng cao"
        },
        pizzas: {
            title: "Cấp Pizzas",
            subtitle: "Cấp Độ Chuyên Gia - Thành Thạo IELTS",
            targetLabel: "Dành cho:",
            targetDescription: "Những bạn đã có nền tảng vững chắc về IELTS (điểm test đầu vào từ 6.0+) hoặc học viên đã qua level Burgers.",
            goalLabel: "Yêu cầu:",
            goalDescription: [
                "Đã có nền tảng IELTS mạnh mẽ",
                "Muốn đạt điểm cao cho mục đích học thuật hoặc nghề nghiệp",
                "Thành thạo các văn bản và bài nghe học thuật phức tạp",
                "Đạt mức hiểu biết gần như người bản ngữ",
                "Tạo ra văn bản học thuật tinh tế với lập luận phức tạp"
            ],
            readingTitle: "📚 Reading & Listening",
            readingDescription: "Thành thạo các văn bản và bài nghe học thuật phức tạp, đạt mức hiểu biết gần như người bản ngữ",
            speakingTitle: "🗣️ Speaking",
            speakingDescription: "Đạt độ trôi chảy như người bản ngữ, thành thạo từ nối nâng cao và từ vựng tinh tế",
            writingTitle: "✍️ Writing",
            writingDescription: "Tạo ra văn bản học thuật tinh tế với lập luận phức tạp và đặc điểm ngôn ngữ nâng cao",
            targetTitle: "🎯 Target",
            targetBand: "Band 6.5+ - Thành thạo IELTS cấp độ chuyên gia"
        },
        intensive: {
            title: "Cấp Chinh Phục",
            subtitle: "Cấp Độ Elite - Chinh Phục IELTS",
            targetLabel: "Dành cho:",
            targetDescription: "Học viên elite có nền tảng IELTS mạnh (điểm test đầu vào 6.5+) nhắm mục tiêu band 7.0+ cho đại học hoặc định cư.",
            goalLabel: "Yêu cầu:",
            goalDescription: [
                "Thể hiện trình độ tiếng Anh nâng cao và tư duy chiến lược",
                "Thành thạo các tài liệu học thuật thách thức nhất",
                "Đạt hiệu suất cao ổn định dưới áp lực thời gian",
                "Thể hiện độ trôi chảy như người bản ngữ",
                "Tạo ra văn bản học thuật chất lượng xuất bản"
            ],
            readingTitle: "�‍🏫 Expert Coaching",
            readingDescription: "Học viên được luyện tập với đề thi thật IELTS cùng giáo viên kinh nghiệm nhiều năm",
            speakingTitle: "� Mock Tests",
            speakingDescription: "Tổ chức thi thử, đưa ra đánh giá chi tiết điểm số cho 4 tiêu chí của IELTS",
            writingTitle: "💻 E-learning",
            writingDescription: "Học viên được sử dụng hệ thống E-learning của STUDIO để trả bài tập về nhà",
            targetTitle: "🎯 Exam Ready",
            targetBand: "Chuẩn bị tâm lý trước khi thi, luyện tập theo thể thức thi thực tế"
        }
    }
};

// Course renderer class
class CourseRenderer {
    constructor() {
        this.templateCache = null;
        this.currentLanguage = localStorage.getItem('language') || 'en';
    }

    // Load course card template
    async loadTemplate() {
        if (this.templateCache) return this.templateCache;
        
        try {
            const response = await fetch('components/courses/course-card.html');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.templateCache = await response.text();
            return this.templateCache;
        } catch (error) {
            console.error('Error loading course card template:', error);
            return null;
        }
    }

    // Create course card HTML directly instead of template replacement
    createCourseCard(courseId) {
        const course = courseData[courseId];
        const translation = courseTranslations[this.currentLanguage][courseId];
        
        if (!course || !translation) {
            console.error(`Course data not found for: ${courseId}`);
            return '';
        }

        // Determine styling classes
        const descSectionClass = course.isIntensive ? 'bg-white/10 backdrop-blur-sm' : 'bg-white';
        const skillSectionClass = course.isIntensive ? 'bg-white/10 backdrop-blur-sm' : 'bg-white';
        const textColorClass = course.isIntensive ? 'text-white/90' : 'text-gray-700';
        const skillTextColorClass = course.isIntensive ? 'text-white/80' : 'text-gray-600';

        // Handle goalDescription as array for bullet points
        let goalDescriptionHTML = '';
        if (Array.isArray(translation.goalDescription)) {
            goalDescriptionHTML = `<ul class="list-disc list-inside space-y-2 ${textColorClass}">
                ${translation.goalDescription.map(point => `<li>${point}</li>`).join('')}
            </ul>`;
        } else {
            goalDescriptionHTML = `<p class="course-goal-description ${textColorClass}">${translation.goalDescription}</p>`;
        }

        return `
        <div class="course-card" data-course-id="${courseId}">
            <!-- Scroll anchor -->
            <div id="${courseId}-anchor" class="scroll-target"></div>
            
            <!-- Course card container -->
            <div id="${courseId}" class="course-container ${course.containerClasses} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
                <!-- Course header -->
                <div class="flex items-center mb-6">
                    <div class="course-icon-container w-16 h-16 ${course.iconBgClasses} rounded-2xl flex items-center justify-center mr-6">
                        <span class="course-icon text-white font-bold ${course.iconSize}">${course.icon}</span>
                    </div>
                    <div>
                        <h3 class="course-title text-3xl font-bold mb-2" style="color: #1D4B3B;">${translation.title}</h3>
                        <p class="course-subtitle ${course.isIntensive ? 'text-white/80' : 'text-gray-600'}">${translation.subtitle}</p>
                    </div>
                </div>
                
                <!-- Course description section -->
                <div class="${descSectionClass} rounded-2xl p-6 mb-6">
                    <h3 class="course-target-label font-semibold text-lg mb-3 ${course.skillColorClass}">${translation.targetLabel}</h3>
                    <p class="course-target-description ${textColorClass} mb-4">${translation.targetDescription}</p>
                    <h3 class="course-goal-label font-semibold text-lg mb-3 ${course.skillColorClass}">${translation.goalLabel}</h3>
                    ${goalDescriptionHTML}
                </div>
                
                <!-- Course skills grid -->
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="${skillSectionClass} rounded-xl p-4">
                        <h4 class="course-reading-title font-semibold ${course.skillColorClass} mb-2">${translation.readingTitle}</h4>
                        <p class="course-reading-description text-sm ${skillTextColorClass}">${translation.readingDescription}</p>
                    </div>
                    <div class="${skillSectionClass} rounded-xl p-4">
                        <h4 class="course-speaking-title font-semibold ${course.skillColorClass} mb-2">${translation.speakingTitle}</h4>
                        <p class="course-speaking-description text-sm ${skillTextColorClass}">${translation.speakingDescription}</p>
                    </div>
                    <div class="${skillSectionClass} rounded-xl p-4">
                        <h4 class="course-writing-title font-semibold ${course.skillColorClass} mb-2">${translation.writingTitle}</h4>
                        <p class="course-writing-description text-sm ${skillTextColorClass}">${translation.writingDescription}</p>
                    </div>
                    <div class="${skillSectionClass} rounded-xl p-4">
                        <h4 class="course-target-title font-semibold ${course.skillColorClass} mb-2">${translation.targetTitle}</h4>
                        <p class="course-target-band text-sm ${skillTextColorClass}">${translation.targetBand}</p>
                    </div>
                </div>
            </div>
        </div>`;
    }

    // Render all courses
    async renderAllCourses() {
        const courseOrder = ['candy', 'cookies', 'donuts', 'bagels', 'burgers', 'pizzas', 'intensive'];
        let allCoursesHTML = '';
        
        for (const courseId of courseOrder) {
            allCoursesHTML += this.createCourseCard(courseId) + '\n\n';
        }
        
        return allCoursesHTML;
    }

    // Update language for all courses
    async updateLanguage(newLanguage) {
        this.currentLanguage = newLanguage;
        const container = document.getElementById('courses-container');
        if (container) {
            const coursesHTML = await this.renderAllCourses();
            container.innerHTML = coursesHTML;
        }
    }
}

// Global course renderer instance
let courseRenderer = null;

// Load courses function
async function loadCourses() {
    try {
        if (!courseRenderer) {
            courseRenderer = new CourseRenderer();
        }
        
        const container = document.getElementById('courses-container');
        if (container) {
            const coursesHTML = await courseRenderer.renderAllCourses();
            container.innerHTML = coursesHTML;
            
            // Dispatch event to notify other components that courses are loaded
            document.dispatchEvent(new CustomEvent('coursesLoaded'));
        } else {
            console.error('Courses container not found');
        }
    } catch (error) {
        console.error('Error loading courses:', error);
    }
}

// Update courses language
async function updateCoursesLanguage(language) {
    if (courseRenderer) {
        await courseRenderer.updateLanguage(language);
    }
}

// Listen for language changes
document.addEventListener('languageChanged', function(event) {
    const newLanguage = event.detail.language;
    updateCoursesLanguage(newLanguage);
});

// Auto-load courses when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadCourses();
});

// Export functions for manual loading if needed
if (typeof window !== 'undefined') {
    window.loadCourses = loadCourses;
    window.updateCoursesLanguage = updateCoursesLanguage;
    window.CourseRenderer = CourseRenderer;
}