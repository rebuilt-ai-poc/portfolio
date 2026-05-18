export const MonoTag = ({ children, className = '' }) => {
  return (
    <span className={`font-mono text-[13px] uppercase tracking-mono text-text-meta ${className}`}>
      {children}
    </span>
  );
};
