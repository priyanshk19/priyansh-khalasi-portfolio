import { GraduationCap, Award, Code2, Target } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "M.Sc. Information Technology (Pursuing) from VNSGU",
    },
    {
      icon: Code2,
      title: "Full Stack",
      description: "Frontend & Backend Development with modern technologies",
    },
    {
      icon: Award,
      title: "Certified",
      description: "PHP, MySQL, JavaScript & C Programming from IIT Bombay",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Contributing to high-impact software projects",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      {/* Section divider */}
      <div className="divider-glow mb-24" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            <span className="text-primary">About</span> Me
          </h2>
          <div className="divider-glow w-24 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Bio Card */}
          <div className="card-sci-fi p-8 gradient-border">
            <div className="mb-6">
              <h3 className="font-display text-2xl font-bold text-primary mb-4">
                Who I Am
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                I'm an aspiring software developer and M.Sc. IT student with a
                strong passion for building modern, user-focused solutions.
                Currently pursuing my Master's degree at VNSGU, I combine
                academic knowledge with practical development experience.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                With expertise in both front-end and back-end development, I
                enjoy creating seamless digital experiences. My journey in tech
                has equipped me with skills in React.js, .NET, PHP, and various
                database technologies. I'm always eager to learn and contribute
                to innovative projects in dynamic tech environments.
              </p>
            </div>

            {/* Education Timeline */}
            <div className="border-l-2 border-primary/30 pl-4 space-y-4">
              <div>
                <p className="font-display text-sm text-primary">
                  2024 - Present
                </p>
                <p className="font-body text-foreground">
                  M.Sc. Information Technology
                </p>
                <p className="text-sm text-muted-foreground">VNSGU</p>
              </div>
              <div>
                <p className="font-display text-sm text-primary">2021 - 2024</p>
                <p className="font-body text-foreground">
                  B.Sc. Information Technology
                </p>
                <p className="text-sm text-muted-foreground">VNSGU</p>
              </div>
            </div>
          </div>

          {/* Right Side - Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="card-sci-fi p-6 group hover:border-glow box-glow-hover transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
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
