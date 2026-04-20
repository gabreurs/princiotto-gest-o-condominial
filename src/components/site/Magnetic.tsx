import { motion, useMotionValue, useSpring, useMotionTemplate, useReducedMotion } from "framer-motion";
import { ReactNode, useRef, MouseEvent } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  /** força do imã (px de deslocamento máximo) */
  strength?: number;
}

/**
 * Wrapper magnético sutil. Move o conteúdo levemente em direção ao cursor,
 * com spring suave. Pensado para botões e cards — efeito tech, discreto.
 */
export const Magnetic = ({ children, className, strength = 14 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set((relX / rect.width) * strength * 2);
    y.set((relY / rect.height) * strength * 2);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Card com destaque sutil — segue o cursor com um halo radial dourado discreto.
 */
interface SpotlightProps {
  children: ReactNode;
  className?: string;
}
export const SpotlightCard = ({ children, className }: SpotlightProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);
  const bg = useMotionTemplate`radial-gradient(220px circle at ${mx}px ${my}px, hsl(var(--accent) / 0.10), transparent 70%)`;

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(-200);
        my.set(-200);
      }}
      className={`relative group ${className ?? ""}`}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: bg }}
      />
      {children}
    </div>
  );
};