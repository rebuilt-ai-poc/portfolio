import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StatusChip } from './primitives/StatusChip';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Work',     href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'About',    href: '#about' },
    { label: 'Contact',  href: '#contact' },
  ];

  const scrollTo = (href) => {
    setIsOpen(false);
    if (!isHome) {
      window.location.href = `/${href}`;
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg-base/75 backdrop-blur-[14px] border-b border-hair' : 'bg-transparent border-b border-transparent'}`}>
        <div className="max-w-shell mx-auto px-5 sm:px-6 md:px-10 py-4 flex items-center justify-between">

          {/* Left: Monogram */}
          <Link to="/" className="font-sans font-medium text-[22px] text-white tracking-tightest leading-none flex items-center gap-1.5 group">
            <span>ak</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-125 transition-transform" />
          </Link>

          {/* Center: Links (Desktop) */}
          <div className="hidden md:flex items-center gap-1 font-mono text-[13px] text-text-meta">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-all"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right: Status & Resume (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/resume" className="group flex items-center gap-1 font-mono text-[13px] uppercase tracking-mono text-text-meta hover:text-white transition-soft">
              Resume
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <StatusChip />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden font-mono text-[13px] text-text-meta hover:text-white flex items-center gap-2"
            onClick={() => setIsOpen(true)}
          >
            MENU <Menu size={16} />
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-bg-base flex flex-col px-6 py-4">
          <div className="flex items-center justify-between mb-16">
            <div className="font-sans font-medium text-[22px] text-white tracking-tightest leading-none flex items-center gap-1.5">
              ak <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            </div>
            <button
              className="font-mono text-[13px] text-text-meta hover:text-white flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              CLOSE <X size={16} />
            </button>
          </div>

          <div className="flex flex-col gap-6 flex-1">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-left font-sans font-medium text-4xl text-white tracking-tightest hover:text-accent transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-6 pb-10">
            <Link to="/resume" onClick={() => setIsOpen(false)} className="flex items-center gap-2 font-mono text-[13px] uppercase tracking-mono text-text-meta hover:text-white">
              Resume <ArrowUpRight size={14} />
            </Link>
            <div className="self-start">
              <StatusChip />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
