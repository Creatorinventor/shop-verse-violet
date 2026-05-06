import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingCart } from "lucide-react";

export const Route = createFileRoute("/cart")({
  component: CartPage,
  head: () => ({ meta: [{ title: "Your Cart — ShopVerse" }] }),
});

function CartPage() {
  return (
    <div className="px-3 py-10 md:px-6">
      <div className="mx-auto max-w-2xl rounded-xl bg-card p-10 text-center shadow-sm">
        <ShoppingCart className="mx-auto h-16 w-16 text-primary" />
        <h1 className="mt-4 text-2xl font-extrabold text-primary">Your ShopVerse Cart is empty</h1>
        <p className="mt-2 text-sm text-muted-foreground">Browse the catalog and add items you love.</p>
        <Link to="/" className="mt-6 inline-block rounded-full px-6 py-3 text-sm font-bold text-accent-foreground" style={{ background: "var(--gradient-accent)" }}>
          Continue shopping
        </Link>
      </div>
    </div>
  );
}
