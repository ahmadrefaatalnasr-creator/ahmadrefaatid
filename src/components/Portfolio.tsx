import { ExternalLink } from 'lucide-react';
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
    },
    {
      title: 'Interactive Video - Outroch',
      description: 'فيديو تفاعلي احترافي يقدم تجربة تعليمية غامرة مع عناصر تفاعلية متقدمة وتصميم جذاب.',
      category: 'Interactive Video',
      tools: 'Camtasia',
      link: 'https://ahmadrefaat2024.github.io/outroch5/',
    },
    {
      title: 'Youth Education Program',
      description: 'Video-based courses designed for teens and children with age-appropriate pacing, visual storytelling, and curriculum mapping techniques.',
      category: 'Youth Education',
      tools: 'Camtasia, H5P, Video Production',
    },
    {
      title: 'Blended Learning Solutions',
      description: 'Custom eLearning modules and blended learning programs with interactive content, accessibility compliance (WCAG), and responsive design.',
      category: 'Blended Learning',
      tools: 'Articulate Storyline, H5P, LMS',
    },
    {
      title: 'Cybersecurity Awareness Script',
      description: 'سكربت فيديو توعوي لشركة سايبر سيكيورتي متخصصة في تقديم توعية للشركات في مجال الأمن السيبراني من خلال فيديوهات كارتون تعليمية عن الهندسة الاجتماعية.',
      category: 'Script Writing',
      tools: 'Scriptwriting, Storyboarding',
      link: '/scripts/Script_Social_engeneering.pdf',
    },
    {
      title: 'Arabic Numbers Course Storyboard',
      description: 'استوري بورد لكورس تعليم الأرقام العربية للأطفال غير الناطقين بالعربية، يتضمن تصميم بصري جذاب وشخصيات كارتونية مع نطق الأرقام بالعربية والإنجليزية.',
      category: 'Storyboarding',
      tools: 'PowerPoint, Visual Design',
      link: '/storyboards/Arabic_Numbers_Storyboard.pptx',
    },
  ];

  return (
    <section 
      id="portfolio" 
      className="py-20 bg-secondary"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Portfolio
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of projects showcasing innovative instructional design and e-learning development
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="h-48 bg-gradient-to-br from-primary to-primary/70 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold px-4 py-2 bg-accent rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">
                  {project.title}
                </h3>
                <p className="text-foreground/90 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {project.tools}
                  </span>
                  {project.link && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-accent hover:text-accent/80"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;