"use client";

import { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useQuery } from "@tanstack/react-query";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface RevenueChartProps {
  className?: string;
}

interface ChartData {
  date: string;
  revenue: number;
  payments: number;
}

async function fetchRevenueData() {
  const res = await fetch('/api/analytics/revenue');
  if (!res.ok) throw new Error('Failed to fetch revenue data');
  return res.json();
}

export function RevenueChart({ className }: RevenueChartProps) {
  const [showUsd, setShowUsd] = useState(true);
  const [mounted, setMounted] = useState(false);

  const { data = [], isLoading } = useQuery<ChartData[]>({
    queryKey: ['revenue'],
    queryFn: fetchRevenueData,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || isLoading) {
    return (
      <div className={cn("glass-card p-6 flex items-center justify-center", className)} style={{ minHeight: '340px' }}>
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className={cn("glass-card p-6", className)}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Revenue</h3>
          <p className="text-sm text-muted-foreground">Last 7 days</p>
        </div>
        <div className="flex items-center gap-1 p-1 rounded-lg bg-muted">
          <button
            onClick={() => setShowUsd(false)}
            className={cn(
              "px-3 py-1.5 rounded-md text-xs font-medium transition-colors",
              !showUsd ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            MNEE
          </button>
          <button
            onClick={() => setShowUsd(true)}
            className={cn(
              "px-3 py-1.5 rounded-md text-xs font-medium transition-colors",
              showUsd ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            USD
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity={0.3} />
              <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'hsl(215 20% 55%)', fontSize: 12 }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'hsl(215 20% 55%)', fontSize: 12 }}
            tickFormatter={(value) => showUsd ? `$${value}` : value}
            dx={-10}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(220 47% 8%)',
              border: '1px solid hsl(220 30% 18%)',
              borderRadius: '8px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
            }}
            labelStyle={{ color: 'hsl(210 40% 98%)' }}
            formatter={(value: number) => [
              showUsd ? `$${value.toLocaleString()}` : `${value.toLocaleString()} MNEE`,
              'Revenue'
            ]}
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="hsl(217 91% 60%)"
            strokeWidth={2}
            fill="url(#revenueGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
