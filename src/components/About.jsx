const About = () => {
  return (
    <section id="about" className="bg-white py-24 sm:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
              About Me
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Turning product strategy into intuitive digital experiences.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              I design and build robust frontend systems using React, TypeScript, and Tailwind. My work focuses on performance, accessibility, and clear user journeys for ambitious teams in Finance and Healthcare.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Specialized in', value: 'Responsive Web Apps' },
                { label: 'Primary stack', value: 'React · Next.js · TypeScript' },
                { label: 'Focus areas', value: 'UX, performance, maintainability' },
                { label: 'Based in', value: 'Gurugram, Haryana' }
              ].map((item) => (
                <div key={item.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
                  <p className="mt-2 text-base font-semibold text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-950/5 p-8 shadow-xl shadow-slate-200/40">
            <div className="space-y-6">
              <div className="rounded-3xl bg-sky-600/10 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Key strengths</p>
                <p className="mt-4 text-lg leading-7 text-slate-700">
                  Building scalable frontends, improving conversion flows, and mentoring teams to move faster with a reliable design system.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: 'Reliable execution', value: 'Delivery-focused and quality-first' },
                  { label: 'Collaboration', value: 'Cross-functional product teams' }
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl bg-white p-6 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                    <p className="mt-3 text-base text-slate-700">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;