import { motion } from 'framer-motion';
import { Terminal, Database, Brain, Wrench } from 'lucide-react';
import data from '../data/portfolio.json';

const iconMap = {
  "Programming": <Terminal size={24} className="text-blue-400" />,
  "Web Technologies": <Database size={24} className="text-emerald-400" />,
  "Data & AI": <Brain size={24} className="text-purple-400" />,
  "Tools": <Wrench size={24} className="text-orange-400" />
};

export default function About() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-20 min-h-screen">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          About <span className="text-primary">Me.</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent-2 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Bio & Facts */}
        <div className="lg:col-span-5 space-y-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert prose-lg text-foreground/80 leading-relaxed"
          >
            <p>
              I am a driven and passionate Computer Science Engineering student hailing from {data.location}. 
              My journey in tech is fueled by an insatiable curiosity for how things work and a desire to build 
              solutions that make an impact.
            </p>
            <p>
              Beyond traditional coursework, I actively engage in hackathons, competitive programming, and hands-on 
              projects. My dual focus on Full-Stack Development and Artificial Intelligence empowers me to tackle 
              complex problems end-to-end—from designing an intuitive user interface to implementing robust backend 
              logic and integrating intelligent models.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mt-10 -mr-10 transition-transform group-hover:scale-150" />
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" /> At a Glance
            </h3>
            <ul className="space-y-4">
              <li className="flex flex-col">
                <span className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">Location</span>
                <span className="text-foreground/90 font-medium">{data.location}</span>
              </li>
              <li className="flex flex-col">
                <span className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">Education</span>
                <span className="text-foreground/90 font-medium">{data.education}</span>
              </li>
              <li className="flex flex-col">
                <span className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">Current Focus</span>
                <span className="text-foreground/90 font-medium">Full-Stack, ML, Open Source</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Right Column: Skills */}
        <div className="lg:col-span-7">
          <h3 className="text-2xl font-bold mb-8">Technical Expertise</h3>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {data.skills.map((skillGroup, idx) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                className="glass-card p-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/5 rounded-lg">
                    {iconMap[skillGroup.category] || <Terminal size={24} />}
                  </div>
                  <h4 className="text-lg font-semibold">{skillGroup.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, idj) => (
                    <span 
                      key={idj}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-foreground/80 hover:bg-primary/20 hover:text-white hover:border-primary/50 transition-all cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}