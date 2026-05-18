import { useEffect, useState } from 'react';

export const LiveClock = ({ tz = 'Asia/Kolkata', label = 'IST' }) => {
  const [now, setNow] = useState('');

  useEffect(() => {
    const tick = () => {
      const t = new Date().toLocaleTimeString('en-GB', {
        timeZone: tz,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setNow(t);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [tz]);

  return (
    <span className="font-mono text-[13px] uppercase tracking-mono text-text-meta tabular-nums">
      {label} · {now}
    </span>
  );
};
