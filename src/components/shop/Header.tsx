import { Link } from "@tanstack/react-router";
import { Search, ShoppingCart, MapPin, Menu, ChevronDown } from "lucide-react";
import { categories, SITE } from "@/data/shop";

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="flex items-center gap-3 px-3 py-2 md:gap-5 md:px-6">
        <Link to="/" className="flex shrink-0 items-baseline gap-1 rounded border border-transparent px-2 py-1 hover:border-primary-foreground/60">
          <span className="text-2xl font-extrabold tracking-tight">shop</span>
          <span className="text-2xl font-extrabold tracking-tight" style={{ color: "var(--accent)" }}>verse</span>
          <span className="text-xs" style={{ color: "var(--accent)" }}>.in</span>
        </Link>

        <button className="hidden items-center gap-1 rounded border border-transparent px-2 py-1 text-left hover:border-primary-foreground/60 md:flex">
          <MapPin className="h-4 w-4" />
          <div className="leading-tight">
            <div className="text-[11px] text-primary-foreground/70">Deliver to</div>
            <div className="text-sm font-bold">{SITE.deliverTo}</div>
          </div>
        </button>

        <div className="flex flex-1 overflow-hidden rounded-md">
          <button className="flex shrink-0 items-center gap-1 bg-secondary px-3 text-xs font-medium text-secondary-foreground hover:bg-muted">
            All <ChevronDown className="h-3 w-3" />
          </button>
          <input
            className="min-w-0 flex-1 bg-background px-3 py-2 text-sm text-foreground outline-none"
            placeholder={`Search ${SITE.name}.in`}
          />
          <button className="flex shrink-0 items-center justify-center px-4 text-foreground hover:opacity-90" style={{ background: "var(--gradient-accent)" }}>
            <Search className="h-5 w-5" />
          </button>
        </div>

        <Link to="/account" className="hidden rounded border border-transparent px-2 py-1 text-left hover:border-primary-foreground/60 md:block">
          <div className="text-[11px]">Hello, sign in</div>
          <div className="text-sm font-bold">Account & Lists</div>
        </Link>

        <Link to="/orders" className="hidden rounded border border-transparent px-2 py-1 text-left hover:border-primary-foreground/60 lg:block">
          <div className="text-[11px]">Returns</div>
          <div className="text-sm font-bold">& Orders</div>
        </Link>

        <Link to="/cart" className="flex shrink-0 items-end gap-1 rounded border border-transparent px-2 py-1 hover:border-primary-foreground/60">
          <div className="relative">
            <ShoppingCart className="h-7 w-7" />
            <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full px-1 text-xs font-bold text-accent-foreground" style={{ background: "var(--accent)" }}>0</span>
          </div>
          <span className="hidden text-sm font-bold md:inline">Cart</span>
        </Link>
      </div>

      <nav className="flex items-center gap-1 overflow-x-auto px-2 py-1 text-sm" style={{ background: "color-mix(in oklab, var(--primary) 80%, white 20%)" }}>
        <button className="flex shrink-0 items-center gap-1 rounded border border-transparent px-2 py-1 font-bold hover:border-primary-foreground/60">
          <Menu className="h-4 w-4" /> All
        </button>
        <Link to="/" className="shrink-0 whitespace-nowrap rounded border border-transparent px-2 py-1 hover:border-primary-foreground/60" activeOptions={{ exact: true }} activeProps={{ className: "border-primary-foreground/60" }}>
          Today's Deals
        </Link>
        {categories.map((c) => (
          <Link
            key={c.slug}
            to="/category/$slug"
            params={{ slug: c.slug }}
            className="shrink-0 whitespace-nowrap rounded border border-transparent px-2 py-1 hover:border-primary-foreground/60"
            activeProps={{ className: "border-primary-foreground/60" }}
          >
            {c.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
