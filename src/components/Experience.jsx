function Experience() {

  const experiences = [

    {
      company: "NxtWave",
      role: "Python & Aptitude Instructor",
      duration: "Mar 2025 - Jun 2025",
      points: [
        "Conducted Python training sessions",
        "Mentored students for interviews",
        "Created coding exercises and assessments"
      ]
    },

    {
      company: "Tech Mahindra",
      role: "Associate Customer Support",
      duration: "Oct 2024 - Mar 2025",
      points: [
        "Technical troubleshooting",
        "Backend issue resolution",
        "Database support and maintenance"
      ]
    },

    {
      company: "PearlThoughts",
      role: "Software Developer Intern",
      duration: "Apr 2024 - Jun 2024",
      points: [
        "Built REST APIs",
        "SQL database integration",
        "GitHub collaboration and version control"
      ]
    }

  ];

  return (
    <section
      id="experience"
      className="py-24 px-10"
    >

      <div className="max-w-5xl mx-auto">

        <p className="text-blue-500 uppercase tracking-[0.3em] mb-2">
          Career Journey
        </p>

        <h2 className="text-5xl font-bold mb-16">
          Experience
        </h2>

        <div className="relative">

          {/* Timeline Line */}

          <div
            className="
              absolute
              left-4
              top-0
              bottom-0
              w-1
              bg-blue-500/30
            "
          ></div>

          {experiences.map((exp, index) => (

            <div
              key={index}
              className="
                relative
                pl-16
                pb-14
              "
            >

              {/* Timeline Dot */}

              <div
                className="
                  absolute
                  left-0
                  top-2
                  w-8
                  h-8
                  rounded-full
                  bg-blue-500
                  border-4
                  border-gray-950
                  shadow-lg
                  shadow-blue-500/40
                "
              ></div>

              {/* Card */}

              <div
                className="
                  bg-gray-900
                  border
                  border-gray-800
                  rounded-2xl
                  p-8
                  hover:border-blue-500
                  hover:-translate-y-2
                  hover:bg-blue-500/5
                  hover:shadow-xl
                  hover:shadow-blue-500/10
                  transition-all
                  duration-300
                "
              >

                <span
                  className="
                    text-sm
                    text-blue-400
                    font-medium
                  "
                >
                  {exp.duration}
                </span>

                <h3
                  className="
                    text-2xl
                    font-bold
                    mt-2
                  "
                >
                  {exp.role}
                </h3>

                <p
                  className="
                    text-gray-400
                    mt-2
                    mb-5
                  "
                >
                  {exp.company}
                </p>

                <ul
                  className="
                    space-y-2
                    text-gray-300
                  "
                >

                  {exp.points.map((point) => (

                    <li key={point}>
                      ✓ {point}
                    </li>

                  ))}

                </ul>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;