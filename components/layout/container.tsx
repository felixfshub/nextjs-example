import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Container({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={cn("p-4 border border-border rounded bg-card", className)}>
      {children}
    </div>
  );
}
