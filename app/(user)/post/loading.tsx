import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ProseContainer } from "@/components/typography/prose";

export default function Loading() {
  return (
    <ProseContainer>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-4">
        <div>
          <Skeleton className="h-9 w-28 mb-2" />
          <Skeleton className="h-4 w-72 max-w-full" />
        </div>

        <Skeleton className="h-10 w-28 rounded-md self-start" />
      </div>

      {/* Posts list */}
      <div className="grid gap-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Card key={i} className="overflow-hidden">
            <CardHeader>
              <CardTitle>
                <Skeleton className="h-6 w-2/3" />
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Preview content */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full md:hidden" />
              </div>

              {/* Meta */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 flex-wrap">
                  <Skeleton className="h-6 w-6 rounded-full shrink-0" />
                  <Skeleton className="h-3 w-24" />
                </div>

                <div className="flex items-center justify-between md:justify-end gap-2">
                  <Skeleton className="h-3 w-32" />
                  <Skeleton className="h-9 w-24 rounded-md" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Footer note */}
        <div className="flex justify-center">
          <Skeleton className="h-4 w-80 max-w-full" />
        </div>
      </div>
    </ProseContainer>
  );
}
