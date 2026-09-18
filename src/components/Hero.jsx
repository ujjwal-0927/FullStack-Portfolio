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
    <section id="home" className="min-h-[calc(100vh-4.5rem)] bg-gradient-to-br from-slate-50 via-slate-100 to-sky-50 px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="mb-4 inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-lg shadow-slate-900/10">
            Frontend Specialist
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            I build polished, scalable user interfaces with React, TypeScript, and modern design systems.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
            I help ambitious product teams launch intuitive web experiences for FinTech and Healthcare that feel fast, confident, and delightful.
          </p>
        </motion.div>

        <div className="grid w-full gap-6 sm:grid-cols-3">
          {[
            { value: '3+', label: 'Years Experience' },
            { value: '15+', label: 'Projects Delivered' },
            { value: '99.9%', label: 'Average Uptime' }
          ].map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-slate-200 bg-white/90 px-6 py-8 shadow-lg shadow-slate-200/80"
            >
              <p className="text-3xl font-semibold text-sky-600">{item.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('projects')}
            className="inline-flex rounded-full bg-slate-950 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800"
          >
            View Recent Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('contact')}
            className="inline-flex rounded-full border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
          >
            Let's Connect
          </motion.button>
        </div>

        <div className="flex items-center justify-center gap-5">
          {[
            {
              href: 'https://github.com/ujjwal-0927',
              label: 'GitHub',
              icon: <FaGithub size={24} />
            },
            {
              href: 'https://linkedin.com/in/ujjwalfrontenddev',
              label: 'LinkedIn',
              icon: <FaLinkedin size={24} />
            },
            {
              href: 'mailto:ujjwalsharma0927@outlook.com',
              label: 'Email',
              icon: <FaEnvelope size={24} />
            }
          ].map((item) => (
            <motion.a
              key={item.label}
              whileHover={{ scale: 1.08 }}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
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