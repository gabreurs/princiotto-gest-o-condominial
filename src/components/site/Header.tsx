import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { SITE, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";
import logoRP from "@/assets/logo-rp.jpeg";

const nav = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/diferenciais", label: "Diferenciais" },
  { to: "/cases", label: "Cases" },
  { to: "/regioes", label: "Regiões" },
  { to: "/contato", label: "Contato" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      )}
    >
      <div className="container-prose flex h-20 items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <span className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-accent/40 bg-primary">
            <img src={logoRP} alt="Brasão Ricardo Princiotto" className="h-full w-full object-cover" />
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-serif text-lg text-primary">{SITE.name}</span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              {SITE.role}
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm tracking-wide transition-colors relative py-1",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                )
              }
            >
              {({ isActive }) => (
                <>
                  {n.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-accent" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-sm tracking-wide hover:bg-navy-deep transition-colors"
        >
          Falar pelo WhatsApp
        </a>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-primary"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container-prose py-6 flex flex-col gap-1">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "py-3 border-b border-border/60 text-sm",
                    isActive ? "text-accent" : "text-primary"
                  )
                }
              >
                {n.label}
              </NavLink>
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center bg-primary text-primary-foreground px-5 py-3 text-sm"
            >
              Falar pelo WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};