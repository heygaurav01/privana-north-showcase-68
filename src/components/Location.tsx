import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Location = () => {
  const nearbyPlaces = [
    { name: "DLF Corporate Greens", distance: "4.3 Km" },
    { name: "Aarvy Hospital", distance: "10.7 Km" },
    { name: "Corner Walk", distance: "2.9 Km" },
    { name: "Suraj School", distance: "3.6 Km" },
    { name: "Golf Retreat", distance: "3.7 Km" },
    { name: "Hyatt Regency", distance: "2.8 Km" },
    { name: "Karma Lake", distance: "5.6 Km" },
    { name: "SPR Road", distance: "2.5 Km" },
  ];

  return (
    <section id="location" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Prime Location
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Strategically located in Sector 77, Gurgaon with excellent connectivity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <Card className="overflow-hidden shadow-luxury">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112359.76868784062!2d76.79034749726561!3d28.351509000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3d54230bac85%3A0xc06e2af4e3a9f793!2sM3M%20Manesar%20Gurgaon!5e0!3m2!1sen!2sin!4v1764479948943!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </Card>

          {/* Location Advantages */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-8">
              Location Advantages
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {nearbyPlaces.map((place, index) => (
                <Card
                  key={index}
                  className="p-4 hover:shadow-card transition-shadow"
                >
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-luxury-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">{place.name}</p>
                      <p className="text-sm text-luxury-gold">{place.distance}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-luxury-beige rounded-lg">
              <h4 className="font-semibold text-foreground mb-4">
                Perfect Connectivity
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Easy access to major highways and expressways</li>
                <li>• Close proximity to corporate hubs</li>
                <li>• Well-connected to schools and hospitals</li>
                <li>• Shopping and entertainment nearby</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
