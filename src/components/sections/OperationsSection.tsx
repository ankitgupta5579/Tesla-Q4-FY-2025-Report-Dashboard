import { motion } from 'framer-motion';
import { dashboardData } from '@/data/dashboardData';
import { SectionLabel } from '../ui/SectionLabel';
import { ComposedComparison } from '../charts/ComposedComparison';

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

export function OperationsSection() {
  const chart = dashboardData.charts.find(c => c.id === 'deliveries_vs_storage');

  return (
    <section id="operations" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel>Operations</SectionLabel>
        
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="h-[600px] w-full"
        >
          {chart && (
            <ComposedComparison 
              title={chart.title}
              data={chart.data}
              xKey={chart.xKey}
              yKeys={chart.yKeys}
              colors={chart.colors}
              sourceNote={chart.sourceNote}
              tooltip="Vehicle deliveries peaked in 2023 and declined in 2024/2025, while Energy Storage deployments grew exponentially."
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
