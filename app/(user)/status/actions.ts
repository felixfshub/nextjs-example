"use server";

import prisma from "@/lib/prisma";

export async function getCounts(): Promise<{
  userCount: number | string;
  postCount: number | string;
}> {
  try {
    const [userCount, postCount] = await Promise.all([
      prisma.user.count(),
      prisma.post.count(),
    ]);

    return { userCount, postCount };
  } catch (error) {
    console.error("Error fetching counts:", error);

    return {
      userCount: "Error",
      postCount: "Error",
    };
  }
}
