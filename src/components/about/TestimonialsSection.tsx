// src/components/about/TestimonialsSection.tsx
import { Quote, User } from 'lucide-react';

const testimonials = [
  {
    quote: "Rose Alpha delivered exceptional work on our DeFi protocol. The smart contracts were clean, well-tested, and deployed without issues.",
    author: "Crypto Startup Founder",
    role: "DeFi Project",
    avatar: null // Add image path if available
  },
  {
    quote: "Professional, communicative, and technically skilled. Highly recommended for any Web3 development needs.",
    author: "Tech Lead",
    role: "Blockchain Company",
    avatar: null
  },
  {
    quote: "The terminal-themed portfolio caught my attention, and the code quality kept it. Great developer to work with.",
    author: "Project Manager",
    role: "Web3 Agency",
    avatar: null
  }
];

export default function TestimonialsSection() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Quote className="w-5 h-5 text-blue-600 dark:text-green-400" />
        <span className="text-sm font-mono text-slate-600 dark:text-slate-400">{'>'} testimonials.log</span>
      </div>
      
      <div className="grid md:grid-cols-3 gap-4">
        {testimonials.map((testi, idx) => (
          <div 
            key={idx}
            className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 relative"
          >
            <Quote className="w-8 h-8 text-slate-200 dark:text-slate-800 absolute top-4 right-4" />
            
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 relative z-10 italic">
              "{testi.quote}"
            </p>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                {testi.avatar ? (
                  <img src={testi.avatar} alt={testi.author} className="w-full h-full rounded-full object-cover" />
                ) : (
                  <User className="w-5 h-5 text-slate-500" />
                )}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{testi.author}</p>
                <p className="text-xs text-slate-500">{testi.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}