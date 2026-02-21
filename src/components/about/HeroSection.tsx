// src/components/about/HeroSection.tsx
import { MapPin, Terminal } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="ml-4 text-xs text-slate-500 dark:text-slate-400 font-mono">identity.log</span>
      </div>

      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Avatar with Terminal Border */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative w-32 h-32 rounded-lg overflow-hidden border-2 border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              {/* Placeholder Avatar - Ganti dengan foto kamu */}
              <div className="text-4xl font-bold text-slate-400 dark:text-slate-600 font-mono">
                RA
              </div>
              {/* Kalau punya foto, uncomment ini: */}
              {/* <img src="/your-photo.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
            </div>
            {/* Online Indicator */}
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white dark:border-slate-900 animate-pulse" />
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Terminal className="w-5 h-5 text-blue-600 dark:text-green-400" />
              <span className="text-sm font-mono text-blue-600 dark:text-green-400">user@alpha-terminal</span>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              Rangger / Rose Alpha
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-4 font-mono">
              Full Stack Developer | Web3 Engineer | Blockchain Specialist
            </p>

            <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-slate-500 dark:text-slate-500">
              <MapPin className="w-4 h-4" />
              <span>Indonesia / Remote</span>
              <span className="mx-2">|</span>
              <span className="text-green-500">●</span>
              <span>Open to work</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}