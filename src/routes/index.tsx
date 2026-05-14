import { createFileRoute, Link } from "@tanstack/react-router";
import heroBanner from "@/assets/hero-banner.jpg";
import { ProductCard } from "@/components/shop/ProductCard";
import { categories, dealCards, products } from "@/data/shop";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ShopVerse — Online shopping for everything you love" },
      { name: "description", content: "Discover deals on electronics, fashion, home & more at ShopVerse." },
      { property: "og:title", content: "ShopVerse — Online shopping for everything you love" },
      { property: "og:description", content: "Discover daily deals across electronics, fashion, home, beauty, books, toys, sports, and grocery — with fast delivery from ShopVerse." },
      { property: "og:url", content: "https://shop-verse-violet.lovable.app/" },
    ],
    links: [
      { rel: "canonical", href: "https://shop-verse-violet.lovable.app/" },
    ],
  }),
});

function Index() {
  return (
    <>
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
            <Link to="/category/$slug" params={{ slug: "electronics" }} className="mt-5 inline-block rounded-full px-6 py-3 text-sm font-bold text-accent-foreground transition-transform hover:scale-105" style={{ background: "var(--gradient-accent)" }}>
              Shop the sale
            </Link>
          </div>
        </div>
      </section>

      {/* Deal cards */}
      <section className="-mt-10 grid grid-cols-1 gap-4 px-3 sm:grid-cols-2 md:px-6 lg:grid-cols-4">
        {dealCards.map((d) => (
          <Link key={d.title} to={d.href} className="rounded-lg bg-card p-4 shadow-md transition hover:shadow-xl">
            <h3 className="mb-3 text-lg font-bold text-primary">{d.title}</h3>
            <img src={d.image} alt={d.title} loading="lazy" className="h-44 w-full rounded object-cover" />
            <span className="mt-3 inline-block text-sm font-medium hover:underline" style={{ color: "var(--primary-light)" }}>See more →</span>
          </Link>
        ))}
      </section>

      {/* Categories strip */}
      <section className="mt-12 px-3 md:px-6">
        <h2 className="mb-4 text-2xl font-extrabold text-primary md:text-3xl">Shop by category</h2>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {categories.map((c) => (
            <Link key={c.slug} to="/category/$slug" params={{ slug: c.slug }} className="group flex flex-col items-center rounded-lg bg-card p-3 shadow-sm transition hover:shadow-md">
              <img src={c.image} alt={c.name} loading="lazy" className="h-20 w-20 rounded-full object-cover transition group-hover:scale-105" />
              <span className="mt-2 text-center text-xs font-semibold text-foreground">{c.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="mt-10 px-3 pb-6 md:px-6">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-2xl font-extrabold text-primary md:text-3xl">Today's top picks</h2>
          <Link to="/category/$slug" params={{ slug: "electronics" }} className="text-sm font-medium hover:underline" style={{ color: "var(--accent)" }}>
            See all deals →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.slice(0, 8).map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </>
  );
}
