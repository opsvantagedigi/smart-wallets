"use client";

import { useEffect, useMemo, useState } from "react";
import { useAuthModal, useSignerStatus } from "@account-kit/react";
import { CheckCircle, LockKeyholeOpen, Wallet } from "lucide-react";
import LoginCard from "../components/login-card";
import UserInfoCard from "../components/user-info-card";
import NftMintCard from "../components/nft-mint-card";
import NeoSphereTokenCard from "../components/neosphere-token-card";

export default function MarzNetworkPage() {
  const { isConnected } = useSignerStatus();
  const { openAuthModal } = useAuthModal();
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Derive step from connection state
  useEffect(() => {
    if (isConnected) {
      setCurrentStep((s) => Math.max(s, 2));
    } else {
      setCurrentStep(1);
    }
  }, [isConnected]);

  const steps = useMemo(
    () => [
      {
        id: 1,
        title: "Create your gasless wallet",
        description:
          "No seed phrases. Onboard with email, passkey, or social — gas is sponsored.",
        icon: LockKeyholeOpen,
      },
      {
        id: 2,
        title: "Verify your wallet details",
        description:
          "Review your address and profile. You’re ready to transact gas-free.",
        icon: Wallet,
      },
      {
        id: 3,
        title: "Mint your first NFT",
        description:
          "Try a sponsored mint to experience seamless, gasless UX.",
        icon: CheckCircle,
      },
    ],
    []
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-10">
        <h1 className="text-3xl md:text-4xl font-display mb-3">MARZ Network</h1>
        <p className="text-muted-foreground max-w-2xl">
          Gasless smart wallet onboarding, creator monetization, and the MARZ NeoSphere Token—powered by Alchemy Account Kit.
        </p>
      </section>

      {/* Stepper */}
      <ol className="mb-10 grid gap-4 md:grid-cols-3">
        {steps.map((s) => {
          const active = currentStep === s.id;
          const complete = currentStep > s.id;
          const Icon = s.icon;
          return (
            <li
              key={s.id}
              className={
                "rounded-lg border p-4 bg-white/50 dark:bg-black/20 backdrop-blur transition-colors " +
                (complete
                  ? "border-green-300/60"
                  : active
                  ? "border-primary/60"
                  : "border-border")
              }
              aria-current={active ? "step" : undefined}
            >
              <div className="flex items-start gap-3">
                <div
                  className={
                    "mt-0.5 h-8 w-8 shrink-0 rounded-full flex items-center justify-center " +
                    (complete
                      ? "bg-green-500/20 text-green-600"
                      : active
                      ? "bg-primary/20 text-primary"
                      : "bg-muted text-muted-foreground")
                  }
                  aria-hidden
                >
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium">{s.title}</p>
                  <p className="text-sm text-muted-foreground">{s.description}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      {!isConnected ? (
        <section className="grid gap-8 md:grid-cols-2 items-start">
          <div className="space-y-4">
            <h2 className="text-xl font-display">Create your gasless smart wallet</h2>
            <p className="text-sm text-muted-foreground">
              No seed phrases. No gas fees. Onboard in seconds with email, passkey, or social login.
            </p>
            <div className="space-y-3">
              <LoginCard />
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <div className="h-1 w-14 rounded bg-primary/30" /> Step 1 of 3
              </div>
              <button
                onClick={() => openAuthModal()}
                className="text-sm underline underline-offset-4 hover:text-primary"
                aria-label="Open wallet creation dialog"
              >
                Having trouble? Open the wallet dialog directly
              </button>
            </div>
          </div>
          <NeoSphereTokenCard />
        </section>
      ) : (
        <section className="grid gap-8 md:grid-cols-[1fr_2fr] items-start">
          <div className="space-y-6">
            <div className="space-y-3">
              <UserInfoCard />
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <div className="h-1 w-24 rounded bg-primary/30" /> Step 2 of 3
              </div>
            </div>
            <NeoSphereTokenCard />
          </div>
          <div>
            <div className="space-y-3">
              <NftMintCard />
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <div className="h-1 w-36 rounded bg-primary/30" /> Step 3 of 3
              </div>
            </div>
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
