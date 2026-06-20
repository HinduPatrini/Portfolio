import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertTriangle } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/xgobgjwy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hindupatrini16@gmail.com',
      href: 'mailto:hindupatrini16@gmail.com',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/HinduPatrini',
      href: 'https://github.com/HinduPatrini',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/hindu-patrini-7ab07a37a',
      href: 'https://www.linkedin.com/in/hindu-patrini-7ab07a37a',
    },
    {
      icon: FaInstagram,
      label: 'Instagram',
      value: '@hinduu_16',
      href: 'https://www.instagram.com/hinduu_16/',
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-20 border-t border-slate-200 dark:border-slate-850 bg-white dark:bg-darkBg">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">04 / Connectivity</p>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-base">
            Have a project in mind, want to collaborate, or just say hello? Fill out the form or reach out through my socials!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct info - 5 cols */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-bold text-slate-805 dark:text-slate-100">
                Let's build something epic.
              </h3>
              <p className="text-slate-550 dark:text-slate-400 leading-relaxed font-sans">
                I'm active on social networks and reply quickly to emails. Let me know how I can help your team, business, or project grow.
              </p>
            </div>

            {/* Methods Stack */}
            <div className="space-y-4">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-900/30 hover:border-accent/40 dark:hover:border-accent/40 hover:bg-white dark:hover:bg-darkCard hover:scale-[1.01] hover:shadow-sm transition-all duration-200"
                  >
                    <div className="p-3 rounded-lg bg-accent/10 text-accent">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono tracking-wider uppercase text-slate-400 dark:text-slate-500">
                        {method.label}
                      </p>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {method.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Contact form - 7 cols */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-850 bg-slate-50/30 dark:bg-darkCard/30 backdrop-blur-md shadow-sm hover:border-accent/30 dark:hover:border-accent/30 transition-colors"
            >
              {status === 'success' ? (
                <div className="text-center py-10 space-y-4">
                  <div className="inline-flex p-3 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-500 mb-2">
                    <CheckCircle size={40} />
                  </div>
                  <h4 className="text-xl font-display font-bold text-slate-800 dark:text-slate-100">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm max-w-sm mx-auto">
                    Thank you for reaching out, Hindu. I have received your email and will get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-accent text-white font-medium text-sm hover:bg-accent-dark transition-colors duration-200"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50 flex items-center gap-3 text-rose-600 dark:text-rose-450 text-sm">
                      <AlertTriangle size={20} className="shrink-0" />
                      <span>Oops! Something went wrong. Please check your network or try again.</span>
                    </div>
                  )}

                  {/* Name field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-xs font-mono font-medium tracking-wide uppercase text-slate-500 dark:text-slate-400"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-slate-850 dark:text-slate-100 placeholder-slate-400 focus:border-accent focus:ring-1 focus:ring-accent disabled:opacity-50 transition-all font-sans text-sm"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-mono font-medium tracking-wide uppercase text-slate-500 dark:text-slate-400"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="johndoe@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-slate-850 dark:text-slate-100 placeholder-slate-400 focus:border-accent focus:ring-1 focus:ring-accent disabled:opacity-50 transition-all font-sans text-sm"
                    />
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-xs font-mono font-medium tracking-wide uppercase text-slate-500 dark:text-slate-400"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Hi Hindu, I'd like to talk about a full-stack project..."
                      value={formData.message}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-slate-850 dark:text-slate-100 placeholder-slate-400 focus:border-accent focus:ring-1 focus:ring-accent disabled:opacity-50 transition-all font-sans text-sm resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 rounded-xl bg-accent hover:bg-accent-dark disabled:bg-accent/70 text-white font-medium flex items-center justify-center gap-2.5 shadow-md shadow-accent/15 hover:shadow-lg hover:shadow-accent/25 duration-200 active:scale-[0.99] transition-all"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
