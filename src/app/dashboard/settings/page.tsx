"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    User,
    Wallet,
    Bell,
    Webhook,
    AlertTriangle,
    ExternalLink,
    Copy,
    Check
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function Settings() {
    const [copied, setCopied] = useState(false);
    const walletAddress = "0x7a2e9f3e4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e";

    const copyAddress = () => {
        navigator.clipboard.writeText(walletAddress);
        setCopied(true);
        toast({ title: "Address copied!" });
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="p-8 max-w-4xl">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-foreground">Settings</h1>
                <p className="text-muted-foreground">Manage your account and preferences</p>
            </div>

            <Tabs defaultValue="profile" className="space-y-6">
                <TabsList className="bg-muted/50">
                    <TabsTrigger value="profile" className="gap-2">
                        <User className="w-4 h-4" />
                        Profile
                    </TabsTrigger>
                    <TabsTrigger value="wallet" className="gap-2">
                        <Wallet className="w-4 h-4" />
                        Wallet
                    </TabsTrigger>
                    <TabsTrigger value="notifications" className="gap-2">
                        <Bell className="w-4 h-4" />
                        Notifications
                    </TabsTrigger>
                    <TabsTrigger value="webhooks" className="gap-2">
                        <Webhook className="w-4 h-4" />
                        Webhooks
                    </TabsTrigger>
                    <TabsTrigger value="danger" className="gap-2 text-destructive">
                        <AlertTriangle className="w-4 h-4" />
                        Danger
                    </TabsTrigger>
                </TabsList>

                {/* Profile Tab */}
                <TabsContent value="profile">
                    <div className="glass-card p-6 space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-foreground mb-4">Profile Information</h3>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="displayName">Display Name</Label>
                                    <Input id="displayName" defaultValue="AgentPay User" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" type="email" placeholder="your@email.com" />
                                    <p className="text-xs text-muted-foreground">Used for notifications only</p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-4 border-t border-border">
                            <Button variant="gradient">Save Changes</Button>
                        </div>
                    </div>
                </TabsContent>

                {/* Wallet Tab */}
                <TabsContent value="wallet">
                    <div className="glass-card p-6 space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-foreground mb-4">Connected Wallet</h3>
                            <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                                    0x
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-foreground truncate">{walletAddress}</p>
                                    <p className="text-xs text-muted-foreground">Ethereum Mainnet</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="icon" onClick={copyAddress}>
                                        {copied ? <Check className="w-4 h-4 text-success" /> : <Copy className="w-4 h-4" />}
                                    </Button>
                                    <a
                                        href={`https://etherscan.io/address/${walletAddress}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button variant="ghost" size="icon">
                                            <ExternalLink className="w-4 h-4" />
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium text-foreground mb-3">MNEE Balance</h4>
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-bold text-foreground">1,234.56</span>
                                <span className="text-muted-foreground">MNEE</span>
                                <span className="text-sm text-muted-foreground">≈ $1,234.56 USD</span>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-border flex gap-3">
                            <Button variant="gradient">Withdraw Funds</Button>
                            <Button variant="outline">Disconnect Wallet</Button>
                        </div>
                    </div>
                </TabsContent>

                {/* Notifications Tab */}
                <TabsContent value="notifications">
                    <div className="glass-card p-6 space-y-6">
                        <h3 className="text-lg font-semibold text-foreground">Email Notifications</h3>

                        <div className="space-y-4">
                            {[
                                { id: 'payment', label: 'Payment received', description: 'Get notified when you receive a payment', default: true },
                                { id: 'failed', label: 'Payment failed', description: 'Get notified when a payment fails', default: true },
                                { id: 'weekly', label: 'Weekly summary', description: 'Receive a weekly summary of your earnings', default: false },
                                { id: 'security', label: 'Security alerts', description: 'Important security notifications', default: true },
                            ].map((item) => (
                                <div key={item.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border">
                                    <div>
                                        <p className="font-medium text-foreground">{item.label}</p>
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                    </div>
                                    <Switch defaultChecked={item.default} />
                                </div>
                            ))}
                        </div>

                        <div className="pt-4 border-t border-border">
                            <Button variant="gradient">Save Preferences</Button>
                        </div>
                    </div>
                </TabsContent>

                {/* Webhooks Tab */}
                <TabsContent value="webhooks">
                    <div className="glass-card p-6 space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-semibold text-foreground">Webhook Endpoints</h3>
                                <p className="text-sm text-muted-foreground">Receive real-time notifications for events</p>
                            </div>
                            <Button variant="gradient">Add Endpoint</Button>
                        </div>

                        <div className="text-center py-12 border border-dashed border-border rounded-lg">
                            <Webhook className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                            <h4 className="text-lg font-semibold text-foreground mb-2">No webhooks configured</h4>
                            <p className="text-muted-foreground mb-4">Add a webhook endpoint to receive event notifications</p>
                            <Button variant="outline">Add Your First Webhook</Button>
                        </div>
                    </div>
                </TabsContent>

                {/* Danger Zone Tab */}
                <TabsContent value="danger">
                    <div className="glass-card p-6 space-y-6 border-destructive/20">
                        <div>
                            <h3 className="text-lg font-semibold text-destructive mb-2">Danger Zone</h3>
                            <p className="text-sm text-muted-foreground">Irreversible and destructive actions</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                                <div>
                                    <p className="font-medium text-foreground">Export All Data</p>
                                    <p className="text-sm text-muted-foreground">Download all your data as JSON</p>
                                </div>
                                <Button variant="outline">Export Data</Button>
                            </div>

                            <div className="flex items-center justify-between p-4 rounded-lg border border-destructive/30 bg-destructive/5">
                                <div>
                                    <p className="font-medium text-foreground">Delete Account</p>
                                    <p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
                                </div>
                                <Button variant="destructive">Delete Account</Button>
                            </div>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
