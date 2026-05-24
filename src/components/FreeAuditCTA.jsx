import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Check, Clock } from 'lucide-react';
import { MonoTag } from './primitives/MonoTag';

const bullets = [
  'What can be automated',
  'What data / tools are required',
  'What the MVP architecture should look like',
];

export const FreeAuditCTA = () => {
  const onClick = () => {
    window.dispatchEvent(new CustomEvent('prefill-contact', {
      detail: { type: 'AI Strategy Sprint', subject: 'I want a free AI automation audit for my workflow / project.' },
    }));
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      id="audit"
      className="relative pt-[120px] pb-8 scroll-mt-24"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative overflow-hidden rounded-card border border-accent/25 bg-gradient-to-br from-accent/[0.07] via-white/[0.03] to-transparent backdrop-blur-md p-6 md:p-10">
        <span className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
        <span className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/[0.06] blur-3xl" />

        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="md:col-span-7 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent">
                <Sparkles size={12} />
              </span>
              <MonoTag className="!text-accent">FREE AI AUTOMATION AUDIT</MonoTag>
            </div>
            <h3 className="font-sans font-medium tracking-tightest leading-[1.1] text-white text-[clamp(26px,3.6vw,40px)] break-words">
              Send me your workflow.<br className="hidden sm:block" /> <span className="text-accent">I'll tell you what to automate.</span>
            </h3>
            <p className="text-neutral-300 text-[15px] md:text-[16.5px] leading-[1.6] max-w-2xl">
              Share your document process, support flow, reporting process, or business problem.
              I'll tell you what can be automated, what should not be automated, and what the first MVP should look like.
            </p>
            <p className="flex items-center gap-2 text-text-meta text-[13px] md:text-[14px] leading-[1.5]">
              <Clock size={13} className="text-text-meta shrink-0" />
              I'll send my assessment within 48 hours.
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col gap-4">
            <ul className="flex flex-col gap-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-neutral-200 text-[15px] leading-[1.5]">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/15 text-accent">
                    <Check size={12} />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={onClick}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-accent text-bg-base px-6 py-3 font-sans text-[13px] font-semibold uppercase tracking-[0.14em] hover:shadow-[0_0_0_6px_rgba(200,240,74,0.18)] transition-all self-start"
            >
              Request Free AI Audit <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
