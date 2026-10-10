import { useEffect } from "react";
import {
  FaqSection,
  NewSiteSection,
  PlanContactSection,
  PlansHeroSection,
  PricingSection,
  ProcessSection,
} from "./plans/sections.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import SiteHeader from "../components/SiteHeader.jsx";
import useRevealOnScroll from "../hooks/useRevealOnScroll.js";

const sections = [
  PlansHeroSection,
  PricingSection,
  NewSiteSection,
  ProcessSection,
  FaqSection,
  PlanContactSection,
];

export default function PlansPage() {
  useRevealOnScroll();

  useEffect(() => {
    document.body.classList.add("plans-page");
    return () => document.body.classList.remove("plans-page");
  }, []);

  return (
    <>
      <SiteHeader plansPage />
      <main id="main-content">
        {sections.map((Section) => (
          <Section key={Section.name} />
        ))}
      </main>
      <SiteFooter />
    </>
  );
}
