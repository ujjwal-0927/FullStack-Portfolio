import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaCode } from 'react-icons/fa';

const navItems = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll detection for active link & sticky header shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky inset-x-0 top-0 z-50 transition-all duration-300 border-b ${
        scrolled
        ? 'border-paper/20 bg-ink py-3'
        : 'border-transparent bg-ink py-4'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-8">
        
        {/* Brand Logo */}
        <button
          type="button"
          className="text-left group flex items-center gap-3 focus:outline-none"
          onClick={() => scrollToSection('hero')}
          aria-label="Scroll to top"
        >
          <div className="flex h-10 w-10 items-center justify-center border border-paper/30 text-accent transition duration-300 group-hover:border-accent">
            <FaCode size={18} />
          </div>
          <div>
            <span className="block font-display text-2xl tracking-tight text-paper group-hover:text-accent transition-colors">
              Ujjwal<span className="text-accent">.dev</span>
            </span>
            <span className="block font-mono text-[10px] uppercase tracking-wide text-paper/50">
              Full-Stack & AI Systems
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-5 border-l border-paper/20 pl-5 md:flex">
          {navItems.slice(1).map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`relative px-1 py-1.5 font-mono text-[11px] uppercase tracking-wide transition duration-200 ${
                  isActive
                    ? 'text-accent'
                    : 'text-paper/60 hover:text-accent'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <motion.button
            whileTap={{ scale: 0.97 }}
            type="button"
            className="hidden border border-accent bg-accent px-5 py-2.5 font-mono text-[11px] uppercase tracking-wide text-paper transition-all hover:bg-paper hover:text-ink md:inline-flex"
            onClick={() => scrollToSection('contact')}
          >
            Get in Touch
          </motion.button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-paper/30 text-paper transition hover:border-accent hover:text-accent md:hidden"
            onClick={() => setIsOpen((state) => !state)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-paper/20 bg-ink px-6 md:hidden"
          >
            <div className="flex flex-col gap-1.5 py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full border-b border-rule px-4 py-3 text-left text-sm transition ${
                    activeSection === item.id
                      ? 'text-accent font-semibold'
                        : 'text-paper/70 hover:text-accent'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;