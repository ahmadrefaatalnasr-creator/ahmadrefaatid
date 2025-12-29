import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useMouseSpotlight } from '@/hooks/useMouseSpotlight';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const { mousePosition, isInContainer } = useMouseSpotlight(containerRef);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Dark Overlay with Spotlight Effect */}
      <div 
        className="absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          background: isInContainer 
            ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.85) 40%)`
            : 'rgba(0, 0, 0, 0.75)',
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center text-white animate-fade-in relative z-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
          {t('hero.name')}
        </h1>
        <p className="text-xl md:text-3xl mb-4 text-gray-200 drop-shadow-md">
          {t('hero.title')}
        </p>
        <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto drop-shadow-md">
          {t('hero.subtitle')}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 shadow-lg hover:shadow-xl transition-all" 
            onClick={scrollToAbout}
          >
            {t('hero.explore')}
          </Button>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 shadow-lg hover:shadow-xl transition-all" 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero.contact')}
          </Button>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout} 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer hover:text-accent transition-colors z-20" 
        aria-label="Scroll to about section"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
