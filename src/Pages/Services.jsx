import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import { getServices } from "../services/dataServices";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const [services, setServices] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    getServices()
      .then((data) => setServices(data))
      .catch((err) => console.error(err));

    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 380;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const gradients = [
    "from-blue-600 to-indigo-700",
    "from-purple-600 to-pink-600",
    "from-green-600 to-teal-600",
    "from-orange-500 to-red-500",
    "from-indigo-600 to-blue-600",
  ];

  return (
    <section
      id="services"
      className="py-28 bg-gradient-to-b from-white via-gray-50 to-gray-100 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-20" data-aos="fade-up">

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Our Premium Services
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Delivering world-class consulting solutions to accelerate your business growth
          </p>

        </div>


        {/* Carousel */}
        <div className="relative">

          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-5 top-1/2 -translate-y-1/2 bg-white shadow-xl hover:shadow-2xl p-4 rounded-full z-20 transition"
          >
            ←
          </button>


          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scroll-smooth pb-10 px-2"
            style={{ scrollbarWidth: "none" }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="min-w-[340px] max-w-[340px] bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex flex-col justify-between"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >

                {/* Top Gradient */}
                <div
                  className={`bg-gradient-to-r ${gradients[index % gradients.length]} p-6 text-white rounded-t-3xl h-56`}
                >
                  <div className="text-4xl mb-4">{service.icon}</div>

                  <h3 className="text-2xl font-bold mb-2">
                    {service.title}
                  </h3>

                  <p className="text-white/90 text-sm">
                    {service.description}
                  </p>
                </div>


                {/* Features */}
                <div className="p-6 flex-grow">

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">

                        <div className="w-5 h-5 bg-green-500 rounded-full mt-1"></div>

                        <span className="text-gray-700 text-sm">
                          {feature}
                        </span>

                      </li>
                    ))}
                  </ul>


                  {/* Button */}
                  <button className="mt-auto w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl hover:scale-105 transition">
                    Learn More
                  </button>

                </div>

              </div>
            ))}
          </div>


          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-5 top-1/2 -translate-y-1/2 bg-white shadow-xl hover:shadow-2xl p-4 rounded-full z-20 transition"
          >
            →
          </button>

        </div>

      </div>
    </section>
  );
};

export default Services;