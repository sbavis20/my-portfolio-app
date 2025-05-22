import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaShieldAlt, FaFlask, FaLaptopCode } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-2 text-center text-green-300">
          Professional Journey
        </h2>
        <h3 className="text-xl font-medium mb-12 text-center text-gray-300">
          Security Expertise Timeline
        </h3>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(16, 185, 129)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid rgb(16, 185, 129)' }}
            date="May 2025 – Present"
            iconStyle={{ background: 'rgb(16, 185, 129)', color: '#fff' }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title font-bold text-white">Cyber Security Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle text-white">KrtrimaIQ Cognitive Solutions</h4>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-white">
              <li><strong>Pentesting Leadership:</strong> Identified 50+ critical vulnerabilities and conducted 15+ assessments</li>
              <li><strong>Threat Detection:</strong> Reduced response time by 35%, developed 20+ detection signatures</li>
              <li><strong>Security Tools:</strong> Splunk, Burp Suite, Wireshark, Metasploit, Snort</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2025 – Apr 2025"
            iconStyle={{ background: 'rgb(34, 197, 94)', color: '#fff' }}
            icon={<FaShieldAlt />}
          >
            <h3 className="vertical-timeline-element-title font-bold text-white">Security Engineer (Contract)</h3>
            <h4 className="vertical-timeline-element-subtitle text-white">KrtrimaIQ</h4>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-white">
              <li><strong>Automation:</strong> Implemented automated vulnerability scanning saving 60% time</li>
              <li><strong>Team Exercises:</strong> Led purple team exercises enhancing detection</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2023 – 2024"
            iconStyle={{ background: 'rgb(236, 72, 153)', color: '#fff' }}
            icon={<FaFlask />}
          >
            <h3 className="vertical-timeline-element-title font-bold text-white">Security Researcher</h3>
            <h4 className="vertical-timeline-element-subtitle text-white">NITC Research</h4>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-white">
              <li><strong>Research:</strong> Published ML-based anomaly detection paper (98% accuracy)</li>
              <li><strong>Development:</strong> Created custom IDS rules for zero-day threat detection</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}
