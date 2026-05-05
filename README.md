<div align="center">

# @punter/sdk

**The typed client for Punter markets.**

Open a market, take a side, read live odds and settle — in any app or bot.

[![npm](https://img.shields.io/badge/npm-@punter/sdk-cb3837?style=flat-square)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=flat-square)](#)

</div>

---

## Install

```bash
npm i @punter/sdk
```

## Usage

```ts
import { Punter } from "@punter/sdk";

const punter = new Punter({ wallet, chain: "solana" });

// read live markets
const markets = await punter.markets.live({ tag: "listing" });

// take a side
const ticket = await punter.bet({ market: "binance_listing", side: "YES", size: "250 USDC" });

// natural-language intent
await punter.chat("take YES on the Binance listing");
```

## API

- `punter.markets.live(filter)` — list open markets
- `punter.markets.get(id)` — one market, odds + terms
- `punter.bet(params)` — take a side
- `punter.basket(markets)` — bundle into one position
- `punter.chat(text)` — resolve intent into a position

## Links

[Docs](https://zkpassorg.vercel.app/docs) · [@usepunterxyz](https://x.com/usepunterxyz) · MIT
