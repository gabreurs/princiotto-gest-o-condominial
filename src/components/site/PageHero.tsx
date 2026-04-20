import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title: string;
  lede?: string;
  breadcrumb?: { label: string; to?: string }[];
}
import { Link } from "react-router-dom";

export const PageHero = ({ eyebrow, title, lede, breadcrumb }: Props) => (
  <section className="relative overflow-hidden border-b border-border bg-background">
    <div className="absolute inset-0 grid-bg opacity-25 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" aria-hidden />
    <div className="container-prose relative pt-32 pb-16 md:pt-36 md:pb-20">
      {breadcrumb && (
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mono text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground mb-6 flex gap-2 items-center"
        >
          {breadcrumb.map((b, i) => (
            <span key={i} className="flex items-center gap-2">
              {b.to ? (
                <Link to={b.to} className="hover:text-primary transition-colors">{b.label}</Link>
              ) : (
                <span className="text-primary/80">{b.label}</span>
              )}
              {i < breadcrumb.length - 1 && <span className="opacity-40">/</span>}
            </span>
          ))}
        </motion.nav>
      )}
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="eyebrow mb-6"
      >
        {eyebrow}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="display-xl text-balance max-w-4xl"
      >
        {title}
      </motion.h1>
      {lede && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="lede mt-6 max-w-2xl"
        >
          {lede}
        </motion.p>
      )}
    </div>
  </section>
);