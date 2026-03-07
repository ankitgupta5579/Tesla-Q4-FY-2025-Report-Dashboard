import { cn } from '@/lib/utils';

interface ConfidencePillProps {
  level: 'high' | 'medium' | 'low';
}

export function ConfidencePill({ level }: ConfidencePillProps) {
  return (
    <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-bg-elevated border border-border-subtle w-fit">
      <span className={cn("w-2 h-2 rounded-full", {
        'bg-semantic-positive': level === 'high',
        'bg-semantic-warning': level === 'medium',
        'bg-semantic-negative': level === 'low',
      })} />
      <span className="text-[10px] uppercase tracking-wider text-text-secondary font-medium">
        {level} Confidence
      </span>
    </div>
  );
}
