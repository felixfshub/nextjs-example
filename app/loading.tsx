import Spinner from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[75vh] w-full">
      <Spinner />
    </div>
  );
}
