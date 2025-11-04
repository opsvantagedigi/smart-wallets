"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Copy, PlusSquare } from "lucide-react";
import { useState } from "react";
import { MARZ_TOKEN, MAINNET_CHAIN_HEX } from "@/lib/token";
import { formatAddress } from "@/lib/utils";

export default function MarzTokenPage() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const onCopy = async () => {
    await navigator.clipboard.writeText(MARZ_TOKEN.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const addToWallet = async () => {
    setStatus(null);
    const anyWindow = window as any;
    const provider = anyWindow?.ethereum;
    if (!provider?.request) {
      setStatus("No injected wallet detected. Open this in MetaMask or a browser with a wallet.");
      return;
    }
    try {
      // Ensure we're on Ethereum mainnet for adding an ERC-20
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: MAINNET_CHAIN_HEX }],
      });
    } catch (err: any) {
      // If the chain is not added in wallet, MetaMask throws 4902
      if (err?.code !== 4902) {
        setStatus("Could not switch to Ethereum mainnet. Please switch network in your wallet and retry.");
        return;
      }
    }

    try {
      const wasAdded = await provider.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: MARZ_TOKEN.address,
            symbol: MARZ_TOKEN.symbol,
            decimals: MARZ_TOKEN.decimals,
          },
        },
      });
      setStatus(wasAdded ? "Token added to wallet." : "Token add was dismissed.");
    } catch (e) {
      setStatus("Your wallet rejected the request. You can add the token manually using the address below.");
    }
  };

  return (
    <main className="container mx-auto px-4 py-10">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="font-display text-3xl md:text-4xl">MARZ Token</h1>
        <p className="text-muted-foreground">Official info and quick actions for Marz NeoSphere (MARZ) on Ethereum mainnet.</p>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Marz NeoSphere (MARZ)
              <Badge variant="outline">Mainnet</Badge>
            </CardTitle>
            <CardDescription>Contract address, explorer links, and wallet actions.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Contract Address</p>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary" className="font-mono text-xs py-1 px-2">
                  {formatAddress(MARZ_TOKEN.address)}
                </Badge>
                <Button variant="ghost" size="icon" onClick={onCopy} aria-label="Copy address">
                  <Copy className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open(`${MARZ_TOKEN.explorerBaseUrl}/token/${MARZ_TOKEN.address}`, "_blank")}
                  aria-label="View on Etherscan"
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
              {copied && <p className="text-xs text-primary mt-1">Copied!</p>}
            </div>

            <div className="flex items-center gap-3">
              <Button onClick={addToWallet} className="gap-2">
                <PlusSquare className="h-4 w-4" /> Add to Wallet
              </Button>
              <Button variant="outline" onClick={() => window.open(`${MARZ_TOKEN.explorerBaseUrl}/address/${MARZ_TOKEN.address}#code`, "_blank")}>
                Verify on Etherscan
              </Button>
            </div>

            {status && <p className="text-sm text-muted-foreground">{status}</p>}

            <div className="text-sm text-muted-foreground">
              <p>Symbol: <span className="font-medium">{MARZ_TOKEN.symbol}</span></p>
              <p>Decimals: <span className="font-medium">{MARZ_TOKEN.decimals}</span></p>
              <p>Chain: <span className="font-medium">Ethereum Mainnet</span></p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Next steps for reputation</CardTitle>
            <CardDescription>Quick checklist to publish metadata and listings.</CardDescription>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none text-sm">
            <ul>
              <li>Verify contract source on Etherscan (match compiler + optimization settings).</li>
              <li>Submit token profile (logo, website, socials) on Etherscan Token Submission.</li>
              <li>Create a MARZ/ETH pool on Uniswap and share the pool link.</li>
              <li>Apply for CoinGecko and CoinMarketCap listings once activity builds.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
