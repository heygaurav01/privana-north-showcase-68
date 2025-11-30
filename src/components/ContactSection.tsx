import { Card } from "@/components/ui/card";
import { ContactForm } from "./ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-luxury-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take the first step towards your dream home. Our team is ready to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <Card className="p-6 hover:shadow-card transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-luxury-gold/10 rounded-full">
                      <Phone className="h-6 w-6 text-luxury-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                      <a
                        href="tel:+918200201202"
                        className="text-luxury-gold hover:underline"
                      >
                        +91 8200 201 202
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-card transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-luxury-gold/10 rounded-full">
                      <Mail className="h-6 w-6 text-luxury-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Email</h4>
                      <a
                        href="mailto:contact@elaris.consulting"
                        className="text-luxury-gold hover:underline"
                      >
                        contact@elaris.consulting
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-card transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-luxury-gold/10 rounded-full">
                      <MapPin className="h-6 w-6 text-luxury-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Location</h4>
                      <p className="text-muted-foreground">
                        Sector 77, Gurgaon, Haryana
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div className="p-6 bg-luxury-gold/10 rounded-lg">
              <h4 className="font-semibold text-foreground mb-3">Why Choose DLF Privana North?</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Premium 4 BHK apartments with 88% green area</li>
                <li>✓ Low-density high-rise development</li>
                <li>✓ World-class amenities and clubhouse</li>
                <li>✓ Prime location in Sector 77, Gurgaon</li>
                <li>✓ From a trusted developer with 70+ years of legacy</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 shadow-luxury">
            <h3 className="text-2xl font-serif font-bold mb-6">Send Us a Message</h3>
            <ContactForm />
          </Card>
        </div>
      </div>
    </section>
  );
};
