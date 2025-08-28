import React from 'react';
import '../App.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import favicon from '../assets/favicon.png';

const navLinks = [
  { to: '/', label: 'Home', sectionId: 'home' },
  { to: '/', label: 'About', sectionId: 'about' },
  { to: '/', label: 'Projects', sectionId: 'projects' },
  { to: '/Resume', label: 'Resume', sectionId: null },
  { to: '/', label: 'Contact', sectionId: 'contact' },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  const navbarRef = React.useRef(null);

  const handleNavClick = (link) => {
    console.log('Nav click:', link);
    
    if (link.to === '/Resume') {
      navigate('/Resume');
    } else if (link.sectionId) {
      // For section scrolling, ensure we're on the home page first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.getElementById(link.sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.getElementById(link.sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(link.to);
    }
  };

  const isActive = (link) => {
    if (link.to === '/Resume') {
      return location.pathname === '/Resume';
    }
    
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
      <nav
        ref={navbarRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isDark
            ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 border-b border-blue-900/50'
            : 'bg-gradient-to-br from-white via-blue-50 to-white border-b border-blue-200/50'
          } bg-opacity-95 backdrop-blur-md`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link className="flex items-center" to="/">
              <img className="h-8 w-auto" src={favicon} alt="Logo" />
              <span className={`ml-2 font-bold tracking-wide ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Brains-Tech
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.to + link.label}
                  onClick={() => handleNavClick(link)}
                  className={`relative rounded-md px-3 py-2 font-medium transition-all duration-200 transform hover:scale-105 active:scale-95 ${isActive(link)
                      ? isDark
                        ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white scale-105 shadow-lg'
                        : 'bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-white scale-105 shadow-lg'
                      : isDark
                        ? 'text-gray-200 hover:text-blue-400 hover:bg-gray-800/30'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100/50'
                    } group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Desktop Theme Toggle */}
            <div className="hidden md:flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                className={`p-2 rounded-lg transition-all duration-200 ${isDark ? 'text-gray-200 hover:bg-gray-800/50' : 'text-gray-700 hover:bg-gray-100'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
