export const GhostNumeral = ({ n }) => {
  return (
    <span 
      className="absolute right-0 top-0 text-ghost font-bold pointer-events-none select-none -z-10 leading-[0.85]"
      style={{ fontSize: 'clamp(120px, 17vw, 210px)' }}
    >
      {n}
    </span>
  );
};
