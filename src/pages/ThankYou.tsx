import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Home } from "lucide-react";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-luxury-beige px-4">
      <div className="max-w-2xl w-full text-center space-y-8 py-12">
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center animate-scale-in">
            <CheckCircle2 className="h-12 w-12 text-green-600" />
          </div>
        </div>

        <div className="space-y-4 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Thank You!
          </h1>
          <p className="text-xl text-muted-foreground">
            Your enquiry has been submitted successfully
          </p>
        </div>

        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-card animate-fade-in">
          <p className="text-foreground leading-relaxed">
            Thank you for your interest in <span className="font-semibold text-luxury-gold">M3M GIC Gurugram</span>. 
            Our team will contact you shortly to discuss your requirements and answer any questions you may have.
          </p>
        </div>

        <div className="space-y-4 pt-4">
          <p className="text-sm text-muted-foreground">
            For immediate assistance, please call us at{" "}
            <a href="tel:+918200201202" className="text-luxury-gold hover:underline font-medium">
              +91 8200 201 202
            </a>
          </p>

          <Button
            onClick={() => navigate("/")}
            size="lg"
            className="bg-luxury-gold hover:bg-luxury-gold/90 text-white px-8"
          >
            <Home className="h-5 w-5 mr-2" />
            Back to Home
          </Button>
        </div>

        <div className="pt-8 text-xs text-muted-foreground">
          <p>We typically respond within 2-4 hours during business hours.</p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
