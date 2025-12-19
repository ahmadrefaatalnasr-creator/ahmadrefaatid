import { Lightbulb, Palette, Code, Users, BookOpen, Layers, Video, MonitorPlay } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skills = [
    {
      icon: Lightbulb,
      title: 'Instructional Design',
      description: 'ADDIE, SAM, Bloom\'s Taxonomy, Kolb, Adult Learning Theories',
    },
    {
      icon: Code,
      title: 'E-learning Development',
      description: 'Articulate Storyline 360, Adobe Captivate, H5P, SCORM, xAPI',
    },
    {
      icon: Palette,
      title: 'Multimedia & Graphics',
      description: 'Photoshop, Illustrator, InDesign, After Effects',
    },
    {
      icon: Video,
      title: 'Video Production',
      description: 'Camtasia, Video Editing, Storyboarding, vILT',
    },
    {
      icon: Users,
      title: 'Learning Experience',
      description: 'Microlearning, Gamification, Assessment & Interactivity',
    },
    {
      icon: Layers,
      title: 'LMS & Standards',
      description: 'Moodle, Learning Analytics, WCAG Accessibility',
    },
    {
      icon: BookOpen,
      title: 'Content Strategy',
      description: 'Curriculum Mapping, Needs Analysis, Course Evaluation',
    },
    {
      icon: MonitorPlay,
      title: 'Business Skills',
      description: 'Collaboration, Communication, Problem Solving, Presentations',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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