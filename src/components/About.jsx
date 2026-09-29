import { motion } from 'framer-motion';
import { FaBrain, FaCodeBranch, FaServer, FaCloud, FaCogs, FaRocket } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: <FaCodeBranch className="text-purple-400" size={20} />,
      title: 'Frontend Architecture',
      description: 'Architecting scalable React/Next.js systems, Redux state management, performance tuning, and highly responsive UIs.'
    },
    {
      icon: <FaCogs className="text-sky-400" size={20} />,
      title: 'System Design & Microservices',
      description: 'Architecting high-concurrency distributed systems, asynchronous event queues, and resilient API gateways designed for zero downtime.'
    },
    {
      icon: <FaCloud className="text-emerald-400" size={20} />,
      title: 'AWS Cloud & Infrastructure',
      description: 'Deploying cloud-native microservices using AWS services, containerized environments, serverless endpoints, and CI/CD pipelines.'
    },
    
    {
      icon: <FaBrain className="text-indigo-400" size={20} />,
      title: 'AI & LLM Orchestration',
      description: 'Building hybrid RAG pipelines, multi-agent workspaces, and real-time streaming endpoints with FastAPI, LangChain, & ChromaDB.'
    }
  ];

  return (
    <section id="about" className="relative bg-slate-950  pb-20 overflow-hidden">
      
      {/* Background Accent Glows */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12"
      >
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
            Engineering Overview
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl lg:text-5xl leading-tight">
            Designing resilient cloud architectures & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">intelligent AI platforms</span>.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-300 pt-2">
            I bridge scalable React/Next.js frontends with distributed FastAPI/Python backends, AWS cloud environments, and streaming LLM pipelines to deliver enterprise-grade systems end-to-end.
          </p>
        </div>

        {/* Highlights & Architecture Matrix Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-stretch">
          
          {/* Left Column: Core Domain Capabilities (8 cols) */}
          <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-indigo-500/40 hover:bg-slate-900/90 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800/80 border border-slate-700/50 mb-4 shadow-md shadow-black/20">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-semibold text-slate-100">{item.title}</h3>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Architectural Specs & Location (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl border border-slate-800/90 bg-slate-900/80 p-6 sm:p-8 shadow-2xl shadow-indigo-950/20 backdrop-blur-md flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="rounded-2xl bg-indigo-500/10 border border-indigo-500/20 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">Engineering Approach</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Prioritizing clean separation of concerns, robust system design, asynchronous throughput, and high-performance frontend rendering across every stack layer.
                </p>
              </div>

              {/* Specs Matrix */}
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { label: 'Frontend Stack', value: 'React · TypeScript · Next.js' },
                  { label: 'Backend & Cloud', value: 'Python · FastAPI · AWS · Node.js' },
                  { label: 'System Architecture', value: 'Microservices · System Design' },
                  { label: 'AI & Data Layer', value: 'RAG · ChromaDB · LangChain' }
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl bg-slate-950/70 border border-slate-800/80 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">{item.label}</p>
                    <p className="mt-1 text-xs font-medium text-slate-200">{item.value}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default About;