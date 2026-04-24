import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function ProseContainer({
  children,
  className,
}: {
  children?: ReactNode;
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

export function Prose({ children }: { children?: ReactNode }) {
  return (
    <div
      className={cn(
        "prose dark:prose-invert prose-headings:font-heading max-w-none",
      )}
    >
      {children}
    </div>
  );
}
