import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Ahmed. {t('footer.rights')}
        </p>
        <p className="text-xs mt-2 opacity-80">
          {t('footer.title')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;