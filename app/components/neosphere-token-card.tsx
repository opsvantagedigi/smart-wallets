"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function NeoSphereTokenCard() {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>MARZ NeoSphere Token</CardTitle>
        <CardDescription>
          Community-first token powering gasless onboarding and creator incentives. Testnet airdrops available.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid md:grid-cols-[2fr_1fr] gap-6 items-center">
        <div>
          <div className="rounded-lg border bg-white/60 dark:bg-black/20 backdrop-blur p-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              The NeoSphere Token is designed to reward early adopters and fuel activity across the MARZ Network.
              Earn by onboarding users to gasless smart wallets, minting NFTs, and participating in creator campaigns.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/pricing" title="See tiers and benefits">Explore Monetization</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="mailto:team@opsvantagedigi.com?subject=NeoSphere%20Testnet%20Airdrop" title="Request testnet airdrop">Request Testnet Airdrop</Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-square w-full max-w-xs mx-auto">
          <Image src="/assets/neosphere-token.png" alt="NeoSphere Token" fill className="object-contain" />
        </div>
      </CardContent>
    </Card>
  );
}
