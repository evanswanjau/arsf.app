import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Calendar, Mail } from "lucide-react";

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      src: "/images/hero.jpg",
      alt: "Farm fields and production beds",
      category: "Fields",
      description:
        "Our main production area showing diverse crop rotations and bed preparation techniques.",
    },
    {
      src: "/images/hero2.jpg",
      alt: "Compost systems and biodiversity",
      category: "Sustainability",
      description:
        "Compost piles and biodiversity corridors that support soil health and beneficial insects.",
    },
    {
      src: "/images/partner.jpg",
      alt: "Nursery and propagation",
      category: "Nursery",
      description:
        "Our nursery area where we raise seedlings and propagate new plants for the farm.",
    },
    {
      src: "/images/contact.jpg",
      alt: "Farm path and welcome area",
      category: "Visit",
      description:
        "A view of the path leading to our welcome area where tours begin.",
    },
    {
      src: "/images/become-a-partner.jpg",
      alt: "Become a partner promo",
      category: "Visit",
      description: "Join our partnership network and collaborate with us.",
    },
    {
      src: "/images/biodiversity-corridors.jpg",
      alt: "Biodiversity corridors",
      category: "Sustainability",
      description:
        "Native strips and hedgerows that support pollinators and wildlife.",
    },
    {
      src: "/images/compost-systems.jpg",
      alt: "Compost systems",
      category: "Sustainability",
      description:
        "Layered compost piles transforming waste into soil fertility.",
    },
    {
      src: "/images/cover-cropping.jpg",
      alt: "Cover cropping",
      category: "Sustainability",
      description: "Green manures protecting soil and fixing nitrogen.",
    },
    {
      src: "/images/our-philosophy.jpg",
      alt: "Our philosophy",
      category: "Conservation",
      description: "Working with nature for long‑term resilience.",
    },
    {
      src: "/images/partners.jpg",
      alt: "Partners and collaboration",
      category: "Visit",
      description: "Collaboration moments with our partners and community.",
    },
    {
      src: "/images/pest-management.jpg",
      alt: "Integrated pest management",
      category: "Sustainability",
      description:
        "Ecological approaches like push–pull and beneficial habitats.",
    },
    {
      src: "/images/solar-energy.jpg",
      alt: "Solar energy array",
      category: "Sustainability",
      description: "Solar powering irrigation, processing, and lighting.",
    },
    {
      src: "/images/water-conservation.jpg",
      alt: "Water conservation",
      category: "Sustainability",
      description: "Drip irrigation and basins to save water and boost yields.",
    },
    {
      src: "/images/why-we-partner.jpg",
      alt: "Why we partner",
      category: "Visit",
      description:
        "Shared values driving impact in agriculture and conservation.",
    },
    // Numeric filenames - categorized as Fields
    {
      src: "/images/21861.jpg",
      alt: "Field work in tunnel",
      category: "Fields",
      description: "Hands-on fieldwork inside a tunnel house.",
    },
    {
      src: "/images/101228.jpg",
      alt: "Team in the field",
      category: "Fields",
      description: "Working together during harvest in the fields.",
    },
    {
      src: "/images/for-everyone.jpg",
      alt: "Dairy cattle feeding",
      category: "Fields",
      description: "Livestock at the feed line on a partner farm.",
    },
    {
      src: "/images/2148761805.jpg",
      alt: "Thumbs up in field",
      category: "Fields",
      description: "Happy farmers celebrating a good crop.",
    },
    {
      src: "/images/2148761812.jpg",
      alt: "Pruning in agroforestry plot",
      category: "Fields",
      description: "Maintenance in an agroforestry block.",
    },
    {
      src: "/images/2149142834.jpg",
      alt: "Maize harvest",
      category: "Fields",
      description: "Harvesting maize at maturity.",
    },
    {
      src: "/images/partners.jpg",
      alt: "Partners gathering",
      category: "Visit",
      description: "Gathering with partners and collaborators.",
    },
  ];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index].src);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const next = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(next);
    setSelectedImage(galleryImages[next].src);
  };

  const prevImage = () => {
    const prev =
      currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(prev);
    setSelectedImage(galleryImages[prev].src);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-10 overflow-hidden">
        <img
          src="/images/hero2.jpg"
          alt="Farm gallery"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Farm Gallery</h1>
          <p className="mt-4 text-white/90 max-w-3xl text-lg">
            A visual journey through our fields, practices, and the natural
            beauty of sustainable agriculture in action.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                    <div className="text-sm font-semibold">
                      {image.category}
                    </div>
                    <div className="text-xs opacity-90 mt-1">
                      {image.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt={galleryImages[currentIndex]?.alt}
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            <div className="absolute bottom-4 left-4 right-4 text-white text-center">
              <div className="text-lg font-semibold">
                {galleryImages[currentIndex]?.category}
              </div>
              <div className="text-sm opacity-90">
                {galleryImages[currentIndex]?.description}
              </div>
              <div className="text-xs opacity-70 mt-2">
                {currentIndex + 1} of {galleryImages.length}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-[#A4BE66]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#02463D]">
            See it in person
          </h2>
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
            These images capture just a glimpse of our farm. Book a tour to
            experience the sights, sounds, and smells of regenerative
            agriculture firsthand.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/farm-tours"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#02463D] text-white font-semibold hover:bg-[#013a33] transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Book a tour
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#02463D] text-[#02463D] font-semibold hover:bg-[#02463D] hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
