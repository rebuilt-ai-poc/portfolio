export const StatusChip = () => {
  return (
    <div className="flex items-center gap-2 border border-hair rounded-full px-2.5 py-1 bg-bg-elev1/50 backdrop-blur relative overflow-hidden">
      <span className="relative flex w-1.5 h-1.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
        <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-accent" />
      </span>
      <span className="font-mono text-[11px] text-text-body uppercase tracking-mono leading-none pt-[1px]">
        Available for work
      </span>
    </div>
  );
};
