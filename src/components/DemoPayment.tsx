"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Play,
  Bot,
  Wallet,
  CheckCircle,
  Loader2,
  Zap,
  ExternalLink,
  Copy,
  Check,
  ArrowRight,
  AlertTriangle
} from "lucide-react";
import { cn } from "@/lib/utils";
import confetti from "canvas-confetti";
import { ethers } from "ethers";

// ABI for AgentPay contract
const CONTRACT_ABI = [
  "function pay(uint256 _paywallId) external payable",
  "event PaymentReceived(uint256 indexed paywallId, address indexed payer, uint256 amount)"
];

// Default Hardhat localhost address - change this after deployment if different
const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

interface PaymentStep {
  id: number;
  label: string;
  description: string;
  icon: React.ReactNode;
  duration: number;
}

const steps: PaymentStep[] = [
  {
    id: 1,
    label: "Agent Connecting",
    description: "AI agent initiating connection to AgentPay...",
    icon: <Bot className="w-6 h-6" />,
    duration: 1500,
  },
  {
    id: 2,
    label: "Verifying Paywall",
    description: "Checking paywall requirements and pricing...",
    icon: <Zap className="w-6 h-6" />,
    duration: 1200,
  },
  {
    id: 3,
    label: "Processing Payment",
    description: "Sending 5 MNEE to paywall address...",
    icon: <Wallet className="w-6 h-6" />,
    duration: 2000,
  },
  {
    id: 4,
    label: "Confirming on Blockchain",
    description: "Waiting for transaction confirmation...",
    icon: <Loader2 className="w-6 h-6 animate-spin" />,
    duration: 2500,
  },
];

interface DemoPaymentProps {
  paywallName?: string;
  amount?: number;
  className?: string;
}

