"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("...");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <p>{message}</p>
    </div>
  );
}
