import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title: string;
  lede?: string;
  breadcrumb?: { label: string; to?: string }[];
}
import { Link } from "react-router-dom";

export const PageHero = ({ eyebrow, title, lede, breadcrumb }: Props) => (
  <section className="bg-muted/40 border-b border-border overflow-hidden">
    <div className="container-prose pt-20 pb-20 md:pt-28 md:pb-28">
      {breadcrumb && (
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs text-muted-foreground mb-6 flex gap-2 items-center"
        >
          {breadcrumb.map((b, i) => (
            <span key={i} className="flex items-center gap-2">
              {b.to ? (
                <Link to={b.to} className="hover:text-accent">{b.label}</Link>
              ) : (
                <span className="text-primary">{b.label}</span>
              )}
              {i < breadcrumb.length - 1 && <span>/</span>}
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
        className="display-xl text-primary text-balance max-w-4xl"
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