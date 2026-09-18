const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack marketplace built with React, Node.js, and MongoDB, featuring polished checkout flows and admin analytics.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      image: 'https://via.placeholder.com/640x420/667eea/ffffff?text=E-Commerce',
      live: '#',
      github: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaboration platform with real-time board updates, permission controls, and productivity workflows built in TypeScript.',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind'],
      image: 'https://via.placeholder.com/640x420/764ba2/ffffff?text=Task+App',
      live: '#',
      github: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive dashboard that delivers weather insights via API integrations, charts, and adaptive alerts.',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS Grid'],
      image: 'https://via.placeholder.com/640x420/06b6d4/ffffff?text=Weather',
      live: '#',
      github: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'This portfolio demonstrates polished UI, responsive layout, and motion-driven interactions built with React.',
      technologies: ['React', 'CSS3', 'Framer Motion'],
      image: 'https://via.placeholder.com/640x420/10b981/ffffff?text=Portfolio',
      live: '#',
      github: '#'
    }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Projects</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Selected work that demonstrates craftsmanship.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article key={index} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950/5 shadow-sm shadow-slate-200/50 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
              <div className="space-y-4 p-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                    Featured
                  </span>
                  <div className="flex gap-3">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                      Live
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-200 bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-900">
                      Code
                    </a>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-slate-950">{project.title}</h3>
                  <p className="text-slate-600">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="inline-flex rounded-full bg-slate-950 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800"
          >
            More Projects Coming Soon
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;