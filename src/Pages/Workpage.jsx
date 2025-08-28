import { ExternalLink, Github } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import img4 from '../assets/4.jpg';
import imgSs from '../assets/ss.jpg';
import imgKk from '../assets/kk.jpg';

const Workpage = () => {
  const { isDark } = useTheme();

  const projects = [
    {
      title: 'Brains-Tech AI',
      description: 'An AI web based AI, Using google Gemini API.',
      tech: ['Vanilla JavaScript', 'HTML', 'CSS'],
      image: img4,
      live: '#',
      github: '#',
      Demo: '#'
    },
    {
      title: 'AI-Powered Password Cracker',
      description: 'A comprehensive educational tool that shows various password cracking techniques in a safe, controlled environment. It features a hacker-themed interface and AI-powered decision-making capabilities.',
      tech: ['Flask', 'Bootstrap', 'JavaScript'],
      image: imgSs,
      live: '#',
      github: '#',
      Demo: '#' // no demo available
    },
    {
      title: 'Game: Skate Ball Smash',
      description: 'A simple game where you have to smash the ball to score points.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      image: imgKk,
      live: '#',
      github: '#',
      Demo: '#' // no demo available
    }
  ];

  return (
    <section id="projects" className="relative overflow-visible w-full py-8 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 lg:mb-12 ${isDark ? 'text-white' : 'text-gray-900'
          }`}>
          My Projects
        </h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`backdrop-blur-lg rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group ${isDark
                  ? 'bg-white/10 border-blue-500/20 hover:border-blue-500/60'
                  : 'bg-white/80 border-blue-200/50 hover:border-blue-300/60'
                }`}
            >
              <div className={`absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none group-hover:shadow-[0_0_40px_10px_rgba(0,128,255,0.3)] transition-all duration-300 ${isDark ? 'opacity-30' : 'opacity-20'
                }`}></div>

              <div className="w-full h-32 sm:h-40 lg:h-48 bg-gray-700 rounded-lg mb-3 sm:mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <h3 className={`text-base sm:text-lg lg:text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'
                }`}>
                {project.title}
              </h3>
              <p className={`mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-2 sm:px-3 py-1 rounded-full text-xs border ${isDark
                        ? 'bg-blue-600/20 text-blue-300 border-blue-500/30'
                        : 'bg-blue-100 text-blue-700 border-blue-300'
                      }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-2">
                {/* Go Live */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow transition-all duration-200 hover:scale-105"
                >
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  Go Live
                </a>

                {/* GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-semibold text-xs shadow transition-all duration-200 hover:scale-105"
                >
                  <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                  Code
                </a>

                {/* Demo */}
                <a
                  href={project.Demo || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-white font-semibold text-xs shadow transition-all duration-200 hover:scale-105 ${project.Demo
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-gray-400 cursor-not-allowed hover:scale-100'
                    }`}
                >
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workpage;
