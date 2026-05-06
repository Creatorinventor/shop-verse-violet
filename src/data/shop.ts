// ============================================================
// SHOP DATA — edit categories, products, deals, and hero here.
// Add or remove items freely; pages will pick up changes.
// ============================================================

export type Category = {
  slug: string;
  name: string;
  image: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  mrp: number;
  rating: number;
  reviews: number;
  image: string;
  category: string; // matches Category.slug
  description?: string;
};

export type DealCard = {
  title: string;
  image: string;
  href: string;
};

export const SITE = {
  name: "ShopVerse",
  tagline: "Online shopping for everything you love",
  deliverTo: "Mumbai 400001",
};

export const categories: Category[] = [
  { slug: "electronics", name: "Electronics", image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=600&q=80" },
  { slug: "fashion", name: "Fashion", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80" },
  { slug: "home", name: "Home & Kitchen", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80" },
  { slug: "beauty", name: "Beauty", image: "https://images.unsplash.com/photo-1522335789203-aaa75230d4ba?w=600&q=80" },
  { slug: "books", name: "Books", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80" },
  { slug: "toys", name: "Toys", image: "https://images.unsplash.com/photo-1558877385-81a1c7e67d72?w=600&q=80" },
  { slug: "sports", name: "Sports", image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80" },
  { slug: "grocery", name: "Grocery", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80" },
];

export const products: Product[] = [
  { id: "p1", name: "Wireless Noise Cancelling Headphones", price: 2499, mrp: 4999, rating: 4.5, reviews: 12453, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80", category: "electronics", description: "Immersive sound with active noise cancellation and 30h battery." },
  { id: "p2", name: "Smart Watch Series 9 with AMOLED Display", price: 3899, mrp: 7999, rating: 4.3, reviews: 8902, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80", category: "electronics", description: "Track fitness, heart rate, and notifications on a vivid AMOLED display." },
  { id: "p3", name: "Premium Leather Backpack — Violet Edition", price: 1799, mrp: 3499, rating: 4.6, reviews: 3421, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80", category: "fashion", description: "Hand-stitched leather backpack with laptop sleeve." },
  { id: "p4", name: "4K Ultra HD Smart LED TV 55 inch", price: 38990, mrp: 59990, rating: 4.4, reviews: 5612, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80", category: "electronics", description: "Cinema-grade 4K HDR display with built-in streaming apps." },
  { id: "p5", name: "Ergonomic Office Chair with Lumbar Support", price: 8499, mrp: 14999, rating: 4.2, reviews: 1893, image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&q=80", category: "home", description: "All-day comfort with adjustable lumbar and headrest." },
  { id: "p6", name: "DSLR Camera with 18-55mm Lens", price: 32990, mrp: 49990, rating: 4.7, reviews: 2210, image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80", category: "electronics", description: "Capture stunning photos and 4K video with this DSLR kit." },
  { id: "p7", name: "Running Shoes — Lightweight Mesh", price: 1499, mrp: 2999, rating: 4.1, reviews: 9821, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80", category: "sports", description: "Breathable mesh upper with cushioned sole for daily runs." },
  { id: "p8", name: "Stainless Steel Cookware Set (10 pcs)", price: 4299, mrp: 8999, rating: 4.5, reviews: 1532, image: "https://images.unsplash.com/photo-1584990347449-a8d2bbb50fcd?w=600&q=80", category: "home", description: "Induction-friendly cookware set for the modern kitchen." },
  { id: "p9", name: "Glow Serum — Vitamin C Brightening", price: 599, mrp: 1199, rating: 4.4, reviews: 7821, image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80", category: "beauty", description: "Daily brightening serum with stable vitamin C." },
  { id: "p10", name: "Bestselling Novel — The Violet Hour", price: 299, mrp: 499, rating: 4.6, reviews: 4310, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&q=80", category: "books", description: "An evocative story that's topped charts worldwide." },
  { id: "p11", name: "Building Blocks Set (250 pieces)", price: 899, mrp: 1799, rating: 4.5, reviews: 2103, image: "https://images.unsplash.com/photo-1558877385-81a1c7e67d72?w=600&q=80", category: "toys", description: "Encourage creativity with this colourful building set." },
  { id: "p12", name: "Organic Cold-Pressed Olive Oil 1L", price: 749, mrp: 1099, rating: 4.3, reviews: 982, image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80", category: "grocery", description: "Premium extra-virgin olive oil from small-batch growers." },
];

export const dealCards: DealCard[] = [
  { title: "Up to 70% off | Electronics", image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=600&q=80", href: "/category/electronics" },
  { title: "Refresh your wardrobe", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80", href: "/category/fashion" },
  { title: "Home essentials, sorted", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80", href: "/category/home" },
  { title: "Beauty steals from ₹199", image: "https://images.unsplash.com/photo-1522335789203-aaa75230d4ba?w=600&q=80", href: "/category/beauty" },
];

export function discount(p: Product) {
  return Math.round(((p.mrp - p.price) / p.mrp) * 100);
}
