interface Props {
  eyebrow: string;
  title: string;
  lede?: string;
  breadcrumb?: { label: string; to?: string }[];
}
import { Link } from "react-router-dom";

export const PageHero = ({ eyebrow, title, lede, breadcrumb }: Props) => (
  <section className="bg-muted/40 border-b border-border">
    <div className="container-prose pt-20 pb-20 md:pt-28 md:pb-28">
      {breadcrumb && (
        <nav className="text-xs text-muted-foreground mb-6 flex gap-2 items-center">
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
        </nav>
      )}
      <p className="eyebrow mb-6">{eyebrow}</p>
      <h1 className="display-xl text-primary text-balance max-w-4xl">{title}</h1>
      {lede && <p className="lede mt-6 max-w-2xl">{lede}</p>}
    </div>
  </section>
);