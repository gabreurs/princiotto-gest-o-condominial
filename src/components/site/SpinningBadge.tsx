import { motion } from "framer-motion";

interface Props {
  text: string;
  size?: number;
  className?: string;
  centerLabel?: string;
}

export const SpinningBadge = ({ text, size = 140, className = "", centerLabel = "★" }: Props) => {
  const radius = size / 2 - 12;
  return (
    <div
      className={`relative grid place-items-center rounded-full backdrop-blur-md bg-navy-deep/35 ring-1 ring-accent/30 shadow-[0_8px_30px_hsl(218_52%_10%/0.35)] ${className}`}
      style={{ width: size, height: size }}
    >
      <motion.svg
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 24, ease: "linear", repeat: Infinity }}
      >
        <defs>
          <path
            id={`circle-${text.length}`}
            d={`M ${size / 2}, ${size / 2} m -${radius}, 0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>
        <text className="fill-accent" style={{ fontSize: 9, letterSpacing: 3.4, fontFamily: "JetBrains Mono, monospace", textTransform: "uppercase", fontWeight: 500 }}>
          <textPath href={`#circle-${text.length}`}>{text.repeat(2)}</textPath>
        </text>
      </motion.svg>
      <span className="font-serif text-accent text-xl leading-none">{centerLabel}</span>
    </div>
  );
};