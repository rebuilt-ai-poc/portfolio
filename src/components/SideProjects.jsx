import { motion } from 'framer-motion';
import { SectionHeader } from './primitives/SectionHeader';
import { ProjectRow } from './ProjectRow';
import { MonoTag } from './primitives/MonoTag';
import { sideProjects } from '../data/sideProjects';

export const SideProjects = () => {
  return (
    <motion.section
      id="side-projects"
      className="relative pt-[120px] md:pt-[160px] pb-16 scroll-mt-24"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <SectionHeader
        index="03"
        kicker="SIDE PROJECTS"
        title="Built end-to-end, on my own time."
        ghost="03"
      />

      <div className="flex items-center justify-between mb-6 px-1">
        <MonoTag>{sideProjects.length} ENTRIES · CLICK TO EXPAND</MonoTag>
        <MonoTag className="text-text-muted">PERSONAL · SOLO BUILDS</MonoTag>
      </div>

      <div className="flex flex-col border-b border-hair">
        {[...sideProjects].reverse().map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </div>
    </motion.section>
  );
};
