"use client";

import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <button
      className="bg-primary text-on-primary py-1 px-2 rounded hover:bg-primary-hover my-4"
      onClick={() => signIn("github")}
    >
      Sign in with GitHub
    </button>
  );
}
