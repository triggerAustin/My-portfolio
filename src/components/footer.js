import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">Connect with me</p>
        <div className="flex justify-center gap-6 mt-3">
          {/* GitHub */}
          <a
            href="https://github.com/triggerAustin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/austin-nganga/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          {/* WhatsApp Chat */}
          <a
            href="https://wa.me/+254705023274"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
        <p className="text-sm mt-3 text-gray-500">© 2025 Austin Nganga. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
