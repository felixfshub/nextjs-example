import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function TailwindAnimations() {
  return (
    <Table className="max-w-sm mx-auto mt-4">
      <TableHeader>
        <TableRow>
          <TableHead>className</TableHead>
          <TableHead>Example</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-mono">animate-bounce</TableCell>
          <TableCell className="text-xl animate-bounce">😀</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span className="font-mono">animate-bounce</span> with{" "}
            <span className="font-mono">delay</span>
          </TableCell>
          <TableCell>
            <div className="flex">
              <p className="text-xl animate-bounce delay-0">😁</p>
              <p className="text-xl animate-bounce delay-150">😁</p>
              <p className="text-xl animate-bounce delay-300">😁</p>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-mono">animate-ping</TableCell>
          <TableCell className="relative">
            <p className="text-xl absolute animate-ping bottom-2">😶‍🌫️</p>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-mono">animate-pulse</TableCell>
          <TableCell className="text-xl animate-pulse">🥵</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-mono">animate-spin</TableCell>
          <TableCell className="relative">
            <p className="text-xl absolute bottom-2 animate-spin">😵‍💫</p>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
