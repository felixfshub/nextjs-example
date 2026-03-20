import { PropsWithChildren, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

export default function ButtonPrimary({
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
