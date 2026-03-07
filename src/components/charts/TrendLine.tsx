import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { ChartWrapper } from './ChartWrapper';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

interface TrendLineProps {
  title: string;
  data: any[];
  xKey: string;
  yKeys: string[];
  colors: string[];
  sourceNote?: string;
  tooltip?: string;
}

export function TrendLine({ title, data, xKey, yKeys, colors, sourceNote, tooltip }: TrendLineProps) {
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
            <LineChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
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
                dx={-10}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--color-bg-surface)', 
                  borderColor: 'var(--color-border-strong)',
                  borderRadius: '8px',
                  boxShadow: 'var(--shadow-lg)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px'
                }}
              />
              <Legend 
                wrapperStyle={{ paddingTop: '20px', fontFamily: 'var(--font-mono)', fontSize: '12px' }}
                iconType="circle"
              />
              {yKeys.map((key, index) => (
                <Line 
                  key={key}
                  type="monotone" 
                  dataKey={key} 
                  stroke={colors[index % colors.length]} 
                  strokeWidth={3}
                  dot={{ r: 4, fill: colors[index % colors.length], strokeWidth: 0 }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                  isAnimationActive={true}
                  animationDuration={1500}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        )}
      </ChartWrapper>
    </div>
  );
}
