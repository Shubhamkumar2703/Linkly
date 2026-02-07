import { motion } from "framer-motion";

const FeatureCard = ({ title, desc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
    >
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-slate-600 text-sm mt-2">{desc}</p>
    </motion.div>
  );
};

export default FeatureCard;
