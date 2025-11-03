import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useLogout, useSignerStatus } from "@account-kit/react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const { logout } = useLogout();
  const { isConnected } = useSignerStatus();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur supports-[backdrop-filter]:bg-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/assets/brand-logo.png" alt="OpsVantage Digital" width={160} height={32} className="h-8 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/marz-network" className="hover:text-primary">MARZ Network</Link>
          <Link href="/features" className="hover:text-primary">Features</Link>
          <Link href="/nft-marketplace" className="hover:text-primary">NFTs</Link>
          <Link href="/pricing" className="hover:text-primary">Pricing</Link>
          <Link href="/testimonials" className="hover:text-primary">Reviews</Link>
          <Link href="/about" className="hover:text-primary">About</Link>
          <Link href="/security" className="hover:text-primary">Security</Link>
        </nav>

        {isConnected && (
          <div className="ml-auto">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-primary hover:text-primary-foreground"
              onClick={() => logout()}
              title="Logout"
              aria-label="Logout"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
