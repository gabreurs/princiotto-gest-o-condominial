import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { Marquee } from "@/components/site/Marquee";
import { motion } from "framer-motion";
import meetingImg from "@/assets/meeting.jpg";
import condoTower from "@/assets/condo-tower.jpg";
import lobbyImg from "@/assets/lobby.jpg";

const Cases = () => (
  <>
    <Seo
      title="Cases e Resultados em Gestão Condominial"
      description="Storytelling de cases reais de recuperação financeira, organização operacional e valorização patrimonial conduzidos por Ricardo Princiotto."
      path="/cases"
    />
    <PageHero
      eyebrow="Cases & Resultados"
      title="Gestão profissional, traduzida em resultados sustentáveis."
      lede="Os números a seguir representam a ordem de grandeza típica de cases conduzidos. Servem para ilustrar o impacto real de uma gestão profissional bem aplicada."
      breadcrumb={[{ label: "Início", to: "/" }, { label: "Cases" }]}
      image={condoTower}
      imageAlt="Condomínio recuperado financeiramente"
    />

    <Marquee items={["Recuperação financeira", "Fundo de obras", "Inadimplência -68%", "Plano plurianual", "Manutenção preventiva", "Prestação de contas auditável"]} />

    <section className="container-prose py-20 md:py-28">
      <div className="grid md:grid-cols-3 gap-px bg-border mb-20" data-fx="stagger">
        {[meetingImg, condoTower, lobbyImg].map((img, i) => (
          <div key={i} data-fx="hover-lift" className="relative aspect-[4/3] overflow-hidden bg-muted">
            <img
              src={img}
              alt="Gestão condominial profissional"
              data-fx="parallax"
              className="absolute inset-0 w-full h-full object-cover will-change-transform"
              loading="lazy"
              width={1600}
              height={1000}
            />
          </div>
        ))}
      </div>
      <article className="grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow mb-6">Case em destaque</p>
          <h2 className="display text-primary text-balance">
            Recuperação financeira de um condomínio em desequilíbrio.
          </h2>
          <p className="lede mt-6">
            Um condomínio residencial de médio porte, marcado por anos de gestão amadora,
            chegou ao limite: inadimplência elevada, fundo de obras esvaziado e
            manutenção apenas reativa. A reversão desse cenário foi possível com método,
            disciplina e presença.
          </p>
        </Reveal>

        <div className="lg:col-span-7 space-y-12">
          {[
            {
              eyebrow: "Contexto",
              title: "Um condomínio sem direção financeira",
              text: "Reservas operacionais comprometidas, baixa previsibilidade orçamentária, contratos defasados com prestadores e ausência de plano plurianual. O conselho atuava sob pressão constante, sem ferramentas de gestão.",
            },
            {
              eyebrow: "Diagnóstico",
              title: "O que estava por trás dos números",
              text: "Inadimplência crônica sem política clara de cobrança; ausência de orçamento anual estruturado; contratos sem auditoria; manutenção apenas corretiva; comunicação inconsistente com moradores.",
            },
            {
              eyebrow: "Ações",
              title: "Plano executivo de reorganização",
              text: "Implantação de política formal de cobrança em parceria jurídica; estruturação de orçamento anual com revisão trimestral; renegociação de contratos estratégicos; criação de calendário de manutenção preventiva; rotina de prestação de contas mensal e comunicação periódica formalizada.",
            },
            {
              eyebrow: "Resultados",
              title: "Equilíbrio, reserva e estabilidade",
              text: "Em até doze meses, o condomínio voltou a operar com previsibilidade orçamentária, fortaleceu seu fundo de obras, reduziu drasticamente a inadimplência e passou a executar manutenção preventiva regular. Mais do que números — recuperou a confiança dos moradores na gestão.",
            },
          ].map((b, i) => (
            <Reveal key={b.eyebrow} delay={i * 0.08}>
              <div className="border-l-2 border-accent pl-6">
                <p className="mono text-[10px] uppercase tracking-[0.22em] text-accent mb-3">
                  {b.eyebrow}
                </p>
                <h3 className="font-serif text-2xl text-primary mb-3 leading-snug">{b.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </article>

      <div className="hairline my-20" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
        {[
          ["−68%", "Redução de inadimplência"],
          ["+3,2x", "Crescimento do fundo de obras"],
          ["12 meses", "Estabilização financeira"],
          ["100%", "Prestação de contas auditável"],
        ].map(([k, v], i) => (
          <Reveal key={k} delay={i * 0.08}>
            <motion.div whileHover={{ y: -3 }} className="bg-background p-10 text-center h-full">
              <p className="font-serif text-4xl md:text-5xl text-primary">{k}</p>
              <div className="gold-rule mx-auto my-4" />
              <p className="mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{v}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-[11px] text-muted-foreground italic text-center">
        * Indicadores ilustrativos representando a ordem de grandeza típica observada em cases reais.
        Resultados variam conforme o cenário inicial de cada condomínio.
      </p>
    </section>

    <CTASection
      eyebrow="Solicite uma avaliação"
      title="Seu condomínio também pode ter um plano de recuperação."
    />
  </>
);

export default Cases;