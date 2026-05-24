import { motion } from 'framer-motion';
import { MonoTag } from './primitives/MonoTag';
import { Counter } from './primitives/Counter';
import { stats } from '../data/stats';

export const ProofStats = () => {
  return (
    <motion.section
      id="proof"
      className="relative pt-10 md:pt-14 pb-2"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-4 flex items-center gap-2">
        <span className="w-6 h-px bg-accent" />
        <MonoTag>TRACK RECORD</MonoTag>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 border-y border-hair">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className={`py-8 px-4 flex flex-col gap-2 ${i < stats.length - 1 ? 'md:border-r border-hair' : ''} ${i < 2 ? 'border-b md:border-b-0 border-hair' : ''} ${i % 2 === 0 ? 'border-r md:border-r border-hair' : ''}`}
          >
            <span className="font-sans font-medium text-white text-[clamp(36px,4vw,52px)] leading-none tracking-tightest">
              <Counter to={s.value} suffix={s.suffix} />
            </span>
            <MonoTag>{s.label}</MonoTag>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
