import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Glasses, Presentation, BarChart3, GitCompare, Play, BookOpen, Sparkles, FileText, Video, LucideIcon } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

interface CarouselItem {
  title: string;
  titleAr: string;
  file: string;
  Icon: LucideIcon;
  gradient: string;
}

const carousels: CarouselItem[] = [
  {
    title: 'VR in E-Learning',
    titleAr: 'الواقع الافتراضي في التعليم الإلكتروني',
    file: 'https://drive.google.com/file/d/1xqefZqdoqcEOo27Xhr8NmuAba9qoB1s1/view?usp=drive_link',
    Icon: Glasses,
    gradient: 'from-violet-600 via-purple-600 to-indigo-700',
  },
  {
    title: 'Storyline 360 Project Tips',
    titleAr: 'إرشاداتك لمشروع مميز في ستوريلاين 360',
    file: '/carousels/ارشاداتك_لمشروع_مميز_في_ستوريلاين_360.pdf',
    Icon: Presentation,
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
  },
  {
    title: 'Instructional Design & Data Analysis',
    titleAr: 'التصميم التعليمي وتحليل البيانات',
    file: '/carousels/التصميم_التعليمي_وتحليل_البيانات.pdf',
    Icon: BarChart3,
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
  },
  {
    title: 'LXD vs ID',
    titleAr: 'الفرق بين LXD و ID',
    file: '/carousels/الفرق_بين_LXD_ID.pdf',
    Icon: GitCompare,
    gradient: 'from-blue-500 via-sky-500 to-cyan-500',
  },
  {
    title: 'Interactive Videos',
    titleAr: 'الفيديوهات التفاعلية',
    file: '/carousels/الفيديوهات_التفاعلية.pdf',
    Icon: Play,
    gradient: 'from-rose-500 via-pink-500 to-fuchsia-600',
  },
  {
    title: 'Kotobee for Interactive Books',
    titleAr: 'حوّل كتبك التقليدية إلى تجربة تعليمية تفاعلية باستخدام Kotobee',
    file: '/carousels/حوّل_كتبك_التقليدية_إلى_تجربة_تعليمية_تفاعلية_باستخدام_Kotobee.pdf',
    Icon: BookOpen,
    gradient: 'from-lime-500 via-green-500 to-emerald-600',
  },
  {
    title: 'Prompt Engineering in ID',
    titleAr: 'فن هندسة الأوامر في التصميم التعليمي',
    file: '/carousels/فن_هندسة_الاوامر_في_التصميم_التعليمي.pdf',
    Icon: Sparkles,
    gradient: 'from-fuchsia-500 via-purple-500 to-violet-600',
  },
  {
    title: 'Instructional Design Book Summary',
    titleAr: 'ملخص الفصل الأول من كتاب التصميم التعليمي',
    file: '/carousels/ملخص_الفصل_الاول_من_كتاب_التصميم_التعليمي.pdf',
    Icon: FileText,
    gradient: 'from-slate-500 via-gray-600 to-zinc-700',
  },
  {
    title: 'HunyuanVideo Model',
    titleAr: 'نموذج HunyuanVideo',
    file: '/carousels/نموذج_HunyuanVideo.pdf',
    Icon: Video,
    gradient: 'from-red-500 via-orange-500 to-amber-500',
  },
];

const Carousels = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <section 
      id="carousels" 
      className="py-20 bg-muted/30"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {isArabic ? (
              <>
                <span className="text-primary">{t('carousels.titleHighlight')}</span> {t('carousels.title')}
              </>
            ) : (
              <>
                {t('carousels.title')} <span className="text-primary">{t('carousels.titleHighlight')}</span>
              </>
            )}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('carousels.subtitle')}
          </p>
        </div>

        <div className="px-12">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {carousels.map((item, index) => {
                const IconComponent = item.Icon;
                return (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card 
                      className={`group h-full bg-card border-border hover:shadow-xl transition-all duration-500 overflow-hidden rounded-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {/* Gradient Header with Icon */}
                      <div className={`h-40 bg-gradient-to-br ${item.gradient} relative overflow-hidden`}>
                        {/* Animated Background Pattern */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute top-4 left-4 w-20 h-20 rounded-full bg-white/20 blur-xl group-hover:scale-150 transition-transform duration-700" />
                          <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full bg-white/10 blur-2xl group-hover:scale-125 transition-transform duration-700" />
                        </div>
                        
                        {/* Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-white/30 shadow-lg">
                            <IconComponent className="w-10 h-10 text-white drop-shadow-lg" />
                          </div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                      </div>

                      <CardHeader className="space-y-2 pt-4">
                        <CardTitle className="text-lg text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                          {isArabic ? item.titleAr : item.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground" dir={isArabic ? 'ltr' : 'rtl'}>
                          {isArabic ? item.title : item.titleAr}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() => window.open(item.file, '_blank')}
                        >
                          <Download className="w-4 h-4 me-2" />
                          {t('carousels.download')}
                        </Button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="start-0" />
            <CarouselNext className="end-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Carousels;
