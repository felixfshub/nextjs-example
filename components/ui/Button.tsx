import { PropsWithChildren, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = PropsWithChildren<{
  className?: string;
  muted?: boolean;
}> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  className,
  muted = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded py-1 px-4 cursor-pointer transition-all",
        "disabled:bg-primary-disabled disabled:cursor-default",
        muted
          ? "bg-surface hover:bg-surface/90 active:bg-surface-90"
          : "bg-primary hover:bg-primary-hover active:bg-primary-active text-on-primary",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
