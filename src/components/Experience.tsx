import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      year: 'Apr 2025 - Present',
      title: 'E-learning Specialist',
      company: 'Manaarah Education Solution',
      description: 'Designed and developed custom eLearning modules and blended learning programs tailored to client needs. Applied instructional design models (ADDIE, Bloom\'s Taxonomy, Kolb) to create learner-centered experiences. Developed interactive content using Articulate Storyline and H5P, ensuring accessibility compliance (WCAG, responsive design).',
    },
    {
      year: 'Nov 2024 - May 2025',
      title: 'Instructional Designer (Teens and Children)',
      company: 'Maven Academies',
      description: 'Created full storyboards and scripts for video-based courses ensuring smooth narration and age-appropriate pacing. Collaborated with media teams to align visuals, narration, and interactivity. Applied visual storytelling and curriculum mapping techniques to keep learning outcomes engaging.',
    },
    {
      year: 'Oct 2024 - Apr 2025',
      title: 'Instructional Designer',
      company: 'LearnKhana',
      description: 'Designed and developed engaging, interactive, and learner-centered educational content. Utilized instructional design models (ADDIE, SAM) and integrated multimedia elements (videos, animations, infographics). Worked with LMS platforms to deploy and track training programs.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-accent pb-8 last:pb-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-5 h-5 text-accent" />
                  <span className="text-sm font-semibold text-accent">{exp.year}</span>
                </div>
                <h3 className="text-xl font-bold mb-1 text-primary">{exp.title}</h3>
                <p className="text-muted-foreground font-medium mb-3">{exp.company}</p>
                <p className="text-foreground/90 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;