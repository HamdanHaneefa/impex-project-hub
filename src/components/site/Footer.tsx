import logo from "@/assets/impex-logo.png";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-8 items-center">
        <div className="flex items-center gap-3">
          <img src={logo} alt="IMPEX" className="h-7 w-auto" />
          <div>
            <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              xSeries
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              AI Interactive Displays · Built for what's next.
            </p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground sm:text-right">
          © {new Date().getFullYear()} IMPEX. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
