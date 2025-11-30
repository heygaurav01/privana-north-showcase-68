import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import heroImage from "@/assets/hero-bg-new.jpg";
import { ContactForm } from "./ContactForm";

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
          alt="M3M GIC Gurugram"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6 animate-fade-up text-left">
            <div className="inline-block px-6 py-2 bg-luxury-gold/20 backdrop-blur-sm border border-luxury-gold/30 rounded-full mb-4">
              <span className="text-luxury-gold font-medium">Luxury High-Rise Living</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
              M3M GIC Gurugram
            </h1>

            <p className="text-xl md:text-2xl text-white/90 font-light">
              2, 3 & 4 BHK Luxury Apartments in Sector 9, Manesar
            </p>

            <div className="flex items-center space-x-2 text-luxury-gold">
              <MapPin className="h-5 w-5" />
              <span className="text-lg">Sector 9, Manesar, Gurugram</span>
            </div>

            <div className="pt-4">
              <div className="text-4xl md:text-5xl font-bold text-luxury-gold mb-6">
                ₹2.15 Cr* Onwards
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                onClick={onEnquireClick}
                size="lg"
                className="bg-luxury-dark hover:bg-luxury-dark/90 text-white px-8 py-6 text-lg"
              >
                Download Brochure
              </Button>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl animate-fade-up delay-200">
            <h3 className="text-2xl font-serif font-bold text-luxury-dark mb-6">
              Pre-Register Now
            </h3>
            <ContactForm />
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
