"use client";

import GithubIcon from "@/components/GitHubIcon";
import { signIn } from "next-auth/react";

export default function SignIn() {
  const resendAction = (formData: FormData) => {
    signIn("resend", Object.fromEntries(formData));
  };

  return (
    <div className="flex flex-col w-full min-h-screen justify-center max-w-lg mx-auto p-4">
      <form action={resendAction} className="flex w-full gap-2">
        <input
          type="email"
          name="email"
          className="flex-1 border border-border"
          placeholder="Email"
        />
        <button
          type="submit"
          className="shrink-0 whitespace-nowrap bg-primary cursor-pointer"
        >
          Sign In
        </button>
      </form>
      <div className="my-4 flex items-center gap-4">
        <hr className="flex-1 text-border" />
        <p>or</p>
        <hr className="flex-1 text-border" />
      </div>

      <button
        className="flex items-center justify-center w-full p-1 gap-2 hover:bg-bg-hover hover:cursor-pointer border border-border rounded"
        onClick={() => signIn("github")}
      >
        <GithubIcon className="w-4 h-4" /> Sign in with GitHub
      </button>
    </div>
  );
}
