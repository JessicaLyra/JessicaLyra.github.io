const contactLinks = {
  pt: "https://wa.me/5511948574216?text=Ol%C3%A1%2C%20Jessica!%20Encontrei%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20entrar%20em%20contato.",
  en: "https://wa.me/5511948574216?text=Hello%2C%20Jessica!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch.",
  plans:
    "https://wa.me/5511948574216?text=Ol%C3%A1%2C%20Jessica!%20Gostaria%20de%20conhecer%20os%20planos%20mensais%20para%20meu%20site.",
};

const navigation = {
  pt: [
    ["Sobre", "#sobre"],
    ["Tecnologias", "#skills"],
    ["Experiência", "#experience"],
    ["Projetos", "#projetos"],
    ["Diferenciais", "#diferenciais"],
    ["Depoimentos", "#depoimentos"],
    ["Contato", "#contato"],
  ],
  en: [
    ["About", "#about"],
    ["Tech Stack", "#skills"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Highlights", "#highlights"],
    ["Contact", "#contact"],
  ],
  plans: [
    ["Planos mensais", "#planos"],
    ["Como funciona", "#como-funciona"],
    ["Dúvidas", "#faq"],
  ],
};

export default function SiteHeader({ language = "pt", plansPage = false }) {
  const variant = plansPage ? "plans" : language;
  const ctaText = {
    pt: "Falar com a Jessica Lyra",
    en: "Contact Jessica Lyra",
    plans: "Falar com a Jessica",
  }[variant];
  const contactUrl = contactLinks[variant];

  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo" aria-label="Jessica Lyra - início">
          Jessica <span>Lyra</span>
        </a>

        <nav
          className="menu"
          aria-label={
            language === "en" ? "Main navigation" : "Navegação principal"
          }
        >
          {navigation[variant].map(([label, href]) => (
            <a
              href={href}
              key={href}
              aria-current={
                plansPage && href === "#planos" ? "page" : undefined
              }
            >
              {label}
            </a>
          ))}
        </nav>

        {!plansPage && (
          <div className="language-switcher" aria-label="Language selector">
            <a
              href="/"
              className={`lang-link${language === "pt" ? " active" : ""}`}
              aria-current={language === "pt" ? "page" : undefined}
              aria-label="Português"
            >
              <span className="fi fi-br" />
            </a>
            <a
              href="/en/"
              className={`lang-link${language === "en" ? " active" : ""}`}
              aria-current={language === "en" ? "page" : undefined}
              aria-label="English"
            >
              <span className="fi fi-us" />
            </a>
          </div>
        )}

        <a
          href={contactUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-header btn-whatsapp"
        >
          <i className="fab fa-whatsapp" aria-hidden="true" /> {ctaText}
        </a>
      </div>
    </header>
  );
}
