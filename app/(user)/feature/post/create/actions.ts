"use server";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const MAX_TITLE_CHARS = 100;
const MAX_CHARS = 500;
const MAX_NEWLINES = 6;

export async function createPost(data: { title: string; content: string }) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");

  const title = data.title.trim();
  const content = data.content.trim();
  const newlineCount = (content.match(/\n/g) || []).length;

  if (title.length < 1 || content.length < 10) {
    throw new Error("Title or content is too short.");
  }

  if (title.length > MAX_TITLE_CHARS) {
    throw new Error(`Title is longer than ${MAX_TITLE_CHARS} characters.`);
  }

  if (content.length > MAX_CHARS) {
    throw new Error(`Content exceeds the ${MAX_CHARS} character limit.`);
  }

  if (newlineCount > MAX_NEWLINES) {
    throw new Error(`Content exceeds the limit of ${MAX_NEWLINES} newlines.`);
  }

  await prisma.post.create({
    data: { title, content, authorId: session.user.id },
  });

  revalidatePath("/feature/post");
}

export async function deletePost(data: { postId: string }) {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Unauthorized: You must be logged in.");
  }

  const post = await prisma.post.findUnique({
    where: { id: data.postId },
    select: { authorId: true },
  });

  if (!post) {
    throw new Error("Post not found.");
  }

  if (post.authorId !== session.user.id) {
    throw new Error("Forbidden: You are not the owner of this post.");
  }

  return await prisma.post.delete({
    where: { id: data.postId },
  });
}
