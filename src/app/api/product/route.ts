import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;
// handle REST API routes GET,POST,...

import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  // get action by prisma
  const result = await prisma.product.findMany({ include: { images: true } });

  return NextResponse.json({
    data: result,
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const created = await prisma.product.create({ data: body });
    return NextResponse.json({ data: created }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: 'Create failed' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, ...data } = body as any;
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    const updated = await prisma.product.update({ where: { id }, data });
    return NextResponse.json({ data: updated }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: 'Update failed' }, { status: 500 });
  }
}
export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  if (!id) {
    return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  }
  try {
    await prisma.product.delete({ where: { id } });
    return NextResponse.json({ message: 'Deleted' }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: 'Delete failed' }, { status: 500 });
  }
}
