import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import heroImage from "@/assets/project-exterior-1.png";

interface HeroProps {
  onEnquireClick: () => void;
}

export const Hero = ({ onEnquireClick }: HeroProps) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="DLF Privana North"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-up">
          <div className="inline-block px-6 py-2 bg-luxury-gold/20 backdrop-blur-sm border border-luxury-gold/30 rounded-full mb-4">
            <span className="text-luxury-gold font-medium">Premium Living in Gurgaon</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
            DLF Privana North
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 font-light">
            4 BHK Apartments & Penthouses in Sector 77, Gurgaon
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-luxury-gold">
            <MapPin className="h-5 w-5" />
            <span className="text-lg">Sector 77, Gurgaon</span>
          </div>

          <div className="pt-4">
            <div className="text-4xl md:text-5xl font-bold text-luxury-gold mb-6">
              ₹8.50 Cr* Onwards
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button
              onClick={onEnquireClick}
              size="lg"
              className="bg-luxury-gold hover:bg-luxury-gold/90 text-white px-8 py-6 text-lg"
            >
              Enquire Now
            </Button>
            <Button
              onClick={onEnquireClick}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-luxury-dark px-8 py-6 text-lg"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
