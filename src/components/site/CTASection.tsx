import { waLink } from "@/lib/site";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Marquee } from "./Marquee";

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
  <section className="bg-gradient-navy text-primary-foreground overflow-hidden">
    <div className="container-prose py-24 md:py-32 text-center">
      <motion.p
        initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="eyebrow !text-accent justify-center mb-6">{eyebrow}</motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}
        className="display text-balance max-w-3xl mx-auto mb-6">{title}</motion.h2>
      <motion.p
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }}
        className="lede !text-primary-foreground/70 max-w-2xl mx-auto mb-10">
        {description}
      </motion.p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href={waLink(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-accent text-accent-foreground px-8 py-4 text-sm tracking-wide hover:bg-gold-soft transition-colors"
        >
          Falar pelo WhatsApp
        </a>
        <Link
          to="/contato"
          className="inline-flex items-center border border-primary-foreground/30 text-primary-foreground px-8 py-4 text-sm tracking-wide hover:border-accent hover:text-accent transition-colors"
        >
          Solicitar avaliação
        </Link>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10 py-6">
      <Marquee
        items={[
          "Síndico 5 Estrelas",
          "Certificação Vanzolini · USP",
          "20+ anos de experiência",
          "RC R$ 1.000.000,00",
          "Sem honorários extras em assembleias",
          "Presença real no condomínio",
        ].map((t) => (
          <span className="font-serif text-2xl md:text-3xl text-primary-foreground/80">{t}</span>
        ))}
      />
    </div>
  </section>
);