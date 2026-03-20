import { PropsWithChildren, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

export default function Button({
  className,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      className={clsx(
        "bg-primary text-on-primary rounded py-1 px-4",
        className,
      )}
      {...props}
    />
  );
}
