import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { categories, products } from "@/data/shop";
import { ProductCard } from "@/components/shop/ProductCard";

export const Route = createFileRoute("/category/$slug")({
  component: CategoryPage,
  loader: ({ params }) => {
    const cat = categories.find((c) => c.slug === params.slug);
    if (!cat) throw notFound();
    return { category: cat };
  },
  head: ({ loaderData, params }) => {
    const name = loaderData?.category.name ?? "Category";
    const slug = params.slug;
    const title = `${name} — Shop ${name} online at ShopVerse`;
    const description = `Browse the ${name} collection on ShopVerse. Compare top-rated ${name.toLowerCase()} products at great prices with fast, reliable delivery.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: `https://shop-verse-violet.lovable.app/category/${slug}` },
        ...(loaderData?.category.image ? [{ property: "og:image" as const, content: loaderData.category.image }] : []),
      ],
      links: [
        { rel: "canonical", href: `https://shop-verse-violet.lovable.app/category/${slug}` },
      ],
      scripts: loaderData
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "CollectionPage",
                name: loaderData.category.name,
                description,
                url: `https://shop-verse-violet.lovable.app/category/${slug}`,
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
  notFoundComponent: () => {
    const { slug } = Route.useParams();
    return (
      <div className="px-6 py-16 text-center">
        <h1 className="text-2xl font-bold text-primary">Category "{slug}" not found</h1>
        <Link to="/" className="mt-4 inline-block text-accent hover:underline" style={{ color: "var(--accent)" }}>← Back home</Link>
      </div>
    );
  },
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const items = products.filter((p) => p.category === category.slug);

  return (
    <div className="px-3 py-6 md:px-6">
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link to="/" className="hover:underline">Home</Link> / <span className="font-semibold text-foreground">{category.name}</span>
      </nav>
      <header className="mb-6 flex items-center gap-4 rounded-xl p-6" style={{ background: "var(--gradient-primary)" }}>
        <img src={category.image} alt={category.name} className="h-20 w-20 rounded-full border-4 border-primary-foreground object-cover" />
        <div>
          <h1 className="text-3xl font-extrabold text-primary-foreground">{category.name}</h1>
          <p className="text-sm text-primary-foreground/80">{items.length} products</p>
        </div>
      </header>

      {items.length === 0 ? (
        <p className="py-10 text-center text-muted-foreground">No products yet — add some in <code>src/data/shop.ts</code>.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {items.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  );
}
