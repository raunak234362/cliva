import { useState } from "react";
import frame17 from "../../assets/frame17.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#8AC9FF] text-sm font-primaryRegular shadow-md w-full top-0 z-50 overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        {/* Logo */}
        <div>
          <img className="h-auto w-16" src={frame17} alt="Logo" />
        </div>

        {/* Hamburger Menu (for small screens) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#EE0A73] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`absolute md:relative bg-[#8AC9FF] z-50 w-full md:w-auto left-0 top-16 md:top-auto md:left-auto md:flex items-center md:space-x-6 transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row text-center md:space-x-6">
            {[
              "HOW TO BUY",
              "ROADMAP",
              "WHITEPAPER",
              "STAKING",
              "FAQ",
              "BITCY STORY",
            ].map((link, index) => (
              <li key={index} className="py-2 md:py-0">
                <NavLink
                  to="/"
                  className="block text-[12px] md:text-[6px] lg:text-[10px] xl:text-[14px] text-white hover:text-[#EE0A73] transition-colors duration-200 tracking-wide"
                  style={{
                    textShadow: "2px 2px 2px #228EFD",
                  }}
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-4 md:mt-0 md:ml-4 ">
            <div className="flex justify-center ">
              <button
                type="button"
                className="text-[12px] md:text-[14px] lg:text-[16px] text-[#EE0A73] bg-[#FFA1C6] hover:bg-[#EE0A73] hover:text-[#FFA1C6] px-4 py-2 rounded-lg border-2 border-[#EE0A73] transition-colors duration-200"
                style={{
                  textShadow: "2px 2px #fff",
                }}
              >
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
