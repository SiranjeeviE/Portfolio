import { Github, Linkedin, Mail } from 'lucide-react';
import data from '../data/portfolio.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 mt-20 pt-16 pb-8 bg-background relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/5 blur-[120px] rounded-full point-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-xl font-bold tracking-tighter mb-2">
            <span className="text-primary">S</span>iranjeevi <span className="text-accent-2">E</span>
          </h3>
          <p className="text-sm text-foreground/60 max-w-xs">
            Computer Science Engineering Student & Full-Stack Developer
          </p>
        </div>
        
        <div className="flex space-x-5">
          <a href={data.contact.github} target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
            <Github size={24} strokeWidth={1.5} />
          </a>
          <a href={data.contact.linkedin} target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
            <Linkedin size={24} strokeWidth={1.5} />
          </a>
          <a href={`mailto:${data.contact.email}`} className="text-foreground/60 hover:text-primary transition-colors">
            <Mail size={24} strokeWidth={1.5} />
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foreground/40 font-medium">
        <p>© {currentYear} Siranjeevi E. All rights reserved.</p>
        <p>Built with React & Vite.</p>
      </div>
    </footer>
  );
}
