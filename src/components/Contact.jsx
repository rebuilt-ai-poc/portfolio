import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionHeader } from './primitives/SectionHeader';
import { Button } from './primitives/Button';
import { Magnetic } from './primitives/Magnetic';
import { ArrowUpRight, Copy, Check } from 'lucide-react';

const EMAIL = 'adityakadam.de@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/adityakadamm';
const GITHUB = 'https://github.com/rebuilt-ai-poc';

const PROJECT_TYPES = [
  'Hiring / Job Opportunity',
  'AI Strategy Sprint',
  'RAG / Chatbot MVP',
  'Agentic Automation',
  'AI Product Build',
  'Other',
];

export const Contact = () => {
  const [status, setStatus] = useState('idle');
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', type: 'AI Strategy Sprint', message: '' });
  const sectionRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      const { type, subject } = e.detail || {};
      setForm((f) => ({
        ...f,
        type: type && PROJECT_TYPES.includes(type) ? type : f.type,
        message: subject ? subject : f.message,
      }));
    };
    window.addEventListener('prefill-contact', handler);
    return () => window.removeEventListener('prefill-contact', handler);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    const subject = encodeURIComponent(`[${form.type}] ${form.name || 'New inquiry'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject Type: ${form.type}\n\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
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
    { label: 'RESUME',   href: '/resume',         icon: ArrowUpRight, internal: true },
  ];

  return (
    <motion.section
      ref={sectionRef}
      id="contact"
      className="relative pt-[160px] pb-16 scroll-mt-24"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <SectionHeader index="09" kicker="GET IN TOUCH" title="Contact." ghost="09" />

      <div className="mb-12 md:mb-16">
        <h3 className="font-sans font-medium tracking-tightest leading-[1.05] text-white text-[clamp(28px,4.6vw,56px)] max-w-[22ch] break-words">
          Have a workflow, product, or data problem that AI should solve? <span className="text-accent">Let's build the first working version.</span>
        </h3>
        <p className="mt-5 text-neutral-300 text-[15px] md:text-[17px] leading-[1.6] max-w-2xl">
          I work best with teams that want production-grade GenAI, RAG, agentic automation, or AI product architecture — not vague AI experiments.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            onClick={copyEmail}
            className="group inline-flex items-center gap-2 border border-hair hover:border-accent/40 rounded-full px-4 py-2 font-mono text-[12px] md:text-[13px] uppercase tracking-mono text-neutral-300 hover:text-white transition-all break-all"
          >
            <span className="break-all">{EMAIL}</span>
            {copied ? <Check size={14} className="text-accent shrink-0" /> : <Copy size={13} className="text-text-meta group-hover:text-accent transition-colors shrink-0" />}
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
        <div className="md:w-6/12 flex flex-col">
          {links.map(({ label, href, icon: Icon, external, internal }) => {
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

        <div className="md:w-6/12">
          <form onSubmit={handleSubmit} className="flex flex-col gap-7">
            <FloatField id="name" label="Name" type="text" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
            <FloatField id="email" label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />

            <div className="flex flex-col gap-2">
              <label htmlFor="type" className="font-mono text-[11px] uppercase tracking-mono text-text-meta">Project Type</label>
              <select
                id="type"
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="bg-transparent border-b border-hair text-white text-[16px] py-3 focus:outline-none focus:border-accent transition-colors w-full appearance-none"
              >
                {PROJECT_TYPES.map((t) => (
                  <option key={t} value={t} className="bg-bg-base text-white">{t}</option>
                ))}
              </select>
            </div>

            <FloatField id="message" label="Message" textarea value={form.message} onChange={(v) => setForm({ ...form, message: v })} />

            <Magnetic>
              <Button type="submit" disabled={status === 'sending' || status === 'sent'} className="self-start mt-2">
                {status === 'idle' && 'Send message'}
                {status === 'sending' && 'Opening mail…'}
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

const FloatField = ({ id, label, type = 'text', textarea, value, onChange }) => {
  const cls = "bg-transparent border-b border-hair text-white text-[16px] py-3 focus:outline-none focus:border-accent transition-colors peer w-full";
  return (
    <div className="flex flex-col relative">
      {textarea ? (
        <textarea id={id} required rows={3} placeholder=" " value={value} onChange={(e) => onChange?.(e.target.value)} className={`${cls} resize-none`} />
      ) : (
        <input id={id} type={type} required placeholder=" " value={value} onChange={(e) => onChange?.(e.target.value)} className={cls} />
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
