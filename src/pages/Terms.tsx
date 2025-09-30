import React from "react";

const Terms: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <section
        className="relative py-10 overflow-hidden"
        style={{ backgroundColor: "#02463D" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-24 text-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-white/90 max-w-3xl text-lg">
            Please read these Terms carefully. By visiting our farm or using our
            website, you agree to these terms.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-8 text-gray-800">
          <section>
            <h2 className="text-2xl font-bold text-[#02463D]">1. Who we are</h2>
            <p className="mt-2">
              Arabuko Sokoke Ridge Farm ("ARSF"), Arabuko Sokoke Forest Reserve,
              Kilifi County, Kenya. We provide educational farm visits,
              sustainability programs, and seasonal produce.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#02463D]">
              2. Bookings and visits
            </h2>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>
                <span className="font-semibold">Confirmation.</span> Bookings
                are confirmed by email/phone. We may reschedule due to weather,
                safety, or operational needs; you may accept a new slot or
                cancel at no cost.
              </li>
              <li>
                <span className="font-semibold">Check-in & guidance.</span>{" "}
                Please arrive on time and follow staff instructions and signage
                at all times, including hygiene and biosecurity guidance.
              </li>
              <li>
                <span className="font-semibold">Supervision.</span> Children
                must be supervised by a responsible adult throughout the visit.
              </li>
              <li>
                <span className="font-semibold">Accessibility.</span> Key routes
                are gently graded; let us know access needs in advance and we
                will adapt where reasonably possible.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#02463D]">
              3. Orders and availability
            </h2>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>
                <span className="font-semibold">Seasonality.</span> Produce is
                seasonal; varieties and quantities are not guaranteed.
              </li>
              <li>
                <span className="font-semibold">Pricing.</span> Prices and
                varieties may change without prior notice. Confirm before
                placing bulk orders.
              </li>
              <li>
                <span className="font-semibold">Bulk orders.</span> Provide
                desired quantities, delivery windows, and destination. We will
                confirm availability and logistics.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#02463D]">
              4. Acceptable conduct & site rules
            </h2>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>
                Do not damage facilities, crops, water systems, or habitat.
              </li>
              <li>
                No unlawful, harassing, or harmful behaviour on site or online.
              </li>
              <li>
                Follow photography guidance; respect privacy of other visitors.
              </li>
              <li>
                Pets are only allowed if pre‑approved and under strict control;
                assistance animals are welcome.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#02463D]">
              5. Health & safety
            </h2>
            <p className="mt-2">
              ARSF is a working farm. Wear closed shoes; use sun protection and
              drink water. Report hazards to staff immediately. We may adjust
              routes or activities for safety.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#02463D]">
              6. Cancellations
            </h2>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>
                <span className="font-semibold">By you.</span> Please cancel or
                reschedule at least 24 hours in advance so we can reallocate
                capacity.
              </li>
              <li>
                <span className="font-semibold">By us.</span> If we cancel for
                safety/weather, we will offer an alternative date/time.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#02463D]">7. Media & IP</h2>
            <p className="mt-2">
              Site content, images, and branding are owned by ARSF or our
              licensors. Do not use our name or logo without written permission.
              You may take personal photos during visits unless advised
              otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#02463D]">8. Liability</h2>
            <p className="mt-2">
              We take reasonable care to provide a safe environment, but farm
              visits carry inherent risks. To the fullest extent permitted by
              law, ARSF is not liable for losses arising from attendance or site
              use except where caused by our negligence or wilful misconduct.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#02463D]">
              9. Changes to these Terms
            </h2>
            <p className="mt-2">
              We may update these Terms from time to time. The date below
              indicates the latest revision.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#02463D]">
              10. Governing law
            </h2>
            <p className="mt-2">
              These Terms are governed by the laws of Kenya. Disputes shall be
              subject to the jurisdiction of Kenyan courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#02463D]">11. Contact</h2>
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

export default Terms;
