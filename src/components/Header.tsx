import { useState, useEffect } from "react";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onEnquireClick: () => void;
}

export const Header = ({ onEnquireClick }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Overview", id: "overview" },
    { label: "Amenities", id: "amenities" },
    { label: "Gallery", id: "gallery" },
    { label: "Location", id: "location" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
        ? "bg-luxury-dark/95 backdrop-blur-md shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 z-50 max-w-[60%]">
            <img
              src="https://m3mproject-gurgaon.com/images/builder-logo1.png"
              alt="M3M Logo"
              className="h-8 md:h-12 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/90 hover:text-luxury-gold transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+918200201202"
              className="flex items-center space-x-2 text-white/90 hover:text-luxury-gold transition-colors"
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

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden z-50">
            <a
              href="tel:+918200201202"
              className="text-white/90 hover:text-luxury-gold transition-colors"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-luxury-dark/95 backdrop-blur-xl transition-transform duration-300 md:hidden pt-24 px-6 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <nav className="flex flex-col space-y-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-2xl text-white/90 hover:text-luxury-gold transition-colors text-left font-serif"
            >
              {item.label}
            </button>
          ))}
          <div className="h-px bg-white/10 my-6" />
          <div className="flex flex-col space-y-4">
            <a
              href="tel:+918200201202"
              className="flex items-center space-x-3 text-white/90 hover:text-luxury-gold transition-colors text-lg"
            >
              <Phone className="h-5 w-5" />
              <span>+91 8200 201 202</span>
            </a>
            <a
              href="https://wa.me/918200201202"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-white/90 hover:text-luxury-gold transition-colors text-lg"
            >
              <MessageCircle className="h-5 w-5 text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </a>
            <Button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onEnquireClick();
              }}
              className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-white mt-4"
            >
              Enquire Now
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
