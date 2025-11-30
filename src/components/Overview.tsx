import { Building2, Home, Layers, MapPin, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Overview = () => {
  const stats = [
    {
      icon: <MapPin className="h-8 w-8" />,
      label: "Location",
      value: "Sector 77, Gurgaon",
    },
    {
      icon: <Layers className="h-8 w-8" />,
      label: "Land Area",
      value: "17.7 Acres*",
    },
    {
      icon: <Home className="h-8 w-8" />,
      label: "No. of Units",
      value: "1162*",
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      label: "No. of Towers",
      value: "06*",
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      label: "No. of Floors",
      value: "G + 50*",
    },
    {
      icon: <Home className="h-8 w-8" />,
      label: "Unit Variants",
      value: "4 BHK",
    },
  ];

  const highlights = [
    "Gated Community Spread over 25 Acres part of 115 acres township",
    "Low-Density High-Rise Development",
    "Featuring an impressive 88% lush green area",
    "Equipped with a Clubhouse with Modern Amenities",
    "Each Tower consists of Ground + 50 Floors",
    "Three-Side Open Apartments on Each Floor",
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

        {/* RERA Information */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-luxury-gold/10 px-6 py-3 rounded-full">
            <span className="text-sm font-medium text-luxury-brown">
              RERA ID: GGM/954/686/2025/57 | Status: Under Construction
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
