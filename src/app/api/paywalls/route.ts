import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        const paywalls = await prisma.paywall.findMany({
            orderBy: { createdAt: 'desc' },
        });
        return NextResponse.json(paywalls);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch paywalls' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, description, price, ownerAddress } = body;

        const paywall = await prisma.paywall.create({
            data: {
                name,
                description,
                price: parseFloat(price),
                ownerAddress,
            },
        });

        return NextResponse.json(paywall);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create paywall' }, { status: 500 });
    }
}
