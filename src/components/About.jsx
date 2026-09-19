import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="bg-slate-950 pt-20 sm:pt-20 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }} // Triggers once when 20% of the element is visible
        className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12"
      >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Main Bio */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
              About Me
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl leading-tight">
              Engineering full-stack web platforms & intelligent AI solutions.
            </h2>
            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-400">
              I bridge intuitive React/Next.js frontends with robust FastAPI backends and LLM-driven pipelines to build performant, AI-native applications.
            </p>

            {/* Quick Metrics Grid */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Specialized in', value: 'Full-Stack & AI Engineering' },
                { label: 'Core Stack', value: 'React · FastAPI · Python · TypeScript' },
                { label: 'Focus Areas', value: 'LLM Integration, RAG & High-Perf Web' },
                { label: 'Based in', value: 'Gurugram, India' }
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium">{item.label}</p>
                  <p className="mt-1.5 text-sm font-semibold text-slate-200">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Strengths Side Card */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 shadow-2xl shadow-indigo-950/20">
            <div className="space-y-5">
              <div className="rounded-2xl bg-indigo-500/10 border border-indigo-500/20 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">Core Value</p>
                <p className="mt-2 text-base leading-snug text-slate-300">
                  Architecting scalable web architectures, streaming AI endpoints, and production-ready applications end-to-end.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { label: 'End-to-End', value: 'From API design to interactive UI' },
                  { label: 'AI Integration', value: 'RAG, local LLMs & OpenRouter' }
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl bg-slate-800/50 border border-slate-700/50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">{item.label}</p>
                    <p className="mt-1.5 text-xs text-slate-300 leading-snug">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default About;