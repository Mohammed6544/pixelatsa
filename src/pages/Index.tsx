import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TeamSection from "@/components/TeamSection";
import StorySection from "@/components/StorySection";
import GamesSection from "@/components/GamesSection";
import TwitterSection from "@/components/TwitterSection";
import GallerySection from "@/components/GallerySection";
import ContactFooter from "@/components/ContactFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <GamesSection />
      <TwitterSection />
      <TeamSection />
      <StorySection />
      <GallerySection />
      <ContactFooter />
    </div>
  );
};

export default Index;
