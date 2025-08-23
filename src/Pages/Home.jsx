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
      style={{ backgroundImage: "url('/Home_BG_Image.jpg')" }}
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent">
              BareNexus Consultants Page
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-800 mb-6 font-medium">
            Your Reliable Consultants for Strategic Development
          </p>
          {/* <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            BareNexus Consultant is a dynamic and innovative consulting firm
            specializing in Human Resources, IT services, Digital Marketing and
            Business solutions. At BareNexus, we believe in bridging the gap
            between potential and performance.
          </p> */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gradient-to-r from-blue-700 to-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-800 hover:to-blue-900 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Get Started Today
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("services")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-blue-800 text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 hover:text-white transition-all duration-200"
            >
              Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

//About Home Component
const About = () => {
  return (
    <section id="about" className="flex pt-20 bg-gray-50">
      <div className="contents w-1/2 h-full">
        <i>
          <img src="/About_Us.jpg" alt="About Us" />
        </i>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About BareNexus
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering businesses with innovative solutions and strategic
            expertise
          </p>
          <br />
          <p>
            BareNexus Consultants Private Limited established under Companies
            Act headquarter in New Delhi, India & Serving globally.
            <br />
            <br /> At BareNexus, We specialize in delivering innovative,
            results-driven consulting services across Information Technology,
            Manpower Supply & Recruitment, Ads Marketing, Finance, and beyond.
            BareNexus combines cutting-edge tools with a flexible hybrid work
            environment to create a culture of trust, productivity, and balance.
            With a multidisciplinary team of experts, we provide tailored
            strategies and end-to-end solutions that drive measurable value.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1 text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">
                  {client.charAt(0)}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{client}</h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            Join our growing list of satisfied clients
          </p>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
