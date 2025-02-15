import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [notification, setNotification] = useState({ message: "", type: "" }); // Notification state with type

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Send email via EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.firstName || !formData.email || !formData.message) {
      setNotification({ message: "Please fill in all required fields!", type: "error" });
      setTimeout(() => setNotification({ message: "", type: "" }), 3000);
      return;
    }

    emailjs
      .sendForm("service_7ackn7k", "template_q77i342", e.target, "C8VBPCDtRsquWuKKM")
      .then(() => {
        setNotification({ message: "Email successfully sent! ", type: "success" });
        setTimeout(() => setNotification({ message: "", type: "" }), 3000);
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" }); // Reset form
      })
      .catch(() => {
        setNotification({ message: "Error sending message. Try again! ", type: "error" });
        setTimeout(() => setNotification({ message: "", type: "" }), 3000);
      });
  };

  return (
    <div className="flex rounded-lg p-6 md:p-10 w-full max-w-4xl mx-auto flex-col" id="contact">
      <h4 className="font-semibold">Reach out, Let's connect!</h4>

      {/* Right Side - Form */}
      <div className="flex-1 p-6">
        <form className="space-y-4" onSubmit={sendEmail}>
          {/* Name Fields */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2">
              <label className="block text-gray-600 text-sm mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="John"
                required
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label className="block text-gray-600 text-sm mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Doe"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2">
              <label className="block text-gray-600 text-sm mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="example@mail.com"
                required
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label className="block text-gray-600 text-sm mb-1">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="+90 543 779 94 64"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-600 text-sm mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded h-20"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button className="w-full bg-purple-700 text-white p-2 rounded hover:bg-purple-800">
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Notification Block with Conditional Background Color */}
      {notification.message && (
        <div
          className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg shadow-lg text-center text-white 
            ${notification.type === "success" ? "bg-green-800" : "bg-red-800"}`}
        >
          {notification.message}
        </div>
      )}
    </div>
  );
}
