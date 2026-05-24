import { motion } from 'framer-motion';
import { SectionHeader } from './primitives/SectionHeader';
import { tinkering } from '../data/tinkering';
import { Sparkles, LineChart, Bot, Brain, Database, Workflow, Cpu, Activity, MessageSquare, ArrowUpRight } from 'lucide-react';

const iconMap = {
  Sparkles, LineChart, Bot, Brain, Database, Workflow, Cpu, Activity, MessageSquare
};

export const Tinkering = () => {
  return (
    <motion.section
      id="tinkering"
      className="relative pt-[120px] md:pt-[160px] pb-16 scroll-mt-24"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <SectionHeader index="09" kicker="OUTSIDE" title="Tinkering." ghost="09" />

      <p className="text-text-body text-[16px] mb-12 max-w-[60ch]">
        Outside of client work, I keep my hands busy — research notebooks, side prototypes, half-built tools.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tinkering.map((item, i) => {
          const Icon = iconMap[item.iconName] || Cpu;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex items-start gap-4 p-5 rounded-btn border border-hair bg-bg-elev1/30 hover:border-accent/40 transition-all cursor-pointer lift overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-br from-accent/0 to-transparent group-hover:from-accent/[0.06] transition-all duration-500 pointer-events-none" />

              <div className="w-9 h-9 shrink-0 flex items-center justify-center bg-bg-elev1 border border-hair rounded group-hover:border-accent/40 group-hover:bg-accent/10 transition-all">
                <Icon size={16} className="text-text-muted group-hover:text-accent transition-colors" />
              </div>
              <div className="flex flex-col gap-1 flex-1 relative z-10">
                <h4 className="font-sans font-medium text-white text-[16px] leading-snug">
                  {item.title}
                </h4>
                <span className="font-mono text-[12px] text-text-meta uppercase tracking-mono">
                  {item.subtitle}
                </span>
              </div>
              <ArrowUpRight size={14} className="text-text-muted opacity-0 group-hover:opacity-100 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all relative z-10" />
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};
