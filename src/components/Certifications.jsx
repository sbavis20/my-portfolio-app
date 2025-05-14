import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Certifications() {
  const certifications = [
    {
      title: "Certified Information Security and Ethical Hacking (CISEH)",
      issuer: "EC-Council",
      date: "2024",
      image: "/certs/ciseh.jpg",
      icon: "🛡️"
    },
    {
      title: "Certified Penetration Testing Expert (CPTE)",
      issuer: "Mile2 Security",
      date: "2023",
      image: "/certs/cpte.jpg",
      icon: "🔓"
    },
    {
      title: "Big Data Certification",
      issuer: "Global Technologies",
      date: "2023",
      image: "/certs/bigdata.jpg",
      icon: "📊"
    },
    {
      title: "Cyber-Disease Ethical Hacking",
      issuer: "National Competition",
      date: "2023",
      image: "/certs/cyber-disease.jpg",
      icon: "🏆"
    },
    {
      title: "Mathematics for AI",
      issuer: "Academic Program",
      date: "2023",
      image: "/certs/math-ai.jpg",
      icon: "🧮"
    },
    {
      title: "JavaScript Bootcamp",
      issuer: "Lets Upgrade",
      date: "2022",
      image: "/certs/js-bootcamp.jpg",
      icon: "📜"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-2 text-center text-green-300">
          Certifications
        </h2>
        <p className="text-xl font-medium mb-12 text-center text-gray-300">
          Validated Security Expertise
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          loop={true}
          className="pb-12"
        >
          {certifications.map((cert, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-green-400/50 transition-all h-full flex flex-col">
                {/* Certification Image */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
                  <span className="absolute top-4 right-4 text-3xl bg-gray-900/80 p-2 rounded-lg">
                    {cert.icon}
                  </span>
                </div>

                {/* Certification Details */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <div className="mt-auto">
                    <div className="flex justify-between text-sm text-gray-400 mb-3">
                      <span>Issued by: <span className="text-gray-300">{cert.issuer}</span></span>
                      <span>Year: <span className="text-gray-300">{cert.date}</span></span>
                    </div>
                    <button className="w-full py-2 bg-green-600/20 hover:bg-green-600/30 border border-green-400/50 rounded-lg text-green-300 transition-colors flex items-center justify-center">
                      View Credential
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Verification Note */}
        <div className="text-center mt-8 text-sm text-gray-400">
          <p>All certifications are verifiable through official channels</p>
        </div>
      </div>
    </section>
  );
}
