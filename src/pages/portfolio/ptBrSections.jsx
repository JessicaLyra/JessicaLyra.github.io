export function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content reveal">
          <span className="hero-badge">
            <i className="fas fa-briefcase" /> Disponível para oportunidades de
            emprego e projetos
          </span>
          <h1>
            Jessica Lyra Desenvolvedora
            <span>Full Stack</span>
          </h1>
          <p>
            Crio APIs, aplicações web e sites responsivos, transformando ideias
            em soluções digitais seguras, escaláveis e de alta performance.
          </p>
          <div className="hero-buttons">
            <a
              href="https://wa.me/5511948574216?text=Olá,%20Jessica!%20Encontrei%20seu%20portfólio%20e%20gostaria%20de%20entrar%20em%20contato."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-whatsapp"
            >
              <i className="fab fa-whatsapp" /> Quero falar com a Jessica Lyra
            </a>
            <a href="#projetos" className="btn-secondary">
              Ver projetos
            </a>
          </div>
          <div className="hero-numbers">
            <div className="number-card">
              <h3>200+</h3>
              <p>Projetos</p>
            </div>
            <div className="number-card">
              <h3>30+</h3>
              <p>Clientes</p>
            </div>
            <div className="number-card">
              <h3>5+</h3>
              <p>Anos</p>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="/assets/img/Jessica Lyra- Desenvolvedora Fullstack.jpg"
            alt="Jessica Lyra"
          />
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="sobre" className="about">
      <div className="container about-grid">
        <div className="about-image reveal">
          <img src="/assets/img/sobre.jpg" alt="Jessica Lyra" />
        </div>
        <div className="about-content reveal">
          <span className="section-tag ">
            <i className="fa-solid fa-user" /> Sobre Mim
          </span>
          <h2>Transformando ideias em experiências digitais.</h2>
          <p>
            Sou desenvolvedora web com experiência na criação de soluções
            digitais, atuando no desenvolvimento de sites institucionais,
            landing pages, lojas virtuais e aplicações web personalizadas.
          </p>
          <p>
            Possuo experiência sólida com WordPress, incluindo desenvolvimento e
            customização de temas e plugins, criação de campos personalizados
            com ACF, integrações via APIs REST, otimização de performance,
            manutenção, migração de sites, configurações de hospedagem,
            servidores e DNS.
          </p>
          <p>
            Também desenvolvo aplicações web utilizando tecnologias como PHP,
            JavaScript, React, Next.js, Node.js, TypeScript, Tailwind CSS, Java
            (Spring Boot), PostgreSQL, MySQL e Git/GitHub, criando soluções
            modernas, responsivas e orientadas a boas práticas de
            desenvolvimento.
          </p>
        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">
            <i className="fa-solid fa-laptop-code" /> Tecnologias
          </span>
          <h2>Minha Stack</h2>
        </div>
        <div className="skills-grid">
          {/* Front-end */}
          <div className="skill-card reveal">
            <i className="devicon-javascript-plain " /> JavaScript
          </div>
          <div className="skill-card reveal">
            <i className="devicon-react-original " /> React
          </div>
          <div className="skill-card reveal">
            <i className="devicon-nextjs-plain  " /> Next.js
          </div>
          <div className="skill-card reveal">
            <i className="devicon-tailwindcss-original " /> Tailwind CSS
          </div>
          <div className="skill-card reveal">
            <i className="devicon-bootstrap-plain " /> Bootstrap
          </div>
          <div className="skill-card reveal">
            <i className="devicon-materialui-plain " /> Material UI
          </div>
          {/* Back-end */}
          <div className="skill-card reveal">
            <i className="devicon-java-plain " /> Java
          </div>
          <div className="skill-card reveal">
            <i className="devicon-spring-original " /> Spring Boot
          </div>
          <div className="skill-card reveal">
            <i className="devicon-nodejs-plain " /> Node.js
          </div>
          <div className="skill-card reveal">
            <i className="devicon-php-plain " /> PHP
          </div>
          {/* Banco de Dados */}
          <div className="skill-card reveal">
            <i className="devicon-postgresql-plain " /> PostgreSQL
          </div>
          <div className="skill-card reveal">
            <i className="devicon-mysql-plain " /> MySQL
          </div>
          <div className="skill-card reveal">
            <i className="devicon-sqlite-plain " /> SQLite
          </div>
          <div className="skill-card reveal">
            <i className="devicon-prisma-plain " /> Prisma ORM
          </div>
          {/* Ferramentas */}
          <div className="skill-card reveal">
            <i className="devicon-git-plain " /> Git
          </div>
          <div className="skill-card reveal">
            <i className="devicon-github-original " /> GitHub
          </div>
          <div className="skill-card reveal">
            <i className="devicon-github-original " /> GitHub Copilot
          </div>
          <div className="skill-card reveal">
            <i className="devicon-postman-plain " /> Postman
          </div>
          <div className="skill-card reveal">
            <i className="devicon-vercel-plain " /> Vercel
          </div>
          {/* CMS */}
          <div className="skill-card reveal">
            <i className="devicon-wordpress-plain " /> WordPress
          </div>
          <div className="skill-card reveal">
            <i className="fas fa-puzzle-piece" /> Elementor
          </div>
          <div className="skill-card reveal">
            <i className="fas fa-code" /> ACF
          </div>
          <div className="skill-card reveal">
            <i className="devicon-woocommerce-plain " /> WooCommerce
          </div>
          <div className="skill-card reveal">
            <i className="fas fa-globe" /> Wix
          </div>
          {/* Marketing */}
          <div className="skill-card reveal">
            <i className="fas fa-chart-line" /> RD Station
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section className="timeline-section" id="experience">
      <div className="section-header reveal">
        <span className="section-tag">
          <i className="fa-solid fa-briefcase" /> Experiência Profissional
        </span>
        <h2>Da operação ao desenvolvimento web</h2>
      </div>
      <p>
        Minha trajetória profissional é marcada pela evolução de experiências em
        ambientes operacionais e digitais, até chegar ao desenvolvimento web.
      </p>
      <div className="timeline">
        <div className="timeline-item reveal">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h3>Desenvolvedora Web</h3>
            <span>99 Freelas</span>
            <small>dez de 2020 - atual · 5 anos</small>
            <p>
              Atuação como Desenvolvedora Web Freelancer, desenvolvendo sites
              institucionais, landing pages e realizando manutenção e melhorias
              em projetos WordPress. Experiência com customização de temas e
              plugins, otimização de performance, configurações de hospedagem,
              domínios, cPanel, migração de sites e suporte técnico.
            </p>
            <p>
              Também desenvolvo projetos com tecnologias modernas como React,
              Next.js, Node.js e TypeScript, criando aplicações web responsivas
              e expandindo minha atuação para soluções full stack.
            </p>
          </div>
        </div>
        <div className="timeline-item reveal">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h3>Desenvolvedora Web</h3>
            <span>Agência Webgui Design · Tempo integral</span>
            <small>jul de 2021 - dez de 2025 · Remoto </small>
            <p>
              Criação e manutenção de sites, configuração de servidores e
              domínios, suporte ao cliente, reuniões de briefing, atualização de
              sistemas antigos e migração para novos layouts, gestão de
              multisites e relatórios mensais.
            </p>
            <br />
            <p>
              Desenvolvimento e manutenção de sites institucionais, landing
              pages e portais de conteúdo.
            </p>
            <br />
            <p>
              Durante esse período, participei da evolução e manutenção de
              projetos para organizações como APP Brasil, UNICEF, AcessOOH,
              Ensino InCor e Ubisoft, além de sites voltados para médicos,
              clínicas e escritórios de advocacia, contribuindo em melhorias de
              usabilidade, performance e manutenção contínua.
            </p>
          </div>
        </div>
        <div className="timeline-item reveal">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h3>Logística I</h3>
            <span>Loggi</span>
            <small>ago de 2019 - ago de 2020</small>
            <p>
              Utilização diária de sistemas internos para gestão de pedidos,
              devoluções, expedições e controle de rotas. Acompanhamento de
              processos operacionais, análise de dados, inventários e
              organização de fluxos de trabalho em ambiente logístico de alta
              demanda.
            </p>
            <br />
            <p>
              Experiência com ferramentas digitais de gestão e colaboração como
              Slack e Trello, além de sistemas internos de controle operacional,
              planilhas e acompanhamento de indicadores.
            </p>
            <br />
            <p>
              Comunicação ativa via Slack com diferentes unidades operacionais,
              atuando em um canal central de suporte para dúvidas, informações
              de cargas, rotas, localização de pacotes e tratativas de avarias,
              garantindo alinhamento entre equipes distribuídas.
            </p>
            <br />
            <p>
              Atuação em ambiente dinâmico com forte necessidade de organização,
              resolução de problemas e comunicação entre equipes
              multidisciplinares.
            </p>
          </div>
        </div>
        <div className="timeline-item reveal">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h3>Assistente de Logística</h3>
            <span>Luandre RH (Loggi)</span>
            <small>fev de 2019 - ago de 2019</small>
            <p>
              {" "}
              Atuação inicial como colaboradora temporária na operação
              logística, realizando separação, conferência e recebimento de
              mercadorias, além de controle operacional de fluxo de expedição.
            </p>
            <br />
            <p>
              {" "}
              Durante o período, fui indicada para efetivação na operação da
              Loggi devido ao desempenho, organização e comprometimento nas
              atividades.
            </p>
            <br />
            <p>
              {" "}
              Após a efetivação, atuei diretamente no apoio aos processos
              logísticos, contribuindo para o bom funcionamento da cadeia
              operacional.
            </p>
          </div>
        </div>
        <div className="timeline-item reveal">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h3>Assistente de Tecnologia e Criação Digital</h3>
            <span>Comercial RT</span>
            <small>fev de 2017 - jan de 2019</small>
            <p>
              Atuação em serviços de informática e produção digital, incluindo
              digitação de documentos, pesquisas, impressão, digitalização e
              suporte ao usuário. Desenvolvimento de materiais gráficos (cartões
              de visita, convites e logos) com uso de Photoshop e Publisher.
              Organização de processos internos, controle de estoque e apoio
              administrativo. Experiência que contribuiu para o desenvolvimento
              de habilidades em tecnologia, design e lógica de organização de
              sistemas.
            </p>
          </div>
        </div>
        <div className="timeline-item reveal">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h3>Auxiliar de Logística</h3>
            <span>Lojas Renner S.A.</span>
            <small>fev de 2011 - ago de 2014</small>
            <p></p>
            <p>
              {" "}
              Atuação em centro de distribuição de grande porte, com
              participação em diferentes etapas da operação logística, incluindo
              recebimento, armazenagem, controle de estoque e expedição de
              mercadorias.
            </p>
            <br />
            <p>
              Experiência com sistemas WMS e ERP, incluindo geração e emissão de
              notas fiscais, controle de movimentações de estoque, conferência
              de produtos, emissão de etiquetas e atualização de registros
              operacionais.
            </p>
            <br />
            <p>
              Atuação em múltiplos setores dentro do centro de distribuição,
              contribuindo para o funcionamento integrado da operação, com foco
              em precisão, organização e cumprimento de prazos.
            </p>
            <br />
            <p>
              Responsável por atividades como inventários, preenchimento de
              relatórios operacionais e comunicação com fornecedores e filiais.
            </p>
            <br />
            <p>
              Desenvolvimento de competências como organização de processos,
              atenção a detalhes, trabalho em equipe, disciplina operacional e
              atuação em ambiente de alta demanda.
            </p>
          </div>
        </div>
        <div className="timeline-item reveal">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h3>Auxiliar de Expedição</h3>
            <span>Manpower (Renner)</span>
            <small>out de 2010 - dez de 2010</small>
            <p>
              Atuação temporária como Auxiliar de Expedição em centro de
              distribuição da Lojas Renner, apoiando processos operacionais de
              expedição, organização de fluxo logístico e movimentação de
              mercadorias.
            </p>
            <br />
            <p>
              Durante o período, contribuí para o suporte às rotinas
              operacionais do setor, garantindo agilidade e organização no
              processo de saída de produtos.
            </p>
            <br />
            <p>
              Experiência inicial em ambiente de alta demanda logística, com
              foco em disciplina operacional, trabalho em equipe e cumprimento
              de prazos.
            </p>
          </div>
        </div>
        <div className="timeline-item reveal">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h3>Suporte Técnico</h3>
            <span>Atento</span>
            <small>dez de 2009 - jan de 2010</small>
            <p>
              Atendimento ao usuário, suporte técnico e configurações de
              internet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section id="projetos" className="projects">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">
            <i className="fa-solid fa-briefcase" /> Portfólio
          </span>
          <h2>Projetos em destaque</h2>
        </div>
        <div className="projects-list">
          {/* 1 - Gerenciando Contas */}
          <div className="project-card reveal">
            <a
              href="https://pt.linkedin.com/posts/jessica-lyra-dev_nextjs-reactjs-typescript-activity-7486215926577692672-8raQ?utm_source=li_share&utm_content=feedcontent&utm_medium=g_dt_web&utm_campaign=copy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/img/Sistema React Financeiro.jpg"
                alt="Sistema de controle financeiro Gerenciando Contas"
              />
              <div className="project-content">
                <h3>Gerenciando Contas</h3>
                <p>
                  Sistema de controle financeiro desenvolvido em React, com
                  funcionalidades de cadastro de contas, categorias,
                  movimentações e relatórios.
                </p>
              </div>
              <div className="tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>TypeScript</span>
                <span>PostgreSQL</span>
                <span>Prisma</span>
                <span>Otimização de Performance</span>
                <span>Next.js 16 (App Router)</span>
                <span>Prisma ORM</span>
                <span>JWT para autenticação</span>
                <span>bcrypt para proteção de senhas</span>
                <span>Tailwind CSS</span>
                <span>React Hook Form</span>
                <span>Recharts</span>
                <span>Sonner</span>
                <span>Git e GitHub</span>
                <span>Deploy contínuo com Vercel</span>
              </div>
            </a>
          </div>
          {/* 2 - Vantil Luz */}
          <div className="project-card reveal">
            <a
              href="https://www.linkedin.com/posts/jessica-lyra-dev_wordpress-fullstack-lovable-ugcPost-7482561012999655424-9QMj/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACcIw0YBuDusJTfMQBCFCEPkHezPDwK9lvM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/img/Landing Page Energia Solar.jpg"
                alt="Projeto Vantil Luz"
              />
              <div className="project-content">
                <h3>Vantil Luz</h3>
                <p>
                  Conversão de uma landing page criada no Lovable para um tema
                  WordPress customizado, com layout responsivo, menu dinâmico,
                  campos editáveis via ACF e estrutura otimizada para manutenção
                  e escalabilidade.
                </p>
              </div>
              <div className="tags">
                <span>WordPress</span>
                <span>PHP</span>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span>ACF</span>
                <span>Tema Customizado</span>
                <span>Responsivo</span>
              </div>
            </a>
          </div>
          {/* 3 - CargoFlow */}
          <div className="project-card reveal">
            <a
              href="https://www.linkedin.com/posts/jessica-lyra-dev_frontend-reactjs-nextjs-activity-7496581817387343872-KDy4?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACcIw0YBuDusJTfMQBCFCEPkHezPDwK9lvM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/img/Sistema Logístico Front End.jpg"
                alt="CargoFlow - Sistema de operações aduaneiras"
              />
              <div className="project-content">
                <h3>CargoFlow</h3>
                <p>
                  Aplicação Front-end para gestão de operações aduaneiras, com
                  dashboard operacional, consulta de DTA, DI e DUIMP e fluxo de
                  averbação de documentos. Desenvolvida com foco em UI/UX,
                  responsividade, validações, feedbacks visuais e simulação de
                  APIs.
                </p>
              </div>
              <div className="tags">
                <span>Next.js 16</span>
                <span>React</span>
                <span>TypeScript</span>
                <span>Tailwind CSS</span>
                <span>React Hook Form</span>
                <span>Zod</span>
                <span>Mock Service Worker (MSW)</span>
                <span>REST API</span>
                <span>Lucide React</span>
                <span>UI/UX</span>
                <span>Responsividade</span>
                <span>Acessibilidade</span>
                <span>Git e GitHub</span>
                <span>Vercel</span>
              </div>
            </a>
          </div>
          {/* 4 - Loja de Bicicleta */}
          <div className="project-card reveal">
            <a
              href="https://aceoficinabikeshop.com.br/landing-page-loja"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/img/landing page loja de bicicleta.jpg"
                alt="Landing page para loja de bicicleta"
              />
              <div className="project-content">
                <h3>Loja de Bicicleta</h3>
                <p>
                  Landing page criada para apresentar os principais produtos da
                  loja de forma humanizada, utilizando fotos reais, estrutura em
                  formato vitrine e botões de WhatsApp com foco em conversão e
                  geração de leads.
                </p>
              </div>
              <div className="tags">
                <span>WordPress</span>
                <span>Elementor</span>
                <span>Frontend</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Google Tag Manager</span>
                <span>Configuração de domínio</span>
                <span>Configuração WordPress</span>
                <span>Redesign</span>
                <span>Responsivo</span>
              </div>
            </a>
          </div>
          {/* 5 - Limpeza de Sofá */}
          <div className="project-card reveal">
            <a
              href="https://www.limpezadesofaemcuritiba.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/img/sofa.jpg"
                alt="Projeto de limpeza de sofá"
              />
              <div className="project-content">
                <h3>Limpeza de Sofá em Curitiba</h3>
                <p>
                  Reformulação de site para empresa especializada em limpeza de
                  sofás e estofados em Curitiba, com redesign da interface,
                  reorganização das informações, melhoria da apresentação dos
                  serviços e estrutura responsiva.
                </p>
              </div>
              <div className="tags">
                <span>Wix</span>
                <span>Frontend</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Redesign</span>
                <span>Responsivo</span>
              </div>
            </a>
          </div>
          {/* 6 - Ace Oficina Bikeshop */}
          <div className="project-card reveal">
            <button
              type="button"
              className="open-modal"
              data-video="https://www.youtube.com/embed/GdcveQLovZQ"
            >
              <img
                src="/assets/img/landing page oficina de bicicleta.jpg"
                alt="Landing page Ace Oficina Bikeshop"
              />
              <div className="project-content">
                <h3>Ace Oficina Bikeshop</h3>
                <p>
                  Landing page para oficina de bicicletas, apresentando
                  serviços, planos, redes sociais e canais de contato.
                </p>
              </div>
              <div className="tags">
                <span>WordPress</span>
                <span>Frontend</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Elementor</span>
                <span>Google Tag Manager</span>
                <span>Design Responsivo</span>
                <span>Comentários do Google</span>
                <span>Hospedagem</span>
              </div>
            </button>
          </div>
          {/* 7 - Oficina do Vidro */}
          <div className="project-card reveal">
            <button
              type="button"
              className="open-modal"
              data-video="https://www.youtube.com/embed/Gbw46rMEsEo"
            >
              <img
                src="/assets/img/landing page vidraçaria.jpg"
                alt="Landing page Oficina do Vidro"
              />
              <div className="project-content">
                <h3>Oficina do Vidro</h3>
                <p>
                  Criação de landing page para empresa de vidraçaria, destacando
                  serviços, diferenciais e contato.
                </p>
              </div>
              <div className="tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Enfold</span>
                <span>WordPress</span>
                <span>Design Responsivo</span>
                <span>Hospedagem</span>
                <span>Otimização de Performance</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HighlightsSection() {
  return (
    <section id="diferenciais" className="diferenciais">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">
            <i className="fa-solid fa-star" />
            Diferenciais
          </span>
          <h2>Mais do que código</h2>
        </div>
        <div className="diferenciais-grid">
          <div className="diferencial-card reveal">
            <i className="fas fa-comments" />
            <h3>Experiência com Clientes</h3>
            <p>
              Participação em reuniões, briefings e alinhamentos para
              transformar necessidades em soluções digitais.
            </p>
          </div>
          <div className="diferencial-card reveal">
            <i className="fas fa-rocket" />
            <h3>Projetos do Início ao Fim</h3>
            <p>
              Atuação desde o planejamento até a publicação, manutenção e
              evolução contínua dos projetos.
            </p>
          </div>
          <div className="diferencial-card reveal">
            <i className="fas fa-globe" />
            <h3>Infraestrutura Web</h3>
            <p>
              Configuração de hospedagens, domínios, e-mails corporativos e
              ambientes de produção.
            </p>
          </div>
          <div className="diferencial-card reveal">
            <i className="fas fa-code" />
            <h3>Desenvolvimento Moderno</h3>
            <p>
              Experiência com WordPress, React, Next.js, Node.js e bancos de
              dados relacionais.
            </p>
          </div>
          <div className="diferencial-card reveal">
            <i className="fas fa-tools" />
            <h3>Suporte e Evolução</h3>
            <p>
              Correções, melhorias e acompanhamento contínuo para manter os
              projetos atualizados.
            </p>
          </div>
          <div className="diferencial-card reveal">
            <i className="fas fa-layer-group" />
            <h3>Diversos Segmentos</h3>
            <p>
              Experiência em projetos para empresas, profissionais liberais,
              portais de conteúdo e campanhas digitais.
            </p>
          </div>
          <div className="diferencial-card reveal">
            <i className="fas fa-handshake" />
            <h3>Compromisso Profissional</h3>
            <p>
              Comunicação clara, postura ética, proatividade e foco na resolução
              de problemas para garantir entregas de qualidade e uma boa
              experiência durante todo o projeto.
            </p>
          </div>
          <div className="diferencial-card reveal">
            <i className="fas fa-lightbulb" />
            <h3>Soluções Estratégicas</h3>
            <p>
              Transformo necessidades, objetivos de negócio e identidade visual
              em soluções digitais pensadas para atrair, converter e fortalecer
              a presença da marca.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="testimonials">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">
            <i className="fa-solid fa-quote-left" /> Depoimentos
          </span>
          <h2>O que dizem sobre meu trabalho</h2>
        </div>
        <div className="testimonials-grid">
          <figure className="testimonial-card reveal">
            <div className="testimonial-stars" aria-label="5 de 5 estrelas">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <blockquote>Muito bom, entregou rápido e com qualidade.</blockquote>
            <figcaption className="testimonial-author">
              <span className="testimonial-avatar">E</span>
              <span className="testimonial-meta">
                <strong>Emerson</strong>
                <small>Cliente</small>
              </span>
            </figcaption>
          </figure>
          <figure className="testimonial-card reveal">
            <div className="testimonial-stars" aria-label="5 de 5 estrelas">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <blockquote>Ótima comunicação e trabalho eficiente.</blockquote>
            <figcaption className="testimonial-author">
              <span className="testimonial-avatar">N</span>
              <span className="testimonial-meta">
                <strong>Nicholas</strong>
                <small>Cliente</small>
              </span>
            </figcaption>
          </figure>
          <figure className="testimonial-card reveal">
            <div className="testimonial-stars" aria-label="5 de 5 estrelas">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <blockquote>
              Atendimento com agilidade, sempre presente para ajustes e acertos.
              Recomendo, parabéns pelo excelente trabalho!
            </blockquote>
            <figcaption className="testimonial-author">
              <span className="testimonial-avatar">E</span>
              <span className="testimonial-meta">
                <strong>Edilson</strong>
                <small>Cliente</small>
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contato" className="contact">
      <div className="contact-box reveal">
        <h2>Pronta para o próximo desafio</h2>
        <p>
          Se acredita que meu perfil pode contribuir com sua equipe ou projeto,
          será um prazer conversar.
        </p>
        <a
          href="https://wa.me/5511948574216?text=Olá,%20Jessica!%20Encontrei%20seu%20portfólio%20e%20gostaria%20de%20entrar%20em%20contato."
          target="_blank"
          rel="noopener noreferrer"
          className=" btn-whatsapp"
        >
          <i className="fab fa-whatsapp" /> Falar com Jessica Lyra
        </a>
      </div>
    </section>
  );
}
