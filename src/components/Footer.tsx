const Footer = () => {
  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Ahmed. All rights reserved.
        </p>
        <p className="text-xs mt-2 opacity-80">
          Instructional Designer & E-learning Specialist
        </p>
      </div>
    </footer>
  );
};

export default Footer;
