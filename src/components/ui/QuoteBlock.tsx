import { Quote } from 'lucide-react';

interface QuoteBlockProps {
  quote: string;
  source?: string;
}

export function QuoteBlock({ quote, source }: QuoteBlockProps) {
  return (
    <blockquote className="relative p-8 glass-panel rounded-2xl border-l-4 border-l-accent-primary">
      <Quote className="absolute top-6 left-6 w-8 h-8 text-accent-primary/20" />
      <p className="text-xl md:text-2xl font-display tracking-wide text-text-primary relative z-10 pl-8 leading-relaxed">
        "{quote}"
      </p>
      {source && (
        <footer className="mt-4 pl-8 text-sm text-text-muted uppercase tracking-wider font-mono">
          — {source}
        </footer>
      )}
    </blockquote>
  );
}
