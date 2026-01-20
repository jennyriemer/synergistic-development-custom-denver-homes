
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Mail, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'Process', path: '/process' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-sm py-4 border-b border-gray-100 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold tracking-tight">
          SYNERGISTIC <span className="font-light">DEVELOPMENT</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-sm uppercase tracking-widest font-medium hover:text-gray-500 transition-colors ${location.pathname === link.path ? 'text-black border-b border-black' : 'text-gray-600'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full space-y-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-4xl font-serif hover:text-gray-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex space-x-6 pt-12">
             <Instagram className="text-gray-400" />
             <Facebook className="text-gray-400" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif mb-8">Synergistic Development</h2>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Architecturally driven custom homes and large-scale home remodels in Denver and across the Front Range.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="p-2 border border-gray-700 hover:border-white transition-colors"><Instagram size={18} /></a>
              <a href="#" className="p-2 border border-gray-700 hover:border-white transition-colors"><Facebook size={18} /></a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-widest text-gray-500 font-bold">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-300">
                <Mail size={16} /> <span>office@synergistic-dev.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Phone size={16} /> <span>303.555.0123</span>
              </li>
              <li className="text-gray-400 pt-2">
                Denver, Colorado
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-widest text-gray-500 font-bold">Explore</h4>
            <ul className="grid grid-cols-2 gap-4">
              <li><Link to="/work" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/process" className="text-gray-300 hover:text-white transition-colors">Our Process</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Consultation</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs tracking-widest text-gray-500 uppercase">
          <p>© {new Date().getFullYear()} Synergistic Development. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Built for the Denver Life</p>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
