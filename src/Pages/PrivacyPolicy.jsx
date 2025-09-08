import React, { useEffect } from "react";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <div class="privacy-policy-page p-[120px] text-white bg-slate-600 overflow-hidden">
      <h1 class="text-[48px] font-bold" data-aos="fade-up">
        Privacy Policy
      </h1>
      <div class="mt-10 space-y-12">
        <p class="text-xl" data-aos="fade-up" data-aos-delay="200">
          BareNexus Consultants operates the barenexus.com website. This Privacy
          Policy outlines how we collect, use, and disclose personal information
          when you use our website and the choices you have regarding that
          information.
        </p>

        <div data-aos="fade-left">
          <p class="text-xl mb-4 font-bold">Information We Collect:</p>
          <p class="text-xl">
            We may collect personal information such as your name, email
            address, phone number, and company name when you fill out forms on
            our website or communicate with us via email.
          </p>
        </div>

        <div data-aos="fade-right">
          <p class="text-xl mb-4 font-bold">How We Use Your Information:</p>
          <p class="text-xl">
            We use the information we collect to provide and improve our
            services, respond to inquiries, and communicate with you about our
            products and services. We may also use your information to
            personalize your experience on our website and to send you marketing
            communications that we believe may be of interest to you.
          </p>
        </div>

        <div data-aos="fade-up">
          <p class="text-xl mb-4 font-bold">Information Sharing:</p>
          <p class="text-xl">
            We do not sell, trade, or otherwise transfer your personal
            information to third parties without your consent, except as
            described in this Privacy Policy. We may share your information with
            trusted third-party service providers who assist us in operating our
            website, conducting our business, or servicing you, as long as those
            parties agree to keep this information confidential.
          </p>
        </div>

        <div data-aos="fade-left">
          <p class="text-xl mb-4 font-bold">Data Security:</p>
          <p class="text-xl">
            We take reasonable measures to protect your personal information
            from unauthorized access, use, or disclosure. However, no method of
            transmission over the internet or electronic storage is 100% secure,
            and we cannot guarantee absolute security.
          </p>
        </div>

        <div data-aos="fade-up">
          <p class="text-xl mb-4 font-bold">Your Choices:</p>
          <p class="text-xl">
            You may choose not to provide certain personal information, but this
            may limit your ability to use certain features of the Service. You
            can also unsubscribe from our marketing communications at any time
            by following the instructions provided in the emails we send you.
          </p>
        </div>

        <div data-aos="fade-right">
          <p class="text-xl mb-4 font-bold">Children's Privacy:</p>
          <p class="text-xl">
            Our website is not directed to individuals under the age of 18, and
            we do not knowingly collect personal information from children under
            18. If you are a parent or guardian and you are aware that your
            child has provided us with personal information, please contact us
            so that we can take appropriate action.
          </p>
        </div>

        <div data-aos="fade-left">
          <p class="text-xl mb-4 font-bold">Changes to This Privacy Policy:</p>
          <p class="text-xl">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>
        </div>

        <div data-aos="fade-up">
          <p class="text-xl mb-4 font-bold">Contact Us:</p>
          <p class="text-xl">
            If you have any questions about this Privacy Policy, please contact
            us at info@barenexus.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
