import { BookOpen } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-[#191d16] to-[#368f28] text-white mt-24 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="footer flex flex-col md:flex-row justify-between gap-10 text-green-50">
          <aside className="max-w-xs">
            <a className="text-3xl font-extrabold text-white flex items-center gap-2 mb-4">
              <BookOpen size={30} />
              Book Vibe
            </a>
            <p className="text-green-50/80 text-base leading-relaxed">
              Discover your next great read with Book Vibe. We bring the best
              books right to your fingertips.
            </p>
          </aside>

          <nav>
            <h6 className="footer-title text-white text-lg opacity-100 mb-2 border-b-2 border-white/50 pb-1">
              Services
            </h6>
            <a className="link link-hover text-green-50 font-medium">
              Home Delivery
            </a>
            <a className="link link-hover text-green-50 font-medium">
              Online Payment
            </a>
            <a className="link link-hover text-green-50 font-medium">
              Book Return
            </a>
          </nav>

          <nav>
            <h6 className="footer-title text-white text-lg opacity-100 mb-2 border-b-2 border-white/50 pb-1">
              About Us
            </h6>
            <a className="link link-hover text-green-50 font-medium">
              Our Story
            </a>
            <a className="link link-hover text-green-50 font-medium">Authors</a>
            <a className="link link-hover text-green-50 font-medium">Contact</a>
          </nav>

          <nav>
            <h6 className="footer-title text-white text-lg opacity-100 mb-2 border-b-2 border-white/50 pb-1">
              Legal
            </h6>
            <a className="link link-hover text-green-50 font-medium">
              Terms of use
            </a>
            <a className="link link-hover text-green-50 font-medium">
              Privacy policy
            </a>
          </nav>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 text-center text-green-100/70 text-sm font-medium">
          <p>Copyright © 2026 - All rights reserved by Mohammad Shihab</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
