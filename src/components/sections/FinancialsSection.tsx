import { motion } from 'framer-motion';
import { dashboardData } from '@/data/dashboardData';
import { SectionLabel } from '../ui/SectionLabel';
import { BarComparison } from '../charts/BarComparison';
import { TrendLine } from '../charts/TrendLine';

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

export function FinancialsSection() {
  const revenueChart = dashboardData.charts.find(c => c.id === 'revenue_mix');
  const marginsChart = dashboardData.charts.find(c => c.id === 'margins');

  return (
    <section id="financials" className="py-24 relative bg-bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel>Financial Performance</SectionLabel>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="h-[500px]"
          >
            {revenueChart && (
              <BarComparison 
                title={revenueChart.title}
                data={revenueChart.data}
                xKey={revenueChart.xKey}
                yKeys={revenueChart.yKeys}
                colors={revenueChart.colors}
                sourceNote={revenueChart.sourceNote}
                tooltip="Shows the shift in revenue mix over 5 years. Note the rapid growth of Energy and Services offsetting Auto decline."
              />
            )}
          </motion.div>

          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="h-[500px]"
          >
            {marginsChart && (
              <TrendLine 
                title={marginsChart.title}
                data={marginsChart.data}
                xKey={marginsChart.xKey}
                yKeys={marginsChart.yKeys}
                colors={marginsChart.colors}
                sourceNote={marginsChart.sourceNote}
                tooltip="Operating margin has compressed significantly due to R&D investments in AI and lower auto volume."
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
