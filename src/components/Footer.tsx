import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface FooterProps {
  onOpenPartner?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenPartner }) => {
  const companyLinks = [
    { label: "Home", href: "/" },
    { label: "Who we are", href: "/about" },
    { label: "Our products", href: "/products" },
    { label: "Farm tours", href: "/farm-tours" },
    { label: "Photo gallery", href: "/gallery" },
  ];

  const supportLinks = [
    { label: "Sustainability", href: "/sustainability" },
    { label: "Our partners", href: "/partners" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact us", href: "/contact" },
  ];

  return (
    <footer className="bg-[#02463D] text-white">
      {/* Main Footer Content */}
      <div className="pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top area - Fixed grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">
            {/* Brand - Takes 5 columns on large screens */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="/images/logo-white.png"
                  alt="ARABUKO SOKOKE RIDGE FARM"
                  className="w-60 h-auto object-contain"
                />
              </div>
              <p className="text-white/80 leading-relaxed mb-6 lg:pr-10">
                Pioneering sustainable agriculture and conservation in Kenya's
                most biodiverse region through innovative farming practices and
                community partnerships.
              </p>

              <button
                onClick={onOpenPartner}
                className="inline-flex items-center justify-center rounded-lg bg-white text-[#02463D] px-8 py-3 font-bold cursor-pointer hover:bg-[#A4BE66] hover:text-[#013a33] transition-all duration-300 transform"
              >
                Become a Partner
              </button>
            </div>

            {/* Company Links - Takes 2 columns on large screens */}
            <div className="lg:col-span-2">
              <h4 className="text-xl font-bold mb-6 pb-2 border-b-2 border-white/20">
                Company
              </h4>
              <ul className="space-y-3 text-white/90">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-[#A4BE66] hover:underline transition-all duration-200 flex items-center gap-2"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links - Takes 2 columns on large screens */}
            <div className="lg:col-span-2">
              <h4 className="text-xl font-bold mb-6 pb-2 border-b-2 border-white/20">
                Support
              </h4>
              <ul className="space-y-3 text-white/90">
                {supportLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-[#A4BE66] hover:underline transition-all duration-200 flex items-center gap-2"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact - Takes 3 columns on large screens */}
            <div className="lg:col-span-3">
              <h4 className="text-xl font-bold mb-6 pb-2 border-b-2 border-white/20">
                Contact
              </h4>
              <ul className="space-y-4 text-white/90">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Arabuko Sokoke, Kilifi County, Kenya</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <a
                    href="tel:+254700000000"
                    className="hover:text-[#A4BE66] hover:underline"
                  >
                    +254 700 000 000
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <a
                    href="mailto:info@arabukoridgefarm.com"
                    className="hover:text-[#A4BE66] hover:underline"
                  >
                    info@arabukoridgefarm.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Operating Hours:</div>
                    <div className="text-sm mt-1 leading-6">
                      Mon–Sat: 8:00 AM – 5:00 PM
                      <br />
                      Sundays & Holidays: Closed
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-12 border-t border-white/15" />

          {/* Bottom bar */}
          <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm opacity-80 text-center md:text-left">
              © {new Date().getFullYear()} Arabuko Sokoke Ridge Farm. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6 text-sm opacity-90">
              <a
                href="/terms"
                className="hover:text-[#A4BE66] hover:underline transition-colors"
              >
                Terms & Conditions
              </a>
              <a
                href="/privacy"
                className="hover:text-[#A4BE66] hover:underline transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
