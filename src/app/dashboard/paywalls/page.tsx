import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PaymentBadge } from "@/components/PaymentBadge";
import { DemoPayment } from "@/components/DemoPayment";
import { mockPaywalls } from "@/lib/mockData";
import { Plus, ExternalLink, MoreVertical, Copy, Pause, Trash2 } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Paywalls() {
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
                {mockPaywalls.map((paywall) => (
                    <div key={paywall.id} className="glass-card-hover overflow-hidden group">
                        <div className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="font-semibold text-foreground truncate">{paywall.name}</h3>
                                        <PaymentBadge status={paywall.status} />
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
                                        <DropdownMenuItem>
                                            <Copy className="w-4 h-4 mr-2" />
                                            Copy Endpoint
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Pause className="w-4 h-4 mr-2" />
                                            {paywall.status === 'active' ? 'Pause' : 'Activate'}
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="text-destructive">
                                            <Trash2 className="w-4 h-4 mr-2" />
                                            Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 mb-4">
                                <div>
                                    <p className="text-xs text-muted-foreground mb-1">Earnings</p>
                                    <p className="font-semibold text-foreground">${paywall.totalEarnings.toLocaleString()}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground mb-1">Payments</p>
                                    <p className="font-semibold text-foreground">{paywall.paymentCount}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground mb-1">Success</p>
                                    <p className="font-semibold text-success">{paywall.successRate}%</p>
                                </div>
                            </div>

                            {/* Price & Actions */}
                            <div className="flex items-center justify-between pt-4 border-t border-border">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-muted-foreground">{paywall.priceInMnee} MNEE</span>
                                    <span className="text-xs text-muted-foreground">/ {paywall.pricingType}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <DemoPayment
                                        paywallName={paywall.name}
                                        amount={paywall.priceInMnee}
                                        className="h-8 px-3 text-xs"
                                    />
                                    <Link
                                        href={`/dashboard/paywalls/${paywall.id}`}
                                        className="text-sm text-primary hover:text-primary/80 flex items-center gap-1"
                                    >
                                        <ExternalLink className="w-3 h-3" />
                                    </Link>
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
