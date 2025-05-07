import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-2 text-center text-green-300">Professional Experience</h2>
        <h3 className="text-xl font-medium mb-12 text-center text-gray-300">1.5+ Years of Security Expertise</h3>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left Side - Visual Portfolio */}
          <div className="lg:w-1/2 w-full h-full flex items-center">
            <div className="w-full h-[500px] rounded-xl overflow-hidden border-2 border-green-300/30 shadow-2xl relative">
              <img
                src="/imgs/cloud_map.png"
                alt="Security Visualization"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-green-300/10 to-gray-900/80 flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Cloud Map Penetesting</h3>

                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Experience Slider */}
          <div className="lg:w-1/2 w-full h-[500px]">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
              modules={[Autoplay]}
              loop={true}
              className="h-full"
            >
              {/* Current Position */}
              <SwiperSlide>
                <div className="bg-gray-900/70 backdrop-blur-sm p-6 rounded-xl h-full border-l-4 border-green-300 shadow-lg flex flex-col">
                  <div className="mb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold">KrtrimaIQ Cognitive Solutions</h3>
                        <p className="text-green-300">MAY 2025 - Present</p>
                        <p className="text-lg font-semibold mt-1">Cyber Security Analyst</p>
                      </div>
                      <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full text-sm">Current</span>
                    </div>
                  </div>
                  <ul className="space-y-3 list-disc list-inside text-gray-300 flex-grow">
                    <li className="hover:text-white transition-colors">
                      <span className="font-medium">Pentesting:</span> Identified 50+ vulnerabilities (SQLi, XSS, RCE) across 15+ web/AI systems
                    </li>
                    <li className="hover:text-white transition-colors">
                      <span className="font-medium">Threat Detection:</span> Reduced incident response time by 35% through custom SIEM rules
                    </li>
                    <li className="hover:text-white transition-colors">
                      <span className="font-medium">Compliance:</span> Implemented DPDPA 2023 controls reducing compliance risks by 60%
                    </li>
                    <li className="hover:text-white transition-colors">
                      <span className="font-medium">Tools:</span> Splunk · Burp Suite · Wireshark · Metasploit · Snort
                    </li>
                  </ul>
                </div>
              </SwiperSlide>

              {/* Previous Position */}
              <SwiperSlide>
                <div className="bg-gray-900/70 backdrop-blur-sm p-6 rounded-xl h-full shadow-lg flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold">KrtrimaIQ (Contract)</h3>
                    <p className="text-green-300">JAN 2025 - APR 2025</p>
                    <p className="text-lg font-semibold mt-1">Security Engineer</p>
                  </div>
                  <ul className="space-y-3 list-disc list-inside text-gray-300 flex-grow">
                    <li className="hover:text-white transition-colors">
                      Automated vulnerability scanning pipeline (60% time savings)
                    </li>
                    <li className="hover:text-white transition-colors">
                      Conducted purple team exercises improving detection rates
                    </li>
                    <li className="hover:text-white transition-colors">
                      Developed security training materials for engineering teams
                    </li>
                  </ul>
                </div>
              </SwiperSlide>

              {/* Research Experience */}
              <SwiperSlide>
                <div className="bg-gray-900/70 backdrop-blur-sm p-6 rounded-xl h-full shadow-lg flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold">NITC Research</h3>
                    <p className="text-green-300">2023-2024</p>
                    <p className="text-lg font-semibold mt-1">Security Researcher</p>
                  </div>
                  <ul className="space-y-3 list-disc list-inside text-gray-300 flex-grow">
                    <li className="hover:text-white transition-colors">
                      Published paper on ML-based anomaly detection (98% accuracy)
                    </li>
                    <li className="hover:text-white transition-colors">
                      Developed custom IDS rules detecting zero-day patterns
                    </li>
                    <li className="hover:text-white transition-colors">
                      Mentored 50+ students in security fundamentals
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
