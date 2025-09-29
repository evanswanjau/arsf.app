import React from "react";
import { Mail, MessageCircle } from "lucide-react";

interface QA {
  q: string;
  a: string;
}

interface Topic {
  title: string;
  items: QA[];
}

const topics: Topic[] = [
  {
    title: "Farm Visits & Tours",
    items: [
      {
        q: "How do I book a farm tour?",
        a: "Use the Contact page form or call the listed number. Share preferred dates, time, group size, and interests; we’ll confirm availability and itinerary.",
      },
      {
        q: "What are the visiting hours?",
        a: "Mon–Sat 8:00–17:00. We’re closed on Sundays. Bookings help us prepare a quality experience for your group.",
      },
      {
        q: "Is the tour accessible for all ages and abilities?",
        a: "Yes. Key routes are gently graded, benches are available, and we can adapt the pace. Let us know access needs in advance.",
      },
      {
        q: "What should I bring?",
        a: "Closed shoes, sun protection, and a refillable water bottle. Optional: a notebook and camera. We provide tools for light activities.",
      },
    ],
  },
  {
    title: "Products & Ordering",
    items: [
      {
        q: "Which products are usually available?",
        a: "Seasonal produce like onions, peppers, carrots, cabbage, maize, plus eggs. Availability varies with season and field rotations.",
      },
      {
        q: "Do you supply restaurants and schools?",
        a: "Yes. We work with kitchens, schools, and community programs. Contact us for ordering cycles, delivery windows, and volumes.",
      },
      {
        q: "How do I place a bulk order?",
        a: "Reach out via the Contact page with quantities, delivery timeframe, and destination. We’ll confirm stock and logistics.",
      },
      {
        q: "Do you offer farm-gate sales?",
        a: "Farm-gate pickups are available by arrangement. Please book a window so we can prepare your order and minimize waiting time.",
      },
    ],
  },
  {
    title: "Sustainability Practices",
    items: [
      {
        q: "What regenerative practices do you use?",
        a: "Composting, cover crops, drip irrigation, rainwater harvesting, IPM (including push–pull), and agroforestry biodiversity corridors.",
      },
      {
        q: "Is push–pull used at the farm?",
        a: "Yes. We use push–pull principles (desmodium + Napier) to help reduce stemborer and fall armyworm pressure while supporting soil health.",
      },
      {
        q: "Do you minimize chemical inputs?",
        a: "We prioritize ecological IPM and botanicals like neem. Scouting, rotation, and resistant varieties reduce the need for synthetic inputs.",
      },
      {
        q: "How do you manage water use?",
        a: "Pressure‑compensating drip lines, mulches, storage tanks for roof water, and where suitable, basins/tied ridges to improve infiltration.",
      },
    ],
  },
  {
    title: "Partnerships & Research",
    items: [
      {
        q: "Do you collaborate with universities and NGOs?",
        a: "Yes. We partner on research, training, and conservation initiatives. See the Partners page or contact us with your proposal.",
      },
      {
        q: "Can we run field trials at the farm?",
        a: "We host trials aligned with our mission and capacity. Share objectives, methods, timeline, and resourcing; we’ll review feasibility.",
      },
      {
        q: "Do you offer educational programs for schools?",
        a: "Yes. We tailor learning walks, hands-on activities, and age-appropriate content for school and youth groups.",
      },
      {
        q: "How do we become a partner?",
        a: "Use the Partner with us buttons or Contact page. Share your organization profile and collaboration area to start a conversation.",
      },
    ],
  },
  {
    title: "Planning & Logistics",
    items: [
      {
        q: "Where are you located?",
        a: "Near the Arabuko Sokoke Forest Reserve, Kilifi County, Kenya. See the map embed on the Contact page for directions.",
      },
      {
        q: "What happens in rainy weather?",
        a: "Light rain tours proceed with adjusted routing. For heavy rain or storms we reschedule at no cost for safety and comfort.",
      },
      {
        q: "Is parking available on site?",
        a: "Yes. Parking is near the welcome area and can accommodate cars, small buses, and motorcycles. Follow staff directions on arrival.",
      },
      {
        q: "How quickly do you respond to inquiries?",
        a: "Within one business day (Mon–Sat, 8:00–17:00). Urgent requests are best by phone during business hours.",
      },
    ],
  },
];

const FAQs: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#02463D" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-24 text-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-white/90 max-w-3xl text-lg">
            Answers to common questions about visits, products, sustainability,
            partnerships, and logistics.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {topics.map((topic) => (
              <article
                key={topic.title}
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h2 className="text-2xl font-bold text-[#02463D]">
                  {topic.title}
                </h2>
                <div className="mt-4 divide-y divide-gray-200">
                  {topic.items.map((qa) => (
                    <details key={qa.q} className="py-4 group">
                      <summary className="cursor-pointer list-none flex justify-between items-center">
                        <span className="font-semibold text-gray-900">
                          {qa.q}
                        </span>
                        <span className="text-[#02463D]">+</span>
                      </summary>
                      <p className="mt-3 text-gray-700 leading-relaxed">
                        {qa.a}
                      </p>
                    </details>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#02463D]">
            Still have questions?
          </h2>
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
            Reach out and we’ll get back within one business day.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#02463D] text-white font-semibold hover:bg-[#013a33] transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contact us
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

export default FAQs;
