import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <footer className="bg-gradient-to-b from-gray-100 via-white to-gray-200 border-t border-gray-300">
      <div className="py-12">
        <div className="container mx-auto px-4 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {/* About Us */}
            <div data-aos="fade-up">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Us
              </h3>
              <p className="text-base text-gray-600 mb-6">
                BareNexus Consultants provides innovative solutions across IT, HR, Marketing, and Business services to help companies grow.
              </p>
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h5>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/profile.php?id=61578192187504" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition" data-aos="zoom-in">
                    <img src="/Logo_Facebook.jpg" alt="Facebook" className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/company/barenexus/" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-white hover:bg-blue-800 transition" data-aos="zoom-in" data-aos-delay="200">
                    <img src="/Logo_Linkedin.jpg" alt="LinkedIn" className="w-6 h-6" />
                  </a>
                  <a href="https://www.instagram.com/barenexus_consultants" className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 text-white hover:bg-pink-600 transition" data-aos="zoom-in" data-aos-delay="400">
                    <img src="/Logo_Insta.jpg" alt="Instagram" className="w-6 h-6" />
                  </a>
                  <a href="https://www.threads.com/@barenexus_consultants" className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-600 text-white hover:bg-purple-700 transition" data-aos="zoom-in" data-aos-delay="600">
                    <img src="/Logo_Thread.jpg" alt="Threads" className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h3>
              <ul className="space-y-3 text-gray-700">
                <li><Link to="/" className="hover:text-blue-600 transition">Home</Link></li>
                <li><Link to="/about" className="hover:text-blue-600 transition">About Us</Link></li>
                <li><Link to="/services" className="hover:text-blue-600 transition">Our Services</Link></li>
                <li><Link to="/contact" className="hover:text-blue-600 transition">Contact Us</Link></li>
              </ul>
            </div>

            {/* Service Areas */}
            <div data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Areas</h3>
              <ul className="space-y-3 text-gray-700">
                <li><a href="#" className="hover:text-purple-600 transition">Technology Solutions</a></li>
                <li><a href="#" className="hover:text-purple-600 transition">Digital Marketing</a></li>
                <li><a href="#" className="hover:text-purple-600 transition">Business Solutions</a></li>
                <li><a href="#" className="hover:text-purple-600 transition">Human Resources</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div data-aos="fade-up" data-aos-delay="600">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <ul className="space-y-4 text-gray-700">
                <li>
                  <p className="font-semibold">Call Us:</p>
                  <a href="tel:+917818835004" className="hover:text-blue-600 transition">+91 7818835004</a>
                </li>
                <li>
                  <p className="font-semibold">Email Us:</p>
                  <a href="mailto:info@barenexus.com" className="hover:text-blue-600 transition">info@barenexus.com</a>
                </li>
                <li>
                  <p className="font-semibold">Office:</p>
                  <a href="https://maps.app.goo.gl/nJHyPe8V2UBm2gHW7" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                    PT-62/3 LGF, PT and DD Block, Kalkaji, New Delhi 110019
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-300 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-gray-600 text-sm" data-aos="fade-up">
            <p className="mb-4 sm:mb-0">© 2025 BareNexus Consultants. All Rights Reserved.</p>
            <div className="space-x-6">
              <Link to="/privacy-policy" className="hover:text-blue-600 transition">Privacy Policy</Link>
              <Link to="/term-and-conditions" className="hover:text-blue-600 transition">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
