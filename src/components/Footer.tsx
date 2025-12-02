import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-luxury-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-serif font-bold text-luxury-gold">M3M</div>
              <div className="text-sm text-white/90 pt-1">GIC Gurugram</div>
            </div>
            <p className="text-sm text-white/70 mb-4">
              2, 3 & 4 BHK Luxury Apartments in Sector 9, Manesar, Gurgaon
            </p>
            <div className="text-xs text-white/50">
              Premium Offerings for Elite Living
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("overview")}
                  className="text-white/70 hover:text-luxury-gold transition-colors"
                >
                  Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("amenities")}
                  className="text-white/70 hover:text-luxury-gold transition-colors"
                >
                  Amenities
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-white/70 hover:text-luxury-gold transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("location")}
                  className="text-white/70 hover:text-luxury-gold transition-colors"
                >
                  Location
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-luxury-gold mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+918200201202"
                  className="text-white/70 hover:text-luxury-gold transition-colors"
                >
                  +91 8200 201 202
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-luxury-gold mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contact@elaris.consulting"
                  className="text-white/70 hover:text-luxury-gold transition-colors"
                >
                  contact@elaris.consulting
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-luxury-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/70">Sector 9, Manesar, Gurugram, Haryana</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="/Disclaimer.html" className="hover:text-luxury-gold transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                PROJECT RERA NO. - HARERA/GGM/991/723/2025/94{" "}
                <a
                  href="https://haryanarera.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-luxury-gold transition-colors"
                >
                  https://haryanarera.gov.in/
                </a>
              </li>
              <li>
                <a href="/Disclaimer.html" className="hover:text-luxury-gold transition-colors">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="text-center text-sm text-white/50">
            <p>© {new Date().getFullYear()} M3M GIC Gurugram. All rights reserved.</p>
            <p className="mt-2 text-xs">
              *T&C Apply. All specifications and images are indicative and subject to change.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
