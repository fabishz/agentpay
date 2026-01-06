import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        const [totalRevenue, totalTransactions, activePaywalls] = await Promise.all([
            prisma.transaction.aggregate({
                _sum: { amount: true },
                where: { status: 'success' },
            }),
            prisma.transaction.count(),
            prisma.paywall.count(),
        ]);

        return NextResponse.json({
            totalRevenue: totalRevenue._sum.amount || 0,
            totalTransactions,
            activePaywalls,
        });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
    }
}
