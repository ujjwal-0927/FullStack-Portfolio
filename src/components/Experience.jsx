const Experience = () => {
  const experiences = [
    {
      company: 'Spicejet Pvt Ltd (Interactive12)',
      role: 'Software Developer',
      duration: '2025 - Present',
      description: 'Led development of scalable React applications for a healthcare platform, improved performance, and guided junior engineers on CI/CD best practices.',
      technologies: ['React', 'Redux', 'JavaScript', 'Node.js']
    },
    {
      company: 'Dhani Loans and Services',
      role: 'Frontend Developer',
      duration: '2023 - 2025',
      description: 'Built loan management interfaces with React and Node.js, delivering secure workflows and a polished user experience for financial customers.',
      technologies: ['React', 'Node.js', 'Angular', 'TypeScript']
    }
  ];

  return (
    <section id="experience" className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Experience</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Professional milestones & impactful product work.
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/50">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{exp.company}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-950">{exp.role}</h3>
                </div>
                <span className="rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
                  {exp.duration}
                </span>
              </div>

              <p className="mt-6 text-base leading-7 text-slate-600">{exp.description}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">
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