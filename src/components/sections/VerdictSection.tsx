import { motion } from 'framer-motion';
import { dashboardData } from '@/data/dashboardData';
import { SectionLabel } from '../ui/SectionLabel';
import { CheckCircle2, AlertTriangle, Info } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } }
};

export function VerdictSection() {
  const { verdict, risks, hiddenSignals } = dashboardData;

  return (
    <section id="verdict" className="py-24 relative bg-bg-surface/50 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel>Verdict & Takeaways</SectionLabel>
        
        <motion.div 
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          {/* Main Verdict */}
          <motion.div variants={fadeUp} className="lg:col-span-8 space-y-8">
            <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-semantic-positive">
              <h3 className="text-h2 text-text-primary mb-4">Strategic Assessment</h3>
              <p className="text-body text-text-secondary leading-relaxed">
                {verdict.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-panel p-6 rounded-xl">
                <h4 className="text-label text-semantic-positive flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-4 h-4" /> Top Drivers
                </h4>
                <ul className="space-y-3">
                  {verdict.topReasons.map((reason, i) => (
                    <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                      <span className="text-accent-secondary mt-0.5">•</span> {reason}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-panel p-6 rounded-xl">
                <h4 className="text-label text-semantic-negative flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-4 h-4" /> Key Concerns
                </h4>
                <ul className="space-y-3">
                  {verdict.topConcerns.map((concern, i) => (
                    <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                      <span className="text-accent-primary mt-0.5">•</span> {concern}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Sidebar: Risks & Signals */}
          <motion.div variants={fadeUp} className="lg:col-span-4 space-y-8">
            <div>
              <h4 className="text-label text-text-muted mb-4">Hidden Signals</h4>
              <div className="space-y-4">
                {hiddenSignals.map((signal) => (
                  <div key={signal.id} className="glass-panel p-4 rounded-xl border border-border-subtle hover:border-accent-secondary/50 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <Info className="w-4 h-4 text-accent-secondary" />
                      <span className="text-xs font-medium text-text-primary">{signal.title}</span>
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed">{signal.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-label text-text-muted mb-4">Risk Matrix</h4>
              <div className="space-y-3">
                {risks.map((risk) => (
                  <div key={risk.id} className="flex items-start gap-3 p-3 rounded-lg bg-bg-elevated/50">
                    <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                      risk.impact === 'high' ? 'bg-semantic-negative' : 'bg-semantic-warning'
                    }`} />
                    <div>
                      <span className="text-sm font-medium text-text-primary block">{risk.label}</span>
                      <span className="text-[10px] text-text-muted uppercase tracking-wider">
                        Prob: {risk.probability} | Impact: {risk.impact}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
