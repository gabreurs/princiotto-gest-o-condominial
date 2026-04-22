export const SITE = {
  name: "Ricardo Princiotto",
  role: "Síndico Profissional",
  whatsappNumber: "5511989298878",
  whatsappDisplay: "+55 (11) 98929-8878",
  email: "contato@ricardoprinciotto.com.br",
  baseUrl: "https://ricardoprinciotto.com.br",
  regions: ["Osasco", "Barueri", "Alphaville", "Santana de Parnaíba", "São Paulo"],
  credentials: ["Bel. em Direito pela PUC/SP", "Especialista em segurança patrimonial e pessoal"],
  socials: {
    instagram: "https://www.instagram.com/ricardoprinciotto/",
    facebook: "https://www.facebook.com/ricardoprinciotto/",
  },
};

export const waLink = (msg?: string) => {
  const text = encodeURIComponent(
    msg ?? "Olá Ricardo, gostaria de conversar sobre a gestão profissional do meu condomínio."
  );
  return `https://wa.me/${SITE.whatsappNumber}?text=${text}`;
};