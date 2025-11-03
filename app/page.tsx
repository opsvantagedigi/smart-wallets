"use client";

import { useState } from "react";
import { useSignerStatus } from "@account-kit/react";
import UserInfoCard from "./components/user-info-card";
import NftMintCard from "./components/nft-mint-card";
import LoginCard from "./components/login-card";
import Header from "./components/header";
import LearnMore from "./components/learn-more";
import LandingPage from "./components/landing-page";

export default function Home() {
  const signerStatus = useSignerStatus();
  const [showLogin, setShowLogin] = useState(false);

  // If user is connected, show the main app
  if (signerStatus.isConnected) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="h-[calc(100vh-4rem)]">
          <main className="container mx-auto px-4 py-8 h-full">
            <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
              <div className="flex flex-col gap-8">
                <UserInfoCard />
                <LearnMore />
              </div>
              <NftMintCard />
            </div>
          </main>
        </div>
      </div>
    );
  }

  // If user clicked "Get Started", show login
  if (showLogin) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="h-[calc(100vh-4rem)]">
          <main className="container mx-auto px-4 py-8 h-full">
            <div className="flex justify-center items-center h-full pb-[4rem]">
              <LoginCard />
            </div>
          </main>
        </div>
      </div>
    );
  }

  // Show landing page by default
  return (
    <div className="min-h-screen">
      <Header />
      <LandingPage onGetStarted={() => setShowLogin(true)} />
    </div>
  );
}
