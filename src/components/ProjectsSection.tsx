import { Github, ShoppingBag, ShoppingCart, Dumbbell } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: typeof ShoppingBag;
  gradient: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "Ragnar Footwear",
    description:
      "An Online Footwear Store for managing customer accounts, footwear inventory, and online product purchasing with a seamless shopping experience.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    icon: ShoppingBag,
    gradient: "from-violet-500/20 to-purple-500/10",
    githubUrl: "https://github.com/priyansh-khalasi/Ragnar-Footwear",
  },
  {
    title: "Shopping Store",
    description:
      "A full-stack Online Shopping Store application for managing customer accounts, clothing inventory, and secure online transactions.",
    technologies: ["React", ".NET Framework", "SQL Server"],
    icon: ShoppingCart,
    gradient: "from-cyan-500/20 to-blue-500/10",
    githubUrl: "https://github.com/priyansh-khalasi/Shopping-Store",
  },
  {
    title: "GYM Management System",
    description:
      "A comprehensive Gym Management System for handling member profiles, trainer assignments, workout plans, class schedules, and membership payments.",
    technologies: ["JSF", "EJB", "CDI", "JPA", "MySQL"],
    icon: Dumbbell,
    gradient: "from-emerald-500/20 to-teal-500/10",
    githubUrl: "https://github.com/priyansh-khalasi/GYM-Management-System",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="section-title mb-4">
            Featured <span className="text-primary text-glow">Projects</span>
          </h2>
          <div className="divider-cosmic w-24 mx-auto mb-8" />
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            A showcase of full-stack projects demonstrating modern development capabilities
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <div
      className="glass-card group hover:border-primary/30 transition-all duration-500 overflow-hidden"
      style={{
        opacity: 0,
        animation: `fadeInUp 0.6s ease-out ${index * 0.15}s forwards`,
      }}
    >
      {/* Card Header with Gradient */}
      <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
        
        <div className="relative z-10 w-20 h-20 rounded-2xl bg-background/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
          <project.icon className="w-10 h-10 text-foreground" />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-muted-foreground font-body text-sm mb-5 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-body bg-secondary/30 text-muted-foreground rounded-full hover:text-primary transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 text-xs font-body text-muted-foreground">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action Button */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full btn-cosmic py-2.5 text-xs flex items-center justify-center gap-2"
        >
          <Github size={14} />
          View Code
        </a>
      </div>
    </div>
  );
};

export default ProjectsSection;
