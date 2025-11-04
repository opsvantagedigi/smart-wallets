# Smart Wallets Quickstart (Next.js)

## 🛡️ Guardian Status

![Guardian Verified](https://img.shields.io/badge/Gitleaks%20Scan-Passed-brightgreen?style=flat-square&logo=git&logoColor=white)

This repository has passed all Gitleaks scans using a custom TOML config and baseline.  
No secrets detected. Guardian aligned. Vault sealed.

![Secret Scan](https://github.com/opsvantage-digital/smart-wallets/actions/workflows/secret-scan.yml/badge.svg) ![Coverage](https://codecov.io/gh/opsvantage-digital/smart-wallets/branch/main/graph/badge.svg)

Use this template to get started with **embedded smart wallets** using [Alchemy Account Kit](https://www.alchemy.com/docs/wallets).

## ✨ Features

- Email, passkey & social login using pre‑built UI components
- Flexible, secure, and cheap smart accounts
- Gasless transactions powered by ERC-4337 Account Abstraction
- One‑click NFT mint on Arbitrum Sepolia (no ETH required)
- Server‑side rendering ready – session persisted with cookies
- TailwindCSS + shadcn/ui components, React Query, TypeScript

![Smart Wallet Quickstart](https://github.com/user-attachments/assets/2903fb78-e632-4aaa-befd-5775c60e1ca2)

## 📍 Network & Demo Contract

This quickstart is configured to run on **Arbitrum Sepolia** testnet. A free demo NFT contract has been deployed specifically for this quickstart, allowing you to mint NFTs without any setup or deployment steps. The contract is pre-configured and ready to use out of the box.

## 🚀 Quick start

### Scaffold a new app

```bash
npm create next-app smart-wallets-quickstart -- --example https://github.com/alchemyplatform/smart-wallets-quickstart
cd smart-wallets-quickstart
```

### 🔧 Configure

Get your pre-configured API key and policy ID from the [Smart Wallets dashboard](https://dashboard.alchemy.com/services/smart-wallets/configuration) by viewing one of your configurations. You will get a default app, configuration, and sponsorship policy created for you to quickly start testing.

Once you have your keys, add them to your `.env.local ` file.

```bash
cp .env.example .env.local      # create if missing
# add NEXT_PUBLIC_ALCHEMY_API_KEY=...
# add NEXT_PUBLIC_ALCHEMY_POLICY_ID=...
```

| Variable                        | Purpose                                                                                                     |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_ALCHEMY_API_KEY`   | API key for your Alchemy [app](https://dashboard.alchemy.com/services/smart-wallets/configuration)          |
| `NEXT_PUBLIC_ALCHEMY_POLICY_ID` | Gas Manager policy ID for [sponsorship](https://dashboard.alchemy.com/services/smart-wallets/configuration) |

If instead you want to set up your own configurations from scratch you should:

1. Create a new Alchemy [app](https://dashboard.alchemy.com/apps)
2. Set up a new Smart Wallet [configruation](https://dashboard.alchemy.com/services/smart-wallets/configuration) for your app to specify login methods
3. Create a gas sponsorship [policy](https://dashboard.alchemy.com/services/gas-manager/configuration) for your app

Note: for production, you should [protect](https://www.alchemy.com/docs/wallets/resources/faqs#how-should-i-protect-my-api-key-and-policy-id-in-the-frontend) your API key and policy ID behind a server rather than exposing client side.

## Environment Setup

Create a `.env.local` file in the project root using `.env.example` as a guide. The file should contain the placeholder keys shown in `.env.example` and be filled with your own values before running the app. Do NOT commit `.env.local` to source control — it contains sensitive keys.

Example:

```bash
cp .env.example .env.local
# then open .env.local and replace placeholders with your keys
```

### Secret scanning (pre-commit)

This repository enforces a pre-commit secret scan to help prevent accidental commits of sensitive keys. We use `gitleaks` via a Husky pre-commit hook which runs against staged files. If a potential secret is detected, the commit will be blocked and you'll be prompted to remove or redact the secret.

To enable locally:

```powershell
npm install
npm run prepare
```

## CI secret scanning

This repo includes a GitHub Actions workflow that runs `gitleaks` on pushes and pull requests to `main`.
The workflow is defined at `.github/workflows/secret-scan.yml` and uses a local `.gitleaks.toml` config to reduce false positives.

If the CI detects a potential secret, the workflow will fail and report findings in `gitleaks-report.json`.

## 🔐 Security & Trust Signals

This project is configured to be a sanctuary for secrets:

- Pre-commit: Husky runs `gitleaks detect --staged` to prevent accidental commits of secrets.
- Pre-push: Hook prevents pushing `.env.local` if it's tracked or staged.
- CI: GitHub Actions (`.github/workflows/secret-scan.yml`) runs `gitleaks` on pushes and PRs to `main` and will fail the job if leaks are found. A comment will be left on PRs with a warning.

Badges

- Secret scan: ![Secret Scan](https://github.com/opsvantage-digital/smart-wallets/actions/workflows/secret-scan.yml/badge.svg)

Enable hooks locally:

```powershell
npm install
npm run prepare
```

Baseline

You can generate a gitleaks baseline to suppress known false positives. Example:

```bash
# install gitleaks locally (or use the GitHub Action)
# run a local detect to create a baseline
gitleaks detect --source . --report-format json > gitleaks-report.json
# review gitleaks-report.json and then save allowed findings to .gitleaks.baseline.json
```

Add `.gitleaks.baseline.json` to `.gitignore` if you don't want it tracked, or commit it to share the baseline with other contributors.

If you'd like additional badges (build, license, coverage), I can add them.



### Run your app!

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000), first **Login**, then try minting a new NFT.

Congrats! You've created a new smart wallet and sent your first sponsored transaction!

See what else you can do with [smart wallets](https://www.alchemy.com/docs/wallets/react/overview).

## 🗂 Project layout

```
app/           # Next.js pages & components
components/ui/ # shadcn/ui primitives
lib/           # constants & helpers
config.ts      # Account Kit + Gas Sponsorship setup
tailwind.config.ts
```

## 🏗️ How it works

1. `config.ts` initializes Account Kit with your API key, Arbitrum Sepolia chain, and Gas Sponsorship policy.
2. `Providers` wraps the app with `AlchemyAccountProvider` & React Query.
3. `LoginCard` opens the authentication modal (`useAuthModal`).
4. After login, `useSmartAccountClient` exposes the smart wallet.
5. `NftMintCard` uses `useSendUserOperation` to call `mintTo()` on the demo ERC‑721, with gas paid by the Paymaster.

## 📚 Docs & resources

- React Quickstart → [https://www.alchemy.com/docs/wallets/react/quickstart](https://www.alchemy.com/docs/wallets/react/quickstart)
- Gas Manager quickstart → [https://www.alchemy.com/docs/wallets/infra/quickstart](https://www.alchemy.com/docs/wallets/infra/quickstart)

## 🖥 Scripts

```bash
npm run dev     # start development server
npm run build   # production build
npm run start   # run production build
npm run lint    # lint code
```

## 🪙 MARZ Token Reputation (Etherscan + Aggregators)

This repo includes a public MARZ Token page at `/marz-token` with Etherscan links and an “Add to Wallet” action.

Quick setup checklist:

- Verify contract on Etherscan for `0x46ed4cbc6920895c484564d34ad8ca2d1f912654` (compiler, optimization, runs, constructor args).
- Submit token metadata: name (Marz NeoSphere), symbol (MARZ), decimals (18), website, logo.
- Place your token logo at `public/assets/marz-token.png` (200–256px, transparent PNG).
- Store verified Solidity sources in `contracts/verified/` (e.g., `MarzTokenFlattened.sol`).
- Store token metadata in `contracts/metadata/`.
- Optional: create a MARZ/ETH liquidity pool (Uniswap) and link it from `/marz-token`.

Helpful links:

- Verify contract: https://etherscan.io/verifyContract
- Token submission: https://etherscan.io/token-submission
- CoinGecko listing: https://www.coingecko.com/en/coins/new
- CoinMarketCap listing: https://coinmarketcap.com/request/

## 🛂 License

MIT
