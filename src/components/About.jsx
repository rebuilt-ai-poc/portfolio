import { motion } from 'framer-motion';
import { SectionHeader } from './primitives/SectionHeader';
import { MonoTag } from './primitives/MonoTag';
import { Counter } from './primitives/Counter';

const meta = [
  { k: 'ROLE',     v: 'AI Solution Architect' },
  { k: 'COMPANY',  v: 'Deloitte TT LLP' },
  { k: 'LOCATION', v: 'Global · APAC' },
  { k: 'FOCUS',    v: 'Agentic AI & GenAI' },
  { k: 'DOMAINS',  v: 'Enterprise · Health · Fin' },
];

const stats = [
  { value: 11, suffix: '+', label: 'Production systems' },
  { value: 4,  suffix: '',  label: 'Countries shipped' },
  { value: 6,  suffix: '',  label: 'Industries' },
  { value: 40, suffix: '%', label: 'Dev time reduced' },
];

export const About = () => {
  return (
    <motion.section
      id="about"
      className="relative pt-[160px] pb-16"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <SectionHeader index="02" kicker="WHO" title="Background." ghost="02" />

      <div className="flex flex-col md:flex-row gap-12 md:gap-8">
        {/* Left Meta */}
        <div className="md:w-4/12 flex flex-col gap-4">
          {meta.map((row, i) => (
            <motion.div
              key={row.k}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="flex justify-between border-b border-hair pb-3 group"
            >
              <MonoTag>{row.k}</MonoTag>
              <span className="text-white text-[13px] group-hover:text-accent transition-colors">{row.v}</span>
            </motion.div>
          ))}
        </div>

        {/* Right Prose */}
        <div className="md:w-8/12 flex flex-col gap-6 text-text-body text-[17px] leading-[1.6]">
          <p className="text-white text-[20px] leading-[1.5]">
            Currently AI Solution Architect at Deloitte TT LLP, building enterprise AI products across <span className="text-accent">Malaysia, India, Singapore, and Australia.</span>
          </p>
          <p>
            End-to-end engineer — comfortable across architecture, backend, AI workflows, cloud, data pipelines, and product/frontend delivery.
          </p>
          <p>
            Bias toward real-world AI impact: measurable outcomes, shipped systems, and reusable infrastructure — not hype.
          </p>
        </div>
      </div>

      {/* Stats Row */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 border-y border-hair">
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
