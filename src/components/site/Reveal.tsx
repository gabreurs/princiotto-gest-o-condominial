import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "aside";
}

export const Reveal = ({ children, delay = 0, y = 18, className, as = "div" }: RevealProps) => {
  const reduce = useReducedMotion();
  const Comp: any = motion[as];
  return (
    <Comp
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Comp>
  );
};

/* Stagger container — para listas/grids respirarem em cascata */
export const containerStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
export const itemFade: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

interface StaggerProps {
  children: ReactNode;
  className?: string;
}
export const Stagger = ({ children, className }: StaggerProps) => (
  <motion.div
    variants={containerStagger}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-60px" }}
    className={className}
  >
    {children}
  </motion.div>
);
export const StaggerItem = ({ children, className }: StaggerProps) => (
  <motion.div variants={itemFade} className={className}>
    {children}
  </motion.div>
);