import { Article, ArticleContainer } from "@/components/layout/article";

export default function ReactPage() {
  return (
    <ArticleContainer>
      <Article>
        <h1>React</h1>
        <p>
          React lets you build user interfaces out of individual pieces called
          components. Create your own React components like Thumbnail,
          LikeButton, and Video. Then combine them into entire screens, pages,
          and apps.
        </p>
      </Article>
    </ArticleContainer>
  );
}
