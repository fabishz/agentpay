"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/StatCard";
import { TransactionTable } from "@/components/TransactionTable";
import { RevenueChart } from "@/components/RevenueChart";
import { DemoPayment } from "@/components/DemoPayment";
import { useQuery } from "@tanstack/react-query";
import {
    DollarSign,
    CreditCard,
    Lock,
    TrendingUp,
    Plus,
    FileText,
    Key,
    ArrowRight,
    Loader2
} from "lucide-react";

async function fetchStats() {
    const res = await fetch('/api/stats');
    if (!res.ok) throw new Error('Failed to fetch stats');
    return res.json();
}

async function fetchRecentTransactions() {
    const res = await fetch('/api/transactions');
    if (!res.ok) throw new Error('Failed to fetch transactions');
    const data = await res.json();
    return data.slice(0, 5); // Get only first 5
}

export default function Overview() {
    const { data: stats, isLoading: statsLoading } = useQuery({
        queryKey: ['stats'],
        queryFn: fetchStats,
    });

    const { data: recentTransactions, isLoading: txLoading } = useQuery({
        queryKey: ['recentTransactions'],
        queryFn: fetchRecentTransactions,
    });

    if (statsLoading || txLoading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    // Map API transactions to UI format
    const mappedTransactions = recentTransactions?.map((tx: any) => ({
        id: tx.id,
        timestamp: new Date(tx.createdAt),
        agentId: tx.payerAddress,
        agentName: tx.agentName || 'Unknown Agent',
        paywallId: tx.paywallId,
        paywallName: tx.paywall?.name || 'Unknown Paywall',
        amount: tx.amount,
        amountUsd: tx.amountUsd || tx.amount,
        status: tx.status,
        txHash: tx.txHash,
        responseTime: tx.responseTime || 0,
    })) || [];

    return (
        <div className="p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
                    <p className="text-muted-foreground">Welcome back! Here's what's happening with your paywalls.</p>
                </div>
                <div className="flex items-center gap-3">
                    <DemoPayment />
                    <Button variant="gradient" asChild>
                        <Link href="/dashboard/paywalls/new">
                            <Plus className="w-4 h-4 mr-2" />
                            Create Paywall
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <StatCard
                    title="Total Revenue"
                    value={stats?.totalRevenue || 0}
                    change={12.5} // Mock change for now
                    icon={DollarSign}
                    prefix="$"
                />
                <StatCard
                    title="Payments Today"
                    value={stats?.totalTransactions || 0} // Using total for now as we don't have daily filter in API yet
                    change={8.3}
                    icon={CreditCard}
                />
                <StatCard
                    title="Active Paywalls"
                    value={stats?.activePaywalls || 0}
                    icon={Lock}
                />
                <StatCard
                    title="Success Rate"
                    value={98.7} // Mock for now
                    icon={TrendingUp}
                    suffix="%"
                />
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Link
                    href="/dashboard/paywalls/new"
                    className="glass-card-hover p-5 flex items-center gap-4 group"
                >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Plus className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                        <p className="font-semibold text-foreground">Create New Paywall</p>
                        <p className="text-sm text-muted-foreground">Start monetizing your API</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>

                <Link
                    href="/docs"
                    className="glass-card-hover p-5 flex items-center gap-4 group"
                >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <FileText className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                        <p className="font-semibold text-foreground">View Documentation</p>
                        <p className="text-sm text-muted-foreground">Learn how to integrate</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </Link>

                <Link
                    href="/dashboard/api-keys"
                    className="glass-card-hover p-5 flex items-center gap-4 group"
                >
                    <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center group-hover:bg-success/20 transition-colors">
                        <Key className="w-6 h-6 text-success" />
                    </div>
                    <div className="flex-1">
                        <p className="font-semibold text-foreground">Get API Key</p>
                        <p className="text-sm text-muted-foreground">Access your credentials</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-success group-hover:translate-x-1 transition-all" />
                </Link>
            </div>

            {/* Charts and Recent Transactions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <RevenueChart />

                <div className="glass-card p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-lg font-semibold text-foreground">Recent Transactions</h3>
                            <p className="text-sm text-muted-foreground">Latest payments received</p>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="/dashboard/transactions">
                                View All
                                <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </Button>
                    </div>

                    <TransactionTable transactions={mappedTransactions} showPaywall={false} />
                </div>
            </div>
        </div>
    );
}
