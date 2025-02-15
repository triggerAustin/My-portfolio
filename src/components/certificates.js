import React, { useState } from "react";
import Modal from "react-modal";
import alxCert from "../assets/certs/alx.png";

const Certificates = () => {
  // Modal state
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  // Certificates list
  const certificates = [
    {
      title: "BSc. Computer Science",
      institution: "Maasai Mara University",
      date: "2021 - 2025 (ongoing)",
      image: "https://via.placeholder.com/600x400", // Replace with actual certificate image URL
      state: "ongoing",
    },
    {
      title: "Software Engineering",
      institution: "ALX SE Program",
      date: "Nov 2023 - Feb 2025",
      image: alxCert, // Replace with actual certificate image URL
    },
  ];

  // Open modal function
  const openModal = (cert) => {
    setSelectedCert(cert);
    setModalIsOpen(true);
  };

  // Close modal function
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedCert(null);
  };

  return (
    <div className="container mx-auto py-10 relative">
      {/* Education & Certifications */}
      <div className="border-b-2 border-gray-300 p-6 mb-6">
        <h3 className="text-xl font-semibold">Education & Certifications</h3>
        <div className="mt-4">
          {certificates.map((cert, index) => (
            <div key={index} className="mb-4 flex-row">
              <h4 className="font-semibold">{cert.title}</h4>
              <p className="text-gray-500 text-sm">{cert.institution} | {cert.date}</p>
              <button
                onClick={() => openModal(cert)}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600"
              >
                View Certificate
              </button>
            </div>
          ))}
        </div>

        {/* Modal for viewing certificates */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="fixed inset-0 flex items-center justify-center z-50"
          overlayClassName="fixed inset-0 bg-black bg-opacity-70 z-40"
        >
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg text-center z-50">
            {selectedCert && (
              <>
                <h2 className="text-lg font-semibold mb-2">{selectedCert.title}</h2>
                <p className="text-gray-500 text-sm mb-4">{selectedCert.institution} | {selectedCert.date}</p>
                <img src={selectedCert.image} alt={selectedCert.state} className="w-full rounded-lg mb-4" />
                <button
                  onClick={closeModal}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Close
                </button>
              </>
            )}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Certificates;
