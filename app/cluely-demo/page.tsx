import { CluelyHero } from "@/components/CluelyHero";
import { Header } from "@/components/ui/header-2";
import FeatureTranscription from "@/components/FeatureTranscription";
import LogoCloud from "@/components/logo-cloud";

export default function CluelyDemoPage() {
    return (
        <main>
            <Header />
            <CluelyHero />
            <LogoCloud />
            <FeatureTranscription />
        </main>
    );
}
