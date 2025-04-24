
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendHorizontal } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

type Message = {
  id: string;
  type: "user" | "assistant";
  content: string;
};

export function ChatSection() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendPrompt = () => {
    if (!prompt.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      type: "user",
      content: prompt,
    };
    
    setMessages((prev) => [...prev, userMessage]);
    
    // Simulate AI response
    setTimeout(() => {
      let response = "";
      
      if (prompt.toLowerCase().includes("send") && prompt.toLowerCase().includes("sol")) {
        response = "I'll send the SOL for you. Transaction confirmed! Hash: 5xG7n8EpqyJr94MqBpqy3J67xmQz8MBf";
      } else if (prompt.toLowerCase().includes("balance")) {
        response = "Your current wallet balance is 45.2 SOL ($3,240.50).";
      } else if (prompt.toLowerCase().includes("transaction")) {
        response = "I found your recent transactions. The last one was a send of 0.5 SOL to John yesterday.";
      } else {
        response = "How can I help you with your wallet today? You can ask me to send funds, check balances, or view transaction history.";
      }
      
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        type: "assistant",
        content: response,
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
    }, 1000);
    
    setPrompt("");
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Natural Language Control
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Control your wallets with simple language instructions using our Model Context Protocol
            </p>
          </div>

          <Card className="mx-auto w-full max-w-3xl">
            <CardHeader>
              <CardTitle className="text-center">Walletron AI Assistant</CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
              <div className="space-y-4 min-h-[300px] max-h-[400px] overflow-y-auto">
                {messages.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-[300px] text-muted-foreground text-center">
                    <p>Try asking the AI to help manage your wallets</p>
                    <div className="mt-4 space-y-2 w-full max-w-sm">
                      <Button variant="outline" className="w-full justify-start" onClick={() => setPrompt("Send 0.5 SOL to John")}>
                        "Send 0.5 SOL to John"
                      </Button>
                      <Button variant="outline" className="w-full justify-start" onClick={() => setPrompt("What's my wallet balance?")}>
                        "What's my wallet balance?"
                      </Button>
                      <Button variant="outline" className="w-full justify-start" onClick={() => setPrompt("Show my recent transactions")}>
                        "Show my recent transactions"
                      </Button>
                    </div>
                  </div>
                ) : (
                  messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.type === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`px-4 py-2 rounded-lg max-w-[80%] ${
                          message.type === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))
                )}

                {messages.length > 0 && messages[messages.length - 1].content.includes("Transaction confirmed") && (
                  <Alert className="mt-4 bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/30">
                    <AlertDescription className="flex items-center justify-between">
                      <span>Transaction complete</span>
                      <Button variant="outline" size="sm">View Details</Button>
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <form
                className="flex w-full items-center space-x-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendPrompt();
                }}
              >
                <Input
                  type="text"
                  placeholder="Type a message..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="icon" className="rounded-full">
                  <SendHorizontal className="h-4 w-4" />
                  <span className="sr-only">Send</span>
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
