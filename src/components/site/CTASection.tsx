import { waLink } from "@/lib/site";
import { Link } from "react-router-dom";

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
  <section className="bg-gradient-navy text-primary-foreground">
    <div className="container-prose py-24 md:py-32 text-center">
      <p className="eyebrow !text-accent justify-center mb-6">{eyebrow}</p>
      <h2 className="display text-balance max-w-3xl mx-auto mb-6">{title}</h2>
      <p className="lede !text-primary-foreground/70 max-w-2xl mx-auto mb-10">
        {description}
      </p>
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
  </section>
);