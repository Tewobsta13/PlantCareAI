import AnnounceRibbon from '../components/home/AnnounceRibbon';
import Benefits from '../components/home/Benefits';
import CropCategories from '../components/home/CropCategories';
import DiseaseSpotlights from '../components/home/DiseaseSpotlights';
import Hero from '../components/home/Hero';
import HowItWorks from '../components/home/HowItWorks';
import ResearchPartners from '../components/home/ResearchPartners';
import TelemetryCta from '../components/home/TelemetryCta';

export default function Home() {
  return (
    <>
      <AnnounceRibbon />
      <Hero />
      <HowItWorks />
      <CropCategories />
      <Benefits />
      <DiseaseSpotlights />
      <TelemetryCta />
      <ResearchPartners />
    </>
  );
}
