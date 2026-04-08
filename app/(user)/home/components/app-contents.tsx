import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AppContents() {
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Tailwind Animations</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Tailwind provides utility classes to animate your components without
            touching CSS.
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Link href="/tailwind-animations">
            <Button>Visit</Button>
          </Link>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Coming soon</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Sin city's cold and empty. No one's around to judge me.
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Button disabled>Visit</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Coming soon</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Sin city's cold and empty. No one's around to judge me.
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Button disabled>Visit</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Coming soon</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Sin city's cold and empty. No one's around to judge me.
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Button disabled>Visit</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Coming soon</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Sin city's cold and empty. No one's around to judge me.
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Button disabled>Visit</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Coming soon</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Sin city's cold and empty. No one's around to judge me.
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Button disabled>Visit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
