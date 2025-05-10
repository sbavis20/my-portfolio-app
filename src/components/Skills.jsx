export default function Skills() {
  const skillCategories = [
    {
      title: "Programming & Scripting",
      icon: "💻",
      skills: [
        { name: "Python", icon: "🐍", tags: ["OOP", "Automation", "Tool Dev"] },
        { name: "C++", icon: "➕", tags: ["DSA", "System Programming"] },
        { name: "Bash", icon: "🐚", tags: ["CLI", "Automation"] },
        { name: "JavaScript", icon: "📜", tags: ["Web Security", "Node.js"] }
      ]
    },
    {
      title: "Penetration Testing",
      icon: "🔓",
      skills: [
        { name: "Web App Testing", icon: "🕸️", tags: ["OWASP Top 10", "APIs"] },
        { name: "Network Pentesting", icon: "📡", tags: ["Protocols", "Traffic Analysis"] },
        { name: "Cloud Security", icon: "☁️", tags: ["AWS", "Azure", "GCP"] },
        { name: "Red Teaming", icon: "🟥", tags: ["Lateral Movement", "Persistence"] }
      ]
    },
    {
      title: "Security Tools",
      icon: "🛠️",
      skills: [
        { name: "Burp Suite", icon: "🔍", tags: ["Extensions", "Scanner"] },
        { name: "Metasploit", icon: "💣", tags: ["Exploits", "Post-Exploit"] },
        { name: "Wireshark", icon: "👁️", tags: ["PCAP", "Decryption"] },
        { name: "Nmap", icon: "🗺️", tags: ["Scanning", "Scripting"] }
      ]
    },
    {
      title: "Defensive Security",
      icon: "🛡️",
      skills: [
        { name: "SIEM", icon: "📊", tags: ["Splunk", "QRadar"] },
        { name: "IDS/IPS", icon: "🚨", tags: ["Snort", "Suricata"] },
        { name: "Firewalls", icon: "🔥", tags: ["pfSense", "iptables"] },
        { name: "EDR", icon: "🖥️", tags: ["CrowdStrike", "Defender"] }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-2 text-center text-green-300">
          Technical Arsenal
        </h2>
        <p className="text-xl font-medium mb-12 text-center text-gray-300">
          Tools & Technologies I Work With
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-5 hover:border-green-400/50 transition-all"
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-start group">
                    <span className="text-2xl mr-3 mt-1 group-hover:text-green-300 transition-colors">
                      {skill.icon}
                    </span>
                    <div>
                      <h4 className="font-medium">{skill.name}</h4>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {skill.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs bg-gray-700/70 px-2 py-0.5 rounded-full border border-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tools Section */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-center mb-6 text-green-300">
            Additional Tools & Platforms
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Kali Linux", icon: "🐉" },
              { name: "Ubuntu", icon: "🐧" },
              { name: "Windows Security", icon: "🪟" },
              { name: "Docker", icon: "🐳" },
              { name: "Git", icon: "📌" },
              { name: "SQLmap", icon: "🗃️" },
              { name: "Nessus", icon: "🔎" },
              { name: "Zeek", icon: "👀" }
            ].map((tool, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-800/40 px-4 py-2 rounded-full border border-gray-700 hover:border-green-300/50 transition-colors"
              >
                <span className="mr-2">{tool.icon}</span>
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
