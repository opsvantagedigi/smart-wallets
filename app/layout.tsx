import { config } from "@/config";
import { cookieToInitialState } from "@account-kit/core";
import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "OpsVantage Digital — Smart Wallets",
  description:
    "Secure smart wallets, NFT tools, and premium features by OpsVantage Digital.",
  icons: {
    icon: "/assets/brand-favicon.png",
    shortcut: "/assets/brand-favicon.png",
    apple: "/assets/brand-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Persist state across pages
  // https://www.alchemy.com/docs/wallets/react/ssr#persisting-the-account-state
  const initialState = cookieToInitialState(
    config,
    headers().get("cookie") ?? undefined
  );

  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="font-body min-h-screen bg-background text-foreground">
        <Providers initialState={initialState}>{children}</Providers>
      </body>
    </html>
  );
}
