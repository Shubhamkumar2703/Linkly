import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent successfully 🚀");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-violet-900 text-white py-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold"
        >
          Get in Touch
        </motion.h1>

        <p className="mt-6 text-indigo-200 max-w-xl mx-auto">
          Have questions, feedback, or partnership ideas?  
          We'd love to hear from you.
        </p>
      </section>

      {/* ContactPage SECTION */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

          {/* ContactPage INFO */}
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-slate-800">
              ContactPage Information
            </h2>

            <div className="flex items-center gap-4">
              <Mail className="text-indigo-600" />
              <p className="text-slate-600">support@linkly.com</p>
              <p className="text-slate-600">shubham27034@gmail.com</p>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-indigo-600" />
              <p className="text-slate-600">+91 9472000990</p>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-indigo-600" />
              <p className="text-slate-600">Jabalpur, India</p>
            </div>

            <p className="text-slate-500 mt-6">
              Our team typically responds within 24 hours.
              We're here to help you succeed with Linkly 🚀
            </p>
          </div>

          {/* ContactPage FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 rounded-2xl shadow-xl space-y-6"
          >
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-medium mb-2">
                Message
              </label>
              <textarea
                rows="5"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white py-3 rounded-xl font-semibold shadow-lg"
            >
              Send Message
            </button>
          </motion.form>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;
