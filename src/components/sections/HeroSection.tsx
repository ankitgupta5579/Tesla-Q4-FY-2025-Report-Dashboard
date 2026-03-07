import { motion } from 'framer-motion';
import { dashboardData } from '@/data/dashboardData';
import { KpiCard } from '../ui/KpiCard';
import { ScoreDisplay } from '../ui/ScoreDisplay';
import { QuoteBlock } from '../ui/QuoteBlock';

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } }
};

export function HeroSection() {
  const { meta, kpis } = dashboardData;

  return (
    <section id="overview" className="min-h-screen pt-32 pb-20 relative flex flex-col justify-center">
      {/* Animated Background Mesh */}
      <motion.div 
        className="absolute inset-0 -z-10 opacity-30"
        animate={{ 
          background: [
            'radial-gradient(circle at 0% 0%, var(--color-accent-primary) 0%, transparent 40%)',
            'radial-gradient(circle at 100% 100%, var(--color-accent-secondary) 0%, transparent 40%)',
            'radial-gradient(circle at 0% 0%, var(--color-accent-primary) 0%, transparent 40%)'
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ filter: 'blur(80px)' }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Column: Titles & Score */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <span className="text-label text-accent-primary">{meta.documentType}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-border-strong" />
              <span className="text-label text-text-secondary">{meta.date}</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-display text-text-primary">
              {meta.title}
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-h3 text-text-secondary max-w-2xl font-sans font-light">
              {meta.tldr}
            </motion.p>

            <motion.div variants={fadeUp} className="pt-8 border-t border-border-subtle">
              <ScoreDisplay score={meta.overallScore.value} />
            </motion.div>
          </div>

          {/* Right Column: Quote */}
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <QuoteBlock quote={meta.keyQuote.text} source={meta.keyQuote.location} />
          </motion.div>
        </motion.div>

        {/* KPIs Grid */}
        <motion.div 
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-20"
        >
          {kpis.map((kpi) => (
            <motion.div key={kpi.id} variants={fadeUp}>
              <KpiCard {...kpi} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
