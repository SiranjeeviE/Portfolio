import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tighter">
          <span className="text-primary">S</span>iranjeevi
          <span className="text-accent-2">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-accent-2 ${isActive ? 'text-primary' : 'text-foreground/80'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="h-4 w-px bg-white/20" />
          <a href="https://github.com/SiranjeeviE" target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/siranjeevi" target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground hover:text-primary transition-colors z-50 fixed right-6 top-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="fixed inset-y-0 right-0 w-3/4 max-w-sm bg-background/95 backdrop-blur-xl border-l border-white/10 p-8 flex flex-col justify-center space-y-8 shadow-2xl z-40"
            >
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => 
                    `text-2xl font-semibold transition-colors hover:text-accent-2 ${isActive ? 'text-primary' : 'text-foreground/80'}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-8 border-t border-white/10 flex space-x-6">
                <a href="https://github.com/SiranjeeviE" target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-white transition-colors">
                  <Github size={28} />
                </a>
                <a href="https://linkedin.com/in/siranjeevi" target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-white transition-colors">
                  <Linkedin size={28} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
