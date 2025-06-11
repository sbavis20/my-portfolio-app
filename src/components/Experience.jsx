import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaShieldAlt, FaUserSecret, FaLaptopCode } from 'react-icons/fa';

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

        <VerticalTimeline layout="1-column-left" lineColor="#10b981">
          {/* Current Position */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: 'rgba(17, 24, 39, 0.7)',
              borderTop: '4px solid #10b981',
              boxShadow: '0 4px 20px rgba(16, 185, 129, 0.15)',
              backdropFilter: 'blur(8px)'
            }}
            contentArrowStyle={{ borderRight: '7px solid rgba(17, 24, 39, 0.7)' }}
            date="MAY 2025 – Present"
            dateClassName="text-green-300"
            iconStyle={{ background: '#10b981', color: '#fff' }}
            icon={<FaShieldAlt />}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-white">KrtrimaIQ Cognitive Solutions</h3>
                <h4 className="text-lg font-semibold text-green-300">Cyber Security Analyst</h4>
              </div>
              <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full text-sm">
                Current Role
              </span>
            </div>

            <div className="mt-4 space-y-4">
              <div>
                <h5 className="font-bold text-gray-100">Application & AI Security</h5>
                <ul className="mt-1 ml-4 space-y-1 text-gray-300">
                  <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-green-400 before:rounded-full">
                   Conducted penetration tests on web apps and AI systems, uncovering critical vulnerabilities (SQLi, XSS, CSRF, IDOR, RCE) and guiding remediation thus improving security posture by 67%.
                  </li>
                  <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-green-400 before:rounded-full">
                    Executed firewalls,IDS/IPS and Endpoint Security solutions to reduce malicious attacks by 79%.
                  </li>
                   <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-green-400 before:rounded-full">
                    Performed manual code reviews (Python, JavaScript) and automated scans (Burp, OWASP ZAP) to identify security flaws in development pipelines.
                  </li>
                  <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-green-400 before:rounded-full">
                    Led phishing simulations using GoPhish, improving employee awareness and reducing click rates by 45%.
                  </li>
                  <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-green-400 before:rounded-full">
                    Directed a team to execute system hardening strategies, promoting a 55% increase in incident response efficiency.
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold text-gray-100">Network & Compliance</h5>
                <ul className="mt-1 ml-4 space-y-1 text-gray-300">
                  <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-green-400 before:rounded-full">
                    Analyzed network traffic (Wireshark, Nmap) to detect anomalies and harden infrastructure.
                  </li>
                  <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-green-400 before:rounded-full">
                    Ensured compliance with DPDPA 2023 and CERT-IN guidelines for data protection.
                  </li>
                </ul>
              </div>
                 <div>
                <h5 className="font-bold text-gray-100">Endpoint & Container Security</h5>
                <ul className="mt-1 ml-4 space-y-1 text-gray-300">
                  <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-green-400 before:rounded-full">
                      Engineered Docker sandbox environments to safely analyze malicious code (e.g., detonating suspicious scripts in isolated containers).                  </li>
                  <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-green-400 before:rounded-full">
                    Automated security policies for containerized workloads (e.g., enforcing read-only filesystems, seccomp profiles).                  </li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold text-gray-100">Security Tools</h5>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['Splunk', 'Burp Suite', 'Wireshark', 'Metasploit', 'Snort'].map(tool => (
                    <span key={tool} className="bg-gray-700 px-2 py-1 rounded text-xs">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </VerticalTimelineElement>

          {/* Contract Position */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: 'rgba(17, 24, 39, 0.7)',
              borderTop: '4px solid #3b82f6',
              boxShadow: '0 4px 20px rgba(59, 130, 246, 0.15)',
              backdropFilter: 'blur(8px)'
            }}
            contentArrowStyle={{ borderRight: '7px solid rgba(17, 24, 39, 0.7)' }}
            date="JAN 2025 – APR 2025"
            dateClassName="text-blue-300"
            iconStyle={{ background: '#3b82f6', color: '#fff' }}
            icon={<FaUserSecret />}
          >
            <h3 className="text-xl font-bold text-white">KrtrimaIQ Cognitive Solutions</h3>
            <h4 className="text-lg font-semibold text-blue-300">Cyber Security Analyst (Contract)</h4>

            <div className="mt-4 space-y-4">
              <div>
                <h5 className="font-bold text-gray-100">Automation</h5>
                <p className="text-gray-300 mt-1">
                  Automated vulnerability scanning pipeline, reducing response time by 30%.
                 </p>
                  <p className="text-gray-300 mt-1">
                  Applied advanced vulnerability scanning tools to correlate incident data, assess threat impact, and prioritize resolution, improving threat detection efficiency by 40%.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-gray-100">Team Exercises</h5>
                <p className="text-gray-300 mt-1">
                  Conducted purple team exercises improving detection rates
                </p>
               <p className="text-gray-300 mt-1">
                Delivered ongoing security awareness and incident response training, enhancing security maturity across internal teams.
                </p>
              </div>

     <div>
                <h5 className="font-bold text-gray-100">Network</h5>
                <p className="text-gray-300 mt-1">
                  Conducted purple team exercises improving detection rates
                </p>
               <p className="text-gray-300 mt-1">
                Provided consultation on the secure integration of VPN technologies into Android features, ensuring encrypted and private user connectivity.
                </p>
              </div>

            </div>
          </VerticalTimelineElement>

          {/* Research Position */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: 'rgba(17, 24, 39, 0.7)',
              borderTop: '4px solid #8b5cf6',
              boxShadow: '0 4px 20px rgba(139, 92, 246, 0.15)',
              backdropFilter: 'blur(8px)'
            }}
            contentArrowStyle={{ borderRight: '7px solid rgba(17, 24, 39, 0.7)' }}
            date="2023 – 2024"
            dateClassName="text-purple-300"
            iconStyle={{ background: '#8b5cf6', color: '#fff' }}
            icon={<FaLaptopCode />}
          >
            <h3 className="text-xl font-bold text-white">NITC Research</h3>
            <h4 className="text-lg font-semibold text-purple-300">Teaching Assistant</h4>

            <div className="mt-4 space-y-4">
              <div>
                <h5 className="font-bold text-gray-100">Cybersecurity Lab</h5>
                <p className="text-gray-300 mt-1">
                  Designed hands-on labs for vulnerability assessment (WebGoat, bWAPP) and secure coding practices.
                </p>
                   <p className="text-gray-300 mt-1">
                  Configured Snort IDS, pfSense firewalls, and Zeek for network monitoring.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-gray-100">Machine Learning & Security Research</h5>
                <p className="text-gray-300 mt-1">
                  Researched ML-driven intrusion detection using PCA, SVM, and clustering (K-means).
                </p>
              </div>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}
