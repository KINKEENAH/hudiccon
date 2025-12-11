// const Navbar = () => {
//   return (
//     <section className="w-full bg-white shadow">
//       <nav className="max-w-6xl mx-auto px-6">
//         <div className="flex items-center justify-between h-20">
//           {/* left item */}
//           <div className="font-semibold">Hudiccon</div>

//           {/* right group */}
//           <div className="hiddden md:flex space-x-8 items-center">
//             <a href="#" className="text-gray-700 hover:text-blue-700 font-meduim">Events</a>
//             <a href="#"  className="text-gray-700 hover:text-blue-700 font-meduim">Department &amp; Staff</a>
//             <a href="#"  className="text-gray-700 hover:text-blue-700 font-meduim">Projects</a>
//             <a href="#"  className="text-gray-700 hover:text-blue-700 font-meduim">Blogs</a>
//             <a href="#"  className="text-gray-700 hover:text-blue-700 font-meduim">Merchandise</a>
//             <a href="#"  className="text-gray-700 hover:text-blue-700 font-meduim">Contact us</a>
            
//           </div>
//           <div className="hidden md:flex space-x-8 items-center">
//             <button className="bg-blue-600 text-white  font-bold px-4 py-2 rounded">
//               Sign in
//             </button>
//           </div>
//         </div>
//       </nav>
      

   
  

//     </section>
//   );
// };
// export default Navbar;

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Events",
    "Department & Staff",
    "Projects",
    "Blogs",
    "Merchandise",
    "Contact us",
  ];

  return (
    <nav className="w-full bg-white shadow">
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
        <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
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
            >
              {item}
            </a>
          ))}

          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded font-bold mt-2">
            Sign in
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
