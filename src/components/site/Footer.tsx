import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { SITE, waLink } from "@/lib/site";
import logoRP from "@/assets/logo-rp-official.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-prose py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className="relative h-14 w-12 overflow-hidden bg-primary-foreground ring-1 ring-accent/50">
                <img src={logoRP} alt="Logo Ricardo Princiotto" className="h-full w-full object-contain" />
              </span>
              <div>
                <p className="font-serif text-xl">{SITE.name}</p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-primary-foreground/60">
                  Síndico Profissional · Síndico 5 Estrelas
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/70 max-w-md">
              Mais de 20 anos de experiência em sindicatura profissional, com atuação
              estratégica em condomínios residenciais e mistos em Osasco, Barueri,
              Alphaville, Santana de Parnaíba e São Paulo.
            </p>
            <div className="space-y-1 text-xs text-primary-foreground/65">
              {SITE.credentials.map((credential) => (
                <p key={credential}>{credential}</p>
              ))}
            </div>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-accent/60 text-accent px-5 py-2.5 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Solicitar proposta
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.22em] text-accent mb-5">
              Navegação
            </p>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              {[
                ["/sobre", "Sobre"],
                ["/servicos", "Serviços"],
                ["/diferenciais", "Diferenciais"],
                ["/cases", "Cases"],
                ["/regioes", "Regiões"],
                ["/contato", "Contato"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-accent transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.22em] text-accent mb-5">
              Regiões
            </p>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><Link to="/sindico-profissional-osasco" className="hover:text-accent">Osasco</Link></li>
              <li><Link to="/sindico-profissional-barueri" className="hover:text-accent">Barueri</Link></li>
              <li><Link to="/sindico-profissional-alphaville" className="hover:text-accent">Alphaville</Link></li>
              <li><Link to="/sindico-profissional-santana-de-parnaiba" className="hover:text-accent">S. de Parnaíba</Link></li>
              <li><Link to="/sindico-profissional-sao-paulo" className="hover:text-accent">São Paulo</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.22em] text-accent mb-5">
              Contato
            </p>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <Phone size={14} className="mt-1 text-accent" />
                <a href={waLink()} className="hover:text-accent">{SITE.whatsappDisplay}</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={14} className="mt-1 text-accent" />
                <a href={`mailto:${SITE.email}`} className="hover:text-accent break-all">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-1 text-accent" />
                <span>Grande São Paulo</span>
              </li>
              <li className="flex items-start gap-2">
                <Instagram size={14} className="mt-1 text-accent" />
                <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accent">Instagram</a>
              </li>
              <li className="flex items-start gap-2">
                <Facebook size={14} className="mt-1 text-accent" />
                <a href={SITE.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-accent">Facebook</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.</p>
          <p className="font-serif italic text-primary-foreground/60">
            Gestão profissional, transparente e presente.
          </p>
        </div>
      </div>
    </footer>
  );
};