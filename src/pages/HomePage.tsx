import { useState, useEffect } from "react";
import {
  Leaf,
  Calendar,
  Heart,
  Mail,
  Phone,
  MapPin,
  Star,
  Shield,
  Droplets,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => {
      clearInterval(testimonialTimer);
    };
  }, [testimonials.length]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  // Featured products for the Swiper carousel
  const products = [
    { name: "Red Onions", img: "/images/products/red-onion.jpg" },
    { name: "Green Bell Peppers", img: "/images/products/green-peppers.jpg" },
    { name: "Carrots", img: "/images/products/carrots.jpg" },
    { name: "Cabbage", img: "/images/products/cabbages.webp" },
    { name: "Eggs", img: "/images/products/eggs.jpeg" },
    { name: "Maize", img: "/images/products/maize.png" },
    { name: "Red Onions", img: "/images/products/red-onion.jpg" },
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

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 w-full flex justify-center">
          {/* Headline + CTAs */}
          <div className="text-white max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur border border-white/20 text-xs uppercase tracking-widest rounded-lg">
              <span className="w-1.5 h-1.5 bg-emerald-400" /> Arabuko Sokoke
              Ridge Farm
            </div>

            <div
              role="heading"
              aria-level={1}
              className="mt-5 text-5xl sm:text-6xl font-extrabold leading-[1.05] text-white"
            >
              Growing food. Restoring nature. Empowering communities.
            </div>
            <p className="mt-5 text-lg sm:text-xl text-white/90 max-w-2xl">
              Evidence-led agriculture and conservation programs delivering
              measurable outcomes for people and planet across Kilifi and
              beyond.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("contact")}
                variant="default"
                size="md"
                className="font-semibold cursor-pointer bg-[#02463D] text-white hover:bg-white hover:text-[#02463D] border border-[#02463D] hover:border-white"
              >
                Plan your visit
              </Button>
              <Button
                onClick={() => scrollToSection("about")}
                variant="outline"
                size="md"
                className="font-semibold cursor-pointer hover:bg-white hover:text-[#02463D]"
              >
                About Arabuko
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-[13px] justify-center">
              {[
                "Regenerative agriculture",
                "Biodiversity restoration",
                "Community training",
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

      {/* Clients Strip */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs uppercase tracking-wider text-gray-600 mb-6">
            Trusted by
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {["Acacia", "Baobab", "Cedars", "Drift", "Evergreen", "Futura"].map(
              (name) => (
                <div
                  key={name}
                  className="h-10 flex items-center justify-center text-gray-500 text-sm"
                >
                  {name}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* About Arabuko Sokoke Ridge Farm */}
      <section id="about" className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#02463D]">
                About Arabuko Sokoke Ridge Farm
              </h2>
              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                Arabuko Sokoke Ridge Farm is a community-driven initiative
                focused on regenerative agriculture, biodiversity restoration,
                and meaningful education. We steward land in Kilifi with
                practices that improve soil health, protect wildlife habitats,
                and uplift local livelihoods.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Through partnerships and evidence-led methods, we plant
                indigenous trees, train farmers, and build resilient supply
                systems that benefit people and planet. Visitors experience
                conservation in action and learn practical skills for
                sustainable living.
              </p>
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
              <img
                src="/images/hero3.jpg"
                alt="Arabuko Sokoke Ridge Farm landscape"
                className="w-full h-[30em] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="core-values" className="py-20 bg-white">
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
            <div className="p-6 border border-gray-200 rounded-lg text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-green-100 flex items-center justify-center">
                <Shield className="w-7 h-7 text-green-700" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Stewardship</h3>
              <p className="mt-2 text-gray-600">
                We protect biodiversity and care for land and water resources.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 flex items-center justify-center">
                <Leaf className="w-7 h-7 text-emerald-700" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Regeneration</h3>
              <p className="mt-2 text-gray-600">
                We rebuild soil health and restore ecosystems through practice.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
                <Droplets className="w-7 h-7 text-blue-700" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Resource Wisdom</h3>
              <p className="mt-2 text-gray-600">
                We use water and inputs responsibly for long-term resilience.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg text-center">
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
      <section
        id="products"
        className="py-20 bg-gray-50 border-b border-gray-200"
      >
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
              modules={[Autoplay, Navigation]}
              slidesPerView={1.2}
              slidesPerGroup={1}
              spaceBetween={24}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              loop
              loopAdditionalSlides={products.length}
              speed={600}
              resistanceRatio={0.65}
              grabCursor
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              className="!px-4 -mx-4 no-scrollbar"
            >
              {products.map((p) => (
                <SwiperSlide key={p.name} className="!w-auto">
                  <article className="bg-white rounded-lg overflow-hidden w-72">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-56 object-cover"
                    />
                    <div className="p-5">
                      <h3 className="text-lg font-semibold">{p.name}</h3>
                      <p className="mt-2 text-sm text-gray-600">
                        Grown with regenerative methods for great taste and
                        nutrition.
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
      <section
        id="testimonials"
        className="py-20 border-b border-gray-200"
        style={{ backgroundColor: "#02463D" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl text-white md:text-4xl font-bold">
              What Partners Say
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

          {/* Stats row */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 text-white">
            {[
              { n: "10,000+", l: "Trees Planted" },
              { n: "2,500", l: "Farmers Trained" },
              { n: "98%", l: "Seedling Survival" },
              { n: "15", l: "Village Groups" },
            ].map((s) => (
              <div key={s.l} className="py-6 text-center">
                <div className="text-2xl font-extrabold">{s.n}</div>
                <div className="text-sm text-white/80">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm Visit Promo */}
      <section id="visit" className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
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
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="font-semibold cursor-pointer bg-[#02463D] text-white hover:bg-white hover:text-[#02463D] border border-[#02463D] hover:border-[#02463D]"
                >
                  Book your visit
                </Button>
                <Button
                  onClick={() => scrollToSection("activities")}
                  variant="outline"
                  className="font-semibold cursor-pointer hover:bg-white hover:text-[#02463D]"
                >
                  See activities
                </Button>
              </div>
            </div>
            <div>
              <img
                src="/images/hero2.jpg"
                alt="Visitors touring Arabuko Sokoke Ridge Farm"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section - "Come Find Your Happy Place" */}
      <section id="impact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#02463D] mb-12">
            Come Find Your Happy Place
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#02463D] rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                1. VISIT US IN KILIFI
              </h3>
              <p className="text-gray-600">
                Kick back and relax at our sustainable farm experience. Tours
                available daily from 8:00am to 5:00pm. Closed Sundays.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#02463D] rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                2. BOOK A TOUR OR WORKSHOP
              </h3>
              <p className="text-gray-600">
                Choose from our educational tours, conservation workshops, or
                sustainable farming experiences. Something meaningful for every
                visitor.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#02463D] rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                3. CREATE LASTING MEMORIES
              </h3>
              <p className="text-gray-600">
                Discover new things about sustainable living, grown right here
                on the farm. Enjoy meaningful experiences with the people you
                love.
              </p>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800"
            alt="Family enjoying farm experience"
            className="rounded-lg shadow-xl w-full h-96 object-cover"
          />
        </div>
      </section>

      {/* Partnership Section - "We know how important food is" */}
      <section id="partnership" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                  className="text-[#02463D] font-semibold"
                >
                  Partner with us →
                </a>
              </div>
            </div>

            <div>
              <img
                src="/images/partner.jpg"
                alt="Farm family and community"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="text-center">
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

            <div className="text-center">
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

            <div className="text-center">
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-[#02463D] mb-6">
                Visit Our Farm
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Ready to experience sustainable agriculture and conservation
                firsthand? We'd love to welcome you to our farm for an
                unforgettable educational journey.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#02463D] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">
                      Location
                    </div>
                    <div className="text-gray-600">
                      Arabuko Sokoke Forest Reserve
                      <br />
                      Kilifi County, Kenya
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#02463D] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">
                      Call Us
                    </div>
                    <div className="text-gray-600">+254 700 000 000</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#02463D] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Email</div>
                    <div className="text-gray-600">
                      info@arabukoridgefarm.com
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-700 italic mb-4">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="font-semibold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-600 text-sm">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#02463D] mb-6">
                Book Your Visit
              </h3>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#02463D] focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#02463D] focus:border-transparent"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#02463D] focus:border-transparent"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#02463D] focus:border-transparent"
                />

                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#02463D] focus:border-transparent">
                  <option value="">Select Visit Type</option>
                  <option value="educational">Educational Tour</option>
                  <option value="research">Research Visit</option>
                  <option value="conservation">Conservation Workshop</option>
                  <option value="group">Group Booking</option>
                </select>

                <textarea
                  rows={4}
                  placeholder="Tell us about your visit plans and interests..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#02463D] focus:border-transparent resize-none"
                />

                <button className="w-full bg-[#02463D] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#02463D]/90 transition-colors shadow-lg">
                  Send Message
                </button>

                <p className="text-sm text-gray-500 text-center">
                  We'll get back to you within 24 hours to confirm your visit
                  details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
