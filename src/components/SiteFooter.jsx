export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} Jessica Lyra. Todos os direitos
          reservados.
        </p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/jessica-lyra-dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin" aria-hidden="true" />
          </a>
          <a
            href="https://github.com/JessicaLyra"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
