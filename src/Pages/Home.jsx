import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Services from "./Services";
import Contact from "./Contact";
import { getClientsData } from "../services/dataServices";
import "../App.css";
import { CanvasConfetti } from "react-confetti"; // For success bursts

const Home = () => {
  const [clients, setClients] = useState([]);
  const { scrollYProgress } = useScroll();
  const scaleY = useTransform(scrollYProgress, [0, 1], [1, 0.9]); // Parallax scale

  useEffect(() => {
    getClientsData()
      .then((data) => setClients(data))
      .catch(console.error);
  }, []);

  const triggerConfetti = () => {
    // Simple confetti burst
    window.confetti?.({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div
          className="parallax-bg absolute inset-0 w-full h-full object-cover"
          style={{ scale: scaleY }}
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
        >
          <img
            src="/Home_BG_Image.jpg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />
        </motion.div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Transform Your Business With{" "}
            <span className="gradient-text">BareNexus</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            Strategic Consulting • IT Solutions • Growth Acceleration
          </motion.p>
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
                triggerConfetti();
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl"
            >
              Get Started
            </motion.button>
            <button
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition-all"
            >
              Explore Services
            </button>
          </motion.div>
        </div>
      </section>

      {/* About, Clients sections with similar motion upgrades */}
      <section id="about" className="pt-20 bg-gray-50">
        <motion.div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center" data-aos="fade-right">
            <img
              src="/About_Us.jpg"
              alt="About Us"
              className="rounded-2xl shadow-lg transform hover:scale-105 transition duration-500"
            />
          </div>
          <div className="text-center md:text-left" data-aos="fade-left">
            <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              About BareNexus Consultants
            </motion.h2>
            <motion.p className="text-lg text-gray-600 mb-6">
              Empowering businesses with innovative solutions and strategic
              expertise.
            </motion.p>
            <motion.p className="text-gray-700 leading-relaxed">
              BareNexus Consultants Private Limited is headquartered in New
              Delhi, India & serving globally.
              <br />
              <br />
              We specialize in delivering innovative, results-driven consulting
              services across Information Technology, Manpower Supply &
              Recruitment, Ads Marketing, Finance, and beyond. With a
              multidisciplinary team of experts, we provide tailored strategies
              and end-to-end solutions that drive measurable value.
            </motion.p>
          </div>
        </motion.div>
      </section>

      <Services />

      <section id="clients" className="py-20 bg-white">
        <motion.div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Trusted Clients
            </motion.h2>
            <motion.p className="text-lg text-gray-600">
              We're proud to partner with these amazing companies
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-2xl font-bold text-white">
                    {client.charAt(0)}
                  </span>
                </div>
                <motion.h3 className="text-lg font-semibold text-gray-900">
                  {client}
                </motion.h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-16" data-aos="fade-up">
            <motion.p className="text-gray-600 text-lg mb-4">
              Join our growing list of satisfied clients
            </motion.p>
            <motion.button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transform hover:scale-105 transition duration-300"
            >
              Partner With Us
            </motion.button>
          </div>
        </motion.div>
      </section>

      <Contact />
    </>
  );
};

export default Home;
