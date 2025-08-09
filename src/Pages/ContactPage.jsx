import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import '../App.css';

const ContactBook = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { isDark } = useTheme();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // For now, we'll just show a success message
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-8 sm:py-12 px-4">
      <div className="w-full max-w-4xl mx-auto flex flex-col lg:flex-row shadow-2xl rounded-2xl overflow-hidden">
        {/* Details Section */}
        <div className={`w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col justify-center ${
          isDark ? 'bg-gray-800/80' : 'bg-gray-100/80'
        }`}>
          <h2 className={`text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center lg:text-left border-b pb-2 sm:pb-3 ${
            isDark ? 'text-gray-300 border-gray-600' : 'text-gray-700 border-gray-400'
          }`}>
            Contact Information
          </h2>
          <div className="space-y-3 sm:space-y-4">
            <div className={`flex items-center space-x-3 p-2 sm:p-3 rounded-lg transition-colors duration-200 ${
              isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
            }`}>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-user text-white text-xs sm:text-sm"></i>
              </div>
              <div>
                <h3 className={`font-semibold text-xs uppercase tracking-wide ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Name
                </h3>
                <p className={`text-xs sm:text-sm font-medium ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Nkosimphile Khumalo
                </p>
              </div>
            </div>
            
            <div className={`flex items-center space-x-3 p-2 sm:p-3 rounded-lg transition-colors duration-200 ${
              isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
            }`}>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-envelope text-white text-xs sm:text-sm"></i>
              </div>
              <div>
                <h3 className={`font-semibold text-xs uppercase tracking-wide ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Email
                </h3>
                <a href="mailto:Nkosi_10@outlook.com" className="text-blue-400 text-xs sm:text-sm font-medium hover:text-blue-300 transition-colors duration-200">
                  Nkosi_10@outlook.com
                </a>
              </div>
            </div>
            
            <div className={`flex items-center space-x-3 p-2 sm:p-3 rounded-lg transition-colors duration-200 ${
              isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
            }`}>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-phone text-white text-xs sm:text-sm"></i>
              </div>
              <div>
                <h3 className={`font-semibold text-xs uppercase tracking-wide ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Phone
                </h3>
                <a href="tel:+27836720752" className={`text-xs sm:text-sm font-medium hover:opacity-80 transition-colors duration-200 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  +27 83 672 0752
                </a>
              </div>
            </div>

            <div className="mt-4 sm:mt-6">
              <h3 className={`font-semibold text-xs uppercase tracking-wide mb-3 sm:mb-4 text-center lg:text-left ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Connect With Me
              </h3>
              <div className='flex justify-center lg:justify-start space-x-3 sm:space-x-4'>
                <a href="https://linkedin.com/in/nkosi231" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
                  <i className="fab fa-linkedin-in text-xl sm:text-2xl"></i>
                </a>
                <a href="https://github.com/Nkosi-10" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-700 transition-colors duration-200">
                  <i className="fab fa-github text-xl sm:text-2xl"></i>
                </a>
                <a href="https://twitter.com/@KuraiJag" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition-colors duration-200">
                  <i className="fab fa-twitter text-xl sm:text-2xl"></i>
                </a>
                <a href="https://wa.me/+27836720752" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600 transition-colors duration-200">
                  <i className="fab fa-whatsapp text-xl sm:text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className={`w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col justify-center ${
          isDark ? 'bg-white/10' : 'bg-white/80'
        } backdrop-blur-lg`}>
          <h2 className={`text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center lg:text-left ${
            isDark ? 'text-gray-200' : 'text-gray-800'
          }`}>
            Contact Me
          </h2>
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div>
              <label htmlFor="name" className={`block mb-1 sm:mb-2 text-xs sm:text-sm font-medium ${
                isDark ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Name:
              </label>
              <input 
                type="text" 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-xs sm:text-sm ${
                  isDark 
                    ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className={`block mb-1 sm:mb-2 text-xs sm:text-sm font-medium ${
                isDark ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Email:
              </label>
              <input 
                type="email" 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-xs sm:text-sm ${
                  isDark 
                    ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className={`block mb-1 sm:mb-2 text-xs sm:text-sm font-medium ${
                isDark ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Message:
              </label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-xs sm:text-sm ${
                  isDark 
                    ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactBook;