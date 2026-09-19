import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

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

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl shadow-lg shadow-black/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <button
          type="button"
          className="text-left group"
          onClick={() => scrollToSection('hero')}
          aria-label="Scroll to top"
        >
          <span className="block text-lg font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
            Ujjwal<span className="text-indigo-500">.dev</span>
          </span>
          <span className="block text-xs font-medium text-slate-400">Full-Stack AI Engineer</span>
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.slice(1).map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-slate-300 transition hover:text-indigo-400"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden rounded-2xl bg-indigo-600 hover:bg-indigo-500 px-5 py-2 text-sm font-medium text-white shadow-md shadow-indigo-600/20 transition-all md:inline-flex"
            onClick={() => scrollToSection('contact')}
          >
            Get in Touch
          </button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 transition hover:border-slate-700 hover:text-white md:hidden"
            onClick={() => setIsOpen((state) => !state)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950/95 px-6 pb-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-300 transition hover:bg-slate-900 hover:text-indigo-400"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;