import { useState } from "react";
import frame17 from "../../assets/frame17.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#8AC9FF] text-sm font-primaryRegular">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="">
          <img className="h-auto w-16" src={frame17} alt="Logo" />
        </div>

        {/* Hamburger Menu (for small screens) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
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
          className={`absolute md:relative z-50 md:p-0 p-3 bg-light_blue w-full md:w-auto top-16 md:top-auto left-0 md:left-auto gap-10 transition-all duration-300 md:flex md:items-center ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div>
            <ul
              className="flex flex-col text-[10px] md:text-[13px] md:flex-row md:space-x-7 tracking-wide p-4 md:p-0"
              style={{
                color: "#fff",
                borderRadius: "10px",
                textShadow: "2px 2px 2px #228EFD",
              }}
            >
              <li>
                <NavLink
                  to="/"
                  className="block py-2 md:py-0 hover:text-[#EE0A73] transition-colors duration-200"
                >
                  HOW TO BUY
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="block py-2 md:py-0 hover:text-[#EE0A73] transition-colors duration-200"
                >
                  ROADMAP
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="block py-2 md:py-0 hover:text-[#EE0A73] transition-colors duration-200"
                >
                  WHITEPAPER
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="block py-2 md:py-0 hover:text-[#EE0A73] transition-colors duration-200"
                >
                  STAKING
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="block py-2 md:py-0 hover:text-[#EE0A73] transition-colors duration-200"
                >
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="block py-2 md:py-0 hover:text-[#EE0A73] transition-colors duration-200"
                >
                  BITCY STORY
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <button
              type="button"
              style={{
                backgroundColor: "#FFA1C6",
                color: "#EE0A73",
                height: "50px",
                width: "140px",
                marginTop: "-10px",
                border: "2px solid #EE0A73",
                borderRadius: "10px",
                textShadow: "2px 2px #ffffff",
              }}
            >
              BUY NOW
            </button>
          </div>
        </div>
        {/* Buy Now Button */}
      </div>
      <div className="bg-">

      </div>
    </nav>
  );
};

export default Navbar;
