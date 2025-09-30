import React from "react";
import { Calendar, MessageCircle } from "lucide-react";
// Icons removed as UI is simplified to paragraphs and images

const FarmTours: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-10 overflow-hidden">
        <img
          src="/images/farm-tours.jpg"
          alt="Farm tour"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Farm Tours</h1>
          <p className="mt-4 text-white/90 max-w-3xl text-lg">
            Explore our fields, nurseries, and compost systems, and learn how we
            grow with care for soil, water, and biodiversity.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3 space-y-6">
            <h2 className="text-3xl font-bold text-[#02463D]">
              What to expect
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A guided walk through production beds, nurseries, compost areas,
              and biodiversity corridors. See bed preparation, irrigation,
              harvest hygiene, and post-harvest handling. Sessions usually last
              60–90 minutes, with time for questions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Every season looks a little different. In some months we focus on
              seedling propagation and nursery care; in others you may observe
              mulching and trellising, selective pruning, or careful harvest and
              cooling workflows. Guides share practical tips you can apply in a
              home garden, school plot, or community project.
            </p>
            <h3 className="text-2xl font-semibold text-gray-900">
              What to bring
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Closed shoes and comfortable clothes</li>
              <li>Sun protection and a refillable water bottle</li>
              <li>Curiosity—lots of it</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Optional: a small notebook, camera, and gloves if you prefer your
              own. We provide tools for any light hands-on activities.
            </p>
            <h3 className="text-2xl font-semibold text-gray-900">
              Accessibility
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Key routes are gently graded. Tell us any requirements in advance
              so we can adapt the experience.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Benches and shaded rest points are available along the route. Our
              team can shorten or re-route the walk if needed, and we’re happy
              to tailor content for younger visitors or mixed-age groups.
            </p>
          </div>
          <div
            className="bg-gray-50 p-6 rounded-lg lg:col-span-2"
            id="tour-booking"
          >
            <h3 className="text-xl font-semibold text-[#02463D]">
              Book a tour
            </h3>
            <form className="mt-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#02463D] focus:border-transparent"
                  placeholder="First name"
                />
                <input
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#02463D] focus:border-transparent"
                  placeholder="Last name"
                />
              </div>
              <input
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#02463D] focus:border-transparent"
                placeholder="Email"
                type="email"
              />
              <input
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#02463D] focus:border-transparent"
                placeholder="Phone"
                type="tel"
              />
              <div className="grid md:grid-cols-3 gap-4">
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#02463D] focus:border-transparent"
                  placeholder="Preferred date"
                />
                <input
                  type="time"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#02463D] focus:border-transparent"
                  placeholder="Preferred time"
                />
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#02463D] focus:border-transparent">
                  <option>Group size: 1–3</option>
                  <option>Group size: 4–8</option>
                  <option>Group size: 9–15</option>
                  <option>Group size: 16+</option>
                </select>
              </div>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#02463D] focus:border-transparent">
                <option>Interest focus: General</option>
                <option>Interest focus: Nursery & propagation</option>
                <option>Interest focus: Compost & soil health</option>
                <option>Interest focus: Water-wise gardening</option>
                <option>Interest focus: School/group learning</option>
              </select>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#02463D] focus:border-transparent"
                rows={5}
                placeholder="Tell us more about your visit (access needs, timing flexibility, topics of interest)"
              />
              <button className="w-full cursor-pointer border border-[#02463D] bg-[#02463D] hover:bg-white hover:text-[#02463D] text-white py-3 rounded-lg font-semibold transition-all duration-300 transform">
                Request booking
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-3">
              We typically respond within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Story + Images */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[#02463D]">
              A walk through the seasons
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our tours move at a gentle pace, following the rhythm of the
              season. You’ll see how beds are established and renewed, seedlings
              are raised in the nursery, and compost is built to feed the soil.
              Guides share practical, down-to-earth tips you can take home to
              your garden or community project.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Along the way, we pause to notice small details—beneficial insects
              at work, living mulches keeping soil cool, and shade plantings
              that protect young crops. Questions are welcome at every stop, and
              we tailor the focus to your interests.
            </p>
          </div>
          <div>
            <img
              src="/images/farm-tours.jpg"
              alt="Farm fields and production beds"
              className="w-full h-96 object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="/images/for-everyone.jpg"
              alt="Compost systems and biodiversity corridors"
              className="w-full h-96 object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-4">
            <h2 className="text-3xl font-bold text-[#02463D]">
              For families, schools, and groups
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We welcome curious visitors of all ages. For schools and community
              groups, we adapt the route and activities to fit your
              goals—whether that’s understanding soil basics, observing
              pollinators, or exploring water-wise gardening. Routes are gently
              graded; let us know any accessibility needs in advance.
            </p>
            <p className="text-gray-700 leading-relaxed">
              To keep the experience personal, we host small groups per guide.
              If you have a larger group, we’ll schedule staggered starts or
              multiple guides to ensure everyone can see, hear, and ask
              questions comfortably.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#02463D] mb-8">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-gray-200 bg-white rounded-lg border border-gray-200">
            {[
              {
                q: "How far in advance should I book?",
                a: "We recommend booking at least 48 hours ahead so we can prepare a meaningful experience for your group. This allows us to schedule the right guide, prepare any materials, and ensure we have adequate staff coverage. For school visits or large groups of 15+ people, please contact us 1-2 weeks in advance so we can arrange multiple guides and customize the experience to your learning objectives.",
              },
              {
                q: "What happens if it rains?",
                a: "Light rain doesn't stop us—we have covered areas and can adapt the route to include more indoor stops like the nursery and post-harvest handling areas. For heavy rain or storms, we'll reschedule at no cost to ensure your safety and comfort. We monitor weather closely and will contact you the morning of your visit if conditions look challenging, offering alternative dates or times.",
              },
              {
                q: "Can I bring my children?",
                a: "Absolutely. Children of all ages are welcome and often the most enthusiastic participants. We adapt the content and pace for families, using simpler language and including hands-on activities like seed sowing, gentle harvest tasks, or identifying beneficial insects that kids enjoy. Parents can ask questions while children explore, and we provide age-appropriate take-home materials when possible.",
              },
              {
                q: "Is there parking available?",
                a: "Yes, we have on-site parking for visitors. The parking area is close to our welcome area and can accommodate cars, small buses, and motorcycles. We'll share specific directions and parking details when we confirm your booking, including GPS coordinates and landmarks. The parking area is well-marked and our team will guide you to the right spot when you arrive.",
              },
              {
                q: "Do you offer tours in languages other than English?",
                a: "Our primary tours are conducted in English, but we can arrange Swahili-speaking guides with advance notice for local visitors or community groups. For other languages, please let us know your needs when booking and we'll do our best to accommodate—sometimes we can arrange interpreters or provide written materials in your preferred language. We're always learning and expanding our language capabilities.",
              },
            ].map((f) => (
              <details key={f.q} className="p-6 group">
                <summary className="cursor-pointer list-none flex justify-between items-center">
                  <span className="font-semibold text-gray-900">{f.q}</span>
                  <span className="text-[#02463D] group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#A4BE66]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#02463D]">Ready to visit?</h2>
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
            Tell us your preferred dates and group size. We'll confirm a time
            and share directions and what to expect.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#tour-booking"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#02463D] text-white font-semibold hover:bg-[#013a33] transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Book your tour
            </a>
            <a
              href="https://wa.me/254700000000?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20farm%20tours"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FarmTours;
