import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const carousels = [
  {
    title: 'VR in E-Learning',
    titleAr: 'الواقع الافتراضي في التعليم الإلكتروني',
    file: 'https://drive.google.com/file/d/1xqefZqdoqcEOo27Xhr8NmuAba9qoB1s1/view?usp=drive_link',
  },
  {
    title: 'Storyline 360 Project Tips',
    titleAr: 'إرشاداتك لمشروع مميز في ستوريلاين 360',
    file: '/carousels/ارشاداتك_لمشروع_مميز_في_ستوريلاين_360.pdf',
  },
  {
    title: 'Instructional Design & Data Analysis',
    titleAr: 'التصميم التعليمي وتحليل البيانات',
    file: '/carousels/التصميم_التعليمي_وتحليل_البيانات.pdf',
  },
  {
    title: 'LXD vs ID',
    titleAr: 'الفرق بين LXD و ID',
    file: '/carousels/الفرق_بين_LXD_ID.pdf',
  },
  {
    title: 'Interactive Videos',
    titleAr: 'الفيديوهات التفاعلية',
    file: '/carousels/الفيديوهات_التفاعلية.pdf',
  },
  {
    title: 'Kotobee for Interactive Books',
    titleAr: 'حوّل كتبك التقليدية إلى تجربة تعليمية تفاعلية باستخدام Kotobee',
    file: '/carousels/حوّل_كتبك_التقليدية_إلى_تجربة_تعليمية_تفاعلية_باستخدام_Kotobee.pdf',
  },
  {
    title: 'Prompt Engineering in ID',
    titleAr: 'فن هندسة الأوامر في التصميم التعليمي',
    file: '/carousels/فن_هندسة_الاوامر_في_التصميم_التعليمي.pdf',
  },
  {
    title: 'Instructional Design Book Summary',
    titleAr: 'ملخص الفصل الأول من كتاب التصميم التعليمي',
    file: '/carousels/ملخص_الفصل_الاول_من_كتاب_التصميم_التعليمي.pdf',
  },
  {
    title: 'HunyuanVideo Model',
    titleAr: 'نموذج HunyuanVideo',
    file: '/carousels/نموذج_HunyuanVideo.pdf',
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
              {carousels.map((item, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card 
                    className={`h-full bg-card border-border hover:shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardHeader className="space-y-2">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg text-foreground leading-tight">
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
              ))}
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