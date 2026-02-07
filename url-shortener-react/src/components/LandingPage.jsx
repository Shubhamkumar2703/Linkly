import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeatureCard from "../components/FeatureCard";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-linear-to-br from-indigo-500 to-violet-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-28 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold"
          >
            Short links that work smarter
          </motion.h1>

          <p className="mt-6 max-w-2xl mx-auto text-indigo-100">
            Linkly helps you create clean short links and understand how they perform —
            all with speed, security, and simplicity.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button
              onClick={() => navigate("/register")}
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold"
            >
              Start Free
            </button>
            <button
              onClick={() => navigate("/about")}
              className="border border-white px-6 py-3 rounded-lg"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          <FeatureCard title="Instant Shortening" desc="Create short URLs in seconds with a smooth, intuitive interface." />
          <FeatureCard title="Advanced Analytics" desc="Track clicks, locations, and usage trends with real insights." />
          <FeatureCard title="Secure by Design" desc="Authentication-based access and protected redirections." />
          <FeatureCard title="Built for Scale" desc="Fast redirects and reliable infrastructure you can trust." />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default LandingPage;

