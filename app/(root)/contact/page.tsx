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
          _to: "faithobajafa@email.com", // Recipient's email
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
    <div className="max-w-6xl mx-auto px-4 py-12 mt-16">
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

        {/* ... rest of your form remains the same ... */}
      </div>
    </div>
  );
}
