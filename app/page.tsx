import { ClassPartnerHero } from "@/components/ClassPartnerHero";
import { Header } from "@/components/ui/header-2";
import FeatureTranscription from "@/components/FeatureTranscription";
import LogoCloud from "@/components/logo-cloud";
import { AIFeatures } from "@/components/AIFeatures";
import { FeatureOrganization } from "@/components/FeatureOrganization";
import { ClassPartnerFAQ } from "@/components/ClassPartnerFAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <ClassPartnerHero />
      <LogoCloud />
      <FeatureTranscription />
      <AIFeatures />
      <FeatureOrganization />
      <ClassPartnerFAQ />
      <Footer />
    </main>
  );
}
