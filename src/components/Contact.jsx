import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="bg-slate-950 pt-20 sm:pt-20 ">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Left Column - Contact Details */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">Contact</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl leading-tight">
              Let's build intelligent web solutions together.
            </h2>
            <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-slate-400">
              Available for full-time engineering roles and full-stack AI consulting. Share your project goals or reach out directly to connect.
            </p>

            <div className="mt-10 space-y-3 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
              {[
                { label: 'Email', value: 'ujjwalsharma0927@outlook.com', href: 'mailto:ujjwalsharma0927@outlook.com' },
                // { label: 'Phone', value: '+91 9717733415', href: 'tel:+919717733415' },
                { label: 'Location', value: 'Gurugram, Haryana, India' }
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1 rounded-2xl bg-slate-800/50 border border-slate-700/40 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-semibold text-slate-200 hover:text-indigo-400 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-slate-200">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 shadow-2xl shadow-indigo-950/20 backdrop-blur-sm">
            <div className="grid gap-5">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-300">Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full rounded-2xl border border-slate-700/60 bg-slate-950 px-4 py-3.5 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-300">Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full rounded-2xl border border-slate-700/60 bg-slate-950 px-4 py-3.5 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-300">Message</span>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or team..."
                  className="w-full rounded-2xl border border-slate-700/60 bg-slate-950 px-4 py-3.5 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-4 text-sm shadow-lg shadow-indigo-600/20 transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-4 text-xs font-medium text-emerald-400">
                  Message sent successfully! I'll get back to you shortly.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;