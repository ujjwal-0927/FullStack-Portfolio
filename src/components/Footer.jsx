import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/ujjwal-0927', icon: <FaGithub size={15} /> },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/ujjwalfrontenddev', icon: <FaLinkedin size={15} /> },
    { label: 'Email', href: 'mailto:ujjwalsharma0927@outlook.com', icon: <FaEnvelope size={15} /> }
  ];

  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950 text-slate-300 overflow-hidden">
      
      {/* Background Subtle Accent Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-indigo-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 sm:px-8 lg:px-12 lg:flex-row lg:items-center lg:justify-between relative z-10">
        
        {/* Brand & Mission Column */}
        <div className="space-y-3 max-w-md">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-indigo-500/30 bg-indigo-500/10 text-indigo-400">
              <FaCode size={14} />
            </div>
            <p className="text-xl font-extrabold tracking-tight text-white">
              Ujjwal<span className="text-indigo-500">.dev</span>
            </p>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Building end-to-end web applications, resilient FastAPI backends, and intelligent AI integrations with a focus on performant, clean architecture.
          </p>
        </div>

        {/* Links Navigation Grid */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-16">
          
          {/* Internal Scroll Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">Navigation</p>
            <div className="mt-4 flex flex-wrap gap-4 text-xs font-medium text-slate-400">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="transition hover:text-indigo-400 focus:outline-none"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Profiles */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">Connect</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.label}
                  whileHover={{ y: -2 }}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/90 px-3.5 py-2 text-xs font-medium text-slate-300 transition hover:border-indigo-500/40 hover:text-indigo-400"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </motion.a>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Legal & Back To Top Section */}
      <div className="border-t border-slate-900 bg-slate-950/90 px-6 py-6 text-xs text-slate-500 sm:px-8 lg:px-12 relative z-10">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} Ujjwal Sharma. Engineered with React, Tailwind CSS & Framer Motion.</p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('hero')}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-3.5 py-2 text-xs font-mono text-slate-400 hover:border-slate-700 hover:text-slate-200 transition"
          >
            <span>Back to top</span>
            <FaArrowUp size={11} className="text-indigo-400" />
          </motion.button>
        </div>
      </div>

    </footer>
  );
};

export default Footer;