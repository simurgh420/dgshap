import { PrismaClient } from '@prisma/client';
import type * as prsimaType from '@prisma/client';

export const prisma = new PrismaClient();
export type { prsimaType };
