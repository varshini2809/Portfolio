import React, { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaBars } from "react-icons/fa";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";
import { FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";

import {
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaPython,
} from "react-icons/fa";

import { 
  GrMysql
 } from "react-icons/gr";

import {
  SiTailwindcss,
  SiC,
  SiCplusplus,
  SiNumpy,
  SiTensorflow 
 } from "react-icons/si";

const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = ["home", "about", "skills","education","experience","projects"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md text-white z-50 shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <img
  src="src/assets/vg2.jpg"
  alt="Logo"
  className="w-15 h-15 rounded-full object-cover"
/>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="relative text-white hover:text-teal-400 transition duration-300 group"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button className="md:hidden text-2xl text-teal-400" onClick={toggleMenu}>
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-black/80 backdrop-blur-md py-4 space-y-4 text-lg font-medium transition-all duration-300">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="text-white hover:text-teal-400 transition duration-200"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

const Section = ({ id, title, children }) => (
  <section id={id} className="min-h-screen py-24 px-6 bg-black text-white scroll-mt-20">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        className="text-4xl font-bold mb-6 text-teal-400"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      {children}
    </div>
    
  </section>
);

const About = () => (
  <section className="bg-[#0f172a] text-white px-6 md:px-20 py-20 min-h-screen">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h1 className="text-4xl font-bold">
          About <span className="text-blue-400">Me</span>
        </h1>
        <div className="w-20 h-1 bg-blue-400 mx-auto mt-2 rounded"></div>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-20">
        {/* Left - Avatar with Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-shrink-0 w-[320px] h-[420px] border-4 rounded-xl border-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center bg-[#1e293b] shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-500"
        >
          <img
            src="src/assets/varshini.jpg"
            alt="Jayanth J R"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl text-center md:text-left"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">
            Passionate Software Engineer
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base">
            I'm a dedicated Software Engineer with a passion for creating innovative products and digital solutions. With expertise in modern technologies, I bring ideas to life through clean, efficient code.
          </p>
          <p className="text-gray-300 mb-8 leading-relaxed text-sm md:text-base">
            My journey in software development has been driven by curiosity and a commitment to continuous learning. I enjoy tackling complex problems and collaborating with teams to deliver exceptional user experiences.
          </p>

          {/* Info Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-300 text-sm">
            <motion.div whileHover={{ scale: 1.05 }} className="transition duration-300">
              <p className="font-semibold text-blue-400">Location</p>
              <p>Chennai, India</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="transition duration-300">
              <p className="font-semibold text-blue-400">Experience</p>
              <p>1+ Year</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="transition duration-300">
              <p className="font-semibold text-blue-400">Email</p>
              <p>varshinig2809@gmail.com</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="transition duration-300">
              <p className="font-semibold text-blue-400">Phone</p>
              <p>+91 6382551208</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
);

const experiences = [
  {
    title: "R&D Trainee Engineer",
    company: "Valeo",
    duration: "Jan 2025 - Present · 6 mos",
    location: "Chennai, Tamil Nadu, India",
    type: "On-site",
    description: "Currently working as R&D Trainee Engineer at Valeo focusing on automotive innovation and research-based projects.",
  },
  {
    title: "Web Developer",
    company: "CODSOFT",
    duration: "Oct 2023 - Nov 2023 · 2 mos",
    location: "Remote",
    type: "Internship",
    description: "Built responsive web applications as a Web Developer Intern at CODSOFT. Focused on front-end development and UI implementation.",
  },
];

const Experience = () => (
<Section id="experience">
  <motion.div
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-center mb-16 relative z-10"
  >
    <h1 className="text-4xl font-extrabold tracking-wide">
      Professional <span className="text-blue-400">Runway</span>
    </h1>
    <div className="w-24 h-1 bg-blue-400 mx-auto mt-4 rounded-full" />
  </motion.div>

  <div className="relative w-full py-10">
    <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500 transform -translate-x-1/2 z-0 rounded-full" />

    <div className="flex flex-col gap-16 relative z-10">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`flex ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          } w-full`}
        >
          <motion.div
            className="w-full md:w-[42%] p-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg border border-white/10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-yellow-500/90 text-black">
                {exp.duration}
              </span>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-indigo-600/80 text-white">
                {exp.type}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white">{exp.title}</h3>
            <p className="text-pink-400 font-semibold">{exp.company}</p>

            <div className="flex items-center gap-2 text-sm text-gray-300 mt-1">
              <FaMapMarkerAlt />
              <span>{exp.location}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-300 mt-1">
              <FaBriefcase />
              <span>{exp.type}</span>
            </div>

            <p className="mt-4 text-sm text-gray-100 leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        </div>
      ))}
    </div>
  </div>
</Section>

);

const educationData = [
  {
    icon: <FaUniversity className="text-4xl text-blue-300 drop-shadow-lg" />,
    title: "Kongu Engineering College",
    location: "Perundurai",
    degree: "B.E - Computer Science and Engineering (Hons)",
    score: "CGPA: 8.64",
    badge: "Undergraduate",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FaGraduationCap className="text-4xl text-purple-300 drop-shadow-lg" />,
    title: "Anitha Kumaran School",
    location: "Thandupathu",
    degree: "Higher Secondary Education",
    score: "Score: 94.89%",
    badge: "HSC",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <FaSchool className="text-4xl text-pink-300 drop-shadow-lg" />,
    title: "Anitha Kumaran School",
    location: "Thandupathu",
    degree: "Secondary School Education",
    score: "Score: 92.6%",
    badge: "SSLC",
    color: "from-pink-500 to-rose-500",
  },
];

const Education = () => (
   <section
    id="experience"
     className="relative z-0 py-24 px-4 md:px-8 bg-gradient-to-br from-[#050517] via-[#0d0b26] to-[#0a0a1a] text-white overflow-hidden"

  >
 {/* Decorative Background Blobs */}
    <div className="absolute w-80 h-80 bg-blue-400/20 blur-[100px] top-0 -left-20 rounded-full z-0 animate-pulse" />
    <div className="absolute w-80 h-80 bg-purple-500/20 blur-[100px] bottom-0 -right-20 rounded-full z-0 animate-pulse" />
    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] z-0 pointer-events-none" />

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16 relative z-10"
    >
      <h1 className="text-4xl font-extrabold tracking-wide">
        Academic <span className="text-blue-400">Journey</span>
      </h1>
      <div className="w-24 h-1 bg-blue-400 mx-auto mt-4 rounded-full" />
    </motion.div>

    {/* Cards */}
      <div className="max-w-4xl mx-auto space-y-10">
      {educationData.map((edu, index) => (
        <motion.div
          key={index}
          className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 * index }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-5">
            <div>{edu.icon}</div>
            <div className="flex-1">
              <div className="flex justify-between items-center flex-wrap gap-2">
                <h3 className="text-xl font-semibold text-white">
                  {edu.title}
                </h3>
                <span className="text-sm bg-white/20 text-white px-3 py-1 rounded-full border border-white/30">
                  {edu.badge}
                </span>
              </div>
              <p className="text-sm text-gray-300 italic">{edu.location}</p>
              <div className="my-3 border-t border-white/10" />
              <p className="text-base text-white font-medium">{edu.degree}</p>
              <p className="text-sm text-blue-200 mt-1 font-semibold">{edu.score}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

  </section>
);

const Skills = () => (
   <Section id="skills" className="relative py-16 px-4 sm:px-8 lg:px-16 overflow-hidden bg-[#0f172a] text-white">
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-blob top-10 left-20"></div>
        <div className="absolute w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000 top-40 right-10"></div>
        <div className="absolute w-72 h-72 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000 bottom-20 left-40"></div>
      </div>
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold mb-2">
      My <span className="text-blue-400">Skills</span>
    </h2>
    <div className="w-20 h-1 bg-blue-400 mx-auto rounded"></div>
  </div>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4">
    {[
      "HTML","CSS", "React","Tailwind","JavaScript", "Node.js", "MySQL","Git","Java","Python","C","C++","NumPy","TensorFlow",
      "Machine Learning","Deep Learning"
    ].map((skill, index) => (
      <motion.div
        key={skill}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 * index }}
        viewport={{ once: true }}
        className="relative rounded-xl overflow-hidden group bg-gradient-to-br from-[#0f172a]/50 to-[#1e293b]/60 border border-white/10 shadow-lg p-6 backdrop-blur-md hover:scale-[1.03] transition-transform duration-300 ease-in-out"
      >
        <div className="absolute inset-0 z-0 rounded-xl bg-gradient-to-tr from-cyan-400/10 via-purple-500/10 to-pink-400/10 group-hover:opacity-100 opacity-20 transition duration-500 blur-2xl"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="text-5xl mb-4">
            {
              skill === "HTML" ? <FaHtml5 className="text-orange-500" /> :
              skill === "CSS" ? <FaCss3Alt className="text-blue-500" /> :
              skill === "React" ? <FaReact className="text-cyan-400" /> :
              skill === "Tailwind" ? <SiTailwindcss className="text-sky-400" /> :
              skill === "JavaScript" ? <FaJsSquare className="text-yellow-300" /> :
              skill === "Node.js" ? <FaNodeJs className="text-green-400" /> :
              skill === "MySQL" ? <GrMysql className="text-purple-400"/> :
              skill === "Git" ? <FaGitAlt className="text-orange-500" /> :
              skill === "Java" ? <FaJava className="text-red-500" /> :
              skill === "Python" ? <FaPython className="text-yellow-400" /> :
              skill === "C" ? <SiC className="text-blue-400" /> :
              skill === "C++" ? <SiCplusplus className="text-purple-400" /> :
              skill === "NumPy" ? <SiNumpy className="text-blue-300" /> :
              skill === "TensorFlow" ? <SiTensorflow className="text-orange-400" /> :
              skill === "Machine Learning" ? (
                <img src="src/assets/machine.jpg" alt="Machine Learning" className="w-12 h-12 object-contain rounded-full shadow-md" />
              ) :
              skill === "Deep Learning" ? (
                <img src="src/assets/deep.png" alt="Deep Learning" className="w-12 h-12 object-contain rounded-full shadow-md" />
              ) :
              null
            }
          </div>
          <p className="text-white font-medium text-lg">{skill}</p>
        </div>
      </motion.div>
    ))}
  </div>
</Section>

);

const projectData = [
  {
    title: "Online Bookstore Application",
    description: "A web app for selling books with user-friendly design.",
    techStack: ["HTML", "CSS", "JavaScript", "MongoDB"],
    codeLink: "https://github.com/varshini2809/Bookstore",
    demoLink: "",
    borderColor: "border-yellow-500"
  },
  {
    title: "Hotel Management System",
    description: "Console-based system to manage hotel operations.",
    techStack: ["Python", "MySQL"],
    codeLink: "https://github.com/varshini2809/Mini_project",
    demoLink: "",
    borderColor: "border-yellow-500"
  },
  {
    title: "Lung Cancer Prediction",
    description: "Machine learning model to predict lung cancer.",
    techStack: ["Machine Learning", "Random Forest"],
    codeLink: "https://github.com/varshini2809/Mini_project",
    demoLink: "",
    borderColor: "border-yellow-500"
  },
  {
    title: "Brain Tumour Segmentation",
    description: "UNet3+ based deep learning model for tumour classification.",
    techStack: ["Deep Learning", "Unet3+"],
    codeLink: "https://www.kaggle.com/3d-u-net-brats2020-3/",
    demoLink: "",
    borderColor: "border-yellow-500"
  }
];

const Projects = () => (
    <section
      id="projects"
      className="relative py-24 px-6 bg-[#090909] text-white overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] animate-gradient blur-2xl opacity-20 z-0" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20 relative z-10"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide">
          Featured <span className="text-blue-400">Projects</span>
        </h1>
        <div className="w-28 h-1 bg-blue-400 mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Projects Grid */}
      <div className="grid gap-10 max-w-6xl mx-auto z-10 relative md:grid-cols-2">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className={`group border-t-4 ${project.borderColor} bg-white/5 backdrop-blur-lg shadow-2xl rounded-2xl p-8 hover:shadow-blue-500/30 transition-transform duration-300 transform hover:-translate-y-2 hover:scale-[1.015] border-l-[1px] border-white/10`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold text-white tracking-wide">
                {project.title}
              </h3>
              <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 animate-pulse" />
            </div>

            <p className="text-gray-300 text-[15px] leading-relaxed mb-5 border-b border-white/10 pb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gray-700/60 text-xs font-medium tracking-wide text-gray-200 px-3 py-1 rounded-full shadow-inner shadow-black/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-auto">
              {project.codeLink && (
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-md shadow-lg hover:brightness-110 transition"
                >
                  <FaCode /> View Code
                </a>
              )}
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm border border-pink-400 text-pink-400 rounded-md hover:bg-gray-800/40 transition"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
);

const Footer = () => (
  <footer className="bg-black text-white py-6 border-t border-gray-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} Varshini. Created with code and love.
        </p>
        <div className="flex gap-4 text-lg">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:varshinig2809@gmail.com"
            className="text-gray-400 hover:text-teal-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
);

const HeroSection = () => (
 <section className="min-h-screen bg-gradient-to-br from-[#0b1120] via-[#111827] to-[#1f2937] text-white flex flex-col justify-center items-center text-center px-4 pt-20 relative overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-transparent to-blue-900 opacity-10 animate-pulse blur-2xl" />

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold mb-4 z-10"
      >
        Hi, I'm{" "}
        <span className="text-blue-400 hover:text-teal-400 transition duration-300">
          Varshini G
        </span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-2xl md:text-4xl text-gray-300 mb-3 z-10"
      >
        Software Engineer
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl z-10"
      >
        Crafting digital experiences with modern technologies
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6 }}
        className="flex items-center gap-6 mb-8 text-4xl text-gray-400 z-10"
      >
        <a
          href="https://github.com/varshini2809"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition-transform duration-300 transform hover:scale-125"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/varshinig28/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 transition-transform duration-300 transform hover:scale-125"
        >
          <FaLinkedin />
        </a>
      </motion.div>

      <motion.a
        href="src/assets/21CSR235_VARSHINI G.pdf"
        download
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8 }}
        className="bg-teal-400 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-xl hover:from-teal-600 hover:to-blue-600 transition duration-300 z-10"
      >
        Download CV
      </motion.a>
    </section>
);

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <section id="home">
      <HeroSection />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default App;
