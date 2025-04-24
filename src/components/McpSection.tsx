
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function McpSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Model Context Protocol
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              How Walletron connects LLMs to blockchain operations
            </p>
          </div>

          <div className="mx-auto w-full max-w-5xl">
            <Card className="p-6 md:p-10">
              <div className="flex flex-col items-center">
                {/* Diagram */}
                <div className="w-full mb-10">
                  <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
                    {/* User Request */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-2 border">
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                          <path d="M6 21V19C6 16.7909 7.79086 15 10 15H14C16.2091 15 18 16.7909 18 19V21" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <h3 className="text-sm font-medium">User/App</h3>
                    </div>
                    
                    {/* Arrow */}
                    <div className={cn(
                      "h-0.5 w-12 bg-border",
                      "md:w-full md:max-w-[100px] md:self-start md:mt-8"
                    )}>
                      <div className="w-2 h-2 rounded-full bg-primary animate-glow"></div>
                    </div>
                    
                    {/* Walletron API */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2 border border-primary/30">
                        <div className="text-primary font-bold">W</div>
                      </div>
                      <h3 className="text-sm font-medium">Walletron API</h3>
                    </div>
                    
                    {/* Arrow */}
                    <div className={cn(
                      "h-0.5 w-12 bg-border",
                      "md:w-full md:max-w-[100px] md:self-start md:mt-8"
                    )}>
                      <div className="w-2 h-2 rounded-full bg-primary animate-glow"></div>
                    </div>
                    
                    {/* MCP Server */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-walletron-blue/10 flex items-center justify-center mb-2 border border-walletron-blue/30">
                        <svg className="w-8 h-8 text-walletron-blue" viewBox="0 0 24 24" fill="none">
                          <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 16L12 21" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 3L12 8" stroke="currentColor" strokeWidth="2"/>
                          <path d="M16 12L21 12" stroke="currentColor" strokeWidth="2"/>
                          <path d="M3 12L8 12" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <h3 className="text-sm font-medium">MCP Server</h3>
                    </div>
                    
                    {/* Arrow */}
                    <div className={cn(
                      "h-0.5 w-12 bg-border",
                      "md:w-full md:max-w-[100px] md:self-start md:mt-8"
                    )}>
                      <div className="w-2 h-2 rounded-full bg-primary animate-glow"></div>
                    </div>
                    
                    {/* Blockchain */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-walletron-purple/10 flex items-center justify-center mb-2 border border-walletron-purple/30">
                        <svg className="w-8 h-8 text-walletron-purple" viewBox="0 0 24 24" fill="none">
                          <path d="M7 10L12 14L17 10" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 3L19 7V17L12 21L5 17V7L12 3Z" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <h3 className="text-sm font-medium">Blockchain</h3>
                    </div>
                  </div>
                  
                  {/* Labels below arrows */}
                  <div className="relative flex flex-col md:flex-row items-start justify-between mt-2 gap-4 md:gap-8 text-xs text-muted-foreground">
                    <div className="flex-1"></div>
                    <div className="flex-1 text-center">
                      Natural Language Request
                    </div>
                    <div className="flex-1 text-center">
                      Structured Intent
                    </div>
                    <div className="flex-1 text-center">
                      Blockchain Transaction
                    </div>
                    <div className="flex-1"></div>
                  </div>
                </div>

                {/* Explanation */}
                <div className="grid md:grid-cols-2 gap-6 w-full">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">How It Works</h3>
                    <p className="text-sm text-muted-foreground">
                      The Model Context Protocol (MCP) is a bridge between natural language requests and blockchain operations.
                      It converts human instructions into secure, validated blockchain transactions.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      When a user says "Send 0.5 SOL to John", the MCP interprets the intent, validates the request,
                      and securely executes the transaction with multiple safety checks.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Key Benefits</h3>
                    <ul className="space-y-2">
                      <li className="flex text-sm text-muted-foreground">
                        <svg className="w-5 h-5 mr-2 text-green-500" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                          <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Safety guardrails prevent unauthorized transactions</span>
                      </li>
                      <li className="flex text-sm text-muted-foreground">
                        <svg className="w-5 h-5 mr-2 text-green-500" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                          <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Cross-chain compatibility with standardized interface</span>
                      </li>
                      <li className="flex text-sm text-muted-foreground">
                        <svg className="w-5 h-5 mr-2 text-green-500" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                          <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Contextual awareness of user permissions and history</span>
                      </li>
                      <li className="flex text-sm text-muted-foreground">
                        <svg className="w-5 h-5 mr-2 text-green-500" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                          <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Extensible for custom workflows and applications</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
