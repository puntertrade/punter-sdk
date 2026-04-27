export async function makeBasket(base: string, marketIds: string[]) {
  const res = await fetch(`${base}/baskets`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ markets: marketIds }),
  });
  return res.json();
}
