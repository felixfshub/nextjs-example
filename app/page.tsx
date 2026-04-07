import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import FSImage from "@/assets/fs-nobg-cropped.png";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="flex  w-full min-h-[75vh] justify-center items-center p-4">
      <Card className="w-full max-w-sm text-center">
        <CardTitle>Welcome to Next.js Example!</CardTitle>
        <CardDescription>
          Hey, thanks for visiting. This is my Next.js example application.
        </CardDescription>
        <CardFooter>
          <Link href="/home" className="w-full">
            <Button className="w-full">Open App</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
