import { test } from "node:test";
import assert from "node:assert/strict";
import { Punter } from "../src/client.js";

test("constructs with defaults", () => {
  const p = new Punter({ wallet: {}, chain: "solana" });
  assert.ok(p.markets);
});
