import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <header
      className="flex flex-col justify-center items-center p-5 h-80 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/barbaraalane-texture.jpg')" }}
    >
      <h1 className="text-5xl text-center text-white">Landing Page</h1>
      <p className="text-center text-white my-2">
        Description of the website description of it hello there
      </p>
      <Link href="/home">
        <Button size="lg">Open App</Button>
      </Link>
    </header>
  );
}
