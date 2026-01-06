import { tickerMessages } from "@/lib/mockData";
import { Zap } from "lucide-react";

export function Ticker() {
  // Duplicate messages for seamless loop
  const allMessages = [...tickerMessages, ...tickerMessages];

  return (
    <div className="overflow-hidden bg-muted/30 border-y border-border py-3">
      <div className="ticker-animation flex items-center gap-8 whitespace-nowrap">
        {allMessages.map((msg, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-primary font-medium">{msg.agent}</span>
            <span className="text-muted-foreground">paid</span>
            <span className="text-foreground font-semibold">${msg.amount}</span>
            <span className="text-muted-foreground">for</span>
            <span className="text-foreground">{msg.api}</span>
            <span className="text-muted-foreground mx-4">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
