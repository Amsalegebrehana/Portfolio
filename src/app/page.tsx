"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, ExternalLink, Code, User, Briefcase, Calendar, MapPin } from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="bg-white text-black min-h-screen">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 px-6 py-4"
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.h1
            className="text-xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            Amsale Gebrehana
          </motion.h1>
          <div className="hidden md:flex space-x-8">
            {["About", "Experience", "Projects", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ y, opacity }}
      >
        <div className="text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <div className="w-48 h-48 mx-auto rounded-full bg-gray-200 flex items-center justify-center">
              <User size={80} className="text-gray-400" />
              <span className="text-sm text-gray-500 absolute mt-24">Your Photo Here</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hi, I&apos;m{" "}
            <span className="text-blue-500">Amsale</span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 mb-8"
          >
            Full-Stack Software Engineer
          </motion.p>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto"
          >
            Passionate about creating innovative solutions and building scalable applications
            with modern technologies. I love turning complex problems into simple, beautiful designs.
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              href="https://github.com/Amsalegebrehana"
              target="_blank"
              className="p-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.300 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/amsalegebrehana"
              target="_blank"
              className="p-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.a>
            <motion.a
              href="mailto:amsale@example.com"
              className="p-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 px-6 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Software Engineer with Passion</h3>
              <p className="text-gray-700 mb-6">
                I am a dedicated software engineer with expertise in full-stack development.
                I enjoy creating efficient, scalable solutions and staying up-to-date with the latest technologies.
              </p>
              <p className="text-gray-700 mb-6">
                My experience spans across various technologies including React, Node.js, Python,
                and cloud platforms. I believe in writing clean, maintainable code and following best practices.
              </p>
              <div className="flex flex-wrap gap-3">
                {["JavaScript", "TypeScript", "React", "Node.js", "Python", "AWS", "Docker", "MongoDB"].map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Code className="text-blue-500 mr-3" size={20} />
                  <span>3+ Years of Experience</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="text-blue-500 mr-3" size={20} />
                  <span>Full-Stack Developer</span>
                </div>
                <div className="flex items-center">
                  <User className="text-blue-500 mr-3" size={20} />
                  <span>Software Engineeringg graduate</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Work Experience Section */}
      <motion.section
        id="experience"
        className="py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Work Experience
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                title: "Senior Software Engineer",
                company: "Tech Solutions Inc.",
                location: "San Francisco, CA",
                period: "2022 - Present",
                description: "Lead development of scalable web applications using React, Node.js, and AWS. Mentor junior developers and collaborate with cross-functional teams to deliver high-quality software solutions.",
                achievements: [
                  "Improved application performance by 40% through code optimization",
                  "Led a team of 5 developers on a major product launch",
                  "Implemented CI/CD pipelines reducing deployment time by 60%"
                ]
              },
              {
                title: "Full-Stack Developer",
                company: "Digital Innovations LLC",
                location: "Remote",
                period: "2020 - 2022",
                description: "Developed and maintained web applications using modern JavaScript frameworks. Collaborated with designers and product managers to implement user-friendly interfaces.",
                achievements: [
                  "Built responsive web applications serving 10k+ users",
                  "Integrated third-party APIs and payment systems",
                  "Reduced bug reports by 50% through comprehensive testing"
                ]
              },
              {
                title: "Junior Software Developer",
                company: "StartUp Hub",
                location: "New York, NY",
                period: "2019 - 2020",
                description: "Assisted in developing mobile and web applications. Gained experience in agile development methodologies and version control systems.",
                achievements: [
                  "Contributed to 3 successful product launches",
                  "Learned and applied best practices in software development",
                  "Collaborated effectively in a fast-paced startup environment"
                ]
              }
            ].map((job, index) => (
              <motion.div
                key={job.title}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">{job.title}</h3>
                    <h4 className="text-lg font-medium text-blue-600 mb-2">{job.company}</h4>
                  </div>
                  <div className="flex flex-col md:items-end text-gray-600">
                    <div className="flex items-center mb-1">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{job.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{job.description}</p>

                <div>
                  <h5 className="font-semibold text-black mb-2">Key Achievements:</h5>
                  <ul className="space-y-1">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-700 flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
                technologies: ["React", "Node.js", "MongoDB", "Stripe"]
              },
              {
                title: "Task Management App",
                description: "Collaborative task management application with real-time updates",
                technologies: ["Next.js", "Socket.io", "PostgreSQL", "Docker"]
              },
              {
                title: "Weather Dashboard",
                description: "Real-time weather dashboard with data visualization",
                technologies: ["React", "D3.js", "OpenWeather API", "TypeScript"]
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    href="#"
                    className="flex items-center text-blue-500 hover:text-blue-700"
                    whileHover={{ scale: 1.05 }}
                  >
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="mr-1">
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.300 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </motion.a>
                  <motion.a
                    href="#"
                    className="flex items-center text-blue-500 hover:text-blue-700"
                    whileHover={{ scale: 1.05 }}
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 px-6 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Contact Me
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 mb-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let&apos;s work together on your next project!
          </motion.p>

          <motion.div
            className="flex justify-center space-x-8"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="mailto:amsale@example.com"
              className="flex items-center bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="mr-2" size={20} />
              Email Me
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/amsalegebrehana"
              target="_blank"
              className="flex items-center bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="mr-2">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Amsale Gebrehana. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
