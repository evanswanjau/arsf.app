import React from "react";
import {
  Users,
  Handshake,
  Award,
  Globe,
  BookOpen,
  Heart,
  Mail,
  MapPin,
} from "lucide-react";

const Partners: React.FC = () => {
  const partners = [
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Local Universities",
      description:
        "We collaborate with universities and research institutions to advance sustainable agriculture practices and conservation research.",
    },
    {
      icon: <Handshake className="w-8 h-8 text-white" />,
      title: "Community Organizations",
      description:
        "Working with local NGOs and community groups to promote sustainable farming practices and environmental education.",
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: "Certification Bodies",
      description:
        "Partnerships with organic and sustainability certification organizations to ensure our practices meet the highest standards.",
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "International Organizations",
      description:
        "Collaborating with global organizations to share knowledge and implement best practices in sustainable agriculture.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-white" />,
      title: "Educational Institutions",
      description:
        "Partnering with schools and educational programs to provide hands-on learning experiences in sustainable agriculture.",
    },
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      title: "Health & Nutrition Organizations",
      description:
        "Working with health organizations to promote the nutritional benefits of organic, locally-grown produce.",
    },
  ];

  const benefits = [
    {
      title: "Knowledge Sharing",
      description:
        "Access to cutting-edge research and best practices from our network of partners",
    },
    {
      title: "Resource Optimization",
      description:
        "Collaborative use of equipment, expertise, and resources for maximum impact",
    },
    {
      title: "Community Impact",
      description:
        "Amplified reach through partner networks to benefit more farmers and communities",
    },
    {
      title: "Innovation",
      description:
        "Joint development of new techniques and solutions for sustainable agriculture",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-10 overflow-hidden">
        <img
          src="/images/partners.jpg"
          alt="Partnerships and collaboration"
          className="absolute inset-0 w-full h-[40em] object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Our Partners</h1>
          <p className="mt-4 text-white/90 max-w-3xl text-lg">
            Building a sustainable future requires collaboration. We work with
            universities, organizations, and communities to advance regenerative
            agriculture and conservation.
          </p>
        </div>
      </section>

      {/* Partnership Philosophy */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#02463D] mb-6">
                Why We Partner
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sustainable agriculture and conservation are complex challenges
                that require diverse expertise and resources. By partnering with
                like-minded organizations, we can achieve greater impact than
                working alone.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our partnerships are built on shared values: environmental
                stewardship, community empowerment, and scientific rigor.
                Together, we're creating models of agriculture that benefit both
                people and the planet.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether it's research collaboration, community training, or
                conservation initiatives, our partners help us reach more people
                and make a bigger difference in Kenya's agricultural landscape.
              </p>
              <div className="mt-6">
                <button
                  onClick={() => window.openPartnerModal?.()}
                  className="rounded-lg cursor-pointer bg-[#02463D] text-white px-6 py-3 font-semibold hover:bg-[#013a33]"
                >
                  Partner with us
                </button>
              </div>
            </div>
            <div>
              <img
                src="/images/why-we-partner.jpg"
                alt="Collaborative farming practices"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#02463D] text-center mb-12">
            Our Partnership Network
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#02463D] rounded-2xl flex items-center justify-center">
                      {partner.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-[#02463D] mb-3">
                      {partner.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#02463D] text-center mb-12">
            Benefits of Partnership
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#02463D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/become-a-partner.jpg"
                alt="Join our partnership network"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#02463D] mb-6">
                Become a Partner
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Are you an organization, institution, or community group that
                shares our vision of sustainable agriculture and conservation?
                We'd love to explore how we can work together.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Whether you're interested in research collaboration, community
                training, conservation projects, or supply partnerships, we're
                always looking for new ways to expand our impact.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#02463D] rounded-full"></div>
                  <span className="text-gray-700">
                    Research and development collaboration
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#02463D] rounded-full"></div>
                  <span className="text-gray-700">
                    Community education and training programs
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#02463D] rounded-full"></div>
                  <span className="text-gray-700">
                    Conservation and environmental initiatives
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#02463D] rounded-full"></div>
                  <span className="text-gray-700">
                    Supply chain and distribution partnerships
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <button
                  onClick={() => window.openPartnerModal?.()}
                  className="rounded-lg bg-[#02463D] text-white px-6 py-3 font-semibold hover:bg-[#013a33]"
                >
                  Partner with us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#02463D]">
            Let's Work Together
          </h2>
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
            Ready to explore partnership opportunities? Get in touch to discuss
            how we can collaborate to advance sustainable agriculture and
            conservation in Kenya.
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
              href="/farm-tours"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#02463D] text-[#02463D] font-semibold hover:bg-[#02463D] hover:text-white transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Visit our farm
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Partners;
