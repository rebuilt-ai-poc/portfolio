import { motion } from 'framer-motion';
import { SectionHeader } from './primitives/SectionHeader';
import { MonoTag } from './primitives/MonoTag';
import { impact } from '../data/impact';

export const Trajectory = () => {
  return (
    <motion.section
      id="trajectory"
      className="relative pt-[120px] md:pt-[160px] pb-16 scroll-mt-24"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <SectionHeader index="05" kicker="IMPACT" title="Trajectory." ghost="05" />

      <div className="flex flex-col border-t border-hair">
        {impact.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex flex-col md:flex-row md:items-center py-7 border-b border-hair gap-4 hover:bg-white/[0.02] transition-colors overflow-hidden"
          >
            <span className="absolute left-0 top-0 h-full w-[2px] bg-accent scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />

            <div className="md:w-3/12 shrink-0 md:pl-4">
              <MonoTag className="group-hover:text-accent transition-colors">{item.category}</MonoTag>
            </div>
            <div className="md:w-6/12 font-sans font-medium text-white text-[18px] leading-[1.45] group-hover:translate-x-1 transition-transform duration-400">
              {item.desc}
            </div>
            <div className="md:w-3/12 shrink-0 md:text-right md:pr-1">
              <span className="font-mono text-[14px] uppercase tracking-mono text-text-meta group-hover:text-accent transition-colors">
                {item.meta}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
