import { useState, useEffect } from "react";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onEnquireClick: () => void;
}

export const Header = ({ onEnquireClick }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-luxury-dark/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-serif font-bold text-luxury-gold">
              DLF
            </div>
            <div className="text-sm text-white/90 pt-1">Privana North</div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("overview")}
              className="text-white/90 hover:text-luxury-gold transition-colors"
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection("amenities")}
              className="text-white/90 hover:text-luxury-gold transition-colors"
            >
              Amenities
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-white/90 hover:text-luxury-gold transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="text-white/90 hover:text-luxury-gold transition-colors"
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white/90 hover:text-luxury-gold transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="tel:+918200201202"
              className="hidden md:flex items-center space-x-2 text-white/90 hover:text-luxury-gold transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm">+91 8200 201 202</span>
            </a>
            <Button
              onClick={onEnquireClick}
              className="bg-luxury-gold hover:bg-luxury-gold/90 text-white"
            >
              Enquire Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
