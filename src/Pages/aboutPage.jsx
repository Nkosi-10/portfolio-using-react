import image2 from '../assets/image2.jpg';
import Vision from '../components/vision';
import { Mail, Github, Linkedin, Code } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const skills = [
  'Python', 'JavaScript', 'React.js', 'C++', 'PHP', 'SQL', 'Tailwind CSS', 'Node.js', 'Git', 'Linux'
];

const AboutPage = () => {
  const { isDark } = useTheme();

  return (
    <section id="about" className="relative overflow-visible w-full py-8 sm:py-12 px-4">
      {/* Glassy Card */}
      <div className={`max-w-4xl w-full mx-auto backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-2xl border p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center relative z-10 ${
        isDark 
          ? 'bg-white/10 border-blue-500/20' 
          : 'bg-white/80 border-blue-200/50'
      }`}>
        {/* Profile Image */}
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-blue-500 blur-lg opacity-60 animate-spin-slow"></div>
            <img
              src={image2}
              alt="Nkosi Khumalo"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover object-top rounded-full border-4 border-blue-400/40 shadow-xl relative z-10"
              style={{ background: '#222' }}
            />
          </div>
          <div className="flex gap-2 sm:gap-3 mt-2">
            <a href="mailto:Nkosi_10@outlook.com" className="bg-blue-600 hover:bg-blue-700 text-white p-1.5 sm:p-2 rounded-full transition-all" title="Email">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="https://github.com/Nkosi-10" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white p-1.5 sm:p-2 rounded-full transition-all" title="GitHub">
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="https://www.linkedin.com/in/nkosi231" target="_blank" rel="noopener noreferrer" className="bg-blue-700 hover:bg-blue-800 text-white p-1.5 sm:p-2 rounded-full transition-all" title="LinkedIn">
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
        
        {/* Info Section */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-6 lg:gap-8">
          {/* Name and Bio */}
          <div>
            <h1 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Nkosimphile Khumalo
            </h1>
            <h2 className="text-base sm:text-lg text-blue-400 font-semibold mb-2">Software Developer & IT Student</h2>
            <p className={`mb-4 leading-relaxed text-sm sm:text-base ${
              isDark ? 'text-gray-200' : 'text-gray-700'
            }`}>
              I am a passionate System developer and IT student with expertise in modern Systems, database management and software engineering. I love building innovative solutions.
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
              {skills.map(skill => (
                <span key={skill} className={`px-2 sm:px-3 py-1 rounded-full text-xs border font-semibold ${
                  isDark 
                    ? 'bg-blue-600/20 text-blue-200 border-blue-500/30' 
                    : 'bg-blue-100 text-blue-700 border-blue-300'
                }`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Vision Section */}
          <div className={`rounded-xl p-3 sm:p-4 border shadow-inner ${
            isDark 
              ? 'bg-white/5 border-blue-500/10' 
              : 'bg-white/50 border-blue-200/30'
          }`}>
            <h3 className="text-lg sm:text-xl font-bold text-blue-400 mb-2 flex items-center gap-2">
              <Code className="w-4 h-4 sm:w-5 sm:h-5" /> My Vision
            </h3>
            <Vision />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;