import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaTerminal, FaPlay } from 'react-icons/fa';

const codeSnippets = {
  react: {
    title: 'React WebSocket Engine',
    lang: 'typescript',
    code: `// Real-Time Diagnostic Stream
const useLiveMetrics = (streamId: string) => {
  const [status, setStatus] = useState<Status>('CONNECTING');
  
  useEffect(() => {
    const ws = new WebSocket(\`wss://api.example.com/stream/\${streamId}\`);
    ws.onmessage = (event) => setStatus(JSON.parse(event.data));
    return () => ws.close();
  }, [streamId]);

  return { status };
};`
  },
  python: {
    title: 'FastAPI Microservice',
    lang: 'python',
    code: `# High-Throughput Async Route (DevCrew AI)
@app.post("/api/v1/agent/orchestrate")
async def run_pipeline(payload: AgentTask) -> ExecutionResult:
    async with AsyncSession(engine) as session:
        result = await orchestrator.dispatch(payload)
        return ExecutionResult(status="SUCCESS", data=result)`
  },
  ai: {
    title: 'RAG & Vector Search',
    lang: 'python',
    code: `# Multi-Modal Vector Pipeline
from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings

vector_db = Chroma(collection_name="tech_docs", embedding_function=OpenAIEmbeddings())
docs = vector_db.similarity_search_with_score(query="State Management Optimization", k=3)`
  }
};

const Hero = () => {
  const [activeTab, setActiveTab] = useState('react');
  const [isCopied, setIsCopied] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab].code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-[calc(100vh-4.5rem)] bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.18),rgba(255,255,255,0))] px-6 pt-12 pb-16 sm:px-8 lg:px-12 flex items-center justify-center overflow-hidden">
      
      {/* Background Decorative Glow Circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-600/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-violet-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row items-center justify-between gap-12 z-10 w-full">
        
        {/* Left Column: Headline, Bio & Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-left space-y-6 max-w-2xl"
        >
          {/* Engineering Specialization Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-indigo-400 shadow-lg backdrop-blur-md">
            <span>Full-Stack & AI Engineer</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl leading-[1.15]">
            Building end-to-end web apps & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">intelligent AI pipelines</span>.
          </h1>

          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            3 years of software engineering experience crafting high-performance React/Next.js frontends, FastAPI microservices, and LLM/RAG workflows that scale cleanly.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500"
            >
              <FaPlay className="text-xs" /> Explore Projects
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-7 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-indigo-500/50 hover:bg-slate-800"
            >
              <FaEnvelope className="text-xs text-indigo-400" /> Let's Connect
            </motion.button>
          </div>

          {/* Social Links & Key Stack Badges */}
          <div className="flex items-center gap-6 pt-4 border-t border-slate-800/80">
            <div className="flex items-center gap-3">
              {[
                { href: 'https://github.com/ujjwal-0927', label: 'GitHub', icon: <FaGithub size={18} /> },
                { href: 'https://linkedin.com/in/ujjwalfrontenddev', label: 'LinkedIn', icon: <FaLinkedin size={18} /> },
                { href: 'mailto:ujjwalsharma0927@outlook.com', label: 'Email', icon: <FaEnvelope size={18} /> }
              ].map((item) => (
                <motion.a
                  key={item.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/90 text-slate-400 transition hover:border-indigo-500/50 hover:text-indigo-400"
                  aria-label={item.label}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>

            <div className="h-4 w-px bg-slate-800" />

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-indigo-300">React</span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-purple-300">TypeScript</span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-emerald-300">Python</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Code Terminal Simulator */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full max-w-xl"
        >
          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl backdrop-blur-xl overflow-hidden">
            
            {/* Mac Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <FaTerminal className="text-indigo-400" /> {codeSnippets[activeTab].title}
                </span>
              </div>

              <button
                onClick={handleCopyCode}
                className="text-xs font-mono text-slate-400 hover:text-indigo-400 transition px-2 py-1 rounded bg-slate-900 border border-slate-800"
              >
                {isCopied ? 'Copied!' : 'Copy'}
              </button>
            </div>

            {/* Snippet Selector Tabs */}
            <div className="flex border-b border-slate-800/80 bg-slate-950/40 text-xs font-mono">
              {[
                { key: 'react', label: 'React / WS' },
                { key: 'python', label: 'FastAPI' },
                { key: 'ai', label: 'RAG Pipeline' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex-1 py-2.5 px-3 text-center transition border-b-2 ${
                    activeTab === tab.key
                      ? 'border-indigo-500 text-indigo-400 bg-indigo-500/10 font-semibold'
                      : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Terminal Code Body */}
            <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.pre
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <code>{codeSnippets[activeTab].code}</code>
                </motion.pre>
              </AnimatePresence>
            </div>

            {/* Terminal Footer Status Bar */}
            <div className="px-4 py-2.5 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Status: Operational (100% Uptime)
              </span>
              <span>UTF-8</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;