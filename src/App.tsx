import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import FarmTours from "./pages/FarmTours";
import Gallery from "./pages/Gallery";
import Sustainability from "./pages/Sustainability";
import Partners from "./pages/Partners";
import FAQs from "./pages/FAQs";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import React from "react";
import { HelmetProvider } from "react-helmet-async";

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    // Use a broadly compatible scroll reset
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8 text-center">
      <div>
        <h1 className="text-4xl font-extrabold text-[#02463D]">
          Page not found
        </h1>
        <p className="mt-3 text-gray-600">
          The page you’re looking for doesn’t exist.
        </p>
        <a
          href="/"
          className="inline-block mt-6 rounded-lg bg-[#02463D] text-white px-6 py-3 font-semibold"
        >
          Go home
        </a>
      </div>
    </main>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/farm-tours" element={<FarmTours />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
