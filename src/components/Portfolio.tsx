import { ExternalLink, Sparkles, Rocket, Video, GraduationCap, BookOpen, Shield, Hash, LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
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
      title: 'Interactive Video - Outroch',
      titleAr: 'فيديو تفاعلي - Outroch',
      description: 'فيديو تفاعلي احترافي يقدم تجربة تعليمية غامرة مع عناصر تفاعلية متقدمة وتصميم جذاب.',
      descriptionAr: 'فيديو تفاعلي احترافي يقدم تجربة تعليمية غامرة مع عناصر تفاعلية متقدمة وتصميم جذاب.',
      category: 'Interactive Video',
      categoryAr: 'فيديو تفاعلي',
      tools: 'Camtasia',
      link: 'https://ahmadrefaat2024.github.io/outroch5/',
      gradient: 'from-rose-500 via-pink-500 to-fuchsia-600',
      Icon: Video,
    },
    {
      title: 'Youth Education Program',
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
      className="py-20 bg-gradient-to-b from-secondary to-background"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex items-center justify-center gap-3 mb-4">
          <Sparkles className="w-8 h-8 text-accent" />
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary">
            {t('portfolio.title')}
          </h2>
          <Sparkles className="w-8 h-8 text-accent" />
        </div>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t('portfolio.subtitle')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
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
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card 
        className="group relative border-none shadow-lg hover:shadow-xl overflow-hidden rounded-2xl cursor-pointer bg-card transition-shadow duration-300"
        onClick={() => project.link && window.open(project.link, '_blank')}
      >
        {/* Gradient Header with Icon */}
        <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 left-4 w-20 h-20 rounded-full bg-white/20 blur-xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full bg-white/10 blur-2xl group-hover:scale-125 transition-transform duration-700" />
          </div>
          
          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-white/30 shadow-lg">
              <IconComponent className="w-10 h-10 text-white drop-shadow-lg" />
            </div>
          </div>
          
          {/* Category Badge */}
          <div className="absolute top-4 end-4">
            <span className="text-white/90 text-xs font-medium px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              {isArabic ? project.categoryAr : project.category}
            </span>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
        </div>

        <CardContent className="p-5 bg-card">
          <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-1">
            {isArabic ? project.titleAr : project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
            {isArabic ? project.descriptionAr : project.description}
          </p>
          <div className="flex items-center justify-between pt-3 border-t border-border/50">
            <span className="text-xs text-muted-foreground/80 font-medium">
              {project.tools}
            </span>
            {project.link && (
              <Button
                variant="ghost"
                size="sm"
                className="text-accent hover:text-accent hover:bg-accent/10 rounded-full h-8 w-8 p-0"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.link, '_blank');
                }}
              >
                <ExternalLink className="w-4 h-4" />
              </Button>
            )}
          </div>
        </CardContent>

        {/* Bottom Gradient Line */}
        <div className={`h-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      </Card>
    </div>
  );
};

export default Portfolio;