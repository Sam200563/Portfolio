import React, { useState, useEffect } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      // Show button only when scrolled near the bottom (90% of page)
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    "Home",
    "About",
    "Services",
    "Work",
    "Experience",
    "Resume",
    "Contact",
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="font-sans scroll-smooth bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
        {/* Navbar */}
        <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-purple-600">Portfolio</h1>
            <nav className="space-x-4 hidden md:block">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition"
                >
                  {item}
                </button>
              ))}
            </nav>
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
              title="Toggle Dark Mode"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-24 space-y-24 px-6 max-w-7xl mx-auto">
          <section
            id="home"
            className="flex items-center justify-center min-h-[80vh] px-4 py-16 bg-white dark:bg-gray-900 relative overflow-hidden"
          >
            {/* Centered Content */}
            <div className="text-center space-y-6 z-10">
              <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white relative">
                Hi, I'm{" "}
                <span className="text-purple-600 dark:text-purple-400">
                  Sampada Ghadigaonkar
                </span>
              </h1>
              <h2 className="text-2xl text-gray-700 dark:text-gray-300">
                Full Stack Developer
              </h2>
              <p className="max-w-xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                Passionate about building dynamic full-stack applications using
                React, Node, and Tailwind CSS.
              </p>
              <div className="flex justify-center gap-6">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-purple-700 text-white rounded-full hover:bg-purple-800 transition"
                >
                  Contact
                </a>
                <a
                  href="#resume"
                  className="px-6 py-3 border-2 border-purple-700 text-purple-700 dark:border-purple-400 dark:text-purple-400 rounded-full hover:bg-purple-100 dark:hover:bg-purple-700 transition"
                >
                  Resume
                </a>
              </div>
            </div>
            {/* Floating Tech Emojis */}
            <div className="absolute top-8 left-10 text-2xl animate-pulse">
              ⚛️
            </div>{" "}
            {/* React */}
            <div className="absolute top-20 right-12 text-2xl animate-bounce">
              🟨
            </div>{" "}
            {/* JS */}
            <div className="absolute bottom-24 left-20 text-2xl animate-ping">
              🟩
            </div>{" "}
            {/* Node */}
            <div className="absolute bottom-12 right-16 text-2xl animate-spin">
              🌐
            </div>{" "}
            {/* Web */}
            <div className="absolute top-32 left-1/2 text-2xl animate-bounce">
              🎨
            </div>{" "}
            {/* UI */}
            <div className="absolute bottom-10 left-1/3 text-2xl animate-pulse">
              🗄️
            </div>{" "}
            {/* Database */}
            <div className="absolute top-1/3 right-1/3 text-2xl animate-ping">
              📱
            </div>{" "}
            {/* Mobile */}
            <div className="absolute top-16 right-1/4 text-2xl animate-spin">
              💡
            </div>{" "}
            {/* Ideas */}
            <div className="absolute bottom-1/4 right-1/5 text-2xl animate-bounce">
              🐘
            </div>{" "}
            {/* PHP/MySQL */}
          </section>

          {/* About Section */}
          <section id="about" className="pt-16 px-4 bg-white dark:bg-gray-900">
            <h3 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
              About Me
            </h3>

            <div className="max-w-4xl mx-auto text-center text-lg text-gray-700 dark:text-gray-300 space-y-6 leading-relaxed">
              <p>
                I'm a full-stack web developer passionate about building
                real-world applications using modern tools. I enjoy transforming
                ideas into intuitive and scalable solutions, with a focus on
                clean design and user experience.
              </p>
              <p>
                My projects include video platforms, map-based travel planners,
                and feature-rich dashboards. I love working with APIs, managing
                state, and building both frontend and backend systems.
              </p>

              {/* Tech Stack Section */}
              <div className="mt-10">
                <h4 className="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-400">
                  Tools & Technologies I Work With
                </h4>
                <ul className="flex flex-wrap justify-center gap-4 text-sm">
                  {[
                    "React.js",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "JavaScript",
                    "Tailwind CSS",
                    "Redux",
                    "MySQL",
                    "PHP",
                    "Bootsrap",
                    "HERE Maps API",
                    "Leaflet.js",
                    "REST APIs",
                  ].map((tech) => (
                    <li
                      key={tech}
                      className="px-4 py-2 border border-purple-300 dark:border-purple-600 text-purple-700 dark:text-purple-300 rounded-full hover:bg-purple-100 dark:hover:bg-purple-700 transition"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="pt-4">
            <h3 className="text-4xl font-bold text-center mb-10">
              My Services
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
                <div className="text-4xl mb-4">💻</div>
                <h4 className="text-xl font-semibold mb-2">
                  Frontend Development
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Building modern, responsive websites using React, JavaScript,
                  Tailwind CSS, and more.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
                <div className="text-4xl mb-4">🎨</div>
                <h4 className="text-xl font-semibold mb-2">UI/UX Design</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Designing clean user interfaces with focus on usability and
                  user experience.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
                <div className="text-4xl mb-4">⚙️</div>
                <h4 className="text-xl font-semibold mb-2">API Integration</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Integrating REST APIs and backend services to power your
                  applications.
                </p>
              </div>
            </div>
          </section>

          {/* Work Section */}
          <section id="work" className="pt-4">
            <h3 className="text-4xl font-bold text-center mb-10">My Work</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Project 1 */}
              <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg shadow hover:shadow-lg transition">
                <img
                  src="/images/yourtube-clone.png"
                  alt="YouTube Clone"
                  className="rounded mb-4"
                />
                <h4 className="text-xl font-semibold mb-2 text-center">
                  YouTube Clone
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Full-featured YouTube clone with video points, gestures, and
                  custom player built using React and Redux.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span className="font-semibold">Tech Stack:</span> React,
                  Redux, Tailwind CSS, Node.js, MongoDB
                </p>
                <a
                  href="https://github.com/Sam200563/Your-Tube"
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-600 dark:text-purple-400 hover:underline"
                >
                  View on GitHub
                </a>
              </div>

              {/* Project 2 */}
              <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg shadow hover:shadow-lg transition">
                <img
                  src="/images/roadtrip-planner.png"
                  alt="RoadTrip Planner"
                  className="rounded mb-4"
                />
                <h4 className="text-xl font-semibold mb-2 text-center">
                  RoadTrip Planner
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Travel planner with dynamic map, photo upload, calendar view,
                  PDF itinerary and stop-day grouping.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span className="font-semibold">Tech Stack:</span> MERN Stack,
                  Tailwind CSS, HERE Maps API, Multer
                </p>
                <a
                  href="https://github.com/Sam200563/RoadTripMap"
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-600 dark:text-purple-400 hover:underline"
                >
                  View on GitHub
                </a>
              </div>

              {/* Project 3 */}
              <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg shadow hover:shadow-lg transition">
                <img
                  src="/images/incredible-india.png"
                  alt="Incredible India"
                  className="rounded mb-4"
                />
                <h4 className="text-xl font-semibold mb-2 text-center">
                  Incredible India Tours
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Tourism website with optimized route planning and
                  location-based filtering using HERE API.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span className="font-semibold">Tech Stack:</span> HTML, CSS,
                  JS, PHP, HERE API, MySQL
                </p>
                <a
                  href="https://github.com/Sam200563/Incredible-India-Tours"
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-600 dark:text-purple-400 hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="pt-4">
            <h3 className="text-4xl font-bold text-center mb-10">Experience</h3>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow max-w-3xl mx-auto">
              <h4 className="text-2xl font-semibold mb-2">
                Frontend Developer Intern
              </h4>
              <p className="text-purple-600 dark:text-purple-400 font-medium">
                NullClass • Jun 2025 - Aug 2025
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  Built a YouTube clone with gesture support, video points, and
                  custom player.
                </li>
                <li>
                  Developed a dynamic RoadTrip planner using MERN, Tailwind, and
                  HERE API.
                </li>
                <li>
                  Implemented secure authentication, responsive design, and
                  premium upgrade logic.
                </li>
              </ul>
            </div>
            
          </section>

          {/* Resume Section */}
          <section id="resume" className="pt-4">
            <h3 className="text-4xl font-bold text-center mb-10">My Resume</h3>

            <div className="max-w-xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg shadow p-6 text-center">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Download my professional resume to learn more about my
                background and skills.
              </p>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-purple-600 dark:border-purple-400 rounded-lg text-purple-600 dark:text-purple-400 font-medium hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-black transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                  />
                </svg>
                Download Resume
              </a>
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="pt-12 px-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white"
          >
            <h3 className="text-4xl font-bold text-center mb-10">Contact Me</h3>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              {/* Contact Form */}
              <form 
              action="https://formsubmit.co/thesampadag@gmail.com"
              method="POST"
              className="space-y-6">
                <div>
                  <label className="block mb-1 font-semibold" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-semibold" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-semibold" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your Message"
                    rows="4"
                    required
                    name="message"
                    className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
                >
                  Send Message
                </button>
              </form>

              {/* Contact Info + Socials */}
              <div className="flex flex-col justify-center space-y-8">
                {/* Contact Info */}
                <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg shadow-md">
                  <h4 className="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
                    Contact Information
                  </h4>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                    <li className="flex items-center gap-3">
                      <span className="text-purple-600 dark:text-purple-300 text-lg">
                        <i className="fas fa-map-marker-alt"></i>
                      </span>
                      Kalyan East,Thane, Maharashtra, India
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-purple-600 dark:text-purple-300 text-lg">
                        <i className="fas fa-envelope"></i>
                      </span>
                      thesampadag@gmail.com
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-purple-600 dark:text-purple-300 text-lg">
                        <i className="fas fa-phone"></i>
                      </span>
                      +91 7715814090
                    </li>
                  </ul>
                </div>

                {/* Social Icons */}
                <div>
                  <h4 className="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
                    Follow Me
                  </h4>
                  <div className="flex items-center gap-6 text-2xl text-purple-600 dark:text-purple-300">
                    <a
                      href="https://github.com/Sam200563"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-800 dark:hover:text-purple-400 transition"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sampada-ghadigaonkar-79a033320/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-800 dark:hover:text-purple-400 transition"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Footer */}
          <footer className="mt-16 bg-white dark:bg-gray-800 text-center py-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Sampada Ghadigaonkar. Made with
              using React and Tailwind CSS.
            </p>
          </footer>
        </main>
      </div>
      {showTopBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition duration-300"
          title="Back to Top"
        >
          ⬆️
        </button>
      )}
    </div>
  );
}
