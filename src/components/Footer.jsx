const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 sm:px-8 lg:px-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <p className="text-xl font-bold tracking-tight text-white">
            Ujjwal<span className="text-indigo-500">.dev</span>
          </p>
          <p className="max-w-md text-sm text-slate-400 leading-relaxed">
            Building end-to-end web applications, resilient FastAPI backends, and intelligent AI integrations.
          </p>
        </div>

        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">Navigation</p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-400 font-medium">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((label) => (
                <a key={label} href={`#${label.toLowerCase()}`} className="transition hover:text-indigo-400">
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">Connect</p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-400 font-medium">
              <a href="https://github.com/ujjwal-0927" target="_blank" rel="noopener noreferrer" className="transition hover:text-indigo-400">
                GitHub
              </a>
              <a href="https://linkedin.com/in/ujjwalfrontenddev" target="_blank" rel="noopener noreferrer" className="transition hover:text-indigo-400">
                LinkedIn
              </a>
              <a href="mailto:ujjwalsharma0927@outlook.com" className="transition hover:text-indigo-400">
                Email
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800/80 bg-slate-950 px-6 py-6 text-center text-xs text-slate-500 sm:px-8 lg:px-12">
        <p>&copy; {new Date().getFullYear()} Ujjwal Sharma. Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;