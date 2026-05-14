import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { Star, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import { products, discount, categories } from "@/data/shop";
import { ProductCard } from "@/components/shop/ProductCard";

export const Route = createFileRoute("/product/$id")({
  component: ProductPage,
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData, params }) => {
    const product = loaderData?.product;
    const title = product ? `${product.name} — Buy online at ShopVerse` : "Product — ShopVerse";
    const description = product?.description ?? "Shop quality products at great prices on ShopVerse with fast delivery and easy returns.";
    const url = `https://shop-verse-violet.lovable.app/product/${params.id}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: url },
        ...(product?.image ? [{ property: "og:image" as const, content: product.image }] : []),
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: product
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Product",
                name: product.name,
                image: product.image,
                description,
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: product.rating,
                  reviewCount: product.reviews,
                },
                offers: {
                  "@type": "Offer",
                  price: product.price,
                  priceCurrency: "INR",
                  availability: "https://schema.org/InStock",
                  url,
                },
              }),
            },
          ]
        : undefined,
    };
  },
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <div className="px-6 py-16 text-center">
        <p className="text-destructive">{error.message}</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-4 rounded-full bg-primary px-4 py-2 text-primary-foreground">Retry</button>
      </div>
    );
  },
  notFoundComponent: () => (
    <div className="px-6 py-16 text-center">
      <h1 className="text-2xl font-bold text-primary">Product not found</h1>
      <Link to="/" className="mt-4 inline-block hover:underline" style={{ color: "var(--accent)" }}>← Back home</Link>
    </div>
  ),
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const off = discount(product);
  const cat = categories.find((c) => c.slug === product.category);
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="px-3 py-6 md:px-6">
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link to="/" className="hover:underline">Home</Link>
        {cat && <> / <Link to="/category/$slug" params={{ slug: cat.slug }} className="hover:underline">{cat.name}</Link></>}
        {" "}/ <span className="font-semibold text-foreground">{product.name}</span>
      </nav>

      <div className="grid gap-8 rounded-xl bg-card p-6 shadow-sm md:grid-cols-2">
        <div className="overflow-hidden rounded-lg">
          <img src={product.image} alt={product.name} className="h-full max-h-[500px] w-full object-cover" />
        </div>
        <div>
          <h1 className="text-2xl font-extrabold text-primary md:text-3xl">{product.name}</h1>
          <div className="mt-2 flex items-center gap-2">
            <span className="flex items-center gap-0.5 rounded px-2 py-0.5 text-sm font-bold text-accent-foreground" style={{ background: "var(--accent)" }}>
              {product.rating} <Star className="h-3 w-3 fill-current" />
            </span>
            <span className="text-sm text-muted-foreground">{product.reviews.toLocaleString()} ratings</span>
          </div>
          <hr className="my-4" />
          <div className="flex items-baseline gap-3">
            {off > 0 && <span className="rounded px-2 py-1 text-sm font-bold text-accent-foreground" style={{ background: "var(--accent)" }}>-{off}%</span>}
            <span className="text-4xl font-extrabold text-primary">₹{product.price.toLocaleString()}</span>
            <span className="text-sm text-muted-foreground line-through">M.R.P. ₹{product.mrp.toLocaleString()}</span>
          </div>
          <p className="mt-4 text-sm text-foreground">{product.description}</p>

          <div className="mt-6 grid grid-cols-3 gap-3 rounded-lg bg-secondary p-3 text-center text-xs text-secondary-foreground">
            <div className="flex flex-col items-center gap-1"><Truck className="h-5 w-5" style={{ color: "var(--accent)" }} /> Free delivery</div>
            <div className="flex flex-col items-center gap-1"><RotateCcw className="h-5 w-5" style={{ color: "var(--accent)" }} /> 7-day returns</div>
            <div className="flex flex-col items-center gap-1"><ShieldCheck className="h-5 w-5" style={{ color: "var(--accent)" }} /> Secure payment</div>
          </div>

          <div className="mt-6 flex gap-3">
            <button className="flex-1 rounded-full py-3 text-sm font-bold text-accent-foreground transition hover:opacity-90" style={{ background: "var(--gradient-accent)" }}>
              Add to cart
            </button>
            <button className="flex-1 rounded-full bg-primary py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90">
              Buy now
            </button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-4 text-xl font-extrabold text-primary">You might also like</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </div>
  );
}
