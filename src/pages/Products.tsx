import React from "react";

// Shared product type for all product cards/categories
interface Product {
  name: string;
  desc: string;
  img?: string | null;
  placeholder?: string;
}

// Dairy Farm & Products
const dairyProducts = [
  {
    name: "Arabuko Mala",
    desc: "Traditional fermented milk drink, rich in probiotics and nutrients.",
    img: "/images/products/mala.jpg",
  },
  {
    name: "Arabuko Milk",
    desc: "Fresh, pure milk from our dairy cows, rich in calcium and protein.",
    img: "/images/products/milk.jpg",
  },
  {
    name: "Arabuko Yoghurt",
    desc: "Creamy, natural yoghurt made from our fresh milk.",
    img: "/images/products/yoghurt.webp",
  },
  {
    name: "Arabuko Butter",
    desc: "Rich, creamy butter churned from our fresh cream.",
    img: "/images/products/butter.jpg",
  },
  {
    name: "Arabuko Cheese",
    desc: "Artisanal cheese varieties made from our premium milk.",
    img: "/images/products/cheese.jpg",
  },
];

// Apiary Products
const apiaryProducts = [
  {
    name: "Arabuko Honey",
    desc: "Pure, raw honey from our apiary, rich in flavor and nutrients.",
    img: "/images/products/honey.jpg",
  },
  {
    name: "Arabuko Wax",
    desc: "Natural beeswax for candles, cosmetics, and crafts.",
    img: "/images/products/wax.webp",
  },
  {
    name: "Arabuko Propolis",
    desc: "Natural propolis with antimicrobial properties for health and wellness.",
    img: "/images/products/propolis.jpg",
  },
];

// Poultry Farm
const poultryProducts = [
  {
    name: "Arabuko Chicken",
    desc: "Free-range chickens raised on our integrated farm.",
    img: "/images/products/chicken.jpg",
  },
  {
    name: "Arabuko Eggs",
    desc: "Fresh eggs from pasture-raised hens, rich in nutrients.",
    img: "/images/products/eggs.jpeg",
  },
  {
    name: "Arabuko Kienyeji",
    desc: "Indigenous chicken breeds, known for their flavor and hardiness.",
    img: "/images/products/kienyeji.jpg",
  },
];

// Feed Lot
const feedlotProducts = [
  {
    name: "Arabuko Beef",
    desc: "Quality beef from our feed lot operations, raised on natural feed.",
    img: "/images/products/beef.jpg",
  },
  {
    name: "Arabuko Goats",
    desc: "Healthy goats raised in our integrated farming system.",
    img: "/images/products/goat.jpg",
  },
];

// Ornamental Birds
const ornamentalBirds = [
  {
    name: "Tausi (Peacocks)",
    desc: "Beautiful peacocks adding elegance and beauty to our farm.",
    img: "/images/products/tausi.jpg",
  },
  {
    name: "Brahman Chicken",
    desc: "Exotic Brahman chickens known for their distinctive appearance.",
    img: "/images/products/brahma-chicken.jpg",
  },
  {
    name: "Crowned Arabuko Chicken",
    desc: "Our signature crowned chicken breed, unique to Arabuko Farm.",
    img: "/images/products/crowned-arabuko-chicken.webp",
  },
  {
    name: "Ducks",
    desc: "Various duck breeds adding diversity to our farm ecosystem.",
    img: "/images/products/duck.jpg",
  },
  {
    name: "Turkeys",
    desc: "Heritage turkey breeds raised on our integrated farm.",
    img: "/images/products/turkeys.jpg",
  },
  {
    name: "Geese",
    desc: "Graceful geese contributing to our farm's biodiversity.",
    img: "/images/products/geese.jpeg",
  },
  {
    name: "Guinea Fowls",
    desc: "Hardy guinea fowls known for their pest control abilities.",
    img: "/images/products/guinea-fowl.jpg",
  },
  {
    name: "Indian Red Runners",
    desc: "Unique Indian Red Runner ducks, prized for their appearance.",
    img: "/images/products/runner-ducks.jpg",
  },
];

// Crops and Vegetables
const cropProducts = [
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

// Helper component for product cards
const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <article className="bg-white border border-gray-200 rounded-lg overflow-hidden">
    {product.img ? (
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-56 object-cover"
        loading="lazy"
      />
    ) : (
      <div className="w-full h-56 bg-gray-100 flex items-center justify-center">
        <span className="text-6xl">{product.placeholder}</span>
      </div>
    )}
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
      <p className="mt-2 text-gray-700 leading-relaxed">{product.desc}</p>
    </div>
  </article>
);

// Helper component for product category sections
const ProductCategory: React.FC<{
  title: string;
  description: string;
  products: Product[];
  bgColor?: string;
}> = ({ title, description, products, bgColor = "bg-white" }) => (
  <section
    className={`py-16 ${bgColor === "bg-white" ? "bg-white" : "bg-gray-50"}`}
  >
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#02463D]">
          {title}
        </h2>
        <p className="mt-3 text-gray-700 max-w-3xl mx-auto">{description}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  </section>
);

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
            Our integrated farm produces a diverse range of products from dairy,
            apiary, poultry, livestock, ornamental birds, and crops. Each
            division works together in harmony to create a sustainable
            ecosystem.
          </p>
        </div>
      </section>

      {/* Dairy Farm & Products */}
      <ProductCategory
        title="Our Dairy Farm & Products"
        description="Fresh dairy products from our integrated farm, where cows graze on natural pastures and contribute to our sustainable farming cycle."
        products={dairyProducts}
      />

      {/* Apiary Products */}
      <ProductCategory
        title="Our Apiary & Honey Products"
        description="Pure honey and bee products from our apiary, supporting pollination across our farm while producing premium honey and wax."
        products={apiaryProducts}
        bgColor="bg-gray-200"
      />

      {/* Poultry Farm */}
      <ProductCategory
        title="Our Poultry Farm"
        description="Free-range poultry and fresh eggs from birds that roam our integrated farm, contributing to pest control and soil health."
        products={poultryProducts}
      />

      {/* Feed Lot */}
      <ProductCategory
        title="Our Feed Lot"
        description="Quality beef and goat meat from our feed lot operations, raised on natural feed and integrated with our farming systems."
        products={feedlotProducts}
        bgColor="#A4BE66"
      />

      {/* Ornamental Birds */}
      <ProductCategory
        title="Our Ornamental Birds"
        description="Beautiful ornamental birds that add elegance and biodiversity to our farm while contributing to the ecosystem balance."
        products={ornamentalBirds}
      />

      {/* Crops and Vegetables */}
      <ProductCategory
        title="Our Crops & Vegetables"
        description="Fresh vegetables and crops grown with regenerative methods, benefiting from the integrated farming approach with livestock and apiary."
        products={cropProducts}
        bgColor="#A4BE66"
      />

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
                fresh produce, dairy products, honey, eggs, and meat from our
                integrated farm. If you are building a local sourcing program or
                designing a seasonal menu, we would love to collaborate.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="/contact"
                className="px-6 py-3 rounded-lg bg-[#02463D] text-white font-semibold hover:bg-[#013a33] transition-colors duration-300 transform"
              >
                Contact us
              </a>
              <a
                href="/farm-tours"
                className="px-6 py-3 rounded-lg border border-[#02463D] text-[#02463D] font-semibold hover:bg-[#02463D] hover:text-white transition-colors duration-300 transform"
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
