import React from "react";
import { MapPin, Phone, Mail, Clock, Map } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src="/images/contact.jpg"
          alt="Farm path"
          className="absolute inset-0 w-full h-96 object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-6 py-32 text-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Contact Us</h1>
          <p className="mt-4 text-white/90 max-w-3xl text-lg">
            We'd love to hear from you. Whether you have questions, ideas, or
            just want to connect, reach out and we'll get back to you soon.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#02463D]">
                Get in touch
              </h2>
              <p className="my-4 text-gray-700 leading-relaxed">
                Our team is passionate about what we do and always excited to
                engage with people who share our values. We typically respond
                within one business day.
              </p>

              <div className="mt-8 space-y-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#02463D] rounded-lg flex items-center justify-center text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Location</div>
                    <a
                      href="#map"
                      className="text-gray-700 no-underline hover:underline hover:text-[#02463D] transition-colors"
                    >
                      Arabuko Sokoke Forest Reserve, Kilifi County
                    </a>
                    <p className="text-sm text-gray-400 mt-1">
                      Visit us for in-person assistance, learning sessions, and
                      farm tours.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#02463D] rounded-lg flex items-center justify-center text-white">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <a
                      href="tel:+254700000000"
                      className="text-gray-700 no-underline hover:underline hover:text-[#02463D] transition-colors"
                    >
                      +254 700 000 000
                    </a>
                    <p className="text-sm text-gray-400 mt-1">
                      Prefer a quick chat? Call us during business hours.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#02463D] rounded-lg flex items-center justify-center text-white">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <a
                      href="mailto:info@arabukoridgefarm.com"
                      className="text-gray-700 no-underline hover:underline hover:text-[#02463D] transition-colors"
                    >
                      info@arabukoridgefarm.com
                    </a>
                    <p className="text-sm text-gray-400 mt-1">
                      Send us a message anytime; we monitor our inbox daily.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#02463D] rounded-lg flex items-center justify-center text-white">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Hours</div>
                    <div className="text-gray-700">
                      Mon–Sat: 8:00–17:00 • Sunday: Closed
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                      Reach us during these hours and we’ll be glad to assist.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg" id="contact-form">
              <h3 className="text-3xl font-semibold text-[#02463D]">
                Send a message
              </h3>
              <form className="mt-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    className="w-full px-4 py-3 rounded-lg border border-gray-300"
                    placeholder="First name"
                  />
                  <input
                    className="w-full px-4 py-3 rounded-lg border border-gray-300"
                    placeholder="Last name"
                  />
                </div>
                <input
                  className="w-full px-4 py-3 rounded-lg border border-gray-300"
                  placeholder="Email"
                />
                <input
                  className="w-full px-4 py-3 rounded-lg border border-gray-300"
                  placeholder="Phone"
                />
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300">
                  <option>General inquiry</option>
                  <option>Orders & availability</option>
                  <option>Partnerships</option>
                  <option>Support</option>
                </select>
                <textarea
                  className="w-full px-4 py-3 rounded-lg border border-gray-300"
                  rows={5}
                  placeholder="Tell us more..."
                />
                <button className="w-full cursor-pointer border border-[#02463D] bg-[#02463D] hover:bg-white hover:text-[#02463D] text-white py-3 rounded-lg font-semibold">
                  Submit
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-3">
                We’ll never share your information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map & quick info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div
              className="lg:col-span-2 rounded-lg overflow-hidden border border-gray-200"
              id="map"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8084218481454!2d36.39631277582962!3d-0.1276279354590628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1829c5000685e44b%3A0x484066496545fc80!2sArabuko%20Sokoke%20Ridge%20Farm!5e0!3m2!1sen!2ske!4v1758738137914!5m2!1sen!2ske"
                width="100%"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg">
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>Hours</span>
                </div>
                <div className="text-lg font-semibold text-gray-900 mt-2">
                  Mon–Sat: 8:00–17:00
                </div>
                <div className="text-sm text-gray-600" id="hours">
                  Sunday: Closed
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <div className="flex items-center gap-2 text-gray-600">
                  <Map className="w-5 h-5" />
                  <span>Sales & Support</span>
                </div>
                <div className="text-gray-700 mt-2">
                  For order questions, bulk purchases, or help with anything,
                  send us a message and we’ll assist.
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <div className="flex items-center gap-2 text-gray-600">
                  <Map className="w-5 h-5" />
                  <span>Directions</span>
                </div>
                <div className="text-gray-700 mt-2">
                  Find the best route to the farm using the map and plan your
                  visit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#02463D]">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 divide-y divide-gray-200 bg-white rounded-lg border border-gray-200">
            {[
              {
                q: "How quickly do you respond after I contact you?",
                a: `We aim to reply within one business day, Monday to Saturday (8:00–17:00 EAT). Messages received after hours, Sundays, or on holidays are handled the next working day. For urgent matters, call the phone number listed on this page during business hours and our team will assist promptly.`,
              },
              {
                q: "How do I book a visit or tour of the farm?",
                a: `Bookings help us plan staff and ensure a quality experience. Send us your preferred date, time, number of visitors, and any interests via the form or phone. We’ll confirm availability, propose an itinerary, and share practical details like meeting point and duration. Walk-ins are limited; advance booking is recommended.`,
              },
              {
                q: "Can I volunteer or bring a school/community group?",
                a: `Yes. We host volunteer days and group visits by arrangement. Share your goals, group size, and ages so we can tailor activities and safety briefings. Typical tasks include sowing, transplanting, mulching, or guided learning walks. We provide tools and supervision; bring closed shoes, sun protection, and a refillable water bottle.`,
              },
              {
                q: "Can I stay at the farm overnight?",
                a: `We don’t offer on-site accommodation at the moment. However, there are guesthouses and eco-lodges nearby that many visitors use for overnight stays. If you share your dates and budget, we can suggest options and help with directions. Day visits and volunteer days are available by booking.`,
              },
              {
                q: "What should I bring and how do I find you on the day?",
                a: `Wear closed shoes and comfortable clothing; bring sun protection and a refillable water bottle. We’ll share a pinned location and meeting point with your booking confirmation. Allow extra time for rural roads. Parking is available on-site; follow staff directions on arrival and check in at the designated welcome area.`,
              },
            ].map((f) => (
              <details key={f.q} className="p-5 group">
                <summary className="cursor-pointer list-none flex justify-between items-center">
                  <span className="font-semibold text-gray-900">{f.q}</span>
                  <span className="text-[#02463D]">+</span>
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
