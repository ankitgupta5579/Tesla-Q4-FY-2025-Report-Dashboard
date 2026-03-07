import { AlertCircle } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  message?: string;
}

export function EmptyState({ title = "Data Unavailable", message = "This information was not found in the source document." }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-12 glass-panel rounded-2xl text-center border-dashed border-2 border-border-strong">
      <div className="w-12 h-12 rounded-full bg-bg-elevated flex items-center justify-center mb-4">
        <AlertCircle className="w-6 h-6 text-text-muted" />
      </div>
      <h3 className="text-lg font-medium text-text-primary mb-2">{title}</h3>
      <p className="text-sm text-text-muted max-w-sm">{message}</p>
    </div>
  );
}
