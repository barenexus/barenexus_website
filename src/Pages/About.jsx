import React, { useEffect, useState } from "react";
import "../App.css";
import { getSectors } from "../services/dataServices";

const About = () => {
  const [sectors, setSectors] = useState([]);

  useEffect(() => {
    getSectors()
      .then((data) => setSectors(data))
      .catch((err) => console.error("Error loading users:", err));
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mt-16 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About BareNexus
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering businesses with innovative solutions and strategic
            expertise
          </p>
        </div>

        {/* Vision and Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Vision Card */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To be the most trusted partner for businesses worldwide by
              empowering them with exceptional talent, innovative IT solutions,
              and transformative business strategies that drive sustainable
              growth, operational excellence, and competitive advantage in an
              ever-evolving digital landscape.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-gradient-to-br from-purple-200 to-purple-300 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
            </div>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Unlock true performance by identifying gaps and providing
                specialized training
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Empower businesses by delivering customized manpower solutions
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Provide innovative IT services and strategic business
                optimization
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Drive operational excellence and connect organizations with
                right talent
              </li>
            </ul>
          </div>
        </div>

        {/* Sector Expertise */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Empowering Every Sector with Innovation
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            No Sector Limits. Only Solutions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="bg-gray-200 hover:bg-blue-200 p-4 rounded-lg transition-colors duration-200 cursor-default"
              >
                <p className="text-sm font-medium text-gray-700">{sector}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
