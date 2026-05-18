import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionHeader } from './primitives/SectionHeader';
import { Button } from './primitives/Button';
import { Magnetic } from './primitives/Magnetic';
import { ArrowUpRight, ArrowDown, Copy, Check } from 'lucide-react';

const EMAIL = 'adityakadam.de@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/adityakadamm';
const GITHUB = 'https://github.com/rebuilt-ai-poc';

export const Contact = () => {
  const [status, setStatus] = useState('idle');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 700);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  const links = [
    { label: 'EMAIL',    href: `mailto:${EMAIL}`, icon: ArrowUpRight },
    { label: 'LINKEDIN', href: LINKEDIN,          icon: ArrowUpRight, external: true },
    { label: 'GITHUB',   href: GITHUB,            icon: ArrowUpRight, external: true },
    { label: 'RESUME',   href: '/resume',          icon: ArrowUpRight, internal: true },
  ];

  return (
    <motion.section
      id="contact"
      className="relative pt-[160px] pb-16"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <SectionHeader index="06" kicker="GET IN TOUCH" title="Contact." ghost="06" />

      {/* Big CTA prompt */}
      <div className="mb-16">
        <h3 className="font-sans font-medium tracking-tightest leading-[1.05] text-white text-[clamp(36px,5vw,64px)] max-w-[18ch]">
          Have a problem worth solving? <span className="text-accent">Let's talk.</span>
        </h3>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            onClick={copyEmail}
            className="group inline-flex items-center gap-2 border border-hair hover:border-accent/40 rounded-full px-4 py-2 font-mono text-[13px] uppercase tracking-mono text-text-body hover:text-white transition-all"
          >
            <span>{EMAIL}</span>
            {copied ? <Check size={14} className="text-accent" /> : <Copy size={13} className="text-text-meta group-hover:text-accent transition-colors" />}
            <span className="sr-only">Copy email</span>
          </button>
          {copied && (
            <motion.span
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-[11px] uppercase tracking-mono text-accent"
            >
              Copied
            </motion.span>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
        {/* Left Links */}
        <div className="md:w-6/12 flex flex-col">
          {links.map(({ label, href, icon: Icon, download, external, internal }) => {
            const inner = (
              <>
                <span className="font-mono text-[13px] uppercase tracking-mono text-text-meta group-hover:text-white transition-soft relative">
                  {label}
                  <span className="absolute -bottom-1 left-0 h-px bg-accent w-0 group-hover:w-full transition-all duration-500" />
                </span>
                <Icon size={16} className="text-text-meta group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </>
            );
            return (
              <div key={label} className="border-b border-hair group">
                {internal ? (
                  <Link to={href} className="flex items-center justify-between py-5 relative">
                    {inner}
                  </Link>
                ) : (
                  <a
                    href={href}
                    download={download}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="flex items-center justify-between py-5 relative"
                  >
                    {inner}
                  </a>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Form */}
        <div className="md:w-6/12">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <FloatField id="name" label="Name" type="text" />
            <FloatField id="email" label="Email" type="email" />
            <FloatField id="message" label="Message" textarea />

            <Magnetic>
              <Button type="submit" disabled={status === 'sending' || status === 'sent'} className="self-start mt-2">
                {status === 'idle' && 'Send message'}
                {status === 'sending' && 'Sending…'}
                {status === 'sent' && 'Message sent ✓'}
              </Button>
            </Magnetic>
          </form>
        </div>
      </div>

      <div className="mt-24 text-text-muted text-[16px] flex items-center gap-2">
        <span className="w-8 h-px bg-text-muted/40" />
        Nowhere else.
      </div>
    </motion.section>
  );
};

const FloatField = ({ id, label, type = 'text', textarea }) => {
  const cls = "bg-transparent border-b border-hair text-white text-[16px] py-3 focus:outline-none focus:border-accent transition-colors peer w-full";
  return (
    <div className="flex flex-col relative">
      {textarea ? (
        <textarea id={id} required rows={3} placeholder=" " className={`${cls} resize-none`} />
      ) : (
        <input id={id} type={type} required placeholder=" " className={cls} />
      )}
      <label
        htmlFor={id}
        className="absolute left-0 top-3 text-text-muted text-[16px] pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[12px] peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:text-text-meta"
      >
        {label}
      </label>
    </div>
  );
};
