const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-950/95 text-slate-200">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 sm:px-8 lg:px-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <p className="text-lg font-semibold text-white">Ujjwal Sharma</p>
          <p className="max-w-md text-sm text-slate-400">
            Building dependable frontend experiences for enterprise product teams, one release at a time.
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Navigation</p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-300">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((label) => (
                <a key={label} href={`#${label.toLowerCase()}`} className="transition hover:text-white">
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Connect</p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-300">
              <a href="https://github.com/ujjwal-0927" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                GitHub
              </a>
              <a href="https://linkedin.com/in/ujjwalfrontenddev" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                LinkedIn
              </a>
              <a href="mailto:ujjwalsharma0927@outlook.com" className="transition hover:text-white">
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 bg-slate-950/95 px-6 py-6 text-center text-sm text-slate-500 sm:px-8 lg:px-12">
        <p>&copy; {new Date().getFullYear()} Ujjwal Sharma. Built with React.</p>
      </div>
    </footer>
  );
};

export default Footer;