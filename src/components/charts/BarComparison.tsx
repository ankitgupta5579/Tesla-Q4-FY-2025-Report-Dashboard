import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { ChartWrapper } from './ChartWrapper';
import numeral from 'numeral';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

interface BarComparisonProps {
  title: string;
  data: any[];
  xKey: string;
  yKeys: string[];
  colors: string[];
  sourceNote?: string;
  tooltip?: string;
}

export function BarComparison({ title, data, xKey, yKeys, colors, sourceNote, tooltip }: BarComparisonProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (inView) setShouldRender(true);
  }, [inView]);

  return (
    <div ref={ref} className="h-full">
      <ChartWrapper title={title} sourceNote={sourceNote} tooltip={tooltip}>
        {shouldRender && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border-subtle)" />
              <XAxis 
                dataKey={xKey} 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: 'var(--color-text-muted)', fontSize: 12, fontFamily: 'var(--font-mono)' }} 
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: 'var(--color-text-muted)', fontSize: 12, fontFamily: 'var(--font-mono)' }} 
                tickFormatter={(val) => numeral(val).format('0a')}
                dx={-10}
              />
              <Tooltip 
                cursor={{ fill: 'var(--color-bg-elevated)', opacity: 0.4 }}
                contentStyle={{ 
                  backgroundColor: 'var(--color-bg-surface)', 
                  borderColor: 'var(--color-border-strong)',
                  borderRadius: '8px',
                  boxShadow: 'var(--shadow-lg)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px'
                }}
                itemStyle={{ color: 'var(--color-text-primary)' }}
                formatter={(value: number) => numeral(value).format('0,0')}
              />
              <Legend 
                wrapperStyle={{ paddingTop: '20px', fontFamily: 'var(--font-mono)', fontSize: '12px' }}
                iconType="circle"
              />
              {yKeys.map((key, index) => (
                <Bar 
                  key={key} 
                  dataKey={key} 
                  fill={colors[index % colors.length]} 
                  radius={[4, 4, 0, 0]}
                  isAnimationActive={true}
                  animationDuration={1000}
                  animationEasing="ease-out"
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        )}
      </ChartWrapper>
    </div>
  );
}
