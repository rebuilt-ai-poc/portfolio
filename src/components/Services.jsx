import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, MessageSquare, Workflow, Boxes } from 'lucide-react';
import { SectionHeader } from './primitives/SectionHeader';
import { MonoTag } from './primitives/MonoTag';

const offers = [
  {
    icon: Compass,
    label: 'AI STRATEGY SPRINT',
    title: 'AI Strategy Sprint',
    best: 'Founders or teams who know they need AI but do not know what to build first.',
    deliverables: [
      'AI use-case discovery',
      'Workflow and data assessment',
      'Build-vs-buy recommendation',
      'Architecture blueprint',
      'MVP roadmap',
    ],
    cta: 'Start with Strategy',
    type: 'AI Strategy Sprint',
    subject: 'I want to start with an AI Strategy Sprint.',
  },
  {
    icon: MessageSquare,
    label: 'RAG / CHATBOT MVP',
    title: 'RAG / Chatbot MVP',
    best: 'Companies with documents, databases, policies, SOPs, reports, or knowledge trapped across files and systems.',
    deliverables: [
      'Data ingestion plan',
      'Vector search / semantic retrieval',
      'Chat interface',
      'Source-aware answers',
      'Admin-ready MVP',
    ],
    cta: 'Build a RAG MVP',
    type: 'RAG / Chatbot MVP',
    subject: 'I want to build a RAG / chatbot MVP.',
  },
  {
    icon: Workflow,
    label: 'AGENTIC AUTOMATION',
    title: 'Agentic Automation Build',
    best: 'Teams with repetitive manual workflows that require reasoning, routing, tool calls, validation, or review.',
    deliverables: [
      'Multi-agent workflow',
      'API / tool integrations',
      'Human-in-the-loop review',
      'Logs, evaluation, and guardrails',
      'Production-ready backend',
    ],
    cta: 'Automate a Workflow',
    type: 'Agentic Automation',
    subject: 'I want to automate a workflow with agentic AI.',
  },
  {
    icon: Boxes,
    label: 'PRODUCT BUILD PARTNER',
    title: 'AI Product Build Partner',
    best: 'Startups or internal teams building an AI-first product.',
    deliverables: [
      'Solution architecture',
      'AI workflow design',
      'Backend APIs',
      'Frontend integration support',
      'Deployment support',
    ],
    cta: 'Build the Product',
    type: 'AI Product Build',
    subject: 'I want to build an AI product end-to-end.',
  },
];

const handleClick = (type, subject) => {
  window.dispatchEvent(new CustomEvent('prefill-contact', { detail: { type, subject } }));
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

export const Services = () => {
  return (
    <motion.section
      id="services"
      className="relative pt-[160px] pb-8 scroll-mt-24"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <SectionHeader index="04" kicker="SERVICES / WORK WITH ME" title="AI build offers for teams that need outcomes." ghost="04" />

      <p className="text-neutral-300 text-[16px] md:text-[18px] leading-[1.6] max-w-3xl mb-10">
        Whether you need clarity, an MVP, or a production-ready AI workflow, I package the work around business problems and delivery milestones — not vague experiments.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {offers.map(({ icon: Icon, label, title, best, deliverables, cta, type, subject }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            className="group relative rounded-card border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 md:p-8 flex flex-col transition-all duration-300 hover:border-accent/50 hover:bg-white/[0.06] overflow-hidden"
          >
            <span className="absolute inset-x-0 top-0 h-px w-0 bg-accent group-hover:w-full transition-all duration-700 ease-out" />
            <div className="flex items-center justify-between mb-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                <Icon size={18} />
              </span>
              <MonoTag className="!text-accent">{label}</MonoTag>
            </div>
            <h3 className="font-sans font-medium text-white text-[24px] md:text-[28px] leading-[1.15] tracking-tightest mb-3 break-words">
              {title}
            </h3>
            <p className="text-neutral-300 text-[14.5px] md:text-[15.5px] leading-[1.55] mb-5">
              <span className="text-neutral-400">Best for: </span>{best}
            </p>
            <ul className="flex flex-col gap-2 mb-7">
              {deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-neutral-300 text-[14px] md:text-[14.5px] leading-[1.5]">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <button
                onClick={() => handleClick(type, subject)}
                className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 py-2.5 font-sans text-[13px] font-semibold uppercase tracking-[0.12em] text-accent hover:bg-accent hover:text-bg-base transition-all"
              >
                {cta} <ArrowUpRight size={14} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
