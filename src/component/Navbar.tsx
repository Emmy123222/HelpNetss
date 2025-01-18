import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white ">
      <div className="px-4 max-sm:px-2">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <h1 className="font-medium text-[24px] max-sm:text-[20px]">
              HelpNet
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="flex max-sm:hidden space-x-8">
            <p className=" px-3 py-2 rounded-md  font-medium text-[24px] text-white">
              About Us
            </p>
            <p className=" px-3 py-2 rounded-md  font-medium text-[24px] text-white">
              Teams
            </p>
          </div>

          {/* Hamburger Menu */}
          <div className="hidden max-sm:flex">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none bg-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="max-sm:block bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-1">
            <div className="block text-black px-3 py-2 rounded-md text-base font-medium">
              About Us
            </div>
            <div className="block text-black px-3 py-2 rounded-md text-base font-medium">
              Teams
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
