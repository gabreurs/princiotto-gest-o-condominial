import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  items: ReactNode[];
  duration?: number;
  reverse?: boolean;
  className?: string;
}

export const Marquee = ({ items, duration = 38, reverse = false, className = "" }: Props) => {
  const loop = [...items, ...items];
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-16 whitespace-nowrap will-change-transform"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {loop.map((it, i) => (
          <div key={i} className="flex items-center gap-16 shrink-0">
            {it}
            <span className="text-accent/60 text-xs">◆</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};