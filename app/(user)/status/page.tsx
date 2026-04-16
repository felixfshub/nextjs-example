import { Article, ArticleContainer } from "@/components/layout/article";
import { getCounts } from "./actions";

export default async function Test() {
  const { userCount, postCount } = await getCounts();

  return (
    <ArticleContainer>
      <Article>
        <h1>Status</h1>
        <p>
          See the real-time health and availability of this website and its
          individual services (e.g., API, database, login).
        </p>
      </Article>
      <div className="rounded-xl bg-gray-800 p-4 my-4 font-mono text-yellow-200">
        <p>Registered users: {userCount}</p>
        <p>Uploaded posts: {postCount}</p>
        <p>
          Database: {typeof userCount === "number" ? "Working" : "Not working"}
        </p>
      </div>
      <Article>
        <h2>Pending</h2>
        <p>None</p>
      </Article>
    </ArticleContainer>
  );
}
