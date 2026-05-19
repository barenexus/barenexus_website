import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Careers = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    mobile: "",
    email: "",
    dob: "",
    technology: "",
    skills: "",
    experience: "",
    location: "",
    resume: null,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "resume") {
      const file = files[0];

      if (!file) return;

      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedTypes.includes(file.type)) {
        alert("Only PDF or Word files allowed");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }

      setFormData({ ...formData, resume: file });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.mobile.length < 10 || formData.mobile.length > 11) {
      alert("Mobile number must be 10-11 digits");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_mcs9ux9",
        "template_v24zt8e",
        {
          firstName: formData.firstName,
          middleName: formData.middleName,
          lastName: formData.lastName,
          mobile: formData.mobile,
          email: formData.email,
          dob: formData.dob,
          technology: formData.technology,
          skills: formData.skills,
          experience: formData.experience,
          location: formData.location,
        },
        "246FNW8tt9SxjvkU3",
      );

      setStatus("success");

      setFormData({
        firstName: "",
        middleName: "",
        lastName: "",
        mobile: "",
        email: "",
        dob: "",
        technology: "",
        skills: "",
        experience: "",
        location: "",
        resume: null,
      });
    } catch (error) {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-purple-50">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-3">
          Careers @ BareNexus Consultants
        </h1>

        <p className="text-center text-gray-600 mb-10">
          We are a Human Resource Consulting firm which finds the best suitable
          jobs for you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-xl grid md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            name="firstName"
            placeholder="First Name *"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="text"
            name="middleName"
            placeholder="Middle Name"
            value={formData.middleName}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name *"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="number"
            name="mobile"
            placeholder="Mobile Number *"
            required
            value={formData.mobile}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email ID *"
            required
            value={formData.email}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="date"
            name="dob"
            required
            value={formData.dob}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <select
            name="technology"
            required
            value={formData.technology}
            onChange={handleChange}
            className="border p-3 rounded"
          >
            <option value="">Select Technology *</option>
            <option>Java</option>
            <option>Python</option>
            <option>React</option>
            <option>Node.js</option>
            <option>DevOps</option>
            <option>Data Analyst</option>
            <option>Other</option>
          </select>

          <input
            type="text"
            name="skills"
            placeholder="Skills *"
            required
            value={formData.skills}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <select
            name="experience"
            required
            value={formData.experience}
            onChange={handleChange}
            className="border p-3 rounded"
          >
            <option value="">Total Years of Experience *</option>
            <option>0-1 Years</option>
            <option>1-3 Years</option>
            <option>3-5 Years</option>
            <option>5-8 Years</option>
            <option>8+ Years</option>
          </select>

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <div className="md:col-span-2">
            <input
              type="file"
              name="resume"
              required
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className="border p-3 rounded w-full"
            />
            <p className="text-sm text-gray-500 mt-1">
              Upload Resume (PDF/DOC/DOCX, Max 5MB)
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            {loading ? "Submitting..." : "Apply Now"}
          </button>

          {status === "success" && (
            <p className="text-green-600 text-center md:col-span-2">
              Application submitted successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-600 text-center md:col-span-2">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Careers;
