import { useState, useRef, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // points to mobile menu + icon area
  

  const navItems = [
    "Events",
    "Department & Staff",
    "Projects",
    "Blogs",
    "Merchandise",
    "Contact us",
  ];
  
  

  
  
  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <section>
      <nav className="w-full bg-white shadow" ref={menuRef}>
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="font-semibold text-xl">Hudiccon</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-blue-700 font-medium"
              >
                {item}
              </a>
            ))}

            <button className="bg-blue-600 text-white px-4 py-2 rounded font-bold">
              Sign in
            </button>
          </div>

          {/* Hamburger Icon - Mobile only */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg px-6 pb-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="block text-gray-700 hover:text-blue-700 font-medium"
                onClick={() => setIsOpen(false)} // close on link click
              >
                {item}
              </a>
            ))}

            <button
              className="w-full bg-blue-600 text-white px-4 py-2 rounded font-bold mt-2"
              onClick={() => setIsOpen(false)} // also close on sign-in click
            >
              Sign in
            </button>
          </div>
        )}
      </nav>

      {/* <footer>
        <div className="flex flex-row">
        <div>
          <h1>Subscribe to our Newsletter</h1>
          <h2>Stay updated with our latest news, events, and resources</h2>
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="border px-2 py-1 rounded"
          />
        </div>
        <div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded font-bold">
            Subscribe
          </button>
        </div>
        </div>
        <div className="border-x-1"></div>
        <div className="flex flex-row">
          <div>
            <div className="font-semibold text-xl">Hudiccon</div>
            <p>empowering students to explore,<br/>learn and innovate in the world of  <br/>computer science. </p>
          </div>
          <div className="flex-col">
            {supportItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 flex "
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex-col">
            {resourceItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 flex "
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex-col">
            {contactItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 flex "
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer> */}


    </section>
  );
};

export default Navbar;
