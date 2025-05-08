import { FaCircle } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-2 text-center text-green-300">
          Professional Journey
        </h2>
        <h3 className="text-xl font-medium mb-12 text-center text-gray-300">
          Security Expertise Timeline
        </h3>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side - Current Position */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-2xl border-l-4 border-green-400 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-green-400/10 blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-white">
                      KrtrimaIQ Cognitive Solutions
                    </h4>
                    <p className="text-green-300 mt-1">MAY 2025 – Present</p>
                    <p className="text-xl font-semibold mt-2">Cyber Security Analyst</p>
                  </div>
                  <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full text-sm flex items-center">
                    <FaCircle className="animate-pulse mr-2" size={8} />
                    Current Role
                  </span>
                </div>

                <div className="mt-6 space-y-6 pl-6 border-l-2 border-green-400/30">
                  {/* Main bullet with connected sub-bullets */}
                  <div className="relative">
                    <div className="absolute -left-[26px] top-[9px] w-3 h-3 bg-green-400 rounded-full"></div>
                    <h5 className="font-bold text-lg">Pentesting Leadership</h5>
                    <p className="text-gray-300 mt-1 pl-4 relative before:absolute before:left-0 before:top-[11px] before:w-2 before:h-2 before:bg-green-400 before:rounded-full">
                      Identified 50+ critical vulnerabilities across web/AI systems
                    </p>
                    <p className="text-gray-300 mt-1 pl-4 relative before:absolute before:left-0 before:top-[11px] before:w-2 before:h-2 before:bg-green-400 before:rounded-full">
                      Conducted 15+ comprehensive security assessments
                    </p>
                  </div>

                  {/* Second main bullet */}
                  <div className="relative">
                    <div className="absolute -left-[26px] top-[9px] w-3 h-3 bg-green-400 rounded-full"></div>
                    <h5 className="font-bold text-lg">Threat Detection</h5>
                    <p className="text-gray-300 mt-1 pl-4 relative before:absolute before:left-0 before:top-[11px] before:w-2 before:h-2 before:bg-green-400 before:rounded-full">
                      Reduced incident response time by 35% with custom SIEM rules
                    </p>
                    <p className="text-gray-300 mt-1 pl-4 relative before:absolute before:left-0 before:top-[11px] before:w-2 before:h-2 before:bg-green-400 before:rounded-full">
                      Developed 20+ detection signatures for emerging threats
                    </p>
                  </div>

                  {/* Third main bullet */}
                  <div className="relative">
                    <div className="absolute -left-[26px] top-[9px] w-3 h-3 bg-green-400 rounded-full"></div>
                    <h5 className="font-bold text-lg">Security Tools</h5>
                    <div className="flex flex-wrap gap-2 mt-2 pl-4">
                      {['Splunk', 'Burp Suite', 'Wireshark', 'Metasploit', 'Snort'].map(tool => (
                        <span key={tool} className="bg-gray-700 px-2 py-1 rounded text-xs">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Timeline */}
          <div className="lg:w-1/2 w-full relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400/30 to-transparent"></div>

            {/* Timeline Entry 1 */}
            <div className="relative pb-12 group">
              <div className="absolute -left-1 top-1 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-800 z-10"></div>
              <div className="absolute -left-1 top-1 w-3 h-3 rounded-full bg-green-400/30 animate-ping z-0"></div>

              <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700/50">
                <h4 className="text-lg font-bold">KrtrimaIQ (Contract)</h4>
                <p className="text-green-300 text-sm mt-1">JAN 2025 – APR 2025</p>
                <p className="text-md font-semibold mt-1 mb-3">Security Engineer</p>

                <div className="space-y-4 pl-4 border-l-2 border-green-400/30">
                  <div className="relative">
                    <div className="absolute -left-[22px] top-[9px] w-2 h-2 bg-green-400 rounded-full"></div>
                    <h5 className="font-medium">Automation</h5>
                    <p className="text-gray-300 mt-1 pl-4 relative before:absolute before:left-0 before:top-[11px] before:w-2 before:h-2 before:bg-green-400 before:rounded-full">
                      Automated vulnerability scanning pipeline (60% time savings)
                    </p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[22px] top-[9px] w-2 h-2 bg-green-400 rounded-full"></div>
                    <h5 className="font-medium">Team Exercises</h5>
                    <p className="text-gray-300 mt-1 pl-4 relative before:absolute before:left-0 before:top-[11px] before:w-2 before:h-2 before:bg-green-400 before:rounded-full">
                      Conducted purple team exercises improving detection rates
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Entry 2 */}
            <div className="relative pb-4 group">
              <div className="absolute -left-1 top-1 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-800 z-10"></div>
              <div className="absolute -left-1 top-1 w-3 h-3 rounded-full bg-green-400/30 animate-ping z-0"></div>

              <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700/50">
                <h4 className="text-lg font-bold">NITC Research</h4>
                <p className="text-green-300 text-sm mt-1">2023 – 2024</p>
                <p className="text-md font-semibold mt-1 mb-3">Security Researcher</p>

                <div className="space-y-4 pl-4 border-l-2 border-green-400/30">
                  <div className="relative">
                    <div className="absolute -left-[22px] top-[9px] w-2 h-2 bg-green-400 rounded-full"></div>
                    <h5 className="font-medium">Research</h5>
                    <p className="text-gray-300 mt-1 pl-4 relative before:absolute before:left-0 before:top-[11px] before:w-2 before:h-2 before:bg-green-400 before:rounded-full">
                      Published paper on ML-based anomaly detection (98% accuracy)
                    </p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[22px] top-[9px] w-2 h-2 bg-green-400 rounded-full"></div>
                    <h5 className="font-medium">Development</h5>
                    <p className="text-gray-300 mt-1 pl-4 relative before:absolute before:left-0 before:top-[11px] before:w-2 before:h-2 before:bg-green-400 before:rounded-full">
                      Developed custom IDS rules detecting zero-day patterns
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
