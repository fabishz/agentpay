"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { mockApiKeys, ApiKey } from "@/lib/mockData";
import {
    Plus,
    Eye,
    EyeOff,
    Copy,
    Trash2,
    Key,
    Shield,
    AlertTriangle
} from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { PaymentBadge } from "@/components/PaymentBadge";

export default function ApiKeys() {
    const [keys, setKeys] = useState<ApiKey[]>(mockApiKeys);
    const [visibleKeys, setVisibleKeys] = useState<Set<string>>(new Set());
    const [newKeyName, setNewKeyName] = useState('');
    const [newKeyPermissions, setNewKeyPermissions] = useState<'read' | 'write' | 'admin'>('read');
    const [dialogOpen, setDialogOpen] = useState(false);

    const toggleKeyVisibility = (keyId: string) => {
        setVisibleKeys(prev => {
            const newSet = new Set(prev);
            if (newSet.has(keyId)) {
                newSet.delete(keyId);
            } else {
                newSet.add(keyId);
            }
            return newSet;
        });
    };

    const copyKey = (key: string) => {
        navigator.clipboard.writeText(key);
        toast({
            title: "Copied!",
            description: "API key copied to clipboard",
        });
    };

    const createKey = () => {
        const newKey: ApiKey = {
            id: `key_${Date.now()}`,
            name: newKeyName,
            key: `ap_live_${Math.random().toString(36).substring(2, 15)}...${Math.random().toString(36).substring(2, 6)}`,
            createdAt: new Date(),
            lastUsed: null,
            permissions: newKeyPermissions,
        };
        setKeys([...keys, newKey]);
        setNewKeyName('');
        setNewKeyPermissions('read');
        setDialogOpen(false);
        toast({
            title: "API Key Created",
            description: "Make sure to copy your new API key now. You won't be able to see it again!",
        });
    };

    const revokeKey = (keyId: string) => {
        setKeys(keys.filter(k => k.id !== keyId));
        toast({
            title: "API Key Revoked",
            description: "The API key has been permanently revoked",
        });
    };

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    const permissionColors = {
        read: 'active',
        write: 'pending',
        admin: 'success',
    } as const;

    return (
        <div className="p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-foreground">API Keys</h1>
                    <p className="text-muted-foreground">Manage your API keys for authentication</p>
                </div>
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                    <DialogTrigger asChild>
                        <Button variant="gradient">
                            <Plus className="w-4 h-4 mr-2" />
                            Create New Key
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Create New API Key</DialogTitle>
                            <DialogDescription>
                                Create a new API key to authenticate your requests
                            </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                            <div className="space-y-2">
                                <Label htmlFor="keyName">Key Name</Label>
                                <Input
                                    id="keyName"
                                    placeholder="e.g., Production API Key"
                                    value={newKeyName}
                                    onChange={(e) => setNewKeyName(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="permissions">Permissions</Label>
                                <Select value={newKeyPermissions} onValueChange={(v: 'read' | 'write' | 'admin') => setNewKeyPermissions(v)}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="read">Read Only</SelectItem>
                                        <SelectItem value="write">Read & Write</SelectItem>
                                        <SelectItem value="admin">Admin</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <DialogFooter>
                            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
                            <Button variant="gradient" onClick={createKey} disabled={!newKeyName}>Create Key</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            {/* Security Notice */}
            <div className="glass-card p-4 mb-6 flex items-start gap-3 border-warning/20 bg-warning/5">
                <Shield className="w-5 h-5 text-warning shrink-0 mt-0.5" />
                <div>
                    <p className="font-medium text-foreground">Keep your API keys secure</p>
                    <p className="text-sm text-muted-foreground">
                        Never share your API keys publicly or commit them to version control.
                        If you suspect a key has been compromised, revoke it immediately.
                    </p>
                </div>
            </div>

            {/* Keys List */}
            <div className="glass-card overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Name</th>
                                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">API Key</th>
                                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Created</th>
                                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Last Used</th>
                                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Permissions</th>
                                <th className="text-right py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/50">
                            {keys.map((key) => (
                                <tr key={key.id} className="hover:bg-muted/30 transition-colors">
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-2">
                                            <Key className="w-4 h-4 text-primary" />
                                            <span className="font-medium text-foreground">{key.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-2">
                                            <code className="text-sm bg-muted px-2 py-1 rounded font-mono">
                                                {visibleKeys.has(key.id) ? key.key.replace('...', Math.random().toString(36).substring(2, 10)) : key.key}
                                            </code>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8"
                                                onClick={() => toggleKeyVisibility(key.id)}
                                            >
                                                {visibleKeys.has(key.id) ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8"
                                                onClick={() => copyKey(key.key)}
                                            >
                                                <Copy className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-sm text-muted-foreground">
                                        {formatDate(key.createdAt)}
                                    </td>
                                    <td className="py-4 px-4 text-sm text-muted-foreground">
                                        {key.lastUsed ? formatDate(key.lastUsed) : 'Never'}
                                    </td>
                                    <td className="py-4 px-4">
                                        <PaymentBadge status={permissionColors[key.permissions]} />
                                    </td>
                                    <td className="py-4 px-4 text-right">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                                            onClick={() => revokeKey(key.id)}
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Empty State */}
            {keys.length === 0 && (
                <div className="text-center py-12">
                    <Key className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">No API Keys</h3>
                    <p className="text-muted-foreground mb-4">Create your first API key to get started</p>
                    <Button variant="gradient" onClick={() => setDialogOpen(true)}>
                        <Plus className="w-4 h-4 mr-2" />
                        Create New Key
                    </Button>
                </div>
            )}
        </div>
    );
}
