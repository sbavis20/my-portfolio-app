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
                <h5 className="font-bold text-gray-100">Pentesting Leadership</h5>
                <ul className="mt-1 ml-4 space-y-1 text-gray-300">
                  <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-green-400 before:rounded-full">
                    Identified 50+ critical vulnerabilities across web/AI systems
                  </li>
                  <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-green-400 before:rounded-full">
                    Conducted 15+ comprehensive security assessments
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold text-gray-100">Threat Detection</h5>
                <ul className="mt-1 ml-4 space-y-1 text-gray-300">
                  <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-green-400 before:rounded-full">
                    Reduced incident response time by 35% with custom SIEM rules
                  </li>
                  <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-green-400 before:rounded-full">
                    Developed 20+ detection signatures for emerging threats
                  </li>
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
            <h4 className="text-lg font-semibold text-blue-300">Security Engineer (Contract)</h4>

            <div className="mt-4 space-y-4">
              <div>
                <h5 className="font-bold text-gray-100">Automation</h5>
                <p className="text-gray-300 mt-1">
                  Automated vulnerability scanning pipeline (60% time savings)
                </p>
              </div>

              <div>
                <h5 className="font-bold text-gray-100">Team Exercises</h5>
                <p className="text-gray-300 mt-1">
                  Conducted purple team exercises improving detection rates
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
            <h4 className="text-lg font-semibold text-purple-300">Security Researcher</h4>

            <div className="mt-4 space-y-4">
              <div>
                <h5 className="font-bold text-gray-100">Research</h5>
                <p className="text-gray-300 mt-1">
                  Published paper on ML-based anomaly detection (98% accuracy)
                </p>
              </div>

              <div>
                <h5 className="font-bold text-gray-100">Development</h5>
                <p className="text-gray-300 mt-1">
                  Developed custom IDS rules detecting zero-day patterns
                </p>
              </div>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}
