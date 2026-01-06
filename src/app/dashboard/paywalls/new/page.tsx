"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { CodeBlock } from "@/components/CodeBlock";
import { ArrowLeft, DollarSign, Zap } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function CreatePaywall() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: 'API',
        price: '',
        pricingType: 'per-request',
        endpoint: '',
        webhookUrl: '',
        accessDuration: '1 hour',
    });

    const priceInUsd = formData.price ? parseFloat(formData.price) : 0;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Paywall Created!",
            description: `${formData.name} is now active and ready to receive payments.`,
        });
        router.push('/dashboard/paywalls');
    };

    const exampleCode = `curl -X POST https://api.agentpay.io/v1/pay \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "paywall_id": "pw_new123",
    "amount": ${formData.price || '0'},
    "currency": "MNEE"
  }'`;

    return (
        <div className="p-8 max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <Button variant="ghost" size="icon" onClick={() => router.back()}>
                    <ArrowLeft className="w-5 h-5" />
                </Button>
                <div>
                    <h1 className="text-2xl font-bold text-foreground">Create Paywall</h1>
                    <p className="text-muted-foreground">Set up a new monetized endpoint for AI agents</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Form */}
                <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
                    {/* Basic Information */}
                    <div className="glass-card p-6 space-y-4">
                        <h2 className="text-lg font-semibold text-foreground">Basic Information</h2>

                        <div className="space-y-2">
                            <Label htmlFor="name">Paywall Name</Label>
                            <Input
                                id="name"
                                placeholder="e.g., Premium Weather API"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                placeholder="Describe what your API provides..."
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                rows={3}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                            <Select
                                value={formData.category}
                                onValueChange={(value) => setFormData({ ...formData, category: value })}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="API">API</SelectItem>
                                    <SelectItem value="Content">Content</SelectItem>
                                    <SelectItem value="Service">Service</SelectItem>
                                    <SelectItem value="Data Feed">Data Feed</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Pricing */}
                    <div className="glass-card p-6 space-y-4">
                        <h2 className="text-lg font-semibold text-foreground">Pricing</h2>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="price">Price in MNEE</Label>
                                <div className="relative">
                                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                    <Input
                                        id="price"
                                        type="number"
                                        placeholder="0.00"
                                        className="pl-9"
                                        value={formData.price}
                                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                        required
                                        min="0"
                                        step="0.01"
                                    />
                                </div>
                                <p className="text-xs text-muted-foreground">≈ ${priceInUsd.toFixed(2)} USD</p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="pricingType">Pricing Type</Label>
                                <Select
                                    value={formData.pricingType}
                                    onValueChange={(value) => setFormData({ ...formData, pricingType: value })}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="one-time">One-time</SelectItem>
                                        <SelectItem value="per-request">Per Request</SelectItem>
                                        <SelectItem value="subscription">Subscription</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    {/* API Configuration */}
                    <div className="glass-card p-6 space-y-4">
                        <h2 className="text-lg font-semibold text-foreground">API Configuration</h2>

                        <div className="space-y-2">
                            <Label htmlFor="endpoint">Protected Endpoint URL</Label>
                            <Input
                                id="endpoint"
                                type="url"
                                placeholder="https://your-api.com/endpoint"
                                value={formData.endpoint}
                                onChange={(e) => setFormData({ ...formData, endpoint: e.target.value })}
                                required
                            />
                            <p className="text-xs text-muted-foreground">The endpoint that will be protected by this paywall</p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="webhookUrl">Webhook URL (optional)</Label>
                            <Input
                                id="webhookUrl"
                                type="url"
                                placeholder="https://your-api.com/webhook"
                                value={formData.webhookUrl}
                                onChange={(e) => setFormData({ ...formData, webhookUrl: e.target.value })}
                            />
                            <p className="text-xs text-muted-foreground">Receive payment notifications</p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="accessDuration">Access Duration</Label>
                            <Select
                                value={formData.accessDuration}
                                onValueChange={(value) => setFormData({ ...formData, accessDuration: value })}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select duration" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1 hour">1 Hour</SelectItem>
                                    <SelectItem value="1 day">1 Day</SelectItem>
                                    <SelectItem value="1 week">1 Week</SelectItem>
                                    <SelectItem value="forever">Forever</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        <Button type="submit" variant="gradient" size="lg">
                            <Zap className="w-4 h-4 mr-2" />
                            Create Paywall
                        </Button>
                        <Button type="button" variant="outline" size="lg" onClick={() => router.back()}>
                            Cancel
                        </Button>
                    </div>
                </form>

                {/* Preview Panel */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="glass-card p-6 sticky top-8">
                        <h2 className="text-lg font-semibold text-foreground mb-4">Preview</h2>

                        {/* Preview Card */}
                        <div className="border border-border rounded-lg p-4 mb-6 bg-background/50">
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <h3 className="font-semibold text-foreground">
                                        {formData.name || 'Your Paywall Name'}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {formData.category}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-bold text-primary">
                                        {formData.price || '0'} MNEE
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        {formData.pricingType}
                                    </p>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                                {formData.description || 'Your description will appear here...'}
                            </p>
                        </div>

                        {/* Example Code */}
                        <div className="space-y-2">
                            <h3 className="text-sm font-medium text-foreground">Example API Call</h3>
                            <CodeBlock code={exampleCode} language="bash" />
                        </div>

                        {/* Info */}
                        <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
                            <p className="text-sm text-muted-foreground">
                                Once created, your paywall will be immediately active. AI agents can start making payments right away.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
