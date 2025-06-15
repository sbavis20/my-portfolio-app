import { useState } from 'react';
import { FaShieldAlt, FaUserSecret, FaDatabase, FaTrophy, FaCode, FaCertificate, FaFilter, FaExternalLinkAlt } from 'react-icons/fa';
import { SiOpensourcehardware, SiPython } from 'react-icons/si';
import { useSpring, animated, useTrail } from '@react-spring/web';
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
    },
    {
      title: "CIP 2025",
      fullName: "Stanford University's Code in Place",
      issuer: "Stanford University",
      date: "2025",
      icon: <SiPython className="text-cyan-400" />,
      category: "Programming",
      description: "Code in Place is an introduction to programming course that covers the material from Stanford's CS106A Programming Methodologies",
      credentialUrl: "https://codeinplace.stanford.edu/cip5/certificate/0f1loa"
    }
  ];

  const categories = ['All', ...new Set(certifications.map(cert => cert.category))];

  const filteredCerts = activeFilter === 'All'
    ? certifications
    : certifications.filter(cert => cert.category === activeFilter);

  // Trail animation for cards
  const trail = useTrail(filteredCerts.length, {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 280, friction: 60 },
    delay: 100,
  });

  const toggleExpand = (index) => {
    setExpandedCert(expandedCert === index ? null : index);
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <animated.div
          style={useSpring({
            from: { opacity: 0, transform: 'translateY(-20px)' },
            to: { opacity: 1, transform: 'translateY(0px)' },
            config: { tension: 200, friction: 20 },
          })}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-cyan-400 mb-4 tracking-tight">
            Certifications
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Validated expertise and recognized accomplishments across multiple domains of technology
          </p>
        </animated.div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => {
            const buttonSpring = useSpring({
              scale: activeFilter === category ? 1.05 : 1,
              config: { tension: 300, friction: 20 },
            });
            return (
              <animated.button
                key={category}
                style={buttonSpring}
                onClick={() => setActiveFilter(category)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === category
                    ? 'bg-cyan-600/20 border border-cyan-400/50 text-cyan-300 shadow-sm'
                    : 'bg-gray-700/50 border border-gray-700 hover:bg-gray-700 text-gray-300'
                }`}
              >
                {category === 'All' ? <FaFilter className="mr-2" /> : null}
                {category}
              </animated.button>
            );
          })}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trail.map((style, index) => {
            const cert = filteredCerts[index];
            const [cardSpring, cardApi] = useSpring(() => ({
              scale: 1,
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              config: { tension: 300, friction: 20 },
            }));

            const expandSpring = useSpring({
              height: expandedCert === index ? 'auto' : 0,
              opacity: expandedCert === index ? 1 : 0,
              overflow: 'hidden',
              config: { tension: 200, friction: 20 },
            });

            return (
              <animated.div
                key={index}
                style={{ ...style, ...cardSpring }}
                onMouseEnter={() => cardApi.start({ scale: 1.03, boxShadow: '0 8px 16px rgba(34, 197, 94, 0.2)' })}
                onMouseLeave={() => cardApi.start({ scale: 1, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' })}
                className={`relative rounded-xl border bg-gray-800/70 backdrop-blur-sm ${
                  cert.highlight
                    ? 'border-cyan-400/50 shadow-lg'
                    : 'border-gray-700'
                }`}
              >
                <div className="p-6">
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
                          <h3 className={`font-semibold text-lg ${cert.highlight ? 'text-white' : 'text-gray-200'}`}>
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
                  <animated.div style={expandSpring}>
                    <div className="mt-4 pt-4 border-t border-gray-700/50">
                      <p className="text-gray-300 text-sm">{cert.description}</p>
                      <p className="text-xs text-gray-500 mt-2">{cert.fullName}</p>
                    </div>
                  </animated.div>
                </div>

                {/* Expand Button */}
                <animated.button
                  style={useSpring({
                    backgroundColor: expandedCert === index ? '#1F2937' : '#111827',
                    config: { tension: 300, friction: 20 },
                  })}
                  onClick={() => toggleExpand(index)}
                  className="w-full py-3 text-sm text-gray-400 hover:text-cyan-300 flex items-center justify-center gap-2 transition-colors duration-200"
                >
                  {expandedCert === index ? 'Show Less' : 'Show Details'}
                  <animated.span
                    style={useSpring({
                      rotate: expandedCert === index ? 180 : 0,
                      config: { tension: 200, friction: 20 },
                    })}
                  >
                    ▼
                  </animated.span>
                </animated.button>
              </animated.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
