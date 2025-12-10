const Navbar = () => {
  return (
    <section className="w-full bg-white shadow">
      <nav className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* left item */}
          <div className="font-semibold">Hudiccon</div>

          {/* right group */}
          <div className="hiddden md:flex space-x-8 items-center">
            <a href="#" className="text-gray-700 hover:text-blue-700 font-meduim">Events</a>
            <a href="#"  className="text-gray-700 hover:text-blue-700 font-meduim">Department &amp; Staff</a>
            <a href="#"  className="text-gray-700 hover:text-blue-700 font-meduim">Projects</a>
            <a href="#"  className="text-gray-700 hover:text-blue-700 font-meduim">Blogs</a>
            <a href="#"  className="text-gray-700 hover:text-blue-700 font-meduim">Merchandise</a>
            <a href="#"  className="text-gray-700 hover:text-blue-700 font-meduim">Contact us</a>
            
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <button className="bg-blue-600 text-white  font-bold px-4 py-2 rounded">
              Sign in
            </button>
          </div>
        </div>
      </nav>
      

   
  

    </section>
  );
};
export default Navbar;
