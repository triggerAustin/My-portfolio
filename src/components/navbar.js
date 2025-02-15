import React, { useState } from 'react';
import logo from "../assets/logo/faviconio-logo/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white fixed w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="h-10 w-auto" /> 
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li><a href="#about" className="hover:text-indigo-300 transition">About</a></li>
          <li><a href="#projects" className="hover:text-indigo-300 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-indigo-300 transition">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white text-2xl focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white py-4">
          <ul className="flex flex-col space-y-4 items-center">
            <li><a href="#about" className="hover:text-indigo-300 transition" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#projects" className="hover:text-indigo-300 transition" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#contact" className="hover:text-indigo-300 transition" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

