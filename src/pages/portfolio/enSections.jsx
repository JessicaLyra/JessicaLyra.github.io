export function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content reveal">
          <span className="hero-badge">
            <i className="fas fa-briefcase" /> Available for opportunities and
            projects
          </span>
          <h1>
            Jessica Lyra
            <span>Full Stack</span>
            Developer
          </h1>
          <p>
            I create APIs, web applications, and responsive websites,
            transforming ideas into secure, scalable, and high-performance
            digital solutions.{" "}
          </p>
          <div className="hero-buttons">
            <a
              href="https://wa.me/5511948574216?text=Hello,%20Jessica!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-whatsapp"
            >
              <i className="fab fa-whatsapp" /> Let’s talk with Jessica Lyra
            </a>
            <a href="#projects" className="btn-secondary">
              See projects
            </a>
          </div>
          <div className="hero-numbers">
            <div className="number-card">
              <h3>200+</h3>
              <p>Projects</p>
            </div>
            <div className="number-card">
              <h3>30+</h3>
              <p>Clients</p>
            </div>
            <div className="number-card">
              <h3>5+</h3>
              <p>Years</p>
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
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-image reveal">
          <img src="/assets/img/sobre.jpg" alt="Jessica Lyra" />
        </div>
        <div className="about-content reveal">
          <span className="section-tag">
            <i className="fa-solid fa-user" /> About Me
          </span>
          <h2>Turning ideas into digital experiences.</h2>
          <p>
            I am a web developer with experience creating digital solutions,
            working on the development of institutional websites, landing pages,
            e-commerce stores, and customized web applications.
          </p>
          <p>
            I have solid experience with WordPress, including theme and plugin
            development and customization, custom fields creation with ACF, REST
            API integrations, performance optimization, website maintenance,
            migrations, hosting configuration, servers, and DNS management.
          </p>
          <p>
            I also develop web applications using technologies such as PHP,
            JavaScript, React, Next.js, Node.js, TypeScript, Tailwind CSS, Java
            (Spring Boot), PostgreSQL, MySQL, and Git/GitHub, creating modern,
            responsive solutions following development best practices.
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
            <i className="fa-solid fa-code" /> Tech Stack
          </span>
          <h2>Tools I use</h2>
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
          <i className="fa-solid fa-briefcase" /> Professional Experience
        </span>
        <h2>From operations to web development</h2>
      </div>
      <p>
        My professional path has been shaped by growth through operational and
        digital environments until I reached web development.
      </p>
      <div className="timeline">
        <div className="timeline-item reveal">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h3>Web Developer</h3>
            <span>99 Freelas</span>
            <small>December 2020 - present </small>
            <p>
              Working as a Freelance Web Developer, creating institutional
              websites, landing pages, and performing maintenance and
              improvements on WordPress projects. Experienced in theme and
              plugin customization, performance optimization, hosting
              configurations, domain management, cPanel, website migrations, and
              technical support.
            </p>
            <p>
              I also develop projects using modern technologies such as React,
              Next.js, Node.js, and TypeScript, creating responsive web
              applications and expanding my expertise into full-stack solutions.
            </p>
          </div>
        </div>
        <div className="timeline-item reveal">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h3>Web Developer</h3>
            <span>Webgui Design Agency · Full time</span>
            <small>July 2021 - December 2025 · Remote</small>
            <p>
              Creation and maintenance of websites, server and domain setup,
              customer support, briefing meetings, updates to old systems and
              migration to new layouts, multisite management and monthly
              reporting.
            </p>
            <br />
            <p>
              I developed and maintained institutional websites, landing pages
              and content portals.
            </p>
            <br />
            <p>
              During this period, I contributed to projects for organizations
              such as APP Brasil, UNICEF, AcessOOH, Ensino InCor and Ubisoft, as
              well as sites for doctors, clinics and law firms, improving
              usability, performance and ongoing maintenance.
            </p>
          </div>
        </div>
        <div className="timeline-item reveal">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h3>Logistics I</h3>
            <span>Loggi</span>
            <small>August 2019 - August 2020</small>
            <p>
              Daily use of internal systems for order management, returns,
              dispatches and route control. Monitoring operational processes,
              data analysis, inventory and workflow organization in a
              high-demand logistics environment.
            </p>
            <br />
            <p>
              Experience with digital management and collaboration tools such as
              Slack and Trello, in addition to internal operational control
              systems, spreadsheets and indicator tracking.
            </p>
            <br />
            <p>
              Active communication via Slack with different operational units,
              working in a central support channel for questions, load
              information, routes, package locations and damage cases, ensuring
              alignment across distributed teams.
            </p>
          </div>
        </div>
        <div className="timeline-item reveal">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h3>Logistics Assistant</h3>
            <span>Luandre RH (Loggi)</span>
            <small>February 2019 - August 2019</small>
            <p>
              I started as a temporary employee in the logistics operation,
              carrying out separation, checking and receiving goods, in addition
              to operational control of dispatch flow.
            </p>
            <br />
            <p>
              I was recommended for permanent placement due to my performance,
              organization and commitment.
            </p>
          </div>
        </div>
        <div className="timeline-item reveal">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h3>Assistant of Technology and Digital Creation</h3>
            <span>Comercial RT</span>
            <small>February 2017 - January 2019</small>
            <p>
              I worked in computer services and digital production, including
              document typing, research, printing, scanning and user support. I
              developed graphic materials such as business cards, invitations
              and logos using Photoshop and Publisher. I also supported internal
              organization, inventory control and administrative tasks.
            </p>
          </div>
        </div>
        <div className="timeline-item reveal">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h3>Logistics Assistant</h3>
            <span>Lojas Renner S.A.</span>
            <small>February 2011 - August 2014</small>
            <p>
              I worked in a large distribution center, participating in
              different stages of logistics operations, including receiving,
              storage, stock control and goods dispatch.
            </p>
            <br />
            <p>
              I gained experience with WMS and ERP systems, including issuing
              invoices, controlling stock movements, checking products, labeling
              and updating operational records.
            </p>
            <br />
            <p>
              I also worked across multiple sectors within the distribution
              center, contributing to integrated operations with a focus on
              precision, organization and deadline compliance.
            </p>
          </div>
        </div>
        <div className="timeline-item reveal">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h3>Dispatch Assistant</h3>
            <span>Manpower (Renner)</span>
            <small>October 2010 - December 2010</small>
            <p>
              I worked temporarily as a Dispatch Assistant in the Lojas Renner
              distribution center, supporting operational dispatch processes,
              organizing the logistics flow and moving goods.
            </p>
            <br />
            <p>
              This role gave me an early experience in a high-demand logistics
              environment, with focus on operational discipline, teamwork and
              deadline fulfillment.
            </p>
          </div>
        </div>
        <div className="timeline-item reveal">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h3>Technical Support</h3>
            <span>Atento</span>
            <small>December 2009 - January 2010</small>
            <p>
              User support, technical assistance and internet configuration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">
            <i className="fa-solid fa-briefcase" /> Portfolio
          </span>
          <h2>Featured projects</h2>
        </div>
        <div className="projects-list">
          <div className="project-card reveal">
            <a
              href="https://pt.linkedin.com/posts/jessica-lyra-dev_nextjs-reactjs-typescript-activity-7486215926577692672-8raQ?utm_source=li_share&utm_content=feedcontent&utm_medium=g_dt_web&utm_campaign=copy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/img/Sistema React Financeiro.jpg"
                alt="Financial system project"
              />
              <div className="project-content">
                <h3>Gerenciando Contas</h3>
                <p>
                  Financial control system developed in React with
                  functionalities for account registration, categories,
                  transactions and reports.
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
                <span>Performance optimization</span>
              </div>
            </a>
          </div>
          <div className="project-card reveal">
            <a
              href="https://www.linkedin.com/posts/jessica-lyra-dev_wordpress-fullstack-lovable-ugcPost-7482561012999655424-9QMj/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACcIw0YBuDusJTfMQBCFCEPkHezPDwK9lvM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/img/Landing Page Energia Solar.jpg"
                alt="Solar energy landing page"
              />
              <div className="project-content">
                <h3>Vantil Luz</h3>
                <p>
                  Conversion of a landing page created in Lovable into a
                  customized WordPress theme, with responsive layout, dynamic
                  menu, editable fields via ACF and an optimized structure for
                  maintenance and scalability.
                </p>
              </div>
              <div className="tags">
                <span>WordPress</span>
                <span>PHP</span>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span>ACF</span>
                <span>Custom theme</span>
                <span>Responsive</span>
              </div>
            </a>
          </div>
          {/* CargoFlow */}
          <div className="project-card reveal">
            <a
              href="https://www.linkedin.com/posts/jessica-lyra-dev_frontend-reactjs-nextjs-activity-7496581817387343872-KDy4?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACcIw0YBuDusJTfMQBCFCEPkHezPDwK9lvM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/img/Sistema Logístico Front End.jpg"
                alt="CargoFlow customs operations management system"
              />
              <div className="project-content">
                <h3>CargoFlow</h3>
                <p>
                  Front-end application for customs operations management,
                  featuring an operational dashboard, DTA, DI and DUIMP document
                  lookup, and document registration workflows. Developed with a
                  strong focus on UI/UX, responsive design, form validation,
                  visual feedback, and API simulation.
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
                <span>Responsive Design</span>
                <span>Accessibility</span>
                <span>Git &amp; GitHub</span>
                <span>Vercel</span>
              </div>
            </a>
          </div>
          <div className="project-card reveal">
            <a
              href="https://www.limpezadesofaemcuritiba.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/img/sofa.jpg" alt="Sofa cleaning project" />
              <div className="project-content">
                <h3>Sofa Cleaning in Curitiba</h3>
                <p>
                  Redesign of a website for a sofa cleaning company, focused on
                  conversion and lead generation.
                </p>
              </div>
              <div className="tags">
                <span>Wix</span>
                <span>Frontend</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>
                  Redesign according to the sector and visual identity
                </span>
                <span>Responsive</span>
              </div>
            </a>
          </div>
          <div className="project-card reveal">
            <a
              href="https://aceoficinabikeshop.com.br/landing-page-oficina/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/img/landing page oficina de bicicleta.jpg"
                alt="Bike shop landing page"
              />
              <div className="project-content">
                <h3>Ace Oficina Bikeshop</h3>
                <p>
                  Project for a bike workshop showing services, plans, social
                  media and contact information.
                </p>
              </div>
              <div className="tags">
                <span>WordPress</span>
                <span>Frontend</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Elementor</span>
                <span>Google Tag Manager</span>
                <span>Responsive design</span>
                <span>Google Reviews</span>
                <span>Hosting</span>
              </div>
            </a>
          </div>
          <div className="project-card reveal">
            <button
              type="button"
              className="open-modal "
              data-video="https://www.youtube.com/embed/Gbw46rMEsEo"
            >
              <img
                src="/assets/img/landing page vidraçaria.jpg"
                alt="Glass company landing page"
              />
              <div className="project-content">
                <h3>Oficina do Vidro</h3>
                <p>
                  Creation of a landing page for a glass company, highlighting
                  services, differentiators and contact information.
                </p>
              </div>
              <div className="tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Enfold</span>
                <span>WordPress</span>
                <span>Responsive design</span>
                <span>Hosting</span>
                <span>Performance optimization</span>
              </div>
            </button>
          </div>
          <div className="project-card reveal">
            <a
              href="https://aceoficinabikeshop.com.br/landing-page-loja/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/img/landing page loja de bicicleta.jpg"
                alt="Bike shop landing page"
              />
              <div className="project-content">
                <h3>Bike Shop</h3>
                <p>
                  The client needed a landing page to showcase the store's main
                  products in a more humanized way, using real photos, a virtual
                  showroom concept, and a WhatsApp contact button, focusing on
                  conversion and lead generation.
                </p>
              </div>
              <div className="tags">
                <span>WordPress</span>
                <span>Elementor</span>
                <span>Frontend</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Google Tag Manager</span>
                <span>Domain Configuration</span>
                <span>Complete WordPress Installation and Setup</span>
                <span>
                  Redesign Based on Brand Identity and Business Segment
                </span>
                <span>Responsive Design</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HighlightsSection() {
  return (
    <section id="highlights" className="diferenciais">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">
            <i className="fa-solid fa-star" /> Highlights
          </span>
          <h2>More than code</h2>
        </div>
        <div className="diferenciais-grid">
          <div className="diferencial-card reveal">
            <i className="fas fa-comments" />
            <h3>Client Experience</h3>
            <p>
              Participation in meetings, briefings and alignments to turn needs
              into digital solutions.
            </p>
          </div>
          <div className="diferencial-card reveal">
            <i className="fas fa-rocket" />
            <h3>Projects from Start to Finish</h3>
            <p>
              Work from planning to publication, maintenance and continuous
              evolution of projects.
            </p>
          </div>
          <div className="diferencial-card reveal">
            <i className="fas fa-globe" />
            <h3>Web Infrastructure</h3>
            <p>
              Configuration of hosting, domains, corporate emails and production
              environments.
            </p>
          </div>
          <div className="diferencial-card reveal">
            <i className="fas fa-code" />
            <h3>Modern Development</h3>
            <p>
              Experience with WordPress, React, Next.js, Node.js and relational
              databases.
            </p>
          </div>
          <div className="diferencial-card reveal">
            <i className="fas fa-tools" />
            <h3>Support and Evolution</h3>
            <p>
              Fixes, improvements and continuous follow-up to keep projects up
              to date.
            </p>
          </div>
          <div className="diferencial-card reveal">
            <i className="fas fa-layer-group" />
            <h3>Various Sectors</h3>
            <p>
              Experience in projects for companies, professionals, content
              portals and digital campaigns.
            </p>
          </div>
          <div className="diferencial-card reveal">
            <i className="fas fa-handshake" />
            <h3>Professional Commitment</h3>
            <p>
              Clear communication, ethical posture, proactivity and a focus on
              problem-solving to ensure quality delivery and a positive
              experience throughout the project.
            </p>
          </div>
          <div className="diferencial-card reveal">
            <i className="fas fa-lightbulb" />
            <h3>Strategic Solutions</h3>
            <p>
              I turn business goals, needs and visual identity into digital
              solutions designed to attract, convert and strengthen brand
              presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="contact-box reveal">
        <h2>Ready for the next challenge</h2>
        <p>
          If you believe my profile can contribute to your team or project, I
          would be happy to talk.
        </p>
        <a
          href="https://wa.me/5511948574216?text=Hello,%20Jessica!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary btn-whatsapp"
        >
          <i className="fab fa-whatsapp" /> Contact Jessica Lyra
        </a>
      </div>
    </section>
  );
}
