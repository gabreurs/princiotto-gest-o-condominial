import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    name: "Cláudia M.",
    role: "Conselheira · Cond. residencial · Alphaville",
    initials: "CM",
    quote:
      "Em poucos meses recuperamos a previsibilidade financeira do condomínio. A condução das assembleias passou a ser objetiva, técnica e respeitosa.",
  },
  {
    name: "Roberto S.",
    role: "Síndico anterior · Cond. misto · Barueri",
    initials: "RS",
    quote:
      "A presença real do Ricardo no condomínio mudou o jogo. Não é gestão por planilha — é leitura direta da operação, com decisões fundamentadas.",
  },
  {
    name: "Patrícia L.",
    role: "Conselho fiscal · Cond. residencial · Osasco",
    initials: "PL",
    quote:
      "Prestação de contas auditável, comunicação periódica e zero ruído entre conselho e síndico. É o padrão profissional que o segmento precisa.",
  },
  {
    name: "Eduardo F.",
    role: "Morador · Cond. residencial · Santana de Parnaíba",
    initials: "EF",
    quote:
      "Sentimos a diferença na rotina: portaria mais organizada, manutenções em dia e canais formais de comunicação. Tranquilidade real.",
  },
  {
    name: "Marina A.",
    role: "Conselheira · Cond. alto padrão · São Paulo",
    initials: "MA",
    quote:
      "Discrição, sobriedade e técnica. Ricardo entrega exatamente o que um condomínio sério espera de uma sindicatura profissional.",
  },
  {
    name: "Júlio T.",
    role: "Síndico atual · Cond. residencial · Alphaville",
    initials: "JT",
    quote:
      "A consultoria foi um divisor de águas. Saímos com plano executivo claro, prioridades definidas e governança redesenhada.",
  },
];

export const Testimonials = () => {
  // duplicamos para loop contínuo
  const loop = [...items, ...items];

  return (
    <section className="bg-muted/40 border-y border-border overflow-hidden">
      <div className="container-prose pt-24 md:pt-32 pb-12">
        <Reveal className="grid lg:grid-cols-12 gap-12 mb-14">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6">Quem confia</p>
            <h2 className="display text-balance">
              Depoimentos de quem está dentro do condomínio.
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 lede">
            Conselheiros, síndicos antecessores e moradores descrevendo a experiência
            real de uma sindicatura conduzida com método, presença e transparência.
          </p>
        </Reveal>
      </div>

      {/* faixa em carrossel automático */}
      <div
        className="relative pb-24 md:pb-32"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <motion.div
          className="flex gap-6 will-change-transform"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 70, ease: "linear", repeat: Infinity }}
        >
          {loop.map((t, i) => (
            <article
              key={i}
              className="shrink-0 w-[340px] md:w-[420px] bg-background border border-border rounded-[10px] p-7 shadow-soft"
            >
              <Quote size={18} className="text-accent mb-4" strokeWidth={1.5} />
              <p className="text-[15px] text-foreground/85 leading-[1.65] mb-7">
                {t.quote}
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <span className="grid place-items-center h-10 w-10 rounded-full bg-primary text-primary-foreground mono text-[11px] tracking-wider">
                  {t.initials}
                </span>
                <div className="leading-tight">
                  <p className="text-[14px] text-primary font-medium">{t.name}</p>
                  <p className="mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground mt-1">
                    {t.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};