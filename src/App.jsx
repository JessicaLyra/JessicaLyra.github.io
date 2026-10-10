import PortfolioPage from "./pages/PortfolioPage.jsx";
import PlansPage from "./pages/PlansPage.jsx";

export default function App() {
  const currentPath = window.location.pathname;

  if (currentPath.endsWith("/planos.html")) {
    return <PlansPage />;
  }

  return (
    <PortfolioPage language={currentPath.startsWith("/en/") ? "en" : "pt"} />
  );
}
