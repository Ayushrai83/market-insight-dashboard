import { NavLink, Outlet } from "react-router-dom";
import {
  Activity,
  BarChart3,
  Briefcase,
  LineChart,
  Moon,
  Settings,
  Sun,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";
import {
  UserButton,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/clerk-react";

const navItem = ({ isActive }: { isActive: boolean }) =>
  cn(
    "inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
    isActive
      ? "bg-primary/15 text-primary"
      : "text-muted-foreground hover:bg-secondary hover:text-foreground",
  );

export const Layout = () => {
  const { theme, toggle } = useTheme();
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between gap-3 overflow-hidden">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <LineChart className="h-5 w-5" />
            </div>
            <div className="min-w-0 leading-tight">
              <p className="truncate text-sm font-bold tracking-tight">
                MDP Terminal
              </p>
              <p className="truncate text-[9px] uppercase tracking-wide text-muted-foreground sm:text-[10px]">
                Market Direction Predictor
              </p>
            </div>
          </div>
          <nav className="flex shrink-0 items-center gap-2">
            <div className="flex items-center gap-1 rounded-xl border border-border/60 bg-background/40 p-1">
              <NavLink to="/" end className={navItem}>
                <Activity className="h-4 w-4" />
                <span className="hidden sm:inline">Dashboard</span>
              </NavLink>

              <NavLink to="/backtest" className={navItem}>
                <BarChart3 className="h-4 w-4" />
                <span className="hidden sm:inline">Backtest</span>
              </NavLink>

              <button
                disabled
                className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground/50"
              >
                <Briefcase className="h-4 w-4" />
                <span className="hidden sm:inline">Projects</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggle}
                aria-label="Toggle theme"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>

              <button
                disabled
                className="hidden md:inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground/50"
              >
                <Settings className="h-4 w-4" />
              </button>

              <SignedOut>
                <SignInButton mode="modal">
                  <button className="rounded-lg border border-border px-3 py-1.5 text-sm transition-colors hover:bg-secondary">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <div className="ml-1">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
            </div>
          </nav>
        </div>
      </header>
      <main className="container py-6 space-y-6">
        <Outlet />
      </main>
      <footer className="border-t border-border/40 py-6">
        <div className="container text-center text-xs text-muted-foreground">
          Probability-based insights, not predictions. Always trade with risk
          management.
        </div>
      </footer>
    </div>
  );
};
