
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-4 md:max-w-xs">
            <div className="flex items-center gap-2">
              <div className="bg-walletron-purple rounded-lg w-8 h-8 flex items-center justify-center">
                <span className="text-white font-bold">W</span>
              </div>
              <span className="font-bold text-lg">Walletron</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The AI-Powered Wallet Engine for Developers.
              Build and manage multi-chain wallets with natural language control.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h3 className="font-medium">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Features</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Documentation</a>
                </li>
                <li>
                  <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Roadmap</a>
                </li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-medium">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">About</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Blog</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Careers</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact</a>
                </li>
              </ul>
            </div>
            
            <div className="space-y-3 col-span-2 md:col-span-1">
              <h3 className="font-medium">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Cookies</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Walletron. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
