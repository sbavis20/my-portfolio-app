import { FaShieldAlt, FaUserSecret, FaDatabase, FaTrophy, FaCode, FaCertificate } from 'react-icons/fa';

export default function Certifications() {
  const certifications = [
    {
      title: "CISEH",
      fullName: "Certified Information Security and Ethical Hacking",
      issuer: "EC-Council",
      date: "2024",
      icon: <FaShieldAlt className="text-green-400" />,
      category: "Security"
    },
    {
      title: "CPTE",
      fullName: "Certified Penetration Testing Expert",
      issuer: "Mile2 Security",
      date: "2023",
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
      title: "JS Bootcamp",
      fullName: "JavaScript Certification",
      issuer: "Lets Upgrade",
      date: "2022",
      icon: <FaCertificate className="text-cyan-400" />,
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
              className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-green-400/50 transition-all hover:shadow-lg hover:shadow-green-400/10"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl p-3 bg-gray-800 rounded-lg">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{cert.title}</h3>
                  <p className="text-sm text-gray-400">{cert.fullName}</p>
                  <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between">
                    <div>
                      <p className="text-xs text-gray-500">Issued by</p>
                      <p className="text-sm">{cert.issuer}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Completed</p>
                      <p className="text-sm">{cert.date}</p>
                    </div>
                  </div>
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
