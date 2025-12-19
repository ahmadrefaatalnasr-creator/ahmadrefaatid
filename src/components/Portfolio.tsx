import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: 'Interactive Leadership Training',
      description: 'Comprehensive e-learning program for developing leadership skills with scenario-based learning and real-world applications.',
      category: 'Corporate Training',
      tools: 'Articulate 360, Adobe Illustrator',
    },
    {
      title: 'Medical Procedures Course',
      description: 'Engaging medical training course with 3D animations, simulations, and interactive assessments for healthcare professionals.',
      category: 'Healthcare Education',
      tools: 'Adobe Captivate, After Effects',
    },
    {
      title: 'Sales Enablement Platform',
      description: 'Gamified learning experience for sales teams featuring microlearning modules and performance tracking dashboards.',
      category: 'Sales Training',
      tools: 'H5P, Moodle, Custom Development',
    },
    {
      title: 'Onboarding Experience',
      description: 'Interactive onboarding program reducing time-to-productivity for new hires through engaging multimedia content.',
      category: 'HR & Onboarding',
      tools: 'Articulate Rise, Video Production',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
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
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
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
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-accent hover:text-accent/80"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
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
