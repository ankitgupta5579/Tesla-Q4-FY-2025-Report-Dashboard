import { ReactNode } from 'react';
import { InfoTooltip } from '../ui/InfoTooltip';

interface ChartWrapperProps {
  title: string;
  sourceNote?: string;
  tooltip?: string;
  children: ReactNode;
}

export function ChartWrapper({ title, sourceNote, tooltip, children }: ChartWrapperProps) {
  return (
    <div className="glass-panel p-6 rounded-2xl flex flex-col h-full min-h-[400px]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-h3 text-text-primary font-display tracking-wide">{title}</h3>
        {tooltip && <InfoTooltip content={tooltip} />}
      </div>
      
      <div className="flex-1 w-full relative min-h-[300px]">
        {children}
      </div>
      
      {sourceNote && (
        <div className="mt-4 pt-4 border-t border-border-subtle text-[10px] text-text-muted uppercase tracking-wider">
          Source: {sourceNote}
        </div>
      )}
    </div>
  );
}
