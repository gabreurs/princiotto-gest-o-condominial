import { motion } from "framer-motion";

interface Props {
  items: string[];
  duration?: number;
  reverse?: boolean;
  className?: string;
  tone?: "light" | "dark";
}

/**
 * Marquee discreto, tipo "ticker" tech.
 * Texto fino em mono, opacidade baixa, máscara de fade nas bordas, separadores em ponto.
 */
export const Marquee = ({
  items,
  duration = 55,
  reverse = false,
  className = "",
  tone = "light",
}: Props) => {
  const loop = [...items, ...items, ...items];
  const colorClass =
    tone === "dark"
      ? "text-primary-foreground/40"
      : "text-muted-foreground/55";
  const dotClass =
    tone === "dark" ? "bg-accent/60" : "bg-accent/70";

  return (
    <div
      className={`relative overflow-hidden py-2.5 ${className}`}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
      }}
    >
      <motion.div
        className="flex items-center gap-10 whitespace-nowrap will-change-transform"
        animate={{ x: reverse ? ["-33.333%", "0%"] : ["0%", "-33.333%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {loop.map((t, i) => (
          <div key={i} className="flex items-center gap-10 shrink-0">
            <span
              className={`mono text-[11px] uppercase tracking-[0.28em] ${colorClass}`}
            >
              {t}
            </span>
            <span className={`h-1 w-1 rounded-full ${dotClass}`} aria-hidden />
          </div>
        ))}
      </motion.div>
    </div>
  );
};