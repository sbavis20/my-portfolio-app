import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaShieldAlt, FaMusic, FaTint, FaUniversity,FaGlobe } from 'react-icons/fa';
import { MdPhishing } from "react-icons/md";
import Tilt from 'react-parallax-tilt';
import Tooltip from '@mui/material/Tooltip';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
   {
        id: 1,
        title: "SCA-SHIELD",
        subtitle: "Real Time Side-Channel Attacks Detection Tool",
        description: "Real-time detection system for cache-based side-channel attacks using Intel PCM counters and ML models.",
        longDescription: "SCA-SHIELD is a Cloud Security research tool developed during MTech that detects cache and timing side-channel attacks in real-time. It leverages variations in CPU performance counters (via Intel PCM) during attacks like Flush+Reload, Prime+Probe, Spectre, and Meltdown. Using decision trees for feature filtering and SVMs for classification, the system achieves over 94.7% detection accuracy. The tool introduces novel detection metrics and is tested across both virtualized and bare-metal environments. Built on Ubuntu 20.04, it integrates low-level C++ modules for counter access and Python for machine learning pipelines. The framework addresses key issues like low detection accuracy, high latency, and poor threat modeling in existing solutions.",
        tags: [
          "Cloud Security", "Side-Channel Attacks", "Intel PCM", "Machine Learning",
          "Hardware Security", "Real-time Detection", "C++", "Python", "Ubuntu 20.04"
        ],
        category: "cybersecurity",
        icon: <FaShieldAlt className="text-red-500" size={24} />,
        links: {
          github: "🔒 Due to publication restrictions, source code is not public yet.",
          demo: "#"
        },
        metadata: {
          language: ["C++", "Python"],
          os: "Ubuntu 20.04 LTS",
          tools: ["Intel PCM", "SVM", "Decision Trees","Random Forrest Trees"],
          environment: ["Virtualized Systems", "Single OS", "Bare-Metal Machines"]
        },
                  contributionOrFindings: {
            summary: "This research presents a real-time, machine learning–based system for detecting cache-based side-channel attacks in both virtualized and bare-metal environments using Intel PCM counters.",
            highlights: [
              "Detects advanced attacks like Flush+Reload, Prime+Probe, Flush+Flush, Spectre, and Meltdown.",
              "Achieves high detection accuracy (94.7%) with minimal performance overhead.",
              "Introduces a novel evaluation metric for benchmarking side-channel detection systems.",
              "Proves real-time detection is viable in High-Performance Computing (HPC) and cloud environments.",
              "Lays groundwork for detecting stealthier, evasive attacks in future research."
            ]
      }
,
      featured: true
    },

      {
          id: 2,
            title: "Secure Browsing",
            subtitle: "Phishing Detection with ML",
            description: "Machine learning system for real-time phishing website detection using Random Forest classifier.",
            longDescription: "Implemented during BTech, this system improves upon traditional blacklisting with parallel detection mechanisms. Our Random Forest model achieved 96.2% precision in identifying phishing attempts by analyzing 27 website features. A Firefox and Chrome browser extension was developed that uses both static and dynamic analysis techniques to classify malicious websites based on URL structure, SSL certificate, and HTML patterns in real time.",
            tags: ["Machine Learning", "Web Security", "Python", "Browser Extension", "Phishing Detection"],
            category: "ml-ai",
            icon: <MdPhishing className="text-blue-500" size={24} />,
            links: {
              github: "🔒 Not publicly available due to publication restrictions.",
              paper: "#"
            },
            metadata: {
              language: ["Python"],
              os: ["Windows 10", "Ubuntu"],
              browser: ["Firefox", "Chrome"],
              tools: ["Random Forest", "Browser Extension APIs", "Scikit-learn"]
            },
            contributionOrFindings: {
              summary: "This project focuses on detecting phishing websites in real-time using an intelligent browser extension backed by machine learning.",
              highlights: [
                "Developed a Firefox/Chrome extension that blocks phishing sites dynamically.",
                "Achieved 96.2% precision using a Random Forest model trained on 27 web features.",
                "Introduced hybrid detection using both static and dynamic feature analysis.",
                "Enhanced detection speed and accuracy through parallel scanning.",
                "Offers improved performance over traditional blacklist-based solutions."
              ]
            }
          },
              {
                id: 3,
                title: "Music Genre Classification",
                subtitle: "Audio Pattern Recognition System",
                description: "GTZAN dataset-based classifier identifying music genres from 30s audio samples with 89% accuracy.",
                longDescription: "This project implements a machine learning pipeline for music genre classification using 30-second audio samples from the GTZAN dataset. Various audio features such as MFCC, Chroma, and Spectral Contrast were extracted, followed by dimensionality reduction using PCA. A hybrid voting classifier combining CNN and SVM models achieved 89% accuracy. The system supports audio visualization and allows genre prediction for new input samples.",
                tags: ["Machine Learning", "Audio Processing", "Python", "TensorFlow", "MFCC", "Voting Classifier"],
                category: "ml-ai",
                icon: <FaMusic className="text-purple-500" size={24} />,
                links: {
                  github: "https://github.com/sbavis20/Music-Genre-Classfication",
                  dataset: "https://www.kaggle.com/andradaolteanu/gtzan-dataset-music-genre-classification"
                },
                metadata: {
                  language: ["Python"],
                  libraries: ["math", "os", "librosa", "json", "numpy", "tensorflow", "contextlib", "sklearn"],
                  dataset: "GTZAN",
                  framework: ["TensorFlow", "scikit-learn"]
                },
                contributionOrFindings: {
                  summary: "Developed a robust audio classification pipeline using feature-rich data and hybrid model techniques.",
                  highlights: [
                    "Explored and visualized GTZAN dataset to assess genre separability.",
                    "Extracted key audio features including MFCC and Spectral Contrast using Librosa.",
                    "Applied PCA for dimensionality reduction and feature enhancement.",
                    "Implemented a hybrid voting classifier combining CNN and SVM models.",
                    "Achieved 89% accuracy in predicting 10 music genres.",
                    "Enabled real-time prediction and visualization on new audio inputs."
                  ]
                }
              },
                {
                  id: 4,
                  title: "Online Blood Forum",
                  subtitle: "Emergency Blood Donation Network",
                  description: "Web platform connecting blood donors with recipients through real-time, location-based matching and request tracking.",
                  longDescription: "Developed a full-stack emergency blood donation platform using Ruby on Rails and JavaScript. The system allows users to register as donors or recipients, integrates geolocation APIs for nearby donor discovery, and provides real-time status updates. Features include blood type filtering, secure user authentication, appointment scheduling, and automated notifications via email. The platform aims to reduce search time and streamline the donation process during medical emergencies.",
                  tags: ["Web Development", "Ruby on Rails", "JavaScript", "Geolocation", "Full Stack"],
                  category: "web-dev",
                  icon: <FaTint className="text-red-400" size={24} />,
                  links: {
                    github: "https://github.com/sbavis20/online-blood-forum"
                  },
                  metadata: {
                    frontend: ["JavaScript", "HTML", "CSS"],
                    backend: ["Ruby on Rails"],
                    features: ["Geolocation API", "Authentication", "Notification System", "Search Filtering"]
                  },
                  contributionOrFindings: {
                    summary: "Built a complete donation-request system to assist emergency medical needs with faster response times.",
                    highlights: [
                      "Integrated geolocation to match donors with nearby recipients.",
                      "Implemented secure user authentication and role-based access.",
                      "Built appointment scheduling and confirmation system.",
                      "Added email notification system to alert matching users.",
                      "Designed intuitive UI for ease of use in critical scenarios."
                    ]
                  }
                },
{
  id: 5,
  title: "PG Accreditation Automation",
  subtitle: "Academic Feedback System",
  description: "Automated course evaluation platform with scheduled survey distribution and insightful analytics.",
  longDescription: "This web-based system was developed to assist educational institutions in automating their postgraduate course feedback collection for accreditation. It handles the complete lifecycle of course exit surveys—from dynamic form creation and scheduled email reminders to result analysis and report generation. My key contributions included major UI/UX enhancements to ensure an intuitive experience for faculty and students, along with implementing new features like role-based dashboards, real-time submission tracking, and improved data visualization through interactive charts.",
  tags: ["Web Development", "Automation", "Education", "UI/UX"],
  category: "web-dev",
  icon: <FaUniversity className="text-green-500" size={24} />,
  links: {
    github: "https://github.com/sbavis20/PG-Accreditation-Automation",
    demo: "#"
  },
        contributionOrFindings: {
          summary: "Enhanced user experience and functionality to support institutional course accreditation processes.",
          highlights: [
            "Redesigned UI for better usability and responsiveness across devices.",
            "Implemented role-specific dashboards for Admin, Faculty, and Students.",
            "Added real-time tracking of survey submissions.",
            "Integrated graphical analytics for response trends and feedback insights.",
            "Simplified survey generation and schedule configuration."
          ]
        }
      },
          {
      id: 6,
      title: "Developer Portfolio Website",
      subtitle: "Interactive Personal Branding Site",
      description: "Modern portfolio website showcasing projects, skills, and achievements with responsive UI and animation.",
      longDescription: "This portfolio site was designed and developed to present my technical background, project experience, and domain expertise in cybersecurity and machine learning. Built using React.js with Tailwind CSS, Framer Motion, and dynamic components, it highlights my work in an interactive and accessible format. The site features animated transitions, a modular project showcase, skill matrix, and a contact form integrated with Formspree. It also adapts seamlessly to various screen sizes and provides performance optimizations for faster loading and SEO.",
      tags: ["React.js", "Tailwind CSS", "Framer Motion", "Personal Branding"],
      category: "web-dev",
      icon: <FaGlobe className="text-blue-400" size={24} />,
      links: {
        github: "https://github.com/sbavis20/my-portfolio-app",
        live: "https://your-portfolio-url.com" // (replace with your live site link if available)
      },
      contributionOrFindings: {
        summary: "Created a fully responsive, animated portfolio to showcase my expertise.",
        highlights: [
          "Designed custom UI using Tailwind CSS and modern layout principles.",
          "Implemented dynamic project section with category filters and icons.",
          "Used Framer Motion for smooth animations and user engagement.",
          "Optimized for mobile devices and improved page speed metrics.",
          "Integrated contact form and social profiles for easy outreach."
        ]
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
