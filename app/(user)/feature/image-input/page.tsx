"use client";

import { Article, ArticleContainer } from "@/components/layout/article";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Image from "next/image";

export default function PlaygroundPage() {
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  return (
    <ArticleContainer>
      <Article>
        <h1>Image input</h1>
        <p>
          Inputs can accept files as well as text. The below input acceps a file
          of type jpeg, png, webp, or gif.
        </p>
        <Input
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif"
          className="max-w-sm"
          onChange={(e) => {
            setImgSrc(URL.createObjectURL(e.target.files?.[0]!));
          }}
        />
        <p>
          An <code>&lt;Input /&gt;</code> of type <code>file</code> stores an
          object of type <code>FileList</code>, which contains objects of type{" "}
          <code>File</code>. The first file can be accessed by{" "}
          <code>inputElement.files[0]</code>.
        </p>
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt="Preview"
            width={10}
            height={10}
            className="rounded-lg h-40 w-min border"
          />
        ) : (
          <div className="h-40 w-60 rounded-lg border flex items-center justify-center">
            <p className="text-muted-foreground text-sm">No image selected</p>
          </div>
        )}
        <p>
          The above preview works by creating a temporary local URL that points
          to the file data stored in memory (or a browser-managed temporary
          store) using <code>URL.createObjectURL(file)</code>.
        </p>
      </Article>
    </ArticleContainer>
  );
}
