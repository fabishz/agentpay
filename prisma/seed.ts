import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Sample wallet addresses
const OWNER_ADDRESSES = [
    '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb1',
    '0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed',
    '0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359',
];

const PAYER_ADDRESSES = [
    '0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199',
    '0xdD870fA1b7C4700F2BD7f44238821C26f7392148',
    '0x06012c8cf97BEaD5deAe237070F9587f8E7A266d',
    '0x4e83362412b8d1bec281594ceA3052c8eb01311c',
    '0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb',
];

const AGENT_NAMES = [
    'Agent_Alpha',
    'WeatherBot_42',
    'DataFetcher_7',
    'MarketAnalyzer_X',
    'ContentGen_Pro',
    'ResearchBot_99',
    'TradingAgent_1',
    'NewsAggregator_5',
    'SentimentBot_3',
    'PriceTracker_8',
    'APIProxy_12',
    'SmartAssistant_4',
];

function generateTxHash(): string {
    const chars = '0123456789abcdef';
    let hash = '0x';
    for (let i = 0; i < 64; i++) {
        hash += chars[Math.floor(Math.random() * chars.length)];
    }
    return hash;
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

async function main() {
    console.log('🌱 Starting database seed...');

    // Clear existing data
    console.log('🗑️  Clearing existing data...');
    await prisma.transaction.deleteMany();
    await prisma.paywall.deleteMany();

    // Create paywalls
    console.log('📦 Creating paywalls...');
    const paywalls = await Promise.all([
        prisma.paywall.create({
            data: {
                name: 'Premium Weather API',
                description: 'Real-time weather data for any location worldwide with 15-minute forecasts',
                price: 5.0,
                ownerAddress: OWNER_ADDRESSES[0],
            },
        }),
        prisma.paywall.create({
            data: {
                name: 'Real-time Market Data',
                description: 'Live stock and crypto prices with millisecond latency',
                price: 10.0,
                ownerAddress: OWNER_ADDRESSES[0],
            },
        }),
        prisma.paywall.create({
            data: {
                name: 'Sentiment Analysis API',
                description: 'AI-powered sentiment analysis for social media and news',
                price: 8.0,
                ownerAddress: OWNER_ADDRESSES[1],
            },
        }),
        prisma.paywall.create({
            data: {
                name: 'News Feed Pro',
                description: 'Curated news articles from 10,000+ sources with AI summaries',
                price: 3.0,
                ownerAddress: OWNER_ADDRESSES[1],
            },
        }),
        prisma.paywall.create({
            data: {
                name: 'Crypto Price Oracle',
                description: 'Verified on-chain price feeds for DeFi applications',
                price: 15.0,
                ownerAddress: OWNER_ADDRESSES[2],
            },
        }),
        prisma.paywall.create({
            data: {
                name: 'AI Image Generator',
                description: 'Generate high-quality images from text descriptions',
                price: 12.0,
                ownerAddress: OWNER_ADDRESSES[2],
            },
        }),
        prisma.paywall.create({
            data: {
                name: 'Translation API',
                description: 'Neural machine translation supporting 100+ languages',
                price: 4.0,
                ownerAddress: OWNER_ADDRESSES[0],
            },
        }),
        prisma.paywall.create({
            data: {
                name: 'Stock Analysis Feed',
                description: 'Real-time stock analysis with AI-powered insights',
                price: 20.0,
                ownerAddress: OWNER_ADDRESSES[1],
            },
        }),
    ]);

    console.log(`✅ Created ${paywalls.length} paywalls`);

    // Create transactions
    console.log('💳 Creating transactions...');
    const transactions = [];

    for (let i = 0; i < 80; i++) {
        const paywall = randomFromArray(paywalls);
        const status = Math.random() > 0.05 ? (Math.random() > 0.02 ? 'success' : 'pending') : 'failed';
        const amount = paywall.price * (0.8 + Math.random() * 0.4);
        const amountUsd = amount; // 1:1 for MNEE to USD in this demo

        transactions.push(
            prisma.transaction.create({
                data: {
                    paywallId: paywall.id,
                    payerAddress: randomFromArray(PAYER_ADDRESSES),
                    agentName: randomFromArray(AGENT_NAMES),
                    amount: parseFloat(amount.toFixed(2)),
                    amountUsd: parseFloat(amountUsd.toFixed(2)),
                    txHash: generateTxHash(),
                    status,
                    responseTime: Math.floor(50 + Math.random() * 200),
                    createdAt: generatePastDate(30),
                },
            })
        );
    }

    await Promise.all(transactions);
    console.log(`✅ Created ${transactions.length} transactions`);

    // Print summary
    const stats = await prisma.transaction.aggregate({
        _sum: { amount: true },
        _count: true,
        where: { status: 'success' },
    });

    console.log('\n📊 Database Summary:');
    console.log(`   Paywalls: ${paywalls.length}`);
    console.log(`   Transactions: ${transactions.length}`);
    console.log(`   Successful Transactions: ${stats._count}`);
    console.log(`   Total Revenue: $${stats._sum.amount?.toFixed(2) || 0}`);
    console.log('\n✨ Seed completed successfully!');
}

main()
    .catch((e) => {
        console.error('❌ Error seeding database:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
