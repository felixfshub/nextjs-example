import { ReactNode } from "react";

export default function Article({ children }: { children: ReactNode }) {
  return (
    <article
      className="
        flex flex-col gap-4

        [&_h1]:text-4xl
        [&_h2]:text-3xl
        [&_h3]:text-2xl
        [&_h4]:text-xl
        [&_ul]:list-disc [&_ul]:ml-6 
      "
    >
      {children}
    </article>
  );
}
