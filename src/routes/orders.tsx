import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/orders")({
  component: OrdersPage,
  head: () => ({ meta: [{ title: "Your Orders — ShopVerse" }] }),
});

function OrdersPage() {
  return (
    <div className="px-3 py-10 md:px-6">
      <h1 className="text-2xl font-extrabold text-primary">Your orders</h1>
      <p className="mt-2 text-sm text-muted-foreground">You have no orders yet.</p>
      <Link to="/" className="mt-4 inline-block text-sm font-medium hover:underline" style={{ color: "var(--accent)" }}>Start shopping →</Link>
    </div>
  );
}
