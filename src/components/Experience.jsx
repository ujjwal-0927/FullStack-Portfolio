const Experience = () => {
  const experiences = [
    {
      company: 'SpiceJet Pvt Ltd (Interactive12)',
      role: 'Software Developer',
      // duration: '2025 - Present',
      description: 'Engineered high-performance React architectures and integrated backend modules for digital platforms like Flebo.in. Focused on performance optimization, state management with Redux, and reliable full-stack web workflows.',
      technologies: ['React', 'Redux Toolkit', 'JavaScript', 'Node.js', 'FastAPI', 'Tailwind CSS']
    },
    {
      company: 'Dhani Loans and Services',
      role: 'Python Developer',
      // duration: '2023 - 2025',
      description: 'Developed scalable financial dashboards and loan management interfaces using React, Node.js, and TypeScript, delivering secure workflows and seamless user experiences.',
      technologies: ['React', 'TypeScript', 'Node.js', 'REST APIs', 'Tailwind CSS']
    }
  ];

  return (
    <section id="experience" className="bg-slate-950 pt-20 sm:pt-20 ">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">Experience</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl leading-tight">
            Professional milestones & full-stack product engineering.
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 shadow-2xl shadow-indigo-950/20 backdrop-blur-sm transition-all duration-300 hover:border-slate-700"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">{exp.company}</p>
                  <h3 className="mt-1 text-2xl font-bold text-slate-100">{exp.role}</h3>
                </div>
              </div>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-400">{exp.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="rounded-xl border border-slate-700/50 bg-slate-800/60 px-3.5 py-1.5 text-xs font-medium text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;