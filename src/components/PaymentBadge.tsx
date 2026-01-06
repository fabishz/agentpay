import { cn } from "@/lib/utils";

interface PaymentBadgeProps {
  status: 'success' | 'pending' | 'failed' | 'active' | 'paused' | 'draft';
  className?: string;
}

export function PaymentBadge({ status, className }: PaymentBadgeProps) {
  const statusConfig = {
    success: {
      label: 'Success',
      className: 'bg-success/10 text-success border-success/20',
    },
    pending: {
      label: 'Pending',
      className: 'bg-warning/10 text-warning border-warning/20',
    },
    failed: {
      label: 'Failed',
      className: 'bg-destructive/10 text-destructive border-destructive/20',
    },
    active: {
      label: 'Active',
      className: 'bg-success/10 text-success border-success/20',
    },
    paused: {
      label: 'Paused',
      className: 'bg-warning/10 text-warning border-warning/20',
    },
    draft: {
      label: 'Draft',
      className: 'bg-muted text-muted-foreground border-border',
    },
  };

  const config = statusConfig[status];

  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border",
      config.className,
      className
    )}>
      <span className={cn(
        "w-1.5 h-1.5 rounded-full",
        status === 'success' && "bg-success",
        status === 'pending' && "bg-warning animate-pulse",
        status === 'failed' && "bg-destructive",
        status === 'active' && "bg-success",
        status === 'paused' && "bg-warning",
        status === 'draft' && "bg-muted-foreground",
      )} />
      {config.label}
    </span>
  );
}
