import LoadingDots from "../ui/loading-dots";

interface Props {
  text?: string | null;
}

export default function LoadingScreen({ text = "Loading" }: Props) {
  return (
    <div className="flex flex-col p-4 justify-center items-center min-h-[75vh]">
      {text && <h1 className="text-2xl text-center mb-6">{text}</h1>}
      <LoadingDots />
    </div>
  );
}
