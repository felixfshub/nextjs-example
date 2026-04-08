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
          <CardTitle>WIP</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            A reusable "Work-in-Progress" component to show that the page is
            currently under development.
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Link href="/wip">
            <Button>Visit</Button>
          </Link>
        </CardFooter>
      </Card>
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
          <Button>Visit</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>WIP</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Description of the feature. Leins skg ksen ke alk akks. Aing s king.
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Button>Visit</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>WIP</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Description of the feature. Leins skg ksen ke alk akks. Aing s king.
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Button>Visit</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>WIP</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Description of the feature. Leins skg ksen ke alk akks. Aing s king.
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Button>Visit</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>WIP</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Description of the feature. Leins skg ksen ke alk akks. Aing s king.
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Button>Visit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
