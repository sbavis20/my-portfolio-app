import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';


const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Photo (Circular) */}
          <div className="w-48 h-48 md:w-56 md:h-56 flex-shrink-0">
            <div className="relative rounded-full overflow-hidden border-4 border-cyan-400 p-1">
              <img
                src="/imgs/profile-pic.jpg"  // Replace with your image path
                alt="Profile Photo"
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute inset-0 rounded-full border-2 border-white/20"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">About Me</h2>
            <p className="text-lg text-gray-300 mb-6">
              I'm a passionate developer and cybersecurity enthusiast with expertise in building secure,
              scalable applications. My MTech research focused on side-channel attack detection, and I love
              solving complex problems with elegant solutions.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:your@email.com"
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="text-xl" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Skills Highlights */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Cybersecurity", emoji: "🛡️" },
            { name: "Machine Learning", emoji: "🧠" },
            { name: "Web Development", emoji: "🌐" },
            { name: "Research", emoji: "🔍" }
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-gray-700/50 p-4 rounded-lg border border-gray-600 text-center hover:border-cyan-400 transition-colors"
            >
              <span className="text-2xl block mb-2">{skill.emoji}</span>
              <h3 className="font-medium">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
