// Mock data for AgentPay demo

export interface Transaction {
  id: string;
  timestamp: Date;
  agentId: string;
  agentName: string;
  paywallId: string;
  paywallName: string;
  amount: number;
  amountUsd: number;
  status: 'success' | 'pending' | 'failed';
  txHash: string;
  responseTime: number;
}

export interface Paywall {
  id: string;
  name: string;
  description: string;
  category: 'API' | 'Content' | 'Service' | 'Data Feed';
  priceInMnee: number;
  priceInUsd: number;
  pricingType: 'one-time' | 'per-request' | 'subscription';
  endpoint: string;
  webhookUrl?: string;
  accessDuration: string;
  status: 'active' | 'paused' | 'draft';
  createdAt: Date;
  totalEarnings: number;
  paymentCount: number;
  successRate: number;
}

export interface Stats {
  totalRevenue: number;
  totalRevenueUsd: number;
  paymentsToday: number;
  activePaywalls: number;
  successRate: number;
  revenueChange: number;
  paymentsChange: number;
}

const agentNames = [
  'Agent_Alpha', 'WeatherBot_42', 'DataFetcher_7', 'MarketAnalyzer_X',
  'ContentGen_Pro', 'ResearchBot_99', 'TradingAgent_1', 'NewsAggregator_5',
  'SentimentBot_3', 'PriceTracker_8', 'APIProxy_12', 'SmartAssistant_4'
];

const paywallNames = [
  'Premium Weather API', 'Real-time Market Data', 'Sentiment Analysis API',
  'News Feed Pro', 'Crypto Price Oracle', 'AI Image Generator', 
  'Translation API', 'Stock Analysis Feed'
];

function generateTxHash(): string {
  const chars = '0123456789abcdef';
  let hash = '0x';
  for (let i = 0; i < 64; i++) {
    hash += chars[Math.floor(Math.random() * chars.length)];
  }
  return hash;
}

function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}

function randomFromArray<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generatePastDate(daysAgo: number): Date {
  const date = new Date();
  date.setDate(date.getDate() - Math.random() * daysAgo);
  date.setHours(Math.floor(Math.random() * 24));
  date.setMinutes(Math.floor(Math.random() * 60));
  return date;
}

export const mockPaywalls: Paywall[] = [
  {
    id: 'pw_1',
    name: 'Premium Weather API',
    description: 'Real-time weather data for any location worldwide with 15-minute forecasts',
    category: 'API',
    priceInMnee: 5,
    priceInUsd: 5,
    pricingType: 'per-request',
    endpoint: 'https://api.agentpay.io/v1/weather',
    accessDuration: '1 hour',
    status: 'active',
    createdAt: generatePastDate(30),
    totalEarnings: 2450,
    paymentCount: 490,
    successRate: 99.2,
  },
  {
    id: 'pw_2',
    name: 'Real-time Market Data',
    description: 'Live stock and crypto prices with millisecond latency',
    category: 'Data Feed',
    priceInMnee: 10,
    priceInUsd: 10,
    pricingType: 'per-request',
    endpoint: 'https://api.agentpay.io/v1/market',
    accessDuration: '1 hour',
    status: 'active',
    createdAt: generatePastDate(25),
    totalEarnings: 5680,
    paymentCount: 568,
    successRate: 98.7,
  },
  {
    id: 'pw_3',
    name: 'Sentiment Analysis API',
    description: 'AI-powered sentiment analysis for social media and news',
    category: 'API',
    priceInMnee: 8,
    priceInUsd: 8,
    pricingType: 'per-request',
    endpoint: 'https://api.agentpay.io/v1/sentiment',
    accessDuration: 'forever',
    status: 'active',
    createdAt: generatePastDate(20),
    totalEarnings: 1840,
    paymentCount: 230,
    successRate: 99.5,
  },
  {
    id: 'pw_4',
    name: 'News Feed Pro',
    description: 'Curated news articles from 10,000+ sources with AI summaries',
    category: 'Content',
    priceInMnee: 3,
    priceInUsd: 3,
    pricingType: 'subscription',
    endpoint: 'https://api.agentpay.io/v1/news',
    accessDuration: '1 day',
    status: 'active',
    createdAt: generatePastDate(15),
    totalEarnings: 890,
    paymentCount: 297,
    successRate: 99.8,
  },
  {
    id: 'pw_5',
    name: 'Crypto Price Oracle',
    description: 'Verified on-chain price feeds for DeFi applications',
    category: 'Data Feed',
    priceInMnee: 15,
    priceInUsd: 15,
    pricingType: 'per-request',
    endpoint: 'https://api.agentpay.io/v1/oracle',
    accessDuration: '1 hour',
    status: 'paused',
    createdAt: generatePastDate(10),
    totalEarnings: 3200,
    paymentCount: 214,
    successRate: 97.2,
  },
];

