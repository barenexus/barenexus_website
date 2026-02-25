import { useEffect, useState } from "react";
import Services from "./Services";
import Contact from "./Contact";
import "../App.css";
import { getClientsData } from "../services/dataServices";
import AOS from "aos";
import "aos/dist/aos.css";
// import TrustedLogos from "../Components/TrustedLogos";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      {/* Background GIF */}
      <img
        src="/Home_BG_Image.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        alt="background"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>


      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">

        <h1
          data-aos="fade-up"
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Transform Your Business With{" "}
          <span className="text-blue-400">
            BareNexus
          </span>
        </h1>


        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-xl md:text-2xl mb-8 text-gray-200"
        >
          Strategic Consulting • IT Solutions • Growth Acceleration
        </p>


        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="flex flex-wrap justify-center gap-6"
        >

          <button
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold transition"
          >
            Get Started
          </button>


          <button
            onClick={() =>
              document
                .getElementById("services")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition"
          >
            Explore Services
          </button>

        </div>

      </div>

    </section>
  );
  // return (

  //   <section className="relative h-screen flex items-center justify-center">
    
  //   <img
  //   src="/Home_BG_Image.jpg"
  //   className="absolute w-full h-full object-cover"
  //   />
    
  //   <div className="absolute inset-0 bg-black/70"/>
    
  //   <div className="relative text-center text-white">
    
  //   <h1 className="text-6xl font-bold mb-6">
  //   Transform Your Business
  //   </h1>
    
  //   <p className="text-xl mb-8">
  //   Premium IT & Business Consulting Solutions
  //   </p>
    
  //   <button className="bg-blue-600 px-8 py-4 rounded-xl hover:scale-110 transition">
  //   Get Started
  //   </button>
    
  //   </div>
    
  //   </section>
    
  //   );
};

// About Home Component
const About = () => {
  return (
    <section id="about" className="pt-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div
          className="flex justify-center"
          data-aos="fade-right"
        >
          <img
            src="/About_Us.jpg"
            alt="About Us"
            className="rounded-2xl shadow-lg transform hover:scale-105 transition duration-500"
          />
        </div>
        <div className="text-center md:text-left" data-aos="fade-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            About BareNexus Consultants
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Empowering businesses with innovative solutions and strategic
            expertise.
          </p>
          <p className="text-gray-700 leading-relaxed">
            BareNexus Consultants Private Limited is headquartered in New Delhi,
            India & serving globally.
            <br />
            <br />
            We specialize in delivering innovative, results-driven consulting
            services across Information Technology, Manpower Supply &
            Recruitment, Ads Marketing, Finance, and beyond. With a
            multidisciplinary team of experts, we provide tailored strategies
            and end-to-end solutions that drive measurable value.
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
        <div className="text-center mb-16" data-aos="fade-up">
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
              data-aos="zoom-in"
              data-aos-delay={index * 100}
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

        <div className="text-center mt-16" data-aos="fade-up">
          <p className="text-gray-600 text-lg mb-4">
            Join our growing list of satisfied clients
          </p>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
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
