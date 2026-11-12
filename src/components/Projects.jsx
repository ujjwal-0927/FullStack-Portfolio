import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import ragImage from '../assets/rag.png';
import portfolioImage from '../assets/portfolio.png';

const projects = [
  ['Full-Stack Portfolio AI Avatar', 'Interactive developer portfolio featuring a conversational AI assistant that queries background, skills, and project data.', ['React', 'FastAPI', 'Python', 'Gemini API'], portfolioImage, 'https://ujjwaldev.me/', 'https://github.com/ujjwal-0927/FullStack-Portfolio'],
  ['Hybrid RAG Engine', 'Production-ready document Q&A engine combining vector search, BM25 retrieval, Cohere re-ranking, and real-time SSE token streaming.', ['FastAPI', 'React', 'ChromaDB', 'Cohere API'], ragImage, 'https://rag-frontend-rust.vercel.app/', 'https://github.com/ujjwal-0927/rag-frontend'],
  ['Healthcare Booking Platform', 'Core Modify Booking modules and state management workflows for healthcare diagnostics.', ['React', 'Redux Toolkit', 'JavaScript', 'REST APIs'], null, '#', '#'],
  ['Merchant Checkout & Settlement Engine', 'Cashfree payment processing workflows and transaction dashboards for web e-commerce management.', ['React', 'Node.js', 'Cashfree API', 'Express'], null, '#', '#']
];

const Projects = () => (
  <section id="projects" className="border-b border-paper/10 bg-ink px-6 py-14 text-paper sm:px-8 lg:px-12 lg:py-16">
    <div className="mx-auto max-w-7xl">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">04 — Work</p>
      <h2 className="mt-3 max-w-3xl font-display text-4xl leading-[0.98] tracking-tight sm:text-5xl">Selected projects, in context.</h2>
      <div className="mt-9 border-t border-paper/20">
        {projects.map(([title, description, technologies, image, live, github], index) => (
          <motion.article key={title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className={`group relative grid gap-4 border-b border-paper/20 py-5 transition-colors hover:bg-[#24221F] sm:grid-cols-[auto_0.08fr_0.34fr_0.34fr_auto] sm:items-center ${index === 0 ? 'border-l-4 border-l-accent pl-4' : ''}`}>
            {image ? <img src={image} alt="" className="h-14 w-20 object-cover grayscale transition duration-300 group-hover:grayscale-0 sm:h-16 sm:w-24" /> : <span className="hidden h-16 w-24 bg-paper/10 sm:block" />}
            <span className="font-mono text-xs text-accent">0{index + 1}</span>
            <h3 className="font-display text-2xl">{title}</h3>
            <p className="max-w-md text-sm leading-relaxed text-paper/60">{description}</p>
            <div className="flex items-center gap-4 sm:justify-end">
              <span className="hidden font-mono text-[11px] text-paper/50 lg:block">{technologies.slice(0, 2).join(' · ')}</span>
              <a href={live} target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-wider text-paper hover:text-accent">View <FaArrowUp className="ml-1 inline rotate-45" /></a>
              <a href={github} target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-wider text-paper hover:text-accent">Code</a>
            </div>
          </motion.article>
        ))}
      </div>
      <p className="mt-5 font-mono text-[11px] text-paper/40">Hover a row to reveal the project detail.</p>
    </div>
  </section>
);

export default Projects;
