import { motion } from 'framer-motion';
import { Marquee } from './primitives/Marquee';

const principles = [
  { n: '01', title: 'Ship measurable outcomes.',   body: 'Hype optional. Impact mandatory. Every system I build has a number attached — time saved, accuracy gained, decisions accelerated.' },
  { n: '02', title: 'Architecture before models.', body: 'A clean system with a small model often beats a fragile pipeline behind GPT-5. Foundations first, intelligence second.' },
  { n: '03', title: 'Reusable over one-off.',      body: 'A solved problem should not be re-solved. Modules, pipelines, prompts, and patterns get distilled into shared infrastructure.' },
];

export const Philosophy = () => {
  return (
    <section id="philosophy" className="relative pt-[160px] pb-16">
      {/* Marquee strip */}
      <Marquee items={[
        'Build to ship',
        'Measure what matters',
        'Reusable over clever',
        'AI with intention',
        'Models · Systems · Outcomes',
        'Production-grade or not at all',
      ]} />

      <div className="mt-20 grid md:grid-cols-3 gap-6">
        {principles.map((p, i) => (
          <motion.div
            key={p.n}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative p-6 rounded-btn border border-hair bg-bg-elev1/20 lift hover:border-accent/30 group overflow-hidden"
          >
            <span className="absolute -top-6 -right-2 text-[100px] font-bold text-ghost leading-none select-none pointer-events-none group-hover:text-accent/10 transition-colors">
              {p.n}
            </span>
            <div className="relative">
              <h4 className="font-sans font-medium text-white text-[20px] tracking-tightest leading-tight mb-3">
                {p.title}
              </h4>
              <p className="text-text-body text-[14px] leading-[1.6]">
                {p.body}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
