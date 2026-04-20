import { Link } from "react-router-dom";
import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import regionsImg from "@/assets/regions.jpg";
import { ArrowUpRight } from "lucide-react";

const regions = [
  { name: "Osasco", slug: "/sindico-profissional-osasco", desc: "Condomínios residenciais e mistos no centro expandido e regiões consolidadas." },
  { name: "Barueri", slug: "/sindico-profissional-barueri", desc: "Empreendimentos verticais e horizontais com perfil de gestão exigente." },
  { name: "Alphaville", slug: "/sindico-profissional-alphaville", desc: "Condomínios de alto padrão, com governança e padrão de serviço diferenciados." },
  { name: "Santana de Parnaíba", slug: "/sindico-profissional-santana-de-parnaiba", desc: "Bairros planejados e condomínios fechados com demandas operacionais específicas." },
  { name: "São Paulo", slug: "/sindico-profissional-sao-paulo", desc: "Atendimento estratégico em São Paulo, com presença reforçada na Zona Norte." },
];

const Regioes = () => (
  <>
    <Seo
      title="Regiões de Atuação — Síndico Profissional"
      description="Atendimento direcionado em Osasco, Barueri, Alphaville, Santana de Parnaíba e São Paulo. Conheça a cobertura regional de Ricardo Princiotto."
      path="/regioes"
    />
    <PageHero
      eyebrow="Regiões de atuação"
      title="Atendimento direcionado, presença real."
      lede="Trabalho com cobertura geográfica intencionalmente focada para garantir presença, agilidade e qualidade de gestão em cada condomínio atendido."
      breadcrumb={[{ label: "Início", to: "/" }, { label: "Regiões" }]}
    />

    <section className="relative h-[40vh] min-h-[320px] overflow-hidden">
      <img src={regionsImg} alt="Vista aérea de condomínios em Alphaville e região" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1600} height={1000} />
      <div className="absolute inset-0 bg-navy-deep/65" />
      <div className="container-prose relative h-full flex items-center">
        <p className="font-serif text-3xl md:text-5xl text-primary-foreground max-w-2xl text-balance">
          Cobertura concentrada na Grande São Paulo — Oeste e Zona Norte.
        </p>
      </div>
    </section>

    <section className="container-prose py-20 md:py-28 grid md:grid-cols-2 gap-px bg-border">
      {regions.map((r) => (
        <Link
          key={r.slug}
          to={r.slug}
          className="bg-background p-10 group hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <p className="text-[10px] uppercase tracking-[0.22em] text-accent mb-4">
            Síndico Profissional em
          </p>
          <h2 className="font-serif text-3xl mb-4 text-primary group-hover:text-accent transition-colors">{r.name}</h2>
          <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-primary-foreground/70">{r.desc}</p>
          <span className="mt-8 inline-flex items-center gap-2 text-sm">
            Ver página local <ArrowUpRight size={14} />
          </span>
        </Link>
      ))}
    </section>

    <CTASection eyebrow="Atendimento" title="Seu condomínio está em uma dessas regiões?" />
  </>
);

export default Regioes;