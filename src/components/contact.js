import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_7ackn7k", "template_q77i342", e.target, "C8VBPCDtRsquWuKKM")
      .then((result) => {
        alert("Message sent successfully!");
      })
      .catch((error) => {
        alert("Error sending message. Try again.");
      });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Contact Me</h2>
      <form onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required className="w-full p-2 border rounded mb-3" onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" required className="w-full p-2 border rounded mb-3" onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" required className="w-full p-2 border rounded mb-3" onChange={handleChange}></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">Send</button>
      </form>
    </div>
  );
}