export function DemoPayment({
  paywallName = "Premium Weather API",
  amount = 5,
  className
}: DemoPaymentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [copied, setCopied] = useState(false);
  const [txHash, setTxHash] = useState("0x7a3f8c2d1e5b9a4f6c8d2e1a3b5c7d9e1f2a4b6c8d0e2f4a6b8c0d2e4f6a8b0c");
  const [error, setError] = useState<string | null>(null);
  const [isRealPayment, setIsRealPayment] = useState(false);

  const runDemo = async () => {
    setError(null);
    setIsRunning(true);
    setCurrentStep(0);
    setIsComplete(false);
    setIsRealPayment(false);

    // Check if Metamask is installed for real payment
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      try {
        setIsRealPayment(true);
        await handleRealPayment();
      } catch (err: any) {
        console.error("Payment failed:", err);
        setError(err.message || "Payment failed");
        setIsRunning(false);
      }
    } else {
      // Fallback to simulation
      runSimulation();
    }
  };

  const handleRealPayment = async () => {
    const provider = new ethers.BrowserProvider((window as any).ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

    // Step 1: Connecting
    setCurrentStep(0);
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Step 2: Verifying
    setCurrentStep(1);
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Step 3: Processing (Send Transaction)
    setCurrentStep(2);

    // Mock paywall ID (1) and amount (0.001 ETH for demo purposes instead of 5 MNEE to be realistic on testnet)
    const paywallId = 1;
    const amountInWei = ethers.parseEther("0.001");

    try {
      const tx = await contract.pay(paywallId, { value: amountInWei });
      setTxHash(tx.hash);

      // Step 4: Confirming
      setCurrentStep(3);
      await tx.wait();

      // Complete
      completePayment(tx.hash);
    } catch (err) {
      throw err;
    }
  };

  const runSimulation = () => {
    let step = 0;
    const interval = setInterval(() => {
      if (step < steps.length - 1) {
        step++;
        setCurrentStep(step);
      } else {
        clearInterval(interval);
        completePayment("0x7a3f8c2d1e5b9a4f6c8d2e1a3b5c7d9e1f2a4b6c8d0e2f4a6b8c0d2e4f6a8b0c");
      }
    }, 1500);
  };

  const completePayment = async (hash: string) => {
    setIsComplete(true);
    setIsRunning(false);
    setTxHash(hash);

    // Record transaction in backend
    try {
      await fetch('/api/transactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          paywallId: 'pw_1', // Mock ID
          payerAddress: isRealPayment ? '0xUserWallet' : '0xAgentWallet', // Simplified
          amount: amount,
          txHash: hash,
          status: 'success'
        })
      });
    } catch (e) {
      console.error("Failed to record transaction", e);
    }

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#3b82f6', '#00d4ff', '#10b981'],
    });
  };

  const resetDemo = () => {
    setIsRunning(false);
    setCurrentStep(0);
    setIsComplete(false);
    setError(null);
  };

  const copyTxHash = () => {
    navigator.clipboard.writeText(txHash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open: boolean) => { setIsOpen(open); if (!open) resetDemo(); }}>
      <DialogTrigger asChild>
        <Button variant="outline" className={className}>
          <Play className="w-4 h-4 mr-2" />
          Demo Payment
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            Payment Simulation
          </DialogTitle>
        </DialogHeader>

        <div className="py-4">
          {/* Paywall Info */}
          <div className="glass-card p-4 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Paywall</p>
                <p className="font-semibold text-foreground">{paywallName}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Amount</p>
                <p className="font-bold text-primary text-lg">{amount} MNEE</p>
              </div>
            </div>
          </div>

          {error && (
            <div className="bg-destructive/10 text-destructive p-3 rounded-md mb-4 flex items-center gap-2 text-sm">
              <AlertTriangle className="w-4 h-4" />
              {error}
            </div>
          )}

          {!isRunning && !isComplete && currentStep === 0 && (
            <div className="text-center py-8">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Bot className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Ready to Pay</h3>
              <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto">
                Initiate a payment transaction. If a wallet is detected, it will trigger a real blockchain transaction.
              </p>
              <Button variant="gradient" size="lg" onClick={runDemo}>
                <Play className="w-4 h-4 mr-2" />
                Start Payment
              </Button>
            </div>
          )}

          {(isRunning || (currentStep > 0 && !isComplete)) && (
            <div className="space-y-4">
              {steps.map((step, index) => {
                const isActive = index === currentStep;
                const isCompleted = index < currentStep;
                const isPending = index > currentStep;

                return (
                  <div
                    key={step.id}
                    className={cn(
                      "flex items-start gap-4 p-4 rounded-lg transition-all duration-300",
                      isActive && "bg-primary/10 border border-primary/30",
                      isCompleted && "bg-success/5",
                      isPending && "opacity-40"
                    )}
                  >
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300",
                      isActive && "bg-primary text-primary-foreground animate-pulse",
                      isCompleted && "bg-success text-success-foreground",
                      isPending && "bg-muted text-muted-foreground"
                    )}>
                      {isCompleted ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : isActive ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        step.icon
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={cn(
                        "font-medium transition-colors",
                        isActive && "text-primary",
                        isCompleted && "text-success",
                        isPending && "text-muted-foreground"
                      )}>
                        {step.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                      {isActive && (
                        <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full animate-pulse"
                            style={{
                              width: '100%',
                              animation: `progress ${step.duration}ms linear`
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {isComplete && (
            <div className="text-center py-6 fade-in">
              <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4 relative">
                <CheckCircle className="w-10 h-10 text-success" />
                <div className="absolute inset-0 rounded-full bg-success/20 animate-ping" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Payment Successful!</h3>
              <p className="text-sm text-muted-foreground mb-6">
                The agent now has access to {paywallName}
              </p>

              {/* Transaction Details */}
              <div className="glass-card p-4 text-left space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Amount</span>
                  <span className="font-semibold text-success">{amount} MNEE</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Status</span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-success/10 text-success border border-success/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-success" />
                    Confirmed
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Response Time</span>
                  <span className="text-foreground">127ms</span>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-1">Transaction Hash</p>
                  <div className="flex items-center gap-2">
                    <code className="text-xs bg-muted px-2 py-1 rounded font-mono flex-1 truncate">
                      {txHash}
                    </code>
                    <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0" onClick={copyTxHash}>
                      {copied ? <Check className="w-4 h-4 text-success" /> : <Copy className="w-4 h-4" />}
                    </Button>
                    <a href={`https://etherscan.io/tx/${txHash}`} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                <Button variant="outline" onClick={resetDemo}>
                  Run Again
                </Button>
                <Button variant="gradient" onClick={() => setIsOpen(false)}>
                  Done
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>

      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </Dialog>
  );
}
