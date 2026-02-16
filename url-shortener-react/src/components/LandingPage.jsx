import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../contextApi/ContextApi.jsx";
import { useState } from "react";
import { Link2, BarChart3, ShieldCheck, Rocket } from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();
  const { token } = useStoreContext();
  const [url, setUrl] = useState("");

  const handleShortenClick = () => {
    if (!url.trim()) return;

    if (!token) {
      navigate("/login");
    } else {
      navigate("/createnewurl", { state: { originalUrl: url } });
    }
  };

  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-linear-to-br from-slate-900 via-indigo-900 to-violet-900 text-white overflow-hidden">

        {/* Glow Effects */}
        <div className="absolute w-96 h-96 bg-indigo-500 opacity-30 blur-3xl rounded-full top-20 left-10"></div>
        <div className="absolute w-96 h-96 bg-violet-500 opacity-30 blur-3xl rounded-full bottom-10 right-10"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight"
          >
            Shorten Your <span className="text-indigo-400">Loooooong</span> Links :)
          </motion.h1>

          <p className="mt-6 max-w-2xl mx-auto text-indigo-200 text-lg">
            Create clean short links and track performance —
            fast, secure, and beautifully simple.
          </p>

          {/* Input Box */}
          <div className="mt-12 flex justify-center">
            <div className="flex bg-white/10 backdrop-blur-lg p-2 rounded-2xl shadow-2xl border border-white/20 w-full max-w-2xl">

              <input
                type="text"
                placeholder="Paste your long URL here..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder-indigo-300 px-4 py-3 focus:outline-none"
              />

              <button
                onClick={handleShortenClick}
                className="bg-indigo-500 hover:bg-indigo-600 transition px-6 py-3 rounded-xl font-semibold shadow-lg"
              >
                Shorten Now
              </button>

            </div>
          </div>

        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="bg-gradient-to-b from-slate-100 to-white py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-slate-800">
            Why Choose <span className="text-indigo-600">Linkly?</span>
          </h2>

          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Everything you need to shorten, manage, and analyze your links —
            built with speed, security, and scalability in mind.
          </p>

          <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">

            {[
              {
                icon: <Link2 size={40} />,
                title: "Instant Shortening",
                desc: "Generate powerful short links in seconds. Clean, fast, and optimized for seamless sharing."
              },
              {
                icon: <BarChart3 size={40} />,
                title: "Advanced Analytics",
                desc: "Track clicks, locations, devices, and trends with real-time insights for smarter decisions."
              },
              {
                icon: <ShieldCheck size={40} />,
                title: "Secure by Design",
                desc: "JWT authentication and protected redirects ensure privacy and data security."
              },
              {
                icon: <Rocket size={40} />,
                title: "Built for Scale",
                desc: "High-performance backend architecture built to handle heavy traffic effortlessly."
              }
            ].map((feature, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-slate-100"
              >
                <div className="text-indigo-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-semibold text-slate-800">
                  {feature.title}
                </h3>

                <p className="mt-4 text-slate-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>

            ))}

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default LandingPage;
