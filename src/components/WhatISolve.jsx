import { motion } from 'framer-motion';
import { Workflow, Database, Bot, TrendingUp } from 'lucide-react';
import { SectionHeader } from './primitives/SectionHeader';

const items = [
  {
    icon: Workflow,
    title: 'Enterprise AI Automation',
    desc: 'Your team is doing the same thing manually every day — reviewing documents, chasing approvals, pulling reports. I build the AI layer that handles it automatically so your people focus on decisions, not data entry.',
  },
  {
    icon: Database,
    title: 'RAG & Knowledge Systems',
    desc: 'Your knowledge is locked in PDFs, SharePoints, and databases nobody can search properly. I build systems where your team asks a question and gets a sourced, accurate answer — not a keyword match.',
  },
  {
    icon: Bot,
    title: 'Agentic AI Workflows',
    desc: 'Some workflows are too complex for a single AI call — they need routing, tool use, self-correction, and human checkpoints. I build agents that handle the full sequence and know when to escalate.',
  },
  {
    icon: TrendingUp,
    title: 'Forecasting & Decision Intelligence',
    desc: 'Pricing, inventory, demand forecasting, recommendation systems, and business decision-support engines.',
  },
];

export const WhatISolve = () => {
  return (
    <motion.section
      id="solve"
      className="relative pt-[120px] pb-8 scroll-mt-24"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <SectionHeader index="01" kicker="WHAT I SOLVE" title="Problems I turn into AI systems." ghost="01" />

      <p className="text-neutral-300 text-[16px] md:text-[18px] leading-[1.6] max-w-3xl mb-10">
        I work best where AI is connected to a real workflow, real data, and a measurable business outcome.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {items.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            className="group relative rounded-card border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 md:p-7 transition-all duration-300 hover:border-accent/40 hover:bg-white/[0.05] overflow-hidden"
          >
            <span className="absolute inset-x-0 top-0 h-px w-0 bg-accent group-hover:w-full transition-all duration-700 ease-out" />
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-bg-elev1/60 text-accent mb-5">
              <Icon size={18} />
            </span>
            <h3 className="font-sans font-medium text-white text-[20px] md:text-[22px] leading-[1.2] tracking-tightest mb-2">
              {title}
            </h3>
            <p className="text-neutral-300 text-[14.5px] md:text-[15.5px] leading-[1.6] break-words">
              {desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
