
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export function PricingSection() {
  const tiers = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for experimenting and small projects.",
      features: [
        "Up to 5 wallets",
        "1,000 transactions/month",
        "Basic AI commands",
        "Community support",
        "Public documentation",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "49",
      description: "For production applications and growing teams.",
      features: [
        "Unlimited wallets",
        "50,000 transactions/month",
        "Full AI capabilities",
        "Priority support",
        "Extended rate limits",
        "Advanced analytics",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Contact us",
      description: "For large-scale applications and custom requirements.",
      features: [
        "Unlimited everything",
        "Dedicated infrastructure",
        "Custom MCP integrations",
        "24/7 premium support",
        "SLA guarantees",
        "Compliance package",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Simple, Transparent Pricing
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Start for free, upgrade as you grow
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {tiers.map((tier) => (
              <Card
                key={tier.name}
                className={tier.popular ? "border-primary shadow-lg relative" : ""}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <div className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <div className="mt-4 flex items-baseline text-3xl font-bold">
                    {tier.price === "Contact us" ? (
                      <span>{tier.price}</span>
                    ) : (
                      <>
                        <span>${tier.price}</span>
                        <span className="ml-2 text-sm font-medium text-muted-foreground">
                          /month
                        </span>
                      </>
                    )}
                  </div>
                  <CardDescription className="mt-4">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-3" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={tier.popular ? "default" : "outline"}
                  >
                    {tier.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center text-sm text-muted-foreground mt-8">
            All plans include a 14-day free trial. No credit card required to start.
            <br />
            Need a custom plan? <a href="#" className="underline underline-offset-4 text-foreground">Contact our sales team</a>.
          </div>
        </div>
      </div>
    </section>
  );
}
