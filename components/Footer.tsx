type FooterProps = {
  text: string;
};

export default function Footer({ text }: FooterProps) {
  return (
    <footer className="flex flex-col items-center border-t border-fg-muted mx-5 p-3">
      <p className="text-fg-muted text-xs">{text}</p>
    </footer>
  );
}
