import { Link } from "react-router-dom";
import { ArrowUpRight, Award, ShieldCheck, Sparkles } from "lucide-react";
import { Seo } from "@/components/site/Seo";
import { CTASection } from "@/components/site/CTASection";
import { SITE, waLink } from "@/lib/site";
import { services, differentials, faqs } from "@/data/services";
import heroBg from "@/assets/hero-bg.jpg";
import portrait from "@/assets/portrait-placeholder.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${SITE.name} — Síndico Profissional`,
    description:
      "Síndico profissional com mais de 20 anos de experiência. Gestão condominial estratégica em Osasco, Barueri, Alphaville, Santana de Parnaíba e São Paulo.",
    url: SITE.baseUrl,
    telephone: SITE.whatsappDisplay,
    areaServed: SITE.regions.map((r) => ({ "@type": "City", name: r })),
    serviceType: "Sindicatura Profissional",
  };

  return (
    <>
      <Seo
        title="Síndico Profissional em Osasco, Barueri, Alphaville e SP"
        description="Ricardo Princiotto — síndico profissional com 20+ anos de experiência, certificado Síndico 5 Estrelas. Gestão estratégica, transparente e presente para condomínios."
        path="/"
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-deep text-primary-foreground -mt-20 pt-20">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt=""
            className="h-full w-full object-cover opacity-30"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/30" />
        </div>

        <div className="container-prose relative grid lg:grid-cols-12 gap-16 py-24 md:py-32 lg:py-40 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <p className="eyebrow !text-accent mb-8">Síndico Profissional · 20+ anos</p>
            <h1 className="display-xl text-balance mb-8">
              Gestão condominial com{" "}
              <span className="font-serif italic text-accent">autoridade,</span>{" "}
              presença e transparência.
            </h1>
            <p className="lede !text-primary-foreground/75 max-w-xl mb-10">
              Sindicatura profissional para condomínios em Osasco, Barueri, Alphaville,
              Santana de Parnaíba e São Paulo. Mais de duas décadas conduzindo condomínios
              com método, técnica e presença real.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-4 text-sm tracking-wide hover:bg-gold-soft transition-colors"
              >
                Falar pelo WhatsApp
                <ArrowUpRight size={16} />
              </a>
              <Link
                to="/contato"
                className="inline-flex items-center border border-primary-foreground/30 px-7 py-4 text-sm tracking-wide hover:border-accent hover:text-accent transition-colors"
              >
                Solicitar avaliação do condomínio
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm text-primary-foreground/70">
              <span className="flex items-center gap-2">
                <Award size={16} className="text-accent" /> Síndico 5 Estrelas
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-accent" /> RC R$ 1.000.000,00
              </span>
              <span className="flex items-center gap-2">
                <Sparkles size={16} className="text-accent" /> Vanzolini / USP
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-3 border border-accent/40" aria-hidden />
              <div className="relative aspect-[4/5] overflow-hidden bg-graphite">
                <img
                  src={portrait}
                  alt="Espaço reservado para retrato profissional de Ricardo Princiotto"
                  className="h-full w-full object-cover"
                  width={896}
                  height={1216}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-accent mb-1">
                    Retrato profissional
                  </p>
                  <p className="font-serif text-xl">Ricardo Princiotto</p>
                  <p className="text-xs text-primary-foreground/60 mt-2 italic">
                    [Espaço reservado para foto oficial]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILIDADE */}
      <section className="border-y border-border bg-muted/40">
        <div className="container-prose py-12 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            ["20+", "Anos de experiência"],
            ["5★", "Síndico Certificado"],
            ["R$ 1MM", "Seguro RC profissional"],
            ["100%", "Transparência em prestação de contas"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="font-serif text-3xl md:text-4xl text-primary">{k}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-2">
                {v}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="container-prose py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6">Por que Ricardo Princiotto</p>
            <h2 className="display text-primary text-balance">
              Sindicatura conduzida com método, presença e responsabilidade.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="lede">
              Não há atalho para uma boa gestão condominial. Há disciplina, técnica e
              presença. É exatamente isso que entrego em cada condomínio que assumo —
              com a maturidade de quem está há mais de duas décadas no campo.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {differentials.slice(0, 4).map((d) => (
            <div key={d.title} className="bg-background p-8 hover:bg-muted/50 transition-colors">
              <div className="gold-rule mb-6" />
              <h3 className="font-serif text-xl text-primary mb-3 leading-snug">{d.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/diferenciais"
            className="inline-flex items-center gap-2 text-sm text-primary border-b border-accent pb-1 hover:text-accent transition-colors"
          >
            Ver todos os diferenciais <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-prose py-24 md:py-32">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-6">
              <p className="eyebrow !text-accent mb-6">Serviços</p>
              <h2 className="display text-balance">
                Um portfólio completo de sindicatura profissional.
              </h2>
            </div>
            <p className="lg:col-span-5 lg:col-start-8 lede !text-primary-foreground/70">
              Da gestão executiva integral à consultoria pontual. Cada serviço é
              entregue com o mesmo padrão técnico, ético e de governança.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10">
            {services.slice(0, 8).map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.slug} className="bg-primary p-8 hover:bg-graphite transition-colors group">
                  <Icon className="text-accent mb-6" size={26} strokeWidth={1.4} />
                  <h3 className="font-serif text-lg mb-3 leading-snug">{s.title}</h3>
                  <p className="text-sm text-primary-foreground/65 leading-relaxed">
                    {s.short}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/servicos"
              className="inline-flex items-center gap-2 text-sm text-accent border-b border-accent pb-1 hover:text-gold-soft transition-colors"
            >
              Conhecer todos os serviços <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CASE DESTAQUE */}
      <section className="container-prose py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6">Case de destaque</p>
            <h2 className="display text-primary text-balance mb-6">
              Recuperação financeira completa de um condomínio em crise.
            </h2>
            <p className="lede mb-8">
              Alta inadimplência, reservas em queda e ausência de planejamento preventivo.
              Com gestão profissional, em poucos exercícios o condomínio voltou a ter
              previsibilidade financeira, fundo de obras saudável e estabilidade real.
            </p>
            <Link
              to="/cases"
              className="inline-flex items-center gap-2 text-sm text-primary border-b border-accent pb-1 hover:text-accent transition-colors"
            >
              Ver o case completo <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 grid grid-cols-2 gap-px bg-border">
            {[
              ["−68%", "Redução de inadimplência"],
              ["+3,2x", "Crescimento do fundo de obras"],
              ["12 meses", "Para estabilização financeira"],
              ["100%", "Prestação de contas auditável"],
            ].map(([k, v]) => (
              <div key={k} className="bg-background p-8">
                <p className="font-serif text-3xl text-primary">{k}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-2">
                  {v}
                </p>
              </div>
            ))}
            <p className="col-span-2 bg-muted/40 p-4 text-[11px] text-muted-foreground italic">
              * Indicadores ilustrativos representando ordem de grandeza típica de cases reais conduzidos.
            </p>
          </div>
        </div>
      </section>

      {/* REGIÕES */}
      <section className="bg-muted/40 border-y border-border">
        <div className="container-prose py-24 md:py-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow justify-center mb-6">Regiões de atuação</p>
            <h2 className="display text-primary text-balance">
              Atendimento direcionado e estratégico.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-px bg-border">
            {[
              ["Osasco", "/sindico-profissional-osasco"],
              ["Barueri", "/sindico-profissional-barueri"],
              ["Alphaville", "/sindico-profissional-alphaville"],
              ["Santana de Parnaíba", "/sindico-profissional-santana-de-parnaiba"],
              ["São Paulo", "/sindico-profissional-sao-paulo"],
            ].map(([name, to]) => (
              <Link
                key={to}
                to={to}
                className="bg-background p-8 group hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <p className="text-[10px] uppercase tracking-[0.22em] text-accent mb-3">
                  Síndico Profissional
                </p>
                <p className="font-serif text-2xl group-hover:text-accent transition-colors">
                  {name}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-xs">
                  Ver página <ArrowUpRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-prose py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-6">Perguntas frequentes</p>
            <h2 className="display text-primary text-balance">
              Esclarecimentos antes da contratação.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.slice(0, 6).map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-serif text-lg text-primary hover:no-underline py-6">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Index;
