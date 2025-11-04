export const MARZ_TOKEN = {
  address: "0x46ed4cbc6920895c484564d34ad8ca2d1f912654" as const,
  symbol: "MARZ" as const,
  name: "Marz NeoSphere" as const,
  decimals: 18 as const,
  chainId: 1 as const, // Ethereum mainnet
  explorerBaseUrl: "https://etherscan.io" as const,
};

export type Eip155ChainIdHex = `0x${string}`;
export const MAINNET_CHAIN_HEX: Eip155ChainIdHex = "0x1";
