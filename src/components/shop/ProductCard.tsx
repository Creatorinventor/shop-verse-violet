import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { Product, discount } from "@/data/shop";

export function ProductCard({ product }: { product: Product }) {
  const off = discount(product);
  return (
    <article className="group flex flex-col rounded-lg bg-card p-3 shadow-sm transition hover:shadow-lg">
      <Link to="/product/$id" params={{ id: product.id }} className="relative block overflow-hidden rounded">
        <img src={product.image} alt={product.name} loading="lazy" className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
        {off > 0 && (
          <span className="absolute left-2 top-2 rounded-full px-2 py-0.5 text-xs font-bold text-accent-foreground" style={{ background: "var(--accent)" }}>
            {off}% off
          </span>
        )}
      </Link>
      <Link to="/product/$id" params={{ id: product.id }} className="mt-3 line-clamp-2 text-sm font-medium text-foreground hover:underline">
        {product.name}
      </Link>
      <div className="mt-1 flex items-center gap-1">
        <span className="flex items-center gap-0.5 rounded px-1.5 py-0.5 text-xs font-bold text-accent-foreground" style={{ background: "var(--accent)" }}>
          {product.rating} <Star className="h-3 w-3 fill-current" />
        </span>
        <span className="text-xs text-muted-foreground">({product.reviews.toLocaleString()})</span>
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-xl font-extrabold text-primary">₹{product.price.toLocaleString()}</span>
        <span className="text-xs text-muted-foreground line-through">₹{product.mrp.toLocaleString()}</span>
      </div>
      <button className="mt-3 rounded-full py-2 text-sm font-bold text-accent-foreground transition hover:opacity-90" style={{ background: "var(--gradient-accent)" }}>
        Add to cart
      </button>
    </article>
  );
}
