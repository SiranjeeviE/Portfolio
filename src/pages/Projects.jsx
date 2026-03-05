import { motion } from 'framer-motion';
import { ExternalLink, Database, Cpu, Brain, Layout } from 'lucide-react';
import data from '../data/portfolio.json';

const getTechIcon = (techString) => {
  const lower = techString.toLowerCase();
  if (lower.includes('dnn') || lower.includes('yolo')) return <Brain size={20} />;
  if (lower.includes('iot')) return <Cpu size={20} />;
  if (lower.includes('react') || lower.includes('full-stack')) return <Layout size={20} />;
  return <Database size={20} />;
};

export default function Projects() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-20 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Featured <span className="text-primary">Projects.</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent-2 rounded-full" />
        <p className="mt-6 text-lg text-foreground/60 max-w-2xl">
          A showcase of systems and applications I've built, focusing on solving real-world problems 
          using AI, IoT, and modern web architectures.
        </p>
      </motion.div>

      <div className="flex flex-col gap-12">
        {data.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-card p-6 md:p-10 hover:border-primary/40 transition-colors"
          >
            {/* Number Indicator */}
            <div className="hidden lg:flex lg:col-span-1 justify-center">
              <span className="text-6xl font-bold text-white/5 group-hover:text-primary/20 transition-colors">
                0{index + 1}
              </span>
            </div>

            {/* Content */}
            <div className="lg:col-span-11 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium w-fit">
                  {getTechIcon(project.tech)}
                  {project.tech}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-4 border-t border-white/5">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground/50 uppercase tracking-widest">Problem</h4>
                  <p className="text-foreground/80 text-sm leading-relaxed">{project.problem}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground/50 uppercase tracking-widest">Solution</h4>
                  <p className="text-foreground/80 text-sm leading-relaxed">{project.solution}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground/50 uppercase tracking-widest">Application</h4>
                  <p className="text-foreground/80 text-sm leading-relaxed">{project.application}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
