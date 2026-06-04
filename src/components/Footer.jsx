import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaArrowUp
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-24">

      <div className="max-w-7xl mx-auto px-10 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Left */}

          <div>
            <h2 className="text-3xl font-bold text-blue-500">
              Dileep Kumar
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Python Developer and Full Stack Developer passionate
              about building scalable web applications, solving
              real-world problems, and creating modern digital
              experiences.
            </p>
          </div>

          {/* Center */}

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <a
                href="#about"
                className="hover:text-blue-500 transition"
              >
                About
              </a>

              <a
                href="#skills"
                className="hover:text-blue-500 transition"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="hover:text-blue-500 transition"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="hover:text-blue-500 transition"
              >
                Contact
              </a>

            </div>
          </div>

          {/* Right */}

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Connect
            </h3>

            <div className="space-y-4 text-gray-400">

  <div className="flex items-center gap-3">
    <FaEnvelope />
    <span>
      janupaladileep419@gmail.com
    </span>
  </div>

  <div className="flex items-center gap-3">
    <FaPhone />
    <span>
      6281553087
    </span>
  </div>

  <div className="flex gap-5 mt-5 text-2xl">

                <a
                  href="https://github.com/Dileep000416"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    hover:text-blue-500
                    hover:-translate-y-1
                    transition-all
                  "
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/dileep-janupala"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    hover:text-blue-500
                    hover:-translate-y-1
                    transition-all
                  "
                >
                  <FaLinkedin />
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div
          className="
            border-t
            border-gray-800
            mt-12
            pt-8
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
          "
        >

          <p className="text-gray-500">
            © 2026 Dileep Kumar. All Rights Reserved.
          </p>

          <a
            href="#"
            className="
              mt-4
              md:mt-0
              bg-blue-600
              p-3
              rounded-full
              hover:bg-blue-700
              hover:scale-110
              transition-all
            "
          >
            <FaArrowUp />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;