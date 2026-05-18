import { motion } from 'framer-motion';

export const SplitHeadline = ({ text, lines, className = '' }) => {
  const items = lines ?? [text];

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
  };

  const child = {
    hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.9, ease: 'easeOut' }
    }
  };

  return (
    <motion.h1
      className={`font-sans font-medium tracking-tightest leading-[1] ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {items.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.05em]">
          <motion.span variants={child} className="block will-change-transform">
            {line}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
};
