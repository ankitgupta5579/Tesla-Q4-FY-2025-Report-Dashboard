import { cn } from '@/lib/utils';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-4 mb-8", className)}>
      <h2 className="text-label text-accent-secondary">{children}</h2>
      <div className="h-px bg-border-strong flex-1" />
    </div>
  );
}
