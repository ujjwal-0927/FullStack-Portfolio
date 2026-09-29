// src/components/AIChatbot.jsx
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import chatbotIcon from '../assets/chatbot.png';

export default function AIChatbot() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000';

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "Hi! I'm Ujjwal's AI Assistant. Ask me anything about his technical stack, engineering projects, or background!",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestedPrompts = [
    "What is his core tech stack?",
    "Tell me about Flebo.in project",
    "Where is he based?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e, customQuery) => {
    if (e) e.preventDefault();
    const userMsg = customQuery || input.trim();
    if (!userMsg || loading) return;

    setInput('');
    
    // Append user message & an empty AI message placeholder
    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: userMsg },
      { sender: 'ai', text: '' }
    ]);
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg }),
      });

      if (!response.ok) throw new Error('Network error');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        if (value) {
          const chunkStr = decoder.decode(value, { stream: true });
          const lines = chunkStr.split('\n');

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.replace('data: ', '').trim();
              if (data === '[DONE]') break;

              // Restore newlines and update the AI message progressively
              const formattedChunk = data.replace(/\\n/g, '\n');
              setMessages((prev) => {
                const updated = [...prev];
                const lastIndex = updated.length - 1;
                updated[lastIndex] = {
                  ...updated[lastIndex],
                  text: updated[lastIndex].text + formattedChunk,
                };
                return updated;
              });
            }
          }
        }
      }
    } catch (err) {
      setMessages((prev) => {
        const updated = [...prev];
        const lastIndex = updated.length - 1;
        updated[lastIndex] = {
          sender: 'ai',
          text: "Sorry, I couldn't connect to the backend right now. Please reach out directly via email!",
        };
        return updated;
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Floating Action Toggle Button with Custom Image Asset */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="relative flex items-center justify-center h-14 w-14 rounded-full bg-slate-900 border border-indigo-500/40 p-1.5 shadow-2xl shadow-indigo-600/50 backdrop-blur-xl transition-all duration-300 group"
            aria-label="Open AI Assistant"
          >
            {/* Status Ping Pulse Indicator */}
            <span className="absolute top-0 right-0 flex h-3.5 w-3.5 -mt-0.5 -mr-0.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-slate-950"></span>
            </span>

            {/* Chatbot Image Asset */}
            <img 
              src={chatbotIcon} 
              alt="AI Assistant" 
              className="h-full w-full object-contain rounded-full group-hover:scale-105 transition-transform duration-300"
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="w-80 sm:w-96 h-[500px] bg-slate-950/95 border border-slate-800 rounded-3xl shadow-2xl shadow-black/80 flex flex-col overflow-hidden backdrop-blur-2xl"
          >
            
            {/* Header */}
            <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20 overflow-hidden">
                  <img src={chatbotIcon} alt="AI Avatar" className="h-full w-full object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-100 text-xs sm:text-sm">AI Portfolio Assistant</h3>
                  <p className="text-[10px] text-emerald-400 flex items-center gap-1 font-mono">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 inline-block" /> Powered by FastAPI
                  </p>
                </div>
              </div>
              
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white h-7 w-7 rounded-lg flex items-center justify-center hover:bg-slate-800 transition text-xs"
                aria-label="Close chat"
              >
                <FaTimes />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] text-xs sm:text-sm px-3.5 py-2.5 rounded-2xl whitespace-pre-wrap leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-indigo-600 text-white rounded-br-none shadow-md shadow-indigo-600/20 font-medium'
                        : 'bg-slate-900 text-slate-200 border border-slate-800 rounded-bl-none'
                    }`}
                  >
                    {msg.text || (loading && idx === messages.length - 1 ? (
                      <span className="flex items-center gap-1 text-slate-400 py-0.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-bounce" />
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.2s]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.4s]" />
                      </span>
                    ) : "")}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Prompts Section */}
            {messages.length === 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {suggestedPrompts.map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(null, prompt)}
                    className="text-[11px] font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 hover:bg-indigo-500/20 rounded-lg px-2.5 py-1 transition text-left"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {/* Input Footer Form */}
            <form onSubmit={(e) => handleSend(e, null)} className="p-3 bg-slate-900/80 border-t border-slate-800 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about skills, experience..."
                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white text-xs sm:text-sm px-3.5 py-2 rounded-xl font-medium transition flex items-center justify-center"
              >
                <FaPaperPlane className="text-xs" />
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}