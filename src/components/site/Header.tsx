import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { SITE, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";
import logoRP from "@/assets/logo-rp.jpeg";
import { motion, AnimatePresence } from "framer-motion";

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
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  // Header sempre claro/light: o hero foi ajustado para fundo claro.
  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Camada de fundo animada — sem border, sem flicker */}
      <motion.div
        aria-hidden
        animate={{
          backgroundColor: scrolled ? "hsl(0 0% 100% / 0.78)" : "hsl(0 0% 100% / 0)",
          backdropFilter: scrolled ? "saturate(180%) blur(14px)" : "blur(0px)",
          boxShadow: scrolled
            ? "0 1px 0 0 hsl(220 16% 91% / 0.7), 0 8px 24px -12px hsl(220 25% 14% / 0.08)"
            : "0 0 0 0 hsl(220 25% 14% / 0)",
        }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        style={{ WebkitBackdropFilter: scrolled ? "saturate(180%) blur(14px)" : "blur(0px)" }}
        className="absolute inset-0 -z-10"
      />

      <div className="container-prose flex h-[72px] items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <span className="relative h-9 w-9 overflow-hidden bg-primary">
            <img src={logoRP} alt="Brasão Ricardo Princiotto" className="h-full w-full object-cover" />
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-[15px] font-medium text-primary tracking-[-0.01em]">
              {SITE.name}
            </span>
            <span className="mono text-[9.5px] uppercase tracking-[0.22em] text-muted-foreground">
              {SITE.role}
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                cn(
                  "relative px-3 py-2 text-[13.5px] transition-colors",
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
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-md bg-accent/10 ring-1 ring-accent/30"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
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
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground pl-5 pr-4 py-2 text-[13px] tracking-[-0.005em] hover:bg-navy-deep transition-colors group"
        >
          Falar pelo WhatsApp
          <span className="grid h-6 w-6 place-items-center rounded-full bg-accent text-accent-foreground transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </a>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-primary"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-background overflow-hidden border-t border-border"
          >
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
                className="mt-4 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm"
              >
                Falar pelo WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};