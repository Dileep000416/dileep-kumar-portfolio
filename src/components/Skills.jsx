import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiPython,
  SiDjango,
  SiPostgresql,
} from "react-icons/si";

function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 size={55} className="text-orange-500" />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt size={55} className="text-blue-500" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript size={55} className="text-yellow-400" />,
    },
    {
      name: "React",
      icon: <FaReact size={55} className="text-cyan-400" />,
    },
    {
      name: "Python",
      icon: <SiPython size={55} className="text-yellow-500" />,
    },
    {
      name: "Django",
      icon: <SiDjango size={55} className="text-green-500" />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql size={55} className="text-blue-400" />,
    },
    {
      name: "Git",
      icon: <FaGitAlt size={55} className="text-red-500" />,
    },
    {
      name: "GitHub",
      icon: <FaGithub size={55} className="text-white" />,
    },
  ];

  return (
    <section id="skills" className="py-24 px-10">

      <div className="max-w-7xl mx-auto">

        <p className="text-blue-500 uppercase tracking-[0.3em] mb-2">
          Technical Expertise
        </p>

        <h2 className="text-5xl font-bold mb-4">
          Skills
        </h2>

        <p className="text-gray-400 max-w-3xl mb-12">
          Technologies and tools I use to build scalable,
          modern and responsive web applications.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
                bg-gray-900
                border
                border-gray-800
                rounded-2xl
                p-8
                flex
                flex-col
                items-center
                justify-center
                gap-4
                hover:border-blue-500
                hover:-translate-y-2
                hover:shadow-xl
                hover:shadow-blue-500/10
                transition-all
                duration-300
              "
            >

              <div className="transition-all duration-300 hover:scale-110">
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {skill.name}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;