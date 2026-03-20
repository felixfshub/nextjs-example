import Link from "next/link";

export default function Hero() {
  return (
    <header
      className="flex flex-col justify-center items-center p-5 h-80 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/csias-lighthouse.png')" }}
    >
      <h1 className="text-5xl text-center text-white mb-2">
        Welcome to my website!
      </h1>
      <Link
        className="px-8 mt-4 transition-all hover:scale-105 active:scale-103 py-2 border-bg border rounded bg-bg text-text"
        href={"/sign-in"}
      >
        Sign In
      </Link>
    </header>
  );
}
