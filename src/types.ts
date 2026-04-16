export type Side = "YES" | "NO";
export type Chain = "solana" | "ethereum" | "bnb" | "base";
export interface Market { id: string; question: string; yes: number; volume: number; deadline: number; }
export interface Ticket { market: string; side: Side; size: string; fillPrice: number; tx: string; }
export interface Filter { tag?: string; chain?: Chain; }
