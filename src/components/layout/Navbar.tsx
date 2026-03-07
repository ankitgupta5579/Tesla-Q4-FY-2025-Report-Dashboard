import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'insights', label: 'Insights' },
  { id: 'financials', label: 'Financials' },
  { id: 'operations', label: 'Operations' },
  { id: 'verdict', label: 'Verdict' },
];

export function Navbar() {
  const activeSection = useScrollSpy(SECTIONS.map(s => s.id), 200);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-6 px-4 pointer-events-none"
    >
      <div className="glass-panel rounded-full px-2 py-2 flex items-center gap-1 pointer-events-auto">
        {SECTIONS.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={cn(
                "relative px-4 py-2 rounded-full text-sm font-medium transition-colors",
                isActive ? "text-white" : "text-text-secondary hover:text-text-primary"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-bg-elevated rounded-full border border-border-strong"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{section.label}</span>
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}
