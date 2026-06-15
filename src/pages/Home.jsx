import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import data from '../data/portfolio.json';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-80px)] w-full flex flex-col justify-center items-center px-6 relative overflow-hidden">
      
      {/* Background Decorators */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent-1/20 blur-[150px] -z-10" />

      <div className="max-w-4xl w-full mx-auto relative z-10">
        
        {/* Intro Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-3 py-1 glass rounded-full mb-8 border border-white/5"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-semibold tracking-wide text-foreground/70 uppercase">Available for work</span>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Hi, I'm {data.name.split(' ')[0]}<span className="text-primary">.</span><br />
          <span className="text-foreground/40 text-4xl md:text-6xl lg:text-7xl">Full-Stack Dev<br/>& AI Enthusiast.</span>
        </motion.h1>

        {/* Subtitle / Summary */}
        <motion.p 
          className="text-lg md:text-xl text-foreground/60 max-w-2xl mb-12 leading-relaxed font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {data.summary}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 sm:items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link 
            to="/projects"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-semibold rounded-full overflow-hidden transition-transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>View Projects</span>
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link 
            to="/contact"
            className="group inline-flex items-center justify-center px-8 py-4 glass text-foreground font-semibold rounded-full hover:bg-white/5 transition-all"
          >
            Let's Talk
          </Link>
        </motion.div>

        {/* Quick Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 border-t border-white/10 pt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="flex flex-col space-y-1">
            <span className="text-sm text-foreground/50">Location</span>
            <span className="font-semibold text-foreground/80">{data.location}</span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-sm text-foreground/50">Education</span>
            <span className="font-semibold text-foreground/80">{data.education.split(' ')[0]} Eng.</span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-sm text-foreground/50">Focus</span>
            <span className="font-semibold text-foreground/80">Full-Stack & ML</span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-sm text-foreground/50">Experience</span>
            <span className="font-semibold text-foreground/80">Internships + Projects</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
