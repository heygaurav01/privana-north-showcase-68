import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Maximize } from "lucide-react";
import masterPlanImage from "@/assets/master-plan.png";
import floorPlanImage from "@/assets/floor-plan.png";

interface FloorPlansProps {
  onEnquireClick: () => void;
}

export const FloorPlans = ({ onEnquireClick }: FloorPlansProps) => {
  return (
    <section id="floor-plans" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Floor Plans & Master Plan
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our meticulously designed layouts and master plan
          </p>
        </div>

        {/* Unit Details */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-luxury-beige text-center">
              <div className="text-2xl font-bold text-luxury-brown mb-2">2 BHK</div>
              <div className="text-lg text-luxury-gold font-semibold mb-2">₹ On Request</div>
              <div className="text-sm text-muted-foreground">Size: 1200 Sq.ft.</div>
            </Card>
            <Card className="p-6 bg-luxury-gold/10 text-center border-2 border-luxury-gold">
              <div className="text-2xl font-bold text-luxury-brown mb-2">3 BHK</div>
              <div className="text-lg text-luxury-gold font-semibold mb-2">₹ 2.15 Cr*</div>
              <div className="text-sm text-muted-foreground">Size: 1700-1800 sq.ft.</div>
            </Card>
            <Card className="p-6 bg-luxury-beige text-center">
              <div className="text-2xl font-bold text-luxury-brown mb-2">4 BHK</div>
              <div className="text-lg text-luxury-gold font-semibold mb-2">₹ On Request</div>
              <div className="text-sm text-muted-foreground">Size: 2400 sq.ft.</div>
            </Card>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Master Plan */}
          <Card className="overflow-hidden group">
            <div className="relative aspect-square">
              <img
                src={masterPlanImage}
                alt="Master Plan"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                <Button
                  onClick={onEnquireClick}
                  variant="outline"
                  className="bg-white text-luxury-dark border-white hover:bg-luxury-gold hover:text-white"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
            <div className="p-6 bg-luxury-beige">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Master Plan
              </h3>
              <p className="text-sm text-muted-foreground">
                Complete project layout with all amenities
              </p>
            </div>
          </Card>

          {/* Floor Plan */}
          <Card className="overflow-hidden group">
            <div className="relative aspect-square">
              <img
                src={floorPlanImage}
                alt="Floor Plan"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                <Button
                  onClick={onEnquireClick}
                  variant="outline"
                  className="bg-white text-luxury-dark border-white hover:bg-luxury-gold hover:text-white"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
            <div className="p-6 bg-luxury-beige">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Apartment Floor Plans
              </h3>
              <p className="text-sm text-muted-foreground">
                Detailed layouts for 2, 3 & 4 BHK apartments
              </p>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <Button
            onClick={onEnquireClick}
            size="lg"
            className="bg-luxury-gold hover:bg-luxury-gold/90 text-white px-8"
          >
            View All Plans
          </Button>
        </div>
      </div>
    </section>
  );
};
