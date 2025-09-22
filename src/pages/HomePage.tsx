import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  Leaf,
  Users,
  Calendar,
  Heart,
  Camera,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Play,
  Award,
  TreePine,
  Star,
  Globe,
  Zap,
  Shield,
  Sun,
  Droplets,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [visibleElements, setVisibleElements] = useState<Set<string>>(
    new Set<string>()
  );
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Move testimonials definition above effects to avoid TDZ usage warnings
  type Testimonial = {
    name: string;
    role: string;
    quote: string;
    rating: number;
    avatar: string;
  };
  const testimonials: Testimonial[] = [
    {
      name: "Dr. Sarah Johnson",
      role: "Environmental Researcher, Oxford University",
      quote:
        "Arabuko Sokoke represents the future of agriculture - where innovation meets conservation in the most beautiful way possible.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b142?w=100",
    },
    {
      name: "David Kimani",
      role: "Local Farmer & Community Leader",
      quote:
        "This place changed my entire approach to farming. My yields tripled while my environmental impact decreased dramatically.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    },
    {
      name: "Dr. Maria Santos",
      role: "Conservation Biologist",
      quote:
        "The biodiversity restoration work here is groundbreaking. It's proof that agriculture and conservation can thrive together.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    // Intersection Observer for animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = (entry.target as HTMLElement).id;
            setVisibleElements((prev) => new Set([...prev, elementId]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observerRef.current?.observe(el as Element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      observerRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(testimonialTimer);
  }, [testimonials.length]);

  const activities = [
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Agroforestry",
      desc: "Revolutionary farming that integrates biodiversity with productivity",
      gradient: "from-emerald-500 to-teal-600",
      stats: "200+ Trees Planted",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Conservation",
      desc: "Protecting endangered species and restoring natural ecosystems",
      gradient: "from-blue-500 to-cyan-600",
      stats: "500+ Species Protected",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Education",
      desc: "Transforming lives through sustainable agriculture training",
      gradient: "from-purple-500 to-indigo-600",
      stats: "1000+ Students Trained",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Eco-Tourism",
      desc: "Immersive experiences connecting visitors with nature",
      gradient: "from-orange-500 to-red-500",
      stats: "50+ Tours Monthly",
    },
  ];

  const products = [
    {
      name: "Organic Vegetables",
      image:
        "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=500",
      price: "Fresh Daily Harvest",
      badge: "Certified Organic",
      color: "emerald",
    },
    {
      name: "Indigenous Fruits",
      image:
        "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=500",
      price: "Seasonal Varieties",
      badge: "Locally Sourced",
      color: "orange",
    },
    {
      name: "Medicinal Plants",
      image: "https://images.unsplash.com/photo-1544550581-5dd4a1e6106b?w=500",
      price: "Traditional Remedies",
      badge: "Heritage Seeds",
      color: "purple",
    },
    {
      name: "Tree Seedlings",
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500",
      price: "Conservation Species",
      badge: "Climate Resilient",
      color: "green",
    },
  ];

  const impactStats = [
    {
      number: "10,000+",
      label: "Tons CO₂ Sequestered",
      icon: <Leaf className="w-8 h-8" />,
    },
    {
      number: "500+",
      label: "Species Protected",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      number: "2,500",
      label: "Lives Impacted",
      icon: <Users className="w-8 h-8" />,
    },
    {
      number: "1M+",
      label: "Liters Water Saved",
      icon: <Droplets className="w-8 h-8" />,
    },
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  type AnimatedElementProps = {
    children: React.ReactNode;
    animation?: string;
    delay?: number;
    id: string;
    className?: string;
  };

  const AnimatedElement: React.FC<AnimatedElementProps> = ({
    children,
    animation = "fadeInUp",
    delay = 0,
    id,
    className = "",
  }) => (
    <div
      id={id}
      data-animate={animation}
      className={`transition-all duration-1000 transform opacity-100 translate-y-0 scale-100 ${
        visibleElements.has(id) ? "animate-fadeInUp" : ""
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Floating Particles Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-500 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Ultra-Modern Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-2xl border-b border-gray-200 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3 group">
              <img
                src="/images/logo.png"
                title="Arabuko Sokoke Ridge Farm"
                className="w-32"
              />
            </div>
            <div className="hidden md:flex space-x-1 bg-gray-100/80 backdrop-blur-sm rounded-full p-1 border border-gray-200">
              {[
                "about",
                "activities",
                "products",
                "gallery",
                "impact",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize font-medium px-4 py-2 rounded-full text-gray-600 hover:text-gray-800 hover:bg-white transition-all duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Revolutionary Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-25 to-teal-50"
            style={{
              backgroundImage: `
                radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.2) 0%, transparent 50%),
                url(/images/hero.jpg)
              `,
              backgroundSize: "cover, cover",
              backgroundPosition: "center, center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/20 to-transparent" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-200/40 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-48 h-48 bg-emerald-200/40 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-200/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative z-10 text-center text-gray-900 max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200 mb-6 shadow-sm">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-semibold text-gray-700">
                Award-Winning Sustainable Farm
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
                Where Nature
              </span>
              <span className="block bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent animate-pulse">
                Meets Innovation
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium text-gray-700">
              Experience the future of agriculture through groundbreaking
              sustainable practices, cutting-edge conservation, and
              transformative education in Kenya's biodiversity paradise.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button
              onClick={() => scrollToSection("about")}
              className="group relative bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 flex items-center justify-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Discover Our Mission</span>
              <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="group relative border-2 border-gray-600 text-gray-800 hover:bg-gray-800 hover:text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-3 shadow-lg"
            >
              <Calendar className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Book Your Experience
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-10 h-10 text-gray-600" />
        </div>
      </section>

      {/* Revolutionary About Section */}
      <section
        id="about"
        className="py-32 bg-gradient-to-br from-white via-green-25 to-emerald-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-50/50 to-emerald-50/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedElement id="about-content" delay={200}>
              <div>
                <div className="inline-flex items-center space-x-2 bg-green-100/80 rounded-full px-6 py-3 border border-green-200 mb-8">
                  <Zap className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 font-semibold">
                    Pioneering the Future
                  </span>
                </div>
                <h2 className="text-5xl font-black text-gray-800 mb-8 leading-tight">
                  Revolutionizing
                  <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Sustainable Agriculture
                  </span>
                </h2>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                  We're not just a farm—we're a living laboratory where
                  breakthrough sustainable practices meet ancient wisdom. Every
                  acre tells a story of regeneration, every crop represents hope
                  for our planet's future.
                </p>
                <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                  Located in Kenya's most biodiverse region, we've created a
                  revolutionary model that proves conservation and agriculture
                  don't just coexist—they thrive together, creating abundance
                  for both people and planet.
                </p>

                <div className="grid grid-cols-3 gap-8 mb-12">
                  {[
                    {
                      number: "500+",
                      label: "Species\nProtected",
                      color: "green",
                    },
                    {
                      number: "2,500",
                      label: "Lives\nTransformed",
                      color: "blue",
                    },
                    {
                      number: "10K+",
                      label: "Tons CO₂\nSequestered",
                      color: "purple",
                    },
                  ].map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div
                        className={`text-4xl font-black bg-gradient-to-br from-${stat.color}-600 to-${stat.color}-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 whitespace-pre-line leading-tight font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <button className="group relative bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-green-500/25 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center gap-2">
                    Learn Our Story{" "}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </AnimatedElement>

            <AnimatedElement id="about-visual" delay={400}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <img
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800"
                  alt="Sustainable farming innovation"
                  className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center shadow-xl">
                  <Award className="w-16 h-16 text-white" />
                </div>
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <Globe className="w-12 h-12 text-white" />
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Mind-Blowing Activities Section */}
      <section
        id="activities"
        className="py-32 bg-gradient-to-br from-emerald-50 via-green-25 to-teal-50 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedElement id="activities-header" className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100/80 to-emerald-100/80 rounded-full px-6 py-3 border border-green-200 mb-8">
              <Sun className="w-5 h-5 text-green-600" />
              <span className="text-green-700 font-semibold">
                Our Core Impact Areas
              </span>
            </div>
            <h2 className="text-6xl font-black text-gray-800 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-700 to-gray-600 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Practices
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Each initiative represents a breakthrough in sustainable
              agriculture, designed to create maximum positive impact for our
              planet and communities.
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <AnimatedElement
                key={index}
                id={`activity-${index}`}
                delay={index * 200}
              >
                <div className="group relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${activity.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`}
                  />
                  <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 group-hover:bg-white group-hover:border-gray-300 transition-all duration-500 overflow-hidden shadow-lg">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100/50 to-transparent rounded-full blur-2xl" />

                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${activity.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}
                    >
                      <div className="text-white">{activity.icon}</div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">
                      {activity.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {activity.desc}
                    </p>

                    <div className="text-sm font-semibold text-green-600 bg-green-100 rounded-full px-4 py-2 inline-block">
                      {activity.stats}
                    </div>

                    <button className="mt-6 text-gray-500 hover:text-gray-700 transition-colors flex items-center gap-2 font-medium">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Stunning Products Section */}
      <section
        id="products"
        className="py-32 bg-gradient-to-br from-white via-emerald-25 to-green-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-green-50/30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedElement id="products-header" className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100/80 to-green-100/80 rounded-full px-6 py-3 border border-emerald-200 mb-8">
              <Leaf className="w-5 h-5 text-emerald-600" />
              <span className="text-emerald-700 font-semibold">
                Premium Harvest
              </span>
            </div>
            <h2 className="text-6xl font-black text-gray-800 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-700 to-gray-600 bg-clip-text text-transparent">
                Nature's Finest
              </span>
              <span className="block bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Productions
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Every product represents our commitment to excellence,
              sustainability, and the purest connection between earth and table.
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <AnimatedElement
                key={index}
                id={`product-${index}`}
                delay={index * 150}
              >
                <div className="group relative">
                  <div
                    className={`absolute inset-0 bg-${product.color}-200/40 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`}
                  />
                  <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl overflow-hidden group-hover:bg-white group-hover:border-gray-300 transition-all duration-500 shadow-lg">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div
                        className={`absolute top-4 right-4 bg-${product.color}-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg`}
                      >
                        {product.badge}
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                        {product.name}
                      </h3>
                      <p
                        className={`text-${product.color}-600 font-semibold mb-4`}
                      >
                        {product.price}
                      </p>

                      <button className="w-full bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 py-3 rounded-xl font-semibold group-hover:from-green-500 group-hover:to-emerald-500 group-hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                        <span>Explore</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Immersive Gallery Section */}
      <section
        id="gallery"
        className="py-32 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-200/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedElement id="gallery-header" className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100/80 to-pink-100/80 rounded-full px-6 py-3 border border-purple-200 mb-8">
              <Camera className="w-5 h-5 text-purple-600" />
              <span className="text-purple-700 font-semibold">
                Visual Journey
              </span>
            </div>
            <h2 className="text-6xl font-black text-gray-800 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-700 to-gray-600 bg-clip-text text-transparent">
                Life at the
              </span>
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Farm
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Witness the magic of sustainable agriculture through breathtaking
              moments captured in nature's embrace.
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
            {[
              {
                src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400",
                title: "Agroforestry in Action",
              },
              {
                src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400",
                title: "Tree Nursery",
              },
              {
                src: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400",
                title: "Organic Vegetables",
              },
              {
                src: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=400",
                title: "Fresh Harvest",
              },
              {
                src: "https://images.unsplash.com/photo-1544550581-5dd4a1e6106b?w=400",
                title: "Medicinal Plants",
              },
              {
                src: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400",
                title: "Indigenous Fruits",
              },
              {
                src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
                title: "Conservation Work",
              },
              {
                src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400",
                title: "Community Training",
              },
              {
                src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400",
                title: "Biodiversity",
              },
              {
                src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400",
                title: "Eco-Tourism",
              },
              {
                src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400",
                title: "Natural Habitat",
              },
              {
                src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
                title: "Sustainable Future",
              },
            ].map((image, index) => (
              <AnimatedElement
                key={index}
                id={`gallery-${index}`}
                delay={index * 100}
              >
                <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-32 md:h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center z-20">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <Play className="w-8 h-8 text-white mb-2 mx-auto" />
                      <p className="text-white text-sm font-medium text-center px-2">
                        {image.title}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>

          <div className="text-center">
            <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25 flex items-center gap-3 mx-auto">
              <Camera className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              View Full Gallery
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Revolutionary Impact Section */}
      <section
        id="impact"
        className="py-32 bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-200/20 via-transparent to-emerald-200/20" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-200/30 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "3s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedElement id="impact-header" className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100/80 to-emerald-100/80 rounded-full px-6 py-3 border border-green-200 mb-8">
              <Globe className="w-5 h-5 text-green-600" />
              <span className="text-green-700 font-semibold">
                Global Impact
              </span>
            </div>
            <h2 className="text-6xl font-black text-gray-800 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-700 to-gray-600 bg-clip-text text-transparent">
                Transforming
              </span>
              <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Our World
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Every seed planted, every life touched, every innovation
              implemented creates ripples of positive change across our planet.
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {impactStats.map((stat, index) => (
              <AnimatedElement
                key={index}
                id={`impact-${index}`}
                delay={index * 200}
              >
                <div className="group text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 group-hover:bg-white group-hover:border-green-200 transition-all duration-500 shadow-lg">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                      <div className="text-white">{stat.icon}</div>
                    </div>
                    <div className="text-4xl font-black bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">
                      {stat.number}
                    </div>
                    <div className="text-gray-700 font-semibold">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>

          {/* Testimonials Carousel */}
          <AnimatedElement id="testimonials" delay={400}>
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-12 relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-100/50 to-transparent rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-2xl text-gray-800 text-center mb-8 font-medium leading-relaxed italic">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentTestimonial].avatar}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-green-500"
                    />
                    <div className="text-left">
                      <div className="font-bold text-gray-800 text-lg">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-green-600 font-semibold">
                        {testimonials[currentTestimonial].role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-8 space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      currentTestimonial === index
                        ? "bg-green-500 w-12"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Ultra-Modern Partnership Section */}
      <section className="py-32 bg-gradient-to-br from-white via-green-25 to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-50/50 via-transparent to-emerald-50/50" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedElement
            id="partnership-header"
            className="text-center mb-20"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100/80 to-emerald-100/80 rounded-full px-6 py-3 border border-green-200 mb-8">
              <Heart className="w-5 h-5 text-green-600" />
              <span className="text-green-700 font-semibold">
                Join the Movement
              </span>
            </div>
            <h2 className="text-6xl font-black text-gray-800 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-700 to-gray-600 bg-clip-text text-transparent">
                Partner with
              </span>
              <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Purpose
              </span>
            </h2>
            <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              Join visionaries, innovators, and changemakers who are creating a
              more sustainable future. Every partnership amplifies our
              collective impact.
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-12 h-12" />,
                title: "Support Our Mission",
                desc: "Fuel groundbreaking research and conservation efforts that are reshaping agriculture.",
                action: "Donate Now",
                gradient: "from-red-500 to-pink-600",
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Volunteer with Us",
                desc: "Get hands-on experience while contributing to meaningful environmental change.",
                action: "Join Our Team",
                gradient: "from-blue-500 to-cyan-600",
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: "Strategic Partnership",
                desc: "Collaborate on innovative projects that scale sustainable solutions globally.",
                action: "Partner with Us",
                gradient: "from-purple-500 to-indigo-600",
              },
            ].map((item, index) => (
              <AnimatedElement
                key={index}
                id={`partnership-${index}`}
                delay={index * 200}
              >
                <div className="group relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-all duration-500`}
                  />
                  <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-10 group-hover:bg-white group-hover:border-gray-300 transition-all duration-500 text-center overflow-hidden shadow-lg">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100/50 to-transparent rounded-full blur-2xl" />

                    <div
                      className={`w-24 h-24 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}
                    >
                      <div className="text-white">{item.icon}</div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      {item.desc}
                    </p>

                    <button
                      className={`w-full bg-gradient-to-r ${item.gradient} text-white py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2 group-hover:scale-105`}
                    >
                      <span>{item.action}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Revolutionary Contact Section */}
      <section
        id="contact"
        className="py-32 bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-200/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedElement id="contact-header" className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100/80 to-emerald-100/80 rounded-full px-6 py-3 border border-green-200 mb-8">
              <Mail className="w-5 h-5 text-green-600" />
              <span className="text-green-700 font-semibold">
                Let's Connect
              </span>
            </div>
            <h2 className="text-6xl font-black text-gray-800 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-700 to-gray-600 bg-clip-text text-transparent">
                Ready to
              </span>
              <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Experience?
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Begin your journey into sustainable agriculture. We're here to
              guide you every step of the way.
            </p>
          </AnimatedElement>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <AnimatedElement id="contact-image" delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-2xl opacity-20" />
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=700"
                  alt="Contact us"
                  className="relative w-full h-96 lg:h-[600px] object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl" />
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Visit Our Farm</h3>
                  <p className="text-green-300">
                    Experience sustainability firsthand
                  </p>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement id="contact-form" delay={400}>
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-10 relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100/50 to-transparent rounded-full blur-2xl" />

                <div className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800 placeholder-gray-500 group-hover:bg-white transition-all duration-300"
                      />
                    </div>
                    <div className="group">
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800 placeholder-gray-500 group-hover:bg-white transition-all duration-300"
                      />
                    </div>
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800 placeholder-gray-500 hover:bg-white transition-all duration-300"
                  />
                  <select className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800 hover:bg-white transition-all duration-300">
                    <option value="" className="bg-white">
                      Select Visit Type
                    </option>
                    <option value="educational" className="bg-white">
                      Educational Tour
                    </option>
                    <option value="research" className="bg-white">
                      Research Visit
                    </option>
                    <option value="leisure" className="bg-white">
                      Leisure Tour
                    </option>
                    <option value="partnership" className="bg-white">
                      Partnership Inquiry
                    </option>
                  </select>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your visit plans, research interests, or how you'd like to get involved..."
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800 placeholder-gray-500 resize-none hover:bg-white transition-all duration-300"
                  />
                  <button className="group w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-5 rounded-xl font-bold text-lg hover:from-green-500 hover:to-emerald-500 transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-green-500/25 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">Send Message</span>
                    <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="mt-12 space-y-6">
                {[
                  {
                    icon: <MapPin className="w-6 h-6" />,
                    text: "Arabuko Sokoke Forest, Kilifi County, Kenya",
                    color: "green",
                  },
                  {
                    icon: <Phone className="w-6 h-6" />,
                    text: "+254 700 000 000",
                    color: "blue",
                  },
                  {
                    icon: <Mail className="w-6 h-6" />,
                    text: "info@arabukoridgefarm.com",
                    color: "purple",
                  },
                ].map((contact, index) => (
                  <AnimatedElement
                    key={index}
                    id={`contact-info-${index}`}
                    delay={600 + index * 100}
                  >
                    <div className="flex items-center space-x-4 group">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br from-${contact.color}-500 to-${contact.color}-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <div className="text-white">{contact.icon}</div>
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300 font-semibold">
                        {contact.text}
                      </span>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Ultra-Modern Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-green-100/30 rounded-full blur-3xl transform -translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <AnimatedElement id="footer-brand" delay={200}>
              <div className="flex items-center justify-center space-x-4 mb-8 group">
                <img
                  src="/images/logo.png"
                  title="Arabuko Sokoke Ridge Farm"
                  className="w-52"
                />
              </div>
            </AnimatedElement>

            <AnimatedElement id="footer-tagline" delay={400}>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-medium">
                Pioneering the future of sustainable agriculture and
                conservation in Kenya
              </p>
            </AnimatedElement>

            <AnimatedElement id="footer-social" delay={600}>
              <div className="flex justify-center space-x-6 mb-12 text-gray-600">
                <a
                  aria-label="Facebook"
                  href="#"
                  className="w-12 h-12 bg-gray-200 hover:bg-[#02463D] border border-gray-300 hover:border-[#02463D] rounded-xl transition-all duration-300 flex items-center justify-center hover:text-white"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  aria-label="Twitter"
                  href="#"
                  className="w-12 h-12 bg-gray-200 hover:bg-[#02463D] border border-gray-300 hover:border-[#02463D] rounded-xl transition-all duration-300 flex items-center justify-center hover:text-white"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  aria-label="Instagram"
                  href="#"
                  className="w-12 h-12 bg-gray-200 hover:bg-[#02463D] border border-gray-300 hover:border-[#02463D] rounded-xl transition-all duration-300 flex items-center justify-center hover:text-white"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  aria-label="LinkedIn"
                  href="#"
                  className="w-12 h-12 bg-gray-200 hover:bg-[#02463D] border border-gray-300 hover:border-[#02463D] rounded-xl transition-all duration-300 flex items-center justify-center hover:text-white"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </AnimatedElement>

            <AnimatedElement id="footer-copyright" delay={800}>
              <div className="border-t border-gray-300 pt-8">
                <p className="text-gray-600 font-medium">
                  © 2024 Arabuko Sokoke Ridge Farm. All rights reserved.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
