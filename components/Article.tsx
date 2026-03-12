import { ReactNode } from "react";

export default function Article({ children }: { children: ReactNode }) {
  return (
    <article
      className="
        [&_h1]:text-4xl [&_h1]:mb-6
        [&_h2]:text-3xl [&_h2]:mb-4
        [&_h3]:text-2xl [&_h3]:mb-3
        [&_h4]:text-xl [&_h4]:mb-2
        [&_p]:mb-4
        [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-4
        [&_li]:mb-1
      "
    >
      {children}
    </article>
  );
}
