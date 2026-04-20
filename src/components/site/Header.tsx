import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { SITE, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";
import logoRP from "@/assets/logo-rp.jpeg";
import { motion } from "framer-motion";

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
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,box-shadow] duration-500",
        scrolled
          ? "bg-background/90 backdrop-blur-xl shadow-[0_1px_0_0_hsl(var(--border)/0.6)]"
          : "bg-gradient-to-b from-navy-deep/55 to-transparent"
      )}
    >
      <div className="container-prose flex h-20 items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <span className="relative h-10 w-10 overflow-hidden bg-primary ring-1 ring-accent/40">
            <img src={logoRP} alt="Brasão Ricardo Princiotto" className="h-full w-full object-cover" />
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className={cn(
              "font-serif text-lg transition-colors duration-500",
              scrolled ? "text-primary" : "text-primary-foreground"
            )}>{SITE.name}</span>
            <span className={cn(
              "mono text-[10px] uppercase tracking-[0.22em] transition-colors duration-500",
              scrolled ? "text-muted-foreground" : "text-primary-foreground/65"
            )}>
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
                  scrolled
                    ? isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                    : isActive ? "text-accent" : "text-primary-foreground/80 hover:text-accent"
                )
              }
            >
              {({ isActive }) => (
                <>
                  {n.label}
                  {isActive && (
                    <motion.span layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-px bg-accent" />
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
          className={cn(
            "hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-sm tracking-wide transition-colors",
            scrolled
              ? "bg-primary text-primary-foreground hover:bg-navy-deep"
              : "bg-accent text-accent-foreground hover:bg-gold-soft"
          )}
        >
          Falar pelo WhatsApp
        </a>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className={cn("lg:hidden p-2 transition-colors", scrolled ? "text-primary" : "text-primary-foreground")}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="lg:hidden border-t border-border bg-background">
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
        </motion.div>
      )}
    </motion.header>
  );
};