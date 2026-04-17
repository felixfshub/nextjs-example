import { auth } from "@/auth";
import { del, put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        {
          error:
            "Invalid file type. Only JPEG, PNG, WebP, and GIF are allowed.",
        },
        { status: 400 },
      );
    }

    // Validate file size (100KB max)
    const maxSize = 100 * 1024;
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "File too large. Maximum size is 100KB." },
        { status: 400 },
      );
    }

    // Generate a unique filename
    const timestamp = Date.now();
    const safeName = file.name
      .replace(/\.[^/.]+$/, "") // Remove original extension
      .slice(0, 50) // Limit to 50 chars
      .replace(/[^a-zA-Z0-9._-]/g, "_") // Replace unsafe chars
      .replace(/_{2,}/g, "_"); // Collapse multiple underscores
    const extension = file.name.split(".").pop()?.toLowerCase() || "";
    const filename = `profiles/${session.user.id}/${timestamp}-${safeName}.${extension}`;

    // Upload to Vercel Blob
    const blob = await put(filename, file, {
      access: "public",
    });

    // Delete old profile picture if exists
    if (session.user.image) {
      await del(session.user.image);
    }

    return NextResponse.json({ url: blob.url });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload file" },
      { status: 500 },
    );
  }
}
