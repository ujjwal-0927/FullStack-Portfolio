import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'SpiceJet Pvt Ltd (Interactive12)',
    role: 'Software Developer',
    impactMetrics: ['Component Reusability +40%', 'Core Web Vitals Optimized'],
    description: 'Architecting high-throughput React frontends and scalable FastAPI/Node.js backend services powering diagnostic digital platforms like Flebo.in. Driving core architecture design, Redux Toolkit state synchronization, and real-time streaming integrations.',
    technologies: ['React', 'Redux Toolkit', 'TypeScript', 'FastAPI', 'Node.js', 'System Architecture', 'Tailwind CSS', 'WebSockets']
  },
  {
    company: 'Dhani Loans and Services',
    role: 'Python Developer',
    impactMetrics: ['Zero-Downtime Microservices', 'Secure API Gateway'],
    description: 'Engineered high-concurrency financial dashboards and secure loan processing interfaces. Built resilient RESTful microservices in Python, established end-to-end type safety with TypeScript, and automated database interactions for mission-critical workflows.',
    technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'RESTful APIs', 'Microservices', 'Node.js', 'MySQL']
  }
];

const Experience = () => (
  <section id="experience" className="border-b border-paper/10 bg-ink px-6 py-14 text-paper sm:px-8 lg:px-12 lg:py-16">
    <div className="mx-auto max-w-7xl">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">02 — Experience</p>
      <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_0.55fr]">
        <h2 className="font-display text-4xl leading-[0.98] tracking-tight sm:text-5xl">A practice built on depth, not noise.</h2>
        <p className="max-w-md self-end text-sm leading-relaxed text-paper/60">From financial services to diagnostic platforms, I work across the stack where product decisions meet system constraints.</p>
      </div>
      <div className="mt-9 border-t border-paper/20">
        {experiences.map((experience, index) => (
          <motion.article key={experience.company} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="grid gap-4 border-b border-paper/20 py-6 lg:grid-cols-[0.25fr_0.75fr]">
            <div className="font-mono text-xs text-paper/50"><span className="text-accent">0{index + 1}</span> / {experience.company}</div>
            <div>
              <div className="flex flex-col justify-between gap-3 sm:flex-row">
                <h3 className="font-display text-2xl">{experience.role}</h3>
                <div className="flex flex-wrap gap-2 font-mono text-[11px] text-accent">{experience.impactMetrics.map((metric) => <span key={metric}>{metric}</span>)}</div>
              </div>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-paper/60">{experience.description}</p>
              <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-[11px] text-paper/50">{experience.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
