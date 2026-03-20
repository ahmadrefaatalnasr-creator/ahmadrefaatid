import { ExternalLink, Sparkles, Rocket, GraduationCap, Shield, ArrowRight, LucideIcon, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
      category: 'E-learning Development',
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
  ];

  return (
    <section 
      id="portfolio" 
      className="py-24 bg-gradient-to-b from-secondary to-background"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Header */}
        <div className="mb-4">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2 text-center">
            {language === 'ar' ? 'أعمال مختارة' : 'Selected Work'}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground">
            {language === 'ar' ? 'المشاريع' : 'Featured'}{' '}
            <span className="text-primary">{language === 'ar' ? 'المميزة' : 'Projects'}</span>
          </h2>
        </div>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-base">
          {t('portfolio.subtitle')}
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
      className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div 
        className="group relative bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-border/50"
        onClick={() => project.link && window.open(project.link, '_blank')}
      >
        {/* Image/Gradient Area */}
        <div className={`relative h-56 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-6 left-6 w-24 h-24 rounded-full bg-white/10 blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute bottom-6 right-6 w-40 h-40 rounded-full bg-white/5 blur-3xl group-hover:scale-125 transition-transform duration-700" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
          </div>

          {/* Category Badge */}
          <div className="absolute top-5 end-5 z-10">
            <span className="text-white text-xs font-semibold px-4 py-1.5 bg-black/20 backdrop-blur-md rounded-full border border-white/20 tracking-wide uppercase">
              {isArabic ? project.categoryAr : project.category}
            </span>
          </div>

          {/* Center Icon */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-24 h-24 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-white/25 shadow-2xl">
              <IconComponent className="w-12 h-12 text-white drop-shadow-lg" />
            </div>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content Area */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
            {isArabic ? project.titleAr : project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3">
            {isArabic ? project.descriptionAr : project.description}
          </p>

          {/* Tools */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tools.split(', ').map((tool, i) => (
              <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-muted-foreground">
                {tool}
              </span>
            ))}
          </div>

          {/* View Project Button */}
          {project.link && (
            <Button
              variant="ghost"
              className="w-full justify-between text-primary hover:text-primary hover:bg-primary/5 rounded-xl h-12 px-4 font-semibold border border-border/50 group-hover:border-primary/30 transition-all duration-300"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.link, '_blank');
              }}
            >
              <span>{isArabic ? 'عرض المشروع' : 'View Project'}</span>
              <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 ${isArabic ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
