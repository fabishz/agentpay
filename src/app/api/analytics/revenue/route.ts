import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        // Get transactions from the last 7 days
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        const transactions = await prisma.transaction.findMany({
            where: {
                createdAt: {
                    gte: sevenDaysAgo,
                },
                status: 'success',
            },
            select: {
                amount: true,
                createdAt: true,
            },
        });

        // Group transactions by day
        const revenueByDay = new Map<string, { revenue: number; payments: number }>();

        // Initialize last 7 days
        for (let i = 6; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            const dateKey = date.toLocaleDateString('en-US', { weekday: 'short' });
            const fullDateKey = date.toISOString().split('T')[0];
            revenueByDay.set(fullDateKey, { revenue: 0, payments: 0 });
        }

        // Aggregate transactions
        transactions.forEach((tx) => {
            const dateKey = tx.createdAt.toISOString().split('T')[0];
            const existing = revenueByDay.get(dateKey);
            if (existing) {
                existing.revenue += tx.amount;
                existing.payments += 1;
            }
        });

        // Format for chart
        const chartData = [];
        for (let i = 6; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            const dateKey = date.toISOString().split('T')[0];
            const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
            const data = revenueByDay.get(dateKey) || { revenue: 0, payments: 0 };

            chartData.push({
                date: dayName,
                revenue: Math.round(data.revenue * 100) / 100,
                payments: data.payments,
            });
        }

        return NextResponse.json(chartData);
    } catch (error) {
        console.error('Revenue analytics error:', error);
        return NextResponse.json({ error: 'Failed to fetch revenue data' }, { status: 500 });
    }
}
