import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, User } from "lucide-react";
import { submitFormData } from "@/lib/api";
import { trackContactForm } from "@/lib/analytics";

interface ContactFormProps {
  onClose?: () => void;
}

export const ContactForm = ({ onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitFormData({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        countryCode: "", // Assuming country code is handled or empty for now
      });

      if (result.success) {
        trackContactForm("contact");
        toast({
          title: "Thank you for your interest!",
          description: result.message,
        });
        if (onClose) onClose();
        navigate("/thank-you.html");
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Only allow numbers
      const numericValue = value.replace(/[^0-9]/g, "");
      setFormData({
        ...formData,
        [name]: numericValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground flex items-center space-x-2">
          <User className="h-4 w-4" />
          <span>Full Name *</span>
        </label>
        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
          className="border-luxury-brown/20 focus:border-luxury-gold"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground flex items-center space-x-2">
          <Phone className="h-4 w-4" />
          <span>Phone Number *</span>
        </label>
        <Input
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+91 XXXXX XXXXX"
          required
          className="border-luxury-brown/20 focus:border-luxury-gold"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground flex items-center space-x-2">
          <Mail className="h-4 w-4" />
          <span>Email Address (Optional)</span>
        </label>
        <Input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          className="border-luxury-brown/20 focus:border-luxury-gold"
        />
      </div>

      <div className="text-xs text-muted-foreground">
        I authorize company representatives to call, SMS, email or WhatsApp me about its products and offers.
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-white py-6 text-lg"
      >
        {isSubmitting ? "Submitting..." : "Submit Enquiry"}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        For immediate assistance, call us at{" "}
        <a href="tel:+918200201202" className="text-luxury-gold hover:underline">
          +91 8200 201 202
        </a>
      </p>
    </form>
  );
};
