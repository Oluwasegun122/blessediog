"use client";

import { useState } from "react";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    // You can integrate with Formspree, EmailJS, or your backend
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
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
                  +123 706 5316
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
              {/* Add your social media links here */}
              <a
                href="#"
                className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 transition-colors"
              >
                <FiLinkedin className="text-gray-700" />
              </a>
              <a
                href="#"
                className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 transition-colors"
              >
                <FiGithub className="text-gray-700" />
              </a>
              <a
                href="#"
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
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
            >
              <FiSend className="mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
