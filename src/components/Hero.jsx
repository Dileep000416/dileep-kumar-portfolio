import profile from "../assets/profile.jpg";

import { Link } from "react-scroll";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Hero() {
const typedRef = useRef(null);

useEffect(() => {
const typed = new Typed(typedRef.current, {
strings: [
"Python Developer",
"Django Developer",
"MERN Stack Developer",
"Software Engineer",
"Full Stack Developer",
],
typeSpeed: 60,
backSpeed: 40,
backDelay: 1500,
loop: true,
});


return () => {
  typed.destroy();
};


}, []);

return ( <section className="min-h-screen flex items-center">


  <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-16 items-center">

    {/* Left Side */}

    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >

      <p className="text-blue-500 uppercase tracking-[0.3em] mb-4 font-medium">
        Software Engineer
      </p>

      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
        Hi, I'm
        <span className="text-blue-500"> Dileep</span>
      </h1>

      <div className="mt-8">
        <span
          ref={typedRef}
          className="text-2xl text-blue-400 font-semibold"
        ></span>
      </div>

      <p className="text-gray-400 mt-8 text-lg leading-8 max-w-2xl">
        Python Developer and Full Stack Engineer focused on building
        scalable web applications, REST APIs, and modern software
        solutions using Django, React and PostgreSQL.
      </p>

      <div className="flex gap-4 mt-8 flex-wrap">

        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="
            bg-blue-600
            px-6
            py-3
            rounded-lg
            hover:bg-blue-700
            hover:scale-105
            transition-all
            duration-300
            cursor-pointer
          "
        >
          View Projects
        </Link>

        <a
          href="https://github.com/Dileep000416"
          target="_blank"
          rel="noreferrer"
          className="
            border
            border-gray-600
            px-6
            py-3
            rounded-lg
            hover:border-blue-500
            hover:scale-105
            transition-all
            duration-300
          "
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/dileep-janupala"
          target="_blank"
          rel="noreferrer"
          className="
            border
            border-gray-600
            px-6
            py-3
            rounded-lg
            hover:border-blue-500
            hover:scale-105
            transition-all
            duration-300
          "
        >
          LinkedIn
        </a>

        <a
          href="/DileepKumar_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="
            border
            border-blue-500
            px-6
            py-3
            rounded-lg
            hover:bg-blue-500
            hover:scale-105
            transition-all
            duration-300
          "
        >
          Resume
        </a>

      </div>

      <div className="grid grid-cols-3 gap-4 mt-16">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="
            bg-gray-900
            p-5
            rounded-xl
            text-center
            border
            border-gray-800
            hover:border-blue-500
            hover:bg-blue-500/5
            hover:-translate-y-2
            hover:shadow-xl
            hover:shadow-blue-500/10
            transition-all
            duration-300
          "
        >
          <h3 className="text-3xl font-bold text-blue-500">4+</h3>
          <p className="text-gray-400">Projects</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="
            bg-gray-900
            p-5
            rounded-xl
            text-center
            border
            border-gray-800
            hover:border-blue-500
            hover:bg-blue-500/5
            hover:-translate-y-2
            hover:shadow-xl
            hover:shadow-blue-500/10
            transition-all
            duration-300
          "
        >
          <h3 className="text-3xl font-bold text-blue-500">10+</h3>
          <p className="text-gray-400">Technologies</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="
            bg-gray-900
            p-5
            rounded-xl
            text-center
            border
            border-gray-800
            hover:border-blue-500
            hover:bg-blue-500/5
            hover:-translate-y-2
            hover:shadow-xl
            hover:shadow-blue-500/10
            transition-all
            duration-300
          "
        >
          <h3 className="text-3xl font-bold text-blue-500">3</h3>
          <p className="text-gray-400">Roles</p>
        </motion.div>

      </div>

    </motion.div>

    {/* Right Side */}

    <motion.div
      className="flex justify-center relative"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >

      <div
        className="
          absolute
          w-80
          h-80
          bg-blue-500/20
          blur-3xl
          rounded-full
        "
      ></div>

      <img
        src={profile}
        alt="Dileep Kumar"
        className="
          relative
          w-80
          h-80
          object-cover
          rounded-full
          border-4
          border-blue-500
          shadow-[0_0_50px_rgba(59,130,246,0.5)]
          hover:scale-105
          transition-all
          duration-500
        "
      />

    </motion.div>

  </div>

</section>


);
}

export default Hero;
