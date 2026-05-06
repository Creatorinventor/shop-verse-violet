export function Footer() {
  const sections = [
    { h: "Get to Know Us", l: ["About ShopVerse", "Careers", "Press Releases", "Sustainability"] },
    { h: "Make Money with Us", l: ["Sell on ShopVerse", "Become an Affiliate", "Advertise Your Products"] },
    { h: "Payment Products", l: ["Business Card", "Pay Wallet", "Reload Balance", "Currency Converter"] },
    { h: "Let Us Help You", l: ["Your Account", "Your Orders", "Shipping Rates", "Returns & Replacements"] },
  ];

  return (
    <footer className="mt-16 bg-primary text-primary-foreground">
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="block w-full py-3 text-center text-sm font-medium hover:opacity-90" style={{ background: "color-mix(in oklab, var(--primary) 80%, white 20%)" }}>
        Back to top
      </button>
      <div className="grid grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4">
        {sections.map((s) => (
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
  );
}
