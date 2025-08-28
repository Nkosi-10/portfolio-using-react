import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import mphileImage from '../assets/mphile.jpg';
import { useTheme } from '../context/ThemeContext';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const skills = ['Python', 'JavaScript', 'React.js', 'C++', 'PHP', 'SQL'];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);

    // Check if mobile screen
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', checkMobile);
    };
  }, [skills.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleButtonClick = () => {
    if (isMobile) {
      navigate('/Resume');
    } else {
      scrollToSection('contact');
    }
  };

  return (
    <section id="home" className="relative overflow-visible w-full py-8 sm:py-12 lg:py-16">
      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Image - First on mobile */}
          <div className={`relative flex items-center justify-center transition-all duration-1000 delay-300 order-1 lg:order-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Circular glowing blue/purple border around a circle image */}
            <div className="relative z-20 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 flex items-center justify-center bg-black/60 shadow-2xl rounded-full">
              <div className="absolute inset-0 rounded-full border-2" style={{
                borderColor: isDark ? '#3b82f6' : '#1d4ed8',
                boxShadow: isDark 
                  ? '0 0 24px 4px #3b82f6, 0 0 2px 1px #3b82f6 inset' 
                  : '0 0 24px 4px #1d4ed8, 0 0 2px 1px #1d4ed8 inset',
                pointerEvents: 'none',
              }} />
              <img
                src={mphileImage}
                alt="Nkosi Khumalo"
                className="w-full h-full object-cover object-top rounded-full"
                style={{ 
                  boxShadow: isDark 
                    ? '0 2px 24px #000a, 0 0 0 2px #3b82f6' 
                    : '0 2px 24px #000a, 0 0 0 2px #1d4ed8'
                }}
                onError={(e) => {
                  console.error('Image failed to load:', e.target.src);
                  e.target.style.display = 'none';
                }}
              />
              {/* Terminal-style blue dot (like a power LED) */}
              <span className="absolute top-2 sm:top-3 left-2 sm:left-3 w-2 h-2 sm:w-3 sm:h-3 rounded-full" style={{ 
                background: isDark ? '#3b82f6' : '#1d4ed8', 
                boxShadow: isDark ? '0 0 8px #3b82f6' : '0 0 8px #1d4ed8'
              }}></span>
            </div>
          </div>

          {/* Text Content - Second on mobile */}
          <div className={`space-y-4 sm:space-y-6 lg:space-y-8 transition-all duration-1000 order-2 lg:order-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-3 sm:space-y-4">
              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                Software
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Developer
                </span>
              </h1>
              <p className={`text-base sm:text-lg lg:text-xl text-gray-300 max-w-lg ${
                isDark ? 'text-gray-300' : 'text-gray-800'
              }`}>
                System developer passionate about creating innovative solutions and building the future of technology.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2 sm:space-x-4 flex-wrap">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className={`text-sm sm:text-base ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>Engineering solutions using</span>
                <span className="text-blue-400 font-semibold text-base sm:text-lg">
                  {skills[currentSkill]}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                      index === currentSkill
                        ? 'bg-blue-600 text-white scale-110'
                        : isDark
                          ? 'bg-gray-800 text-gray-300 border border-gray-600'
                          : 'bg-gray-100 text-gray-700 border border-gray-300'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleButtonClick}
                className={`group relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
                  isDark 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
                }`}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>{isMobile ? 'See Resume' : 'Get In Touch'}</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default HomePage;