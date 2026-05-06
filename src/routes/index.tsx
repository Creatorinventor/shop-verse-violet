import { createFileRoute } from "@tanstack/react-router";
import heroBanner from "@/assets/hero-banner.jpg";
import { Search, ShoppingCart, MapPin, Menu, ChevronDown, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ShopVerse — Online shopping for everything you love" },
      { name: "description", content: "Discover deals on electronics, fashion, home, and more at ShopVerse — fast delivery and unbeatable prices." },
    ],
  }),
});

const categories = [
  "All", "Today's Deals", "Electronics", "Fashion", "Home & Kitchen",
  "Books", "Beauty", "Toys", "Sports", "Grocery", "Mobiles",
];

const products = [
  { name: "Wireless Noise Cancelling Headphones", price: 2499, mrp: 4999, rating: 4.5, reviews: 12453, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80" },
  { name: "Smart Watch Series 9 with AMOLED Display", price: 3899, mrp: 7999, rating: 4.3, reviews: 8902, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" },
  { name: "Premium Leather Backpack — Violet Edition", price: 1799, mrp: 3499, rating: 4.6, reviews: 3421, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80" },
  { name: "4K Ultra HD Smart LED TV 55 inch", price: 38990, mrp: 59990, rating: 4.4, reviews: 5612, img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80" },
  { name: "Ergonomic Office Chair with Lumbar Support", price: 8499, mrp: 14999, rating: 4.2, reviews: 1893, img: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&q=80" },
  { name: "DSLR Camera with 18-55mm Lens", price: 32990, mrp: 49990, rating: 4.7, reviews: 2210, img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80" },
  { name: "Running Shoes — Lightweight Mesh", price: 1499, mrp: 2999, rating: 4.1, reviews: 9821, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80" },
  { name: "Stainless Steel Cookware Set (10 pcs)", price: 4299, mrp: 8999, rating: 4.5, reviews: 1532, img: "https://images.unsplash.com/photo-1584990347449-a8d2bbb50fcd?w=600&q=80" },
];

const dealCards = [
  { title: "Up to 70% off | Electronics", img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=600&q=80" },
  { title: "Refresh your wardrobe", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80" },
  { title: "Home essentials, sorted", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80" },
  { title: "Beauty steals from ₹199", img: "https://images.unsplash.com/photo-1522335789203-aaa75230d4ba?w=600&q=80" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top header */}
      <header className="bg-primary text-primary-foreground">
        <div className="flex items-center gap-3 px-3 py-2 md:gap-5 md:px-6">
          <a href="/" className="flex shrink-0 items-baseline gap-1 rounded border border-transparent px-2 py-1 hover:border-primary-foreground/60">
            <span className="text-2xl font-extrabold tracking-tight">shop</span>
            <span className="text-2xl font-extrabold tracking-tight" style={{ color: "var(--accent)" }}>verse</span>
            <span className="text-xs" style={{ color: "var(--accent)" }}>.in</span>
          </a>

          <button className="hidden items-center gap-1 rounded border border-transparent px-2 py-1 text-left hover:border-primary-foreground/60 md:flex">
            <MapPin className="h-4 w-4" />
            <div className="leading-tight">
              <div className="text-[11px] text-primary-foreground/70">Deliver to</div>
              <div className="text-sm font-bold">Mumbai 400001</div>
            </div>
          </button>

          <div className="flex flex-1 overflow-hidden rounded-md">
            <button className="flex shrink-0 items-center gap-1 bg-secondary px-3 text-xs font-medium text-secondary-foreground hover:bg-muted">
              All <ChevronDown className="h-3 w-3" />
            </button>
            <input
              className="min-w-0 flex-1 bg-background px-3 py-2 text-sm text-foreground outline-none"
              placeholder="Search ShopVerse.in"
            />
            <button className="flex shrink-0 items-center justify-center px-4 text-foreground hover:opacity-90" style={{ background: "var(--gradient-accent)" }}>
              <Search className="h-5 w-5" />
            </button>
          </div>

          <button className="hidden rounded border border-transparent px-2 py-1 text-left hover:border-primary-foreground/60 md:block">
            <div className="text-[11px]">Hello, sign in</div>
            <div className="text-sm font-bold">Account & Lists</div>
          </button>

          <button className="hidden rounded border border-transparent px-2 py-1 text-left hover:border-primary-foreground/60 lg:block">
            <div className="text-[11px]">Returns</div>
            <div className="text-sm font-bold">& Orders</div>
          </button>

          <button className="flex shrink-0 items-end gap-1 rounded border border-transparent px-2 py-1 hover:border-primary-foreground/60">
            <div className="relative">
              <ShoppingCart className="h-7 w-7" />
              <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full px-1 text-xs font-bold text-accent-foreground" style={{ background: "var(--accent)" }}>3</span>
            </div>
            <span className="hidden text-sm font-bold md:inline">Cart</span>
          </button>
        </div>

        {/* sub nav */}
        <nav className="flex items-center gap-1 overflow-x-auto px-2 py-1 text-sm" style={{ background: "color-mix(in oklab, var(--primary) 80%, white 20%)" }}>
          <button className="flex shrink-0 items-center gap-1 rounded border border-transparent px-2 py-1 font-bold hover:border-primary-foreground/60">
            <Menu className="h-4 w-4" /> All
          </button>
          {categories.slice(1).map((c) => (
            <button key={c} className="shrink-0 whitespace-nowrap rounded border border-transparent px-2 py-1 hover:border-primary-foreground/60">
              {c}
            </button>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <section className="relative">
        <img src={heroBanner} alt="Mega sale on ShopVerse" width={1920} height={640} className="h-[260px] w-full object-cover md:h-[420px]" />
        <div className="absolute inset-0 flex items-center px-6 md:px-16">
          <div className="max-w-xl rounded-2xl bg-background/80 p-6 backdrop-blur md:p-10" style={{ boxShadow: "var(--shadow-elegant)" }}>
            <div className="mb-2 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground" style={{ background: "var(--accent)" }}>
              Mega Violet Sale
            </div>
            <h1 className="text-3xl font-extrabold leading-tight text-primary md:text-5xl">
              Up to 80% off — everything you love.
            </h1>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">
              Free delivery on orders above ₹499. New deals every hour.
            </p>
            <button className="mt-5 rounded-full px-6 py-3 text-sm font-bold text-accent-foreground transition-transform hover:scale-105" style={{ background: "var(--gradient-accent)" }}>
              Shop the sale
            </button>
          </div>
        </div>
      </section>

      {/* Deal cards */}
      <section className="-mt-10 grid grid-cols-1 gap-4 px-3 sm:grid-cols-2 md:px-6 lg:grid-cols-4">
        {dealCards.map((d) => (
          <article key={d.title} className="rounded-lg bg-card p-4 shadow-md transition hover:shadow-xl">
            <h3 className="mb-3 text-lg font-bold text-primary">{d.title}</h3>
            <img src={d.img} alt={d.title} loading="lazy" className="h-44 w-full rounded object-cover" />
            <a href="#" className="mt-3 inline-block text-sm font-medium text-primary-light hover:underline" style={{ color: "var(--primary-light)" }}>See more</a>
          </article>
        ))}
      </section>

      {/* Featured products */}
      <section className="mt-10 px-3 md:px-6">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-2xl font-extrabold text-primary md:text-3xl">Today's top picks</h2>
          <a href="#" className="text-sm font-medium hover:underline" style={{ color: "var(--accent)" }}>See all deals →</a>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => {
            const off = Math.round(((p.mrp - p.price) / p.mrp) * 100);
            return (
              <article key={p.name} className="group flex flex-col rounded-lg bg-card p-3 shadow-sm transition hover:shadow-lg">
                <div className="relative overflow-hidden rounded">
                  <img src={p.img} alt={p.name} loading="lazy" className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <span className="absolute left-2 top-2 rounded-full px-2 py-0.5 text-xs font-bold text-accent-foreground" style={{ background: "var(--accent)" }}>
                    {off}% off
                  </span>
                </div>
                <h3 className="mt-3 line-clamp-2 text-sm font-medium text-foreground">{p.name}</h3>
                <div className="mt-1 flex items-center gap-1">
                  <span className="flex items-center gap-0.5 rounded px-1.5 py-0.5 text-xs font-bold text-accent-foreground" style={{ background: "var(--accent)" }}>
                    {p.rating} <Star className="h-3 w-3 fill-current" />
                  </span>
                  <span className="text-xs text-muted-foreground">({p.reviews.toLocaleString()})</span>
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-xl font-extrabold text-primary">₹{p.price.toLocaleString()}</span>
                  <span className="text-xs text-muted-foreground line-through">₹{p.mrp.toLocaleString()}</span>
                </div>
                <button className="mt-3 rounded-full py-2 text-sm font-bold text-accent-foreground transition hover:opacity-90" style={{ background: "var(--gradient-accent)" }}>
                  Add to cart
                </button>
              </article>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 bg-primary text-primary-foreground">
        <button className="block w-full py-3 text-center text-sm font-medium hover:opacity-90" style={{ background: "color-mix(in oklab, var(--primary) 80%, white 20%)" }}>
          Back to top
        </button>
        <div className="grid grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4">
          {[
            { h: "Get to Know Us", l: ["About ShopVerse", "Careers", "Press Releases", "Sustainability"] },
            { h: "Make Money with Us", l: ["Sell on ShopVerse", "Become an Affiliate", "Advertise Your Products"] },
            { h: "Payment Products", l: ["Business Card", "Pay Wallet", "Reload Balance", "Currency Converter"] },
            { h: "Let Us Help You", l: ["Your Account", "Your Orders", "Shipping Rates", "Returns & Replacements"] },
          ].map((s) => (
            <div key={s.h}>
              <h4 className="mb-3 text-base font-bold">{s.h}</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                {s.l.map((i) => <li key={i}><a href="#" className="hover:underline">{i}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-primary-foreground/20 py-5 text-center text-xs text-primary-foreground/70">
          © 2026 ShopVerse.in — Crafted with violet & orange.
        </div>
      </footer>
    </div>
  );
}
