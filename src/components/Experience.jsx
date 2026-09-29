import { motion } from 'framer-motion';
import { FaBriefcase, FaLayerGroup, FaCodeBranch, FaServer, FaChartLine } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      company: 'SpiceJet Pvt Ltd (Interactive12)',
      role: 'Software Developer',
      // duration: '2025 - Present',
      impactMetrics: ['Component Reusability +40%', 'Core Web Vitals Optimized'],
      description: 'Architecting high-throughput React frontends and scalable FastAPI/Node.js backend services powering diagnostic digital platforms like Flebo.in. Driving core architecture design, Redux Toolkit state synchronization, and real-time streaming integrations.',
      technologies: ['React', 'Redux Toolkit', 'TypeScript', 'FastAPI', 'Node.js', 'System Architecture', 'Tailwind CSS', 'WebSockets']
    },
    {
      company: 'Dhani Loans and Services',
      role: 'Python Developer',
      // duration: '2023 - 2025',
      impactMetrics: ['Zero-Downtime Microservices', 'Secure API Gateway'],
      description: 'Engineered high-concurrency financial dashboards and secure loan processing interfaces. Built resilient RESTful microservices in Python, established end-to-end type safety with TypeScript, and automated database interactions for mission-critical workflows.',
      technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'RESTful APIs', 'Microservices', 'Node.js', 'MySQL']
    }
  ];

  return (
    <section id="experience" className="relative bg-slate-950  pb-20 overflow-hidden">
      
      {/* Background Accent Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Header & Senior Overview Bar */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7 max-w-2xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
              Leadership & Career Milestones
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl lg:text-5xl leading-tight">
              Engineering scalable platforms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">enterprise web architectures</span>.
            </h2>
          </motion.div>

          {/* Quick Stats Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-3"
          >
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-md">
              <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Engineering Depth</p>
              <p className="mt-1 text-sm font-bold text-indigo-300 flex items-center gap-1.5">
                <FaServer className="text-indigo-400 text-xs" /> Full-Stack & AI
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-md">
              <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Core Methodology</p>
              <p className="mt-1 text-sm font-bold text-purple-300 flex items-center gap-1.5">
                <FaCodeBranch className="text-purple-400 text-xs" /> Clean & Modular
              </p>
            </div>
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-800/80 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative group"
            >
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-7 flex h-6 w-6 items-center justify-center rounded-full border border-indigo-500/50 bg-slate-950 text-indigo-400 group-hover:border-indigo-400 group-hover:scale-110 transition duration-300 shadow-lg shadow-indigo-500/20">
                <div className="h-2 w-2 rounded-full bg-indigo-500 group-hover:bg-indigo-400" />
              </div>

              {/* Card Container */}
              <div className="overflow-hidden rounded-3xl border border-slate-800/90 bg-slate-900/70 p-6 sm:p-8 shadow-2xl shadow-indigo-950/20 backdrop-blur-md transition-all duration-300 hover:border-indigo-500/40 hover:bg-slate-900/90">
                
                {/* Company & Role Header */}
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between pb-4 border-b border-slate-800/80">
                  <div>
                    <div className="flex items-center gap-2">
                      <FaBriefcase className="text-xs text-indigo-400" />
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                        {exp.company}
                      </p>
                    </div>
                    <h3 className="mt-1.5 text-xl sm:text-2xl font-bold text-slate-100">
                      {exp.role}
                    </h3>
                  </div>

                  {/* High Level Impact Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {exp.impactMetrics.map((metric, mIdx) => (
                      <span 
                        key={mIdx}
                        className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-mono font-medium text-emerald-400"
                      >
                        <FaChartLine className="text-[10px]" /> {metric}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Scope & Description */}
                <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-300">
                  {exp.description}
                </p>

                {/* Tech & Senior Stack Badges */}
                <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800/80">
                  <span className="text-xs font-mono text-slate-500 mr-2 flex items-center gap-1">
                    <FaLayerGroup className="text-slate-600" /> Stack & Domain:
                  </span>
                  {exp.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-xl border border-slate-700/60 bg-slate-800/50 px-3.5 py-1.5 text-xs font-mono font-medium text-slate-300 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-300 transition"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;