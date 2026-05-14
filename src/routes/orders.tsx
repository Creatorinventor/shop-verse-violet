import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/orders")({
  component: OrdersPage,
  head: () => ({
    meta: [
      { title: "Your Orders — ShopVerse" },
      { name: "description", content: "View your ShopVerse order history, track shipments in real time, download invoices, and start returns or exchanges in a few clicks." },
      { property: "og:title", content: "Your Orders — ShopVerse" },
      { property: "og:description", content: "View your ShopVerse order history, track shipments in real time, download invoices, and start returns or exchanges in a few clicks." },
      { property: "og:url", content: "https://shop-verse-violet.lovable.app/orders" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "https://shop-verse-violet.lovable.app/orders" }],
  }),
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
