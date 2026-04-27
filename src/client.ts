import { Markets } from "./markets.js";
import { placeBet, type BetParams } from "./bets.js";
import { makeBasket } from "./baskets.js";
import type { Chain, Ticket } from "./types.js";

export interface PunterOpts { wallet: unknown; chain?: Chain; baseUrl?: string; }

/** Entry point. Thin, typed wrapper over the Punter market API. */
export class Punter {
  readonly markets: Markets;
  private readonly base: string;
  constructor(private opts: PunterOpts) {
    this.base = opts.baseUrl ?? "https://api.punter.xyz/v1";
    this.markets = new Markets(this.base);
  }
  bet(p: BetParams): Promise<Ticket> { return placeBet(this.base, this.opts.wallet, p); }
  basket(ids: string[]) { return makeBasket(this.base, ids); }
  async chat(intent: string): Promise<Ticket> {
    const res = await fetch(`${this.base}/intent`, { method: "POST", body: JSON.stringify({ intent }) });
    return res.json() as Promise<Ticket>;
  }
}
