import { motion, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { InfoTooltip } from './InfoTooltip';
import numeral from 'numeral';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface KpiCardProps {
  label: string;
  value: number;
  unit?: string;
  delta?: number;
  deltaDirection?: 'up' | 'down';
  tooltip?: string;
  format?: string;
}

export function KpiCard({ label, value, unit = '', delta, deltaDirection, tooltip, format = '0,0.0' }: KpiCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });
  const displayValue = useTransform(springValue, (latest) => numeral(latest).format(format));

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  const isPositive = deltaDirection === 'up';
  const isNegative = deltaDirection === 'down';

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
      transition={{ duration: 0.2 }}
      className="glass-panel p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden group"
    >
      <div className="flex justify-between items-start mb-4">
        <InfoTooltip content={tooltip || label}>
          <span className="text-sm font-medium text-text-secondary uppercase tracking-wider">{label}</span>
        </InfoTooltip>
        
        {delta !== undefined && (
          <div className={`flex items-center text-xs font-bold px-2 py-1 rounded-full ${
            isPositive ? 'bg-semantic-positive/10 text-semantic-positive' : 
            isNegative ? 'bg-semantic-negative/10 text-semantic-negative' : 
            'bg-bg-elevated text-text-secondary'
          }`}>
            {isPositive ? <ArrowUpRight className="w-3 h-3 mr-1" /> : 
             isNegative ? <ArrowDownRight className="w-3 h-3 mr-1" /> : null}
            {Math.abs(delta)}%
          </div>
        )}
      </div>

      <div className="flex items-baseline gap-1">
        <motion.span className="text-4xl md:text-5xl font-display text-text-primary tabular-nums">
          {displayValue}
        </motion.span>
        {unit && <span className="text-lg text-text-muted font-mono">{unit}</span>}
      </div>
      
      {/* Decorative accent line */}
      <div className="absolute bottom-0 left-0 h-1 bg-accent-primary w-0 group-hover:w-full transition-all duration-500 ease-out opacity-50" />
    </motion.div>
  );
}
