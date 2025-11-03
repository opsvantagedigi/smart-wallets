"use client";

import { useState } from "react";
import { useSignerStatus } from "@account-kit/react";
import LoginCard from "../components/login-card";
import UserInfoCard from "../components/user-info-card";
import NftMintCard from "../components/nft-mint-card";
import NeoSphereTokenCard from "../components/neosphere-token-card";

export default function MarzNetworkPage() {
  const { isConnected } = useSignerStatus();
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-10">
        <h1 className="text-3xl md:text-4xl font-display mb-3">MARZ Network</h1>
        <p className="text-muted-foreground max-w-2xl">
          Gasless smart wallet onboarding, creator monetization, and the MARZ NeoSphere Token—powered by Alchemy Account Kit.
        </p>
      </section>

      {!isConnected ? (
        <section className="grid gap-8 md:grid-cols-2 items-start">
          <div className="space-y-4">
            <h2 className="text-xl font-display">Create your gasless smart wallet</h2>
            <p className="text-sm text-muted-foreground">
              No seed phrases. No gas fees. Onboard in seconds with email, passkey, or social login.
            </p>
            <div>
              <LoginCard />
            </div>
          </div>
          <NeoSphereTokenCard />
        </section>
      ) : (
        <section className="grid gap-8 md:grid-cols-[1fr_2fr] items-start">
          <div className="space-y-6">
            <UserInfoCard />
            <NeoSphereTokenCard />
          </div>
          <div>
            <NftMintCard />
          </div>
        </section>
      )}

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border p-5 bg-white/40 dark:bg-black/20 backdrop-blur">
          <h3 className="font-display mb-2">Onboard Users</h3>
          <p className="text-sm text-muted-foreground">Gasless, secure wallets for everyone—email, passkey, or social.</p>
        </div>
        <div className="rounded-lg border p-5 bg-white/40 dark:bg-black/20 backdrop-blur">
          <h3 className="font-display mb-2">Mint & Grow</h3>
          <p className="text-sm text-muted-foreground">Mint NFTs and distribute rewards using NeoSphere-powered campaigns.</p>
        </div>
        <div className="rounded-lg border p-5 bg-white/40 dark:bg-black/20 backdrop-blur">
          <h3 className="font-display mb-2">Monetize Fairly</h3>
          <p className="text-sm text-muted-foreground">Transparent fees and shared upside through referrals and tiers.</p>
        </div>
      </section>
    </div>
  );
}
