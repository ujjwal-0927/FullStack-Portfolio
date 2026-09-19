import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-[calc(100vh-4.5rem)] bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] px-6 pt-20 sm:px-8 lg:px-12 flex items-center justify-center">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl space-y-4"
        >
          <span className="inline-flex rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 shadow-lg shadow-indigo-500/10">
            Full-Stack & AI Engineer
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl leading-tight">
            Building end-to-end web apps & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">intelligent AI pipelines</span>.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            Architecting scalable React/Next.js frontends, FastAPI backends, and LLM/RAG workflows that bridge complex systems into intuitive web experiences.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid w-full gap-4 sm:grid-cols-3">
          {[
            { value: '3+', label: 'Years Experience' },
            { value: 'Full-Stack', label: 'React, Node & Python' },
            { value: 'AI Native', label: 'LLMs, RAG & Vector DBs' }
          ].map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-slate-800 bg-slate-900/80 px-6 py-6 shadow-xl shadow-indigo-950/10 backdrop-blur-sm"
            >
              <p className="text-2xl sm:text-3xl font-bold text-indigo-400">{item.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] font-medium text-slate-500">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('projects')}
            className="inline-flex rounded-2xl bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-500"
          >
            Explore Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('contact')}
            className="inline-flex rounded-2xl border border-slate-700 bg-slate-900/90 px-8 py-4 text-sm font-semibold text-slate-200 transition hover:border-slate-600 hover:bg-slate-800"
          >
            Let's Connect
          </motion.button>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4">
          {[
            {
              href: 'https://github.com/ujjwal-0927',
              label: 'GitHub',
              icon: <FaGithub size={20} />
            },
            {
              href: 'https://linkedin.com/in/ujjwalfrontenddev',
              label: 'LinkedIn',
              icon: <FaLinkedin size={20} />
            },
            {
              href: 'mailto:ujjwalsharma0927@outlook.com',
              label: 'Email',
              icon: <FaEnvelope size={20} />
            }
          ].map((item) => (
            <motion.a
              key={item.label}
              whileHover={{ scale: 1.08 }}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 text-slate-400 transition hover:border-slate-700 hover:bg-slate-800 hover:text-indigo-400"
              aria-label={item.label}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;