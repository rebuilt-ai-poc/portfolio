import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setIsVisible(window.scrollY > 600);
    toggle();
    window.addEventListener('scroll', toggle, { passive: true });
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`group fixed bottom-[26px] right-[26px] w-10 h-10 flex items-center justify-center bg-bg-elev1/82 backdrop-blur border border-hair rounded-full transition-all duration-300 z-40 hover:border-accent hover:bg-accent/10 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={16} className="text-text-body group-hover:text-accent group-hover:-translate-y-0.5 transition-all" />
    </button>
  );
};
