import { Button } from "@/components/ui/button";
import { LogOut, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLogout, useSignerStatus, useAuthModal } from "@account-kit/react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const { logout } = useLogout();
  const { isConnected } = useSignerStatus();
  const { openAuthModal } = useAuthModal();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur supports-[backdrop-filter]:bg-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/assets/brand-logo.png" alt="OpsVantage Digital" width={160} height={32} className="h-8 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/marz-network" className="hover:text-primary">MARZ Network</Link>
          <Link href="/marz-token" className="hover:text-primary">MARZ Token</Link>
          <Link href="/features" className="hover:text-primary">Features</Link>
          <Link href="/nft-marketplace" className="hover:text-primary">NFTs</Link>
          <Link href="/pricing" className="hover:text-primary">Pricing</Link>
          <Link href="/testimonials" className="hover:text-primary">Reviews</Link>
          <Link href="/about" className="hover:text-primary">About</Link>
          <Link href="/security" className="hover:text-primary">Security</Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden ml-auto rounded p-2 hover:bg-white/10"
          onClick={() => setMobileOpen((v: boolean) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <div className="hidden md:flex ml-auto items-center gap-3">
          {!isConnected && (
            <Button
              size="sm"
              onClick={() => openAuthModal()}
              title="Create or connect your smart wallet"
              aria-label="Create or connect your smart wallet"
            >
              Get Started
            </Button>
          )}
          {isConnected && (
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
          )}
        </div>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-white/60 dark:bg-black/30 backdrop-blur">
          <div className="container mx-auto px-4 py-4 space-y-3 text-sm">
            <div className="grid gap-2">
              <Link href="/marz-network" onClick={() => setMobileOpen(false)} className="hover:text-primary">MARZ Network</Link>
              <Link href="/marz-token" onClick={() => setMobileOpen(false)} className="hover:text-primary">MARZ Token</Link>
              <Link href="/features" onClick={() => setMobileOpen(false)} className="hover:text-primary">Features</Link>
              <Link href="/nft-marketplace" onClick={() => setMobileOpen(false)} className="hover:text-primary">NFTs</Link>
              <Link href="/pricing" onClick={() => setMobileOpen(false)} className="hover:text-primary">Pricing</Link>
              <Link href="/testimonials" onClick={() => setMobileOpen(false)} className="hover:text-primary">Reviews</Link>
              <Link href="/about" onClick={() => setMobileOpen(false)} className="hover:text-primary">About</Link>
              <Link href="/security" onClick={() => setMobileOpen(false)} className="hover:text-primary">Security</Link>
            </div>
            <div className="pt-2 border-t border-white/10">
              {!isConnected ? (
                <Button size="sm" className="w-full" onClick={() => { setMobileOpen(false); openAuthModal(); }}>
                  Get Started
                </Button>
              ) : (
                <Button size="sm" variant="ghost" className="w-full" onClick={() => { setMobileOpen(false); logout(); }}>
                  Logout
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
