
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

const codeSnippets = {
  javascript: `import { Walletron } from '@walletron/sdk';

// Initialize the client with your API key
const walletron = new Walletron({
  apiKey: 'YOUR_API_KEY',
  chain: 'solana'
});

// Create a new wallet
const wallet = await walletron.createWallet();

// Send tokens using natural language instruction
const tx = await walletron.sendWithAI({
  instruction: "Send 0.5 SOL to john@solana.com",
  walletId: wallet.id
});

console.log('Transaction complete:', tx.signature);`,
  
  python: `from walletron import Walletron

# Initialize the client with your API key
walletron = Walletron(
    api_key="YOUR_API_KEY", 
    chain="solana"
)

# Create a new wallet
wallet = walletron.create_wallet()

# Send tokens using natural language instruction
tx = walletron.send_with_ai(
    instruction="Send 0.5 SOL to john@solana.com",
    wallet_id=wallet.id
)

print(f"Transaction complete: {tx.signature}")`,
  
  rust: `use walletron::Walletron;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Initialize the client with your API key
    let walletron = Walletron::new()
        .with_api_key("YOUR_API_KEY")
        .with_chain("solana")
        .build()?;

    // Create a new wallet
    let wallet = walletron.create_wallet().await?;

    // Send tokens using natural language instruction
    let tx = walletron.send_with_ai(
        "Send 0.5 SOL to john@solana.com",
        &wallet.id
    ).await?;

    println!("Transaction complete: {}", tx.signature);
    
    Ok(())
}`
};

export function SdkSection() {
  return (
    <section id="sdk" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Plug & Play Wallet SDKs
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Integrate blockchain wallet functionality in minutes, not months
            </p>
          </div>

          <div className="mx-auto w-full max-w-4xl">
            <Tabs defaultValue="javascript">
              <div className="flex justify-center mb-4">
                <TabsList>
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                  <TabsTrigger value="rust">Rust</TabsTrigger>
                </TabsList>
              </div>
              
              {Object.entries(codeSnippets).map(([lang, code]) => (
                <TabsContent key={lang} value={lang} className="relative">
                  <div className="code-window relative">
                    <Button 
                      size="icon"
                      variant="ghost" 
                      className="absolute top-3 right-3 text-gray-400 hover:text-white"
                      onClick={() => navigator.clipboard.writeText(code)}
                    >
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy code</span>
                    </Button>
                    <pre>{code}</pre>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
            
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="feature-card">
                <h3 className="font-bold mb-2">Multi-Chain Support</h3>
                <p className="text-sm text-muted-foreground">
                  Single API for Solana, Ethereum, and more blockchains.
                </p>
              </div>
              <div className="feature-card">
                <h3 className="font-bold mb-2">Natural Language Control</h3>
                <p className="text-sm text-muted-foreground">
                  AI-powered commands for wallet operations.
                </p>
              </div>
              <div className="feature-card">
                <h3 className="font-bold mb-2">Enterprise Security</h3>
                <p className="text-sm text-muted-foreground">
                  Bank-grade security with MPC and HSMs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
