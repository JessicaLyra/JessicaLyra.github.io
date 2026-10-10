import { useCallback, useState } from "react";
import * as EnglishSections from "./portfolio/enSections.jsx";
import * as PortugueseSections from "./portfolio/ptBrSections.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import SiteHeader from "../components/SiteHeader.jsx";
import VideoModal from "../components/VideoModal.jsx";
import useRevealOnScroll from "../hooks/useRevealOnScroll.js";

const pageSections = {
  pt: [
    PortugueseSections.HeroSection,
    PortugueseSections.AboutSection,
    PortugueseSections.SkillsSection,
    PortugueseSections.ExperienceSection,
    PortugueseSections.ProjectsSection,
    PortugueseSections.HighlightsSection,
    PortugueseSections.TestimonialsSection,
    PortugueseSections.ContactSection,
  ],
  en: [
    EnglishSections.HeroSection,
    EnglishSections.AboutSection,
    EnglishSections.SkillsSection,
    EnglishSections.ExperienceSection,
    EnglishSections.ProjectsSection,
    EnglishSections.HighlightsSection,
    EnglishSections.ContactSection,
  ],
};

export default function PortfolioPage({ language }) {
  const [videoUrl, setVideoUrl] = useState("");
  useRevealOnScroll();

  const closeVideo = useCallback(() => setVideoUrl(""), []);

  function handleProjectClick(event) {
    if (!(event.target instanceof Element)) return;

    const trigger = event.target.closest(".open-modal");
    if (!trigger) return;

    event.preventDefault();
    setVideoUrl(trigger.dataset.video || "");
  }

  const sections = pageSections[language];

  return (
    <div className="site-shell" onClick={handleProjectClick}>
      <SiteHeader language={language} />
      <main id="main-content">
        {sections.map((Section) => (
          <Section key={Section.name} />
        ))}
      </main>
      <SiteFooter />
      <VideoModal videoUrl={videoUrl} onClose={closeVideo} />
    </div>
  );
}
