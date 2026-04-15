import { Article, ArticleContainer } from "@/components/layout/article";
import ApiMessage from "./components/api-message";

export default function Test() {
  return (
    <ArticleContainer>
      <Article>
        <h1>Status</h1>
        <ApiMessage />
      </Article>
    </ArticleContainer>
  );
}
