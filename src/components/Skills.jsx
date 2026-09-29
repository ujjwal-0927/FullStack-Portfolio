import { motion } from 'framer-motion';
import { FaLaptopCode, FaBrain, FaDatabase, FaServer } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend Engineering',
      icon: <FaLaptopCode className="text-indigo-400" size={18} />,
      description: 'Building fast, responsive, and component-driven user interfaces.',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Redux Toolkit', 'Tailwind CSS', 'HTML5 / CSS3']
    },
    {
      category: 'Backend & AI Systems',
      icon: <FaBrain className="text-purple-400" size={18} />,
      description: 'Developing resilient APIs, serverless functions, and LLM integrations.',
      skills: ['Python', 'FastAPI', 'Node.js', 'Express', 'LLM Prompt Engineering', 'RAG Pipelines', 'OpenRouter & Ollama']
    },
    {
      category: 'System Design & Architecture',
      icon: <FaServer className="text-sky-400" size={18} />,
      description: 'Designing scalable microservices, async workflows, and distributed systems.',
      skills: ['System Design', 'REST & WebSockets', 'Microservices Architecture', 'API Gateway Design', 'Scalability & Performance']
    },
    {
      category: 'Cloud, Databases & Tools',
      icon: <FaDatabase className="text-emerald-400" size={18} />,
      description: 'Managing cloud deployments, data storage, and version control.',
      skills: ['AWS', 'MongoDB', 'PostgreSQL', 'Vector Databases', 'Git & GitHub', 'Vercel', 'Docker', 'Postman']
    }
  ];

  return (
    <section id="skills" className="relative bg-slate-950  pb-20 overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
            Technical Stack
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl lg:text-5xl leading-tight">
            Tools & technologies powering my web apps.
          </h2>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col justify-between rounded-3xl border border-slate-800/90 bg-slate-900/70 p-6 sm:p-8 shadow-2xl shadow-indigo-950/20 backdrop-blur-md transition-all duration-300 hover:border-indigo-500/50 hover:bg-slate-900/90"
            >
              <div>
                {/* Category Title & Icon */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:border-indigo-500/40 group-hover:bg-indigo-500/10 transition duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                    {category.category}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-xl border border-slate-700/60 bg-slate-800/50 px-3 py-2 text-xs font-mono font-medium text-slate-200 transition-all hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;