"use client";

import Article from "@/components/ui/Article";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Button from "@/components/ui/Button";

export default function Home() {
  const [message, setMessage] = useState("Loading...");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Article>
        <h1>Homepage</h1>
        <p>{message}</p>
        <h2>Change theme</h2>
        <p>
          next-themes is a popular React library (created by paco coursey)
          designed for effortless theme management (light/dark mode) in Next.js
          applications, supporting both App and Pages routers.
        </p>
        <p>Current theme: {mounted ? theme : "Loading..."}</p>
        <div className="flex gap-2 flex-wrap">
          <Button onClick={() => setTheme("light")}>Light</Button>
          <Button onClick={() => setTheme("dark")}>Dark</Button>
          <Button onClick={() => setTheme("system")}>System</Button>
        </div>
      </Article>
    </div>
  );
}
