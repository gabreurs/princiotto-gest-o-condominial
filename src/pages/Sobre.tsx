import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import portrait from "@/assets/portrait-placeholder.jpg";
import { SpinningBadge } from "@/components/site/SpinningBadge";
import { motion } from "framer-motion";
import { Award, ShieldCheck, GraduationCap, Building } from "lucide-react";

const timeline = [
  { year: "2003", title: "Início na sindicatura", desc: "Primeiras gestões em condomínios residenciais da Grande São Paulo." },
  { year: "2010", title: "Atuação executiva", desc: "Consolidação como síndico profissional em condomínios de médio e alto padrão." },
  { year: "2017", title: "Certificação 5 Estrelas", desc: "Validação técnica pela Fundação Vanzolini, ligada à USP." },
  { year: "2020+", title: "Operação multirregional", desc: "Atendimento estruturado em Osasco, Barueri, Alphaville, Santana de Parnaíba e São Paulo." },
];

const Sobre = () => (
  <>
    <Seo
      title="Sobre Ricardo Princiotto — Síndico Profissional"
      description="Síndico profissional com mais de 20 anos de experiência, certificado Síndico 5 Estrelas pela Fundação Vanzolini. Conheça a trajetória, método e visão de gestão condominial."
      path="/sobre"
    />
    <PageHero
      eyebrow="Sobre"
      title="Mais de duas décadas conduzindo condomínios com técnica, ética e presença."
      lede="A sindicatura profissional não é cargo, é função. E exige preparo, dedicação integral e uma postura coerente entre o que se diz e o que se faz."
      breadcrumb={[{ label: "Início", to: "/" }, { label: "Sobre" }]}
    />

    <section className="container-prose py-20 md:py-28 grid lg:grid-cols-12 gap-16">
      <div className="lg:col-span-5">
        <div className="relative sticky top-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] overflow-hidden rounded-[6px] bg-muted shadow-elegant"
          >
            <img
              src={portrait}
              alt="Retrato profissional de Ricardo Princiotto"
              className="h-full w-full object-cover"
              style={{ objectPosition: "50% 12%" }}
              loading="lazy"
              width={896}
              height={1216}
            />
            <div className="absolute left-4 bottom-4 rounded-md bg-background/85 backdrop-blur px-3 py-2">
              <p className="mono text-[9.5px] uppercase tracking-[0.18em] text-muted-foreground">Síndico Profissional</p>
              <p className="text-[14px] text-primary font-medium leading-tight">Ricardo Princiotto</p>
            </div>
            <div className="absolute -right-5 -bottom-5">
              <SpinningBadge text="SÍNDICO 5 ESTRELAS · VANZOLINI USP · " size={104} />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="lg:col-span-7 space-y-8 text-muted-foreground leading-relaxed">
        <p className="eyebrow">A trajetória</p>
        <h2 className="display text-primary text-balance">
          Síndico profissional, não improvisador.
        </h2>
        <p>
          Construí minha carreira em sindicatura ao longo de mais de vinte anos, atuando em condomínios de perfis muito distintos — do edifício residencial de bairro consolidado ao empreendimento de alto padrão em Alphaville. Esse percurso me ensinou que cada condomínio é único, mas todos compartilham a mesma necessidade essencial: <strong className="text-primary font-medium">gestão séria, presença real e clareza nas decisões.</strong>
        </p>
        <p>
          Sou <strong className="text-primary font-medium">Bel. em Direito pela PUC/SP</strong>, especialista em segurança patrimonial e pessoal, e certificado <strong className="text-primary font-medium">Síndico 5 Estrelas</strong> pela Fundação Vanzolini, instituição ligada à Escola Politécnica da USP. Mais do que formação e selos, é um compromisso público com padrão técnico, conduta ética e prática profissional.
        </p>
        <p>
          Acredito que sindicatura profissional se faz no condomínio, não no escritório. Por isso, a minha rotina inclui visitas frequentes, leitura direta da operação, contato pessoal com equipe e moradores e prestação de contas que qualquer condômino pode acompanhar. Transparência, para mim, é método — não discurso.
        </p>
        <p>
          Trabalho com cobertura formal de <strong className="text-primary font-medium">Responsabilidade Civil profissional de R$ 1.000.000,00</strong> e mantenho contratos sem honorários extras para assembleias ordinárias, extraordinárias e 13º. Previsibilidade orçamentária e segurança jurídica fazem parte do que ofereço, junto com a gestão.
        </p>

        <div className="hairline my-12" />

        <div className="grid sm:grid-cols-2 gap-8">
          {[
            { Icon: Award, title: "Síndico 5 Estrelas", desc: "Certificação Vanzolini / USP" },
            { Icon: GraduationCap, title: "Bel. em Direito", desc: "Formação pela PUC/SP" },
            { Icon: ShieldCheck, title: "RC R$ 1.000.000", desc: "Cobertura formal de responsabilidade civil" },
            { Icon: Building, title: "Segurança patrimonial", desc: "Especialista em segurança patrimonial e pessoal" },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="border-l-2 border-accent pl-4">
              <Icon size={20} className="text-accent mb-2" strokeWidth={1.4} />
              <p className="font-serif text-lg text-primary">{title}</p>
              <p className="text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Linha do tempo */}
    <section className="bg-muted/40 border-y border-border">
      <div className="container-prose py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow justify-center mb-6">Linha do tempo</p>
          <h2 className="display text-primary text-balance">Marcos de uma carreira em sindicatura.</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-px bg-border">
          {timeline.map((t) => (
            <div key={t.year} className="bg-background p-8">
              <p className="font-serif text-3xl text-accent">{t.year}</p>
              <div className="gold-rule my-4" />
              <p className="font-serif text-lg text-primary mb-2">{t.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTASection
      eyebrow="Conversemos"
      title="Vamos avaliar juntos a gestão do seu condomínio."
      description="Uma conversa breve já é suficiente para entender o cenário e direcionar próximos passos."
    />
  </>
);

export default Sobre;