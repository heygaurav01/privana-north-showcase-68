import { Dumbbell, Trees, Shield, Car, Waves, Users, Baby, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Amenities = () => {
  const amenities = [
    {
      icon: <Dumbbell className="h-8 w-8" />,
      title: "Fitness Center",
      description: "State-of-the-art gymnasium with modern equipment",
    },
    {
      icon: <Waves className="h-8 w-8" />,
      title: "Swimming Pool",
      description: "Olympic-size swimming pool with poolside deck",
    },
    {
      icon: <Trees className="h-8 w-8" />,
      title: "Landscaped Gardens",
      description: "88% lush green area with walking trails",
    },
    {
      icon: <Baby className="h-8 w-8" />,
      title: "Children's Play Area",
      description: "Safe and fun play zones for kids",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Clubhouse",
      description: "Exclusive clubhouse with modern amenities",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "24/7 Security",
      description: "Advanced security systems and trained personnel",
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Parking",
      description: "Ample covered parking space",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Wellness Center",
      description: "Spa and yoga facilities for holistic living",
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
