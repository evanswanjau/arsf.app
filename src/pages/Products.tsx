import React from "react";

const items = [
  {
    name: "Red Onions",
    desc: "Crisp, aromatic onions grown with composted soils and efficient drip irrigation.",
    img: "/images/products/red-onion.jpg",
  },
  {
    name: "Green Bell Peppers",
    desc: "Thick-walled peppers with a sweet bite from healthy, living soils.",
    img: "/images/products/green-peppers.jpg",
  },
  {
    name: "Carrots",
    desc: "Tender, juicy carrots rich in beta-carotene, cultivated in raised beds.",
    img: "/images/products/carrots.jpg",
  },
  {
    name: "Cabbage",
    desc: "Tight, crunchy heads selected for flavor and shelf life.",
    img: "/images/products/cabbages.webp",
  },
  {
    name: "Maize",
    desc: "Open-pollinated varieties for resilience and taste.",
    img: "/images/products/maize.png",
  },
  {
    name: "Free-range Eggs",
    desc: "Pasture-raised hens produce nutrient-dense eggs.",
    img: "/images/products/eggs.jpeg",
  },
];

const Products: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#02463D" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Products & Produce
          </h1>
          <p className="mt-4 text-white/90 max-w-3xl text-lg">
            Our catalogue reflects the rhythms of the seasons and the care of
            regenerative agriculture. We prioritize flavor, nutrition, and
            methods that restore the land.
          </p>
        </div>
      </section>

      {/* Featured grid */}
      <section className="py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((p) => (
              <article
                key={p.name}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-gray-700 leading-relaxed">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                t: "Regenerative inputs",
                d: "Compost, cover crops, and mulches improve soil structure and nutrient cycling while reducing external inputs.",
              },
              {
                t: "Water-wise",
                d: "Drip systems, mulching, and micro-catchments dramatically reduce evaporation and runoff.",
              },
              {
                t: "Local varieties",
                d: "We work with adaptive, open-pollinated seeds and farmer-selected varieties suited to our climate.",
              },
            ].map((c) => (
              <article
                key={c.t}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200"
              >
                <h4 className="text-lg font-semibold text-[#02463D]">{c.t}</h4>
                <p className="mt-2 text-gray-700 leading-relaxed">{c.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering / partnerships */}
      <section className="py-16" style={{ backgroundColor: "#02463D" }}>
        <div className="max-w-7xl mx-auto px-6 text-white">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold">
                Wholesale, retail, and kitchen partners
              </h2>
              <p className="mt-4 text-white/85 leading-relaxed">
                We supply restaurants, schools, and community kitchens with
                fresh produce and eggs. If you are building a local sourcing
                program or designing a seasonal menu, we would love to
                collaborate.
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
                Visit the farm
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
