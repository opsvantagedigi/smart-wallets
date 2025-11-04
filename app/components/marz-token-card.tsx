"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Coins, PlusSquare } from "lucide-react";
import { MARZ_TOKEN } from "@/lib/token";
import { formatAddress } from "@/lib/utils";

export default function MarzTokenCard() {
  const etherscanTokenUrl = `${MARZ_TOKEN.explorerBaseUrl}/token/${MARZ_TOKEN.address}`;
  const etherscanCodeUrl = `${MARZ_TOKEN.explorerBaseUrl}/address/${MARZ_TOKEN.address}#code`;
  // Placeholder Uniswap links (may not be live yet)
  const uniswapViewUrl = `https://app.uniswap.org/explore/tokens/ethereum/${MARZ_TOKEN.address}`;
  const uniswapAddLiquidityUrl = `https://app.uniswap.org/pool?token0=ETH&token1=${MARZ_TOKEN.address}`;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          MARZ NeoSphere Token <Badge variant="outline">{MARZ_TOKEN.symbol}</Badge>
        </CardTitle>
        <CardDescription>Official ERC-20 on Ethereum mainnet. View, verify, and trade once liquidity is live.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-muted-foreground">
          <p>Address: <span className="font-mono">{formatAddress(MARZ_TOKEN.address)}</span></p>
          <div className="mt-2 flex flex-wrap gap-2">
            <Button asChild size="sm" variant="outline">
              <Link href={etherscanTokenUrl} target="_blank" rel="noreferrer">
                <ExternalLink className="h-4 w-4 mr-1" /> Etherscan
              </Link>
            </Button>
            <Button asChild size="sm" variant="outline">
              <Link href={etherscanCodeUrl} target="_blank" rel="noreferrer">
                <ExternalLink className="h-4 w-4 mr-1" /> Verify Code
              </Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/marz-token">
                <Coins className="h-4 w-4 mr-1" /> Token Page
              </Link>
            </Button>
          </div>
        </div>

        <div className="pt-2 border-t">
          <p className="text-sm mb-2">Uniswap (placeholder links):</p>
          <div className="flex flex-wrap gap-2">
            <Button asChild size="sm" variant="secondary">
              <Link href={uniswapViewUrl} target="_blank" rel="noreferrer">
                <ExternalLink className="h-4 w-4 mr-1" /> View Token
              </Link>
            </Button>
            <Button asChild size="sm" variant="secondary">
              <Link href={uniswapAddLiquidityUrl} target="_blank" rel="noreferrer">
                <PlusSquare className="h-4 w-4 mr-1" /> Add Liquidity
              </Link>
            </Button>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">Note: Links activate once a MARZ pool is created and indexed.</p>
        </div>
      </CardContent>
    </Card>
  );
}
