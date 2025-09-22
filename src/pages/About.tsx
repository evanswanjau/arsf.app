import React from "react";

const About: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#02463D" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-24">
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
                src="/images/hero3.jpg"
                alt="Farm view across the ridge"
                className="w-full h-[28rem] object-cover rounded-lg"
              />
            </div>
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
              <article
                key={c.t}
                className="bg-white p-6 rounded-lg border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-[#02463D]">{c.t}</h3>
                <p className="mt-3 text-gray-700 leading-relaxed">{c.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#02463D]">
                Impact You Can Measure
              </h2>
              <div className="mt-6 space-y-5 text-gray-700 leading-relaxed">
                <p>
                  We believe impact must be verifiable. Our team combines farmer
                  knowledge with simple monitoring tools to track soil organic
                  matter, water usage, seedling survival, crop yields, and
                  household income. We use this information to refine our
                  practices, inform policy, and guide investment.
                </p>
                <p>
                  Over recent seasons, survival rates for indigenous seedlings
                  have climbed due to better species selection, mulching, and
                  timing. Participating farmers report steadier incomes through
                  diversified production and improved market access. Our
                  workshops—ranging from composting and agroforestry design to
                  beekeeping—help transfer these practices quickly and
                  confidently.
                </p>
                <p>
                  Impact also means stories: a school that planted a food
                  forest; a women’s group that launched a nursery enterprise; a
                  youth cohort that designed a water-saving market garden; a
                  researcher who co-authored an open dataset; a family that now
                  spends weekends tending a shared plot. These journeys shape
                  the ridge as much as the trees themselves.
                </p>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { n: "10,000+", l: "Trees planted" },
                  { n: "2,500", l: "Farmers trained" },
                  { n: "98%", l: "Seedling survival" },
                  { n: "15", l: "Village groups" },
                ].map((m) => (
                  <div
                    key={m.l}
                    className="bg-gray-50 p-6 text-center rounded-lg border border-gray-200"
                  >
                    <div className="text-2xl font-extrabold text-[#02463D]">
                      {m.n}
                    </div>
                    <div className="text-gray-700 mt-1">{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20" style={{ backgroundColor: "#02463D" }}>
        <div className="max-w-7xl mx-auto px-6 text-white">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold">Walk the fields with us</h2>
              <p className="mt-4 text-white/85 leading-relaxed">
                The best way to understand our work is to feel the soil, smell
                the compost, and see the canopy. Book a visit, join a workshop,
                or partner with us to scale nature-positive food systems across
                the region.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-white text-[#02463D] font-semibold"
              >
                Contact us
              </a>
              <a
                href="#visit"
                className="px-6 py-3 border border-white text-white font-semibold hover:bg-white hover:text-[#02463D]"
              >
                Plan a visit
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
