import { useState } from 'react';
import { useFloating, autoUpdate, offset, flip, shift, arrow } from '@floating-ui/react';
import { Info } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface InfoTooltipProps {
  content: string;
  source?: string;
  confidence?: 'high' | 'medium' | 'low';
  children?: React.ReactNode;
}

export function InfoTooltip({ content, source, confidence, children }: InfoTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(8), flip(), shift({ padding: 8 })],
    whileElementsMounted: autoUpdate,
  });

  return (
    <div className="inline-flex items-center gap-1">
      {children}
      <button
        ref={refs.setReference}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
        className="text-text-muted hover:text-accent-secondary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-secondary rounded-full"
        aria-label="More information"
      >
        <Info className="w-4 h-4" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={refs.setFloating}
            style={floatingStyles}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="z-50 max-w-xs p-3 glass-panel rounded-xl text-small"
          >
            <p className="text-text-primary mb-2">{content}</p>
            {(source || confidence) && (
              <div className="flex items-center justify-between pt-2 border-t border-border-subtle mt-2 text-text-muted text-[10px] uppercase tracking-wider">
                {source && <span>Source: {source}</span>}
                {confidence && (
                  <span className="flex items-center gap-1">
                    <span className={cn("w-2 h-2 rounded-full", {
                      'bg-semantic-positive': confidence === 'high',
                      'bg-semantic-warning': confidence === 'medium',
                      'bg-semantic-negative': confidence === 'low',
                    })} />
                    {confidence}
                  </span>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
