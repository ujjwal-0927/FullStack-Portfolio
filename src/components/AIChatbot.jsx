// src/components/AIChatbot.jsx
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaPaperPlane } from 'react-icons/fa';
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
    } catch {
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
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="relative flex items-center justify-center h-14 w-14 border border-ink bg-paper p-1.5 shadow-lg transition-all duration-300 group"
            aria-label="Open AI Assistant"
          >
            {/* Status Ping Pulse Indicator */}
            <span className="absolute top-0 right-0 flex h-3.5 w-3.5 -mt-0.5 -mr-0.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-paper bg-emerald-500"></span>
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
            className="flex h-[500px] w-80 flex-col overflow-hidden border border-rule bg-paper shadow-xl sm:w-96"
          >
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-rule bg-paper p-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center overflow-hidden border border-rule">
                  <img src={chatbotIcon} alt="AI Avatar" className="h-full w-full object-cover" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-ink">AI Portfolio Assistant</h3>
                  <p className="text-[10px] text-emerald-400 flex items-center gap-1 font-mono">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 inline-block" /> Powered by FastAPI
                  </p>
                </div>
              </div>
              
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-7 w-7 items-center justify-center text-mute transition hover:text-accent"
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
                    className={`max-w-[85%] text-xs sm:text-sm px-3.5 py-2.5 whitespace-pre-wrap leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-ink text-paper rounded-br-none font-medium'
                        : 'border border-rule bg-[#ECE8DE] text-ink rounded-bl-none'
                    }`}
                  >
                    {msg.text || (loading && idx === messages.length - 1 ? (
                      <span className="flex items-center gap-1 py-0.5 text-mute">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent animate-bounce" />
                      <span className="h-1.5 w-1.5 rounded-full bg-accent animate-bounce [animation-delay:0.2s]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-accent animate-bounce [animation-delay:0.4s]" />
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
                    className="border border-rule px-2.5 py-1 text-left font-mono text-[11px] text-accent transition hover:border-accent"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {/* Input Footer Form */}
            <form onSubmit={(e) => handleSend(e, null)} className="flex gap-2 border-t border-rule bg-paper p-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about skills, experience..."
                className="flex-1 border border-rule bg-transparent px-3.5 py-2 text-xs text-ink placeholder-mute outline-none focus:border-accent sm:text-sm"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="flex items-center justify-center bg-ink px-3.5 py-2 text-xs font-medium text-paper transition hover:bg-accent disabled:opacity-40 sm:text-sm"
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