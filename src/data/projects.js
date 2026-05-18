// Edit here — no JSX changes required.

export const projects = [
  {
    id: "01",
    title: "Pricing, Inventory Forecasting & Management",
    tag: "RESOLUTE AI · FORECASTING",
    domain: "Retail · Forecasting",
    problem: "Pricing and inventory decisions made manually across volatile demand cycles, leading to stockouts, overstock, and missed margin.",
    built: "ML, time-series, and deep-learning forecasting models with SMOTE-balanced training, deployed as decision-support for pricing and inventory teams.",
    impact: "Forecasts that drove smarter pricing decisions and tighter inventory control across categories.",
    desc: "ML, time-series, and deep-learning forecasting for pricing and inventory.",
    stack: ["Python", "TensorFlow", "Traditional ML", "Advanced Time Series", "SMOTE", "Data Analysis"],
    iconName: "LineChart"
  },
  {
    id: "02",
    title: "Cancer Companion Chatbot",
    tag: "SWASTHYA AI · HEALTHCARE LLM",
    domain: "Healthcare · LLM",
    problem: "Oncology patients lacked a personalised, secure way to ask treatment-specific questions tied to their own history.",
    built: "Fine-tuned Meta LLaMA 7B on Apollo & Manipal hospital data and wired a RAG layer to patient treatment history for source-aware answers.",
    impact: "A personalised oncology companion that grounded answers in the patient's own care plan and trusted medical context.",
    desc: "Personalized oncology chatbot fine-tuned on Meta LLaMA 7B with hospital data from Apollo & Manipal; RAG-based secure chat using patient treatment history.",
    stack: ["Python", "GCP", "BigQuery", "Fine-Tuning", "RAG", "Quantization", "Hyperparameter Tuning"],
    iconName: "Activity"
  },
  {
    id: "03",
    title: "MyAssist — No-Code GenAI Builder",
    tag: "DELOITTE MALAYSIA · ENTERPRISE GENAI",
    domain: "Enterprise · GenAI Platform",
    problem: "Internal teams needed chat apps, reviewers, and automations but every build required a new bespoke engineering cycle.",
    built: "A no-code GenAI app builder on Azure OpenAI + LangChain that turns simple inputs into chat apps, reviewers, agentic workflows, and assistants.",
    impact: "Collapsed weeks of bespoke build work into minutes of configuration — enterprise GenAI delivery at platform speed.",
    desc: "No-code GenAI app builder for chat apps, reviewers, automations, and assistants from simple inputs.",
    stack: ["Azure", "GPT-4o", "OpenAI", "LangChain", "Agentic AI", "Azure AI Search", "Azure Document Intelligence"],
    iconName: "Layers"
  },
  {
    id: "04",
    title: "IBIC — Financial & Risk Chatbot",
    tag: "DELOITTE INDIA · FINANCE AGENT",
    domain: "Finance · Agentic RAG",
    problem: "Finance and risk teams worked across cloud drives, databases, and uploaded reports — answers required manual digging across silos.",
    built: "An agentic RAG assistant that connects to cloud drives, databases, and uploads to answer questions, run calculations, generate reports, summaries, reminders, and auto-emails.",
    impact: "Unified financial Q&A, reporting, and follow-up actions inside one conversational interface.",
    desc: "Financial & risk chatbot wired to cloud drives, databases, and uploads — Q&A, calculations, reports, summaries, reminders, auto-emailing.",
    stack: ["Python", "GCP", "LangChain", "GPT-4o", "BigQuery", "FastAPI", "Dash", "FAISS"],
    iconName: "Bot"
  },
  {
    id: "05",
    title: "Finance Reviewer",
    tag: "UNILEVER · FINANCE LLM",
    domain: "Finance · LLM Reviewer",
    problem: "Financial reviews were repetitive, checklist-driven, and dependent on senior reviewer time for catch-and-flag work.",
    built: "An LLM-driven reviewer that applies the same checks consistently across submissions, flagging issues with explanations.",
    impact: "Faster, more consistent first-pass financial review with reviewer time reserved for the cases that need judgment.",
    desc: "AI-powered financial review solution using OpenAI and LangChain.",
    stack: ["OpenAI", "LangChain"],
    iconName: "Database"
  },
  {
    id: "06",
    title: "Agentic Data Modeller",
    tag: "WESTPAC AUSTRALIA · AGENTIC AI",
    domain: "Banking · Agentic AI",
    problem: "Data modelling and review cycles were slow, checklist-heavy, and dependent on repeated human review.",
    built: "An agentic LangChain workflow that followed internal modelling checklists, self-reviewed output, detected mistakes, and iterated until standards were met.",
    impact: "Compressed data-modelling timelines from 6 months to 4 months.",
    desc: "Agentic LangChain solution that compressed data-modelling timelines from 6 months to 4 months via checklist execution, self-review, and auto-fix.",
    stack: ["Python", "OpenAI", "Azure", "LangChain", "Data Analysis", "Data Cleaning", "Prompt Engineering"],
    iconName: "Workflow"
  },
  {
    id: "07",
    title: "AI Navigator — Competitor Intelligence",
    tag: "DELOITTE MY · IN · AU · STRATEGY RAG",
    domain: "Consulting · Strategy RAG",
    problem: "Strategy teams spent days pulling competitor news, tech updates, corporate moves, and financials into usable insight.",
    built: "A Vertex AI + Gemini pipeline that scrapes and ingests competitor signals into a RAG layer, then generates strategic recommendations.",
    impact: "Replaced days of manual competitor research with on-demand, source-grounded strategy briefings.",
    desc: "Competitor intelligence: scrapes news, tech updates, corporate moves, financial sheets → strategic recommendations.",
    stack: ["GCP", "Python", "Gemini", "Vertex AI", "Vertex AI Search", "Vertex AI Web Search", "Embeddings", "RAG", "FAISS"],
    iconName: "LineChart"
  },
  {
    id: "08",
    title: "Customer Experience Chatbot",
    tag: "FAIRPRICE SINGAPORE · CX AGENT",
    domain: "Retail · CX Agent",
    problem: "Customers asked questions across products, memberships, orders, events, and personalised suggestions — handled by fragmented support flows.",
    built: "A Gemini + Google ADK CX agent with semantic search, vector retrieval, session management, and weather-aware personalisation across the platform.",
    impact: "One assistant covering products, memberships, orders, events, wine suggestions, and personalised experiences in real time.",
    desc: "CX assistant for platform, products, memberships, orders, events, wine suggestions, weather-aware experiences, and personalization.",
    stack: ["GCP", "BigQuery", "Google ADK", "Gemini", "Semantic Search", "Vector DB", "Vertex AI", "Python", "FastAPI", "Session Management"],
    iconName: "MessageSquare"
  },
  {
    id: "09",
    title: "HR AI — Hiring Intelligence",
    tag: "DELOITTE SINGAPORE · HIRING",
    domain: "Hiring · Agentic AI",
    problem: "Recruiters drowned in noisy candidate pipelines and struggled to surface high-signal matches at speed.",
    built: "Agentic AI + vector search over candidate data to filter noise and rank matches against role context.",
    impact: "Reduced recruitment noise and improved candidate quality at the top of the funnel.",
    desc: "Hiring intelligence reducing recruitment noise and improving candidate quality via agentic AI + vector search.",
    stack: ["Azure", "Agentic AI", "Vector DB"],
    iconName: "Users"
  },
  {
    id: "10",
    title: "Code Modularisation & Repo Maintenance",
    tag: "INTERNAL · DEVEX",
    domain: "DevEx · Reusable AI Modules",
    problem: "AI delivery work repeated the same scaffolding — ingestion, retrieval, agents, evals — on every new project.",
    built: "A central repo of reusable Python / JS modules and packages covering the recurring AI building blocks.",
    impact: "Cut personal development time by 40% across new AI builds.",
    desc: "Central repo of reusable modules and packages; cut personal development time by 40%.",
    stack: ["GitHub", "Python", "JavaScript", "Node", "React", "Alembic", "Vite"],
    iconName: "GitBranch"
  },
  {
    id: "11",
    title: "Rebuilt",
    live: true,
    tag: "PERSONAL · CONSUMER AI",
    domain: "Fitness · Consumer AI",
    problem: "Fitness apps prescribe generic plans that ignore user goals, gym access, equipment, location, and progress.",
    built: "A personalised fitness platform with LangGraph-driven adaptive workouts and diet, onboarding, gym discovery, regeneration, ranking, and reminders.",
    impact: "An AI-first fitness product shipped end-to-end on FastAPI + React + Supabase, deployed on Vercel and Render.",
    desc: "Personalized fitness platform — adaptive workouts/diet based on profile, goals, gym, location, equipment, progress; onboarding, gym discovery, regeneration, ranking, reminders.",
    stack: ["React", "Vite", "Tailwind CSS", "FastAPI", "LangGraph", "Azure OpenAI", "Supabase PostgreSQL", "Vercel", "Render"],
    iconName: "Dumbbell"
  }
];
