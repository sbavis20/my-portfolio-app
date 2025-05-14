import { FiCode, FiShield, FiTool, FiServer, FiCpu, FiLock } from 'react-icons/fi';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming & Development",
      icon: <FiCode className="text-blue-500" size={20} />,
      skills: [
        { name: "Python", tags: ["Automation", "Tool Development"] },
        { name: "C++", tags: ["System Programming", "DSA"] },
        { name: "Bash Scripting", tags: ["CLI Tools", "Automation"] },
        { name: "JavaScript", tags: ["Web Security", "Node.js"] }
      ]
    },
    {
      title: "Offensive Security",
      icon: <FiShield className="text-red-500" size={20} />,
      skills: [
        { name: "Web App Pentesting", tags: ["OWASP Top 10", "API Security"] },
        { name: "Network Pentesting", tags: ["Protocol Analysis", "Traffic Inspection"] },
        { name: "Cloud Security", tags: ["AWS", "Azure", "GCP"] },
        { name: "Red Teaming", tags: ["Adversary Simulation"] }
      ]
    },
    {
      title: "Security Tools",
      icon: <FiTool className="text-green-500" size={20} />,
      skills: [
        { name: "Burp Suite Pro", tags: ["Advanced Scanning"] },
        { name: "Metasploit Framework", tags: ["Exploit Development"] },
        { name: "Wireshark", tags: ["Packet Analysis"] },
        { name: "Nmap", tags: ["Network Discovery"] }
      ]
    },
    {
      title: "Defensive Security",
      icon: <FiLock className="text-purple-500" size={20} />,
      skills: [
        { name: "SIEM Solutions", tags: ["Splunk", "QRadar"] },
        { name: "IDS/IPS", tags: ["Snort", "Suricata"] },
        { name: "Firewalls", tags: ["pfSense", "iptables"] },
        { name: "EDR Solutions", tags: ["CrowdStrike", "Defender ATP"] }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-400 mb-2">Technical Expertise</h2>
          <p className="text-lg text-gray-400">Professional skills across security domains</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-lg hover:border-green-400/30 transition-all"
            >
              <div className="p-5 border-b border-gray-700 flex items-center">
                <div className="mr-3 p-2 bg-gray-700 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="font-medium">{category.title}</h3>
              </div>
              <div className="p-5">
                <ul className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>
                      <h4 className="font-medium text-gray-100">{skill.name}</h4>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {skill.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs bg-gray-700/80 text-gray-300 px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16">
          <div className="text-center mb-6">
            <h3 className="text-xl font-medium text-gray-300">Additional Technologies</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[
              "Kali Linux", "Ubuntu Server", "Windows Defender",
              "Docker", "Git", "SQLmap", "Nessus", "Zeek",
              "BloodHound", "Impacket", "PowerShell", "Ansible"
            ].map((tool, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-sm hover:bg-gray-700/50 transition-colors"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
