import { PrismaClient } from "@/generated/prisma";
import type * as prsimaType from "@/generated/prisma"
    
export const prisma = new PrismaClient();
export type {prsimaType }