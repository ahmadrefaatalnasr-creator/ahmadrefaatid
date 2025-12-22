import { Briefcase } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const experiences = [
    {
      yearKey: 'exp1.year',
      titleKey: 'exp1.title',
      companyKey: 'exp1.company',
      descKey: 'exp1.desc',
    },
    {
      yearKey: 'exp2.year',
      titleKey: 'exp2.title',
      companyKey: 'exp2.company',
      descKey: 'exp2.desc',
    },
    {
      yearKey: 'exp3.year',
      titleKey: 'exp3.title',
      companyKey: 'exp3.company',
      descKey: 'exp3.desc',
    },
  ];

  return (
    <section 
      id="experience" 
      className="py-20 bg-background"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          {t('experience.title')}
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative ps-8 border-s-2 border-accent pb-8 last:pb-0 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="absolute start-[-9px] top-0 w-4 h-4 rounded-full bg-accent" />
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-5 h-5 text-accent" />
                  <span className="text-sm font-semibold text-accent">{t(exp.yearKey)}</span>
                </div>
                <h3 className="text-xl font-bold mb-1 text-primary">{t(exp.titleKey)}</h3>
                <p className="text-muted-foreground font-medium mb-3">{t(exp.companyKey)}</p>
                <p className="text-foreground/90 leading-relaxed">{t(exp.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;