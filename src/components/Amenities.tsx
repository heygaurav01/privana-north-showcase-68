import { Dumbbell, Trees, Shield, Car, Waves, Users, Baby, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Amenities = () => {
  const amenities = [
    {
      icon: <Waves className="h-8 w-8" />,
      title: "Outdoor Pools Deck",
      description: "Temperature-controlled swimming pools with deck area",
    },
    {
      icon: <Dumbbell className="h-8 w-8" />,
      title: "Fully Equipped Gym",
      description: "State-of-the-art fitness center with modern equipment",
    },
    {
      icon: <Trees className="h-8 w-8" />,
      title: "Open-air Fitness Zone",
      description: "Outdoor workout area surrounded by greenery",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Squash Court",
      description: "Professional sports courts for active lifestyle",
    },
    {
      icon: <Trees className="h-8 w-8" />,
      title: "Miyawaki Forest Trail",
      description: "Nature walking trails with air-purifying trees",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "PlayStation Zone",
      description: "Gaming area with latest consoles and entertainment",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Salon & Lounge Area",
      description: "Beauty salon and relaxation lounge",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Fine Dining Zone",
      description: "Premium dining spaces for social gatherings",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Multi-purpose Hall",
      description: "Versatile event space for celebrations",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Wellness Retreat",
      description: "Spa and meditation facilities",
    },
    {
      icon: <Baby className="h-8 w-8" />,
      title: "Indoor Kids' Play Zone",
      description: "Safe and fun indoor play area for children",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Business Centre",
      description: "Work-from-home spaces with modern facilities",
    },
  ];

  return (
    <section id="amenities" className="py-20 bg-luxury-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            World-Class Amenities
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience luxury living with premium amenities designed for your comfort and convenience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 bg-white"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-luxury-gold/10 rounded-full text-luxury-gold">
                  {amenity.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {amenity.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {amenity.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
