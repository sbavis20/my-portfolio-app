import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaShieldAlt, FaMusic, FaTint, FaUniversity } from 'react-icons/fa';
import { MdPhishing } from "react-icons/md";
import Tilt from 'react-parallax-tilt';
import Tooltip from '@mui/material/Tooltip';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      id: 1,
      title: "SCA-SHIELD",
      subtitle: "Side-Channel Attacks Detection Tool",
      description: "Advanced cybersecurity tool for detecting hardware vulnerabilities through power analysis and electromagnetic leaks.",
      longDescription: "Developed during MTech research, SCA-SHIELD implements novel algorithms to detect side-channel vulnerabilities in cryptographic hardware with 94.7% accuracy. The tool analyzes power consumption patterns and electromagnetic emissions to identify potential attack vectors.",
      tags: ["Cybersecurity", "Hardware Security", "Research"],
      category: "cybersecurity",
      icon: <FaShieldAlt className="text-red-500" size={24} />,
      links: {
        github: "#",
        demo: "#"
      },
      featured: true
    },
    {
      id: 2,
      title: "Secure Browsing",
      subtitle: "Phishing Detection with ML",
      description: "Machine learning system for real-time phishing website detection using Random Forest classifier.",
      longDescription: "Implemented during BTech, this system improves upon traditional blacklisting with parallel detection mechanisms. Our Random Forest model achieved 96.2% precision in identifying phishing attempts by analyzing 27 website features.",
      tags: ["Machine Learning", "Web Security", "Python"],
      category: "ml-ai",
      icon: <MdPhishing className="text-blue-500" size={24} />,
      links: {
        github: "#",
        paper: "#"
      }
    },
    {
      id: 3,
      title: "Music Genre Classification",
      subtitle: "Audio Pattern Recognition System",
      description: "GTZAN dataset-based classifier identifying music genres from 30s audio samples with 89% accuracy.",
      longDescription: "Implemented various feature extraction techniques (MFCC, Spectral Contrast) and trained multiple models (CNN, SVM) on the benchmark GTZAN dataset.",
      tags: ["Machine Learning", "Audio Processing", "Python"],
      category: "ml-ai",
      icon: <FaMusic className="text-purple-500" size={24} />,
      links: {
        github: "#"
      }
    },
    {
      id: 4,
      title: "Online Blood Forum",
      subtitle: "Emergency Blood Donation Network",
      description: "Web platform connecting blood donors with recipients through real-time matching system.",
      longDescription: "Full-stack application built with Ruby on Rails and JavaScript featuring geolocation-based donor matching and appointment scheduling.",
      tags: ["Web Development", "Ruby on Rails", "JavaScript"],
      category: "web-dev",
      icon: <FaTint className="text-red-400" size={24} />,
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      id: 5,
      title: "PG Accreditation Automation",
      subtitle: "Academic Feedback System",
      description: "Automated course evaluation platform with scheduled survey distribution and analytics.",
      longDescription: "Developed to streamline the accreditation process, this system automates survey lifecycle management and provides detailed analytics dashboards.",
      tags: ["Web Development", "Automation", "Education"],
      category: "web-dev",
      icon: <FaUniversity className="text-green-500" size={24} />,
      links: {
        github: "#",
        demo: "#"
      }
    }
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-4">
            Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">

          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['all', 'cybersecurity', 'ml-ai', 'web-dev'].map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                activeTab === tab
                  ? 'bg-cyan-600/20 border border-cyan-400/50 text-cyan-300'
                  : 'bg-gray-700/50 hover:bg-gray-700 text-gray-300'
              }`}
            >
              {tab.replace('-', ' ')}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`relative h-full rounded-xl overflow-hidden border ${
          project.featured
            ? "bg-gradient-to-br from-gray-700 to-gray-800 border-cyan-400/50 shadow-lg"
            : "bg-gray-700/50 border-gray-600"
        }`}
      >
        <div className="p-6">
          <div className="flex items-start mb-4">
            <div className="mr-4">
              {project.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-sm text-cyan-300">{project.subtitle}</p>
            </div>
          </div>

          <p className="text-gray-300 mb-4">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-gray-600/50 text-gray-200 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Expanded Content */}
        <motion.div
          className="overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: isExpanded ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-6 pb-4">
            <p className="text-gray-300 text-sm mb-4">{project.longDescription}</p>
          </div>
        </motion.div>

        {/* Links Bar */}
        <div className="px-6 pb-4 flex justify-between items-center border-t border-gray-600">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            {isExpanded ? 'Show Less' : 'Learn More'}
          </button>

          <div className="flex gap-3">
            {project.links.github && (
              <Tooltip title="View Code" arrow>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaGithub size={18} />
                </a>
              </Tooltip>
            )}
            {(project.links.demo || project.links.paper) && (
              <Tooltip title={project.links.demo ? "Live Demo" : "View Paper"} arrow>
                <a
                  href={project.links.demo || project.links.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-300 transition-colors"
                >
                  <FaExternalLinkAlt size={16} />
                </a>
              </Tooltip>
            )}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default Projects;
