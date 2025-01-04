import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-16 px-6 md:px-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Contact Me</h2>
        <form className="bg-white rounded-lg p-6 shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              id="name"
              className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              id="email"
              className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
            <textarea
              id="message"
              className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            ></textarea>
          </div>
          <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
