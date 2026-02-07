import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-slate-900">
          Built for modern link management
        </h1>

        <p className="mt-6 text-slate-600 max-w-3xl">
          Linkly is a modern URL shortening platform designed for individuals,
          developers, and teams who value simplicity and performance.
          From generating short links to analyzing engagement, Linkly keeps
          everything fast and secure.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-6 rounded-xl">
            <h3 className="font-semibold text-indigo-600">Our Mission</h3>
            <p className="text-slate-600 mt-2">
              Make link sharing smarter by combining simplicity with insights.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl">
            <h3 className="font-semibold text-indigo-600">Why Linkly?</h3>
            <p className="text-slate-600 mt-2">
              Clean URLs, powerful analytics, and a developer-first backend.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;
