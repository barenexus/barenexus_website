import React, { useEffect } from "react";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

const TermsConditions = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <div className="terms-page px-6 py-16 sm:px-12 sm:py-20 lg:px-24 lg:py-28 xl:px-32 xl:py-32 text-white bg-slate-600 overflow-hidden">
      <h1
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center"
        data-aos="fade-up"
      >
        Terms of Services
      </h1>

      <div className="mt-10 space-y-12">
        <p
          className="text-base sm:text-lg lg:text-xl leading-relaxed"
          data-aos="fade-up"
        >
          Please read these Terms of Service carefully before using the
          barenexus.com website operated by BareNexus Consultants Pvt Ltd.
        </p>

        <p
          className="text-base sm:text-lg lg:text-xl leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Your access to and use of the Service is conditioned on your
          acceptance of and compliance with these Terms. These Terms apply to
          all visitors, users, and others who access or use the Service.
        </p>

        <p
          className="text-base sm:text-lg lg:text-xl leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          By accessing or using the Service, you agree to be bound by these
          Terms. If you disagree with any part of the terms, then you may not
          access the Service.
        </p>

        <div data-aos="fade-left">
          <p className="text-lg sm:text-xl mb-4 font-bold">Use of the Service:</p>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
            You are granted a non-exclusive, non-transferable, limited license
            to access and use the Service solely for your personal and internal
            business purposes. You may not use the Service for any illegal or
            unauthorized purpose. You agree to comply with all applicable laws,
            rules, and regulations when using the Service.
          </p>
        </div>

        <div data-aos="fade-right">
          <p className="text-lg sm:text-xl mb-4 font-bold">Intellectual Property Rights:</p>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
            The Service and its original content, features, and functionality
            are and will remain the exclusive property of BareNexus Consultants
            Pvt. Ltd. and its licensors. The Service is protected by copyright,
            trademark, and other laws of both the United States and foreign
            countries. Our trademarks and trade dress may not be used in
            connection with any product or service without the prior written
            consent of BareNexus Consultants Pvt Ltd.
          </p>
        </div>

        <div data-aos="fade-up">
          <p className="text-lg sm:text-xl mb-4 font-bold">Links to Other Websites:</p>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
            Our Service may contain links to third-party websites or services
            that are not owned or controlled by BareNexus Consultants. BareNexus
            Consultants has no control over, and assumes no responsibility for,
            the content, privacy policies, or practices of any third-party
            websites or services. You further acknowledge and agree that
            BareNexus Consultants Pvt Ltd shall not be responsible or liable,
            directly or indirectly, for any damage or loss caused or alleged to
            be caused by or in connection with the use of or reliance on any
            such content, goods, or services available on or through any such
            websites or services.
          </p>
        </div>

        <div data-aos="fade-left">
          <p className="text-lg sm:text-xl mb-4 font-bold">Termination:</p>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
            We may terminate or suspend access to our Service immediately,
            without prior notice or liability, for any reason whatsoever,
            including without limitation if you breach the Terms. All provisions
            of the Terms which by their nature should survive termination shall
            survive termination, including, without limitation, ownership
            provisions, warranty disclaimers, indemnity, and limitations of
            liability.
          </p>
        </div>

        <div data-aos="fade-up">
          <p className="text-lg sm:text-xl mb-4 font-bold">Governing Law:</p>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
            These Terms shall be governed and construed in accordance with the
            laws of Delhi (India), without regard to its conflict of law
            provisions.
          </p>
        </div>

        <div data-aos="fade-right">
          <p className="text-lg sm:text-xl mb-4 font-bold">Changes:</p>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material, we will try to
            provide at least 30 days notice prior to any new terms taking
            effect. What constitutes a material change will be determined at our
            sole discretion.
          </p>
        </div>

        <div data-aos="fade-up">
          <p className="text-lg sm:text-xl mb-4 font-bold">Contact Us:</p>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
            If you have any questions about these Terms, please contact us at
            barenexus.official@gmail.com
          </p>
        </div>

        <div className="flex flex-col gap-8" data-aos="fade-up">
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
            By accessing or using the Service, you agree to be bound by these
            Terms. If you do not agree to these Terms, please do not access or
            use the Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
