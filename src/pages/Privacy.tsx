import React from "react";

const Privacy: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <section
        className="relative py-10 overflow-hidden"
        style={{ backgroundColor: "#02463D" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-24 text-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            Privacy Policy
          </h1>
          <p className="mt-4 text-white/90 max-w-3xl text-lg">
            This policy explains how we collect, use, and protect your personal
            information.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-8 text-gray-800">
          <section>
            <h2 className="text-2xl font-bold text-[#02463D]">
              1. Data we collect
            </h2>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>
                <span className="font-semibold">Contact details.</span> Name,
                email, and phone when you enquire or make a booking.
              </li>
              <li>
                <span className="font-semibold">Booking details.</span>{" "}
                Preferred dates, group size, and visit interests so we can plan
                your experience.
              </li>
              <li>
                <span className="font-semibold">Website analytics.</span>
                Aggregated, non‑identifying metrics used to improve our site and
                programs.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#02463D]">
              2. How we use data
            </h2>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>To respond to enquiries and manage bookings or tours.</li>
              <li>
                To send important updates about safety, timings, or
                availability.
              </li>
              <li>To improve our website, programs, and visitor experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#02463D]">
              3. Sharing and retention
            </h2>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>We do not sell your personal data.</li>
              <li>
                We share data only with service providers who support our
                operations (e.g., web hosting), bound by confidentiality
                obligations.
              </li>
              <li>
                We retain data only as long as necessary for these purposes or
                as required by Kenyan law.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#02463D]">
              4. Your rights (Kenya)
            </h2>
            <p className="mt-2">
              Under the Data Protection Act, 2019 (Kenya), you may request
              access, correction, or deletion of your personal data, and object
              to certain processing. You can also withdraw consent where we rely
              on consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#02463D]">5. Security</h2>
            <p className="mt-2">
              We use reasonable technical and organizational measures (limited
              access, secure systems) to protect your information. No method is
              100% secure, but we work to safeguard your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#02463D]">6. Contact</h2>
            <p className="mt-2">
              Location: Arabuko Sokoke Forest Reserve, Kilifi County, Kenya
              <br />
              Phone:{" "}
              <a href="tel:+254700000000" className="underline">
                +254 700 000 000
              </a>
              <br />
              Email:{" "}
              <a href="mailto:info@arabukoridgefarm.com" className="underline">
                info@arabukoridgefarm.com
              </a>
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Effective date: {new Date().toLocaleDateString()}
            </p>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Privacy;
