import { motion } from 'framer-motion';
import { SectionHeader } from './primitives/SectionHeader';
import { ProjectRow } from './ProjectRow';
import { MonoTag } from './primitives/MonoTag';
import { projects } from '../data/projects';

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="relative pt-[160px] pb-16"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <SectionHeader
        index="01"
        kicker="RECENTLY"
        title="Selected work, 2021–present."
        linkLabel="ALL WORK"
        ghost="01"
      />

      <div className="flex items-center justify-between mb-6 px-1">
        <MonoTag>{projects.length} ENTRIES · CLICK TO EXPAND</MonoTag>
        <MonoTag className="text-text-muted">SORTED · MOST RECENT</MonoTag>
      </div>

      <div className="flex flex-col border-b border-hair">
        {[...projects].reverse().map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </div>
    </motion.section>
  );
};
