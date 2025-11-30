import { useState, useEffect } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-luxury-dark/95 backdrop-blur-md shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <img
              src="https://m3mproject-gurgaon.com/images/builder-logo1.png"
              alt="M3M Logo"
              className="h-12 object-contain"
            />
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

            <a
              href="https://wa.me/918200201202"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#25D366]/90 text-white p-2 rounded-full transition-colors"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
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
