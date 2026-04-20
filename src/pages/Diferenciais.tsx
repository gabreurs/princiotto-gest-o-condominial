import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { Marquee } from "@/components/site/Marquee";
import { motion } from "framer-motion";
import { differentials } from "@/data/services";

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
    />

    <Marquee items={["Método", "Presença real", "Transparência integral", "Vanzolini · USP", "RC R$ 1.000.000", "Sem honorários extras"]} />

    <section className="container-prose py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16">
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