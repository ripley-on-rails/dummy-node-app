import { Button } from "@/components/ui/button";
import { ArrowUpIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="p-8">
        <h1>Mein minimales Next.js Projekt</h1>
        <Button variant="outline">Button</Button>
        <Button variant="outline" size="icon" aria-label="Submit">
          <ArrowUpIcon />
        </Button>
      </main>
    </div>
  );
}
