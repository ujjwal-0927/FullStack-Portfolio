import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaSpinner } from 'react-icons/fa';

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

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Auto-hide success alert after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);
    }, 1800);
  };

  return (
    <section id="contact" className="relative bg-slate-950  pb-20 overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          
          {/* Left Column - Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
              Get In Touch
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl lg:text-5xl leading-tight">
              Let's build intelligent web solutions together.
            </h2>
            <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-slate-400">
              Open for full-stack web development projects, AI systems integration, and engineering consultation. Feel free to reach out directly or send a message.
            </p>

            {/* Contact Info Cards */}
            <div className="mt-8 space-y-4">
              
              <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-md transition hover:border-slate-700">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">Email Address</p>
                  <a href="mailto:ujjwalsharma0927@outlook.com" className="text-sm font-semibold text-slate-200 hover:text-indigo-400 transition-colors">
                    ujjwalsharma0927@outlook.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-md transition hover:border-slate-700">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <FaMapMarkerAlt size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">Location Base</p>
                  <p className="text-sm font-semibold text-slate-200">Gurugram, Haryana, India</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column - Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 shadow-2xl shadow-indigo-950/20 backdrop-blur-md">
              <div className="grid gap-5">
                
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300">Name</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full rounded-2xl border border-slate-700/60 bg-slate-950/80 px-4 py-3.5 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full rounded-2xl border border-slate-700/60 bg-slate-950/80 px-4 py-3.5 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300">Message</span>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project goals or inquiry..."
                    className="w-full rounded-2xl border border-slate-700/60 bg-slate-950/80 px-4 py-3.5 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  />
                </label>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-4 text-sm shadow-lg shadow-indigo-600/25 transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin text-sm" /> Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-xs" /> Send Message
                    </>
                  )}
                </motion.button>

                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-4 text-xs font-medium text-emerald-400"
                    >
                      <FaCheckCircle size={16} />
                      <span>Message sent successfully! I'll get back to you shortly.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact; 