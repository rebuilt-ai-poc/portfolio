export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "group relative inline-flex items-center justify-center font-sans font-medium text-[15px] rounded-btn px-5 py-3 transition-all duration-300 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent overflow-hidden";

  const variants = {
    primary: "bg-accent text-bg-base hover:shadow-[0_0_0_6px_rgba(200,240,74,0.18)] hover:-translate-y-0.5",
    secondary: "bg-transparent text-white border border-soft hover:bg-white/5 hover:border-white/25 hover:-translate-y-0.5",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      {variant === 'primary' && (
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      )}
    </button>
  );
};
