"use client";

import { FaMapMarkerAlt, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] text-white px-24 py-12 flex flex-col md:flex-row gap-12 md:gap-6 justify-between ">
      {/* Brand Section */}
      <div className="footer-section">
        <div className="footer-header">TouchWebsite</div>
        <div className="flex flex-col gap-6">
          <p className="footer-text">
            What a bertiful ai I love it.
          </p>
          <p className="footer-text text-sm text-gray-600">© 2025 Touch. No rights reserved. Use whatever you want</p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="footer-section">
        <div className="footer-header">Get in Touch</div>
        <div className="flex flex-col gap-4">
          <div className="footer-contact">
            <FaMapMarkerAlt className="footer-icon" />
            <span className="footer-text">Chulalongkorn University</span>
          </div>
          <div className="footer-contact">
            <FaGithub className="footer-icon" />
            <span className="footer-text">github.com/touch</span>
          </div>
          <div className="footer-contact">
            <FaInstagram className="footer-icon" />
            <span className="footer-text">@touch_cri</span>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="footer-section">
        <div className="footer-header">Quick Links</div>
        <ul className="flex flex-col gap-3">
          {/* {["Home", "About", "Services", "Projects", "Contact"].map((link) => ( */}
          {["Home", "Projects", "Contact"].map((link) => (

            <li key={link} className="footer-link">
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Subscribe */}
      {/* <div className="footer-section">
        <div className="footer-header">Subscribe</div>
        <p className="footer-text mb-2">
          Stay up to date with our latest news and projects.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-3"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-400 text-sm"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-md text-sm font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 text-black hover:opacity-90 transition"
          >
            Subscribe
          </button>
        </form>
      </div> */}
    </footer>
  );
}
