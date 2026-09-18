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
    <section id="contact" className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Ready to build something together?
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              I&apos;m available for freelance and full-time roles across product-led teams. Share your objectives and I&apos;ll propose a clear frontend approach.
            </p>

            <div className="mt-12 space-y-4 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/50">
              {[
                { label: 'Email', value: 'ujjwalsharma0927@outlook.com', href: 'mailto:ujjwalsharma0927@outlook.com' },
                { label: 'Phone', value: '+91 9717733415', href: 'tel:+919717733415' },
                { label: 'Location', value: 'Gurugram, Haryana' }
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-2 rounded-3xl bg-slate-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-base font-semibold text-slate-900 hover:text-sky-600">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-base font-semibold text-slate-900">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/50">
            <div className="grid gap-5">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Message</span>
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                />
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="rounded-3xl bg-emerald-50 p-4 text-sm text-emerald-800 ring-1 ring-emerald-200">
                  Message sent successfully! I&apos;ll get back to you soon.
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
