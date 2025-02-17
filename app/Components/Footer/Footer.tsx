'use client';
import Image from "next/image";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#100916] text-white py-8 text-center relative">
      {/* Logo */}
      <div className="flex justify-center">
        <div className="bg-white rounded-full p-2">
           <Image src="/logo.png" alt="Logo" width={40} height={40} />
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="mt-4 space-x-6 text-lg font-semibold">
        <a href="#" className="hover:text-purple-400">Services</a>
        <a href="#" className="hover:text-purple-400">Work</a>
        <a href="#" className="hover:text-purple-400">Skills</a>
        <a href="#" className="hover:text-purple-400">Experience</a>
        <a href="#" className="hover:text-purple-400">Blog</a>
      </nav>

      {/* Copyright */}
      <p className="mt-4 text-sm text-purple-400">
        © 2024 All Rights Reserved by <span className="text-purple-500">Jayadeep</span>
      </p>

      {/* Scroll to Top Button */}
      <button 
        className="absolute bottom-6 right-6 bg-transparent border-2 border-purple-500 rounded-full p-2 hover:bg-purple-500 transition"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaArrowUp className="text-purple-400" />
      </button>
    </footer>
  );
};

export default Footer;
