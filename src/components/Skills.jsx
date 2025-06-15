import { FiCode, FiShield, FiTool, FiLock, FiCpu, FiServer, FiDatabase } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming & Development (2+ years)",
      icon: <FiCode className="text-blue-400" size={24} />,
      skills: [
        { name: "Python", tags: ["Tooling", "Scripting", "Flask APIs", "Security Automation"] },
        { name: "C++", tags: ["System Programming", "Performance Optimization"] },
        { name: "Bash Scripting", tags: ["DevOps Automation", "System Monitoring"] },
        { name: "JavaScript", tags: ["Node.js", "Client-side Validation"] },
        { name: "Flask", tags: ["Secure Backend APIs", "Code Evaluation Server"] },
        { name: "React.js", tags: ["Frontend for Code Platform", "Portfolio Website UI"] },
        { name: "Node.js", tags: ["Backend Logic", "Real-time Execution Engine"] },
        { name: "Express.js", tags: ["REST APIs", "Code Execution Backend"] },
      ]
    },
    {
      title: "Offensive Security (2+ years)",
      icon: <FiShield className="text-red-400" size={24} />,
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
      icon: <FiTool className="text-green-400" size={24} />,
      skills: [
        { name: "Burp Suite Pro", tags: ["Custom Scanning Profiles", "Intruder Payloads"] },
        { name: "Metasploit Framework", tags: ["Post-Exploitation", "Payload Customization"] },
        { name: "Wireshark", tags: ["Protocol Dissection", "Traffic Anomalies"] },
        { name: "Nmap", tags: ["Port Scanning", "Service Fingerprinting"] },
        { name: "SQLMap", tags: ["Exploiting SQL injection flaws"] },
        { name: "Nessus", tags: ["Security Scanning", "Discovers any vulnerabilities"] },
      ]
    },
    {
      title: "Data Structures & Algorithms (1.5+ years)",
      icon: <FiCpu className="text-yellow-400" size={24} />,
      skills: [
        { name: "C++", tags: ["OOPs", "STL", "Time & Space Optimization"] },
        { name: "Problem Solving", tags: ["LeetCode", "Codeforces", "Competitive Programming"] },
        { name: "Algorithms", tags: ["Greedy", "DP", "Graph Theory", "Backtracking"] }
      ]
    },
    {
      title: "Execution Platform Infrastructure",
      icon: <FiServer className="text-orange-400" size={24} />,
      skills: [
        { name: "RabbitMQ", tags: ["Task Queues", "Asynchronous Job Handling"] },
        { name: "Redis", tags: ["Caching", "Session Management", "Queue Storage"] },
        { name: "Flask + Node.js", tags: ["Microservices Coordination", "Job Dispatching"] },
        { name: "Docker", tags: ["Isolated Execution Environment", "Containerized Workers"] }
      ]
    },
    {
      title: "Machine Learning & Data Science (1.5+ years)",
      icon: <FiCpu className="text-pink-400" size={24} />,
      skills: [
        { name: "Scikit-learn", tags: ["Supervised Learning", "Model Evaluation"] },
        { name: "Pandas & NumPy", tags: ["Data Cleaning", "Feature Engineering"] },
        { name: "Matplotlib & Seaborn", tags: ["Data Visualization", "Exploratory Analysis"] },
        { name: "Jupyter Notebook", tags: ["Prototyping", "Research Workflows"] },
        { name: "ML Projects", tags: ["Anomaly Detection", "Threat Pattern Analysis"] }
      ]
    },
    {
      title: "Databases & Storage Systems",
      icon: <FiDatabase className="text-teal-400" size={24} />,
      skills: [
        { name: "MySQL", tags: ["Relational Modeling", "Stored Procedures"] },
        { name: "PostgreSQL", tags: ["Advanced Queries", "Security Policies", "JSON Support"] },
        { name: "MongoDB", tags: ["NoSQL Document Storage", "Flexible Schema", "Query Optimization"] }
      ]
    },
    {
      title: "Operating Systems (3+ years)",
      icon: <FiLock className="text-purple-400" size={24} />,
      skills: [
        { name: "Windows 11", tags: ["User Access Control", "Active Directory", "Defender for Endpoint"] },
        { name: "Ubuntu", tags: ["System Hardening", "Firewall (UFW)", "Server Hosting on GCP"] },
        { name: "Kali Linux", tags: ["Offensive Toolset", "Red Team Ops", "GCP Security Command Center"] }
      ]
    },
    {
      title: "Cloud (1+ years)",
      icon: <FiLock className="text-purple-400" size={24} />,
      skills: [
        { name: "AWS", tags: ["IAM", "S3 Bucket", "RDS", "Servers"] },
        { name: "GCP", tags: ["Google Cloud Security Command Center"] }
      ]
    },
    {
      title: "Defensive Security (2+ years)",
      icon: <FiLock className="text-purple-400" size={24} />,
      skills: [
        { name: "IDS/IPS", tags: ["Snort Rules", "Suricata Alerts"] },
        { name: "Firewalls", tags: ["pfSense Config", "iptables Hardening"] }
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-green-400 mb-4 tracking-tight">
            Technical Expertise
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Cutting-edge skills honed through real-world projects and offensive security research
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800/70 border border-gray-700 rounded-xl shadow-lg hover:shadow-green-500/20 hover:border-green-400/50 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="p-6 border-b border-gray-700 flex items-center">
                <div className="mr-4 p-3 bg-gray-900 rounded-full shadow-inner">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-100">{category.title}</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>
                      <h4 className="font-medium text-gray-100">{skill.name}</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {skill.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs bg-green-500/20 text-green-300 px-2.5 py-1 rounded-full border border-green-500/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-200">Additional Technologies</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Docker", "Git", "PowerShell", "Linux Shell", "Visual Studio Code", "GitHub Actions",
              "Makefile", "tmux", "Netcat", "curl / wget", "Vim", "GDB", "Terraform", "Cloud SDK (gcloud / aws-cli)"
            ].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, backgroundColor: "#10B981" }}
                className="px-4 py-2 bg-gray-800 rounded-full border border-gray-700 text-sm text-gray-200 hover:text-white transition-colors duration-200"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
