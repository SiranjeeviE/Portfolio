import { motion } from 'framer-motion';
import { Briefcase, Award, GraduationCap } from 'lucide-react';
import data from '../data/portfolio.json';

export default function Experience() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-20 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Professional <span className="text-primary">Experience.</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent-2 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Timeline Column */}
        <div className="lg:col-span-7 relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-4 bottom-4 w-px bg-white/10 hidden sm:block" />

          <div className="space-y-12">
            {data.experience.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative sm:pl-16 group"
              >
                {/* Timeline Node */}
                <div className="absolute left-[20px] top-1 hidden sm:flex h-4 w-4 rounded-full border-2 border-primary bg-background shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-150 transition-transform" />

                <div className="glass-card p-6 md:p-8 hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="text-primary w-5 h-5" />
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                  </div>
                  <h4 className="text-lg text-accent-2 font-semibold mb-4">{exp.company}</h4>
                  <p className="text-foreground/80 leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Achievements & Certifications */}
        <div className="lg:col-span-5 space-y-12">
          
          {/* Achievements */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <Award className="text-yellow-500 w-6 h-6" />
              <h3 className="text-xl font-bold">Key Achievements</h3>
            </div>
            <ul className="space-y-4">
              {data.achievements.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Certifications */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <GraduationCap className="text-emerald-500 w-6 h-6" />
              <h3 className="text-xl font-bold">Certifications</h3>
            </div>
            <ul className="space-y-4">
              {data.certifications.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
