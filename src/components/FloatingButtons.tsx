import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingButtons = () => {
  const phoneNumber = "+918200201202";
  const whatsappMessage = "Hi, I'm interested in DLF Privana North. Please share more details.";

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col space-y-4">
      {/* WhatsApp Button */}
      <Button
        asChild
        size="lg"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 p-0 shadow-luxury"
      >
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact via WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </Button>

      {/* Phone Button */}
      <Button
        asChild
        size="lg"
        className="bg-luxury-gold hover:bg-luxury-gold/90 text-white rounded-full w-14 h-14 p-0 shadow-luxury"
      >
        <a href={`tel:${phoneNumber}`} aria-label="Call us">
          <Phone className="h-6 w-6" />
        </a>
      </Button>
    </div>
  );
};
