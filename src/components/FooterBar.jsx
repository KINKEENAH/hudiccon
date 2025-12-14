import React from "react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const supportItems = [ "CONTACT US", "FAQS", "MEET OUR EXECUTIVES"];
  const resourceItems = ["Blogs", "Events", "Merchandise"];
  const contactItems = [
    "Email:",
    " info@theemail.com",
    "Location:",
    "Kwahu south ",
  ];

  return (
    <footer className="bg-[#050816] text-white py-12">
      {/* TOP: Newsletter */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold">
              Subscribe to our Newsletter
            </h1>
            <p className="mt-2 text-sm text-gray-300">
              Stay updated with our latest news, events, and resources.
            </p>
          </div>

          <div className="flex w-full max-w-lg">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 rounded-l-md border border-gray-600 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-gray-400"
            />
            <button className="rounded-r-md bg-blue-600 px-5 py-2 text-sm font-semibold">
              Subscribe
            </button>
          </div>
        </div>

        {/* Divider line */}
        <div className="mt-8 h-px w-full bg-gray-800" />

        {/* BOTTOM: columns */}
        <div className="mt-8 grid gap-10 md:grid-cols-4">
          
          <div>
            <div className="text-xl font-semibold">Hudiccon</div>
            <p className="mt-3 text-sm text-gray-300">
              Empowering students to explore, learn, and innovate in the world
              of computer science.
            </p>
            
          </div>

          {/* SUPPORT column */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-gray-400">
              SUPPORT
            </h3>
            <div className="mt-3 space-y-2 text-sm">
              {supportItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-gray-300 hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* RESOURCES column */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-gray-400">
              RESOURCES
            </h3>
            <div className="mt-3 space-y-2 text-sm">
              {resourceItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-gray-300 hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT column */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-gray-400">
              CONTACT
            </h3>
            <div className="mt-3 space-y-2 text-sm text-gray-300">
              {contactItems.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 border-t border-gray-800 pt-4 text-xs text-gray-500">
          © 2025 Hudiccon. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
