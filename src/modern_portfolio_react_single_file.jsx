import React from "react";
import { motion } from "framer-motion";

// Reusable Icon
const Icon = ({ path }) => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-200 font-sans">
      {/* HEADER */}
      <header className="p-6 bg-black/40 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
            Rizwan.dev
          </h1>
          <ul className="flex gap-8 font-medium text-gray-300">
            {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
              <li key={item} className="hover:text-teal-300 cursor-pointer transition">{item}</li>
            ))}
          </ul>
        </nav>
      </header>

      {/* HERO */}
      <section className="px-6 py-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-6xl font-extrabold leading-tight mb-4">
            <span className="bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent">
              Full‑Stack Engineer
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-md">
            I architect scalable systems with enterprise‑grade performance and modern UI/UX standards.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="px-7 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-teal-400 text-black font-semibold shadow-xl hover:opacity-90 transition">
              Hire Me
            </button>
            <button className="px-7 py-3 rounded-xl border border-teal-400 text-teal-300 hover:bg-teal-400/10 transition font-semibold">
              Download CV
            </button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
          <div className="w-72 h-72 rounded-3xl bg-gradient-to-br from-blue-500/30 to-teal-400/30 border border-white/10 backdrop-blur-md shadow-2xl mx-auto"></div>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section className="px-6 py-20">
        <h3 className="text-4xl font-bold mb-14 text-center bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent">
          Tech Stack
        </h3>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {["Java", "Spring Boot", "React.js", "Docker", "Kubernetes", "PostgreSQL", "AWS", "CI/CD"].map(
            (skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.07 }}
                className="p-6 bg-white/5 backdrop-blur-md rounded-xl shadow-lg text-center font-semibold border border-white/10 hover:border-teal-300/40 transition"
              >
                {skill}
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-6 py-20 bg-black/40 backdrop-blur-md">
        <h3 className="text-4xl font-bold mb-14 text-center bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
          Featured Projects
        </h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[1, 2, 3].map((p) => (
            <motion.div
              key={p}
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-white/5 backdrop-blur-xl shadow-xl rounded-2xl border border-white/10 hover:border-teal-300/40 transition"
            >
              <div className="h-44 bg-gradient-to-br from-gray-700 to-black rounded-xl shadow-md mb-5"></div>
              <h4 className="text-xl font-semibold mb-2">Project {p}</h4>
              <p className="text-gray-400 mb-5 text-sm">
                High‑performance full‑stack application with microservice‑ready architecture.
              </p>
              <button className="text-teal-300 font-medium hover:underline">View Details →</button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 py-20">
        <h3 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent">
          Contact
        </h3>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-gray-400 mb-8 text-lg">Let’s build something impactful.</p>
          <form className="grid gap-5">
            <input className="p-3 border border-white/20 bg-white/5 rounded-xl focus:border-teal-300 transition" placeholder="Your Name" />
            <input className="p-3 border border-white/20 bg-white/5 rounded-xl focus:border-teal-300 transition" placeholder="Email" />
            <textarea className="p-3 border border-white/20 bg-white/5 rounded-xl focus:border-teal-300 transition" placeholder="Message" rows="4" />
            <button className="px-7 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-black rounded-xl font-semibold shadow-xl hover:opacity-90 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="p-8 bg-black/60 backdrop-blur-xl border-t border-white/10 text-center text-gray-400">
        <div className="flex justify-center gap-8 mb-4">
          <Icon path="M16 8a6 6 0 11-12 0 6 6 0 0112 0z" />
          <Icon path="M4 4l16 16M20 4L4 20" />
          <Icon path="M12 2l4 20-4-4-4 4 4-20z" />
        </div>
        <p>© 2025 Rizwan • Premium Portfolio</p>
      </footer>
    </div>
  );
}
