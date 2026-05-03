import { NavLink, Outlet } from "react-router-dom";
import { Activity, BarChart3, LineChart, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";

const navItem = ({ isActive }: { isActive: boolean }) =>
  cn(
    "inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
    isActive ? "bg-primary/15 text-primary" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
  );

export const Layout = () => {
  const { theme, toggle } = useTheme();
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <LineChart className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold tracking-tight">MDP Terminal</p>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Market Direction Predictor</p>
            </div>
          </div>
          <nav className="flex items-center gap-1">
            <NavLink to="/" end className={navItem}>
              <Activity className="h-4 w-4" /> <span className="hidden sm:inline">Dashboard</span>
            </NavLink>
            <NavLink to="/backtest" className={navItem}>
              <BarChart3 className="h-4 w-4" /> <span className="hidden sm:inline">Backtest</span>
            </NavLink>
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </nav>
        </div>
      </header>
      <main className="container py-6">
        <Outlet />
      </main>
      <footer className="border-t border-border/40 py-6">
        <div className="container text-center text-xs text-muted-foreground">
          Probability-based insights, not predictions. Always trade with risk management.
        </div>
      </footer>
    </div>
  );
};
