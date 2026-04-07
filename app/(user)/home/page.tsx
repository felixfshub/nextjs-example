import Article from "@/components/ui/article";
import { auth } from "@/auth";
import { Card, CardContent } from "@/components/ui/card";

export default async function Home() {
  const session = await auth();

  return (
    <div className="flex flex-col gap-4 w-full max-w-4xl mx-auto p-4">
      <Card>
        <CardContent>
          <Article>
            <h1>Homepage</h1>
            <p>Hello {session?.user?.name}!</p>
          </Article>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Article>
            <h2>About Next.js</h2>
            <p className="text-sm text-muted-foreground">From Wikipedia</p>
            <p>
              Next.js is an open-source full-stack web development framework
              created by the private company Vercel providing React-based web
              applications with server-side rendering and static rendering.
              React documentation mentions Next.js among "Recommended
              Toolchains" advising it to developers when "building a
              server-rendered website with Node.js".
            </p>
            <p>
              Where traditional React apps can only render their content in the
              client-side browser, Next.js extends this functionality to include
              applications rendered on the server-side. The copyright and
              trademarks for Next.js are owned by Vercel, which also maintains
              and leads its open-source development.
            </p>
          </Article>
        </CardContent>
      </Card>
    </div>
  );
}
