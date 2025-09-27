import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EcosystemSection from "@/components/EcosystemSection";
import StatsSection from "@/components/StatsSection";
import CoursesSection from "@/components/CoursesSection";
import ProcessSection from "@/components/ProcessSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <EcosystemSection />
      <StatsSection />
      <CoursesSection />
      <ProcessSection />
      <TeamSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;