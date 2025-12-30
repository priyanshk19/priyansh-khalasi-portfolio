import { useState } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  // Languages
  { name: "JavaScript", level: 85, category: "Languages" },
  { name: "Python", level: 75, category: "Languages" },
  { name: "PHP", level: 80, category: "Languages" },
  { name: "ASP.NET", level: 75, category: "Languages" },
  { name: "C/C++", level: 70, category: "Languages" },
  // Web Technologies
  { name: "React.js", level: 85, category: "Web Technologies" },
  { name: "HTML/CSS", level: 90, category: "Web Technologies" },
  { name: "MVC", level: 75, category: "Web Technologies" },
  { name: "Web API", level: 70, category: "Web Technologies" },
  // Database
  { name: "MySQL", level: 85, category: "Database" },
  { name: "MongoDB", level: 70, category: "Database" },
  { name: "Oracle DB", level: 65, category: "Database" },
  { name: "SQL Server", level: 75, category: "Database" },
  // Tools
  { name: "Git/GitHub", level: 80, category: "Tools" },
  { name: "AI Tools", level: 75, category: "Tools" },
];

const categories = ["All", "Languages", "Web Technologies", "Database", "Tools"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative">
      {/* Section divider */}
      <div className="divider-glow mb-24" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            <span className="text-primary">My</span> Skills
          </h2>
          <div className="divider-glow w-24 mx-auto mb-8" />
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications, from
            frontend interfaces to backend systems and databases.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-display text-sm uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground box-glow"
                  : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  return (
    <div
      className="card-sci-fi p-6 group hover:border-glow box-glow-hover transition-all duration-300"
      style={{
        opacity: 0,
        animation: "fade-in 0.5s ease-out forwards",
        animationDelay: `${index * 0.05}s`,
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
          {skill.name}
        </h3>
        <span className="font-display text-sm text-primary">{skill.level}%</span>
      </div>

      {/* Progress Bar */}
      <div className="skill-bar">
        <div
          className="skill-bar-fill transition-all duration-1000 ease-out"
          style={{
            width: `${skill.level}%`,
            animation: `grow-width 1s ease-out ${index * 0.05}s forwards`,
          }}
        />
      </div>

      {/* Category Badge */}
      <span className="inline-block mt-3 text-xs font-body text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
        {skill.category}
      </span>

      <style>{`
        @keyframes grow-width {
          from { width: 0%; }
          to { width: ${skill.level}%; }
        }
      `}</style>
    </div>
  );
};

export default SkillsSection;
