import { motion } from 'framer-motion';
import { Check, Minus } from 'lucide-react';
import { SectionHeader } from './primitives/SectionHeader';

const fit = [
  'Enterprises building internal GenAI tools',
  'Startups building AI-first products',
  'Consulting teams needing fast AI delivery',
  'Founders who need MVP architecture + execution',
  'Recruiters hiring for AI Solution Architect / GenAI Engineer roles',
];

const notFit = [
  'Toy chatbot demos',
  'No-clear-problem AI experiments',
  'Projects without access to real data or process context',
  'Work where AI is added only for hype',
];

export const BestFit = () => {
  return (
    <motion.section
      id="fit"
      className="relative pt-[120px] pb-8 scroll-mt-24"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <SectionHeader index="08" kicker="SELECTIVITY" title="Best fit." ghost="08" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        <div className="rounded-card border border-accent/25 bg-accent/[0.04] backdrop-blur-md p-6 md:p-8">
          <div className="flex items-center gap-2 mb-5">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent">
              <Check size={12} />
            </span>
            <span className="font-mono text-[12px] uppercase tracking-[0.16em] text-accent">Best fit for</span>
          </div>
          <ul className="flex flex-col gap-3.5">
            {fit.map((f) => (
              <li key={f} className="flex items-start gap-3 text-neutral-200 text-[15px] md:text-[16px] leading-[1.55]">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-card border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 md:p-8">
          <div className="flex items-center gap-2 mb-5">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.06] text-neutral-400 border border-white/10">
              <Minus size={12} />
            </span>
            <span className="font-mono text-[12px] uppercase tracking-[0.16em] text-neutral-400">Not a fit for</span>
          </div>
          <ul className="flex flex-col gap-3.5">
            {notFit.map((f) => (
              <li key={f} className="flex items-start gap-3 text-neutral-400 text-[15px] md:text-[16px] leading-[1.55]">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-500" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};
