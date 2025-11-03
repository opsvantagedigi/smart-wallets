import { Button } from "@/components/ui/button";
import { ArrowRight, Wallet, Zap, Shield, Code } from "lucide-react";
import Link from "next/link";

interface LandingPageProps {
  onGetStarted: () => void;
}

export default function LandingPage({ onGetStarted }: LandingPageProps) {
  const features = [
    {
      icon: Wallet,
      title: "Smart Wallets",
      description: "Account abstraction powered wallets with no gas fees"
    },
    {
      icon: Zap,
      title: "Instant Onboarding", 
      description: "Login with email, passkey, or social authentication"
    },
    {
      icon: Shield,
      title: "Secure & Non-custodial",
      description: "Users maintain full control of their assets"
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description: "Built with modern Web3 tools and best practices"
    }
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Smart Wallets
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Experience seamless onchain UX with smart wallets
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              No gas fees • Email login • Account abstraction • Instant onboarding
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="gap-2 px-8 py-6 text-lg"
              onClick={onGetStarted}
            >
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2 px-8 py-6 text-lg"
              asChild
            >
              <Link 
                href="https://accountkit.alchemy.com/" 
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 border-t bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Smart Wallets?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built on ERC-4337 Account Abstraction for the best user experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index} 
                  className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow"
                >
                  <IconComponent className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}