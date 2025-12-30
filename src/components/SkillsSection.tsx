import { useState } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: "JavaScript", level: 85, category: "Languages" },
  { name: "Python", level: 75, category: "Languages" },
  { name: "PHP", level: 80, category: "Languages" },
  { name: "ASP.NET", level: 75, category: "Languages" },
  { name: "C/C++", level: 70, category: "Languages" },
  { name: "React.js", level: 85, category: "Web Technologies" },
  { name: "HTML/CSS", level: 90, category: "Web Technologies" },
  { name: "MVC", level: 75, category: "Web Technologies" },
  { name: "Web API", level: 70, category: "Web Technologies" },
  { name: "MySQL", level: 85, category: "Database" },
  { name: "MongoDB", level: 70, category: "Database" },
  { name: "Oracle DB", level: 65, category: "Database" },
  { name: "SQL Server", level: 75, category: "Database" },
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
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="section-title mb-4">
            My <span className="text-primary text-glow">Skills</span>
          </h2>
          <div className="divider-cosmic w-24 mx-auto mb-8" />
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full font-display text-sm tracking-wide transition-all duration-500 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary/30 text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
              style={{
                boxShadow: activeCategory === category ? "var(--glow-primary)" : "none"
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
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
      className="glass-card p-6 group hover:border-primary/30 transition-all duration-500"
      style={{
        opacity: 0,
        animation: `fadeInUp 0.5s ease-out ${index * 0.05}s forwards`,
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-medium text-foreground group-hover:text-primary transition-colors duration-300">
          {skill.name}
        </h3>
        <span className="font-display text-sm text-primary">{skill.level}%</span>
      </div>

      {/* Progress Bar */}
      <div className="progress-cosmic">
        <div
          className="progress-cosmic-fill"
          style={{
            width: "0%",
            animation: `growWidth 1s ease-out ${index * 0.05 + 0.3}s forwards`,
          }}
        />
      </div>

      <style>{`
        @keyframes growWidth {
          from { width: 0%; }
          to { width: ${skill.level}%; }
        }
      `}</style>
    </div>
  );
};

export default SkillsSection;
