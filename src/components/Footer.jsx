import { LiveClock } from './primitives/LiveClock';

export const Footer = () => {
  return (
    <footer className="border-t border-hair pt-10 pb-12 mt-16 md:mt-24 relative">
      {/* Big wordmark */}
      <div className="select-none pointer-events-none mb-10">
        <h2 className="font-sans font-medium text-white/[0.06] tracking-tightest leading-[0.85] text-[clamp(72px,18vw,260px)]">
          ADITYA
        </h2>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 font-mono text-[11px] text-text-muted uppercase tracking-mono">
        <div className="flex flex-col gap-1">
          <span>MMXIV–MMXXVI · Memento vivere.</span>
          <span className="text-text-meta/70">Handmade · Production-grade · Available.</span>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href="#projects" className="hover:text-white transition-soft">Projects</a>
          <span>·</span>
          <a href="#about" className="hover:text-white transition-soft">About</a>
          <span>·</span>
          <a href="#contact" className="hover:text-white transition-soft">Contact</a>
        </div>
        <div>
          <LiveClock />
        </div>
      </div>
    </footer>
  );
};
