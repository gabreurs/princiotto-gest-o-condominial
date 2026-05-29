import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { Marquee } from "@/components/site/Marquee";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { waLink } from "@/lib/site";
import { Check, ArrowUpRight } from "lucide-react";
import condoTower from "@/assets/condo-tower.jpg";
import lobbyImg from "@/assets/lobby.jpg";
import meetingImg from "@/assets/meeting.jpg";
import securityImg from "@/assets/security.jpg";
import aerialImg from "@/assets/aerial.jpg";
import regionsImg from "@/assets/regions.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const serviceImages = [condoTower, lobbyImg, meetingImg, securityImg, aerialImg, regionsImg, heroBg, condoTower];

const Servicos = () => (
  <>
    <Seo
      title="Serviços de Sindicatura Profissional"
      description="Conheça os serviços de Ricardo Princiotto: síndico profissional, consultoria condominial, gestão administrativa, segurança, apoio jurídico e valorização patrimonial."
      path="/servicos"
    />
    <PageHero
      eyebrow="Serviços"
      title="Sindicatura profissional, consultoria e gestão executiva integral."
      lede="Cada serviço foi estruturado para entregar técnica, presença e governança ao seu condomínio — com escopo claro e responsabilidade contratual."
      breadcrumb={[{ label: "Início", to: "/" }, { label: "Serviços" }]}
      image={condoTower}
      imageAlt="Torres residenciais de alto padrão ao entardecer"
    />

    <Marquee items={["Sindicatura Profissional", "Consultoria", "Gestão Executiva", "Apoio Jurídico", "Segurança Patrimonial", "Modernização"]} />

    <section className="container-prose py-20 md:py-28 space-y-px bg-border">
      {services.map((s, i) => {
        const Icon = s.icon;
        const reverse = i % 2 === 1;
        const img = serviceImages[i % serviceImages.length];
        return (
          <Reveal key={s.slug}>
            <motion.article
              whileHover={{ y: -2 }}
              className={`bg-background p-10 md:p-14 grid lg:grid-cols-12 gap-10 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="lg:col-span-5" data-fx="reveal">
                <Icon size={32} className="text-accent mb-6" strokeWidth={1.3} />
                <p className="eyebrow mb-4">{`0${i + 1}`.slice(-2)} · Serviço</p>
                <h2 className="font-serif text-3xl md:text-4xl text-primary leading-tight">
                  {s.title}
                </h2>
                <div className="mt-8 relative aspect-[4/3] overflow-hidden rounded-[4px] bg-muted">
                  <img
                    src={img}
                    alt={s.title}
                    data-fx="parallax"
                    className="absolute inset-0 w-full h-full object-cover will-change-transform"
                    loading="lazy"
                    width={1600}
                    height={1000}
                  />
                </div>
              </div>
              <div className="lg:col-span-7 space-y-6" data-fx="reveal">
                <p className="lede">{s.description}</p>
                <ul className="space-y-3">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-primary">
                      <Check size={18} className="text-accent shrink-0 mt-0.5" strokeWidth={1.6} />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(`Olá Ricardo, gostaria de saber mais sobre ${s.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-fx="hover-lift"
                  className="inline-flex items-center gap-2 text-sm text-primary border-b border-accent pb-1 hover:text-accent transition-colors"
                >
                  Falar sobre {s.title} <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.article>
          </Reveal>
        );
      })}
    </section>

    <CTASection
      eyebrow="Próximo passo"
      title="Qual desses serviços faz sentido para o seu condomínio?"
    />
  </>
);

export default Servicos;