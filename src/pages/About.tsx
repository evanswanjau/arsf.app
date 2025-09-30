import React from "react";
import { Mail, Calendar } from "lucide-react";

const About: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="relative overflow-hidden min-h-[32rem] md:min-h-[36rem]"
        style={{
          backgroundImage: "url(/images/our-philosophy.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              About Arabuko Sokoke Ridge Farm
            </h1>
            <p className="mt-5 text-lg opacity-90">
              We are a community-first regenerative agriculture initiative in
              Kilifi, Kenya. Our purpose is simple and bold: grow nutritious
              food, restore biodiversity, and help people rediscover a healthy
              relationship with land and one another. Everything we do is
              evidence-led, partner-driven, and designed for long-term
              environmental and social resilience.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#02463D]">Our Story</h2>
              <div className="mt-6 space-y-5 text-gray-700 leading-relaxed text-lg">
                <p>
                  Arabuko Sokoke Ridge Farm began as a small demonstration plot
                  on the edge of the Arabuko-Sokoke forest, a globally
                  significant biodiversity hotspot. What started as a handful of
                  beds and a nursery has grown into a living classroom where
                  local farmers, conservationists, students, and visitors can
                  learn practical methods for soil health, water stewardship,
                  and nature-positive livelihoods. We cultivate with curiosity
                  and humility, always measuring results and sharing the lessons
                  openly.
                </p>
                <p>
                  From day one, we made three commitments. First, we will only
                  deploy practices we are willing to demonstrate in our own
                  fields. Second, we will design with people and ecosystems in
                  mind, which means building for long-term benefits instead of
                  short-term gains. Third, we will relentlessly document
                  outcomes—yields, survival rates, livelihoods, biodiversity—and
                  use those insights to improve the work and support others to
                  do the same.
                </p>
                <p>
                  Today, the ridge is both farm and field lab. You will find
                  indigenous seedlings acclimating under shade cloth,
                  intercropped beds testing water-efficient spacing, pollinator
                  strips drawing bees to the garden’s edge, compost windrows
                  quietly transforming waste into life, and families moving
                  slowly along tree-shaded paths. This is a place to learn, to
                  breathe, and to build a shared future that is good for people
                  and planet.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/images/biodiversity-corridors.jpg"
                alt="Farm view across the ridge"
                className="w-full h-[45rem] object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#02463D] mb-8">
            In Pictures
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <img
              src="/images/compost-systems.jpg"
              alt="Compost systems"
              className="w-full h-64 object-cover rounded-lg"
              loading="lazy"
            />
            <img
              src="/images/water-conservation.jpg"
              alt="Water conservation"
              className="w-full h-64 object-cover rounded-lg"
              loading="lazy"
            />
            <img
              src="/images/solar-energy.jpg"
              alt="Solar energy"
              className="w-full h-64 object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#02463D]">
            Principles That Guide Our Work
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {[
              {
                t: "Regeneration over extraction",
                d: "We build healthy soils, conserve water, and enhance biodiversity. Every season, our fields should be richer, more alive, and more resilient than the one before.",
              },
              {
                t: "Community as the center",
                d: "We co-design with smallholder farmers, women’s groups, youth, researchers, and public institutions. Knowledge flows both ways and ownership is shared.",
              },
              {
                t: "Evidence and openness",
                d: "We track outcomes and share our failures and successes. Data makes us better partners and better stewards of resources and trust.",
              },
              {
                t: "Appropriate technology",
                d: "We adopt tools that are reliable, repairable, and locally relevant—from rainwater harvesting and drip irrigation to open-source MRV and soil tests.",
              },
              {
                t: "Livelihoods with dignity",
                d: "We align agricultural productivity with fair markets, decent work, and resilient local supply chains that retain value in the community.",
              },
              {
                t: "Joy and learning",
                d: "A thriving farm is a place of discovery. We host tours, workshops, and volunteer days that make sustainability practical, welcoming, and fun.",
              },
            ].map((c) => (
              <article key={c.t} className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#02463D]">{c.t}</h3>
                <p className="mt-3 text-gray-700 leading-relaxed">{c.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach (improved layout) */}
      <section className="py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#02463D] mb-10">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <article className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-[#02463D]">
                Regenerative farming
              </h3>
              <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
                <li>Compost, cover crops, mulches</li>
                <li>Water-wise drip irrigation</li>
                <li>Flavor- and soil-first rotations</li>
              </ul>
            </article>
            <article className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-[#02463D]">
                Conservation in practice
              </h3>
              <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
                <li>Biodiversity corridors</li>
                <li>Rain capture and basins</li>
                <li>Push–pull and beneficial habitats</li>
              </ul>
            </article>
            <article className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-[#02463D]">
                Community training
              </h3>
              <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
                <li>Hands-on field workshops</li>
                <li>School and youth programs</li>
                <li>Open data and shared learnings</li>
              </ul>
            </article>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            <img
              src="/images/for-everyone.jpg"
              alt="For everyone"
              className="w-full h-40 object-cover rounded-lg"
              loading="lazy"
            />
            <img
              src="/images/our-philosophy.jpg"
              alt="Our philosophy"
              className="w-full h-40 object-cover rounded-lg"
              loading="lazy"
            />
            <img
              src="/images/pest-management.jpg"
              alt="IPM"
              className="w-full h-40 object-cover rounded-lg"
              loading="lazy"
            />
            <img
              src="/images/partners.jpg"
              alt="Community"
              className="w-full h-40 object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20" style={{ backgroundColor: "#A4BE66" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#02463D]">
                Walk the fields with us
              </h2>
              <p className="mt-4 text-gray-800/90 leading-relaxed">
                The best way to understand our work is to feel the soil, smell
                the compost, and see the canopy. Book a visit, join a workshop,
                or partner with us to scale nature-positive food systems across
                the region.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#02463D] text-white font-semibold hover:bg-[#013a33] transition-colors"
              >
                <Mail className="w-5 h-5" />
                Contact us
              </a>
              <a
                href="/farm-tours"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#02463D] text-[#02463D] font-semibold hover:bg-[#02463D] hover:text-white transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Plan a tour
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
