import { useState } from 'react';
import { FaCheckCircle, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaSpinner } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(''), 5000);
    }, 1800);
  };

  return (
    <section id="contact" className="bg-ink px-6 py-14 text-paper sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">05 — Contact</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl leading-[0.98] tracking-tight sm:text-5xl">Have a good problem to solve?</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/60">Open for full-stack web development projects, AI systems integration, and engineering consultation.</p>
          <div className="mt-7 space-y-3 border-t border-paper/20 pt-4 text-sm">
            <a href="mailto:ujjwalsharma0927@outlook.com" className="flex items-center gap-3 hover:text-accent"><FaEnvelope className="text-accent" /> ujjwalsharma0927@outlook.com</a>
            <p className="flex items-center gap-3"><FaMapMarkerAlt className="text-accent" /> Gurugram, Haryana, India</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="border-t border-paper/20 pt-2">
          <label className="block border-b border-paper/20 py-4"><span className="font-mono text-xs text-accent">01 / Name</span><input type="text" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required placeholder="Your name" className="w-full border-b border-paper/20 bg-transparent px-0 py-3 text-sm text-paper placeholder-paper/40 outline-none transition focus:border-accent" /></label>
          <label className="block border-b border-paper/20 py-4"><span className="font-mono text-xs text-accent">02 / Email</span><input type="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required placeholder="you@example.com" className="w-full border-b border-paper/20 bg-transparent px-0 py-3 text-sm text-paper placeholder-paper/40 outline-none transition focus:border-accent" /></label>
          <label className="block border-b border-paper/20 py-4"><span className="font-mono text-xs text-accent">03 / Message</span><textarea name="message" rows="4" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required placeholder="Tell me about the work." className="w-full border-b border-paper/20 bg-transparent px-0 py-3 text-sm text-paper placeholder-paper/40 outline-none transition focus:border-accent" /></label>
          <button type="submit" disabled={isSubmitting} className="mt-6 inline-flex items-center gap-3 border border-ink bg-ink px-6 py-3 font-mono text-xs uppercase tracking-wider text-paper transition hover:border-accent hover:bg-accent disabled:opacity-60">
            {isSubmitting ? <><FaSpinner className="animate-spin" /> Sending</> : <><FaPaperPlane /> Send message</>}
          </button>
          {submitStatus === 'success' && <p className="mt-5 flex items-center gap-2 text-sm text-accent"><FaCheckCircle /> Message sent successfully.</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
