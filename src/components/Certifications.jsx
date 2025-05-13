export default function Certifications() {
  const certifications = [
    {
      title: "Certified Information Security and Ethical Hacking (CISEH)",
      issuer: "EC-Council",
      icon: "🛡️",
      highlight: true
    },
    {
      title: "Certified Penetration Testing Expert (CPTE)",
      issuer: "Mile2",
      icon: "🔓",
      highlight: true
    },
    {
      title: "Big Data Certification",
      issuer: "Global Technologies",
      icon: "📊",
      highlight: false
    },
    {
      title: "Cyber-Disease Ethical Hacking Competition",
      issuer: "National Level",
      icon: "🏆",
      highlight: false
    },
    {
      title: "Mathematics for Artificial Intelligence 2023",
      issuer: "Academic Certification",
      icon: "🧮",
      highlight: false
    },
    {
      title: "FOSS23 Participation",
      issuer: "Open Source Community",
      icon: "🐧",
      highlight: false
    },
    {
      title: "JavaScript Bootcamp",
      issuer: "Lets Upgrade",
      icon: "📜",
      highlight: false
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-2 text-center text-green-300">
          Certifications & Achievements
        </h2>
        <p className="text-xl font-medium mb-12 text-center text-gray-300">
          Validated Security Expertise
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <span className={`text-2xl mr-4 mt-1 ${
                  cert.highlight ? "text-green-300" : "text-gray-400"
                }`}>
                  {cert.icon}
                </span>
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

        {/* Additional Recognition */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-4 text-green-300">
            Competition Achievements
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[
              "Cyber-Disease Ethical Hacking Finalist",
              "CTF Competition Participant",
              "Bug Bounty Program Recognition"
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-700/30 px-4 py-2 rounded-full border border-gray-600 hover:border-green-300/50 transition-colors"
              >
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
