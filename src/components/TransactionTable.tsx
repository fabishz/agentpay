"use client";

import { Transaction } from "@/lib/mockData";
import { PaymentBadge } from "./PaymentBadge";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface TransactionTableProps {
  transactions: Transaction[];
  showPaywall?: boolean;
  className?: string;
}

export function TransactionTable({ transactions, showPaywall = true, className }: TransactionTableProps) {
  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  const truncateHash = (hash: string) => {
    return `${hash.slice(0, 6)}...${hash.slice(-4)}`;
  };

  return (
    <div className={cn("overflow-x-auto", className)}>
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Time</th>
            <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Agent</th>
            {showPaywall && (
              <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Paywall</th>
            )}
            <th className="text-right py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Amount</th>
            <th className="text-center py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
            <th className="text-right py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Tx Hash</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border/50">
          {transactions.map((tx) => (
            <tr
              key={tx.id}
              className="hover:bg-muted/30 transition-colors cursor-pointer group"
            >
              <td className="py-4 px-4">
                <span className="text-sm text-muted-foreground">{formatTime(tx.timestamp)}</span>
              </td>
              <td className="py-4 px-4">
                <div>
                  <p className="text-sm font-medium text-foreground">{tx.agentName}</p>
                  <p className="text-xs text-muted-foreground">{tx.agentId}</p>
                </div>
              </td>
              {showPaywall && (
                <td className="py-4 px-4">
                  <span className="text-sm text-foreground">{tx.paywallName}</span>
                </td>
              )}
              <td className="py-4 px-4 text-right">
                <div>
                  <p className="text-sm font-medium text-foreground">{tx.amount} MNEE</p>
                  <p className="text-xs text-muted-foreground">${tx.amountUsd}</p>
                </div>
              </td>
              <td className="py-4 px-4 text-center">
                <PaymentBadge status={tx.status} />
              </td>
              <td className="py-4 px-4 text-right">
                <a
                  href={`https://etherscan.io/tx/${tx.txHash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  {truncateHash(tx.txHash)}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
