import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'positive' | 'negative' | 'warning' | 'neutral' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'neutral', className }: BadgeProps) {
  return (
    <span className={cn(
      "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium tracking-wide uppercase",
      {
        'bg-semantic-positive/10 text-semantic-positive border border-semantic-positive/20': variant === 'positive',
        'bg-semantic-negative/10 text-semantic-negative border border-semantic-negative/20': variant === 'negative',
        'bg-semantic-warning/10 text-semantic-warning border border-semantic-warning/20': variant === 'warning',
        'bg-semantic-neutral/10 text-semantic-neutral border border-semantic-neutral/20': variant === 'neutral',
        'bg-transparent text-text-secondary border border-border-strong': variant === 'outline',
      },
      className
    )}>
      {children}
    </span>
  );
}
