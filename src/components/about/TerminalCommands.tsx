// src/components/about/TerminalCommands.tsx
import { useState } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';

const commands = [
  {
    cmd: 'cat about.txt',
    output: 'Web3 developer passionate about blockchain technology and decentralized systems.'
  },
  {
    cmd: 'ls skills/',
    output: '[blockchain, defi, smart-contracts, react, nodejs, typescript]'
  },
  {
    cmd: 'pwd',
    output: '/home/rose-alpha/web3-developer'
  },
  {
    cmd: 'contact --email',
    output: 'allgazali011@gmail.com'
  }
];

export default function TerminalCommands() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, cmd: string) => {
    navigator.clipboard.writeText(text);
    setCopied(cmd);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-950 overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-800 bg-slate-900 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-green-400" />
          <span className="text-sm font-mono text-slate-400">interactive.terminal</span>
        </div>
        <span className="text-xs text-slate-600 font-mono">bash</span>
      </div>
      
      <div className="p-4 space-y-4 font-mono text-sm">
        {commands.map((item, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex items-center justify-between group">
              <div className="flex items-center gap-2">
                <span className="text-green-400">$</span>
                <span className="text-slate-300">{item.cmd}</span>
              </div>
              <button
                onClick={() => copyToClipboard(item.output, item.cmd)}
                className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-slate-800 rounded"
                title="Copy output"
              >
                {copied === item.cmd ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-slate-500" />
                )}
              </button>
            </div>
            <div className="pl-4 text-slate-400 border-l-2 border-slate-800">
              {item.output}
            </div>
          </div>
        ))}
        
        <div className="flex items-center gap-2 pt-2">
          <span className="text-green-400">$</span>
          <span className="w-2 h-4 bg-green-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
