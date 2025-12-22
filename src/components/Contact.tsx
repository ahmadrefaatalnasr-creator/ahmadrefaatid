import { Mail, MapPin, Linkedin, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      labelKey: 'contact.email',
      value: 'ahmadrefaatalnasr@gmail.com',
      link: 'mailto:ahmadrefaatalnasr@gmail.com'
    },
    {
      icon: MapPin,
      labelKey: 'contact.location',
      valueKey: 'contact.locationValue'
    },
    {
      icon: Linkedin,
      labelKey: 'contact.linkedin',
      valueKey: 'contact.connect',
      link: 'https://www.linkedin.com/in/ahmadrefaatalnasr/'
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-20 bg-background"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          {t('contact.title')}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t('contact.subtitle')}
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const displayValue = item.value || t(item.valueKey || '');
              return (
                <Card 
                  key={index} 
                  className={`border-none shadow-md transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-semibold mb-2 text-primary">{t(item.labelKey)}</h3>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors whitespace-nowrap"
                      >
                        {displayValue}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{displayValue}</p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8" 
              onClick={() => window.open('mailto:ahmadrefaatalnasr@gmail.com')}
            >
              <Mail className="me-2 w-5 h-5" />
              {t('contact.sendEmail')}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="font-semibold px-8"
              onClick={() => window.open('/Ahmed_Refaat_CV.pdf', '_blank')}
            >
              <FileText className="me-2 w-5 h-5" />
              {t('contact.downloadCV')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;