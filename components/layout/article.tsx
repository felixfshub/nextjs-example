import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function ArticleContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("flex flex-col w-full max-w-5xl mx-auto p-4", className)}
    >
      {children}
    </div>
  );
}

export function Article({ children }: { children: ReactNode }) {
  return (
    <article
      className="
        flex flex-col gap-4

        [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:font-heading
        [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:font-heading
        [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:font-heading
        [&_h4]:text-xl [&_h4]:font-semibold
        [&_ul]:list-disc [&_ul]:ml-6 
        [&_p]:text-base
      "
    >
      {children}
    </article>
  );
}
