import React from 'react';
import '../App.css';
import favicon from '../assets/favicon.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home', sectionId: 'home' },
  { to: '/', label: 'About', sectionId: 'about' },
  { to: '/', label: 'Projects', sectionId: 'projects' },
  { to: '/Resume', label: 'Resume', sectionId: null },
  { to: '/', label: 'Contact', sectionId: 'contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();

  // Close mobile menu on navigation
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const scrollToSection = (sectionId) => {
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleNavClick = (link) => {
    if (link.to === '/Resume') {
      // Navigate to Resume page
      navigate('/Resume');
    } else if (link.sectionId) {
      // Scroll to section on main page
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          scrollToSection(link.sectionId);
        }, 100);
      } else {
        scrollToSection(link.sectionId);
      }
    }
  };

  const isActive = (link) => {
    if (link.to === '/Resume') return location.pathname === '/Resume';
    if (link.sectionId && location.pathname === '/') {
      const element = document.getElementById(link.sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
    }
    return false;
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 border-b border-blue-900/50' 
          : 'bg-gradient-to-br from-white via-blue-50 to-white border-b border-blue-200/50'
      } bg-opacity-95 backdrop-blur-md`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link className="flex items-center" to="/">
              <img className="h-8 w-auto" src={favicon} alt="Logo" />
              <span className={`ml-2 font-bold tracking-wide ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Brains-Tech
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.to + link.label}
                  onClick={() => handleNavClick(link)}
                  className={`relative rounded-md px-3 py-2 font-medium transition-all duration-300 overflow-hidden
                    ${isActive(link)
                      ? isDark
                        ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white scale-105 shadow-lg'
                        : 'bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-white scale-105 shadow-lg'
                      : isDark
                        ? 'text-gray-200 hover:text-blue-400'
                        : 'text-gray-700 hover:text-blue-600'
                    }
                    group
                  `}
                >
                  <span className="relative z-10">{link.label}</span>
                  {/* Animated underline on hover */}
                  <span className={`absolute left-1/2 -translate-x-1/2 bottom-1 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-4/5 group-hover:h-1 ${
                    isDark ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400' : 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600'
                  }`}></span>
                </button>
              ))}
            </div>

            {/* Theme Toggle and Mobile Menu Button */}
            <div className="flex items-center space-x-2">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`relative p-2 rounded-lg transition-all duration-300 group ${
                  isDark 
                    ? 'text-gray-200 hover:bg-gray-800/50' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                aria-label="Toggle theme"
              >
                <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </div>
              </button>

              {/* Mobile menu toggle */}
              <button
                className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                  isDark 
                    ? 'text-gray-200 hover:bg-gray-800/50' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                aria-label="Toggle mobile menu"
                onClick={() => setMobileMenuOpen((open) => !open)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className={`md:hidden absolute left-0 right-0 top-16 shadow-lg z-40 transition-all duration-300 ${
              isDark 
                ? 'bg-gray-900/95 border-b border-blue-900/50' 
                : 'bg-white/95 border-b border-blue-200/50'
            } backdrop-blur-md`}>
              <div className="flex flex-col space-y-1 p-4">
                {navLinks.map((link) => (
                  <button
                    key={link.to + link.label}
                    onClick={() => handleNavClick(link)}
                    className={`relative rounded-md px-3 py-3 font-medium transition-all duration-300 overflow-hidden text-left
                      ${isActive(link)
                        ? isDark
                          ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white scale-105 shadow-lg'
                          : 'bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-white scale-105 shadow-lg'
                        : isDark
                          ? 'text-gray-200 hover:text-blue-400'
                          : 'text-gray-700 hover:text-blue-600'
                      }
                      group
                    `}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {/* Animated underline on hover */}
                    <span className={`absolute left-1/2 -translate-x-1/2 bottom-1 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-4/5 group-hover:h-1 ${
                      isDark ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400' : 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600'
                    }`}></span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;

