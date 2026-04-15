import LoadingDots from "@/components/ui/loading-dots";

export default function CreatePostLoading() {
  return (
    <div className="flex flex-col p-4 justify-center items-center min-h-[75vh]">
      <h1 className="text-2xl text-center  mb-6">Authenticating...</h1>
      <LoadingDots />
    </div>
  );
}
