import React from "react";

const Contact: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#02463D" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-20 text-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            Visit & Contact
          </h1>
          <p className="mt-4 text-white/90 max-w-3xl text-lg">
            We’re excited to host you at Arabuko Sokoke Ridge Farm. Use the form
            below to start a conversation, book a tour, or explore partnerships.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#02463D]">
                Get in touch
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Tell us about your visit, a program you’d like to co-create, or
                a challenge you’re solving for. We usually reply within one
                business day.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#02463D] rounded-lg flex items-center justify-center text-white">
                    📍
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Location</div>
                    <div className="text-gray-700">
                      Arabuko Sokoke Forest Reserve, Kilifi County
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#02463D] rounded-lg flex items-center justify-center text-white">
                    📞
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-700">+254 700 000 000</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#02463D] rounded-lg flex items-center justify-center text-white">
                    ✉️
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-700">
                      info@arabukoridgefarm.com
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-[#02463D]">
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
                  <option>Visit booking</option>
                  <option>Partnership</option>
                  <option>Research</option>
                  <option>Other</option>
                </select>
                <textarea
                  className="w-full px-4 py-3 rounded-lg border border-gray-300"
                  rows={5}
                  placeholder="Tell us more..."
                />
                <button className="w-full bg-[#02463D] text-white py-3 rounded-lg font-semibold">
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

      {/* Visit info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-sm text-gray-600">HOURS</div>
              <div className="text-lg font-semibold text-gray-900 mt-1">
                Mon–Sat: 8:00–17:00
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-sm text-gray-600">GROUPS</div>
              <div className="text-lg font-semibold text-gray-900 mt-1">
                Ask about custom tours and workshops
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-sm text-gray-600">ACCESS</div>
              <div className="text-lg font-semibold text-gray-900 mt-1">
                Family-friendly routes and facilities
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
