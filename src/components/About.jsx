import { motion } from 'framer-motion';
import { FaBrain, FaCloud, FaCodeBranch, FaCogs } from 'react-icons/fa';

const highlights = [
  ['Frontend Architecture', 'Architecting scalable React/Next.js systems, Redux state management, performance tuning, and highly responsive UIs.', FaCodeBranch],
  ['System Design & Microservices', 'Architecting high-concurrency distributed systems, asynchronous event queues, and resilient API gateways designed for zero downtime.', FaCogs],
  ['AWS Cloud & Infrastructure', 'Deploying cloud-native microservices using AWS services, containerized environments, serverless endpoints, and CI/CD pipelines.', FaCloud],
  ['AI & LLM Orchestration', 'Building hybrid RAG pipelines, multi-agent workspaces, and real-time streaming endpoints with FastAPI, LangChain, & ChromaDB.', FaBrain]
];

const About = () => (
  <section id="about" className="border-b border-rule bg-paper px-6 py-14 sm:px-8 lg:px-12 lg:py-16">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.48fr] lg:items-end">
        <div>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">01 — About</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-[0.98] tracking-tight sm:text-5xl">Systems that are clear, resilient, and built to last.</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute sm:text-base">
          I bridge scalable React/Next.js frontends with distributed FastAPI/Python backends, AWS cloud environments, and streaming LLM pipelines to deliver enterprise-grade systems end-to-end.
        </p>
        </div>
        <div className="border-l-4 border-accent bg-ink p-5 text-paper shadow-[8px_8px_0_0_#D9D4C7]">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">Engineering principle</p>
          <p className="mt-3 font-display text-2xl leading-tight">Make complexity feel simple.</p>
          <p className="mt-2 text-xs leading-relaxed text-paper/60">Clear interfaces, observable systems, and decisions that hold up under change.</p>
        </div>
      </div>
      <div className="mt-9 grid gap-x-8 gap-y-0 border-t border-rule sm:grid-cols-2">
        {highlights.map(([title, description, Icon], index) => (
          <motion.article key={title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="border-b border-rule py-7">
            <div className="flex items-start gap-3">
              <span className="font-mono text-xs text-accent">0{index + 1}</span>
              <div>
                <Icon className="mb-2 text-accent" size={16} />
                <h3 className="font-display text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{description}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default About;
