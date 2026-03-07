import { motion } from 'framer-motion';

interface ScoreDisplayProps {
  score: number;
  max?: number;
  label?: string;
}

export function ScoreDisplay({ score, max = 10, label = "Overall Score" }: ScoreDisplayProps) {
  const percentage = (score / max) * 100;
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex items-center gap-6">
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Background Circle */}
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            stroke="var(--color-bg-elevated)"
            strokeWidth="8"
          />
          {/* Animated Progress Circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            stroke="var(--color-accent-primary)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          />
        </svg>
        <div className="flex flex-col items-center justify-center z-10">
          <span className="text-3xl font-display text-text-primary leading-none">{score}</span>
          <span className="text-[10px] text-text-muted uppercase tracking-widest">/ {max}</span>
        </div>
      </div>
      <div>
        <h3 className="text-label text-text-secondary mb-1">{label}</h3>
        <p className="text-sm text-text-muted max-w-xs">
          Based on financial resilience, strategic pivot execution, and market positioning.
        </p>
      </div>
    </div>
  );
}
