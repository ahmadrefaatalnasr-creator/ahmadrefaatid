import { Lightbulb, Palette, Code, Users, BookOpen, Layers, Video, MonitorPlay } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const skills = [
    {
      icon: Lightbulb,
      titleKey: 'skills.instructional',
      descKey: 'skills.instructional.desc',
    },
    {
      icon: Code,
      titleKey: 'skills.elearning',
      descKey: 'skills.elearning.desc',
    },
    {
      icon: Palette,
      titleKey: 'skills.multimedia',
      descKey: 'skills.multimedia.desc',
    },
    {
      icon: Video,
      titleKey: 'skills.video',
      descKey: 'skills.video.desc',
    },
    {
      icon: Users,
      titleKey: 'skills.learning',
      descKey: 'skills.learning.desc',
    },
    {
      icon: Layers,
      titleKey: 'skills.lms',
      descKey: 'skills.lms.desc',
    },
    {
      icon: BookOpen,
      titleKey: 'skills.content',
      descKey: 'skills.content.desc',
    },
    {
      icon: MonitorPlay,
      titleKey: 'skills.business',
      descKey: 'skills.business.desc',
    },
  ];

  return (
    <section 
      id="skills" 
      className="py-20 bg-secondary"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          {t('skills.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={index}
                className={`border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg shrink-0">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-primary">
                        {t(skill.titleKey)}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {t(skill.descKey)}
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