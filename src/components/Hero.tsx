import { useRef } from 'react';
import { ArrowRight, Linkedin, Youtube, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import profilePhoto from '@/assets/profile-photo.png';

const Hero = () => {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';

  const scrollToPortfolio = () => {
    document.querySelector('#portfolio')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-background overflow-hidden"
    >
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 -start-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -end-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 end-1/4 w-4 h-4 bg-primary/20 rounded-full" />
        <div className="absolute top-1/4 start-1/3 w-3 h-3 bg-primary/15 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`flex flex-col ${isArabic ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-16`}>
          
          {/* Photo */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative">
              <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-xl border-2 border-border/50">
                <img 
                  src={profilePhoto} 
                  alt="Ahmad Refaat" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Available badge */}
              <div className="absolute bottom-4 start-4 bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-border/50">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-foreground">
                    {isArabic ? 'متاح لمشاريع جديدة' : 'AVAILABLE FOR NEW PROJECTS'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`flex-1 ${isArabic ? 'text-right' : 'text-left'} animate-fade-in`} style={{ animationDelay: '150ms' }}>
            {/* Decorative dot */}
            <div className="w-3 h-3 bg-primary rounded-full mb-6" />
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-2 leading-[1.1]">
              {isArabic ? 'أحمد' : 'Ahmad'}
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-[1.1]">
              {isArabic ? 'رفعت' : 'Refaat'}
            </h1>

            {/* Title with accent bar */}
            <div className={`flex items-center gap-3 mb-8 ${isArabic ? 'flex-row-reverse' : ''}`}>
              <div className="w-1 h-8 bg-primary rounded-full" />
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                {t('hero.title')}
              </p>
            </div>

            {/* Description */}
            <div className={`flex items-start gap-3 mb-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
              <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0" />
              <p className="text-muted-foreground leading-relaxed max-w-lg">
                {t('about.p1')}
              </p>
            </div>
            <div className={`flex items-start gap-3 mb-8 ${isArabic ? 'flex-row-reverse' : ''}`}>
              <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0 opacity-0" />
              <p className="text-muted-foreground leading-relaxed max-w-lg">
                {t('about.p2')}
              </p>
            </div>

            {/* CTA and socials */}
            <div className={`flex items-center gap-4 flex-wrap ${isArabic ? 'flex-row-reverse' : ''}`}>
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 opacity-0 hidden md:block" />
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-[0.97]"
                onClick={scrollToPortfolio}
              >
                {t('hero.explore')}
                <ArrowRight className={`w-4 h-4 ms-2 ${isArabic ? 'rotate-180' : ''}`} />
              </Button>

              <a href="https://www.linkedin.com/in/ahmad-refaat-id/" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors active:scale-95">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-red-500 hover:border-red-500 transition-colors active:scale-95">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-emerald-500 hover:border-emerald-500 transition-colors active:scale-95">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
