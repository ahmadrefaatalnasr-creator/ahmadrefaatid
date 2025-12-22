import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.portfolio': 'Portfolio',
    'nav.carousels': 'Carousels',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.name': 'Ahmad Refaat',
    'hero.title': 'Instructional Designer & E-learning Specialist',
    'hero.subtitle': 'Designing engaging, learner-centered educational experiences that drive measurable results',
    'hero.explore': 'Explore My Work',
    'hero.contact': 'Get In Touch',
    
    // About
    'about.title': 'About Me',
    'about.p1': 'Instructional Designer and eLearning Specialist with a strong background in education, content development, and digital learning strategies. Experienced in designing and delivering engaging learning solutions that align with organizational goals and adult learning principles.',
    'about.p2': 'Skilled in leveraging authoring tools (Articulate, Adobe CC, H5P, etc.), LMS platforms, and interactive media to create impactful training experiences. Proven expertise in instructional design models, needs analysis, and learner-centered design with a track record of building scalable eLearning programs across diverse industries.',
    'about.p3': 'Adept at collaborating with cross-functional teams, leading content development processes, and ensuring clarity, engagement, and measurable learning outcomes. Awarded the Ideal Student for Faculty of Education (2021) and 5th Ideal Student for Egyptian Universities (2019).',
    
    // Skills
    'skills.title': 'Skills & Expertise',
    'skills.instructional': 'Instructional Design',
    'skills.instructional.desc': "ADDIE, SAM, Bloom's Taxonomy, Kolb, Adult Learning Theories",
    'skills.elearning': 'E-learning Development',
    'skills.elearning.desc': 'Articulate Storyline 360, Adobe Captivate, H5P, SCORM, xAPI',
    'skills.multimedia': 'Multimedia & Graphics',
    'skills.multimedia.desc': 'Photoshop, Illustrator, InDesign, After Effects',
    'skills.video': 'Video Production',
    'skills.video.desc': 'Camtasia, Video Editing, Storyboarding, vILT',
    'skills.learning': 'Learning Experience',
    'skills.learning.desc': 'Microlearning, Gamification, Assessment & Interactivity',
    'skills.lms': 'LMS & Standards',
    'skills.lms.desc': 'Moodle, Learning Analytics, WCAG Accessibility',
    'skills.content': 'Content Strategy',
    'skills.content.desc': 'Curriculum Mapping, Needs Analysis, Course Evaluation',
    'skills.business': 'Business Skills',
    'skills.business.desc': 'Collaboration, Communication, Problem Solving, Presentations',
    
    // Experience
    'experience.title': 'Experience',
    'exp1.year': 'Apr 2025 - Present',
    'exp1.title': 'E-learning Specialist',
    'exp1.company': 'Manaarah Education Solution',
    'exp1.desc': "Designed and developed custom eLearning modules and blended learning programs tailored to client needs. Applied instructional design models (ADDIE, Bloom's Taxonomy, Kolb) to create learner-centered experiences. Developed interactive content using Articulate Storyline and H5P, ensuring accessibility compliance (WCAG, responsive design).",
    'exp2.year': 'Nov 2024 - May 2025',
    'exp2.title': 'Instructional Designer (Teens and Children)',
    'exp2.company': 'Maven Academies',
    'exp2.desc': 'Created full storyboards and scripts for video-based courses ensuring smooth narration and age-appropriate pacing. Collaborated with media teams to align visuals, narration, and interactivity. Applied visual storytelling and curriculum mapping techniques to keep learning outcomes engaging.',
    'exp3.year': 'Oct 2024 - Apr 2025',
    'exp3.title': 'Instructional Designer',
    'exp3.company': 'LearnKhana',
    'exp3.desc': 'Designed and developed engaging, interactive, and learner-centered educational content. Utilized instructional design models (ADDIE, SAM) and integrated multimedia elements (videos, animations, infographics). Worked with LMS platforms to deploy and track training programs.',
    
    // Portfolio
    'portfolio.title': 'Portfolio',
    'portfolio.subtitle': 'A selection of projects showcasing innovative instructional design and e-learning development',
    
    // Carousels
    'carousels.title': 'Knowledge',
    'carousels.titleHighlight': 'Carousels',
    'carousels.subtitle': "Educational resources and insights I've created to share knowledge in the e-learning community",
    'carousels.download': 'View / Download',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': "Interested in collaborating or learning more about my work? I'd love to hear from you!",
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.linkedin': 'LinkedIn',
    'contact.connect': 'Connect with me',
    'contact.sendEmail': 'Send me an email',
    'contact.downloadCV': 'Download CV',
    'contact.locationValue': 'Egypt',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.title': 'Instructional Designer & E-learning Specialist',
  },
  ar: {
    // Navigation
    'nav.about': 'نبذة عني',
    'nav.skills': 'المهارات',
    'nav.experience': 'الخبرات',
    'nav.portfolio': 'أعمالي',
    'nav.carousels': 'الكاروسيلز',
    'nav.contact': 'تواصل معي',
    
    // Hero
    'hero.name': 'أحمد رفعت',
    'hero.title': 'مصمم تعليمي ومتخصص في التعليم الإلكتروني',
    'hero.subtitle': 'تصميم تجارب تعليمية جذابة ومتمحورة حول المتعلم تحقق نتائج قابلة للقياس',
    'hero.explore': 'استكشف أعمالي',
    'hero.contact': 'تواصل معي',
    
    // About
    'about.title': 'نبذة عني',
    'about.p1': 'مصمم تعليمي ومتخصص في التعليم الإلكتروني مع خلفية قوية في التعليم وتطوير المحتوى واستراتيجيات التعلم الرقمي. لدي خبرة في تصميم وتقديم حلول تعليمية جذابة تتوافق مع أهداف المؤسسات ومبادئ تعلم الكبار.',
    'about.p2': 'ماهر في استخدام أدوات التأليف (Articulate، Adobe CC، H5P، إلخ)، ومنصات إدارة التعلم، والوسائط التفاعلية لإنشاء تجارب تدريبية مؤثرة. خبرة مثبتة في نماذج التصميم التعليمي، وتحليل الاحتياجات، والتصميم المتمحور حول المتعلم مع سجل حافل في بناء برامج تعليم إلكتروني قابلة للتوسع عبر صناعات متنوعة.',
    'about.p3': 'بارع في التعاون مع الفرق متعددة التخصصات، وقيادة عمليات تطوير المحتوى، وضمان الوضوح والتفاعل ونتائج التعلم القابلة للقياس. حاصل على جائزة الطالب المثالي لكلية التربية (2021) والمركز الخامس كطالب مثالي على مستوى الجامعات المصرية (2019).',
    
    // Skills
    'skills.title': 'المهارات والخبرات',
    'skills.instructional': 'التصميم التعليمي',
    'skills.instructional.desc': 'ADDIE، SAM، تصنيف بلوم، كولب، نظريات تعلم الكبار',
    'skills.elearning': 'تطوير التعليم الإلكتروني',
    'skills.elearning.desc': 'Articulate Storyline 360، Adobe Captivate، H5P، SCORM، xAPI',
    'skills.multimedia': 'الوسائط المتعددة والجرافيك',
    'skills.multimedia.desc': 'فوتوشوب، إليستريتور، إنديزاين، أفتر إفكتس',
    'skills.video': 'إنتاج الفيديو',
    'skills.video.desc': 'كامتازيا، تحرير الفيديو، الستوري بورد، التدريب الافتراضي',
    'skills.learning': 'تجربة التعلم',
    'skills.learning.desc': 'التعلم المصغر، التلعيب، التقييم والتفاعلية',
    'skills.lms': 'أنظمة إدارة التعلم',
    'skills.lms.desc': 'موودل، تحليلات التعلم، معايير الوصول WCAG',
    'skills.content': 'استراتيجية المحتوى',
    'skills.content.desc': 'تخطيط المناهج، تحليل الاحتياجات، تقييم الدورات',
    'skills.business': 'مهارات الأعمال',
    'skills.business.desc': 'التعاون، التواصل، حل المشكلات، العروض التقديمية',
    
    // Experience
    'experience.title': 'الخبرات',
    'exp1.year': 'أبريل 2025 - حتى الآن',
    'exp1.title': 'متخصص تعليم إلكتروني',
    'exp1.company': 'منارة للحلول التعليمية',
    'exp1.desc': 'تصميم وتطوير وحدات تعليم إلكتروني مخصصة وبرامج تعلم مدمجة مصممة حسب احتياجات العملاء. تطبيق نماذج التصميم التعليمي (ADDIE، تصنيف بلوم، كولب) لإنشاء تجارب متمحورة حول المتعلم. تطوير محتوى تفاعلي باستخدام Articulate Storyline و H5P مع ضمان الامتثال لمعايير الوصول.',
    'exp2.year': 'نوفمبر 2024 - مايو 2025',
    'exp2.title': 'مصمم تعليمي (المراهقين والأطفال)',
    'exp2.company': 'أكاديميات مافن',
    'exp2.desc': 'إنشاء ستوري بوردز وسكربتات كاملة لدورات الفيديو مع ضمان سرد سلس وإيقاع مناسب للعمر. التعاون مع فرق الوسائط لمواءمة المرئيات والسرد والتفاعلية. تطبيق تقنيات السرد البصري وتخطيط المناهج للحفاظ على جاذبية نتائج التعلم.',
    'exp3.year': 'أكتوبر 2024 - أبريل 2025',
    'exp3.title': 'مصمم تعليمي',
    'exp3.company': 'ليرن خانة',
    'exp3.desc': 'تصميم وتطوير محتوى تعليمي جذاب وتفاعلي ومتمحور حول المتعلم. استخدام نماذج التصميم التعليمي (ADDIE، SAM) ودمج عناصر الوسائط المتعددة (فيديوهات، رسوم متحركة، إنفوجرافيك). العمل مع منصات إدارة التعلم لنشر وتتبع برامج التدريب.',
    
    // Portfolio
    'portfolio.title': 'أعمالي',
    'portfolio.subtitle': 'مجموعة مختارة من المشاريع تعرض التصميم التعليمي المبتكر وتطوير التعليم الإلكتروني',
    
    // Carousels
    'carousels.title': 'كاروسيلز',
    'carousels.titleHighlight': 'المعرفة',
    'carousels.subtitle': 'موارد تعليمية ورؤى أنشأتها لمشاركة المعرفة في مجتمع التعليم الإلكتروني',
    'carousels.download': 'عرض / تحميل',
    
    // Contact
    'contact.title': 'تواصل معي',
    'contact.subtitle': 'مهتم بالتعاون أو معرفة المزيد عن أعمالي؟ يسعدني سماع رأيك!',
    'contact.email': 'البريد الإلكتروني',
    'contact.location': 'الموقع',
    'contact.linkedin': 'لينكد إن',
    'contact.connect': 'تواصل معي',
    'contact.sendEmail': 'أرسل بريداً إلكترونياً',
    'contact.downloadCV': 'تحميل السيرة الذاتية',
    'contact.locationValue': 'مصر',
    
    // Footer
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.title': 'مصمم تعليمي ومتخصص في التعليم الإلكتروني',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      <div dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'font-arabic' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};