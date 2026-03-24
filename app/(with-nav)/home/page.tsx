"use client";

import Article from "@/components/ui/Article";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

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
      </Article>
    </div>
  );
}
