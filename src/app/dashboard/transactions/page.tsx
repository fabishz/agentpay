"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TransactionTable } from "@/components/TransactionTable";
import { StatCard } from "@/components/StatCard";
import { useQuery } from "@tanstack/react-query";
import {
    Search,
    Download,
    Filter,
    DollarSign,
    Clock,
    AlertCircle,
    ChevronLeft,
    ChevronRight,
    Loader2
} from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Transaction } from "@/lib/mockData";

async function fetchTransactions() {
    const res = await fetch('/api/transactions');
    if (!res.ok) throw new Error('Failed to fetch transactions');
    return res.json();
}

export default function Transactions() {
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const { data: transactions = [], isLoading } = useQuery({
        queryKey: ['transactions'],
        queryFn: fetchTransactions,
    });

    // Map API data to UI format
    const mappedTransactions = transactions.map((tx: any) => ({
        id: tx.id,
        timestamp: new Date(tx.createdAt),
        agentId: tx.payerAddress, // Using payerAddress as agentId for now
        agentName: tx.agentName || 'Unknown Agent',
        paywallId: tx.paywallId,
        paywallName: tx.paywall?.name || 'Unknown Paywall',
        amount: tx.amount,
        amountUsd: tx.amountUsd || tx.amount, // Fallback if USD not set
        status: tx.status,
        txHash: tx.txHash,
        responseTime: tx.responseTime || 0,
    }));

    const filteredTransactions = mappedTransactions.filter((tx: Transaction) => {
        const matchesSearch =
            tx.agentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tx.txHash.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tx.paywallName.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesStatus = statusFilter === 'all' || tx.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
    const paginatedTransactions = filteredTransactions.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const todayVolume = filteredTransactions
        .filter((tx: Transaction) => tx.status === 'success')
        .reduce((sum: number, tx: Transaction) => sum + tx.amount, 0);

    const pendingCount = filteredTransactions.filter((tx: Transaction) => tx.status === 'pending').length;
    const failedCount = filteredTransactions.filter((tx: Transaction) => tx.status === 'failed').length;

    if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <div className="p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-foreground">Transactions</h1>
                    <p className="text-muted-foreground">View and manage all payment transactions</p>
                </div>
                <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Export CSV
                </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <StatCard
                    title="Today's Volume"
                    value={todayVolume.toFixed(2)}
                    icon={DollarSign}
                    prefix="$"
                />
                <StatCard
                    title="Pending"
                    value={pendingCount}
                    icon={Clock}
                />
                <StatCard
                    title="Failed (24h)"
                    value={failedCount}
                    icon={AlertCircle}
                />
            </div>

            {/* Filters */}
            <div className="glass-card p-4 mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            placeholder="Search by agent, paywall, or tx hash..."
                            className="pl-10"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2">
                        <Select value={statusFilter} onValueChange={setStatusFilter}>
                            <SelectTrigger className="w-[140px]">
                                <Filter className="w-4 h-4 mr-2" />
                                <SelectValue placeholder="Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Status</SelectItem>
                                <SelectItem value="success">Success</SelectItem>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="failed">Failed</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="glass-card overflow-hidden">
                <TransactionTable transactions={paginatedTransactions} />

                {/* Pagination */}
                <div className="flex items-center justify-between p-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                        Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredTransactions.length)} of {filteredTransactions.length} transactions
                    </p>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <span className="text-sm text-muted-foreground px-2">
                            Page {currentPage} of {totalPages}
                        </span>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                        >
                            <ChevronRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
