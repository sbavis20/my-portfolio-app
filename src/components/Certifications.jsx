import { FaShieldAlt, FaUserSecret, FaDatabase, FaTrophy, FaCode, FaCertificate } from 'react-icons/fa';
import { SiOpensourcehardware } from 'react-icons/si';

export default function Certifications() {
  const certifications = [
    {
      title: "Google CyberSecurity",
      fullName: "Google CyberSecurity",
      issuer: "Google",
      date: "2025",
      image: "/imgs/google_cert.png",
      category: "Security"
    },
    {
      title: "CISEH",
      fullName: "Certified Information Security and Ethical Hacking",
      issuer: "Pristine",
      date: "2019",
      icon: <FaShieldAlt className="text-green-400" />,
      category: "Security"
    },
    {
      title: "CPTE",
      fullName: "Certified Penetration Testing Expert",
      issuer: "Pristine",
      date: "2019",
      icon: <FaUserSecret className="text-blue-400" />,
      category: "Offensive Security"
    },
    {
      title: "Big Data",
      fullName: "Big Data Certification",
      issuer: "Global Technologies",
      date: "2023",
      icon: <FaDatabase className="text-purple-400" />,
      category: "Data"
    },
    {
      title: "Cyber-Disease",
      fullName: "Ethical Hacking Competition",
      issuer: "National Level",
      date: "2023",
      icon: <FaTrophy className="text-yellow-400" />,
      category: "Competition"
    },
    {
      title: "Math for AI",
      fullName: "Mathematics for Artificial Intelligence",
      issuer: "Academic Program",
      date: "2023",
      icon: <FaCode className="text-red-400" />,
      category: "Academic"
    },
    {
      title: "JS Bootcamp",
      fullName: "JavaScript Certification",
      issuer: "Lets Upgrade",
      date: "2022",
      icon: <FaCertificate className="text-cyan-400" />,
      category: "Programming"
    },
    {
      title: "FOSS 23",
      fullName: "Free and Open Source Software",
      issuer: "NITC",
      date: "2022",
      icon: <SiOpensourcehardware className="text-cyan-400" />,
      category: "Programming"
    }
  ];

  return (
    <section id="certifications" className="py-16 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-300 mb-2">Certifications</h2>
          <p className="text-xl text-gray-300">Validated expertise across multiple domains</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
       {certifications.map((cert, index) => (
  <div
    key={index}
    className={`p-5 rounded-xl border transition-all ${
      cert.highlight
        ? "bg-gradient-to-br from-gray-900 to-gray-800 border-green-400/50 shadow-lg hover:shadow-green-400/20"
        : "bg-gray-800/50 border-gray-700 hover:border-green-300/30"
    }`}
  >
    <div className="flex items-start">
      {/* Image container - replaces icon */}
      <div className="mr-4 w-16 h-16 flex-shrink-0">
        {cert.image ? (
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-full object-contain rounded"
          />
        ) : (
          <div className="w-full h-full bg-gray-700 rounded flex items-center justify-center">
            {cert.icon}
          </div>
        )}
      </div>
      <div>
        <h3 className={`font-bold ${
          cert.highlight ? "text-white" : "text-gray-300"
        }`}>
          {cert.title}
        </h3>
        <p className="text-sm mt-1 text-gray-400">
          {cert.issuer}
        </p>
        {cert.highlight && (
          <span className="inline-block mt-2 px-2 py-1 text-xs bg-green-900/30 text-green-300 rounded-full border border-green-400/20">
            Professional Certification
          </span>
        )}
      </div>
    </div>
  </div>
))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-2 bg-green-600/20 hover:bg-green-600/30 border border-green-400/50 rounded-lg text-green-300 transition-colors">
            View All Credentials
          </button>
        </div>
      </div>
    </section>
  );
}
