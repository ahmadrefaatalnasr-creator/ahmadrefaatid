import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';
const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
      <div className="container mx-auto px-4 text-center text-white animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Ahmad Refaat</h1>
        <p className="text-xl md:text-3xl mb-4 text-gray-200">
          Instructional Designer & E-learning Specialist
        </p>
        <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
          Designing engaging, learner-centered educational experiences that drive measurable results
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8" onClick={scrollToAbout}>
            Explore My Work
          </Button>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8" onClick={() => document.querySelector('#contact')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            Get In Touch
          </Button>
        </div>
      </div>
      
      <button onClick={scrollToAbout} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer hover:text-accent transition-colors" aria-label="Scroll to about section">
        <ArrowDown size={32} />
      </button>
    </section>;
};
export default Hero;