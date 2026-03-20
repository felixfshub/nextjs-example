"use client";

import Button from "@/components/ui/Button";
import GithubIcon from "@/components/ui/icons/GitHubIcon";
import Input from "@/components/ui/Input";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function SignIn() {
  const resendAction = (formData: FormData) => {
    signIn("resend", Object.fromEntries(formData));
  };

  return (
    <div className="flex flex-col gap-2 w-full min-h-[75vh] justify-center max-w-lg mx-auto p-4">
      <form action={resendAction} className="flex w-full gap-2">
        <Input
          type="email"
          name="email"
          className="flex-1"
          placeholder="Email"
        />
        <Button type="submit" className="shrink-0 whitespace-nowrap">
          Sign In
        </Button>
      </form>
      <div className="flex items-center gap-2">
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

      <Link href={"/"} className="mt-2">
        <Button>Go back</Button>
      </Link>
    </div>
  );
}
