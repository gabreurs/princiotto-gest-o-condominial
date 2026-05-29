import { Seo } from "./Seo";
import { PageHero } from "./PageHero";
import { CTASection } from "./CTASection";
import { Reveal } from "./Reveal";
import { Marquee } from "./Marquee";
import { motion } from "framer-motion";
import { waLink, SITE } from "@/lib/site";
import { differentials } from "@/data/services";
import { Check, ArrowUpRight } from "lucide-react";
import condoTower from "@/assets/condo-tower.jpg";
import meetingImg from "@/assets/meeting.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface LocalPageData {
  city: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  hero: { eyebrow: string; title: string; lede: string };
  intro: { title: string; paragraphs: string[] };
  whyLocal: { title: string; paragraphs: string[] };
  challenges: { title: string; items: string[] };
  howICanHelp: { title: string; paragraphs: string[] };
  faqs: { q: string; a: string }[];
}

export const LocalPageTemplate = ({ data }: { data: LocalPageData }) => {
  const path = `/${data.slug}`;
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${SITE.name} — Síndico Profissional em ${data.city}`,
    areaServed: { "@type": "City", name: data.city },
    telephone: SITE.whatsappDisplay,
    url: `${SITE.baseUrl}${path}`,
    description: data.metaDescription,
  };

  return (
    <>
      <Seo
        title={data.metaTitle}
        description={data.metaDescription}
        path={path}
        jsonLd={[localBusinessLd, faqJsonLd]}
      />
      <PageHero
        eyebrow={data.hero.eyebrow}
        title={data.hero.title}
        lede={data.hero.lede}
        breadcrumb={[
          { label: "Início", to: "/" },
          { label: "Regiões", to: "/regioes" },
          { label: data.city },
        ]}
        image={condoTower}
        imageAlt={`Condomínio em ${data.city}`}
      />

      <Marquee items={[`Síndico Profissional · ${data.city}`, "Vanzolini · USP", "20+ anos", "RC R$ 1.000.000", "Sem honorários extras", "Presença real"]} />

      <section className="container-prose py-20 md:py-24 grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-7 space-y-6">
          <p className="eyebrow">Contexto local</p>
          <h2 className="display text-primary text-balance">{data.intro.title}</h2>
          {data.intro.paragraphs.map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
          ))}
        </Reveal>
        <Reveal delay={0.12} className="lg:col-span-4 lg:col-start-9 self-start">
          <motion.aside whileHover={{ y: -3 }} className="bg-primary text-primary-foreground p-8">
          <p className="eyebrow !text-accent mb-4">Atendimento</p>
          <p className="font-serif text-2xl mb-4">Síndico Profissional em {data.city}</p>
          <p className="text-sm text-primary-foreground/70 mb-6 leading-relaxed">
            Visitas presenciais, gestão executiva e proposta personalizada para o seu condomínio.
          </p>
          <a
            href={waLink(`Olá Ricardo, sou de ${data.city} e gostaria de uma proposta de sindicatura profissional.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3 text-sm w-full justify-center hover:bg-gold-soft transition-colors"
          >
            Solicitar proposta <ArrowUpRight size={14} />
          </a>
          </motion.aside>
        </Reveal>
      </section>

      <section className="bg-muted/40 border-y border-border">
        <div className="container-prose py-20 md:py-24 grid lg:grid-cols-2 gap-12">
          <Reveal>
            <p className="eyebrow mb-6">Por que síndico profissional</p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary leading-tight mb-6">
              {data.whyLocal.title}
            </h2>
            {data.whyLocal.paragraphs.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
            ))}
          </Reveal>
          <Reveal delay={0.12}>
            <p className="eyebrow mb-6">Desafios típicos</p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary leading-tight mb-6">
              {data.challenges.title}
            </h2>
            <ul className="space-y-4">
              {data.challenges.items.map((c) => (
                <li key={c} className="flex gap-3 text-primary">
                  <Check size={18} className="text-accent shrink-0 mt-1" strokeWidth={1.6} />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Banner paralaxe */}
      <section className="relative h-[40vh] min-h-[280px] overflow-hidden">
        <img
          src={meetingImg}
          alt={`Gestão condominial em ${data.city}`}
          data-fx="parallax-strong"
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
          loading="lazy"
          width={1600}
          height={1000}
        />
        <div className="absolute inset-0 bg-navy-deep/60" />
        <div className="container-prose relative h-full flex items-end pb-10">
          <p data-fx="reveal" className="font-serif text-2xl md:text-4xl text-primary-foreground max-w-2xl text-balance">
            Presença real, método e responsabilidade — também em {data.city}.
          </p>
        </div>
      </section>

      <section className="container-prose py-20 md:py-24 grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow mb-6">Como atuo em {data.city}</p>
          <h2 className="display text-primary text-balance">{data.howICanHelp.title}</h2>
        </Reveal>
        <Reveal delay={0.12} className="lg:col-span-6 lg:col-start-7 space-y-5">
          {data.howICanHelp.paragraphs.map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
          ))}
        </Reveal>
      </section>

      <section className="bg-muted/40 border-y border-border">
        <div className="container-prose py-20 md:py-24">
          <Reveal>
            <p className="eyebrow mb-6">Diferenciais</p>
            <h2 className="display text-primary text-balance mb-12 max-w-2xl">
              O padrão que entrego em {data.city}.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {differentials.slice(0, 4).map((d, i) => (
              <Reveal key={d.title} delay={i * 0.08}>
                <motion.div whileHover={{ y: -3 }} className="bg-background p-8 h-full">
                  <div className="gold-rule mb-4" />
                  <h3 className="font-serif text-lg text-primary mb-3">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.description}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-prose py-20 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-6">FAQ — {data.city}</p>
            <h2 className="display text-primary text-balance">
              Perguntas frequentes da região.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Accordion type="single" collapsible>
              {data.faqs.map((f, i) => (
                <AccordionItem key={i} value={`f-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-serif text-lg text-primary hover:no-underline py-5">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow={`Atendimento em ${data.city}`}
        title={`Vamos conversar sobre o seu condomínio em ${data.city}.`}
        waMessage={`Olá Ricardo, sou de ${data.city} e gostaria de conhecer sua proposta de sindicatura profissional.`}
      />
    </>
  );
};