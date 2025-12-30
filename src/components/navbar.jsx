import { useState, useRef, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // points to mobile menu + icon area

  const navItems = [
    { label: "About", href: "#who-we-are" },
    { label: "Mission", href: "#mission" },
    { label: "What we do", href: "#what-we-do" },
    { label: "Blogs", href: "#blogs" },
    { label: "Merchandise", href: "#merchandise" },
    { label: "Contact us", href: "#contact" },
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

  // Smooth scroll handler
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu

    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 80; // Height of your fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section>
      <nav className="w-full bg-white shadow scroll-smooth" ref={menuRef}>
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="font-semibold text-xl">Hudiccon</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {/* {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-blue-700 font-medium"
              >
                {item}
              </a>
            ))} */}
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                // closes mobile menu
                className="cursor-pointer hover:text-green-700 transition"
              >
                {item.label}
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
                key={item.label}
                href={item.href}
                className="block text-gray-700 hover:text-blue-700 font-medium"
                onClick={(e) => handleSmoothScroll(e, item.href)}// close on link click
              >
                {item.label}
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
    </section>
  );
};

export default Navbar;
