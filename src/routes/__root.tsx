import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "@/components/shop/Header";
import { Footer } from "@/components/shop/Footer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ShopVerse — Online shopping for everything you love" },
      { name: "description", content: "ShopVerse is an online shopping destination with great deals on electronics, fashion, home, beauty, books, toys, sports, and grocery." },
      { name: "author", content: "ShopVerse" },
      { property: "og:site_name", content: "ShopVerse" },
      { property: "og:title", content: "ShopVerse — Online shopping for everything you love" },
      { property: "og:description", content: "Shop millions of products at great prices on ShopVerse: electronics, fashion, home essentials, beauty, books and more with fast delivery." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@ShopVerse" },
      { name: "twitter:title", content: "ShopVerse — Online shopping for everything you love" },
      { name: "twitter:description", content: "Shop millions of products at great prices on ShopVerse: electronics, fashion, home essentials, beauty, books and more with fast delivery." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/554e2c4c-574e-4e6c-8c5f-b11ef5ee41b7/id-preview-cad13202--c2e35c9e-ecf7-4704-adae-643eeff77bc7.lovable.app-1778063786412.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/554e2c4c-574e-4e6c-8c5f-b11ef5ee41b7/id-preview-cad13202--c2e35c9e-ecf7-4704-adae-643eeff77bc7.lovable.app-1778063786412.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "ShopVerse",
              url: "https://shop-verse-violet.lovable.app",
              logo: "https://shop-verse-violet.lovable.app/favicon.ico",
            },
            {
              "@type": "WebSite",
              name: "ShopVerse",
              url: "https://shop-verse-violet.lovable.app",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://shop-verse-violet.lovable.app/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
