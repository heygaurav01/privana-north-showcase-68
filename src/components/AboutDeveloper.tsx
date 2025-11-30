import { Building, Award, Users, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

export const AboutDeveloper = () => {
  const achievements = [
    {
      icon: <Building className="h-8 w-8" />,
      value: "70+ Years",
      label: "Of Excellence",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: "284 msf",
      label: "Planned Projects",
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: "15 States",
      label: "Pan India Presence",
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: "24 Cities",
      label: "Across India",
    },
  ];

  return (
    <section className="py-20 bg-luxury-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            About DLF Limited
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-4" />
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-white/90 leading-relaxed mb-6">
            DLF has nearly 70 years of track record of sustained growth, customer satisfaction, and innovation. 
            The company has 284 msf of planned projects with 41 msf of projects under construction. DLF's primary 
            business is development of residential, commercial and retail properties.
          </p>
          <p className="text-lg text-white/90 leading-relaxed">
            The company has a unique business model with earnings arising from development and rentals. Its exposure 
            across businesses, segments and geographies, mitigates any down-cycles in the market. From developing 22 
            major colonies in Delhi, DLF is now present across 15 states-24 cities in India.
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
