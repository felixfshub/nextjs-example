import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import FSImage from "@/assets/fs-nobg-cropped.png";

export default function LandingPage() {
  return (
    <div className="flex  w-full min-h-[75vh] justify-center items-center">
      <div className="flex flex-col border border-border rounded-lg gap-4 justify-center items-center max-w-lg mx-auto p-8">
        <Image src={FSImage} className="w-30" alt="fs Image" priority />
        <h1 className="text-6xl">welcome!</h1>
        <Link href="/home">
          <Button size="lg">Sign in</Button>
        </Link>
      </div>
    </div>
  );
}
