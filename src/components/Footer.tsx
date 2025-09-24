import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#02463D] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="text-3xl font-bold mb-2">ARABUKO SOKOKE</div>
            <div className="text-lg opacity-80">RIDGE FARM</div>
          </div>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Pioneering sustainable agriculture and conservation in Kenya's most
            biodiverse region
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="#"
              className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
            {[
              { name: "About Us", id: "about" },
              { name: "Farm Tours", id: "activities" },
              { name: "Our Products", id: "products" },
              { name: "Gallery", id: "gallery" },
              { name: "Conservation", id: "impact" },
              { name: "Visit Us", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  document
                    .getElementById(item.id)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-yellow-300 transition-colors opacity-80 hover:opacity-100"
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="my-8">
            <div className="inline-block w-32 h-8 opacity-20">
              <div className="grid grid-cols-8 gap-1 h-full">
                {Array.from({ length: 32 }).map((_, i) => (
                  <div key={i} className="bg-white rounded-full" />
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8">
            <p className="text-sm opacity-70">
              © 2024 Arabuko Sokoke Ridge Farm. All rights reserved.
            </p>
            <p className="text-xs opacity-50 mt-2">
              Sustainable agriculture • Conservation • Education • Community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