export function generateTransactions(count: number): Transaction[] {
  const transactions: Transaction[] = [];
  
  for (let i = 0; i < count; i++) {
    const paywall = randomFromArray(mockPaywalls);
    const status = Math.random() > 0.05 ? (Math.random() > 0.02 ? 'success' : 'pending') : 'failed';
    const amount = paywall.priceInMnee * (0.8 + Math.random() * 0.4);
    
    transactions.push({
      id: generateId(),
      timestamp: generatePastDate(30),
      agentId: `agent_${generateId().substring(0, 8)}`,
      agentName: randomFromArray(agentNames),
      paywallId: paywall.id,
      paywallName: paywall.name,
      amount: parseFloat(amount.toFixed(2)),
      amountUsd: parseFloat(amount.toFixed(2)),
      status,
      txHash: generateTxHash(),
      responseTime: Math.floor(50 + Math.random() * 200),
    });
  }
  
  return transactions.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
}

export const mockTransactions = generateTransactions(100);

export const recentTransactions = mockTransactions.slice(0, 10);

export function getStats(): Stats {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const todayTransactions = mockTransactions.filter(t => t.timestamp >= today);
  const successfulTransactions = mockTransactions.filter(t => t.status === 'success');
  
  return {
    totalRevenue: 12345,
    totalRevenueUsd: 12345,
    paymentsToday: todayTransactions.length || 47,
    activePaywalls: mockPaywalls.filter(p => p.status === 'active').length,
    successRate: 98.7,
    revenueChange: 12.5,
    paymentsChange: 8.3,
  };
}

export function getRevenueChartData() {
  const data = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    data.push({
      date: date.toLocaleDateString('en-US', { weekday: 'short' }),
      revenue: Math.floor(1000 + Math.random() * 2000),
      payments: Math.floor(50 + Math.random() * 100),
    });
  }
  return data;
}

export interface ApiKey {
  id: string;
  name: string;
  key: string;
  createdAt: Date;
  lastUsed: Date | null;
  permissions: 'read' | 'write' | 'admin';
}

export const mockApiKeys: ApiKey[] = [
  {
    id: 'key_1',
    name: 'Production API Key',
    key: 'ap_live_7xKm9...Qp3r',
    createdAt: generatePastDate(60),
    lastUsed: generatePastDate(0.1),
    permissions: 'admin',
  },
  {
    id: 'key_2',
    name: 'Development Key',
    key: 'ap_test_3nPk2...Wm8x',
    createdAt: generatePastDate(30),
    lastUsed: generatePastDate(2),
    permissions: 'write',
  },
  {
    id: 'key_3',
    name: 'Read-only Analytics',
    key: 'ap_read_9xLp5...Rk2m',
    createdAt: generatePastDate(15),
    lastUsed: null,
    permissions: 'read',
  },
];

export const tickerMessages = [
  { agent: 'Agent_Alpha', amount: 5, api: 'Weather API' },
  { agent: 'MarketBot_42', amount: 10, api: 'Market Data' },
  { agent: 'DataFetcher_7', amount: 8, api: 'Sentiment API' },
  { agent: 'ResearchBot_99', amount: 3, api: 'News Feed' },
  { agent: 'TradingAgent_1', amount: 15, api: 'Price Oracle' },
  { agent: 'ContentGen_Pro', amount: 5, api: 'Weather API' },
  { agent: 'SmartAssistant_4', amount: 10, api: 'Market Data' },
];
