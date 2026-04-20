export const SITE = {
  name: "Ricardo Princiotto",
  role: "Síndico Profissional",
  whatsappNumber: "5511947534900",
  whatsappDisplay: "+55 (11) 94753-4900",
  email: "contato@ricardoprinciotto.com.br",
  baseUrl: "https://ricardoprinciotto.com.br",
  regions: ["Osasco", "Barueri", "Alphaville", "Santana de Parnaíba", "São Paulo"],
};

export const waLink = (msg?: string) => {
  const text = encodeURIComponent(
    msg ?? "Olá Ricardo, gostaria de conversar sobre a gestão profissional do meu condomínio."
  );
  return `https://wa.me/${SITE.whatsappNumber}?text=${text}`;
};