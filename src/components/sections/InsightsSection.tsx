import { motion } from 'framer-motion';
import { dashboardData } from '@/data/dashboardData';
import { SectionLabel } from '../ui/SectionLabel';
import { ConfidencePill } from '../ui/ConfidencePill';
import { InfoTooltip } from '../ui/InfoTooltip';

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } }
};

export function InsightsSection() {
  const { insights } = dashboardData;

  return (
    <section id="insights" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel>Key Insights</SectionLabel>
        
        <motion.div 
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {insights.map((insight, idx) => (
            <motion.div 
              key={insight.id} 
              variants={fadeUp}
              className={`glass-panel p-8 rounded-2xl flex flex-col gap-4 ${
                idx === 0 ? 'md:col-span-2 bg-accent-primary/5 border-accent-primary/20' : ''
              }`}
            >
              <div className="flex justify-between items-start">
                <h3 className="text-h2 text-text-primary">{insight.title}</h3>
                <ConfidencePill level={insight.confidence as any} />
              </div>
              
              <p className="text-body text-text-secondary leading-relaxed max-w-3xl">
                {insight.body}
              </p>
              
              <div className="mt-auto pt-4 flex items-center gap-2 text-xs text-text-muted uppercase tracking-wider font-mono">
                <InfoTooltip content="Source location in document">
                  <span>Source: {insight.source}</span>
                </InfoTooltip>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
