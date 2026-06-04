import careerconnect from "../assets/careerconnect.jpg";
import realestatehub from "../assets/realestatehub.jpg";

function Projects() {
  const projects = [
    {
      title: "CareerConnect",

      image: careerconnect,

      description:
        "CareerConnect is a full-stack recruitment platform built with Django and PostgreSQL that streamlines the hiring process for job seekers and recruiters. The system supports authentication, job management, application tracking, recruiter dashboards, and candidate management.",

      features: [
        "Job Application Tracking",
        "Recruiter Dashboard",
        "Role-Based Authentication",
        "Profile Management",
      ],

      tech: [
        "Django",
        "Python",
        "PostgreSQL",
        "HTML",
        "CSS",
        "JavaScript",
      ],

      github:
        "https://github.com/Dileep000416/careerconnect-django",

      live:
        "https://web-production-ecb88.up.railway.app/",
    },

    {
      title: "Real Estate Hub",

      image: realestatehub,

      description:
        "Real Estate Hub is a modern property listing platform that enables users to browse, search, and manage real estate properties through an intuitive and responsive interface. It includes authentication, property management, search filters, and detailed property pages.",

      features: [
        "Property Listings",
        "Advanced Search Filters",
        "Property Detail Pages",
        "User Authentication",
      ],

      tech: [
        "Django",
        "Python",
        "PostgreSQL",
        "HTML",
        "CSS",
        "JavaScript",
      ],

      github:
        "https://github.com/Dileep000416/real-estate-platform",

      live:
        "https://real-estate-platform-87jq.onrender.com",
    },
  ];

  return (
    <section id="projects" className="py-24 px-10">

      <div className="max-w-7xl mx-auto">

        <p className="text-blue-500 uppercase tracking-widest mb-2">
          My Work
        </p>

        <h2 className="text-5xl font-bold mb-4">
          Featured Projects
        </h2>

        <p className="text-gray-400 max-w-3xl mb-12">
          A collection of full-stack web applications showcasing my
          expertise in Python, Django, PostgreSQL, REST APIs, frontend
          development, deployment, and software engineering practices.
        </p>

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project) => (

            <div
              key={project.title}
              className="
                bg-gray-900
                border
                border-gray-800
                rounded-2xl
                overflow-hidden
                hover:border-blue-500
                hover:-translate-y-2
                hover:shadow-xl
                hover:shadow-blue-500/10
                transition-all
                duration-300
              "
            >

              {/* Project Image */}

              <div className="relative">

               <div className="overflow-hidden">

  <img
    src={project.image}
    alt={project.title}
    className="
      w-full
      h-64
      object-cover
      transition-all
      duration-500
      hover:scale-105
    "
  />

</div>

                <span
                  className="
                    absolute
                    top-4
                    right-4
                    bg-green-600
                    text-white
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-semibold
                  "
                >
                  LIVE
                </span>

              </div>

              {/* Content */}

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">

                  <h4 className="font-semibold mb-3 text-blue-400">
                    Key Features
                  </h4>

                  <ul className="space-y-2">

                    {project.features.map((feature) => (

                      <li
                        key={feature}
                        className="text-gray-300"
                      >
                        ✓ {feature}
                      </li>

                    ))}

                  </ul>

                </div>

                <div className="flex flex-wrap gap-2 mb-6">

                  {project.tech.map((item) => (

                    <span
                      key={item}
                      className="
                        bg-blue-600/20
                        text-blue-400
                        px-3
                        py-1
                        rounded-full
                        text-sm
                      "
                    >
                      {item}
                    </span>

                  ))}

                </div>

                <div className="flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      bg-gray-800
                      px-5
                      py-3
                      rounded-lg
                      hover:bg-gray-700
                      transition
                    "
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      bg-blue-600
                      px-5
                      py-3
                      rounded-lg
                      hover:bg-blue-700
                      transition
                    "
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;