
import { Button } from "@/components/ui/button";
import { Bot, Code } from "lucide-react";

export function HeroSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="inline-block rounded-lg bg-walletron-purple/10 px-3 py-1 text-sm text-walletron-purple animate-fade-in">
            Introducing Walletron
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter max-w-3xl">
            The AI-Powered Wallet Engine for{" "}
            <span className="text-walletron-purple">Developers</span>
          </h1>
          <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Build, integrate, and manage multi-chain wallets with simple APIs and natural language control. 
            Simplify blockchain complexity for your users.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="gap-2">
              <Bot className="h-5 w-5" />
              Try Demo
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Code className="h-5 w-5" />
              View Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
