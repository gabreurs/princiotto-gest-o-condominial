import { Link } from "react-router-dom";
import { ArrowUpRight, Award, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Seo } from "@/components/site/Seo";
import { CTASection } from "@/components/site/CTASection";
import { Marquee } from "@/components/site/Marquee";
import { SpinningBadge } from "@/components/site/SpinningBadge";
import { Reveal } from "@/components/site/Reveal";
import { Magnetic, SpotlightCard } from "@/components/site/Magnetic";
import { Testimonials } from "@/components/site/Testimonials";
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

      {/* HERO — claro, contemporâneo */}
      <section className="relative overflow-hidden bg-background pt-28 md:pt-32">
        {/* textura sutil de grade */}
        <div className="absolute inset-0 grid-bg opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" aria-hidden />
        <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-soft" aria-hidden />

        <div className="container-prose relative grid lg:grid-cols-12 gap-12 lg:gap-16 pb-20 md:pb-28 lg:pb-32 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 backdrop-blur pl-1.5 pr-3 py-1 mb-8"
            >
              <span className="grid h-5 w-5 place-items-center rounded-full bg-accent/15 text-accent text-[10px]">★</span>
              <span className="mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">
                Síndico 5 Estrelas · 20+ anos
              </span>
            </motion.div>

            <h1 className="display-xl text-balance mb-7">
              Gestão condominial com{" "}
              <span className="serif-italic text-primary/90">autoridade</span>,
              presença e transparência.
            </h1>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.3 }}
              className="lede max-w-xl mb-10"
            >
              Sindicatura profissional para condomínios em Osasco, Barueri, Alphaville,
              Santana de Parnaíba e São Paulo. Mais de duas décadas conduzindo condomínios
              com método, técnica e presença real.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <Magnetic strength={10}>
                <motion.a
                  whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground pl-6 pr-2 py-2 text-[14px] hover:bg-navy-deep transition-colors"
                >
                  Falar pelo WhatsApp
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-accent-foreground transition-transform group-hover:translate-x-0.5">
                    <ArrowUpRight size={15} />
                  </span>
                </motion.a>
              </Magnetic>
              <Magnetic strength={6}>
                <Link
                  to="/contato"
                  className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-[14px] text-primary hover:border-primary/40 transition-colors"
                >
                  Solicitar avaliação
                </Link>
              </Magnetic>
            </motion.div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 text-[13px] text-muted-foreground border-t border-border pt-6">
              <span className="flex items-center gap-2">
                <Award size={14} className="text-accent" /> Síndico 5 Estrelas
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-accent" /> RC R$ 1.000.000
              </span>
              <span className="flex items-center gap-2">
                <Sparkles size={14} className="text-accent" /> Vanzolini / USP
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* moldura sutil */}
              <div className="absolute -inset-2 rounded-[10px] bg-gradient-to-br from-accent/20 via-transparent to-primary/10 -z-10" aria-hidden />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] bg-muted shadow-elegant">
                <img
                  src={portrait}
                  alt="Ricardo Princiotto — síndico profissional"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: "50% 12%" }}
                  width={896}
                  height={1216}
                />
                {/* etiqueta inferior */}
                <div className="absolute left-4 bottom-4 right-4 flex items-end justify-between">
                  <div className="rounded-md bg-background/85 backdrop-blur px-3 py-2">
                    <p className="mono text-[9.5px] uppercase tracking-[0.18em] text-muted-foreground">
                      Síndico Profissional
                    </p>
                    <p className="text-[14px] text-primary font-medium leading-tight">Ricardo Princiotto</p>
                  </div>
                </div>
                {/* badge giratório elegante */}
                <div className="absolute -right-5 -bottom-5">
                  <SpinningBadge
                    text="SÍNDICO 5 ESTRELAS · VANZOLINI USP · "
                    size={108}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee tech discreto entre HERO e CREDIBILIDADE */}
      <div className="bg-navy-deep border-y border-primary-foreground/10">
        <Marquee
          tone="dark"
          items={[
            "Síndico 5 Estrelas",
            "Certificação Vanzolini · USP",
            "20+ anos de experiência",
            "RC R$ 1.000.000,00",
            "Sem honorários extras",
            "Presença real no condomínio",
            "Transparência integral",
          ]}
        />
      </div>

      {/* CREDIBILIDADE */}
      <section className="border-y border-border bg-muted/40">
        <div className="container-prose py-12 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            ["20+", "Anos de experiência"],
            ["5★", "Síndico Certificado"],
            ["R$ 1MM", "Seguro RC profissional"],
            ["100%", "Transparência em prestação de contas"],
          ].map(([k, v], i) => (
            <Reveal key={k} delay={i * 0.08}>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-primary">{k}</p>
                <p className="mono text-xs uppercase tracking-[0.18em] text-muted-foreground mt-2">
                  {v}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="container-prose py-24 md:py-32">
        <Reveal className="grid lg:grid-cols-12 gap-12 mb-16">
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
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {differentials.slice(0, 4).map((d, i) => (
            <Reveal key={d.title} delay={i * 0.08}>
              <SpotlightCard className="h-full">
                <motion.div whileHover={{ y: -4 }} className="bg-background p-8 hover:bg-muted/40 transition-colors h-full">
                  <div className="gold-rule mb-6" />
                  <h3 className="text-[17px] font-medium text-primary mb-3 leading-snug tracking-[-0.01em]">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.description}</p>
                </motion.div>
              </SpotlightCard>
            </Reveal>
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
      <div className="bg-navy-deep border-y border-primary-foreground/10">
        <Marquee
          tone="dark"
          reverse
          items={[
            "Gestão Executiva",
            "Consultoria Condominial",
            "Segurança Patrimonial",
            "Apoio Jurídico",
            "Modernização & Valorização",
            "Prestação de Contas Auditável",
          ]}
        />
      </div>
      <section className="bg-primary text-primary-foreground">
        <div className="container-prose py-24 md:py-32">
          <Reveal className="grid lg:grid-cols-12 gap-12 mb-16">
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
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10">
            {services.slice(0, 8).map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.slug} delay={(i % 4) * 0.06}>
                  <SpotlightCard className="h-full">
                    <motion.div whileHover={{ y: -4 }} className="bg-primary p-8 hover:bg-graphite transition-colors group h-full">
                      <Icon className="text-accent mb-6" size={26} strokeWidth={1.4} />
                      <h3 className="text-[16px] font-medium mb-3 leading-snug tracking-[-0.01em]">{s.title}</h3>
                      <p className="text-sm text-primary-foreground/70 leading-relaxed">
                        {s.short}
                      </p>
                    </motion.div>
                  </SpotlightCard>
                </Reveal>
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
          <Reveal className="lg:col-span-5">
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
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-6 lg:col-start-7">
          <div className="grid grid-cols-2 gap-px bg-border">
            {[
              ["−68%", "Redução de inadimplência"],
              ["+3,2x", "Crescimento do fundo de obras"],
              ["12 meses", "Para estabilização financeira"],
              ["100%", "Prestação de contas auditável"],
            ].map(([k, v]) => (
              <motion.div key={k} whileHover={{ y: -3 }} className="bg-background p-8">
                <p className="font-serif text-3xl text-primary">{k}</p>
                <p className="mono text-xs uppercase tracking-[0.18em] text-muted-foreground mt-2">
                  {v}
                </p>
              </motion.div>
            ))}
            <p className="col-span-2 bg-muted/40 p-4 text-[11px] text-muted-foreground italic">
              * Indicadores ilustrativos representando ordem de grandeza típica de cases reais conduzidos.
            </p>
          </div>
          </Reveal>
        </div>
      </section>

      {/* REGIÕES */}
      <section className="bg-muted/40 border-y border-border">
        <div className="container-prose py-24 md:py-32">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow justify-center mb-6">Regiões de atuação</p>
            <h2 className="display text-primary text-balance">
              Atendimento direcionado e estratégico.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-px bg-border">
            {[
              ["Osasco", "/sindico-profissional-osasco"],
              ["Barueri", "/sindico-profissional-barueri"],
              ["Alphaville", "/sindico-profissional-alphaville"],
              ["Santana de Parnaíba", "/sindico-profissional-santana-de-parnaiba"],
              ["São Paulo", "/sindico-profissional-sao-paulo"],
            ].map(([name, to], i) => (
              <Reveal key={to} delay={i * 0.06}>
                <motion.div whileHover={{ y: -3 }} className="h-full">
                  <Link
                    to={to}
                    className="bg-background p-8 group hover:bg-primary hover:text-primary-foreground transition-colors h-full block"
                  >
                    <p className="mono text-[10px] uppercase tracking-[0.22em] text-accent mb-3">
                      Síndico Profissional
                    </p>
                    <p className="font-serif text-2xl group-hover:text-accent transition-colors">
                      {name}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1 text-xs">
                      Ver página <ArrowUpRight size={12} />
                    </span>
                  </Link>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-prose py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow mb-6">Perguntas frequentes</p>
            <h2 className="display text-primary text-balance">
              Esclarecimentos antes da contratação.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
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
          </Reveal>
        </div>
      </section>

      <Testimonials />

      <CTASection />
    </>
  );
};

export default Index;
