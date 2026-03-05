import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';
import data from '../data/portfolio.json';

export default function Contact() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-20 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Let's <span className="text-primary">Connect.</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent-2 rounded-full mx-auto" />
        <p className="mt-6 text-lg text-foreground/60 max-w-2xl mx-auto">
          Currently open to internship opportunities, full-time roles, and freelance projects 
          in software engineering. Reach out and say hello!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-16">
        
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <motion.a 
            href={`mailto:${data.contact.email}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-6 glass-card p-6 hover:bg-white/5 hover:border-primary/50 transition-all group cursor-pointer"
          >
            <div className="p-4 bg-primary/10 text-primary rounded-xl group-hover:scale-110 transition-transform">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-sm text-foreground/50 font-semibold uppercase tracking-wider mb-1">Email</p>
              <p className="text-lg font-medium group-hover:text-primary transition-colors">{data.contact.email}</p>
            </div>
          </motion.a>

          <motion.a 
            href={data.contact.linkedin} target="_blank" rel="noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-6 glass-card p-6 hover:bg-white/5 hover:border-[#0077b5]/50 transition-all group cursor-pointer"
          >
            <div className="p-4 bg-[#0077b5]/10 text-[#0077b5] rounded-xl group-hover:scale-110 transition-transform">
              <Linkedin size={24} />
            </div>
            <div>
              <p className="text-sm text-foreground/50 font-semibold uppercase tracking-wider mb-1">LinkedIn</p>
              <p className="text-lg font-medium group-hover:text-[#0077b5] transition-colors">Siranjeevi E</p>
            </div>
          </motion.a>

          <motion.a 
            href={data.contact.github} target="_blank" rel="noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-6 glass-card p-6 hover:bg-white/5 hover:border-white/50 transition-all group cursor-pointer"
          >
            <div className="p-4 bg-white/10 text-white rounded-xl group-hover:scale-110 transition-transform">
              <Github size={24} />
            </div>
            <div>
              <p className="text-sm text-foreground/50 font-semibold uppercase tracking-wider mb-1">GitHub</p>
              <p className="text-lg font-medium group-hover:text-white transition-colors">SiranjeeviE</p>
            </div>
          </motion.a>
        </div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:col-span-7 glass-card p-8 md:p-12 relative overflow-hidden"
        >
          {/* Subtle glow */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 blur-3xl rounded-full opacity-50 point-events-none" />

          <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground/70 uppercase tracking-widest pl-1">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-background/50 border border-white/10 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground/70 uppercase tracking-widest pl-1">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-background/50 border border-white/10 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground/70 uppercase tracking-widest pl-1">Message</label>
              <textarea 
                rows="5"
                placeholder="Tell me about your project or opportunity..."
                className="w-full bg-background/50 border border-white/10 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="group w-full flex items-center justify-center gap-2 bg-primary text-white font-bold text-lg rounded-lg p-4 hover:bg-accent-2 transition-colors relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Send Message
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}
