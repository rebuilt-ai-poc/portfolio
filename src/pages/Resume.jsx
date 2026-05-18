import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Download, Mail, ArrowLeft } from 'lucide-react';

const RESUME_FILE = '/Profile.pdf';
const RESUME_DOWNLOAD_NAME = 'Aditya-Kadam-Resume.pdf';

const HIGHLIGHTS = [
  {
    title: 'Enterprise AI Delivery',
    body: 'Shipping production-grade AI solutions for Fortune-scale clients across MY · IN · SG · AU at Deloitte.',
  },
  {
    title: 'Agentic AI / RAG / LLMs',
    body: 'Fine-tuning, RAG, LangChain/LangGraph, GPT-4o, Gemini, Vertex AI Search, Azure OpenAI.',
  },
  {
    title: 'Cloud + Full Stack',
    body: 'GCP, Azure, AWS, FastAPI, React, Vite, Supabase, BigQuery, FAISS, Alembic, Docker.',
  },
  {
    title: 'Cross-domain AI Products',
    body: 'Healthcare, finance, retail, hiring, fitness, forecasting — built, shipped, and scaled.',
  },
];

const TIMELINE = [
  { role: 'Assistant Manager · AI Solution Architect', org: 'Deloitte TT LLP', period: 'Current' },
  { role: 'Software Developer', org: 'HCLTech', period: 'Prior' },
  { role: 'Data Scientist', org: 'Swasthya AI', period: 'Prior' },
  { role: 'Data Science Intern', org: 'ResoluteAI', period: 'Prior' },
  { role: 'Data Scientist / Data Engineer', org: 'Freelance', period: 'Ongoing' },
];

const SKILLS = [
  'LLMs', 'RAG', 'Fine-Tuning', 'Agentic AI', 'LangChain', 'LangGraph', 'Prompt Engineering',
  'Python', 'FastAPI', 'React', 'TensorFlow', 'Azure OpenAI', 'GPT-4o', 'GCP', 'Vertex AI',
  'Gemini', 'Google ADK', 'FAISS', 'BigQuery', 'Supabase', 'PostgreSQL', 'Docker', 'GitHub',
  'Vite', 'Node.js', 'Alembic', 'SMOTE', 'Dash',
];

