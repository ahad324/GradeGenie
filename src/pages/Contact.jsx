import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [confirmation, setConfirmation] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const params = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_lxx3afc", // Replace with your EmailJS Service ID
        "Gradegenie", // Replace with your EmailJS Template ID
        params,
        "mAIqsPMuzoAgoFEie" // Replace with your EmailJS Public Key
      )
      .then(() => {
        setIsSending(false);
        setConfirmation("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => setConfirmation(""), 7000);
      })
      .catch(() => {
        setIsSending(false);
        alert("Oops! Something went wrong!😔");
      });
  };

  return (
    <div className="fade-in container mx-auto px-6 py-8">
      <Helmet>
        <title>Contact Us - GradeGenie</title>
        <meta
          name="description"
          content="Connect with GradeGenie for feedback or inquiries. We value your input to enhance our GPA, CGPA, and SGPA calculator tools."
        />
        <meta
          name="keywords"
          content="Contact GradeGenie, Feedback, GPA Tools, CGPA Tools, SGPA Calculator"
        />
      </Helmet>

      {/* Page Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-primary mb-4">Contact Us</h1>
        <p className="text-lg text-dark">
          Have questions or feedback? Reach out to us using the form below.
        </p>
      </header>

      {/* Contact Form */}
      <main className="bg-secondary p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-lg font-semibold mb-2"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className={`flex items-center justify-center px-6 py-3 text-white font-semibold rounded-lg transition-all ${
                isSending
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-primary hover:bg-accent"
              }`}
              disabled={isSending}
            >
              {isSending ? (
                "Sending..."
              ) : (
                <>
                  Send <FaPaperPlane className="ml-2" />
                </>
              )}
            </button>
          </div>
        </form>
        {confirmation && (
          <p className="text-center text-green-500 mt-6">{confirmation}</p>
        )}
      </main>
    </div>
  );
};

export default Contact;
