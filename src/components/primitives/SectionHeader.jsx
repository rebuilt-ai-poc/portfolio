import { motion } from 'framer-motion';
import { GhostNumeral } from './GhostNumeral';
import { MonoTag } from './MonoTag';
import { ArrowUpRight } from 'lucide-react';

export const SectionHeader = ({ index, kicker, title, linkLabel, linkHref, ghost }) => {
  return (
    <div className="relative pb-12 mb-12 lg:mb-16">
      <GhostNumeral n={ghost} />

      <div className="flex flex-col md:flex-row md:items-baseline gap-6 md:gap-8 relative z-10">
        <div className="md:w-2/12 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-6 h-px bg-accent" />
            <MonoTag>{index} / {kicker}</MonoTag>
          </div>
        </div>

        <div className="md:w-10/12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans font-medium tracking-tightest leading-[1.02] text-white"
            style={{ fontSize: 'clamp(40px, 5.5vw, 64px)' }}
          >
            {title}
          </motion.h2>

          {linkLabel && (
            <a href={linkHref || '#'}
               className="group flex items-center gap-1 font-mono text-[13px] uppercase tracking-mono text-text-meta hover:text-white transition-soft shrink-0">
              {linkLabel}
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          )}
        </div>
      </div>

      {/* gradient hairline */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-hair via-soft to-transparent origin-left"
      />
    </div>
  );
};
