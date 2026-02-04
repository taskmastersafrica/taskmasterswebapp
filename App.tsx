
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  Menu, X, MessageCircle, ArrowUp,
  Home as HomeIcon, Info, Briefcase,
  CreditCard, Phone, Mail, ArrowRight
} from 'lucide-react';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import ThankYou from './pages/ThankYou'; // Import the ThankYou page

// Individual Service Pages
import CleaningService from './pages/services/Cleaning';
import LaundryService from './pages/services/Laundry';
import CookingService from './pages/services/Cooking';
import NannyService from './pages/services/Nanny';
import ErrandsService from './pages/services/Errands';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/', icon: <HomeIcon className="w-5 h-5" /> },
    { name: 'About', path: '/about', icon: <Info className="w-5 h-5" /> },
    { name: 'Services', path: '/services', icon: <Briefcase className="w-5 h-5" /> },
    { name: 'Pricing', path: '/pricing', icon: <CreditCard className="w-5 h-5" /> },
    { name: 'Contact', path: '/contact', icon: <Phone className="w-5 h-5" /> }
  ];

  return (
    <>
      {/* Sitewide Solid Navy Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-figma bg-navy-950 border-b border-white/5 py-4 md:py-6 shadow-figma-lg`}>
        <div className="figma-container">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex flex-col group relative z-[60]">
              <span className="text-xl md:text-2xl font-extrabold text-white tracking-tighter transition-colors group-hover:text-brandOrange">TASKMASTER</span>
              <span className="text-[10px] font-bold text-brandOrange tracking-[0.3em] -mt-1 uppercase">Africa</span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold tracking-tight transition-figma hover:text-brandOrange ${location.pathname === link.path ? 'text-brandOrange' : 'text-white/90'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/booking"
                className="bg-brandOrange hover:bg-orange-600 text-white px-7 py-3 rounded-figma text-sm font-extrabold transition-figma shadow-orange-glow hover:translate-y-[-2px] active:translate-y-[0px]"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden relative z-[60]">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 text-white bg-white/10 backdrop-blur-md rounded-figma transition-all active:scale-90 border border-white/10"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Tray (Side Drawer) */}
      <div
        className={`fixed inset-0 z-[55] transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      >
        <div className="absolute inset-0 bg-navy-950/80 backdrop-blur-md" />

        <div
          className={`absolute top-0 right-0 w-full max-w-[340px] h-full bg-navy-950 shadow-2xl border-l border-white/5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Tray Header */}
          <div className="p-8 pt-12 flex justify-between items-start border-b border-white/5">
            <div>
              <Link to="/" onClick={() => setIsOpen(false)} className="flex flex-col mb-4">
                <span className="text-xl font-extrabold text-white tracking-tighter">TASKMASTER</span>
                <span className="text-[9px] font-bold text-brandOrange tracking-[0.3em] uppercase">Africa</span>
              </Link>
              <span className="text-navy-500 font-black text-[9px] uppercase tracking-[0.4em] block">Directory Hub</span>
            </div>

            {/* Dedicated Visible X Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="p-3 bg-white/5 rounded-figma text-white hover:text-brandOrange transition-all hover:bg-white/10"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links Section */}
          <div className="flex-grow py-8 px-5 space-y-2 overflow-y-auto">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-4 px-5 py-4 rounded-figma transition-all group ${isActive ? 'bg-brandOrange/10 text-brandOrange border border-brandOrange/20' : 'text-navy-300 hover:bg-white/5 hover:text-white'}`}
                >
                  <span className={`transition-transform group-hover:scale-110 group-active:scale-95 ${isActive ? 'text-brandOrange' : 'text-navy-500'}`}>
                    {link.icon}
                  </span>
                  <span className="text-[12px] font-black tracking-[0.05em] uppercase">{link.name}</span>
                  {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-brandOrange shadow-orange-glow" />}
                </Link>
              );
            })}
          </div>

          {/* Tray Footer */}
          <div className="p-8 border-t border-white/5 bg-navy-900/30">
            <Link
              to="/booking"
              className="w-full bg-brandOrange hover:bg-orange-600 text-center text-white py-4.5 rounded-figma font-black text-sm shadow-orange-glow flex items-center justify-center gap-3 transition-figma active:scale-[0.97]"
            >
              Book Service <ArrowRight className="w-5 h-5" />
            </Link>

            <div className="mt-8 flex flex-col gap-6">
              <div className="flex gap-4">
                <a href="mailto:info@taskmasterafrica.com" className="w-11 h-11 rounded-figma bg-white/5 flex items-center justify-center text-navy-400 hover:text-white hover:bg-brandOrange transition-all">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="tel:+2348008275627" className="w-11 h-11 rounded-figma bg-white/5 flex items-center justify-center text-navy-400 hover:text-white hover:bg-brandOrange transition-all">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
              <p className="text-[9px] font-bold text-navy-600 uppercase tracking-widest leading-relaxed">
                Abuja Headquarters • 24/7 Support<br />
                &copy; {new Date().getFullYear()} Taskmaster Africa Agency
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Footer = () => (
  <footer className="bg-navy-950 text-white pt-24 pb-12 border-t border-white/5">
    <div className="figma-container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div className="space-y-8">
          <Link to="/" className="flex flex-col group">
            <span className="text-2xl font-extrabold text-white tracking-tighter group-hover:text-brandOrange transition-colors">TASKMASTER</span>
            <span className="text-xs font-bold text-brandOrange tracking-[0.3em] -mt-1 uppercase">Africa</span>
          </Link>
          <p className="text-navy-400 text-sm leading-7 max-w-xs">
            Africa's premier destination for professional home and personal support. Excellence delivered, tasks mastered.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-brandOrange">Quick Links</h4>
          <ul className="space-y-5 text-navy-300 text-sm font-medium">
            <li><Link to="/about" className="hover:text-white transition-figma inline-block hover:translate-x-1">About Our Mission</Link></li>
            <li><Link to="/services" className="hover:text-white transition-figma inline-block hover:translate-x-1">Explore Services</Link></li>
            <li><Link to="/pricing" className="hover:text-white transition-figma inline-block hover:translate-x-1">Flexible Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-figma inline-block hover:translate-x-1">Support Center</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-brandOrange">Our Services</h4>
          <ul className="space-y-5 text-navy-300 text-sm font-medium">
            <li><Link to="/services/cleaning" className="hover:text-white transition-figma inline-block hover:translate-x-1">Home & Office Cleaning</Link></li>
            <li><Link to="/services/laundry" className="hover:text-white transition-figma inline-block hover:translate-x-1">Professional Laundry</Link></li>
            <li><Link to="/services/cooking" className="hover:text-white transition-figma inline-block hover:translate-x-1">Meal Prep & Chefs</Link></li>
            <li><Link to="/services/nanny" className="hover:text-white transition-figma inline-block hover:translate-x-1">Vetted Nanny Care</Link></li>
            <li><Link to="/services/errands" className="hover:text-white transition-figma inline-block hover:translate-x-1">Personal Errands</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-brandOrange">Get In Touch</h4>
          <ul className="space-y-5 text-navy-300 text-sm font-medium">
            <li className="flex flex-col space-y-1">
              <span className="text-navy-500 text-[10px] font-black uppercase">Email Address</span>
              <a href="mailto:info@taskmasterafrica.com" className="hover:text-white transition-figma">info@taskmasterafrica.com</a>
            </li>
            <li className="flex flex-col space-y-1">
              <span className="text-navy-500 text-[10px] font-black uppercase">Phone Number</span>
              <a href="tel:+2348008275627" className="hover:text-white transition-figma">+234 800 TASKMASTER</a>
            </li>
            <li className="flex flex-col space-y-1">
              <span className="text-navy-500 text-[10px] font-black uppercase">Our Location</span>
              <span>Abuja, Nigeria & Beyond</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[11px] font-bold text-navy-500 tracking-wider uppercase">
        <p>&copy; {new Date().getFullYear()} Taskmaster Africa. All Rights Reserved.</p>
        <div className="flex space-x-8 mt-6 md:mt-0">
          <a href="#" className="hover:text-brandOrange transition-colors">Privacy</a>
          <a href="#" className="hover:text-brandOrange transition-colors">Terms</a>
          <a href="#" className="hover:text-brandOrange transition-colors">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  // Robust Scroll-to-top logic on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen flex flex-col antialiased bg-white">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />

          <Route path="/services/cleaning" element={<CleaningService />} />
          <Route path="/services/laundry" element={<LaundryService />} />
          <Route path="/services/cooking" element={<CookingService />} />
          <Route path="/services/nanny" element={<NannyService />} />
          <Route path="/services/errands" element={<ErrandsService />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </main>
      <Footer />

      {/* Floating Actions */}
      <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-40 items-end">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="bg-navy-900/90 hover:bg-navy-900 text-white w-14 h-14 rounded-figma shadow-figma flex items-center justify-center transition-figma hover:translate-y-[-4px]"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        )}
      </div>

      <div className="fixed bottom-8 left-8 z-40">
        <a
          href="https://wa.me/2348008275627"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20bd5a] text-white w-16 h-16 rounded-figma-lg shadow-figma-lg flex items-center justify-center transition-figma hover:translate-y-[-6px] hover:rotate-6"
          aria-label="Chat with us on WhatsApp"
        >
          <MessageCircle className="w-9 h-9" />
        </a>
      </div>
    </div>
  );
};

export default App;
