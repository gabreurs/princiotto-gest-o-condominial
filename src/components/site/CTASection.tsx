import { waLink } from "@/lib/site";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Marquee } from "./Marquee";
import { ArrowUpRight } from "lucide-react";

interface Props {
  eyebrow?: string;
  title?: string;
  description?: string;
  waMessage?: string;
}

export const CTASection = ({
  eyebrow = "Próximo passo",
  title = "Quero uma gestão profissional para meu condomínio",
  description = "Conversamos sem compromisso para entender o cenário do seu condomínio e como uma sindicatura profissional pode trazer ordem, transparência e resultado.",
  waMessage,
}: Props) => (
  <section className="relative overflow-hidden bg-primary text-primary-foreground">
    <div className="absolute inset-0 noise opacity-40" aria-hidden />
    <div className="container-prose relative py-24 md:py-28 text-center">
      <motion.p
        initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="eyebrow !text-accent justify-center mb-6">{eyebrow}</motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}
        className="display text-balance max-w-3xl mx-auto mb-6 !text-primary-foreground">{title}</motion.h2>
      <motion.p
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }}
        className="lede !text-primary-foreground/70 max-w-2xl mx-auto mb-10">
        {description}
      </motion.p>
      <div className="flex flex-wrap gap-3 justify-center">
        <motion.a
          whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}
          href={waLink(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground pl-6 pr-2 py-2 text-[14px] hover:bg-gold-soft transition-colors"
        >
          Falar pelo WhatsApp
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:translate-x-0.5">
            <ArrowUpRight size={15} />
          </span>
        </motion.a>
        <Link
          to="/contato"
          className="inline-flex items-center rounded-full border border-primary-foreground/25 text-primary-foreground px-5 py-2.5 text-[14px] hover:border-primary-foreground/60 transition-colors"
        >
          Solicitar avaliação
        </Link>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <Marquee
        tone="dark"
        items={[
          "Síndico 5 Estrelas",
          "Certificação Vanzolini · USP",
          "20+ anos de experiência",
          "RC R$ 1.000.000,00",
          "Sem honorários extras em assembleias",
          "Presença real no condomínio",
        ]}
      />
    </div>
  </section>
);