import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      year: '2021 - Present',
      title: 'Senior Instructional Designer',
      company: 'Leading EdTech Company',
      description: 'Led the design and development of interactive e-learning courses for corporate clients. Implemented innovative learning strategies that increased engagement by 45%.',
    },
    {
      year: '2019 - 2021',
      title: 'E-learning Specialist',
      company: 'Educational Institution',
      description: 'Developed comprehensive online learning programs and managed LMS implementation. Trained faculty on best practices for online course delivery.',
    },
    {
      year: '2017 - 2019',
      title: 'Instructional Designer',
      company: 'Training Solutions Provider',
      description: 'Created engaging learning materials and assessments for diverse audiences. Collaborated with subject matter experts to transform complex content into accessible learning experiences.',
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
