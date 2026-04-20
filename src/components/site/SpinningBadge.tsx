import { motion } from "framer-motion";

interface Props {
  text: string;
  size?: number;
  className?: string;
  variant?: "light" | "dark";
}

/**
 * Badge giratório premium. Disco contínuo claro com tipografia em mono
 * acompanhando um arco superior+inferior. Visual técnico, refinado.
 */
export const SpinningBadge = ({
  text,
  size = 120,
  className = "",
  variant = "light",
}: Props) => {
  const id = `sb-${text.length}-${size}`;
  const radius = size / 2 - 13;
  const cx = size / 2;
  const cy = size / 2;

  const bg = variant === "light" ? "bg-background" : "bg-primary";
  const ring = variant === "light" ? "ring-border" : "ring-primary-foreground/20";
  const fill = variant === "light" ? "hsl(var(--primary))" : "hsl(var(--primary-foreground))";
  const center = variant === "light" ? "text-primary" : "text-primary-foreground";

  return (
    <div
      className={`relative grid place-items-center rounded-full ring-1 shadow-elegant ${bg} ${ring} ${className}`}
      style={{ width: size, height: size }}
    >
      <motion.svg
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        <defs>
          <path
            id={id}
            d={`M ${cx},${cy} m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>
        <text
          fill={fill}
          style={{
            fontSize: 8.5,
            letterSpacing: 2.6,
            fontFamily: "Geist Mono, ui-monospace, monospace",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          <textPath href={`#${id}`}>{text.repeat(3)}</textPath>
        </text>
      </motion.svg>
      {/* núcleo central */}
      <div className="grid place-items-center w-[42%] h-[42%] rounded-full bg-accent/10">
        <span className={`text-[15px] leading-none ${center}`}>★</span>
      </div>
    </div>
  );
};