import { motion } from 'framer-motion';
const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    },
  };

  const projects = [
    {
      title: 'AI Technical Tutor',
      description: 'Interactive full-stack learning platform built with a React frontend and FastAPI backend connected to OpenRouter and local Ollama LLM models.',
      technologies: ['React', 'FastAPI', 'Python', 'OpenRouter', 'Ollama', 'Tailwind CSS'],
      image: 'https://via.placeholder.com/640x420/4f46e5/ffffff?text=AI+Technical+Tutor',
      live: '#',
      github: '#'
    },
    {
      title: 'Healthcare Booking Platform (Flebo.in)',
      description: 'Engineered core Modify Booking modules and state management workflows using React and Redux Toolkit for healthcare diagnostics.',
      technologies: ['React', 'Redux Toolkit', 'JavaScript', 'Tailwind CSS', 'REST APIs'],
      image: 'https://via.placeholder.com/640x420/7c3aed/ffffff?text=Healthcare+Aggregator',
      live: '#',
      github: '#'
    },
    {
      title: 'Full-Stack Portfolio AI Avatar',
      description: 'Interactive developer portfolio featuring a custom conversational AI assistant that dynamically queries background, skills, and project data.',
      technologies: ['React', 'FastAPI', 'Python', 'Gemini API', 'Tailwind CSS'],
      image: '/portfolio.png', // Quoted string path to public/portfolio.png
      live: '#',
      github: 'https://github.com/ujjwal-0927/FullStack-Portfolio'
    },
    {
      title: 'Merchant Checkout & Settlement Engine',
      description: 'Integrated Cashfree payment processing workflows and transaction dashboards for web e-commerce management.',
      technologies: ['React', 'Node.js', 'Cashfree API', 'Express', 'Tailwind CSS'],
      image: 'https://via.placeholder.com/640x420/059669/ffffff?text=Merchant+Checkout',
      live: '#',
      github: '#'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="bg-slate-950 py-16 sm:pt-20 ">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">Featured Projects</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl leading-tight">
            Full-stack architectures & AI integrations.
          </h2>
        </motion.div>
        
        {/* Animated Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-8 lg:grid-cols-2"
        >
          {projects.map((project, index) => (
            <motion.article 
              key={index} 
              variants={cardVariants}
              className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-2xl shadow-indigo-950/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 flex flex-col justify-between"
            >
              <div>
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>

                <div className="space-y-4 p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                      Featured
                    </span>
                    <div className="flex gap-2">
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="rounded-xl border border-slate-700/60 bg-slate-800/80 px-3.5 py-1.5 text-xs font-semibold text-slate-200 transition hover:bg-slate-700 hover:text-white"
                      >
                        Live
                      </a>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="rounded-xl bg-indigo-600 px-3.5 py-1.5 text-xs font-semibold text-white transition hover:bg-indigo-500 shadow-md shadow-indigo-600/20"
                      >
                        Code
                      </a>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-400">{project.description}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="rounded-lg border border-slate-700/50 bg-slate-800/50 px-2.5 py-1 text-[11px] font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="inline-flex rounded-2xl border border-slate-700 bg-slate-900 px-8 py-4 text-sm font-semibold text-slate-200 shadow-lg transition hover:border-slate-600 hover:bg-slate-800"
          >
            Want to build something together? Reach out!
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;