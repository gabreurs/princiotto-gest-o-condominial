import { motion } from "framer-motion";

interface Props {
  text: string;
  size?: number;
  className?: string;
  centerLabel?: string;
}

export const SpinningBadge = ({ text, size = 140, className = "", centerLabel = "★" }: Props) => {
  const chars = text.split("");
  const radius = size / 2 - 14;
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <motion.svg
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        <defs>
          <path
            id={`circle-${text.length}`}
            d={`M ${size / 2}, ${size / 2} m -${radius}, 0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>
        <text className="fill-accent" style={{ fontSize: 10, letterSpacing: 4, fontFamily: "Manrope, sans-serif", textTransform: "uppercase" }}>
          <textPath href={`#circle-${text.length}`}>{chars.join("")}</textPath>
        </text>
      </motion.svg>
      <div className="absolute inset-0 grid place-items-center">
        <span className="font-serif text-accent text-2xl">{centerLabel}</span>
      </div>
    </div>
  );
};