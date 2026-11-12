import { motion } from 'framer-motion';

const skillCategories = [
  ['Frontend Engineering', 'Building fast, responsive, and component-driven user interfaces.', ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Redux Toolkit', 'Tailwind CSS', 'HTML5 / CSS3']],
  ['Backend & AI Systems', 'Developing resilient APIs, serverless functions, and LLM integrations.', ['Python', 'FastAPI', 'Node.js', 'Express', 'LLM Prompt Engineering', 'RAG Pipelines', 'OpenRouter & Ollama']],
  ['System Design & Architecture', 'Designing scalable microservices, async workflows, and distributed systems.', ['System Design', 'REST & WebSockets', 'Microservices Architecture', 'API Gateway Design', 'Scalability & Performance']],
  ['Cloud, Databases & Tools', 'Managing cloud deployments, data storage, and version control.', ['AWS', 'MongoDB', 'PostgreSQL', 'Vector Databases', 'Git & GitHub', 'Vercel', 'Docker', 'Postman']]
];

const Skills = () => (
  <section id="skills" className="border-b border-paper/10 bg-[#24221F] px-6 py-14 text-paper sm:px-8 lg:px-12 lg:py-16">
    <div className="mx-auto max-w-7xl">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">03 — Tools</p>
      <h2 className="mt-3 max-w-2xl font-display text-4xl leading-[0.98] tracking-tight sm:text-5xl">The working set behind the work.</h2>
      <div className="mt-9 grid border-t border-paper/20 md:grid-cols-2 md:divide-x md:divide-paper/20">
        {skillCategories.map(([category, description, skills], index) => (
          <motion.article key={category} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="border-b border-paper/20 p-6 first:pl-0 md:even:pl-10">
            <p className="font-mono text-xs text-accent">0{index + 1}</p>
            <h3 className="mt-3 font-display text-2xl">{category}</h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-paper/60">{description}</p>
            <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-[11px] text-paper/50">
              {skills.map((skill) => <span key={skill} className="border-b border-rule pb-1 transition-colors hover:border-accent hover:text-accent">{skill}</span>)}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
