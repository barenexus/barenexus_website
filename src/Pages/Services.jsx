import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import { getServices } from "../services/dataServices";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const [services, setServices] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    getServices()
      .then((data) => setServices(data))
      .catch((err) => console.error("Error loading users:", err));

    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  const gradients = [
    "from-blue-500 to-blue-700",
    "from-purple-500 to-purple-700",
    "from-green-500 to-green-700",
    "from-pink-500 to-red-600",
    "from-orange-500 to-yellow-600",
    "from-indigo-500 to-indigo-700",
  ];

  const scroll = (direction) => {
    if (scrollRef.current && cardRef.current && services.length > 0) {
      const cardWidth = cardRef.current.offsetWidth + 24; // include gap

      let newIndex =
        direction === "left" ? currentIndex - 1 : currentIndex + 1;

      // Loop logic
      if (newIndex < 0) {
        newIndex = services.length - 1; // last card
      } else if (newIndex >= services.length) {
        newIndex = 0; // first card
      }

      setCurrentIndex(newIndex);

      scrollRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative"
    >
      <div className="container mt-16 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Comprehensive solutions tailored to drive your business forward
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
          >
            ◀
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex overflow-x-hidden space-x-6 scroll-smooth" // hide native scroll
          >
            {services.map((service, index) => (
              <div
                key={index}
                ref={index === 0 ? cardRef : null}
                className="max-w-[500px] flex-shrink-0 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                data-aos="zoom-in"
                data-aos-delay={index * 150}
              >
                <div
                  className={`bg-gradient-to-r ${
                    gradients[index % gradients.length]
                  } p-8 text-white`}
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/90">{service.description}</p>
                </div>
                <div className="p-6 bg-gradient-to-tr from-gray-50 to-gray-100">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center"
                        data-aos="fade-up"
                        data-aos-delay={featureIndex * 100}
                      >
                        <svg
                          className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
