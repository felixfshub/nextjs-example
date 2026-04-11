import { PrismaClient } from "./prisma/src/generated/prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

const accelerateUrl =
  process.env["PRISMA_ACCELERATE_URL"] ?? process.env["DATABASE_URL"];
if (!accelerateUrl) {
  throw new Error(
    "Missing PRISMA_ACCELERATE_URL or DATABASE_URL environment variable for Prisma Accelerate.",
  );
}

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({ accelerateUrl }).$extends(withAccelerate());

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
