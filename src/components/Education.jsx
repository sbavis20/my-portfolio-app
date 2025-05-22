import Lottie from "lottie-react";
import { motion } from "framer-motion";
import nitclogo from "/imgs/nitc_logo.png";
import suplogo from "/imgs/SUP_logo.png";
import educationLottie from "/imgs/book.json";

const educationData = [
  {
    institute: "NIT Calicut",
    logo: nitclogo,
    course: "M.Tech in Computer Science & Information Security",
    years: "2022 - 2024",
    cgpa: "8.06",
    degree: "MTech",
    highlights: [
      "Specialized in Cybersecurity Research",
      "Thesis on AI-Driven Threat Detection"
    ]
  },
  {
    institute: "Pune University",
    logo: suplogo,
    course: "B.Tech in Computer Science Engineering",
    years: "2015 - 2019",
    cgpa: "7.33",
    degree: "BTech",
    highlights: [
      "Final Project on Secure Auth Systems",
      "Core CS Fundamentals"
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <Lottie animationData={educationLottie} loop={true} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500 mb-3">
            Academic Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-600 mx-auto"></div>
        </div>

        <div className="border-l-2 border-emerald-600 pl-6 space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="absolute -left-[13px] w-6 h-6 rounded-full bg-emerald-500 border-4 border-gray-950"></div>
              <div className="bg-gray-800/70 p-6 rounded-xl border border-gray-700 shadow-md hover:shadow-emerald-500/30 transition-all backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={edu.logo}
                      alt={edu.institute}
                      className="w-16 h-16 rounded-lg border border-gray-600 bg-white p-1 object-contain shadow-md"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-xs font-bold px-2 py-1 rounded-full">
                      {edu.degree}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{edu.institute}</h3>
                    <p className="text-emerald-300 text-sm mt-1">{edu.course}</p>
                    <p className="text-gray-400 text-sm mt-1">{edu.years} | CGPA: {edu.cgpa}</p>
                  </div>
                </div>
                <ul className="mt-4 list-disc list-inside text-gray-300 text-sm space-y-1">
                  {edu.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
