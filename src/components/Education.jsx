import nitclogo from "/imgs/nitc_logo.png";
import suplogo from "/imgs/SUP_logo.png";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-2 text-center text-green-300">Education</h2>
        <h3 className="text-xl font-medium mb-12 text-center text-gray-400">Academic Background</h3>

        <div className="relative border-l border-green-400/30 pl-6">
          {/* NIT Calicut */}
          <div className="mb-12 relative pl-6">
            <div className="absolute -left-3 top-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white"></div>
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <img src={nitclogo} alt="NITC Logo" className="w-16 h-16 rounded-full border border-green-500 shadow-lg" />
              <div>
                <h4 className="text-xl font-bold text-white">National Institute of Technology Calicut</h4>
                <p className="text-green-300 font-medium">Master of Technology</p>
                <p className="text-gray-300 text-sm">August 2022 – September 2024</p>
                <div className="mt-2 text-gray-300 space-y-1">
                  <p><span className="font-semibold">Major:</span> Computer Science and Information Security</p>
                  <p><span className="font-semibold">Minor:</span> Information Security</p>
                  <p><span className="font-semibold">CGPA:</span> 8.06</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pune University */}
          <div className="mb-4 relative pl-6">
            <div className="absolute -left-3 top-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white"></div>
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <img src={suplogo} alt="SPPU Logo" className="w-16 h-16 rounded-full border border-green-500 shadow-lg" />
              <div>
                <h4 className="text-xl font-bold text-white">Savitribai Phule Pune University</h4>
                <p className="text-green-300 font-medium">Bachelor of Technology</p>
                <p className="text-gray-300 text-sm">August 2015 – June 2019</p>
                <div className="mt-2 text-gray-300 space-y-1">
                  <p><span className="font-semibold">Major:</span> Computer Science and Engineering</p>
                  <p><span className="font-semibold">CGPA:</span> 7.33</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
