import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/impex-logo.png";

const links = [
  { href: "#models", label: "Models" },
  { href: "#features", label: "Features" },
  { href: "#whiteboard", label: "Whiteboard AI" },
  { href: "#connectivity", label: "Connectivity" },
  { href: "#specs", label: "Specs" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show menu links after scrolling just a bit (50px)
      setScrolled(window.scrollY > 50);
    };
    
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo - always visible */}
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="IMPEX" className="h-7 md:h-8 w-auto" />
          <span className={`hidden sm:inline text-xs font-semibold tracking-widest uppercase transition-colors ${
            scrolled ? "text-muted-foreground" : "text-white/70"
          }`}>
            xSeries
          </span>
        </a>
        
        {/* Navigation links - fade in when scrolled, desktop only */}
        <nav className={`hidden lg:flex items-center gap-8 transition-all duration-300 ${
          scrolled 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-3">
          {/* Request Demo button - always visible on desktop, hidden on mobile */}
          <a
            href="#enquiry"
            className="hidden lg:inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-brand"
          >
            Request a Demo
          </a>
          
          {/* Hamburger menu - mobile only, always visible */}
          <button
            aria-label="Menu"
            className={`lg:hidden p-2 rounded-md transition-colors ${
              scrolled 
                ? "text-foreground" 
                : "text-white"
            }`}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-lg border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-medium text-foreground py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#enquiry"
              onClick={() => setOpen(false)}
              className="block w-full text-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground mt-4"
            >
              Request a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
