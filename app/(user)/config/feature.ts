interface Feature {
  title: string;
  description?: string;
  href: string | null;
}

const features: Feature[] = [
  {
    title: "Tailwind Animations",
    description: "Animate with utility classes instead of CSS.",
    href: "/feature/tailwind-animations",
  },
  {
    title: "Posts",
    description: "Read posts or write posts yourself.",
    href: "/feature/post",
  },
  {
    title: "Status",
    description: "Check the status of the website and its services.",
    href: "/feature/status",
  },
  {
    title: "Data Table",
    description: "Display data in a table format.",
    href: "/feature/data-table",
  },
  {
    title: "Playground",
    description: "Things are a bit messy here.",
    href: "/feature/playground",
  },
];

export default features;
