import { useEffect, useState } from 'react';
import { sections } from '../../data/sections';

export const SectionRail = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col items-end gap-3 z-40">
      {sections.map(({ id, label }) => {
        const isActive = activeSection === id;
        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="group flex items-center gap-3 font-mono text-[11px] uppercase tracking-mono transition-all"
          >
            <span
              className={`transition-all duration-300 ${
                isActive ? 'text-white opacity-100' : 'text-text-meta opacity-0 group-hover:opacity-80 translate-x-2 group-hover:translate-x-0'
              }`}
            >
              {label}
            </span>
            <span
              className={`block h-px transition-all duration-300 ${
                isActive ? 'w-8 bg-accent' : 'w-3 bg-text-muted group-hover:w-5 group-hover:bg-white'
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};
