"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PaymentBadge } from "@/components/PaymentBadge";
import { DemoPayment } from "@/components/DemoPayment";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Plus, ExternalLink, MoreVertical, Copy, Pause, Trash2, Loader2, AlertCircle } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/hooks/use-toast";

interface Paywall {
    id: string;
    name: string;
    description: string;
    price: number;
    ownerAddress: string;
    createdAt: string;
}

async function fetchPaywalls() {
    const res = await fetch('/api/paywalls');
    if (!res.ok) throw new Error('Failed to fetch paywalls');
    return res.json();
}

async function deletePaywall(id: string) {
    const res = await fetch(`/api/paywalls/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete paywall');
    return res.json();
}

export default function Paywalls() {
    const queryClient = useQueryClient();

    const { data: paywalls = [], isLoading, error } = useQuery<Paywall[]>({
        queryKey: ['paywalls'],
        queryFn: fetchPaywalls,
    });

    const deleteMutation = useMutation({
        mutationFn: deletePaywall,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['paywalls'] });
            toast({
                title: "Paywall Deleted",
                description: "The paywall has been successfully removed.",
            });
        },
        onError: () => {
            toast({
                title: "Error",
                description: "Failed to delete paywall. Please try again.",
                variant: "destructive",
            });
        },
    });

    const handleCopyEndpoint = (paywallId: string) => {
        const endpoint = `https://api.agentpay.io/v1/pay/${paywallId}`;
        navigator.clipboard.writeText(endpoint);
        toast({
            title: "Copied!",
            description: "Endpoint URL copied to clipboard.",
        });
    };

    const handleDelete = (id: string, name: string) => {
        if (confirm(`Are you sure you want to delete "${name}"?`)) {
            deleteMutation.mutate(id);
        }
    };

    if (isLoading) {
        return (
            <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground">Paywalls</h1>
                        <p className="text-muted-foreground">Manage your monetized APIs and services</p>
                    </div>
                    <Button variant="gradient" asChild>
                        <Link href="/dashboard/paywalls/new">
                            <Plus className="w-4 h-4 mr-2" />
                            Create Paywall
                        </Link>
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="glass-card p-6 animate-pulse">
                            <div className="h-6 bg-muted rounded w-3/4 mb-2"></div>
                            <div className="h-4 bg-muted rounded w-full mb-4"></div>
                            <div className="h-20 bg-muted rounded"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-8">
                <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                    <AlertCircle className="w-12 h-12 text-destructive mb-4" />
                    <h2 className="text-xl font-semibold text-foreground mb-2">Failed to Load Paywalls</h2>
                    <p className="text-muted-foreground mb-4">There was an error loading your paywalls.</p>
                    <Button onClick={() => queryClient.invalidateQueries({ queryKey: ['paywalls'] })}>
                        Try Again
                    </Button>
                </div>
            </div>
        );
    }

    if (paywalls.length === 0) {
        return (
            <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground">Paywalls</h1>
                        <p className="text-muted-foreground">Manage your monetized APIs and services</p>
                    </div>
                    <Button variant="gradient" asChild>
                        <Link href="/dashboard/paywalls/new">
                            <Plus className="w-4 h-4 mr-2" />
                            Create Paywall
                        </Link>
                    </Button>
                </div>
                <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Plus className="w-10 h-10 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground mb-2">No Paywalls Yet</h2>
                    <p className="text-muted-foreground mb-6 max-w-md">
                        Create your first paywall to start monetizing your APIs and services for AI agents.
                    </p>
                    <Button variant="gradient" asChild>
                        <Link href="/dashboard/paywalls/new">
                            <Plus className="w-4 h-4 mr-2" />
                            Create Your First Paywall
                        </Link>
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-foreground">Paywalls</h1>
                    <p className="text-muted-foreground">Manage your monetized APIs and services</p>
                </div>
                <Button variant="gradient" asChild>
                    <Link href="/dashboard/paywalls/new">
                        <Plus className="w-4 h-4 mr-2" />
                        Create Paywall
                    </Link>
                </Button>
            </div>

            {/* Paywalls Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paywalls.map((paywall) => (
                    <div key={paywall.id} className="glass-card-hover overflow-hidden group">
                        <div className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="font-semibold text-foreground truncate">{paywall.name}</h3>
                                        <PaymentBadge status="active" />
                                    </div>
                                    <p className="text-sm text-muted-foreground line-clamp-2">{paywall.description}</p>
                                </div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
                                            <MoreVertical className="w-4 h-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem onClick={() => handleCopyEndpoint(paywall.id)}>
                                            <Copy className="w-4 h-4 mr-2" />
                                            Copy Endpoint
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            className="text-destructive"
                                            onClick={() => handleDelete(paywall.id, paywall.name)}
                                            disabled={deleteMutation.isPending}
                                        >
                                            <Trash2 className="w-4 h-4 mr-2" />
                                            Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 mb-4">
                                <div>
                                    <p className="text-xs text-muted-foreground mb-1">Price</p>
                                    <p className="font-semibold text-foreground">${paywall.price.toFixed(2)}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground mb-1">Type</p>
                                    <p className="font-semibold text-foreground text-xs">Per Request</p>
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground mb-1">Status</p>
                                    <p className="font-semibold text-success text-xs">Active</p>
                                </div>
                            </div>

                            {/* Price & Actions */}
                            <div className="flex items-center justify-between pt-4 border-t border-border">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-muted-foreground">{paywall.price} MNEE</span>
                                    <span className="text-xs text-muted-foreground">/ request</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <DemoPayment
                                        paywallName={paywall.name}
                                        amount={paywall.price}
                                        className="h-8 px-3 text-xs"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Create New Card */}
                <Link
                    href="/dashboard/paywalls/new"
                    className="glass-card border-2 border-dashed border-border hover:border-primary/50 transition-colors min-h-[250px] flex flex-col items-center justify-center gap-4 group"
                >
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Plus className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-center">
                        <p className="font-semibold text-foreground">Create New Paywall</p>
                        <p className="text-sm text-muted-foreground">Start monetizing your API</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