const EDUCATION = [
  { degree: 'Executive MBA · International Business', school: 'Symbiosis International University' },
  { degree: 'B.Tech · Computer Science Engineering with Data Analytics', school: 'VIT' },
];

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-bg-base text-white">
      {/* Minimal top bar */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-bg-base/75 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <Link to="/" className="group flex items-center gap-2 font-sans font-medium text-[18px] tracking-tightest text-white">
            <ArrowLeft size={16} className="text-text-meta group-hover:-translate-x-0.5 group-hover:text-white transition-all" />
            <span>ak</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-text-meta">/ resume</span>
          </Link>

          <div className="flex items-center gap-2">
            <a
              href={RESUME_FILE}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-md px-4 py-2 font-mono text-[12px] uppercase tracking-[0.16em] text-white hover:border-accent/50 hover:bg-accent/10 hover:text-accent transition-colors"
            >
              Open <ArrowUpRight size={13} />
            </a>
            <a
              href={RESUME_FILE}
              download={RESUME_DOWNLOAD_NAME}
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 font-mono text-[12px] font-semibold uppercase tracking-[0.16em] text-bg-base hover:shadow-[0_0_0_6px_rgba(200,240,74,0.18)] transition-all"
            >
              Download <Download size={13} />
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-24">

        {/* Hero block */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-md px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-200 mb-6">
            Resume · v2026
          </span>
          <h1 className="text-[clamp(40px,7vw,84px)] font-semibold leading-[0.95] tracking-tightest text-white">
            Resume
          </h1>
          <p className="mt-6 max-w-3xl text-[17px] md:text-[19px] text-neutral-200 leading-relaxed">
            AI Solution Architect building production-grade GenAI, RAG, and agentic AI systems
            across enterprise and personal AI products — healthcare, finance, retail, consulting,
            hiring, fitness, forecasting.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={RESUME_FILE}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-btn bg-accent px-5 py-3 font-sans text-[15px] font-medium text-bg-base hover:shadow-[0_0_0_6px_rgba(200,240,74,0.18)] hover:-translate-y-0.5 transition-all"
            >
              Open Resume <ArrowUpRight size={16} />
            </a>
            <a
              href={RESUME_FILE}
              download={RESUME_DOWNLOAD_NAME}
              className="inline-flex items-center gap-2 rounded-btn border border-white/15 bg-white/[0.05] backdrop-blur-md px-5 py-3 font-sans text-[15px] font-medium text-white hover:bg-white/[0.08] hover:border-white/25 transition-all"
            >
              Download PDF <Download size={15} />
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-btn border border-white/10 px-5 py-3 font-sans text-[15px] font-medium text-neutral-200 hover:text-white hover:border-white/20 transition-all"
            >
              Contact Me <Mail size={15} />
            </a>
          </div>
        </motion.section>

        {/* PDF Preview */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-300">
              Preview
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-meta">
              Profile.pdf
            </span>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
            <object
              data={RESUME_FILE}
              type="application/pdf"
              className="h-[80vh] w-full"
            >
              <div className="flex flex-col items-start gap-4 p-10">
                <p className="text-neutral-200">
                  Your browser cannot preview PDFs. Download the resume instead.
                </p>
                <a
                  href={RESUME_FILE}
                  download={RESUME_DOWNLOAD_NAME}
                  className="inline-flex items-center gap-2 rounded-btn bg-accent px-5 py-3 font-sans text-[15px] font-medium text-bg-base"
                >
                  Download PDF <Download size={15} />
                </a>
              </div>
            </object>
          </div>
        </motion.section>

        {/* Highlights */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <h2 className="mb-8 text-[clamp(24px,3vw,36px)] font-semibold leading-tight tracking-tightest text-white">
            Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {HIGHLIGHTS.map((h) => (
              <div
                key={h.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 hover:border-accent/30 transition-colors"
              >
                <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  {h.title}
                </div>
                <p className="text-neutral-200 leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Experience timeline */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <h2 className="mb-8 text-[clamp(24px,3vw,36px)] font-semibold leading-tight tracking-tightest text-white">
            Experience Snapshot
          </h2>
          <div className="flex flex-col">
            {TIMELINE.map((t) => (
              <div
                key={t.role}
                className="group flex flex-col md:flex-row md:items-center md:justify-between gap-2 border-t border-white/[0.08] py-5 hover:border-accent/30 transition-colors"
              >
                <div className="flex flex-col">
                  <span className="text-white text-[18px] md:text-[20px] font-medium tracking-tightest">
                    {t.role}
                  </span>
                  <span className="font-mono text-[12px] uppercase tracking-[0.16em] text-neutral-300">
                    {t.org}
                  </span>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-meta">
                  {t.period}
                </span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <h2 className="mb-8 text-[clamp(24px,3vw,36px)] font-semibold leading-tight tracking-tightest text-white">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {SKILLS.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-md px-3.5 py-1.5 font-sans text-[12px] font-medium text-white hover:border-accent/50 hover:bg-accent/10 hover:text-accent transition-colors"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24"
        >
          <h2 className="mb-8 text-[clamp(24px,3vw,36px)] font-semibold leading-tight tracking-tightest text-white">
            Education
          </h2>
          <div className="flex flex-col">
            {EDUCATION.map((e) => (
              <div key={e.degree} className="border-t border-white/[0.08] py-5">
                <div className="text-white text-[18px] font-medium tracking-tightest">{e.degree}</div>
                <div className="font-mono text-[12px] uppercase tracking-[0.16em] text-neutral-300">{e.school}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Footer CTA */}
        <div className="border-t border-white/[0.08] pt-10 pb-10 flex flex-wrap items-center justify-between gap-4">
          <Link to="/" className="font-mono text-[12px] uppercase tracking-[0.18em] text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-2">
            <ArrowLeft size={14} /> Back to portfolio
          </Link>
          <a
            href={RESUME_FILE}
            download={RESUME_DOWNLOAD_NAME}
            className="inline-flex items-center gap-2 rounded-btn bg-accent px-5 py-3 font-sans text-[15px] font-medium text-bg-base hover:shadow-[0_0_0_6px_rgba(200,240,74,0.18)] hover:-translate-y-0.5 transition-all"
          >
            Download Resume <Download size={15} />
          </a>
        </div>
      </main>
    </div>
  );
}
