import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, Sparkles, Briefcase } from 'lucide-react';
import { MonoTag } from './primitives/MonoTag';
import { Button } from './primitives/Button';
import { LiveClock } from './primitives/LiveClock';
import { Magnetic } from './primitives/Magnetic';
import { GlobeHero } from './ui/GlobeHero';

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.15 + i * 0.12,
    },
  }),
};

export const Hero = () => {
  return (
    <GlobeHero id="hero" className="min-h-[100svh] overflow-x-hidden">
      <div className="aurora pointer-events-none" />

      {/* Inner max-width container — hero itself spans full viewport */}
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 xl:px-16">

      {/* Metadata / status row — sits below the fixed navbar */}
      <div className="relative z-10 flex items-center justify-between gap-4 pt-[clamp(96px,12vh,128px)]">
        <MonoTag className="!text-neutral-300">AK / PORTFOLIO · v2026</MonoTag>
        <div className="hidden md:flex items-center gap-4">
          <LiveClock />
          <span className="text-neutral-400">·</span>
          <MonoTag className="!text-neutral-300">Memento vivere.</MonoTag>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col justify-center gap-7 md:gap-9 pt-10 md:pt-14 pb-24 md:pb-28 w-full text-left min-h-[calc(100svh-140px)]">

        {/* 1. Eyebrow / status */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="flex flex-wrap items-center gap-3"
        >
          {/* Glass UI — neutral pill */}
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] pl-1 pr-4 py-1 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)_inset]">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent/20">
              <Sparkles size={11} className="text-accent" />
            </span>
            <span className="font-sans text-[11px] sm:text-[12px] font-medium tracking-[0.14em] sm:tracking-[0.16em] uppercase text-white">
              AI Solution Architect · Deloitte TT LLP · Enterprise + Startup AI
            </span>
          </span>

          {/* Glass UI — lime accent pill */}
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/[0.12] px-4 py-1.5 backdrop-blur-md shadow-[0_0_24px_rgba(200,240,74,0.15)]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="font-sans text-[12px] font-semibold tracking-[0.18em] uppercase text-accent">
              Available for Work
            </span>
          </span>
        </motion.div>

        {/* 2. Heading — guaranteed to animate to fully visible white */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="max-w-5xl text-[clamp(34px,7vw,92px)] font-semibold tracking-tightest leading-[0.98] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.6)] break-words"
        >
          Production-grade AI systems<br className="hidden sm:block" /> for <span className="text-accent">real business outcomes.</span>
        </motion.h1>

        {/* 3. Subheading */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="max-w-3xl text-[16px] md:text-[19px] text-neutral-300 leading-relaxed"
        >
          7 enterprise platforms. 4 countries. Deloitte, Westpac, FairPrice Singapore. All shipped solo, all in production.
        </motion.p>

        {/* 5. CTAs */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="flex flex-wrap items-center gap-4 md:gap-6"
        >
          <Magnetic>
            <Button onClick={() => {
              window.dispatchEvent(new CustomEvent('prefill-contact', { detail: { type: 'AI Strategy Sprint', subject: 'I want a free AI automation audit for my workflow / project.' } }));
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Book a Free AI Audit <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </Magnetic>
          <Magnetic>
            <Button variant="secondary" onClick={() => {
              window.dispatchEvent(new CustomEvent('prefill-contact', { detail: { type: 'Hiring / Job Opportunity', subject: 'Hiring for an AI / GenAI role.' } }));
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <Briefcase size={15} /> Hire / Recruit Me
            </Button>
          </Magnetic>
          <Link
            to="/resume"
            className="group hidden sm:flex items-center gap-1 font-mono text-[13px] uppercase tracking-mono text-neutral-300 hover:text-white transition-soft ml-2 link-underline"
          >
            View Resume
            <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>

      </div>
      {/* /inner max-width container */}

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="hidden md:flex absolute bottom-6 left-0 right-0 justify-center pointer-events-none z-10"
      >
        <div className="flex flex-col items-center gap-2 text-text-muted">
          <span className="font-mono text-[10px] uppercase tracking-mono">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-text-muted to-transparent"
          />
        </div>
      </motion.div>
    </GlobeHero>
  );
};
