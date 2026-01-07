import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    try {
        const paywall = await prisma.paywall.findUnique({
            where: { id },
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
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    try {
        // Delete associated transactions first
        await prisma.transaction.deleteMany({
            where: { paywallId: id },
        });

        // Then delete the paywall
        await prisma.paywall.delete({
            where: { id },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete paywall' }, { status: 500 });
    }
}

export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    try {
        const body = await request.json();
        const paywall = await prisma.paywall.update({
            where: { id },
            data: body,
        });

        return NextResponse.json(paywall);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update paywall' }, { status: 500 });
    }
}
