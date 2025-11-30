import { Building, Award, Users, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

export const AboutDeveloper = () => {
  const achievements = [
    {
      icon: <Building className="h-8 w-8" />,
      value: "Premium",
      label: "Quality Projects",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: "Trusted",
      label: "Developer Brand",
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: "Thousands",
      label: "Happy Families",
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: "Award",
      label: "Winning Projects",
    },
  ];

  return (
    <section className="py-20 bg-luxury-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            About M3M Group
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-4" />
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-white/90 leading-relaxed mb-6">
            M3M Group is a renowned real estate developer committed to delivering world-class residential and commercial 
            properties. With a legacy of excellence and innovation, M3M has established itself as a trusted name in the 
            Indian real estate sector, creating landmark projects that redefine luxury living.
          </p>
          <p className="text-lg text-white/90 leading-relaxed">
            The company's portfolio includes premium residential apartments, commercial spaces, and integrated townships 
            that combine modern architecture with sustainable development. M3M's projects are characterized by their 
            prime locations, exceptional design quality, and world-class amenities, making them preferred choices for 
            discerning homebuyers and investors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-colors"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="text-luxury-gold">{achievement.icon}</div>
                <div className="text-3xl font-bold text-luxury-gold">
                  {achievement.value}
                </div>
                <div className="text-sm text-white/80">{achievement.label}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
