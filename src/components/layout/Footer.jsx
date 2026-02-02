import SocialLinks from '../ui/SocialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--glass-border)]">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">Surya Saketh Varma Mandapati</h3>
            <p className="text-[var(--text-muted)]">Building the future, one line at a time.</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#home" className="text-[var(--text-secondary)] hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-[var(--text-secondary)] hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-[var(--text-secondary)] hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-[var(--text-secondary)] hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Links */}
          <SocialLinks size="small" />
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-[var(--glass-border)] text-center">
          <p className="text-[var(--text-muted)]">
            © {currentYear} Surya Saketh Varma Mandapati. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
