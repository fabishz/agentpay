import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface HowItWorksStepProps {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
  isLast?: boolean;
  className?: string;
}

export function HowItWorksStep({ 
  step, 
  icon: Icon, 
  title, 
  description, 
  isLast = false,
  className 
}: HowItWorksStepProps) {
  return (
    <div className={cn("relative flex flex-col items-center text-center", className)}>
      {/* Connector line */}
      {!isLast && (
        <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px">
          <div className="w-full h-full bg-gradient-to-r from-primary/50 to-accent/50" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-t-2 border-r-2 border-primary/50" />
        </div>
      )}
      
      {/* Step circle */}
      <div className="relative mb-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/25">
          <Icon className="w-7 h-7 text-primary-foreground" />
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
          <span className="text-xs font-bold text-primary">{step}</span>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground max-w-[200px]">{description}</p>
    </div>
  );
}
