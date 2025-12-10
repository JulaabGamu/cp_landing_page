import { ClassPartnerHero } from "@/components/ClassPartnerHero";
import { Header } from "@/components/ui/header-2";
import FeatureTranscription from "@/components/FeatureTranscription";
import LogoCloud from "@/components/logo-cloud";
import { AIFeatures } from "@/components/AIFeatures";
import { FeatureOrganization } from "@/components/FeatureOrganization";
import { ClassPartnerFAQ } from "@/components/ClassPartnerFAQ";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Ambient Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/20 blur-[120px] rounded-full mix-blend-multiply opacity-50 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[40%] bg-indigo-300/20 blur-[120px] rounded-full mix-blend-multiply opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[45%] h-[40%] bg-blue-300/20 blur-[120px] rounded-full mix-blend-multiply opacity-50 animate-blob animation-delay-4000"></div>
        <div className="absolute top-[40%] left-[10%] w-[30%] h-[30%] bg-sky-200/30 blur-[100px] rounded-full mix-blend-multiply opacity-40"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[25%] h-[30%] bg-blue-100/40 blur-[100px] rounded-full mix-blend-multiply opacity-40"></div>
      </div>

      <Header />
      <ClassPartnerHero />
      <LogoCloud />
      <FeatureTranscription />
      <AIFeatures />
      <FeatureOrganization />
      <ClassPartnerFAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
