import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/account")({
  component: AccountPage,
  head: () => ({
    meta: [
      { title: "Sign in — ShopVerse" },
      { name: "description", content: "Sign in to your ShopVerse account to track orders, manage your wishlist, save addresses, and check out faster." },
      { property: "og:title", content: "Sign in — ShopVerse" },
      { property: "og:description", content: "Sign in to your ShopVerse account to track orders, manage your wishlist, save addresses, and check out faster." },
      { property: "og:url", content: "https://shop-verse-violet.lovable.app/account" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "https://shop-verse-violet.lovable.app/account" }],
  }),
});

function AccountPage() {
  return (
    <div className="px-3 py-10 md:px-6">
      <div className="mx-auto max-w-md rounded-xl bg-card p-8 shadow-sm">
        <h1 className="text-2xl font-extrabold text-primary">Sign in</h1>
        <p className="mt-1 text-sm text-muted-foreground">Welcome back to ShopVerse</p>
        <form className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-semibold">Email or mobile</label>
            <input type="text" className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-ring" />
          </div>
          <div>
            <label className="text-sm font-semibold">Password</label>
            <input type="password" className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-ring" />
          </div>
          <button type="button" className="w-full rounded-full py-2.5 text-sm font-bold text-accent-foreground" style={{ background: "var(--gradient-accent)" }}>
            Continue
          </button>
        </form>
        <p className="mt-4 text-xs text-muted-foreground">By continuing, you agree to ShopVerse's Terms.</p>
        <hr className="my-6" />
        <Link to="/" className="text-sm font-medium" style={{ color: "var(--primary-light)" }}>← Back home</Link>
      </div>
    </div>
  );
}
