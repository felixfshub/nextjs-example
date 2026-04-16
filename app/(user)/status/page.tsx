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
      <div className="rounded-xl bg-gray-800 p-4 mt-4 text-yellow-200">
        <p>Registered users: {userCount}</p>
        <p>Uploaded posts: {postCount}</p>
      </div>
    </ArticleContainer>
  );
}
