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

const carousels = [
  {
    title: 'VR in E-Learning',
    titleAr: 'الواقع الافتراضي في التعليم الإلكتروني',
    file: '/carousels/VR_in_Elearning.pdf',
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
  return (
    <section id="carousels" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Knowledge <span className="text-primary">Carousels</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Educational resources and insights I've created to share knowledge in the e-learning community
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
                  <Card className="h-full bg-card border-border hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="space-y-2">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg text-foreground leading-tight">
                        {item.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground font-arabic" dir="rtl">
                        {item.titleAr}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => window.open(item.file, '_blank')}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        View / Download
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Carousels;
