import { cn } from "@/lib/utils";

export default function OpticalCenter({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="flex flex-col w-full min-h-dvh">
      <div className="grow-2" />

      <div
        className={cn(
          "flex-none w-full flex justify-center items-center",
          className,
        )}
      >
        {children}
      </div>

      <div className="grow-3" />
    </div>
  );
}
