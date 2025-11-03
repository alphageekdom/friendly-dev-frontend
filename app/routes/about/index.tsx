const AboutPage = () => {
  return (
    <div className="mx-auto max-w-5xl bg-gray-900 px-6 py-16">
      {/* Intro */}
      <div className="mb-12 flex flex-col items-center gap-10 md:flex-row md:items-start">
        <img
          src="/images/profile.jpg"
          alt="profile"
          className="h-40 w-40 rounded-full border-4 border-blue-500 object-cover shadow-md"
        />
        <div>
          <h1 className="mb-2 text-3xl font-bold text-white">
            Hey, I'm Luis 💻
          </h1>
          <p className="text-lg text-gray-300">
            I'm a passionate web developer and content creator dedicated to
            crafting user-friendly digital experiences and empowering others to
            become confident, modern developers.
          </p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-white">My Mission</h2>
        <p className="leading-relaxed text-gray-300">
          After transforming my own life, I've made it my mission to share my
          insights with others—not just on coding, but on building a fulfilling
          life you're proud of. Through engaging tutorials, comprehensive
          courses, and practical real-world projects, I strive to make
          development accessible, enjoyable, and something you eagerly
          anticipate each day.
        </p>
      </div>

      {/* Tech Stack */}
      <h2 className="mb-4 text-2xl font-semibold text-white">🚀 Tech I Use</h2>
      <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
        {[
          'React',
          'Next.js',
          'Vue',
          'Tailwind CSS',
          'Node.js',
          'Laravel',
          'Prisma',
          'MongoDB',
          'PostgreSQL',
          'Appwrite',
          'Docker',
        ].map((tech) => (
          <li key={tech} className="rounded-md bg-gray-700 px-3 py-1">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;
