"use client";

import { useState, useEffect } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiLinkedin,
  FiGithub,
  FiTwitter,
} from "react-icons/fi";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  // Auto-dismiss messages after 5 seconds
  useEffect(() => {
    if (isSent || error) {
      const timer = setTimeout(() => {
        setIsSent(false);
        setError("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSent, error]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _to: "faithobajafa@email.com", // Your email address
        }),
      });

      if (response.ok) {
        setIsSent(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12 mt-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have a project in mind or want to discuss opportunities? Reach out
          directly or use the contact form.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Contact Information
          </h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FiMail className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Email</h3>
                <a
                  href="mailto:faithobajafa@email.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  faithobajafa@email.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <FiPhone className="text-green-600 text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Phone</h3>
                <a
                  href="tel:+1237065316"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  +234 706 769 5316
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <FiMapPin className="text-purple-600 text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Location</h3>
                <p className="text-gray-600">Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-medium mb-4 text-gray-700">Connect with me</h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/faith-obajafa"
                className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 transition-colors"
              >
                <FiLinkedin className="text-gray-700" />
              </a>
              <a
                href="https://github.com/BLESSEDIOG"
                className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 transition-colors"
              >
                <FiGithub className="text-gray-700" />
              </a>
              <a
                href="https://twitter.com/FaithObajafa"
                className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 transition-colors"
              >
                <FiTwitter className="text-gray-700" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Send Me a Message
          </h2>

          {/* Status Messages */}
          <div className="relative">
            {isSent && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 animate-fade">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 animate-fade">
                {error}
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                disabled={isLoading}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                disabled={isLoading}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                disabled={isLoading}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center ${
                isLoading ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <FiSend className="mr-2" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Add this to your global CSS */}
      <style jsx global>{`
        @keyframes fade {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
        .animate-fade {
          animation: fade 0.5s ease-out 4.5s forwards;
        }
      `}</style>
    </div>
  );
}
