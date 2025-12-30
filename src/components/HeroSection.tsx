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
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-30" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, hsl(220 50% 15% / 0.4) 0%, transparent 60%)",
        }}
      />
      
      {/* Fog Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent" />

      {/* Lightning Cracks */}
      <div className="absolute top-1/4 right-1/4 w-px h-32 bg-gradient-to-b from-primary/60 via-primary/20 to-transparent rotate-12 animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/3 w-px h-24 bg-gradient-to-b from-accent/40 via-accent/10 to-transparent -rotate-6 animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Pre-title */}
          <p
            className="text-muted-foreground font-body text-lg md:text-xl mb-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Hello, I'm
          </p>

          {/* Name */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-wider mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="text-glow animate-flicker">PRIYANSH</span>
            <br />
            <span className="text-foreground">KHALASI</span>
          </h1>

          {/* Role */}
          <div
            className="flex items-center justify-center gap-4 mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <span className="divider-glow w-12 md:w-24" />
            <h2 className="text-xl md:text-2xl font-display uppercase tracking-[0.3em] text-primary">
              Software Developer
            </h2>
            <span className="divider-glow w-12 md:w-24" />
          </div>

          {/* Tagline */}
          <p
            className="text-muted-foreground font-body text-lg md:text-xl max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            Building modern, user-focused solutions with passion for crafting
            exceptional digital experiences
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            <a href="#projects" className="btn-neon-filled">
              View Projects
            </a>
            <a href="#contact" className="btn-neon">
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div
            className="flex items-center justify-center gap-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "1.2s" }}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:priyanshkhalasi793@gmail.com"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={handleScrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float cursor-pointer"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
