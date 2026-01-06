import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        const transactions = await prisma.transaction.findMany({
            include: { paywall: true },
            orderBy: { createdAt: 'desc' },
        });
        return NextResponse.json(transactions);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch transactions' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { paywallId, payerAddress, amount, txHash, status } = body;

        const transaction = await prisma.transaction.create({
            data: {
                paywallId,
                payerAddress,
                amount: parseFloat(amount),
                txHash,
                status: status || 'pending',
            },
        });

        return NextResponse.json(transaction);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to record transaction' }, { status: 500 });
    }
}
