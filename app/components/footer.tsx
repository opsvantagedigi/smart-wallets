import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur supports-[backdrop-filter]:bg-white/10">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Image src="/assets/brand-icon.png" alt="OpsVantage Digital" width={24} height={24} />
              <span className="font-display text-base">OpsVantage Digital</span>
            </div>
            <p className="text-muted-foreground/80 leading-snug">
              Gasless smart wallets, NFTs, and the MARZ NeoSphere.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm mb-3">Products</h4>
            <ul className="space-y-2">
              <li><Link className="hover:text-primary" href="/marz-network">MARZ Network</Link></li>
              <li><Link className="hover:text-primary" href="/">Smart Wallets</Link></li>
              <li><Link className="hover:text-primary" href="/nft-marketplace">NFT Marketplace</Link></li>
              <li><Link className="hover:text-primary" href="/pricing">Pricing</Link></li>
              <li><Link className="hover:text-primary" href="/features">Features</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm mb-3">Company</h4>
            <ul className="space-y-2">
              <li><Link className="hover:text-primary" href="/testimonials">Testimonials</Link></li>
              <li><Link className="hover:text-primary" href="/about">About</Link></li>
              <li><Link className="hover:text-primary" href="/security">Security</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><Link className="hover:text-primary" href="/terms">Terms</Link></li>
              <li><Link className="hover:text-primary" href="/privacy">Privacy</Link></li>
              <li><Link className="hover:text-primary" href="/cookies">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/80">
          <p>© {new Date().getFullYear()} OpsVantage Digital. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link className="hover:text-primary" href="/status">Status</Link>
            <Link className="hover:text-primary" href="/changelog">Changelog</Link>
            <Link className="hover:text-primary" href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
