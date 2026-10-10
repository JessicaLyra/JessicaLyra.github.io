export function PlansHeroSection() {
  return (
    <section className="plans-hero">
      <div className="container plans-hero-grid">
        <div className="plans-hero-content reveal">
          <span className="hero-badge">
            <i className="fa-solid fa-shield-halved" /> Cuidado contínuo para o
            seu site
          </span>
          <h1>
            Seu site seguro, atualizado e{" "}
            <span>funcionando todos os dias.</span>
          </h1>
          <p>
            Você cuida do seu negócio. Eu acompanho a parte técnica, faço
            ajustes e ajudo seu site a continuar rápido, confiável e pronto para
            receber clientes.
          </p>
          <div className="hero-buttons">
            <a href="#planos" className="btn-primary">
              Conhecer os planos
            </a>
            <a
              href="https://wa.me/5511948574216?text=Olá,%20Jessica!%20Quero%20uma%20indicação%20do%20melhor%20plano%20mensal%20para%20meu%20site."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <i className="fab fa-whatsapp" /> Quero uma indicação
            </a>
          </div>
          <div className="plans-trust">
            <span>
              <i className="fa-solid fa-circle-check" /> Atendimento direto
            </span>
            <span>
              <i className="fa-solid fa-circle-check" /> Sem surpresas no valor
            </span>
            <span>
              <i className="fa-solid fa-circle-check" /> Relatório mensal
            </span>
          </div>
        </div>
        <aside
          className="plans-hero-panel reveal"
          aria-label="Benefícios da manutenção mensal"
        >
          <span className="panel-label">Por que manter?</span>
          <div className="panel-item">
            <i className="fa-solid fa-rotate" />
            <div>
              <strong>Atualizações cuidadosas</strong>
              <small>WordPress, tema e plugins acompanhados.</small>
            </div>
          </div>
          <div className="panel-item">
            <i className="fa-solid fa-lock" />
            <div>
              <strong>Mais segurança</strong>
              <small>Verificações preventivas e backups.</small>
            </div>
          </div>
          <div className="panel-item">
            <i className="fa-solid fa-gauge-high" />
            <div>
              <strong>Site saudável</strong>
              <small>Monitoramento técnico e correções pontuais.</small>
            </div>
          </div>
          <div className="panel-item">
            <i className="fa-solid fa-headset" />
            <div>
              <strong>Suporte de confiança</strong>
              <small>Você sabe com quem falar quando precisar.</small>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export function PricingSection() {
  return (
    <section id="planos" className="pricing-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">
            <i className="fa-solid fa-layer-group" /> Planos mensais
          </span>
          <h2>Escolha o cuidado ideal para o seu site</h2>
          <p>
            Todos os planos têm acompanhamento profissional e um escopo
            transparente.
          </p>
        </div>
        <div className="pricing-grid">
          <article className="pricing-card reveal">
            <div className="pricing-card-top">
              <span className="plan-icon">
                <i className="fa-solid fa-leaf" />
              </span>
              <h3>Essencial</h3>
              <p>
                Para sites pequenos que precisam de prevenção e suporte básico.
              </p>
              <div className="price">
                <sup>R$</sup>
                <strong>297</strong>
                <span>/mês</span>
              </div>
            </div>
            <ul className="plan-features">
              <li>
                <i className="fa-solid fa-check" /> Atualização de WordPress,
                tema e plugins
              </li>
              <li>
                <i className="fa-solid fa-check" /> Backup mensal antes das
                atualizações
              </li>
              <li>
                <i className="fa-solid fa-check" /> Verificação de segurança e
                funcionamento
              </li>
              <li>
                <i className="fa-solid fa-check" /> 1 solicitação mensal de
                pequenas alterações
              </li>
              <li>
                <i className="fa-solid fa-check" /> Relatório mensal
                simplificado
              </li>
              <li>
                <i className="fa-solid fa-check" /> Atendimento em até 3 dias
                úteis
              </li>
            </ul>
            <a
              href="https://wa.me/5511948574216?text=Olá,%20Jessica!%20Tenho%20interesse%20no%20plano%20Essencial%20de%20R$%20297%20por%20mês."
              target="_blank"
              rel="noopener noreferrer"
              className="plan-button"
            >
              Quero o Essencial <i className="fab fa-whatsapp" />
            </a>
          </article>
          <article className="pricing-card featured reveal">
            <span className="popular-badge">Mais recomendado</span>
            <div className="pricing-card-top">
              <span className="plan-icon">
                <i className="fa-solid fa-rocket" />
              </span>
              <h3>Profissional</h3>
              <p>
                Para empresas que usam o site para apresentar e gerar negócios.
              </p>
              <div className="price">
                <sup>R$</sup>
                <strong>497</strong>
                <span>/mês</span>
              </div>
            </div>
            <ul className="plan-features">
              <li>
                <i className="fa-solid fa-check" /> Tudo do plano Essencial
              </li>
              <li>
                <i className="fa-solid fa-check" /> Backup quinzenal
              </li>
              <li>
                <i className="fa-solid fa-check" /> Até 3 solicitações mensais
                de alterações
              </li>
              <li>
                <i className="fa-solid fa-check" /> Revisão básica de desempenho
              </li>
              <li>
                <i className="fa-solid fa-check" /> Verificação de formulários e
                links
              </li>
              <li>
                <i className="fa-solid fa-check" /> Atendimento em até 2 dias
                úteis
              </li>
            </ul>
            <a
              href="https://wa.me/5511948574216?text=Olá,%20Jessica!%20Tenho%20interesse%20no%20plano%20Profissional%20de%20R$%20497%20por%20mês."
              target="_blank"
              rel="noopener noreferrer"
              className="plan-button"
            >
              Quero o Profissional <i className="fab fa-whatsapp" />
            </a>
          </article>
          <article className="pricing-card reveal">
            <div className="pricing-card-top">
              <span className="plan-icon">
                <i className="fa-solid fa-chart-line" />
              </span>
              <h3>Evolução</h3>
              <p>
                Para sites que recebem melhorias frequentes e acompanham o
                negócio.
              </p>
              <div className="price">
                <sup>R$</sup>
                <strong>797</strong>
                <span>/mês</span>
              </div>
            </div>
            <ul className="plan-features">
              <li>
                <i className="fa-solid fa-check" /> Tudo do plano Profissional
              </li>
              <li>
                <i className="fa-solid fa-check" /> Backup semanal
              </li>
              <li>
                <i className="fa-solid fa-check" /> Até 6 solicitações mensais
                de alterações e melhorias
              </li>
              <li>
                <i className="fa-solid fa-check" /> Criação ou evolução de
                seções e páginas
              </li>
              <li>
                <i className="fa-solid fa-check" /> Acompanhamento de
                performance e SEO técnico básico
              </li>
              <li>
                <i className="fa-solid fa-check" /> Atendimento prioritário em
                até 1 dia útil
              </li>
            </ul>
            <a
              href="https://wa.me/5511948574216?text=Olá,%20Jessica!%20Tenho%20interesse%20no%20plano%20Evolução%20de%20R$%20797%20por%20mês."
              target="_blank"
              rel="noopener noreferrer"
              className="plan-button"
            >
              Quero o Evolução <i className="fab fa-whatsapp" />
            </a>
          </article>
        </div>
        <div className="scope-note reveal">
          <i className="fa-solid fa-circle-info" />
          <div>
            <p>
              <strong>Como funcionam as solicitações:</strong> uma solicitação
              corresponde a um conjunto de pequenas alterações enviadas de uma
              só vez para uma mesma página, como troca de textos, imagens,
              links, botões ou informações de contato.
            </p>
            <p>
              As solicitações não utilizadas não são acumuladas para o mês
              seguinte. Novas páginas, mudanças completas de layout,
              funcionalidades, integrações, lojas virtuais e serviços maiores
              são avaliados e orçados separadamente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function NewSiteSection() {
  return (
    <section className="new-site-section">
      <div className="container">
        <div className="new-site-card reveal">
          <div className="new-site-icon">
            <i className="fa-solid fa-laptop-code" />
          </div>
          <div className="new-site-content">
            <span className="new-site-label">Ainda não tem um site?</span>
            <h2>Criação, publicação e hospedagem em um só lugar.</h2>
            <p>
              Se você ainda não possui um site ou deseja desenvolver um novo
              projeto, também posso cuidar de todo o processo: planejamento,
              criação, versão responsiva, publicação, configuração da
              hospedagem, domínio e acompanhamento técnico.
            </p>
            <ul className="new-site-features">
              <li>
                <i className="fa-solid fa-check" />
                Sites institucionais e landing pages
              </li>
              <li>
                <i className="fa-solid fa-check" />
                WordPress e Elementor
              </li>
              <li>
                <i className="fa-solid fa-check" />
                Configuração de domínio, SSL e hospedagem
              </li>
              <li>
                <i className="fa-solid fa-check" />
                Layout responsivo e otimizado
              </li>
            </ul>
          </div>
          <div className="new-site-action">
            <span>Projeto personalizado</span>
            <strong>Solicite um orçamento</strong>
            <p>Conte um pouco sobre o site que você precisa.</p>
            <a
              href="https://wa.me/5511948574216?text=Olá,%20Jessica!%20Ainda%20não%20tenho%20um%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento%20para%20criação%20e%20hospedagem."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <i className="fab fa-whatsapp" />
              Falar sobre meu site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section id="como-funciona" className="process-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">
            <i className="fa-solid fa-list-check" /> Como funciona
          </span>
          <h2>Suporte simples, próximo e organizado</h2>
        </div>
        <div className="process-grid">
          <article className="process-card reveal">
            <span>01</span>
            <i className="fa-solid fa-magnifying-glass" />
            <h3>Análise inicial</h3>
            <p>
              Conheço seu site, hospedagem e necessidades para indicar o plano
              adequado.
            </p>
          </article>
          <article className="process-card reveal">
            <span>02</span>
            <i className="fa-solid fa-calendar-check" />
            <h3>Acompanhamento mensal</h3>
            <p>
              Executo as rotinas preventivas e os ajustes solicitados dentro do
              plano.
            </p>
          </article>
          <article className="process-card reveal">
            <span>03</span>
            <i className="fa-solid fa-file-lines" />
            <h3>Relatório e próximos passos</h3>
            <p>
              Você recebe um resumo do que foi feito e recomendações para o
              site.
            </p>
          </article>
        </div>
        <p className="onboarding-note reveal">
          Para sites desenvolvidos por outros profissionais, é feita uma análise
          técnica inicial de <strong>R$ 180</strong>. A taxa não se aplica a
          sites desenvolvidos por Jessica Lyra.
        </p>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="plans-faq">
      <div className="container faq-grid">
        <div className="faq-heading reveal">
          <span className="section-tag">
            <i className="fa-solid fa-circle-question" /> Dúvidas frequentes
          </span>
          <h2>Antes de contratar</h2>
          <p>
            Se ainda tiver alguma dúvida, fale comigo e eu avalio o seu site.
          </p>
          <a
            href="https://wa.me/5511948574216?text=Olá,%20Jessica!%20Tenho%20uma%20dúvida%20sobre%20os%20planos%20mensais."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <i className="fab fa-whatsapp" /> Tirar uma dúvida
          </a>
        </div>
        <div className="faq-list">
          <details className="reveal">
            <summary>As horas não utilizadas acumulam?</summary>
            <p>
              Não. As horas são reservadas para cada mês e não são transferidas,
              o que permite manter a agenda e os prazos de atendimento
              organizados.
            </p>
          </details>
          <details className="reveal">
            <summary>O plano inclui hospedagem e domínio?</summary>
            <p>
              Não. Esses serviços são contratados e pagos pelo cliente. Ajustes
              relacionados à hospedagem são realizados diretamente no servidor,
              desde que os acessos necessários sejam disponibilizados.
            </p>
          </details>
          <details className="reveal">
            <summary>Posso pedir qualquer alteração?</summary>
            <p>
              Pequenos ajustes, trocas de textos, imagens e melhorias cabem nas
              horas do plano. Novas páginas completas, integrações ou
              funcionalidades maiores são avaliadas e orçadas separadamente.
            </p>
          </details>
          <details className="reveal">
            <summary>Existe fidelidade?</summary>
            <p>
              Não há fidelidade. O cancelamento pode ser solicitado com 30 dias
              de antecedência. Assim, o acompanhamento permanece previsível para
              os dois lados.
            </p>
          </details>
          <details className="reveal">
            <summary>
              Meu site foi criado por outra pessoa. Posso contratar?
            </summary>
            <p>
              Sim. Primeiro realizo uma análise técnica para conhecer a
              estrutura, identificar riscos e começar o acompanhamento com
              segurança.
            </p>
          </details>
          <details className="reveal">
            <summary>As horas incluem atendimento urgente?</summary>
            <p>
              Os prazos variam conforme o plano. Situações críticas são
              avaliadas assim que recebidas, mas atendimentos fora do horário
              comercial ou emergências extensas podem ter orçamento separado.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}

export function PlanContactSection() {
  return (
    <section className="contact plans-contact">
      <div className="contact-box reveal">
        <span className="contact-eyebrow">Ainda não sabe qual escolher?</span>
        <h2>Eu indico o plano certo para o momento do seu site.</h2>
        <p>
          Me conte brevemente o que você precisa. Eu analiso o cenário e
          respondo com uma recomendação clara, sem compromisso.
        </p>
        <a
          href="https://wa.me/5511948574216?text=Olá,%20Jessica!%20Gostaria%20de%20uma%20avaliação%20para%20escolher%20meu%20plano%20mensal."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          <i className="fab fa-whatsapp" /> Solicitar avaliação
        </a>
      </div>
    </section>
  );
}
