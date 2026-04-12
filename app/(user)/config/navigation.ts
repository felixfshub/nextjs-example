export interface NavigationItem {
  title: string;
  description?: string;
  href: string | null;
}

export const navigationMenu: NavigationItem[] = [
  {
    title: "Home",
    href: "/home",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "News",
    href: "/news",
  },
  {
    title: "Test",
    href: "/test",
  },
];

export const features: NavigationItem[] = [
  {
    title: "Tailwind Animations",
    description:
      "Tailwind provides utility classes to animate your components without touching CSS.",
    href: "/feature/tailwind-animations",
  },
  {
    title: "Posts",
    description: "Write your own posts or read posts written by other users.",
    href: "/feature/post",
  },
];
