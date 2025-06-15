import { FiCode, FiShield, FiTool, FiServer, FiCpu, FiLock } from 'react-icons/fi';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming & Development (2+ years)",
      icon: <FiCode className="text-blue-500" size={20} />,
      skills: [
        { name: "Python", tags: ["Tooling", "Scripting", "Flask APIs", "Security Automation"] },
        { name: "C++", tags: ["System Programming", "Performance Optimization"] },
        { name: "Bash Scripting", tags: ["DevOps Automation", "System Monitoring"] },
        { name: "JavaScript", tags: ["Node.js", "Client-side Validation"] },
        { name: "Flask", tags: ["Secure Backend APIs", "Code Evaluation Server"] }
      ]
    },
    {
      title: "Offensive Security (2+ years)",
      icon: <FiShield className="text-red-500" size={20} />,
      skills: [
        { name: "Web App Pentesting", tags: ["OWASP Top 10", "Auth Bypass", "Custom Exploit Scripting"] },
        { name: "Network Pentesting", tags: ["MITM Attacks", "Protocol Analysis"] },
        { name: "Cloud Security", tags: ["AWS IAM Misconfigurations", "GCP Pentesting"] },
        { name: "Red Teaming", tags: ["Adversary Simulation", "Vulnerability Assessment"] },
        { name: "Secure Code Engine Dev", tags: ["Live Evaluation Sandbox", "Flask", "SecComp Filters"] }
      ]
    },
    {
      title: "Security Tools (2+ years)",
      icon: <FiTool className="text-green-500" size={20} />,
      skills: [
        { name: "Burp Suite Pro", tags: ["Custom Scanning Profiles", "Intruder Payloads"] },
        { name: "Metasploit Framework", tags: ["Post-Exploitation", "Payload Customization"] },
        { name: "Wireshark", tags: ["Protocol Dissection", "Traffic Anomalies"] },
        { name: "Nmap", tags: ["Port Scanning", "Service Fingerprinting"] },
        { name: "SQLMap",tags:["Wxploiting SQL injection flaws"]},
        { name: "Nessus", tags: ["Security  Scanning", "Discovers any vulnerabilities "] },
      ]
    },
    {
      title: "Defensive Security (2+ years)",
      icon: <FiLock className="text-purple-500" size={20} />,
      skills: [
        { name: "IDS/IPS", tags: ["Snort Rules", "Suricata Alerts"] },
        { name: "Firewalls", tags: ["pfSense Config", "iptables Hardening"] }
      ]
    },
    {
      title: "Cloud (1+ years)",
      icon: <FiLock className="text-purple-500" size={20} />,
      skills: [
        { name: "AWS", tags: ["IAM"] },
        { name: "GCP", tags: ["pfSense Google Cloud Security Command Center"] }
      ]
    },
{
  title: "Operating Systems (3+ years)",
  icon: <FiLock className="text-purple-500" size={20} />,
  skills: [
    { name: "Windows 11", tags: ["User Access Control", "Active Directory", "Defender for Endpoint"] },
    { name: "Ubuntu", tags: ["System Hardening", "Firewall (UFW)", "Server Hosting on GCP"] },
    { name: "Kali Linux", tags: ["Offensive Toolset", "Red Team Ops", "GCP Security Command Center"] }
  ]
},
{
  title: "Data Structures & Algorithms (1.5+ years)",
  icon: <FiCpu className="text-yellow-400" size={20} />,
  skills: [
    { name: "C++", tags: ["OOPs", "STL", "Time & Space Optimization"] },
    { name: "Problem Solving", tags: ["LeetCode", "Codeforces", "Competitive Programming"] },
    { name: "Algorithms", tags: ["Greedy", "DP", "Graph Theory", "Backtracking"] }
  ]
}


  ];

  return (
    <section id="skills" className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-400 mb-2">Technical Expertise</h2>
          <p className="text-lg text-gray-400">Expertise built through real-world projects and offensive security research</p>
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
  "Docker",              // Containerization for app deployment
  "Git",                 // Version control and collaboration
  "PowerShell",          // Scripting for Windows automation
  "Linux Shell",         // Bash & CLI utilities
  "Visual Studio Code",  // Lightweight coding and debugging
  "GitHub Actions",      // CI/CD for automation workflows
  "Makefile",            // Task automation and build management
  "tmux",                // Terminal multiplexing for efficiency
  "Netcat",              // Network debugging & exploitation
  "curl / wget",         // Web request tools for testing
  "Vim",                 // Terminal-based code editing
  "GDB",                 // Debugging low-level C/C++ programs
  "Terraform",           // IaC for secure infrastructure (cloud)
  "Cloud SDK (gcloud / aws-cli)" // Cloud infrastructure automation
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
