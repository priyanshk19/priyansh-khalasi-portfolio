import { GraduationCap, Award, Code2, Target } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "M.Sc. IT (Pursuing) from VNSGU",
    },
    {
      icon: Code2,
      title: "Full Stack",
      description: "Frontend & Backend Development",
    },
    {
      icon: Award,
      title: "Certified",
      description: "IIT Bombay Certifications",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "High-impact software projects",
    },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="section-title mb-4">
            About <span className="text-primary text-glow">Me</span>
          </h2>
          <div className="divider-cosmic w-24 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Bio Card */}
          <div className="glass-card p-8 md:p-10">
            <h3 className="font-display text-2xl font-semibold text-primary mb-6">
              Who I Am
            </h3>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                I'm an aspiring software developer and M.Sc. IT student with a
                strong passion for building modern, user-focused solutions.
                Currently pursuing my Master's degree at VNSGU, I combine
                academic knowledge with practical development experience.
              </p>
              <p>
                With expertise in both front-end and back-end development, I
                enjoy creating seamless digital experiences. My journey in tech
                has equipped me with skills in React.js, .NET, PHP, and various
                database technologies.
              </p>
            </div>

            {/* Education Timeline */}
            <div className="mt-8 pt-8 border-t border-border/30">
              <h4 className="font-display text-sm text-muted-foreground uppercase tracking-wider mb-6">
                Education
              </h4>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-display text-sm text-primary">2024 - Present</p>
                    <p className="font-body text-foreground">M.Sc. Information Technology</p>
                    <p className="text-sm text-muted-foreground">VNSGU</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-display text-sm text-accent">2021 - 2024</p>
                    <p className="font-body text-foreground">B.Sc. Information Technology</p>
                    <p className="text-sm text-muted-foreground">VNSGU</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-500"
                style={{ 
                  opacity: 0,
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1 + 0.2}s forwards`
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-500">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
