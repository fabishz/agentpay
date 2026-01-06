import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Ticker } from "@/components/Ticker";
import { FeatureCard } from "@/components/FeatureCard";
import { HowItWorksStep } from "@/components/HowItWorksStep";
import {
    Zap,
    Bot,
    DollarSign,
    Lock,
    CreditCard,
    CheckCircle,
    ArrowRight,
    Github,
    Twitter,
    MessageCircle
} from "lucide-react";

export default function Landing() {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Noise overlay */}
            <div className="noise-overlay" />

            {/* Background mesh gradient */}
            <div className="fixed inset-0 mesh-gradient pointer-events-none" />

            {/* Header */}
            <header className="relative z-10 border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                            <Zap className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span className="text-xl font-bold text-foreground">AgentPay</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Docs</Link>
                        <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
                        <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
                    </nav>

                    <div className="flex items-center gap-3">
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="/dashboard">Sign In</Link>
                        </Button>
                        <Button variant="gradient" size="sm" asChild>
                            <Link href="/dashboard">Start Building</Link>
                        </Button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative z-10 pt-20 pb-16 md:pt-32 md:pb-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 fade-in">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </span>
                            <span className="text-sm text-primary font-medium"> Ready to have your first experience?</span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 slide-up">
                            Payment Infrastructure for{' '}
                            <span className="gradient-text">AI Agents</span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto slide-up" style={{ animationDelay: '0.1s' }}>
                            Enable autonomous agents to pay for services with MNEE stablecoin.
                            Simple APIs. Instant settlements. Zero platform fees.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 slide-up" style={{ animationDelay: '0.2s' }}>
                            <Button variant="hero" size="xl" asChild>
                                <Link href="/dashboard" className="group">
                                    Start Building
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            <Button variant="heroOutline" size="xl" asChild>
                                <Link href="/docs">View Documentation</Link>
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap items-center justify-center gap-8 mt-16 slide-up" style={{ animationDelay: '0.3s' }}>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-foreground">1,234</p>
                                <p className="text-sm text-muted-foreground">Payments</p>
                            </div>
                            <div className="w-px h-10 bg-border" />
                            <div className="text-center">
                                <p className="text-3xl font-bold text-foreground">$12,345</p>
                                <p className="text-sm text-muted-foreground">Processed</p>
                            </div>
                            <div className="w-px h-10 bg-border" />
                            <div className="text-center">
                                <p className="text-3xl font-bold text-foreground">567</p>
                                <p className="text-sm text-muted-foreground">Active Paywalls</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl float" />
                <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl float" style={{ animationDelay: '2s' }} />
            </section>

            {/* Ticker */}
            <Ticker />

            {/* Features Section */}
            <section id="features" className="relative z-10 py-20 md:py-32">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Built for the Future of AI Commerce
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Everything you need to monetize your APIs and services for AI agents
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <FeatureCard
                            icon={Zap}
                            title="Instant Payments"
                            description="Sub-second MNEE stablecoin transactions with immediate settlement on Ethereum."
                        />
                        <FeatureCard
                            icon={Bot}
                            title="Agent-First API"
                            description="Purpose-built endpoints designed for autonomous AI systems to integrate seamlessly."
                        />
                        <FeatureCard
                            icon={DollarSign}
                            title="Zero Platform Fees"
                            description="No platform fees on transactions. Only pay minimal gas costs on Ethereum."
                        />
                        <FeatureCard
                            icon={Lock}
                            title="Secure by Default"
                            description="Enterprise-grade security with cryptographic verification for every payment."
                        />
                        <FeatureCard
                            icon={CreditCard}
                            title="Flexible Pricing"
                            description="Support for one-time, per-request, and subscription pricing models."
                        />
                        <FeatureCard
                            icon={CheckCircle}
                            title="99.9% Uptime"
                            description="Reliable infrastructure backed by redundant systems and 24/7 monitoring."
                        />
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="relative z-10 py-20 md:py-32 border-y border-border bg-muted/10">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            How It Works
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Get started in three simple steps
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
                        <HowItWorksStep
                            step={1}
                            icon={Lock}
                            title="Create Paywall"
                            description="Set your price and protected API endpoint in seconds"
                        />
                        <HowItWorksStep
                            step={2}
                            icon={CreditCard}
                            title="Agent Pays"
                            description="AI agent sends MNEE payment to unlock access"
                        />
                        <HowItWorksStep
                            step={3}
                            icon={CheckCircle}
                            title="Instant Access"
                            description="Agent receives token and accesses your API immediately"
                            isLast
                        />
                    </div>

                    <div className="text-center mt-16">
                        <Button variant="gradient" size="lg" asChild>
                            <Link href="/dashboard/paywalls/new">
                                Create Your First Paywall
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative z-10 py-20 md:py-32">
                <div className="container mx-auto px-6">
                    <div className="glass-card p-8 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden gradient-border">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />

                        <div className="relative">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                Ready to Get Started?
                            </h2>
                            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                                Join the growing ecosystem of developers building payment infrastructure for AI agents.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button variant="hero" size="lg" asChild>
                                    <Link href="/dashboard">
                                        Start Building Now
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </Button>
                                <Button variant="glass" size="lg" asChild>
                                    <Link href="/docs">Read the Docs</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 border-t border-border py-12">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                <Zap className="w-4 h-4 text-primary-foreground" />
                            </div>
                            <span className="text-lg font-bold text-foreground">AgentPay</span>
                        </div>

                        <nav className="flex items-center gap-6">
                            <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Docs</Link>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                                <Github className="w-4 h-4" />
                                GitHub
                            </a>
                            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                                <MessageCircle className="w-4 h-4" />
                                Discord
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                                <Twitter className="w-4 h-4" />
                                Twitter
                            </a>
                        </nav>

                        <p className="text-sm text-muted-foreground">
                            Built with ❤️ for MNEE Hackathon 2025
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
