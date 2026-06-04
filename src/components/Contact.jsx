import { useState } from "react";

import {
FaEnvelope,
FaPhone,
FaLinkedin,
FaGithub
} from "react-icons/fa";

function Contact() {

const [status, setStatus] = useState("");

const handleSubmit = async (e) => {
e.preventDefault();


const form = e.target;

const data = new FormData(form);

const response = await fetch(
  "https://formspree.io/f/mkoaggkk",
  {
    method: "POST",
    body: data,
    headers: {
      Accept: "application/json",
    },
  }
);

if (response.ok) {
  setStatus("SUCCESS");
  form.reset();
} else {
  setStatus("ERROR");
}


};

return ( <section
   id="contact"
   className="py-24 px-10"
 > <div className="max-w-7xl mx-auto">


    <p className="text-blue-500 uppercase tracking-widest mb-2">
      Get In Touch
    </p>

    <h2 className="text-5xl font-bold mb-12">
      Contact Me
    </h2>

    <div className="grid md:grid-cols-2 gap-10">

      {/* Contact Info */}

      <div
        className="
          bg-gray-900
          p-8
          rounded-2xl
          border
          border-gray-800
          hover:border-blue-500
          hover:-translate-y-2
          hover:shadow-lg
          hover:shadow-blue-500/20
          transition-all
          duration-300
        "
      >

        <h3 className="text-2xl font-bold mb-8">
          Let's Connect
        </h3>

        <div className="space-y-6">

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-500 text-xl" />
            <span className="text-gray-300">
              janupaladileep419@gmail.com
            </span>
          </div>

          <div className="flex items-center gap-4">
            <FaPhone className="text-blue-500 text-xl" />
            <span className="text-gray-300">
              6281553087
            </span>
          </div>

          <a
            href="https://www.linkedin.com/in/dileep-janupala"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 text-gray-300 hover:text-blue-500 transition"
          >
            <FaLinkedin className="text-xl" />
            LinkedIn Profile
          </a>

          <a
            href="https://github.com/Dileep000416"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 text-gray-300 hover:text-blue-500 transition"
          >
            <FaGithub className="text-xl" />
            GitHub Repository
          </a>

        </div>

        <div className="mt-10">
          <p className="text-gray-400 leading-relaxed">
            I'm actively seeking opportunities in Python,
            Django, Full Stack Development and Software
            Engineering roles. Feel free to reach out.
          </p>
        </div>

      </div>

      {/* Contact Form */}

      <form
        onSubmit={handleSubmit}
        className="
          bg-gray-900
          p-8
          rounded-2xl
          border
          border-gray-800
          hover:border-blue-500
          hover:shadow-lg
          hover:shadow-blue-500/20
          transition-all
          duration-300
        "
      >

        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="
            w-full
            p-4
            rounded-lg
            bg-gray-800
            border
            border-gray-700
            mb-4
            outline-none
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500/20
            transition-all
          "
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="
            w-full
            p-4
            rounded-lg
            bg-gray-800
            border
            border-gray-700
            mb-4
            outline-none
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500/20
            transition-all
          "
        />

        <textarea
          rows="6"
          name="message"
          required
          placeholder="Your Message"
          className="
            w-full
            p-4
            rounded-lg
            bg-gray-800
            border
            border-gray-700
            mb-4
            outline-none
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500/20
            transition-all
          "
        ></textarea>

        <button
          type="submit"
          className="
            bg-blue-600
            px-8
            py-3
            rounded-lg
            hover:bg-blue-700
            hover:scale-105
            transition-all
            duration-300
          "
        >
          Send Message
        </button>

        {status === "SUCCESS" && (
          <p className="text-green-500 mt-4">
            Message sent successfully!
          </p>
        )}

        {status === "ERROR" && (
          <p className="text-red-500 mt-4">
            Something went wrong. Please try again.
          </p>
        )}

      </form>

    </div>

  </div>
</section>


);
}

export default Contact;
