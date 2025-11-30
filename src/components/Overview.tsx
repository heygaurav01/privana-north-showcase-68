import { Building2, Home, Layers, MapPin, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Overview = () => {
  const stats = [
    {
      icon: <MapPin className="h-8 w-8" />,
      label: "Location",
      value: "Sector 9, Manesar",
    },
    {
      icon: <Layers className="h-8 w-8" />,
      label: "Land Parcel",
      value: "30 Acres",
    },
    {
      icon: <Home className="h-8 w-8" />,
      label: "Configuration",
      value: "2, 3 & 4 BHK",
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      label: "No. of Towers",
      value: "22 Towers",
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      label: "Floor Height",
      value: "G + 30",
    },
    {
      icon: <Home className="h-8 w-8" />,
      label: "Open Space",
      value: "75%",
    },
  ];

  const highlights = [
    "Luxury high-rise living with smart layouts",
    "Sprawling Acres of Lush Greenery with 75% open space",
    "Modern Amenity & Recreational Spaces",
    "Floral gardens with air-purifying Trees Species",
    "Close to metro, colleges & hospitals",
    "Quick access to NH-8 & Dwarka Expressway",
    "Striking glass facade with skyline views",
    "Natural light & ventilation in every apartment",
    "Near schools, malls & workplaces",
    "24×7 gated security",
    "High-growth investment zone",
    "Payment Plans: 30:40:30 & 25 X 4",
  ];

  return (
    <section id="overview" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Project Overview
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-luxury transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-center text-luxury-gold mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Highlights */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-serif font-bold text-center mb-12">
            Key Highlights
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-white rounded-lg hover:shadow-card transition-shadow"
              >
                <CheckCircle2 className="h-6 w-6 text-luxury-gold flex-shrink-0 mt-1" />
                <p className="text-foreground">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Project Description */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-card">
            <p className="text-foreground leading-relaxed mb-4">
              M3M GIC at Sector 9, Manesar, Gurgaon offers a lifestyle where modern architecture blends seamlessly with lush green landscapes and premium amenities, setting a new benchmark for luxury living. Designed for those who seek comfort and sophistication, these residences reflect thoughtful planning in every detail.
            </p>
            <p className="text-foreground leading-relaxed">
              GIC – Gurgaon International City is envisioned as a future-ready urban ecosystem where business, leisure, and sustainability come together. This integrated township redefines modern living, offering a balanced environment powered by innovation and surrounded by nature.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
