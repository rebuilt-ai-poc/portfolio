import { motion } from 'framer-motion';
import { SectionHeader } from './primitives/SectionHeader';
import { MonoTag } from './primitives/MonoTag';
import { skills } from '../data/skills';

export const Stack = () => {
  return (
    <motion.section
      id="stack"
      className="relative pt-[120px] md:pt-[160px] pb-16 scroll-mt-24"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <SectionHeader index="07" kicker="TOOLS" title="Stack." ghost="07" />

      <p className="text-text-body text-[16px] mb-12 max-w-[60ch]">
        Comfortable with whatever platform the work calls for. Current rotation:
      </p>

      <div className="flex flex-col border-t border-hair">
        {skills.map((skillGroup, gi) => (
          <motion.div
            key={gi}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: gi * 0.05, duration: 0.5 }}
            className="flex flex-col md:flex-row py-6 border-b border-hair gap-6"
          >
            <div className="md:w-3/12 shrink-0 pt-1.5">
              <MonoTag>{skillGroup.category}</MonoTag>
            </div>
            <div className="md:w-9/12 flex flex-wrap gap-2">
              {skillGroup.items.map((item, ii) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: gi * 0.05 + ii * 0.015, duration: 0.3 }}
                  whileHover={{ y: -2 }}
                  className="font-mono text-[12px] uppercase tracking-mono text-text-body border border-hair rounded-full px-3 py-1.5 hover:border-accent hover:text-white hover:bg-accent/5 transition-all cursor-default"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
