import { ExternalLink, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Portfolio = () => {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: 'ASTRO Interactive Course',
      description: 'Interactive e-learning course built with Articulate Storyline, featuring engaging multimedia content, assessments, and learner-centered design principles.',
      category: 'E-learning Development',
      tools: 'Articulate Storyline 360',
      link: 'https://ahmadrefaat2024.github.io/ASTRO/',
      gradient: 'from-violet-600 via-purple-600 to-indigo-700',
      icon: '🚀',
    },
    {
      title: 'Interactive Video - Outroch',
      description: 'فيديو تفاعلي احترافي يقدم تجربة تعليمية غامرة مع عناصر تفاعلية متقدمة وتصميم جذاب.',
      category: 'Interactive Video',
      tools: 'Camtasia',
      link: 'https://ahmadrefaat2024.github.io/outroch5/',
      gradient: 'from-rose-500 via-pink-500 to-fuchsia-600',
      icon: '🎬',
    },
    {
      title: 'Youth Education Program',
      description: 'Video-based courses designed for teens and children with age-appropriate pacing, visual storytelling, and curriculum mapping techniques.',
      category: 'Youth Education',
      tools: 'Camtasia, H5P, Video Production',
      gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
      icon: '🎓',
    },
    {
      title: 'Blended Learning Solutions',
      description: 'Custom eLearning modules and blended learning programs with interactive content, accessibility compliance (WCAG), and responsive design.',
      category: 'Blended Learning',
      tools: 'Articulate Storyline, H5P, LMS',
      gradient: 'from-amber-500 via-orange-500 to-red-500',
      icon: '📚',
    },
    {
      title: 'Cybersecurity Awareness Script',
      description: 'سكربت فيديو توعوي لشركة سايبر سيكيورتي متخصصة في تقديم توعية للشركات في مجال الأمن السيبراني من خلال فيديوهات كارتون تعليمية عن الهندسة الاجتماعية.',
      category: 'Script Writing',
      tools: 'Scriptwriting, Storyboarding',
      link: 'https://drive.google.com/file/d/14T1XMgUBYiJO4LkDNjwhrfHDiLEWAWoB/view?usp=sharing',
      gradient: 'from-slate-600 via-gray-700 to-zinc-800',
      icon: '🔐',
    },
    {
      title: 'Arabic Numbers Course Storyboard',
      description: 'استوري بورد لكورس تعليم الأرقام العربية للأطفال غير الناطقين بالعربية، يتضمن تصميم بصري جذاب وشخصيات كارتونية مع نطق الأرقام بالعربية والإنجليزية.',
      category: 'Storyboarding',
      tools: 'PowerPoint, Visual Design',
      link: 'https://docs.google.com/presentation/d/1D9h6YMKDEebgiKxhmmgVxSbrFwrWe2VH/edit?usp=sharing&ouid=103121255332793306895&rtpof=true&sd=true',
      gradient: 'from-sky-500 via-blue-500 to-indigo-600',
      icon: '🔢',
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
            <Card
              key={index}
              className={`group relative border-none shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-2xl cursor-pointer transform hover:-translate-y-2 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
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
                  <span className="text-6xl group-hover:scale-125 transition-transform duration-500 drop-shadow-lg">
                    {project.icon}
                  </span>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="text-white/90 text-xs font-medium px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                    {project.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>

              <CardContent className="p-5 bg-card">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;