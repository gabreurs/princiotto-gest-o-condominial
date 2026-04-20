import { useState } from "react";
import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { motion } from "framer-motion";
import { SITE, waLink } from "@/lib/site";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

const Contato = () => {
  const [form, setForm] = useState({ nome: "", condominio: "", regiao: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá Ricardo, sou ${form.nome}. Condomínio: ${form.condominio}. Região: ${form.regiao}.\n\n${form.mensagem}`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
    toast.success("Redirecionando para o WhatsApp…");
  };

  return (
    <>
      <Seo
        title="Contato — Solicitar Proposta de Sindicatura"
        description="Entre em contato com Ricardo Princiotto pelo WhatsApp ou formulário. Resposta rápida e proposta personalizada para o seu condomínio."
        path="/contato"
      />
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre o seu condomínio."
        lede="WhatsApp é o canal mais rápido. O formulário abaixo redireciona diretamente para uma conversa estruturada."
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Contato" }]}
      />

      <section className="container-prose py-20 md:py-28 grid lg:grid-cols-12 gap-16">
        <Reveal className="lg:col-span-5 space-y-10">
          <div>
            <p className="eyebrow mb-4">Canal preferencial</p>
            <h2 className="font-serif text-3xl text-primary mb-4">WhatsApp</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Resposta rápida, conversa direta. Ideal para esclarecer dúvidas iniciais
              e agendar uma visita técnica ao condomínio.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 text-sm hover:bg-navy-deep transition-colors"
            >
              {SITE.whatsappDisplay} <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="hairline" />

          <ul className="space-y-5 text-sm">
            <li className="flex gap-3">
              <Phone size={18} className="text-accent shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Telefone</p>
                <p className="text-primary">{SITE.whatsappDisplay}</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-accent shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">E-mail</p>
                <a href={`mailto:${SITE.email}`} className="text-primary hover:text-accent">{SITE.email}</a>
              </div>
            </li>
            <li className="flex gap-3">
              <MapPin size={18} className="text-accent shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Atendimento</p>
                <p className="text-primary">Osasco · Barueri · Alphaville · Santana de Parnaíba · São Paulo</p>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.1}>
          <motion.form
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="bg-muted/40 p-10 md:p-12 border border-border space-y-6"
          >
          <div>
            <p className="eyebrow mb-4">Solicitar proposta</p>
            <h2 className="font-serif text-3xl text-primary">Conte sobre o seu condomínio.</h2>
          </div>

          {[
            { name: "nome", label: "Seu nome", type: "text", required: true },
            { name: "condominio", label: "Nome do condomínio", type: "text", required: true },
            { name: "regiao", label: "Região / cidade", type: "text", required: true },
          ].map((f) => (
            <div key={f.name}>
              <label className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
                {f.label}
              </label>
              <input
                type={f.type}
                required={f.required}
                value={form[f.name as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                className="w-full bg-background border border-border px-4 py-3 text-sm text-primary focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          ))}

          <div>
            <label className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
              Mensagem
            </label>
            <textarea
              rows={5}
              required
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              className="w-full bg-background border border-border px-4 py-3 text-sm text-primary focus:outline-none focus:border-accent transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground px-6 py-4 text-sm tracking-wide hover:bg-navy-deep transition-colors"
          >
            Enviar e abrir conversa no WhatsApp
          </button>

          <p className="text-[11px] text-muted-foreground text-center">
            Ao enviar, você será direcionado para uma conversa pré-formatada no WhatsApp.
          </p>
          </motion.form>
        </Reveal>
      </section>
    </>
  );
};

export default Contato;