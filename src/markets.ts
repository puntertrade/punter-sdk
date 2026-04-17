import type { Filter, Market } from "./types.js";

export class Markets {
  constructor(private base: string) {}
  async live(f: Filter = {}): Promise<Market[]> {
    const q = new URLSearchParams(f as Record<string, string>).toString();
    const res = await fetch(`${this.base}/markets?${q}`);
    return res.json() as Promise<Market[]>;
  }
  async get(id: string): Promise<Market> {
    const res = await fetch(`${this.base}/markets/${id}`);
    return res.json() as Promise<Market>;
  }
}
