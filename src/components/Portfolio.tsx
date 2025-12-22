import { ExternalLink, Sparkles, Rocket, Video, GraduationCap, BookOpen, Shield, Hash, LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState, useRef } from 'react';

interface Project {
  title: string;
  description: string;
  category: string;
  tools: string;
  link?: string;
  gradient: string;
  Icon: LucideIcon;
}

const Portfolio = () => {
  const { ref, isVisible } = useScrollAnimation();

  const projects: Project[] = [
    {
      title: 'ASTRO Interactive Course',
      description: 'Interactive e-learning course built with Articulate Storyline, featuring engaging multimedia content, assessments, and learner-centered design principles.',
      category: 'E-learning Development',
      tools: 'Articulate Storyline 360',
      link: 'https://ahmadrefaat2024.github.io/ASTRO/',
      gradient: 'from-violet-600 via-purple-600 to-indigo-700',
      Icon: Rocket,
    },
    {
      title: 'Interactive Video - Outroch',
      description: 'فيديو تفاعلي احترافي يقدم تجربة تعليمية غامرة مع عناصر تفاعلية متقدمة وتصميم جذاب.',
      category: 'Interactive Video',
      tools: 'Camtasia',
      link: 'https://ahmadrefaat2024.github.io/outroch5/',
      gradient: 'from-rose-500 via-pink-500 to-fuchsia-600',
      Icon: Video,
    },
    {
      title: 'Youth Education Program',
      description: 'Video-based courses designed for teens and children with age-appropriate pacing, visual storytelling, and curriculum mapping techniques.',
      category: 'Youth Education',
      tools: 'Camtasia, H5P, Video Production',
      gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
      Icon: GraduationCap,
    },
    {
      title: 'Blended Learning Solutions',
      description: 'Custom eLearning modules and blended learning programs with interactive content, accessibility compliance (WCAG), and responsive design.',
      category: 'Blended Learning',
      tools: 'Articulate Storyline, H5P, LMS',
      gradient: 'from-amber-500 via-orange-500 to-red-500',
      Icon: BookOpen,
    },
    {
      title: 'Cybersecurity Awareness Script',
      description: 'سكربت فيديو توعوي لشركة سايبر سيكيورتي متخصصة في تقديم توعية للشركات في مجال الأمن السيبراني من خلال فيديوهات كارتون تعليمية عن الهندسة الاجتماعية.',
      category: 'Script Writing',
      tools: 'Scriptwriting, Storyboarding',
      link: 'https://drive.google.com/file/d/14T1XMgUBYiJO4LkDNjwhrfHDiLEWAWoB/view?usp=sharing',
      gradient: 'from-slate-600 via-gray-700 to-zinc-800',
      Icon: Shield,
    },
    {
      title: 'Arabic Numbers Course Storyboard',
      description: 'استوري بورد لكورس تعليم الأرقام العربية للأطفال غير الناطقين بالعربية، يتضمن تصميم بصري جذاب وشخصيات كارتونية مع نطق الأرقام بالعربية والإنجليزية.',
      category: 'Storyboarding',
      tools: 'PowerPoint, Visual Design',
      link: 'https://docs.google.com/presentation/d/1D9h6YMKDEebgiKxhmmgVxSbrFwrWe2VH/edit?usp=sharing&ouid=103121255332793306895&rtpof=true&sd=true',
      gradient: 'from-sky-500 via-blue-500 to-indigo-600',
      Icon: Hash,
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
            Portfolio
          </h2>
          <Sparkles className="w-8 h-8 text-accent" />
        </div>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of projects showcasing innovative instructional design and e-learning development
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card3D 
              key={index} 
              project={project} 
              index={index} 
              isVisible={isVisible} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface Card3DProps {
  project: Project;
  index: number;
  isVisible: boolean;
}

const Card3D = ({ project, index, isVisible }: Card3DProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlarePosition({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlarePosition({ x: 50, y: 50 });
  };

  const IconComponent = project.Icon;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-all duration-200 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      style={{ 
        transform,
        transitionDelay: `${index * 100}ms`,
        transformStyle: 'preserve-3d'
      }}
    >
      <Card className="group relative border-none shadow-lg hover:shadow-2xl overflow-hidden rounded-2xl cursor-pointer bg-card">
        {/* Glare Effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none z-10"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.8) 0%, transparent 50%)`
          }}
        />

        {/* Gradient Header with Icon */}
        <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`} style={{ transform: 'translateZ(20px)' }}>
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 left-4 w-20 h-20 rounded-full bg-white/20 blur-xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full bg-white/10 blur-2xl group-hover:scale-125 transition-transform duration-700" />
          </div>
          
          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'translateZ(40px)' }}>
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-white/30 shadow-lg">
              <IconComponent className="w-10 h-10 text-white drop-shadow-lg" />
            </div>
          </div>
          
          {/* Category Badge */}
          <div className="absolute top-4 right-4" style={{ transform: 'translateZ(30px)' }}>
            <span className="text-white/90 text-xs font-medium px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              {project.category}
            </span>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
        </div>

        <CardContent className="p-5 bg-card relative" style={{ transform: 'translateZ(10px)' }}>
          <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-1">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
            {project.description}
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
                onClick={() => window.open(project.link, '_blank')}
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