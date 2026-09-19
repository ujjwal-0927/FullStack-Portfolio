const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend Engineering',
      description: 'Building fast, responsive, and component-driven user interfaces.',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Redux Toolkit', 'Tailwind CSS', 'HTML5 / CSS3']
    },
    {
      category: 'Backend & AI Systems',
      description: 'Developing resilient APIs, serverless functions, and LLM integrations.',
      skills: ['Python', 'FastAPI', 'Node.js', 'Express', 'LLM Prompt Engineering', 'RAG Pipelines', 'OpenRouter & Ollama']
    },
    {
      category: 'Databases & Tools',
      description: 'Managing data storage, version control, and web environments.',
      skills: ['MongoDB', 'PostgreSQL', 'Vector Databases', 'Git & GitHub', 'VS Code', 'Vercel', 'Postman']
    }
  ];

  return (
    <section id="skills" className="bg-slate-950 pt-20 sm:pt-20 ">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">Technical Skills</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl leading-tight">
            Tools & technologies powering my web apps.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 shadow-2xl shadow-indigo-950/20 backdrop-blur-sm transition-all duration-300 hover:border-slate-700 hover:-translate-y-1"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
                  {category.category}
                </h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  {category.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="rounded-xl border border-slate-700/60 bg-slate-800/60 px-3 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;