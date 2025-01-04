import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-16 px-6 md:px-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Me</h2>
        <p className="text-lg text-gray-700">
          I am a full-stack developer passionate about creating seamless user experiences.
          I have experience in building web and mobile applications using modern technologies like React, Flask, and MongoDB. 
          Currently, I am working on a variety of projects including scheduling apps, document retrieval systems, and educational platforms.
        </p>
      </div>
    </section>
  );
};

export default About;
