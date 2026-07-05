import { Hero } from "@/components/sections/Hero";
import { Timeline } from "@/components/sections/Timeline";
import { MicrosoftShowcase } from "@/components/sections/MicrosoftShowcase";
import { Projects } from "@/components/sections/Projects";
import { EngineeringDashboard } from "@/components/sections/EngineeringDashboard";
import { CompetitiveProgramming } from "@/components/sections/CompetitiveProgramming";
import { Achievements } from "@/components/sections/Achievements";
import { Leadership } from "@/components/sections/Leadership";
import { GitHubDashboard } from "@/components/sections/GitHubDashboard";
import { Research } from "@/components/sections/Research";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="noise relative">
      <Hero />
      <Timeline />
      <MicrosoftShowcase />
      <Projects />
      <EngineeringDashboard />
      <CompetitiveProgramming />
      <Achievements />
      <Leadership />
      <GitHubDashboard />
      <Research />
      <Contact />
    </div>
  );
}
