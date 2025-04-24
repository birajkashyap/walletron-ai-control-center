
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Code, Home, LayoutDashboard, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#", icon: Home },
  { name: "Dashboard", href: "#dashboard", icon: LayoutDashboard },
  { name: "Integrate", href: "#sdk", icon: Code },
  { name: "Pricing", href: "#pricing", icon: Wallet },
];

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center gap-2">
            <div className="bg-walletron-purple rounded-lg w-8 h-8 flex items-center justify-center">
              <span className="text-white font-bold">W</span>
            </div>
            <span className="hidden sm:inline-flex font-bold text-lg">Walletron</span>
          </a>
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors flex items-center gap-1",
                  "text-muted-foreground hover:text-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <Button size="sm" variant="outline">Sign In</Button>
          <Button size="sm">Sign Up</Button>
        </div>
      </div>
    </header>
  );
}
