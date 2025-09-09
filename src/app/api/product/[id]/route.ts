import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request,
    { params }: { params: {id:string} }
) { 
    const product = await prisma.product.findUnique({
        where: { id: params.id },
        include: { images: true }
    });
    if (!product) {
        return NextResponse.json({ error: "Not found" }, {status:404 })
    }
    return NextResponse.json(product)
}
    
