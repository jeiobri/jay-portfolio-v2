import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  action?: {
    label: string;
    section: string;
  };
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your AI assistant. Ask me anything about Jay's skills, experience, or projects!",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userMessage: string): { text: string; action?: { label: string; section: string } } => {
    const lowerMessage = userMessage.toLowerCase();

    // About section
    if (lowerMessage.includes('about')) {
      return {
        text: "I'd love to tell you more about Jay! He's a passionate Full-Stack Developer specializing in modern web technologies, cloud architecture, and DevOps practices.",
        action: { label: "View About Section", section: "about" }
      };
    }

    // Skills related
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech stack')) {
      return {
        text: "Jay is proficient in a wide range of technologies including React, Next.js, TypeScript, Vue.js for frontend; Node.js, Go, PostgreSQL, and GraphQL for backend; and Docker, Kubernetes, AWS for DevOps and cloud infrastructure.",
        action: { label: "View All Skills", section: "skills" }
      };
    }

    // Experience related
    if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('job')) {
      return {
        text: "Jay currently works as a Senior Full-Stack Developer at TechCorp Inc. (2021-Present) and previously worked at StartupXYZ (2019-2021). He has over 5 years of experience building web applications, mobile apps, and cloud-based solutions.",
        action: { label: "View About Section", section: "about" }
      };
    }

    // Education
    if (lowerMessage.includes('education') || lowerMessage.includes('degree') || lowerMessage.includes('university')) {
      return {
        text: "Jay holds a Bachelor of Science in Computer Science from the University of Technology, graduated in 2019 with a strong foundation in software engineering principles.",
        action: { label: "View About Section", section: "about" }
      };
    }

    // Projects
    if (lowerMessage.includes('project') || lowerMessage.includes('portfolio') || lowerMessage.includes('work samples')) {
      return {
        text: "Jay's portfolio features several impressive projects including an E-Commerce Platform, Mobile Banking App, DevOps Dashboard, and Cloud Migration Tool. Each demonstrates expertise in full-stack development and modern technologies.",
        action: { label: "View All Projects", section: "projects" }
      };
    }

    // Frontend
    if (lowerMessage.includes('frontend') || lowerMessage.includes('react') || lowerMessage.includes('vue')) {
      return {
        text: "For frontend development, Jay excels at React/Next.js (95%), TypeScript (90%), Vue.js (85%), and Tailwind CSS (95%). He creates responsive, performant, and accessible user interfaces.",
        action: { label: "View All Skills", section: "skills" }
      };
    }

    // Backend
    if (lowerMessage.includes('backend') || lowerMessage.includes('server') || lowerMessage.includes('api')) {
      return {
        text: "On the backend, Jay is skilled in Node.js/Express (90%), Go (85%), PostgreSQL/MySQL (88%), and GraphQL/REST APIs (92%). He builds scalable, maintainable server architectures.",
        action: { label: "View All Skills", section: "skills" }
      };
    }

    // DevOps/Cloud
    if (lowerMessage.includes('devops') || lowerMessage.includes('cloud') || lowerMessage.includes('aws') || lowerMessage.includes('docker') || lowerMessage.includes('kubernetes')) {
      return {
        text: "Jay has strong DevOps capabilities including Docker/Kubernetes (87%), AWS/Cloud Services (85%), CI/CD Pipelines (88%), and Git/GitHub Actions (95%).",
        action: { label: "View All Skills", section: "skills" }
      };
    }

    // Contact/Hire
    if (lowerMessage.includes('hire') || lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('available')) {
      return {
        text: "Jay is currently available for freelance opportunities! You can reach out via email at hello@example.com, connect on LinkedIn, or check out his GitHub profile.",
        action: { label: "Go to Contact", section: "contact" }
      };
    }

    // Languages
    if (lowerMessage.includes('language') || lowerMessage.includes('programming')) {
      return {
        text: "Jay works with multiple programming languages including JavaScript/TypeScript, Go, Python, and SQL. He's particularly strong in the JavaScript ecosystem and Go for high-performance backend services.",
        action: { label: "View All Skills", section: "skills" }
      };
    }

    // Tools
    if (lowerMessage.includes('tool') || lowerMessage.includes('software')) {
      return {
        text: "Jay's toolset includes Git for version control, GitHub Actions and Jenkins for CI/CD, AWS and GCP for cloud platforms, MongoDB and Redis for databases, and Nginx for web servers.",
        action: { label: "View All Skills", section: "skills" }
      };
    }

    // Specialization
    if (lowerMessage.includes('specialize') || lowerMessage.includes('focus') || lowerMessage.includes('best at')) {
      return {
        text: "Jay specializes in full-stack development with a focus on building scalable, high-performance applications. His expertise spans modern web technologies, cloud architecture, and DevOps practices.",
        action: { label: "View About Section", section: "about" }
      };
    }

    // Greeting responses
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return { text: "Hello! How can I help you learn more about Jay's background and expertise? Feel free to ask about his skills, projects, or experience!" };
    }

    // Thank you responses
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return { text: "You're welcome! Let me know if you have any other questions about Jay's qualifications or work." };
    }

    // Default response
    return { text: "I can help you learn about Jay's skills, experience, projects, and background. Try asking about his tech stack, work experience, specific projects, or how to get in touch!" };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const response = getAIResponse(input);
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        isUser: false,
        timestamp: new Date(),
        action: response.action,
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-[#06b6d4] to-[#6366f1] rounded-full shadow-lg shadow-[rgba(99,102,241,0.4)] flex items-center justify-center text-white hover:shadow-xl hover:shadow-[rgba(99,102,241,0.6)] transition-all duration-300 hover:scale-110"
            aria-label="Open chat"
          >
            <MessageSquare size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] sm:w-96 h-[600px] max-h-[80vh] bg-[rgba(20,20,30,0.95)] backdrop-blur-xl border border-[rgba(100,100,120,0.3)] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#06b6d4] to-[#6366f1] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white">AI Assistant</h3>
                  <p className="text-white/80 text-sm">Ask me anything!</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col ${message.isUser ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isUser
                        ? 'bg-gradient-to-r from-[#06b6d4] to-[#6366f1] text-white rounded-br-sm'
                        : 'bg-[rgba(100,100,120,0.2)] text-[#f5f5f7] rounded-bl-sm'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                  {message.action && !message.isUser && (
                    <button
                      onClick={() => {
                        const element = document.querySelector(`#${message.action!.section}`);
                        if (element) {
                          setIsOpen(false);
                          setTimeout(() => {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }, 300);
                        }
                      }}
                      className="mt-2 px-4 py-2 bg-gradient-to-r from-[#06b6d4] to-[#6366f1] text-white text-sm rounded-lg hover:shadow-lg hover:shadow-[rgba(99,102,241,0.3)] transition-all duration-300"
                    >
                      {message.action.label}
                    </button>
                  )}
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-[rgba(100,100,120,0.2)] text-[#f5f5f7] p-3 rounded-2xl rounded-bl-sm">
                    <div className="flex gap-1">
                      <motion.div
                        className="w-2 h-2 bg-[#6366f1] rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-[#06b6d4] rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-[#a855f7] rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-[rgba(100,100,120,0.2)]">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-3 bg-[rgba(45,45,60,0.5)] border border-[rgba(100,100,120,0.2)] rounded-xl text-[#f5f5f7] placeholder-[#9ca3af] focus:outline-none focus:border-[#6366f1] transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="w-12 h-12 bg-gradient-to-r from-[#06b6d4] to-[#6366f1] rounded-xl flex items-center justify-center text-white hover:shadow-lg hover:shadow-[rgba(99,102,241,0.3)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
