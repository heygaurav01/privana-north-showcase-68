import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Overview } from "@/components/Overview";
import { Gallery } from "@/components/Gallery";
import { Amenities } from "@/components/Amenities";
import { FloorPlans } from "@/components/FloorPlans";
import { Location } from "@/components/Location";
import { AboutDeveloper } from "@/components/AboutDeveloper";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { EnquiryDialog } from "@/components/EnquiryDialog";

const Index = () => {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("smooth-scroll");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header onEnquireClick={() => setEnquiryOpen(true)} />
      <Hero onEnquireClick={() => setEnquiryOpen(true)} />
      <Overview />
      <Gallery />
      <Amenities />
      <FloorPlans onEnquireClick={() => setEnquiryOpen(true)} />
      <Location />
      <AboutDeveloper />
      <ContactSection />
      <Footer />
      <FloatingButtons />
      <EnquiryDialog open={enquiryOpen} onOpenChange={setEnquiryOpen} />
    </div>
  );
};

export default Index;
