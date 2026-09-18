const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 85 },
        { name: 'Next.js', level: 88 }
      ]
    },
    {
      category: 'Styling',
      skills: [
        { name: 'Tailwind CSS', level: 92 },
        { name: 'SASS/SCSS', level: 85 }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 80 }
      ]
    },
    {
      category: 'Database',
      skills: [
        { name: 'MongoDB', level: 70 },
        { name: 'PostgreSQL', level: 75 }
      ]
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'VS Code', level: 95 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Skills</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Tools and technologies I use every day.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div key={index} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/50">
              <h3 className="text-xl font-semibold text-slate-950">{category.category}</h3>
              <div className="mt-6 space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex items-center justify-between text-sm font-medium text-slate-700">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-sky-500 via-cyan-500 to-sky-400"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
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