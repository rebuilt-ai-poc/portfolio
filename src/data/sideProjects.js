// Edit here — no JSX changes required.

export const sideProjects = [
  {
    id: "S1",
    title: "AI Company Brain — Executive Intelligence",
    tag: "SIDE PROJECT · ENTERPRISE AGENTS",
    domain: "Enterprise · Multi-Agent Intelligence",
    problem: "Companies have critical business data scattered across emails, drives, documents, spreadsheets, CRMs, project tools, and databases. Leaders waste hours chasing updates while decisions get made on incomplete, outdated, or politically filtered information.",
    built: "An AI company brain that connects to enterprise data sources and deploys source-specific LangGraph agents — email, drive, CRM, project tools, spreadsheets, databases — to retrieve, verify, and summarize what's happening across the business, returning evidence-backed answers to executive questions.",
    impact: "Gives leadership a real-time, truthful view of company operations — reducing manual reporting work, exposing hidden risks early, and helping teams make faster, better-informed decisions grounded in source-cited evidence rather than gut feel.",
    desc: "AI company brain running parallel agents across enterprise sources to generate evidence-backed, C-suite-ready executive briefings.",
    stack: ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "FastAPI", "Python", "Pydantic", "LangGraph", "OpenAI", "Claude", "Gemini", "PostgreSQL", "Supabase", "FAISS", "Qdrant", "pgvector", "OAuth 2.0", "Docker", "Redis", "Celery"],
    iconName: "Workflow"
  },
  {
    id: "S2",
    title: "AI Growth Companion — 30-Day Transformation",
    tag: "SIDE PROJECT · CONSUMER AI",
    domain: "Self-Improvement · Consumer AI",
    problem: "People increasingly use ChatGPT and Claude for emotional support, journaling, self-help, decision-making, and lifestyle guidance — but these tools are generic, unstructured, and not designed for long-term personal transformation. Self-help books contain powerful wisdom users struggle to apply consistently in daily life.",
    built: "An AI-powered companion web app combining mental wellness support, self-improvement coaching, habit execution, retrospection, and book-grounded guidance — using a FAISS knowledge layer over curated self-help, spiritual, philosophical, and psychology books to ground advice in real wisdom.",
    impact: "Turns passive self-help reading and scattered AI conversations into a structured 30-day growth system — helping users feel emotionally lighter, gain clarity, build better habits, improve relationships, and convert reflection into measurable action.",
    desc: "AI growth companion blending wellness, coaching, habits, retrospection, and a book-grounded RAG layer into a 30-day transformation journey.",
    stack: ["React", "FastAPI", "Python", "FAISS", "RAG", "OpenAI", "Claude", "Embeddings", "PostgreSQL", "Prompt Engineering"],
    iconName: "Activity"
  },
  {
    id: "S3",
    title: "FounderLens AI — Business Validation Lab",
    tag: "SIDE PROJECT · FOUNDER TOOLING",
    domain: "Startup · Multi-Agent Validation",
    problem: "Founders, startups, and SMBs waste months building weak ideas because they rely on assumptions, generic market research, vague SWOT reports, and flattering AI-generated business plans instead of evidence-backed judgement — often unsure if their market is reachable, their offer buyable, their pricing profitable, or their lead strategy viable.",
    built: "A brutal business validation and creation lab with a multi-agent workflow — Business Autopsy, Market, Offer, Pricing, Leads, Data, Evidence, Web Research, Verdict, and Roadmap agents — that analyzes inputs, uploaded documents, and Scrapling-powered public web signals to produce criteria-based verdicts, improved offers, pricing models, lead plans, and 7/30/90-day experiments.",
    impact: "Helps founders stop guessing and start making sharper decisions — reducing wasted build time, exposing weak assumptions early, improving offer and pricing quality, and turning analysis into an execution loop where users return with results and re-run validation.",
    desc: "Multi-agent validation lab producing criteria-based verdicts, offers, pricing, lead plans, and experiments from business inputs, uploads, and web research.",
    stack: ["React", "Vite", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion", "TanStack Query", "Zod", "FastAPI", "Python", "Pydantic v2", "SQLAlchemy", "PostgreSQL", "Redis", "Celery", "LangGraph", "Claude Sonnet 4.6", "Scrapling", "pandas"],
    iconName: "LineChart"
  },
  {
    id: "S4",
    title: "Leads Pipeline — Dual-Funnel Lead Sourcing",
    tag: "SIDE PROJECT · PERSONAL OPS",
    domain: "Personal Ops · Lead Sourcing",
    problem: "Running a dual funnel — senior AI roles plus freelance AI consulting — but manually sourcing qualified opportunities across LinkedIn, Wellfound, Crunchbase, Naukri, and Google site: searches is slow, repetitive, and easy to abandon. Most targets are JS-rendered or aggressively bot-walled (Cloudflare, Google interstitials, 429s), so naïve scraping returns zero.",
    built: "A modular Python pipeline that scrapes 5+ sources behind a stealth fetcher with a DDG-lite → Bing → Google fallback chain, enriches contacts via Hunter.io, parses my own Profile.pdf for resume-grounded matching, scores each lead with Claude against a codified ICP, and emits dated CSV + Excel plus a filtered hot-leads file (score ≥ 7) on a cron schedule.",
    impact: "Replaced hours of weekly manual sourcing with a repeatable, dated funnel of pre-qualified leads — so outreach time goes only to top-scored job and freelance prospects instead of discovery.",
    desc: "Stealth-scraped, Claude-scored lead pipeline for jobs + freelance — DDG/Bing/Google fallback, Hunter.io enrichment, resume-grounded ICP scoring, dated CSV/XLSX output on cron.",
    stack: ["Python 3", "Scrapling", "StealthyFetcher", "Patchright", "Playwright", "lxml", "Anthropic Claude", "ScrapeGraphAI", "langchain-anthropic", "pypdf", "Hunter.io", "rapidfuzz", "pandas", "openpyxl", "loguru", "tqdm", "bash cron"],
    iconName: "GitBranch"
  },
  {
    id: "S5",
    title: "CX Helper — AI Customer Care Copilot",
    tag: "SIDE PROJECT · REAL-TIME COPILOT",
    domain: "Customer Support · Real-Time AI",
    problem: "Customer service reps juggle live calls while hunting through knowledge bases, gauging caller sentiment, and drafting responses on the fly. The cognitive load drives slow resolutions, missed escalation cues, and inconsistent answers — especially for new agents.",
    built: "A Chrome side-panel copilot that listens to the active meeting tab (Meet / Teams / Zoom / Webex web), streams audio to a local FastAPI backend for real-time speech-to-text via Vosk, and uses a pluggable LLM router (Azure OpenAI / Anthropic / mock) to surface live structured guidance — detected problem, category, sentiment, urgency, escalation risk, drafted reply, and next best actions — debounced so suggestions only update when meaningfully new context arrives.",
    impact: "Cuts average handle time by giving reps a draft response and next steps while the customer is still talking, reduces missed escalations through explicit urgency and escalation-risk signals each turn, and speeds ramp for new agents by replacing tribal knowledge with a consistent on-screen playbook.",
    desc: "Chrome MV3 side-panel copilot streaming live meeting audio to a FastAPI + Vosk + LLM backend that returns structured CX guidance — sentiment, urgency, escalation risk, drafted reply, next actions.",
    stack: ["Chrome MV3", "tabCapture", "Offscreen Document", "AudioWorklet", "WebSockets", "Python 3.11", "FastAPI", "Uvicorn", "Pydantic v2", "Vosk", "Azure OpenAI", "Anthropic", "Responses API", "Structured Outputs", "Provider Router"],
    iconName: "MessageSquare"
  }
];
