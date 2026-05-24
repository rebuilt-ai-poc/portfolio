import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, Rocket, ArrowUpRight } from 'lucide-react';
import { MonoTag } from './primitives/MonoTag';

const prefill = (detail) => {
  window.dispatchEvent(new CustomEvent('prefill-contact', { detail }));
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

export const IntentPaths = () => {
  return (
    <motion.section
      id="intent"
      className="relative pt-[120px] pb-8 scroll-mt-24"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col gap-3 mb-10">
        <div className="flex items-center gap-2">
          <span className="w-6 h-px bg-accent" />
          <MonoTag>00 / START HERE</MonoTag>
        </div>
        <h2 className="font-sans font-medium tracking-tightest leading-[1.05] text-white text-[clamp(28px,4.4vw,52px)] max-w-3xl">
          Choose the path that fits your intent.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {/* Companies & Recruiters */}
        <div className="group relative rounded-card border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 md:p-8 transition-all duration-300 hover:border-accent/50 hover:bg-white/[0.05] hover:-translate-y-0.5 overflow-hidden">
          <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
              <Briefcase size={16} />
            </span>
            <MonoTag className="!text-accent">FOR COMPANIES & RECRUITERS</MonoTag>
          </div>
          <h3 className="font-sans font-medium text-white text-[22px] md:text-[26px] leading-[1.2] tracking-tightest mb-3">
            Hiring for AI Solution Architect or GenAI Engineer roles?
          </h3>
          <p className="text-neutral-300 text-[15px] md:text-[16px] leading-[1.6] mb-7">
            Shipped 7 enterprise AI systems at Deloitte across 4 countries — often as the sole engineer from architecture through deployment. RAG, GenAI, agentic workflows, automation.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-bg-base px-5 py-2.5 font-sans text-[13px] font-semibold uppercase tracking-[0.12em] hover:shadow-[0_0_0_6px_rgba(200,240,74,0.18)] transition-all"
            >
              View Resume <ArrowUpRight size={14} />
            </Link>
            <button
              onClick={() => prefill({ type: 'Hiring / Job Opportunity', subject: 'Hiring for an AI / GenAI role.' })}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-2.5 font-sans text-[13px] font-semibold uppercase tracking-[0.12em] text-white hover:border-white/30 hover:bg-white/[0.08] transition-all"
            >
              Contact for Role
            </button>
          </div>
        </div>

        {/* Founders & Business Clients */}
        <div className="group relative rounded-card border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 md:p-8 transition-all duration-300 hover:border-accent/50 hover:bg-white/[0.05] hover:-translate-y-0.5 overflow-hidden">
          <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
              <Rocket size={16} />
            </span>
            <MonoTag className="!text-accent">FOR FOUNDERS & BUSINESS CLIENTS</MonoTag>
          </div>
          <h3 className="font-sans font-medium text-white text-[22px] md:text-[26px] leading-[1.2] tracking-tightest mb-3">
            Have a workflow that AI should automate?
          </h3>
          <p className="text-neutral-300 text-[15px] md:text-[16px] leading-[1.6] mb-7">
            I take your AI idea from "we should do something with AI" to a working production system — scoped, built, and deployed. No experiments. No POC decks. A working system.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => prefill({ type: 'AI Strategy Sprint', subject: 'I want a free AI automation audit for my workflow.' })}
              className="inline-flex items-center gap-2 rounded-full bg-accent text-bg-base px-5 py-2.5 font-sans text-[13px] font-semibold uppercase tracking-[0.12em] hover:shadow-[0_0_0_6px_rgba(200,240,74,0.18)] transition-all"
            >
              Book AI Audit <ArrowUpRight size={14} />
            </button>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-2.5 font-sans text-[13px] font-semibold uppercase tracking-[0.12em] text-white hover:border-white/30 hover:bg-white/[0.08] transition-all"
            >
              See Offers
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
