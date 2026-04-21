import { cn } from "@/lib/utils";

export default function CenterContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col w-full h-full justify-center items-center p-4 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
}
