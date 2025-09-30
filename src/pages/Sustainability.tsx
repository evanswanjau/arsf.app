import React from "react";
import { Leaf, Droplets, Recycle, Sun, Zap, Shield } from "lucide-react";
import { Calendar, MessageCircle } from "lucide-react";

const Sustainability: React.FC = () => {
  const practices = [
    {
      icon: <Recycle className="w-8 h-8 text-[#02463D]" />,
      title: "Compost Systems",
      description:
        "We transform farm waste, kitchen scraps, and plant residues into nutrient-rich compost that feeds our soil. This is a cornerstone on many Kenyan smallholder and organic farms.",
      details:
        "Three-tier system: fresh materials, active decomposition, and finished compost. We use readily available materials (maize stover, market waste, manure) and basic temperature monitoring for pathogen control before field application.",
      image: "/images/compost-systems.jpg",
    },
    {
      icon: <Leaf className="w-8 h-8 text-[#02463D]" />,
      title: "Cover Cropping",
      description:
        "Between main crops we plant green manures like lablab, sunn hemp, and cowpeas—common in Kenya—for erosion control, nitrogen fixation, and biomass.",
      details:
        "Rotations include lablab/sunn hemp in warmer months and oats/vetch in cooler periods. We terminate before flowering and incorporate 2–3 weeks before planting to avoid pest carryover and maximize soil organic matter.",
      image: "/images/cover-cropping.jpg",
    },
    {
      icon: <Droplets className="w-8 h-8 text-[#02463D]" />,
      title: "Water Conservation",
      description:
        "Drip irrigation, mulch, zai/micro-catchments, and roof water harvesting are widely adopted across Kenya’s arid and semi‑arid lands.",
      details:
        "We combine pressure‑compensating drip lines with guttered storage tanks and thick organic mulches. Where suitable, we use tied ridges and basins to slow runoff and improve infiltration.",
      image: "/images/water-conservation.jpg",
    },
    {
      icon: <Shield className="w-8 h-8 text-[#02463D]" />,
      title: "Integrated Pest Management",
      description:
        "We prioritize ecological IPM. Kenya’s push–pull (desmodium + Napier) from icipe is a gold‑standard example for stemborer and fall armyworm control.",
      details:
        "Habitat for beneficials via flowering borders, crop rotation, resistant varieties, botanicals like neem, and regular scouting. Push–pull and timely rogueing reduce chemical use and protect soil life.",
      image: "/images/pest-management.jpg",
    },
    {
      icon: <Sun className="w-8 h-8 text-[#02463D]" />,
      title: "Solar Energy",
      description:
        "Solar pumps and lighting are mainstream in Kenya for irrigation and post‑harvest handling, reducing fuel costs and emissions.",
      details:
        "A 12 kW array powers pumps and LED lighting; battery storage bridges cloudy periods. We are evaluating solar‑powered cold storage to cut post‑harvest losses in hot seasons.",
      image: "/images/solar-energy.jpg",
    },
    {
      icon: <Zap className="w-8 h-8 text-[#02463D]" />,
      title: "Biodiversity Corridors",
      description:
        "Agroforestry hedges and native strips—Grevillea, Calliandra, and indigenous shrubs—provide habitat, windbreaks, and fodder while supporting pollinators.",
      details:
        "Corridors 3–5 m wide between blocks with mixed native species. We track pollinator presence and beneficial insects to inform pruning and replanting cycles.",
      image: "/images/biodiversity-corridors.jpg",
    },
  ];

  const metrics = [
    {
      label: "Soil Organic Matter",
      value: "4.2%",
      description: "Increased from 1.8% in 2020",
    },
    {
      label: "Water Usage Reduction",
      value: "35%",
      description: "Compared to conventional methods",
    },
    {
      label: "Carbon Sequestration",
      value: "2.3 t/ac/yr",
      description: "Through soil building practices",
    },
    {
      label: "Beneficial Insect Species",
      value: "47",
      description: "Identified in biodiversity surveys",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-10 overflow-hidden">
        <img
          src="/images/pest-management.jpg"
          alt="Sustainable farming practices"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            Sustainability Practices
          </h1>
          <p className="mt-4 text-white/90 max-w-3xl text-lg">
            Our commitment to regenerative agriculture goes beyond organic
            certification. We're building a farm ecosystem that heals the land
            while producing nutritious food.
          </p>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#02463D] text-center mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#02463D] mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-600">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practices */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#02463D] text-center mb-12">
            Our Practices
          </h2>
          <div className="space-y-24">
            {practices.map((practice, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    {practice.icon}
                    <h3 className="text-2xl font-bold text-[#02463D]">
                      {practice.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {practice.description}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {practice.details}
                  </p>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <img
                    src={practice.image}
                    alt={practice.title}
                    className="w-full h-96 object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Kenya-specific resources */}
          <div className="mt-20 max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-[#02463D] mb-3">
              Kenyan resources
            </h3>
            <p className="text-gray-700">
              Learn more from leading Kenyan institutions:{" "}
              <a
                href="https://www.kalro.org/"
                target="_blank"
                rel="noreferrer"
                className="text-[#02463D] underline"
              >
                KALRO
              </a>{" "}
              for agronomic guidance and{" "}
              <a
                href="https://www.icipe.org/"
                target="_blank"
                rel="noreferrer"
                className="text-[#02463D] underline"
              >
                ICIPE
              </a>{" "}
              for Integrated Pest Management and push–pull resources.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#02463D] mb-6">
                Our Philosophy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We believe that healthy soil is the foundation of healthy food
                and a healthy planet. Our practices are designed to work with
                natural systems, not against them.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every decision we make considers the long-term health of our
                soil, water, and surrounding ecosystem. We measure success not
                just in harvest yields, but in soil organic matter, water
                retention, and biodiversity.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This approach takes patience and commitment, but the results
                speak for themselves: increasingly fertile soil, resilient
                crops, and a farm that gives back to the environment more than
                it takes.
              </p>
            </div>
            <div>
              <img
                src="/images/our-philosophy.jpg"
                alt="Farm team working with soil"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#02463D]">Learn More</h2>
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
            Want to see these practices in action? Join us for a farm tour or
            workshop to learn how you can apply regenerative agriculture
            principles in your own garden.
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
              href="/faqs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#02463D] text-[#02463D] font-semibold hover:bg-[#02463D] hover:text-white transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Got questions?
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sustainability;
