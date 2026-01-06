"use client";

import { StatCard } from "@/components/StatCard";
import { RevenueChart } from "@/components/RevenueChart";
import { getStats, mockPaywalls } from "@/lib/mockData";
import {
    TrendingUp,
    Users,
    Zap,
    Clock,
    PieChart
} from "lucide-react";
import { PieChart as RechartsPC, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

import { useState, useEffect } from "react";

export default function Analytics() {
    const [mounted, setMounted] = useState(false);
    const stats = getStats();

    useEffect(() => {
        setMounted(true);
    }, []);

    const categoryData = [
        { name: 'API', value: 45, color: 'hsl(217, 91%, 60%)' },
        { name: 'Data Feed', value: 30, color: 'hsl(191, 100%, 50%)' },
        { name: 'Content', value: 15, color: 'hsl(160, 84%, 39%)' },
        { name: 'Service', value: 10, color: 'hsl(38, 92%, 50%)' },
    ];

    const topPaywalls = [...mockPaywalls]
        .sort((a, b) => b.totalEarnings - a.totalEarnings)
        .slice(0, 5);

    if (!mounted) return null;

    return (
        <div className="p-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
                <p className="text-muted-foreground">Insights into your payment performance</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <StatCard
                    title="Conversion Rate"
                    value="87.5"
                    icon={TrendingUp}
                    suffix="%"
                    change={3.2}
                />
                <StatCard
                    title="Unique Agents"
                    value={234}
                    icon={Users}
                    change={15.4}
                />
                <StatCard
                    title="Avg. Transaction"
                    value="7.50"
                    icon={Zap}
                    prefix="$"
                    change={-2.1}
                />
                <StatCard
                    title="Avg. Response Time"
                    value={85}
                    icon={Clock}
                    suffix="ms"
                />
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <RevenueChart />

                {/* Category Breakdown */}
                <div className="glass-card p-6">
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-foreground">Revenue by Category</h3>
                        <p className="text-sm text-muted-foreground">Distribution of earnings</p>
                    </div>

                    <ResponsiveContainer width="100%" height={240}>
                        <RechartsPC>
                            <Pie
                                data={categoryData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={90}
                                paddingAngle={4}
                                dataKey="value"
                            >
                                {categoryData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: 'hsl(220 47% 8%)',
                                    border: '1px solid hsl(220 30% 18%)',
                                    borderRadius: '8px',
                                }}
                                labelStyle={{ color: 'hsl(210 40% 98%)' }}
                            />
                            <Legend
                                verticalAlign="bottom"
                                height={36}
                                formatter={(value) => <span className="text-sm text-muted-foreground">{value}</span>}
                            />
                        </RechartsPC>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Top Paywalls */}
            <div className="glass-card p-6">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h3 className="text-lg font-semibold text-foreground">Top Performing Paywalls</h3>
                        <p className="text-sm text-muted-foreground">Ranked by total earnings</p>
                    </div>
                </div>

                <div className="space-y-4">
                    {topPaywalls.map((paywall, index) => (
                        <div
                            key={paywall.id}
                            className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 border border-border hover:border-primary/30 transition-colors"
                        >
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                                {index + 1}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-medium text-foreground truncate">{paywall.name}</p>
                                <p className="text-sm text-muted-foreground">{paywall.paymentCount} payments</p>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold text-foreground">${paywall.totalEarnings.toLocaleString()}</p>
                                <p className="text-sm text-success">{paywall.successRate}% success</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
