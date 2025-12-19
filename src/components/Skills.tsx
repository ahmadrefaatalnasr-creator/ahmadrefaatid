import { Lightbulb, Palette, Code, Users, BookOpen, Layers } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skills = [
    {
      icon: Lightbulb,
      title: 'Instructional Design',
      description: 'ADDIE, SAM, Bloom\'s Taxonomy, Learning Objectives',
    },
    {
      icon: Code,
      title: 'E-learning Development',
      description: 'Articulate 360, Adobe Captivate, H5P, SCORM',
    },
    {
      icon: Palette,
      title: 'Multimedia Design',
      description: 'Adobe Creative Suite, Video Editing, Graphics',
    },
    {
      icon: Users,
      title: 'Learning Experience',
      description: 'UX/UI for Learning, Gamification, Engagement',
    },
    {
      icon: BookOpen,
      title: 'Content Strategy',
      description: 'Curriculum Development, Assessment Design',
    },
    {
      icon: Layers,
      title: 'LMS Management',
      description: 'Moodle, Canvas, Blackboard, Learning Analytics',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-primary">
                        {skill.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
