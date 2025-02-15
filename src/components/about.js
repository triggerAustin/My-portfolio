import React from "react";
import GitHubStats from "./githubStats";
import Certificates from "./certificates";

const About = () => {

  return (
    <div className="max-w-5xl mx-auto px-6 py-12" id="about">
     
      {/*github stats*/}
      <GitHubStats />
     
      {/* Who I Am */}
      <div className="border-b-2 p-6 mb-6 border-gray-300">
        <h3 className="text-xl font-semibold">Who I Am</h3>
        <p className="text-gray-600 mt-2">
          Hi, I'm <span className="font-bold">Austin Nganga</span>, a passionate **Full-Stack Developer & AI Enthusiast** with a focus on **MERN stack, Flask, and AI-driven solutions**. I enjoy building scalable applications and solving complex problems.
        </p>
      </div>

      {/* Tech Stack */}
      <div className="border-b-2 p-6 mb-6 border-gray-300">
        <h3 className="text-xl font-semibold">Tech Stack & Tools</h3>
        <div className="flex flex-wrap gap-3 mt-3">
          {[
            "JavaScript", "React", "Node.js", "MongoDB", "Express", 
            "Python", "Flask", "Firebase", "Tailwind CSS", "Git"
          ].map((tech, index) => (
            <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
              {tech}
            </span>
          ))}
        </div>
      </div>

        {/* Hobbies & Interests */}
        <div className="border-b-2 p-6 border-gray-300">
        <h3 className="text-xl font-semibold">Hobbies & Interests</h3>
        <p className="text-gray-600 mt-2">
          Beyond coding, I enjoy **cooking**,<br></br>
           AI research, and building **automation tools**.<br></br> 
           I also love **gaming, writing, listening to music, swimming**, and exploring **new tech trends**.
        </p>
      </div>

      {/* Experience */}
      <div className="border-b-2 p-6 mb-6 border-gray-300">
        <h3 className="text-xl font-semibold">Experience</h3>
        <div className="mt-4">
          <div className="mb-4">
            <h4 className="font-semibold">Freelance Developer</h4>
            <p className="text-gray-500 text-sm">2022 - Present</p>
            <p className="text-gray-600">
              Built multiple web applications using **React, Node.js, Flask**, and **MongoDB**. Focused on **AI-powered document retrieval, scheduling apps, and full-stack web solutions**.
            </p>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold">Software Developer Intern</h4>
            <p className="text-gray-500 text-sm">TechSavannah Technologies | June 2024 - sep 2024</p>
            <p className="text-gray-600">
              Worked on **ERP Next** and **react based frontend**.
            </p>
          </div>
        </div>
      </div>
    
      {/*education and certs */}
      <Certificates />

     
    </div>
  );
};

export default About;
