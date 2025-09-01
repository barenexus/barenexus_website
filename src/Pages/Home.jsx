import { useEffect, useState } from "react";
import Services from "./Services";
import Contact from "./Contact";
import "../App.css";
import { getClientsData } from "../services/dataServices";

const Home = () => {
  return (
    <div className="App">
      <_Home_ />
      <About />
      <Services />
      <Clients />
      <Contact />
    </div>
  );
};

// Home Component
const _Home_ = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/Home_BG_Image.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex flex-col items-center text-center text-white px-4 animate-fade-in">
        <h1 className="text-4xl sm:text-6xl font-extrabold drop-shadow-lg">
          Welcome to <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">BareNexus</span>
        </h1>
        <p className="mt-4 text-lg sm:text-2xl font-medium max-w-2xl animate-slide-up">
          Your Reliable Consultants for Strategic Development
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button
            onClick={() =>
              document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-lg text-lg font-semibold shadow-lg hover:from-blue-800 hover:to-blue-900 transform hover:scale-105 transition-all duration-300"
          >
            Get Started Today
          </button>
          <button
            onClick={() =>
              document.getElementById("services").scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300"
          >
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

// About Home Component
const About = () => {
  return (
    <section id="about" className="pt-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img src="/About_Us.jpg" alt="About Us" className="rounded-2xl shadow-lg transform hover:scale-105 transition duration-500" />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            About BareNexus Consultants
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Empowering businesses with innovative solutions and strategic expertise.
          </p>
          <p className="text-gray-700 leading-relaxed">
            BareNexus Consultants Private Limited is headquartered in New Delhi, India & serving globally.
            <br /><br />
            We specialize in delivering innovative, results-driven consulting services across Information Technology,
            Manpower Supply & Recruitment, Ads Marketing, Finance, and beyond. With a multidisciplinary team of experts,
            we provide tailored strategies and end-to-end solutions that drive measurable value.
          </p>
        </div>
      </div>
    </section>
  );
};

// Clients Component
const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getClientsData()
      .then((data) => setClients(data))
      .catch((err) => console.error("Error loading users:", err));
  }, []);

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Trusted Clients
          </h2>
          <p className="text-lg text-gray-600">
            We're proud to partner with these amazing companies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold text-white">
                  {client.charAt(0)}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{client}</h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg mb-4">
            Join our growing list of satisfied clients
          </p>
          <button
            onClick={() =>
              document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transform hover:scale-105 transition duration-300"
          >
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
