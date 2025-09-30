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
    name: "Eggs",
    desc: "Pasture-raised hens produce nutrient-dense eggs.",
    img: "/images/products/eggs.jpeg",
  },
  {
    name: "Spinach",
    desc: "Leafy greens grown in living soils for great flavor and nutrition.",
    img: "/images/products/spinach.jpg",
  },
  {
    name: "Tomatoes",
    desc: "Field-ripened tomatoes harvested for peak flavor.",
    img: "/images/products/tomatoes.webp",
  },
  {
    name: "Kale (Sukuma)",
    desc: "Hearty greens favored in local kitchens, grown with mulch and drip.",
    img: "/images/products/kale.jpg",
  },
  {
    name: "Chilli Peppers",
    desc: "Spicy varieties for sauces and seasoning, grown responsibly.",
    img: "/images/products/chilli-peppers.png",
  },
  {
    name: "Spring Onions",
    desc: "Tender scallions for salads and cooking.",
    img: "/images/products/spring-onions.webp",
  },
  {
    name: "Coriander",
    desc: "Fresh coriander for cooking and garnishing.",
    img: "/images/products/coriander.webp",
  },
  {
    name: "Avocado",
    desc: "Fresh avocados for cooking and garnishing.",
    img: "/images/products/avocado.webp",
  },
  {
    name: "Mangoes",
    desc: "Vibrant mangoes rich in flavor and color.",
    img: "/images/products/mangoes.webp",
  },
  {
    name: "Ginger",
    desc: "Fresh ginger for cooking and garnishing.",
    img: "/images/products/ginger.webp",
  },
  {
    name: "Garlic",
    desc: "Fresh garlic for cooking and garnishing.",
    img: "/images/products/garlic.webp",
  },
];

const Products: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="relative py-10 overflow-hidden"
        aria-label="Products hero"
        style={{
          backgroundImage: "url(/images/products.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-6 py-20">
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

      {/* Products grid */}
      <section className="py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {items.map((p) => (
              <article
                key={p.name}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-56 object-cover"
                  loading="lazy"
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
        </div>
      </section>

      {/* Ordering / partnerships CTA */}
      <section className="py-16" style={{ backgroundColor: "#A4BE66" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#02463D]">
                Wholesale, retail, and kitchen partners
              </h2>
              <p className="mt-4 text-gray-800/90 leading-relaxed">
                We supply restaurants, schools, and community kitchens with
                fresh produce and eggs. If you are building a local sourcing
                program or designing a seasonal menu, we would love to
                collaborate.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg bg-[#02463D] text-white font-semibold hover:bg-[#013a33] transition-colors"
              >
                Contact us
              </a>
              <a
                href="#visit"
                className="px-6 py-3 rounded-lg border border-[#02463D] text-[#02463D] font-semibold hover:bg-[#02463D] hover:text-white transition-colors"
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
