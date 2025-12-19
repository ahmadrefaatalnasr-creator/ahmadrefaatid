import { Mail, MapPin, Linkedin, FileText, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ahmadrefaatalnasr@gmail.com',
      link: 'mailto:ahmadrefaatalnasr@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Egypt',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://linkedin.com/in/ahmed-refaat',
    },
    {
      icon: Globe,
      label: 'Website',
      value: 'ahmadrefaat.me',
      link: 'https://www.ahmadrefaat.me',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Get In Touch
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Interested in collaborating or learning more about my work? I'd love to hear from you!
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-semibold mb-2 text-primary">{item.label}</h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-muted-foreground hover:text-accent transition-colors text-sm break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.value}</p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
              onClick={() => window.open('mailto:ahmadrefaatalnasr@gmail.com')}
            >
              <Mail className="mr-2 w-5 h-5" />
              Send me an email
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="ml-4 font-semibold px-8"
            >
              <FileText className="mr-2 w-5 h-5" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;