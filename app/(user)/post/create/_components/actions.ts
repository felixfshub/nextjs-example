"use server";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function validatePost(data: { title: string; content: string }) {
  const title = data.title.trim();
  const content = data.content.trim();

  if (title.length < 1) {
    throw new Error("Title is required.");
  }

  if (content.length < 1) {
    throw new Error("Content is required.");
  }

  if (title.length > 50) {
    throw new Error(`Title is longer than 50 characters.`);
  }

  if (content.length > 1000) {
    throw new Error(`Content exceeds the 1000 character limit.`);
  }

  return { title, content };
}

export async function createPost(data: { title: string; content: string }) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");

  const validatedPost = await validatePost({
    title: data.title,
    content: data.content,
  });

  await prisma.post.create({
    data: {
      title: validatedPost.title,
      content: validatedPost.content,
      authorId: session.user.id,
    },
  });

  revalidatePath("/post");
}
