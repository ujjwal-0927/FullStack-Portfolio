import { motion } from 'framer-motion';
import { FaArrowDown, FaArrowRight, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative overflow-hidden border-b border-paper/10 bg-ink px-6 pb-12 pt-20 text-paper sm:px-8 lg:px-12 lg:pb-16 lg:pt-24">
      <div className="pointer-events-none absolute right-[-5rem] top-24 h-40 w-40 border-[18px] border-accent/30 sm:right-10 sm:h-56 sm:w-56" />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.6fr] lg:items-end lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Full-Stack & AI Engineer / 2026</p>
            <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.94] tracking-tight text-paper sm:text-7xl lg:text-[7.25rem]">
              I build web apps and
              <br />
              the AI behind them<span className="text-accent">.</span>
            </h1>
            <div className="mt-7 grid gap-6 border-t border-paper/20 pt-5 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="max-w-xl text-sm leading-relaxed text-paper/60 sm:text-base">
                3 years of software engineering experience crafting high-performance React/Next.js frontends, FastAPI microservices, and LLM/RAG workflows that scale cleanly.
              </p>
              <button type="button" onClick={() => scrollToSection('projects')} className="inline-flex items-center gap-3 justify-self-start border-b border-paper pb-2 font-mono text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:border-accent hover:text-accent sm:justify-self-end">
                See selected work <FaArrowDown />
              </button>
            </div>
          </motion.div>

          <motion.aside initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative border border-paper/20 bg-[#24221F] p-5 text-paper shadow-[10px_10px_0_0_#E4572E] sm:p-6">
            <div className="absolute left-0 top-0 h-1 w-20 bg-accent" />
            <div className="flex items-center justify-between border-b border-paper/20 pb-4 font-mono text-[10px] uppercase tracking-[0.14em]">
              <span>System map</span>
              <span className="text-accent">Online</span>
            </div>
            <p className="mt-6 font-display text-3xl leading-none sm:text-4xl">From interface<br />to intelligence.</p>
            <div className="mt-7 space-y-3 font-mono text-[11px]">
              {['React / Next.js', 'FastAPI / Node.js', 'LLM / RAG systems'].map((item, index) => (
                <div key={item} className="flex items-center gap-3 border-b border-paper/20 pb-3">
                  <span className="text-accent">0{index + 1}</span>
                  <span>{item}</span>
                  <span className="ml-auto h-2 w-2 bg-accent" />
                </div>
              ))}
            </div>
            <button type="button" onClick={() => scrollToSection('contact')} className="mt-7 inline-flex items-center gap-3 border border-paper/40 px-4 py-2 font-mono text-[10px] uppercase tracking-wider transition hover:border-accent hover:bg-accent">
              Start a conversation <FaArrowRight />
            </button>
          </motion.aside>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.35 }} className="mt-9 grid gap-5 border-t border-rule pt-5 sm:grid-cols-4">
          <div><p className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper/50">Experience</p><p className="mt-2 font-display text-2xl">3+ years</p></div>
          <div><p className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper/50">Focus</p><p className="mt-2 text-sm">React · Python · AI</p></div>
          <div><p className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper/50">Based in</p><p className="mt-2 text-sm">Gurugram, India</p></div>
          <div className="flex items-start gap-4 sm:justify-end">
            {[{ href: 'https://github.com/ujjwal-0927', label: 'GitHub', icon: <FaGithub /> }, { href: 'https://linkedin.com/in/ujjwalfrontenddev', label: 'LinkedIn', icon: <FaLinkedin /> }, { href: 'mailto:ujjwalsharma0927@outlook.com', label: 'Email', icon: <FaEnvelope /> }].map((item) => <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label} className="text-lg text-paper/60 transition-colors hover:text-accent">{item.icon}</a>)}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
