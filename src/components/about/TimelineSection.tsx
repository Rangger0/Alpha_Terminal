// src/components/about/TimelineSection.tsx
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Web3 Developer',
    company: 'Freelance / Self Employed',
    period: '2022 - Present',
    description: 'Building DeFi protocols, smart contracts, and Web3 applications on Ethereum and Solana.',
    tech: ['Solidity', 'Rust', 'React', 'Node.js']
  },
  {
    type: 'work',
    title: 'Full Stack Developer',
    company: 'Tech Startup',
    period: '2020 - 2022',
    description: 'Developed scalable web applications and API integrations.',
    tech: ['TypeScript', 'Python', 'PostgreSQL', 'AWS']
  }
];

const education = [
  {
    degree: 'Computer Science / Software Engineering',
    school: 'University Name',
    year: '2016 - 2020',
    focus: 'Algorithm, Data Structure, System Design'
  }
];

const certifications = [
  { name: 'Ethereum Developer Bootcamp', issuer: 'Consensys', year: '2023' },
  { name: 'AWS Certified Developer', issuer: 'Amazon', year: '2022' },
  { name: 'Blockchain Specialization', issuer: 'Coursera', year: '2021' }
];

export default function TimelineSection() {
  return (
    <div className="space-y-6">
      {/* Experience */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-blue-600 dark:text-green-400" />
            <span className="text-sm font-mono text-slate-600 dark:text-slate-400">{'>'} experience.log</span>
          </div>
        </div>
        
        <div className="p-4 space-y-4">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-6 pb-4 border-l-2 border-slate-200 dark:border-slate-700 last:pb-0">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 dark:bg-green-500 border-2 border-white dark:border-slate-900" />
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-2">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">{exp.title}</h3>
                <span className="text-xs text-slate-500 font-mono">{exp.period}</span>
              </div>
              
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{exp.company}</p>
              <p className="text-sm text-slate-500 dark:text-slate-500 mb-3">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs rounded bg-blue-100 dark:bg-green-900/30 text-blue-700 dark:text-green-400 font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Certs Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Education */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-hidden">
          <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-600 dark:text-green-400" />
              <span className="text-sm font-mono text-slate-600 dark:text-slate-400">{'>'} education.log</span>
            </div>
          </div>
          
          <div className="p-4">
            {education.map((edu, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">{edu.degree}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{edu.school}</p>
                <p className="text-xs text-slate-500 font-mono">{edu.year}</p>
                <p className="text-xs text-slate-500 dark:text-slate-500">{edu.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-hidden">
          <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-600 dark:text-green-400" />
              <span className="text-sm font-mono text-slate-600 dark:text-slate-400">{'>'} certifications.log</span>
            </div>
          </div>
          
          <div className="p-4 space-y-3">
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{cert.name}</p>
                  <p className="text-xs text-slate-500">{cert.issuer} • {cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}