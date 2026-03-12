import Article from "@/components/Article";

export default function Home() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Article>
        <h1>Welcome to the homepage!</h1>
        <p>Actually, this is an "Article" 🤔</p>
        <p>
          I created a React component named "Article" so that you can create
          text heavy sections with consistent styling to headings, paragraphs
          and lists in your website. For example:
        </p>
        <h2>Heading 2</h2>
        <p>Something under heading 2.</p>
        <h3>Heading 3</h3>
        <p>Something under heading 3.</p>
        <h2>Unordered list</h2>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
        <p>
          All the text content in this page is actually wrapped in that
          "Article" component, so that I don't have to style each heading and
          paragraph individually.
        </p>
      </Article>
    </div>
  );
}
