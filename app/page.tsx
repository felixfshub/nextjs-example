import CenterContainer from "@/components/layout/center-container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FancyButton from "./_components/fancy-button";

export default function LandingPage() {
  return (
    <CenterContainer>
      <div className="flex gap-2 justify-center items-center">
        <p className="text-muted-foreground text-center">Welcome to</p>
        <h1 className="text-2xl ml-2">
          Next.js
          <br /> Example
        </h1>
      </div>
      <Link href="/post">
        <FancyButton>Let's Read</FancyButton>
      </Link>
    </CenterContainer>
  );
}
