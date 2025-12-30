import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const handleScrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Pre-title */}
          <p
            className="text-muted-foreground font-body text-lg md:text-xl mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Hello, I'm
          </p>

          {/* Name */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="text-glow text-primary">Priyansh</span>
            <br />
            <span className="text-foreground">Khalasi</span>
          </h1>

          {/* Role */}
          <div
            className="flex items-center justify-center gap-4 mb-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <span className="divider-cosmic w-12 md:w-20" />
            <h2 className="text-lg md:text-xl font-display tracking-widest text-accent uppercase">
              Software Developer
            </h2>
            <span className="divider-cosmic w-12 md:w-20" />
          </div>

          {/* Tagline */}
          <p
            className="text-muted-foreground font-body text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            Building modern, user-focused solutions with passion for crafting
            exceptional digital experiences
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            <a href="#projects" className="btn-cosmic-filled">
              View Projects
            </a>
            <a href="#contact" className="btn-cosmic">
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div
            className="flex items-center justify-center gap-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1.2s" }}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/30 text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-all duration-500"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/30 text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-all duration-500"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:priyanshkhalasi793@gmail.com"
              className="p-3 rounded-full bg-secondary/30 text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-all duration-500"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={handleScrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-all duration-500 animate-float-slow cursor-pointer"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
};

export default HeroSection;
