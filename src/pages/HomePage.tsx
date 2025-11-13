import { Leaf, Heart, Star, Shield, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const HomePage = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Environmental Researcher, Oxford University",
      quote:
        "Arabuko Sokoke represents the future of agriculture - where innovation meets conservation in the most beautiful way possible.",
      rating: 5,
    },
    {
      name: "David Kimani",
      role: "Local Farmer & Community Leader",
      quote:
        "This place changed my entire approach to farming. My yields tripled while my environmental impact decreased dramatically.",
      rating: 5,
    },
    {
      name: "Dr. Maria Santos",
      role: "Conservation Biologist",
      quote:
        "The biodiversity restoration work here is groundbreaking. It's proof that agriculture and conservation can thrive together.",
      rating: 5,
    },
    {
      name: "Amina Yusuf",
      role: "Agroforestry Trainer",
      quote:
        "Training at ARSF blends science and tradition, we were able to learn a lot. Communities leave with skills they can apply the very next season.",
      rating: 5,
    },
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  // Featured products for the Swiper carousel - mixed from all farm divisions
  const products = [
    {
      name: "Arabuko Milk",
      img: "/images/products/milk.jpg",
      category: "Dairy",
    },
    {
      name: "Arabuko Honey",
      img: "/images/products/honey.jpg",
      category: "Apiary",
    },
    {
      name: "Arabuko Eggs",
      img: "/images/products/eggs.jpeg",
      category: "Poultry",
    },
    {
      name: "Arabuko Chicken",
      img: "/images/products/chicken.webp",
      category: "Poultry",
    },
    {
      name: "Arabuko Beef",
      img: "/images/products/beef.jpg",
      category: "Feed Lot",
    },
    {
      name: "Red Onions",
      img: "/images/products/red-onion.jpg",
      category: "Crops",
    },
    {
      name: "Tomatoes",
      img: "/images/products/tomatoes.webp",
      category: "Crops",
    },
    {
      name: "Carrots",
      img: "/images/products/carrots.jpg",
      category: "Crops",
    },
    {
      name: "Tausi (Peacocks)",
      img: null,
      placeholder: "🦚",
      category: "Ornamental Birds",
    },
    {
      name: "Arabuko Yoghurt",
      img: null,
      placeholder: "🥛",
      category: "Dairy",
    },
    {
      name: "Arabuko Wax",
      img: null,
      placeholder: "🍯",
      category: "Apiary",
    },
    {
      name: "Arabuko Goats",
      img: null,
      placeholder: "🐐",
      category: "Feed Lot",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section – Overhauled */}
      <section className="relative min-h-[100vh] overflow-hidden flex items-center">
        {/* Background media */}
        <img
          src="/images/hero2.jpg"
          alt="Lush Arabuko Sokoke landscape"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/60 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 py-16 w-full flex justify-center">
          {/* Headline + CTAs */}
          <div className="text-white max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur border border-white/20 text-xs uppercase tracking-widest rounded-lg">
              <span className="w-1.5 h-1.5 bg-emerald-400" /> Arabuko Sokoke
              Ridge Farm
            </div>

            <div
              role="heading"
              aria-level={1}
              className="mt-5 text-5xl sm:text-6xl font-extrabold leading-[1.05] text-white"
            >
              Growing food. Building livestock of the future. Beautifying nature
              with ornamental birds. Filling baskets with eggs and meat.
              Empowering communities.
            </div>
            <p className="mt-5 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              We are an integrated organic farm - Arabuko Sokoke Farm: the land
              of Milk and Honey
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a href="/contact">
                <Button
                  variant="default"
                  size="md"
                  className="font-semibold cursor-pointer bg-[#02463D] text-white hover:bg:white hover:text-[#02463D] border border-[#02463D] hover:border-white"
                >
                  Plan your visit
                </Button>
              </a>
              <a href="/about">
                <Button
                  variant="outline"
                  size="md"
                  className="font-semibold cursor-pointer hover:bg-white hover:text-[#A4BE66]"
                >
                  About Arabuko
                </Button>
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-[13px] justify-center">
              {[
                "Integrated farming",
                "Dairy & Livestock",
                "Apiary & Poultry",
              ].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 bg-white/10 border border-white/20 text-white/90 rounded-lg"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 !text-white visited:!text-white hover:!text-white text-sm uppercase tracking-[0.25em] animate-bounce"
        >
          Explore ↓
        </a>
      </section>

      {/* Partners Logos Carousel */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={2.5} // Use fixed number instead of "auto"
              spaceBetween={24}
              loop={true}
              speed={3000}
              allowTouchMove={false}
              autoplay={{
                delay: 1, // Use 1 instead of 0 for better compatibility
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              breakpoints={{
                640: { slidesPerView: 4 },
                768: { slidesPerView: 5 },
                1024: { slidesPerView: 6 },
              }}
              className="logos-swiper"
              onSwiper={(swiper) => {
                // Force autoplay to start
                setTimeout(() => {
                  swiper.autoplay?.start();
                }, 100);
              }}
            >
              {[
                {
                  src: "/images/partners/bamburi-cement.png",
                  alt: "Bamburi Cement",
                },
                {
                  src: "/images/partners/friends-of-asf.png",
                  alt: "Friends of ARSF",
                },
                { src: "/images/partners/icipe.png", alt: "ICIPE" },
                { src: "/images/partners/kalro.webp", alt: "KALRO" },
                {
                  src: "/images/partners/kws.jpg",
                  alt: "Kenya Wildlife Service",
                },
                { src: "/images/partners/pwani.png", alt: "Pwani University" },
                { src: "/images/partners/wwf.png", alt: "WWF" },
              ].map((logo, idx) => (
                <SwiperSlide key={`${logo.alt}-${idx}`} className="!w-auto">
                  <div className="h-12 sm:h-14 md:h-16 flex items-center justify-center px-4 opacity-80 hover:opacity-100 transition-opacity">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-full w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* About Arabuko Sokoke Ridge Farm */}
      <section id="about" className="py-28 bg-[#A4BE66]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#02463D]">
                About Arabuko Sokoke Ridge Farm
              </h2>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                We are an integrated Community-first regenerative agriculture
                initiative in Kilifi County Kenya. Our Purpose is Simple and
                bold: to use the Land productively, restore biodiversity by
                integrating a virtuous cycle of farming through dairy animals,
                beef lot farming, crop farming, apiary farming, Poultry for eggs
                and meat and fish farming to empower the community with jobs,
                best practice in farming and food sufficiency.
              </p>
              {/* <p className="mt-4 text-gray-700 leading-relaxed">
                Our integrated approach creates a sustainable ecosystem where
                each division supports the others - dairy animals provide manure
                for crops, crops feed livestock, apiary supports pollination,
                and ornamental birds add beauty while contributing to
                biodiversity. This creates a complete cycle of productivity and
                sustainability.
              </p> */}
              <div className="mt-6 grid grid-cols-3 gap-6 text-center">
                {[
                  { n: "10,000+", l: "Trees Planted" },
                  { n: "2,500", l: "Farmers Trained" },
                  { n: "50+", l: "Partners" },
                ].map((m) => (
                  <div key={m.l}>
                    <div className="text-2xl font-extrabold text-[#02463D]">
                      {m.n}
                    </div>
                    <div className="text-sm text-gray-600">{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <img
                  src="/images/farmer-posed.jpg"
                  alt="Farmer at Arabuko Sokoke Ridge Farm"
                  className="w-full h-[32em] object-cover rounded-lg -translate-y-3 md:-translate-y-8"
                  loading="lazy"
                />
                <img
                  src="/images/harvested-produce.jpg"
                  alt="Harvested produce from the farm"
                  className="w-full h-[32em] object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="core-values" className="pb-20 bg-[#A4BE66]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#02463D]">
              Our Core Values
            </h2>
            <p className="mt-3 text-gray-700 max-w-3xl mx-auto">
              Principles that guide everything we do at Arabuko Sokoke Ridge
              Farm.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-lg text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-green-100 flex items-center justify-center">
                <Shield className="w-7 h-7 text-green-700" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Stewardship</h3>
              <p className="mt-2 text-gray-600">
                We protect biodiversity and care for land and water resources.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 flex items-center justify-center">
                <Leaf className="w-7 h-7 text-emerald-700" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Regeneration</h3>
              <p className="mt-2 text-gray-600">
                We rebuild soil health and restore ecosystems through practice.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
                <Droplets className="w-7 h-7 text-blue-700" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Resource Wisdom</h3>
              <p className="mt-2 text-gray-600">
                We use water and inputs responsibly for long-term resilience.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-rose-100 flex items-center justify-center">
                <Heart className="w-7 h-7 text-rose-700" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Community</h3>
              <p className="mt-2 text-gray-600">
                We empower people with knowledge, opportunity, and
                collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#02463D]">
              Featured Products
            </h2>
            <p className="mt-3 text-gray-700 max-w-3xl mx-auto">
              Fresh from our fields and partners. Sustainably grown, locally
              sourced.
            </p>
          </div>

          <div className="relative">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              slidesPerGroup={1}
              spaceBetween={24}
              breakpoints={{
                640: { slidesPerView: 2, slidesPerGroup: 1 },
                1024: { slidesPerView: 4, slidesPerGroup: 1 },
              }}
              loop={true}
              speed={600}
              resistanceRatio={0.65}
              grabCursor
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              className="!px-4 -mx-4 no-scrollbar"
            >
              {products.map((p) => (
                <SwiperSlide key={p.name}>
                  <article className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    {p.img ? (
                      <img
                        src={p.img}
                        alt={p.name}
                        className="w-full h-56 object-cover"
                      />
                    ) : (
                      <div className="w-full h-56 bg-gray-100 flex items-center justify-center">
                        <span className="text-6xl">{p.placeholder}</span>
                      </div>
                    )}
                    <div className="p-5">
                      <h3 className="text-lg font-semibold">{p.name}</h3>
                      <p className="mt-2 text-sm text-gray-600">
                        {p.category === "Dairy" &&
                          "Fresh dairy products from our integrated farm."}
                        {p.category === "Apiary" &&
                          "Pure honey and bee products from our apiary."}
                        {p.category === "Poultry" &&
                          "Fresh eggs and poultry from free-range birds."}
                        {p.category === "Feed Lot" &&
                          "Quality meat from our feed lot operations."}
                        {p.category === "Ornamental Birds" &&
                          "Beautiful ornamental birds for nature and beauty."}
                        {p.category === "Crops" &&
                          "Grown with regenerative methods for great taste and nutrition."}
                      </p>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="mt-6 text-center">
            <a href="/products">
              <Button
                variant="outline"
                size="md"
                className="font-semibold cursor-pointer hover:bg-white hover:text-[#02463D]"
              >
                View all products
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials - new UI */}
      <section id="testimonials" className="py-20 bg-[#02463D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl text-white md:text-4xl font-bold">
              What Our Partners Say
            </h2>
            <p className="mt-2 text-white/80">
              Real stories from our community
            </p>
          </div>

          <div className="relative mt-10 rounded-lg overflow-hidden px-2">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              spaceBetween={24}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              loop
              speed={600}
              grabCursor
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              className="no-scrollbar"
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.name} className="!w-auto">
                  <article className="bg-white rounded-lg overflow-hidden w-full sm:w-[24rem] mx-auto">
                    <div className="p-6">
                      <div className="flex mb-3">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-yellow-500 fill-current"
                          />
                        ))}
                      </div>
                      <p className="text-gray-800 text-lg">“{t.quote}”</p>
                      <div className="mt-4">
                        <div className="font-semibold text-gray-900">
                          {t.name}
                        </div>
                        <div className="text-sm text-gray-600">{t.role}</div>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Farm Visit Promo */}
      <section id="visit" className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <img
                src="/images/farm-tours.jpg"
                alt="Visitors touring Arabuko Sokoke Ridge Farm"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#02463D]">
                Plan a Farm Visit
              </h2>
              <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                Explore regenerative agriculture up close, learn practical
                conservation skills, and enjoy a peaceful day surrounded by
                nature. We offer guided tours, workshops, and hands-on
                experiences for families, schools, researchers and groups.
              </p>
              <ul className="mt-6 space-y-2 text-gray-700">
                <li>• Guided tours daily, 8:00am – 5:00pm (closed Sundays)</li>
                <li>
                  • Education tracks for conservation, agroforestry, and MRV
                </li>
                <li>• Accessible routes and family-friendly activities</li>
              </ul>
              <div className="mt-8 flex gap-4">
                <a href="/contact">
                  <Button className="font-semibold cursor-pointer bg-[#02463D] text-white hover:bg-[#013a33] transition-colors duration-300 transform">
                    Book your next visit
                  </Button>
                </a>
                <a href="/farm-tours">
                  <Button
                    variant="outline"
                    className="font-semibold cursor-pointer border border-[#02463D] bg-[#02463D] hover:bg-white hover:text-[#02463D] transition-colors duration-300 transform"
                  >
                    See activities
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section - 3 simple steps */}
      <section id="impact" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#02463D] mb-12">
            Visit the Farm in 3 Simple Steps
          </h2>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
            <div className="bg-white rounded-xl p-8">
              <div className="w-12 h-12 rounded-full bg-[#02463D] text-white flex items-center justify-center mx-auto mb-5 text-lg font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Pick a date
              </h3>
              <p className="text-gray-600">
                Visits run Mon–Sat, 8:00–17:00 (closed Sundays).
              </p>
            </div>

            <div className="bg-white rounded-xl p-8">
              <div className="w-12 h-12 rounded-full bg-[#02463D] text-white flex items-center justify-center mx-auto mb-5 text-lg font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Choose your experience
              </h3>
              <p className="text-gray-600">
                Guided tour, conservation walk, or hands‑on workshop.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8">
              <div className="w-12 h-12 rounded-full bg-[#02463D] text-white flex items-center justify-center mx-auto mb-5 text-lg font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Book & enjoy
              </h3>
              <p className="text-gray-600">
                We’ll confirm details and host you on the farm.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#02463D] text-white font-semibold hover:bg-[#A4BE66] hover:text-[#02463D] transition-colors duration-300 transform"
            >
              Book your next visit
            </a>
          </div>
        </div>
      </section>

      {/* Partnership Section - "We know how important food is" */}
      <section id="partnership" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="/images/real-time-results.jpg"
                alt="Farm family and community"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#02463D] mb-8">
                We know how important sustainability is
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Over the years at Arabuko Sokoke Ridge Farm, we've learned
                there's a part of all of us longing to be more connected to
                nature. To return to a simpler time, away from all the noise. We
                believe the greatest thing we can create are the moments we
                share with the people we love.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                <strong>It's easy to feel disconnected these days.</strong>
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We know life is more enjoyable when you get connected to nature
                and share good times with the people you love. Which is why at
                Arabuko Sokoke Ridge Farm, we get back to the basics: good
                conservation, good community, good memories.
              </p>
              <div>
                <a
                  href="/sustainability"
                  className="text-[#02463D] font-semibold hover:text-[#A4BE66] hover:underline transition-all duration-300"
                >
                  Learn more →
                </a>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="text-center bg-white rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                100% Sustainable
              </h3>
              <p className="text-gray-600">
                Our practices are never harmful to the environment and are
                gentle enough for all creatures that live on the land and in the
                waters.
              </p>
            </div>

            <div className="text-center bg-white rounded-lg p-8">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Locally Sourced Methods
              </h3>
              <p className="text-gray-600">
                We source most of our techniques right here in Kenya, from
                traditional farming to modern conservation. We strive to support
                ethical and sustainable agriculture.
              </p>
            </div>

            <div className="text-center bg-white rounded-lg p-8">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Water Conservation
              </h3>
              <p className="text-gray-600">
                We are committed to reducing our footprint through water-saving
                techniques and sustainable irrigation systems that protect our
                precious resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-[#A4BE66]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#02463D]">
                Partner with ARSF
              </h2>
              <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                We collaborate with universities, NGOs, public institutions and
                private sector to scale regenerative agriculture and
                conservation outcomes across Kilifi and beyond. Partnerships can
                include research pilots, field training, biodiversity projects,
                local sourcing programs, and impact measurement.
              </p>
              <ul className="mt-6 space-y-2 text-gray-700">
                <li>
                  • Co-design evidence-led projects with measurable outcomes
                </li>
                <li>
                  • Access living lab plots, training, and community networks
                </li>
                <li>• Share data, learnings, and open resources</li>
              </ul>
              <div className="mt-8">
                <a
                  href="/partners"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#02463D] text-white font-semibold border border-[#02463D] hover:bg-transparent hover:text-[#02463D] transition-colors duration-300 transform"
                >
                  Learn about partnerships
                </a>
              </div>
            </div>
            <div>
              <img
                src="/images/tomatoe-picking.jpg"
                alt="Collaboration at Arabuko Sokoke Ridge Farm"
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
