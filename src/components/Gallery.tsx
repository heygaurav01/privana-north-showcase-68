import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import exteriorImage from "@/assets/project-exterior-1.png";
import entranceImage from "@/assets/project-entrance.png";
import clubhouseImage from "@/assets/project-clubhouse.png";
import towersImage from "@/assets/project-towers.png";
import gardenImage from "@/assets/project-garden.png";
import aerialImage from "@/assets/project-aerial.png";
import lobbyImage from "@/assets/project-lobby.png";
import amenitiesImage from "@/assets/project-amenities.png";

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: exteriorImage, alt: "DLF Privana North Exterior" },
    { src: entranceImage, alt: "Grand Entrance" },
    { src: clubhouseImage, alt: "Clubhouse View" },
    { src: towersImage, alt: "Tower View" },
    { src: gardenImage, alt: "Garden & Amenities" },
    { src: aerialImage, alt: "Aerial View" },
    { src: lobbyImage, alt: "Lobby Area" },
    { src: amenitiesImage, alt: "Premium Amenities" },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the stunning architecture and premium amenities that make DLF Privana North exceptional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer shadow-card hover:shadow-luxury transition-all duration-300"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
