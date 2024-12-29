import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

function Layout() {
  // State to control the mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <header>
        <div className="bg-gray-800">
          <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
            {/* Logo */}
            <div className={"text-white text-xl font-bold"}>School Management</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <Link to={'/'} className="text-gray-300 hover:text-white">Home</Link>
              <Link to={'/login'} className="text-gray-300 hover:text-white">Login</Link>
             </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </nav>

          {/* Mobile Menu */}
          {/* <div
            id="mobile-menu"
            className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-gray-700`}
          >
            <Link to={'/'} className="block px-4 py-2 text-gray-300 hover:bg-gray-600 hover:text-white">Home</Link>
            <Link to={'/login'} className="block px-4 py-2 text-gray-300 hover:bg-gray-600 hover:text-white">Login</Link>
            </div> */}
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
