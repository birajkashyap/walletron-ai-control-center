
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Copy, Plus, Wallet } from "lucide-react";

const transactions = [
  { id: "tx1", type: "Send", amount: "0.5 SOL", to: "John", status: "Completed", date: "2023-04-23" },
  { id: "tx2", type: "Receive", amount: "200 USDC", from: "Alice", status: "Completed", date: "2023-04-22" },
  { id: "tx3", type: "Swap", amount: "2 ETH → 3400 USDC", status: "Pending", date: "2023-04-21" },
];

export function DashboardSection() {
  return (
    <section id="dashboard" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Developer Dashboard
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Manage, monitor and control all your blockchain wallets in one place
            </p>
          </div>
          <div className="mx-auto w-full max-w-5xl rounded-xl border glass-card overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Sidebar */}
              <div className="md:col-span-1 bg-muted/50 p-4 border-r hidden md:block">
                <div className="space-y-4">
                  <div className="font-medium">Wallets</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 rounded-lg p-2 bg-primary/10 text-primary">
                      <Wallet className="h-4 w-4" />
                      <span className="font-medium">Main Wallet</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg p-2 hover:bg-muted/80 cursor-pointer">
                      <Wallet className="h-4 w-4" />
                      <span>Dev Wallet</span>
                    </div>
                    <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                      <Plus className="h-4 w-4" />
                      Connect New Wallet
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="md:col-span-4 p-6">
                <Tabs defaultValue="overview">
                  <div className="flex items-center justify-between mb-4">
                    <TabsList>
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="transactions">Transactions</TabsTrigger>
                      <TabsTrigger value="api">API Keys</TabsTrigger>
                    </TabsList>
                    <Button size="sm" className="gap-1">
                      <Plus className="h-4 w-4" /> New Transaction
                    </Button>
                  </div>
                  
                  <TabsContent value="overview" className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-3">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardDescription>Total Balance</CardDescription>
                          <CardTitle className="text-2xl">$5,240.82</CardTitle>
                        </CardHeader>
                        <CardContent className="text-xs text-muted-foreground">
                          +2.5% from last week
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardDescription>Solana</CardDescription>
                          <CardTitle className="text-2xl">45.2 SOL</CardTitle>
                        </CardHeader>
                        <CardContent className="text-xs text-muted-foreground">
                          $3,240.50 @ $71.69
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardDescription>Ethereum</CardDescription>
                          <CardTitle className="text-2xl">0.75 ETH</CardTitle>
                        </CardHeader>
                        <CardContent className="text-xs text-muted-foreground">
                          $2,000.32 @ $2,667.09
                        </CardContent>
                      </Card>
                    </div>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Recent Transactions</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {transactions.map((tx) => (
                            <div key={tx.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50">
                              <div className="flex items-center gap-4">
                                <div className={`w-2 h-2 rounded-full ${tx.type === "Receive" ? "bg-green-500" : "bg-blue-500"}`} />
                                <div>
                                  <div className="font-medium">{tx.type}</div>
                                  <div className="text-xs text-muted-foreground">{tx.date}</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="font-medium">{tx.amount}</div>
                                <div className="text-xs text-muted-foreground">{tx.status}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" size="sm" className="gap-1 ml-auto">
                          View All <ArrowRight className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="transactions" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Transaction History</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="rounded-md border">
                          <div className="grid grid-cols-4 p-3 bg-muted/50 text-sm font-medium">
                            <div>Transaction</div>
                            <div>Amount</div>
                            <div>Status</div>
                            <div>Date</div>
                          </div>
                          {transactions.concat(transactions).map((tx, i) => (
                            <div key={`${tx.id}-${i}`} className="grid grid-cols-4 p-3 border-t text-sm">
                              <div>{tx.type}</div>
                              <div>{tx.amount}</div>
                              <div>{tx.status}</div>
                              <div>{tx.date}</div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="api" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>API Keys</CardTitle>
                        <CardDescription>Manage your API keys for SDK integration</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="rounded-lg border p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium">Production Key</div>
                                <div className="text-xs text-muted-foreground">Created on Apr 15, 2023</div>
                              </div>
                              <div className="flex items-center gap-2">
                                <code className="relative rounded bg-muted px-[0.5rem] py-[0.2rem] font-mono text-sm">
                                  wlt_prod_*****a3f21
                                </code>
                                <Button size="icon" variant="ghost">
                                  <Copy className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                          <div className="rounded-lg border p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium">Development Key</div>
                                <div className="text-xs text-muted-foreground">Created on Apr 15, 2023</div>
                              </div>
                              <div className="flex items-center gap-2">
                                <code className="relative rounded bg-muted px-[0.5rem] py-[0.2rem] font-mono text-sm">
                                  wlt_dev_*****8b4e9
                                </code>
                                <Button size="icon" variant="ghost">
                                  <Copy className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="gap-2">
                            <Plus className="h-4 w-4" />
                            Create New API Key
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
