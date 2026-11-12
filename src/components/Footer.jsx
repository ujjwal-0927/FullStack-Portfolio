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
    <footer className="border-t border-paper/10 bg-ink text-paper">

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 sm:px-8 lg:px-12 lg:flex-row lg:items-center lg:justify-between">
        
        {/* Brand & Mission Column */}
        <div className="space-y-3 max-w-md">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center border border-ink text-accent">
              <FaCode size={14} />
            </div>
            <p className="font-display text-2xl tracking-tight">
              Ujjwal<span className="text-accent">.dev</span>
            </p>
          </div>
          <p className="text-xs leading-relaxed text-paper/50 sm:text-sm">
            Building end-to-end web applications, resilient FastAPI backends, and intelligent AI integrations with a focus on performant, clean architecture.
          </p>
        </div>

        {/* Links Navigation Grid */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-16">
          
          {/* Internal Scroll Links */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Navigation</p>
            <div className="mt-4 flex flex-wrap gap-4 font-mono text-xs text-paper/50">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="transition hover:text-accent focus:outline-none"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Profiles */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Connect</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.label}
                  whileHover={{ y: -2 }}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-paper/20 px-3.5 py-2 font-mono text-xs text-paper/60 transition hover:border-accent hover:text-accent"
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
      <div className="border-t border-paper/10 px-6 py-6 font-mono text-xs text-paper/40 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} Ujjwal Sharma. Engineered with React, Tailwind CSS & Framer Motion.</p>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('hero')}
            className="inline-flex items-center gap-2 border border-paper/20 px-3.5 py-2 text-xs font-mono text-paper/50 hover:border-accent hover:text-accent transition"
          >
            <span>Back to top</span>
            <FaArrowUp size={11} className="text-accent" />
          </motion.button>
        </div>
      </div>

    </footer>
  );
};

export default Footer;