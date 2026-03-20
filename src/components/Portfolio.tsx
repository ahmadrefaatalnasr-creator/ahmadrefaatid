import { ExternalLink, ArrowRight, LucideIcon, Rocket, GraduationCap, Shield, Video } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

interface Project {
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  category: string;
  categoryAr: string;
  tools: string;
  link?: string;
  gradient: string;
  Icon: LucideIcon;
}

const Portfolio = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t, language } = useLanguage();

  const projects: Project[] = [
    {
      title: 'ASTRO Interactive Course',
      titleAr: 'دورة ASTRO التفاعلية',
      description: 'Interactive e-learning course built with Articulate Storyline, featuring engaging multimedia content, assessments, and learner-centered design principles.',
      descriptionAr: 'دورة تعليم إلكتروني تفاعلية مبنية باستخدام Articulate Storyline، تتضمن محتوى وسائط متعددة جذاب وتقييمات ومبادئ تصميم متمحورة حول المتعلم.',
      category: 'E-Learning Development',
      categoryAr: 'تطوير التعليم الإلكتروني',
      tools: 'Articulate Storyline 360',
      link: 'https://ahmadrefaat2024.github.io/ASTRO/',
      gradient: 'from-violet-600 via-purple-600 to-indigo-700',
      Icon: Rocket,
    },
    {
      title: 'Teaching Arabic for non-speakers',
      titleAr: 'برنامج تعليم الشباب',
      description: 'Video-based courses designed for teens and children with age-appropriate pacing, visual storytelling, and curriculum mapping techniques.',
      descriptionAr: 'دورات قائمة على الفيديو مصممة للمراهقين والأطفال مع إيقاع مناسب للعمر وسرد بصري وتقنيات تخطيط المناهج.',
      category: 'Youth Education',
      categoryAr: 'تعليم الشباب',
      tools: 'Camtasia, H5P, Video Production',
      link: 'https://docs.google.com/presentation/d/1Xwsiqy0dRRwiLxQ2Qvh9GNI_EUjGNuvL/edit?usp=drive_link&ouid=103121255332793306895&rtpof=true&sd=true',
      gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
      Icon: GraduationCap,
    },
    {
      title: 'Cybersecurity Awareness Script',
      titleAr: 'سكربت التوعية بالأمن السيبراني',
      description: 'سكربت فيديو توعوي لشركة سايبر سيكيورتي متخصصة في تقديم توعية للشركات في مجال الأمن السيبراني من خلال فيديوهات كارتون تعليمية عن الهندسة الاجتماعية.',
      descriptionAr: 'سكربت فيديو توعوي لشركة سايبر سيكيورتي متخصصة في تقديم توعية للشركات في مجال الأمن السيبراني من خلال فيديوهات كارتون تعليمية عن الهندسة الاجتماعية.',
      category: 'Script Writing',
      categoryAr: 'كتابة السكربت',
      tools: 'Scriptwriting, Storyboarding',
      link: 'https://drive.google.com/file/d/14T1XMgUBYiJO4LkDNjwhrfHDiLEWAWoB/view?usp=sharing',
      gradient: 'from-slate-600 via-gray-700 to-zinc-800',
      Icon: Shield,
    },
    {
      title: 'Yesarha – AI Chatbot for LMS',
      titleAr: 'يسّرها – شات بوت ذكي لأنظمة إدارة التعلم',
      description: 'AI-powered chatbot integrated into LMS platforms to assist learners while browsing courses, providing instant answers and support using artificial intelligence.',
      descriptionAr: 'شات بوت مدعوم بالذكاء الاصطناعي يتم دمجه في أنظمة إدارة التعلم (LMS) لمساعدة المتعلمين أثناء تصفح الكورسات وتقديم إجابات فورية باستخدام AI.',
      category: 'AI Video Production',
      categoryAr: 'إنتاج فيديو بالذكاء الاصطناعي',
      tools: 'AI Video Generation, LMS Integration',
      link: 'https://docs.google.com/presentation/d/1x5A5vOGKKz-MCjTXlYAWx5dtPZvvdHRW2gC9lcCHpdI/edit?usp=sharing',
      gradient: 'from-cyan-500 via-blue-600 to-indigo-700',
      Icon: Video,
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-24 bg-background"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">
            {language === 'ar' ? 'أعمال مختارة' : 'Selected Work'}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {language === 'ar' ? 'المشاريع ' : 'Featured'}
            <span className="text-primary">{language === 'ar' ? 'المميزة' : 'Projects'}</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Projects Grid - 2 columns like Sameh's */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isVisible={isVisible}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
  isVisible: boolean;
  language: 'en' | 'ar';
}

const ProjectCard = ({ project, index, isVisible, language }: ProjectCardProps) => {
  const IconComponent = project.Icon;
  const isArabic = language === 'ar';

  return (
    <div
      className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-1"
      >
        {/* Image / Gradient Thumbnail */}
        <div className={`relative h-52 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
          {/* Decorative shapes */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-8 left-8 w-20 h-20 rounded-full bg-white/20 blur-xl" />
            <div className="absolute bottom-4 right-8 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
          </div>

          {/* Center Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-white/20">
              <IconComponent className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 start-4">
            <span className="text-white/90 text-xs font-medium px-3 py-1.5 bg-black/25 backdrop-blur-md rounded-full">
              {isArabic ? project.categoryAr : project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {isArabic ? project.titleAr : project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
            {isArabic ? project.descriptionAr : project.description}
          </p>

          {/* View Project */}
          <div className="flex items-center gap-1.5 text-primary text-sm font-medium group-hover:gap-2.5 transition-all duration-300">
            <span>{isArabic ? 'عرض المشروع' : 'View Project'}</span>
            <ArrowRight className={`w-4 h-4 ${isArabic ? 'rotate-180' : ''}`} />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Portfolio;
