import { useState } from "react";
import { motion } from "motion/react";
import {
  Code2,
  Database,
  Cloud,
  Terminal,
  Rocket,
  Download,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Send,
  Server,
  Globe,
  Box,
  FileCode,
  Layers,
} from "lucide-react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { ProjectCard } from "./components/ProjectCard";
import { SkillBar } from "./components/SkillBar";
import { ChatBot } from "./components/ChatBot";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import profileImage from "figma:asset/f581e5ad1cd5594142128eae213841f0129569d5.png";

export default function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const techStack = [
    { name: "React", icon: Code2, color: "#06b6d4" },
    { name: "Node.js", icon: Server, color: "#10b981" },
    { name: "Go", icon: Terminal, color: "#06b6d4" },
    { name: "SQL", icon: Database, color: "#f59e0b" },
    { name: "Docker", icon: Box, color: "#6366f1" },
    { name: "Kubernetes", icon: Cloud, color: "#a855f7" },
    { name: "TypeScript", icon: FileCode, color: "#06b6d4" },
    { name: "GraphQL", icon: Layers, color: "#ec4899" },
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with real-time inventory management and payment processing.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBjb2Rpbmd8ZW58MXx8fHwxNzYyNzI5NzMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Full-stack",
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description:
        "Secure mobile banking application with biometric authentication and real-time transactions.",
      tech: ["React Native", "Go", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYyNjg2MDU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Web",
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "DevOps Dashboard",
      description:
        "Monitoring and analytics dashboard for managing microservices infrastructure.",
      tech: ["Vue.js", "Python", "Docker", "Kubernetes"],
      image:
        "https://images.unsplash.com/photo-1546900703-cf06143d1239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzYyNjgzMTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Backend",
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 4,
      title: "Cloud Migration Tool",
      description:
        "Automated cloud migration platform for seamless transition to AWS infrastructure.",
      tech: ["Go", "AWS", "Terraform", "Redis"],
      image:
        "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGluZnJhc3RydWN0dXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI2NjgwNTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Backend",
      liveLink: "#",
      githubLink: "#",
    },
  ];

  const frontendSkills = [
    { name: "React / Next.js", level: 95, color: "#06b6d4" },
    { name: "TypeScript", level: 90, color: "#6366f1" },
    { name: "Vue.js", level: 85, color: "#10b981" },
    { name: "Tailwind CSS", level: 95, color: "#06b6d4" },
  ];

  const backendSkills = [
    { name: "Node.js / Express", level: 90, color: "#10b981" },
    { name: "Go", level: 85, color: "#06b6d4" },
    { name: "PostgreSQL / MySQL", level: 88, color: "#f59e0b" },
    { name: "GraphQL / REST APIs", level: 92, color: "#a855f7" },
  ];

  const devopsSkills = [
    { name: "Docker / Kubernetes", level: 87, color: "#6366f1" },
    { name: "AWS / Cloud Services", level: 85, color: "#f59e0b" },
    { name: "CI/CD Pipelines", level: 88, color: "#10b981" },
    { name: "Git / GitHub Actions", level: 95, color: "#06b6d4" },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="dark min-h-screen bg-[#0a0a0f] text-[#f5f5f7]">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <AnimatedBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#06b6d4] to-[#6366f1] rounded-full blur-2xl opacity-50" />
                <img
                  src={profileImage}
                  alt="Jay Aubrey D. Languido"
                  className="relative w-40 h-40 rounded-full object-cover border-4 border-[rgba(99,102,241,0.3)]"
                />
              </div>
            </div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-[rgba(99,102,241,0.1)] border border-[rgba(99,102,241,0.3)] rounded-full text-[#6366f1]"
              >
                <Rocket className="inline-block mr-2" size={16} />
                Available for Freelance
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-[#f5f5f7] via-[#06b6d4] to-[#6366f1] bg-clip-text text-transparent"
              >
                Jay Aubrey D. Languido
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-[#06b6d4] text-xl"
              >
                Full-Stack Developer
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="max-w-2xl mx-auto text-[#9ca3af]"
              >
                Building scalable, high-performance applications with modern
                technologies. Specializing in full-stack development, cloud
                architecture, and DevOps practices.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-gradient-to-r from-[#06b6d4] to-[#6366f1] text-white rounded-2xl hover:shadow-lg hover:shadow-[rgba(99,102,241,0.3)] transition-all duration-300 hover:scale-105"
              >
                Hire Me
              </button>
              <button
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-[rgba(100,100,120,0.1)] border border-[rgba(100,100,120,0.2)] text-[#f5f5f7] rounded-2xl hover:bg-[rgba(100,100,120,0.2)] transition-all duration-300"
              >
                View Projects
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[rgba(20,20,30,0.3)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#06b6d4] to-[#6366f1] mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-[#9ca3af] leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of
                experience building web applications, mobile apps, and
                cloud-based solutions. I specialize in creating scalable,
                maintainable, and user-friendly applications using modern
                technologies.
              </p>
              <p className="text-[#9ca3af] leading-relaxed">
                My expertise spans across frontend frameworks like React and
                Vue.js, backend technologies including Node.js and Go, and cloud
                infrastructure with AWS and Kubernetes. I'm committed to writing
                clean code and following best practices.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#6366f1] rounded-full mt-2" />
                  <div>
                    <h4 className="text-[#f5f5f7] mb-1">
                      Senior Full-Stack Developer
                    </h4>
                    <p className="text-[#9ca3af]">
                      TechCorp Inc. • 2021 - Present
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#06b6d4] rounded-full mt-2" />
                  <div>
                    <h4 className="text-[#f5f5f7] mb-1">
                      Full-Stack Developer
                    </h4>
                    <p className="text-[#9ca3af]">StartupXYZ • 2019 - 2021</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#a855f7] rounded-full mt-2" />
                  <div>
                    <h4 className="text-[#f5f5f7] mb-1">
                      B.S. Computer Science
                    </h4>
                    <p className="text-[#9ca3af]">
                      University of Technology • 2015 - 2019
                    </p>
                  </div>
                </div>
              </div>

              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#06b6d4] to-[#6366f1] text-white rounded-xl hover:shadow-lg hover:shadow-[rgba(99,102,241,0.3)] transition-all duration-300 mt-6">
                <Download size={18} />
                Download CV
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-6"
            >
              {techStack.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center justify-center p-6 bg-[rgba(20,20,30,0.7)] backdrop-blur-sm border border-[rgba(100,100,120,0.2)] rounded-2xl hover:border-[rgba(99,102,241,0.5)] transition-all duration-300 group"
                  >
                    <Icon
                      size={32}
                      style={{ color: tech.color }}
                      className="mb-3 group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-[#f5f5f7]">{tech.name}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#06b6d4] to-[#6366f1] mx-auto rounded-full" />
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["All", "Web", "Full-stack", "Backend"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-xl transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-[#06b6d4] to-[#6366f1] text-white"
                    : "bg-[rgba(100,100,120,0.1)] text-[#9ca3af] hover:bg-[rgba(100,100,120,0.2)]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <motion.div layout className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-[rgba(20,20,30,0.3)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#06b6d4] to-[#6366f1] mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-[#f5f5f7] mb-6 flex items-center gap-2">
                  <Globe className="text-[#06b6d4]" size={24} />
                  Frontend Development
                </h3>
                <div className="space-y-4">
                  {frontendSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <SkillBar {...skill} />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[#f5f5f7] mb-6 flex items-center gap-2">
                  <Server className="text-[#10b981]" size={24} />
                  Backend Development
                </h3>
                <div className="space-y-4">
                  {backendSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <SkillBar {...skill} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-[#f5f5f7] mb-6 flex items-center gap-2">
                  <Cloud className="text-[#6366f1]" size={24} />
                  DevOps & Cloud
                </h3>
                <div className="space-y-4">
                  {devopsSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <SkillBar {...skill} />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-[rgba(20,20,30,0.7)] backdrop-blur-sm border border-[rgba(100,100,120,0.2)] rounded-2xl p-6">
                <h4 className="text-[#f5f5f7] mb-4">Tools & Platforms</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Git",
                    "GitHub Actions",
                    "Jenkins",
                    "AWS",
                    "GCP",
                    "MongoDB",
                    "Redis",
                    "Nginx",
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 bg-[rgba(99,102,241,0.1)] text-[#6366f1] rounded-lg border border-[rgba(99,102,241,0.3)]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#06b6d4] to-[#6366f1] mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-[#f5f5f7] mb-6">Let's work together</h3>
                <p className="text-[#9ca3af] leading-relaxed">
                  I'm always interested in hearing about new projects and
                  opportunities. Whether you have a question or just want to say
                  hi, feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:hello@example.com"
                  className="flex items-center gap-4 p-4 bg-[rgba(20,20,30,0.7)] backdrop-blur-sm border border-[rgba(100,100,120,0.2)] rounded-xl hover:border-[rgba(99,102,241,0.5)] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[rgba(99,102,241,0.1)] flex items-center justify-center text-[#6366f1] group-hover:bg-[rgba(99,102,241,0.2)] transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-[#f5f5f7]">Email</h4>
                    <p className="text-[#9ca3af]">hello@example.com</p>
                  </div>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[rgba(20,20,30,0.7)] backdrop-blur-sm border border-[rgba(100,100,120,0.2)] rounded-xl hover:border-[rgba(99,102,241,0.5)] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[rgba(99,102,241,0.1)] flex items-center justify-center text-[#6366f1] group-hover:bg-[rgba(99,102,241,0.2)] transition-all">
                    <Github size={20} />
                  </div>
                  <div>
                    <h4 className="text-[#f5f5f7]">GitHub</h4>
                    <p className="text-[#9ca3af]">@yourusername</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[rgba(20,20,30,0.7)] backdrop-blur-sm border border-[rgba(100,100,120,0.2)] rounded-xl hover:border-[rgba(99,102,241,0.5)] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[rgba(99,102,241,0.1)] flex items-center justify-center text-[#6366f1] group-hover:bg-[rgba(99,102,241,0.2)] transition-all">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <h4 className="text-[#f5f5f7]">LinkedIn</h4>
                    <p className="text-[#9ca3af]">@yourprofile</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-[rgba(20,20,30,0.7)] backdrop-blur-sm border border-[rgba(100,100,120,0.2)] rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-[rgba(99,102,241,0.1)] flex items-center justify-center text-[#6366f1]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-[#f5f5f7]">Location</h4>
                    <p className="text-[#9ca3af]">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-[rgba(20,20,30,0.7)] backdrop-blur-sm border border-[rgba(100,100,120,0.2)] rounded-2xl p-8 space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-[#f5f5f7] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 bg-[rgba(45,45,60,0.5)] border border-[rgba(100,100,120,0.2)] rounded-xl text-[#f5f5f7] placeholder-[#9ca3af] focus:outline-none focus:border-[#6366f1] transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#f5f5f7] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 bg-[rgba(45,45,60,0.5)] border border-[rgba(100,100,120,0.2)] rounded-xl text-[#f5f5f7] placeholder-[#9ca3af] focus:outline-none focus:border-[#6366f1] transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#f5f5f7] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[rgba(45,45,60,0.5)] border border-[rgba(100,100,120,0.2)] rounded-xl text-[#f5f5f7] placeholder-[#9ca3af] focus:outline-none focus:border-[#6366f1] transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#06b6d4] to-[#6366f1] text-white rounded-xl hover:shadow-lg hover:shadow-[rgba(99,102,241,0.3)] transition-all duration-300"
              >
                <Send size={18} />
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      <Footer />

      {/* AI Assistant Chatbot */}
      <ChatBot />
    </div>
  );
}
