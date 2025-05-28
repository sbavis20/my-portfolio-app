import { useState } from 'react';
import { FaShieldAlt, FaUserSecret, FaDatabase, FaTrophy, FaCode, FaCertificate, FaFilter, FaExternalLinkAlt } from 'react-icons/fa';
import { SiOpensourcehardware } from 'react-icons/si';
import { motion } from 'framer-motion';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedCert, setExpandedCert] = useState(null);

  const certifications = [
    {
      title: "Google CyberSecurity",
      fullName: "Google Cybersecurity Professional Certificate",
      issuer: "Google",
      date: "2025",
      image: "/imgs/google_cert.png",
      category: "Security",
      description: "Comprehensive training in cybersecurity fundamentals, tools, and best practices from Google's industry experts.",
      credentialUrl: "https://www.coursera.org/professional-certificates/google-cybersecurity",
      highlight: true
    },
    {
      title: "CISEH",
      fullName: "Certified Information Security and Ethical Hacking",
      issuer: "Pristine InfoSolutions",
      date: "2019",
      icon: <FaShieldAlt className="text-green-400" />,
      category: "Security",
      description: "Mastered ethical hacking techniques, vulnerability assessment, and security protocols.",
      credentialUrl: "https://pristine.com/certifications/ciseh"
    },
    {
      title: "CPTE",
      fullName: "Certified Penetration Testing Expert",
      issuer: "Pristine InfoSolutions",
      date: "2019",
      icon: <FaUserSecret className="text-blue-400" />,
      category: "Offensive Security",
      description: "Advanced penetration testing methodologies and real-world exploitation techniques.",
      credentialUrl: "https://pristine.com/certifications/cpte"
    },
    {
      title: "Big Data",
      fullName: "Big Data Certification",
      issuer: "Global Technologies",
      date: "2023",
      icon: <FaDatabase className="text-purple-400" />,
      category: "Data",
      description: "Hands-on experience with Hadoop, Spark, and large-scale data processing frameworks.",
      credentialUrl: "https://globaltech.com/certifications/big-data"
    },
    {
      title: "Cyber-Disease",
      fullName: "Ethical Hacking Competition Winner",
      issuer: "National Level Competition",
      date: "2023",
      icon: <FaTrophy className="text-yellow-400" />,
      category: "Competition",
      description: "Awarded for demonstrating exceptional skills in a 48-hour national cybersecurity competition.",
      credentialUrl: "https://cyberdisease-competition.org/winners/2023"
    },
    {
      title: "Math for AI",
      fullName: "Mathematics for Artificial Intelligence",
      issuer: "Academic Program",
      date: "2023",
      icon: <FaCode className="text-red-400" />,
      category: "Academic",
      description: "Advanced mathematical concepts including linear algebra, calculus, and statistics for AI applications.",
      credentialUrl: "https://academic-program.edu/math-ai"
    },
    {
      title: "JS Bootcamp",
      fullName: "JavaScript Certification",
      issuer: "LetsUpgrade",
      date: "2022",
      icon: <FaCertificate className="text-cyan-400" />,
      category: "Programming",
      description: "Modern JavaScript development including ES6+, Node.js, and frontend frameworks.",
      credentialUrl: "https://letsupgrade.com/js-certification"
    },
    {
      title: "FOSS 23",
      fullName: "Free and Open Source Software Contributor",
      issuer: "NIT Calicut",
      date: "2022",
      icon: <SiOpensourcehardware className="text-cyan-400" />,
      category: "Programming",
      description: "Recognized for significant contributions to open-source projects during FOSS Hackathon.",
      credentialUrl: "https://nitc.ac.in/foss/contributors"
    }
  ];

  const categories = ['All', ...new Set(certifications.map(cert => cert.category))];

  const filteredCerts = activeFilter === 'All'
    ? certifications
    : certifications.filter(cert => cert.category === activeFilter);

  const toggleExpand = (index) => {
    setExpandedCert(expandedCert === index ? null : index);
  };

  return (
    <section id="certifications" className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-cyan-400 mb-3"
          >
            Certifications
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Validated expertise and recognized accomplishments across multiple domains of technology
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category
                  ? 'bg-cyan-600/20 border border-cyan-400/50 text-cyan-300'
                  : 'bg-gray-700/50 hover:bg-gray-700 text-gray-300'
              }`}
            >
              {category === 'All' ? (
                <FaFilter className="mr-2" />
              ) : null}
              {category}
            </motion.button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`relative rounded-xl overflow-hidden border ${
                cert.highlight
                  ? "bg-gradient-to-br from-gray-800 to-gray-900 border-cyan-400/50 shadow-lg hover:shadow-cyan-400/20"
                  : "bg-gray-800/50 border-gray-700 hover:border-cyan-300/30"
              }`}
            >
              <div className="p-5">
                <div className="flex items-start">
                  {/* Image/Icon Container */}
                  <div className="mr-4 w-14 h-14 flex-shrink-0">
                    {cert.image ? (
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-contain rounded"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-700/30 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        {cert.icon}
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className={`font-bold text-lg ${
                          cert.highlight ? "text-white" : "text-gray-200"
                        }`}>
                          {cert.title}
                        </h3>
                        <p className="text-sm mt-1 text-gray-400">
                          {cert.issuer} • {cert.date}
                        </p>
                      </div>
                      <Tooltip
                        title="View credential"
                        placement="top"
                        TransitionComponent={Zoom}
                        arrow
                      >
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                          <FaExternalLinkAlt className="ml-2" />
                        </a>
                      </Tooltip>
                    </div>

                    {cert.highlight && (
                      <span className="inline-block mt-2 px-3 py-1 text-xs bg-cyan-900/30 text-cyan-300 rounded-full border border-cyan-400/20">
                        Professional Certification
                      </span>
                    )}
                  </div>
                </div>

                {/* Expandable Content */}
                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0 }}
                  animate={{ height: expandedCert === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mt-4 pt-4 border-t border-gray-700/50">
                    <p className="text-gray-300 text-sm">{cert.description}</p>
                    <p className="text-xs text-gray-500 mt-2">{cert.fullName}</p>
                  </div>
                </motion.div>
              </div>

              {/* Expand Button */}
              <button
                onClick={() => toggleExpand(index)}
                className="w-full py-2 bg-gray-800/50 text-xs text-gray-400 hover:text-cyan-300 flex items-center justify-center gap-1 transition-colors"
              >
                {expandedCert === index ? 'Show Less' : 'Show Details'}
                <motion.span
                  animate={{ rotate: expandedCert === index ? 180 : 0 }}
                >
                  ▼
                </motion.span>
              </button>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
