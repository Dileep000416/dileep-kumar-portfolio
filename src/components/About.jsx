function About() {
  return (
    <section
      id="about"
      className="py-24 px-10"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-blue-500 uppercase tracking-[0.3em] mb-2">
          Introduction
        </p>

        <h2 className="text-5xl font-bold mb-10">
          Overview
        </h2>

        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-10 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">

          <p className="text-gray-300 text-lg leading-8">
            Python Developer and Instructor with strong expertise in
            Python, Django, PostgreSQL, REST API development and
            problem-solving. Experienced in backend development,
            full-stack web applications, technical mentoring and
            building scalable software solutions.

            <br />
            <br />

            Familiar with Machine Learning fundamentals, LLM concepts,
            RAG workflows, GitHub collaboration and modern software
            development practices.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {/* Education */}

          <div
            className="
              bg-gray-900
              border
              border-gray-800
              rounded-2xl
              p-8
              hover:border-blue-500
              hover:-translate-y-2
              hover:shadow-xl
              hover:shadow-blue-500/10
              transition-all
              duration-300
            "
          >
            <h3 className="text-2xl font-bold text-blue-500 mb-4">
              Education
            </h3>

            <p className="font-semibold">
              B.Tech - Civil Engineering
            </p>

            <p className="text-gray-400 mt-2">
              CMR Technical Campus,
              Hyderabad
            </p>

            <p className="text-gray-500 mt-2">
              2018 - 2022
            </p>
          </div>

          {/* Core Skills */}

          <div
            className="
              bg-gray-900
              border
              border-gray-800
              rounded-2xl
              p-8
              hover:border-blue-500
              hover:-translate-y-2
              hover:shadow-xl
              hover:shadow-blue-500/10
              transition-all
              duration-300
            "
          >
            <h3 className="text-2xl font-bold text-blue-500 mb-4">
              Core Skills
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>✓ Python Development</li>
              <li>✓ Django Framework</li>
              <li>✓ REST APIs</li>
              <li>✓ PostgreSQL</li>
              <li>✓ React Development</li>
            </ul>
          </div>

          {/* Specialization */}

          <div
            className="
              bg-gray-900
              border
              border-gray-800
              rounded-2xl
              p-8
              hover:border-blue-500
              hover:-translate-y-2
              hover:shadow-xl
              hover:shadow-blue-500/10
              transition-all
              duration-300
            "
          >
            <h3 className="text-2xl font-bold text-blue-500 mb-4">
              Specialization
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>✓ Full Stack Development</li>
              <li>✓ Backend Development</li>
              <li>✓ Problem Solving</li>
              <li>✓ Technical Training</li>
              <li>✓ Database Design</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;