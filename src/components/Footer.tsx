import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 relative">
      {/* Top divider */}
      <div className="divider-glow mb-12" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="font-display text-xl font-bold tracking-wider text-glow inline-block mb-2">
              <span className="text-primary">P</span>K
            </a>
            <p className="text-sm text-muted-foreground font-body">
              © {currentYear} Priyansh Khalasi. All rights reserved.
            </p>
          </div>

          {/* Made with love */}
          <p className="text-sm text-muted-foreground font-body flex items-center gap-1">
            Built with <Heart size={14} className="text-primary fill-primary" /> and lots of code
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:priyanshkhalasi793@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
