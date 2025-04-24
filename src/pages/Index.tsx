
import { ThemeProvider } from "@/components/ThemeProvider";
import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { DashboardSection } from "@/components/DashboardSection";
import { ChatSection } from "@/components/ChatSection";
import { SdkSection } from "@/components/SdkSection";
import { McpSection } from "@/components/McpSection";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1">
          <HeroSection />
          <DashboardSection />
          <ChatSection />
          <SdkSection />
          <McpSection />
          <PricingSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
