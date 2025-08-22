import React, { useState, useEffect } from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200">
      <div className="bg-slate-200">
        <div className="pt-5 pb-8 relative z-0">
          <div className="mx-auto px-4 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
            <div className="flex flex-wrap">
              <div className="max-w-full flex-none sm:w-1/2 md:w-1/2 lg:w-1/4 px-3">
                <div className="pr-0 mb-12">
                  <h3 className="text-2xl text-black mb-6 relative font-[Nimbussanl\ bol,sans-serif]">
                    About Us
                  </h3>
                  <p className="text-base text-black text-opacity-70 font-medium mb-7 font-[Nimbussanl\ bol,sans-serif]">
                    How you use the city or town name is up to you. All results
                    may be freely used in any work.
                  </p>
                  <div>
                    <h5 className="pt-1 text-lg text-black font-[Nimbussanl\ bol,sans-serif]">
                      Follow :
                    </h5>
                    <a
                      href="https://www.facebook.com/profile.php?id=61578192187504"
                      className="inline-block w-10 h-10 leading-9 text-center mr-2 hover:text-white hover:bg-slate-900"
                    >
                      <i className="font-normal">
                        <img src="/Logo_Facebook.jpg" alt="Facebook Logo" />
                      </i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/barenexus/"
                      className="inline-block w-10 h-10 leading-9 text-center mr-2 hover:text-white hover:bg-slate-900"
                    >
                      <i className="font-normal">
                        <img src="/Logo_Linkedin.jpg" alt="Linkedin Logo" />
                      </i>
                    </a>
                    <a
                      href="https://www.instagram.com/barenexus_consultants?igsh=MXh1OWF1MnowbjZ6cg%3D%3D&utm_source=qr"
                      className="inline-block w-10 h-10 leading-9 text-center mr-2 hover:text-white hover:bg-slate-900"
                    >
                      <i className="font-normal">
                        <img src="/Logo_Insta.jpg" alt="Instagram Logo" />
                      </i>
                    </a>
                    <a
                      href="https://www.threads.com/@barenexus_consultants?invite=0"
                      className="inline-block w-10 h-10 leading-9 text-center mr-2 hover:text-white hover:bg-slate-900"
                    >
                      <i className="font-normal">
                        <img src="/Logo_Thread.jpg" alt="Thread Logo" />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="max-w-full flex-none sm:w-1/2 md:w-1/2 lg:w-1/4 px-3">
                <div className="pr-0 mb-12">
                  <h3 className="text-2xl text-black mb-6 relative font-[Nimbussanl\ bol,sans-serif]">
                    Quick Link
                  </h3>
                  <div>
                    <ul className="mt-0 mb-0 pl-6 text-xl font-[Plus Jakarta Sans, sans-serif]">
                      <li className="mb-4 list-none leading-none">
                        <a href="/">Home</a>
                      </li>
                      <li className="mb-4 list-none leading-none">
                        <a href="/about">About Us</a>
                      </li>
                      <li className="mb-4 list-none leading-none">
                        <a href="/services">Our Service</a>
                      </li>
                      <li className="mb-4 list-none leading-none">
                        <a href="/contact">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="max-w-full flex-none sm:w-1/2 md:w-1/2 lg:w-1/4 px-3">
                <div className="pr-0 mb-12">
                  <h3 className="text-2xl text-black mb-6 relative font-[Nimbussanl\ bol,sans-serif]">
                    Service Areas
                  </h3>
                  <div>
                    <ul className="mt-0 mb-0 pl-6 text-xl font-[Plus Jakarta Sans, sans-serif]">
                      <li className="mb-4 list-none leading-none">
                        <a href="#">Technology Solutions</a>
                      </li>
                      <li className="mb-4 list-none leading-none">
                        <a href="#">Digital Marketing Solutions</a>
                      </li>
                      <li className="mb-4 list-none leading-none">
                        <a href="#">Business Solution</a>
                      </li>
                      <li className="mb-4 list-none leading-none">
                        <a href="#">Human Resource Solution</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="max-w-full flex-none sm:w-1/2 md:w-1/2 lg:w-1/4 px-3">
                <div className="pr-0 mb-12">
                  <h3 className="text-2xl text-black mb-6 relative font-[Nimbussanl\ bol,sans-serif]">
                    Get in Touch
                  </h3>
                  <div>
                    <div className="flex items-start mb-5">
                      <div className="mr-5">
                        <span className="flex justify-center text-black w-11 h-11 text-base leading-[46px] items-center bg-black rounded-lg">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="items-center"
                          >
                            <path
                              d="M14.979 12.431C14.979 12.683 14.923 12.942 14.804 13.194C14.685 13.446 14.531 13.684 14.328 13.908C13.985 14.286 13.607 14.559 13.18 14.734C12.76 14.909 12.305 15 11.815 15C11.101 15 10.338 14.832 9.533 14.489C8.728 14.146 7.923 13.684 7.125 13.103C6.32 12.515 5.557 11.864 4.829 11.143C4.108 10.415 3.457 9.652 2.876 8.854C2.302 8.056 1.84 7.258 1.504 6.467C1.168 5.669 1 4.906 1 4.178C1 3.702 1.084 3.247 1.252 2.827C1.42 2.4 1.686 2.008 2.057 1.658C2.505 1.217 2.995 1 3.513 1C3.709 1 3.905 1.042 4.08 1.126C4.262 1.21 4.423 1.336 4.549 1.518L6.173 3.807C6.299 3.982 6.39 4.143 6.453 4.297C6.516 4.444 6.551 4.591 6.551 4.724C6.551 4.892 6.502 5.06 6.404 5.221C6.313 5.382 6.18 5.55 6.012 5.718L5.48 6.271C5.403 6.348 5.368 6.439 5.368 6.551C5.368 6.607 5.375 6.656 5.389 6.712C5.41 6.768 5.431 6.81 5.445 6.852C5.571 7.083 5.788 7.384 6.096 7.748C6.411 8.112 6.747 8.483 7.111 8.854C7.489 9.225 7.853 9.568 8.224 9.883C8.588 10.191 8.889 10.401 9.127 10.527C9.162 10.541 9.204 10.562 9.253 10.583C9.309 10.604 9.365 10.611 9.428 10.611C9.547 10.611 9.638 10.569 9.715 10.492L10.247 9.967C10.422 9.792 10.59 9.659 10.751 9.575C10.912 9.477 11.073 9.428 11.248 9.428C11.381 9.428 11.521 9.456 11.675 9.519C11.829 9.582 11.99 9.673 12.165 9.792L14.482 11.437C14.664 11.563 14.79 11.71 14.867 11.885C14.937 12.06 14.979 12.235 14.979 12.431Z"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                            ></path>
                            <path
                              d="M12.5497 5.89986C12.5497 5.47986 12.2207 4.83586 11.7307 4.31086C11.2827 3.82786 10.6877 3.44986 10.0997 3.44986"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M14.9997 5.9C14.9997 3.191 12.8087 1 10.0997 1"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-black mb-0 text-base font-bold font-[Nimbussanl\ bol,sans-serif]">
                          Call us:
                        </h4>
                        <a
                          href="tel:+917818835004"
                          className="text-black font-normal text-sm font-[Nimbussanl\ bol,sans-serif]"
                        >
                          +91 7818835004
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start mb-5">
                      <div className="mr-5">
                        <span className="flex justify-center text-black w-11 h-11 text-base leading-[46px] items-center bg-black rounded-lg">
                          <svg
                            width="16"
                            height="14"
                            viewBox="0 0 16 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.5 12.9H4.5C2.4 12.9 1 11.85 1 9.4V4.5C1 2.05 2.4 1 4.5 1H11.5C13.6 1 15 2.05 15 4.5V9.4C15 11.85 13.6 12.9 11.5 12.9Z"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M11.5 4.85059L9.309 6.60059C8.588 7.17459 7.405 7.17459 6.684 6.60059L4.5 4.85059"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-black mb-0 text-base font-bold font-[Nimbussanl\ bol,sans-serif]">
                          Email us:
                        </h4>
                        <a
                          href="mailto:info@barenexus.com"
                          className="text-black font-normal text-sm font-[Nimbussanl\ bol,sans-serif]"
                        >
                          info@barenexus.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start mb-5">
                      <div className="mr-5">
                        <span className="flex justify-center text-black w-11 h-11 text-base leading-[46px] items-center bg-black rounded-lg">
                          <svg
                            width="16"
                            height="18"
                            viewBox="0 0 16 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.1121 10.1466C9.53315 10.1466 10.6851 9.02879 10.6851 7.64994C10.6851 6.2711 9.53315 5.15332 8.1121 5.15332C6.69105 5.15332 5.53906 6.2711 5.53906 7.64994C5.53906 9.02879 6.69105 10.1466 8.1121 10.1466Z"
                              stroke="white"
                              stroke-width="1.5"
                            ></path>
                            <path
                              d="M1.2002 6.1933C2.82484 -0.736432 13.4057 -0.72843 15.022 6.2013C15.9704 10.2663 13.3644 13.7072 11.08 15.8357C9.42239 17.3881 6.79986 17.3881 5.13398 15.8357C2.85783 13.7072 0.251802 10.2583 1.2002 6.1933Z"
                              stroke="white"
                              stroke-width="1.5"
                            ></path>
                          </svg>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-black mb-0 text-base font-bold font-[Nimbussanl\ bol,sans-serif]">
                          Office:
                        </h4>
                        <a
                          target="_blank"
                          href="https://maps.app.goo.gl/nJHyPe8V2UBm2gHW7"
                          className="text-black font-normal text-sm font-[Nimbussanl\ bol,sans-serif]"
                        >
                          PT-62/3 LGF, PT and DD Block, Kalkaji, New Delhi
                          110019
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full px-3 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
            <div className="py-5 border-t border-black/10">
              <div className="flex flex-wrap mt-0">
                <div className="flex-none w-1/2">
                  <p className="mb-0 text-black text-base font-normal font-[Nimbussanl\ bol,sans-serif]">
                    <a href="/">© 2025 BareNexus Consultants</a> All Rights
                    Reserved.
                  </p>
                </div>
                <div className="flex-none w-1/2">
                  <div className="text-right">
                    <a
                      href="/privacy-policy"
                      className="inline-block text-black mr-6 text-sm font-medium font-[Nimbussanl\ bol, sans-serif;] hover:text-gray-600"
                    >
                      Privacy Policy
                    </a>
                    <a
                      href="/term-and-conditions"
                      className="inline-block text-black mr-0 text-sm font-medium font-[Nimbussanl\ bol, sans-serif;] hover:text-gray-600"
                    >
                      Terms and Conditions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
