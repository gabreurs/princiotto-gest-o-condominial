import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { Marquee } from "@/components/site/Marquee";
import { motion } from "framer-motion";
import { differentials } from "@/data/services";
import securityImg from "@/assets/security.jpg";
import lobbyImg from "@/assets/lobby.jpg";
import meetingImg from "@/assets/meeting.jpg";
import aerialImg from "@/assets/aerial.jpg";

const Diferenciais = () => (
  <>
    <Seo
      title="Diferenciais de Ricardo Princiotto"
      description="Conheça os diferenciais que tornam a sindicatura profissional de Ricardo Princiotto referência: experiência, certificação, presença real, transparência e cobertura formal."
      path="/diferenciais"
    />
    <PageHero
      eyebrow="Diferenciais"
      title="O que distingue uma sindicatura profissional de excelência."
      lede="Diferenciais reais não cabem em bullets soltos. Cada um deles é uma escolha de método, postura e responsabilidade — e é assim que devem ser entendidos."
      breadcrumb={[{ label: "Início", to: "/" }, { label: "Diferenciais" }]}
      image={securityImg}
      imageAlt="Entrada segura de condomínio de alto padrão"
    />

    <Marquee items={["Método", "Presença real", "Transparência integral", "Vanzolini · USP", "RC R$ 1.000.000", "Sem honorários extras"]} />

    {/* Galeria visual */}
    <section className="container-prose pt-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border" data-fx="stagger">
        {[lobbyImg, meetingImg, securityImg, aerialImg].map((img, i) => (
          <div key={i} data-fx="hover-lift" className="relative aspect-square overflow-hidden bg-muted">
            <img
              src={img}
              alt="Gestão condominial"
              data-fx="parallax"
              className="absolute inset-0 w-full h-full object-cover will-change-transform"
              loading="lazy"
              width={1200}
              height={1200}
            />
          </div>
        ))}
      </div>
    </section>

    <section className="container-prose py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16" data-fx="stagger">
        {differentials.map((d, i) => (
          <Reveal key={d.title} delay={(i % 2) * 0.1}>
            <motion.article whileHover={{ y: -3 }} className="group">
              <p className="mono text-xl text-accent/70 mb-3">{`0${i + 1}`.slice(-2)}</p>
              <div className="gold-rule mb-6" />
              <h2 className="font-serif text-2xl md:text-3xl text-primary leading-snug mb-4">
                {d.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{d.description}</p>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>

    <CTASection
      eyebrow="Vamos conversar"
      title="Esses diferenciais fazem sentido para o seu condomínio?"
    />
  </>
);

export default Diferenciais;