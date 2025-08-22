import React from "react";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import "../App.css";

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
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-slate-50"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              BareNexus Consultants
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-6 font-medium">
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
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Get Started Today
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("services")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Clients Component
const Clients = () => {
  const clients = [
    "CIC Pictures Pvt. Ltd.",
    "AV DMC and Holiday Pvt. Ltd",
    "Startup Mitra Services Pvt. Ltd.",
    "Alka Trading Company",
    "AB Cargo Services Pvt. Ltd.",
    "DigiPaco Marketing Agency",
  ];

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
