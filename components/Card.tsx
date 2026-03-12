import { ReactNode } from "react";
import Image from "next/image";

type CardProps = {
  image?: string;
  title?: string;
  text?: string;
  children?: ReactNode;
};

export default function Card({ image, title, text, children }: CardProps) {
  return (
    <div className="bg-white rounded text-center p-4 text-black border-gray-300 overflow-hidden">
      {image && (
        <Image
          src={image}
          alt="Image"
          width={500}
          height={500}
          className="w-full h-auto"
        />
      )}
      {title && <h1 className="text-xl">{title}</h1>}
      {text && <p>{text}</p>}

      {children}
    </div>
  );
}
