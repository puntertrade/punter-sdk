import type { Side, Ticket } from "./types.js";
export interface BetParams { market: string; side: Side; size: string; }

export async function placeBet(base: string, wallet: unknown, p: BetParams): Promise<Ticket> {
  const res = await fetch(`${base}/bets`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(p),
  });
  if (!res.ok) throw new Error(`bet failed: ${res.status}`);
  return res.json() as Promise<Ticket>;
}
