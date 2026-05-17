import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/bingi/Header";
import { Hero } from "@/components/bingi/Hero";
import { Stats } from "@/components/bingi/Stats";
import { Ecosystem } from "@/components/bingi/Ecosystem";
import { KeyFeatures } from "@/components/bingi/KeyFeatures";
import { BuiltForEveryone } from "@/components/bingi/BuiltForEveryone";
import { HowItWorks } from "@/components/bingi/HowItWorks";
import { TrustSafety } from "@/components/bingi/TrustSafety";
import { CTA } from "@/components/bingi/CTA";
import { Footer } from "@/components/bingi/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="bg-page-ambient min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Ecosystem />
      <KeyFeatures />
      <BuiltForEveryone />
      <HowItWorks />
      <TrustSafety />
      <CTA />
      <Footer />
    </main>
  );
}
