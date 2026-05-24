import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Activity, Cpu, Database, LineChart, Bot, Workflow, MessageSquare, Users, GitBranch, Dumbbell, FileText, Plus, X } from 'lucide-react';
import { MonoTag } from './primitives/MonoTag';

const iconMap = {
  Layers, Activity, Cpu, Database, LineChart, Bot, Workflow, MessageSquare, Users, GitBranch, Dumbbell, FileText
};

export const ProjectRow = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = iconMap[project.iconName] || Database;

  return (
    <div
      className="group relative border-t border-hair hover:border-accent/30 transition-colors duration-300 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* hover-fill bar from left */}
      <span className="absolute left-0 top-0 h-px w-0 bg-accent group-hover:w-full transition-all duration-700 ease-out" />

      <div className="py-6 flex flex-col md:flex-row md:items-center gap-5 md:gap-6 relative">

        {/* ID */}
        <div className="hidden md:flex w-8 shrink-0 font-mono text-[11px] tracking-mono text-text-muted group-hover:text-accent transition-colors">
          {project.id}
        </div>

        {/* Thumbnail */}
        <div className="md:w-[120px] shrink-0">
          <motion.div
            className="w-[140px] h-[80px] bg-bg-elev1 border border-hair rounded-btn flex items-center justify-center overflow-hidden relative group-hover:border-accent/40 transition-colors"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:to-transparent transition-all duration-500" />
            <Icon size={26} className="text-text-muted group-hover:text-accent relative z-10 transition-colors" />
          </motion.div>
        </div>

        {/* Title */}
        <div className="flex-1 min-w-0">
          <h3 className="font-sans font-medium text-white text-[clamp(20px,2.6vw,36px)] leading-[1.1] tracking-tightest group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-3 break-words">
            {project.title}
            {project.live && (
              <span className="relative inline-flex h-2.5 w-2.5" aria-label="Live">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(200,240,74,0.7)]" />
              </span>
            )}
          </h3>
          {project.outcome && (
            <p className="mt-2 text-text-meta text-[13px] md:text-[14px] leading-[1.5] break-words max-w-[60ch]">
              {project.outcome}
            </p>
          )}
        </div>

        {/* Tag */}
        <div className="md:w-[260px] shrink-0 md:text-right flex items-center md:justify-end gap-3 flex-wrap">
          <MonoTag className="group-hover:text-text-body transition-colors">{project.tag}</MonoTag>
          <motion.span
            className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full border border-hair text-text-meta group-hover:border-accent group-hover:text-accent group-hover:bg-accent/5 transition-all"
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Plus size={14} />
          </motion.span>
        </div>
      </div>

      {/* Expanded Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 md:pl-[176px] flex flex-col gap-6">
              {project.domain && (
                <MonoTag className="!text-accent">DOMAIN · {project.domain}</MonoTag>
              )}

              {project.problem ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-[860px]">
                  <div className="flex flex-col gap-2">
                    <MonoTag>PROBLEM</MonoTag>
                    <p className="text-neutral-300 text-[15px] leading-[1.6] break-words">{project.problem}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <MonoTag>BUILT</MonoTag>
                    <p className="text-neutral-300 text-[15px] leading-[1.6] break-words">{project.built}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <MonoTag className="!text-accent">IMPACT</MonoTag>
                    <p className="text-white text-[15px] leading-[1.6] break-words">{project.impact}</p>
                  </div>
                </div>
              ) : (
                <p className="text-neutral-300 text-[16px] leading-[1.6] max-w-[800px] break-words">
                  {project.desc}
                </p>
              )}

              <div className="flex flex-col gap-2">
                <MonoTag>STACK</MonoTag>
                <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.02, duration: 0.3 }}
                    className="font-mono text-[11px] uppercase tracking-mono text-text-meta border border-hair rounded-full px-3 py-1.5 hover:border-accent hover:text-white transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
