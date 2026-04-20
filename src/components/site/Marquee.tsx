import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  items: string[];
  duration?: number;
  reverse?: boolean;
  className?: string;
  tone?: "light" | "dark";
}

/**
 * Marquee tech discreto — uma única faixa fina, tipográfica monoespaçada,
 * com mask-fade lateral, separadores · e baixa proeminência. Pensado para
 * funcionar como textura viva do layout.
 */
export const Marquee = ({
  items,
  duration = 60,
  reverse = false,
  className = "",
  tone = "light",
}: Props) => {
  const loop = [...items, ...items, ...items];
  const text = tone === "dark" ? "text-primary-foreground/45" : "text-muted-foreground/55";
  const dot = tone === "dark" ? "text-primary-foreground/25" : "text-muted-foreground/30";

  return (
    <div
      className={cn("relative overflow-hidden py-2", className)}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 14%, black 86%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 14%, black 86%, transparent)",
      }}
    >
      <motion.div
        className="flex items-center whitespace-nowrap will-change-transform"
        animate={{ x: reverse ? ["-33.333%", "0%"] : ["0%", "-33.333%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {loop.map((t, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className={cn("mono text-[10.5px] uppercase tracking-[0.24em] px-6", text)}>
              {t}
            </span>
            <span className={cn("text-xs", dot)}>·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};