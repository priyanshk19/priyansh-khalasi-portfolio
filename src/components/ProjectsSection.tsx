import { ExternalLink, Github, Layers } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  icon: typeof Layers;
}

const projects: Project[] = [
  {
    title: "Ragnar Footwear",
    description:
      "An Online Footwear Store for managing customer accounts, footwear inventory, and online product purchasing with a seamless shopping experience.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    features: [
      "Customer Account Management",
      "Inventory Tracking",
      "Online Purchasing",
    ],
    icon: Layers,
  },
  {
    title: "Shopping Store",
    description:
      "A full-stack Online Shopping Store application for managing customer accounts, clothing inventory, and secure online transactions.",
    technologies: ["React", ".NET Framework", "SQL Server"],
    features: ["React Frontend", ".NET Backend", "Database Integration"],
    icon: Layers,
  },
  {
    title: "GYM Management System",
    description:
      "A comprehensive Gym Management System for handling member profiles, trainer assignments, workout plans, class schedules, and membership payments.",
    technologies: ["JSF", "EJB", "CDI", "JPA", "MySQL", "Payara Server"],
    features: [
      "Member Management",
      "Workout Planning",
      "Payment Processing",
    ],
    icon: Layers,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Section divider */}
      <div className="divider-glow mb-24" />

      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            <span className="text-primary">Featured</span> Projects
          </h2>
          <div className="divider-glow w-24 mx-auto mb-8" />
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            A showcase of projects demonstrating full-stack development
            capabilities, from e-commerce platforms to management systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <div
      className="card-sci-fi group gradient-border overflow-hidden transition-all duration-500 hover:-translate-y-2"
      style={{
        opacity: 0,
        animation: "fade-in-up 0.6s ease-out forwards",
        animationDelay: `${index * 0.15}s`,
      }}
    >
      {/* Card Header with Icon */}
      <div className="relative h-48 bg-gradient-to-br from-secondary to-background flex items-center justify-center overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern bg-[size:20px_20px] opacity-20" />
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Icon */}
        <div className="relative z-10 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
          <project.icon className="w-10 h-10 text-primary" />
        </div>

        {/* Scan line effect */}
        <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-scan-line" />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-muted-foreground font-body text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Features */}
        <div className="mb-4">
          <ul className="space-y-1">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="text-xs text-muted-foreground flex items-center gap-2"
              >
                <span className="w-1 h-1 bg-primary rounded-full" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-body bg-secondary/50 text-muted-foreground rounded border border-border/50 hover:border-primary/50 hover:text-primary transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 btn-neon py-2 text-xs flex items-center justify-center gap-2">
            <Github size={14} />
            Code
          </button>
          <button className="flex-1 btn-neon-filled py-2 text-xs flex items-center justify-center gap-2">
            <ExternalLink size={14} />
            Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
