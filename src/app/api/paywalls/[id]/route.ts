import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const paywall = await prisma.paywall.findUnique({
            where: { id: params.id },
            include: { transactions: true },
        });

        if (!paywall) {
            return NextResponse.json({ error: 'Paywall not found' }, { status: 404 });
        }

        return NextResponse.json(paywall);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch paywall' }, { status: 500 });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        // Delete associated transactions first
        await prisma.transaction.deleteMany({
            where: { paywallId: params.id },
        });

        // Then delete the paywall
        await prisma.paywall.delete({
            where: { id: params.id },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete paywall' }, { status: 500 });
    }
}

export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const body = await request.json();
        const paywall = await prisma.paywall.update({
            where: { id: params.id },
            data: body,
        });

        return NextResponse.json(paywall);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update paywall' }, { status: 500 });
    }
}
