import { ReactNode } from "react";

export default function Article({ children }: { children: ReactNode }) {
  return (
    <article
      className="
        flex flex-col gap-4

        [&_h1]:text-4xl [&_h1]:font-semibold
        [&_h2]:text-3xl [&_h2]:font-semibold
        [&_h3]:text-2xl [&_h3]:font-semibold
        [&_h4]:text-xl [&_h4]:font-semibold
        [&_ul]:list-disc [&_ul]:ml-6 
      "
    >
      {children}
    </article>
  );
}
