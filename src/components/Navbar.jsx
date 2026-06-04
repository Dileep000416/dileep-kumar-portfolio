import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className="
        sticky
        top-0
        z-50
        backdrop-blur-xl
        bg-[#020617]/80
        border-b
        border-gray-800
        shadow-lg
        shadow-black/20
      "
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <h1
            className="
              text-2xl
              md:text-3xl
              font-bold
              tracking-wide
            "
          >
            <span className="text-white">
              Dileep
            </span>

            <span className="text-blue-500">
              .dev
            </span>
          </h1>

          {/* Desktop Menu */}

          <ul
            className="
              hidden
              md:flex
              items-center
              gap-8
              text-sm
              uppercase
              tracking-wider
              font-medium
            "
          >
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-500 transition-all duration-300"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-500 transition-all duration-300"
              >
                Skills
              </Link>
            </li>

            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-500 transition-all duration-300"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to="experience"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-500 transition-all duration-300"
              >
                Experience
              </Link>
            </li>

            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-500 transition-all duration-300"
              >
                Contact
              </Link>
            </li>

            <li>
              <a
                href="/DileepKumar_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="
                  bg-blue-600
                  px-5
                  py-2.5
                  rounded-lg
                  hover:bg-blue-700
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Resume
              </a>
            </li>
          </ul>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              md:hidden
              text-2xl
              text-white
            "
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Menu */}

        {menuOpen && (
          <div
            className="
              md:hidden
              py-6
              border-t
              border-gray-800
            "
          >
            <div className="flex flex-col gap-6 text-center">

              <Link
                to="about"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="cursor-pointer hover:text-blue-500"
              >
                About
              </Link>

              <Link
                to="skills"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="cursor-pointer hover:text-blue-500"
              >
                Skills
              </Link>

              <Link
                to="projects"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="cursor-pointer hover:text-blue-500"
              >
                Projects
              </Link>

              <Link
                to="experience"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="cursor-pointer hover:text-blue-500"
              >
                Experience
              </Link>

              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="cursor-pointer hover:text-blue-500"
              >
                Contact
              </Link>

              <a
                href="/DileepKumar_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="
                  bg-blue-600
                  px-5
                  py-3
                  rounded-lg
                  mx-auto
                  w-fit
                "
              >
                Resume
              </a>

            </div>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;