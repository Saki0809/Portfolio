const skillsData = {
  frontend: [
    { name: 'React.js', icon: '⚛️', level: 90 },
    { name: 'JavaScript', icon: '🟨', level: 85 },
    { name: 'TypeScript', icon: '🔷', level: 75 },
    { name: 'HTML/CSS', icon: '🎨', level: 95 },
    { name: 'Tailwind CSS', icon: '💨', level: 90 },
    { name: 'Next.js', icon: '▲', level: 80 },
  ],
  backend: [
    { name: 'Node.js', icon: '💚', level: 80 },
    { name: 'Python', icon: '🐍', level: 85 },
    { name: 'FastAPI', icon: '⚡', level: 75 },
    { name: 'PostgreSQL', icon: '🐘', level: 80 },
    { name: 'MongoDB', icon: '🍃', level: 75 },
    { name: 'Firebase', icon: '🔥', level: 70 },
  ],
  tools: [
    { name: 'Git', icon: '🔀', level: 90 },
    { name: 'Docker', icon: '🐳', level: 70 },
    { name: 'VS Code', icon: '💙', level: 95 },
    { name: 'Figma', icon: '🎯', level: 65 },
    { name: 'Linux', icon: '🐧', level: 75 },
    { name: 'Vercel', icon: '◆', level: 85 },
  ],
};

const SkillCard = ({ name, icon, level }) => (
  <div className="card p-4 group cursor-pointer">
    <div className="flex items-center gap-3 mb-3">
      <span className="text-2xl">{icon}</span>
      <span className="font-medium">{name}</span>
    </div>
    <div className="h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full transition-all duration-500 group-hover:shadow-lg group-hover:shadow-[var(--accent-primary)]/30"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

const Skills = () => {
  const categories = [
    { key: 'frontend', label: 'Frontend', icon: '🎨' },
    { key: 'backend', label: 'Backend', icon: '⚙️' },
    { key: 'tools', label: 'Tools & Others', icon: '🛠️' },
  ];

  return (
    <section id="skills" className="section bg-[var(--bg-secondary)]">
      <div className="container mx-auto">
        <h2 className="section-title">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="section-subtitle">
          Technologies and tools I work with
        </p>

        <div className="space-y-12">
          {categories.map(({ key, label, icon }) => (
            <div key={key}>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span>{icon}</span>
                {label}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {skillsData[key].map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
