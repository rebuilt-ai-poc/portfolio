export const Marquee = ({ items, separator = '✦' }) => {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-hair py-6 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-12 shrink-0 font-sans font-medium tracking-tightest text-[clamp(28px,4vw,52px)] text-white/85">
            {item}
            <span className="text-accent text-[0.5em]">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
};
