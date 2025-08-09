import '../App.css';
import { useTheme } from '../context/ThemeContext';
import { useState, useEffect } from 'react';

const Resume = () => {
  const { isDark } = useTheme();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Resume PDF download handler
  const handleDownload = () => {
    // Open the PDF file from the public folder
    window.open('/resume.pdf', '_blank');
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      width: '100%', 
      overflow: 'auto', 
      background: isDark 
        ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
        : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
      padding: '20px',
      fontFamily: 'Orbitron, Arial, sans-serif',
      color: isDark ? '#ffffff' : '#1a202c',
      position: 'relative'
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden'
      }}>
        {/* Grid Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `
            linear-gradient(${isDark ? 'rgba(0, 128, 255, 0.1)' : 'rgba(0, 128, 255, 0.05)'} 1px, transparent 1px),
            linear-gradient(90deg, ${isDark ? 'rgba(0, 128, 255, 0.1)' : 'rgba(0, 128, 255, 0.05)'} 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: Math.random() * 4 + 2 + 'px',
            height: Math.random() * 4 + 2 + 'px',
            background: i % 2 === 0 ? '#0080ff' : (isDark ? '#c0c0c0' : '#4a5568'),
            borderRadius: '50%',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            animation: `floatParticle ${Math.random() * 10 + 10}s ease-in-out infinite`,
            opacity: 0.6
          }}></div>
        ))}
      </div>

      {/* Main Content Container */}
      <div style={{
        maxWidth: windowWidth <= 768 ? '95%' : '900px',
        margin: '0 auto',
        background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderRadius: windowWidth <= 768 ? '15px' : '20px',
        border: isDark ? '1px solid rgba(0, 128, 255, 0.2)' : '1px solid rgba(0, 128, 255, 0.1)',
        padding: windowWidth <= 768 ? '15px' : '30px',
        boxShadow: isDark ? '0 20px 40px rgba(0, 0, 0, 0.3)' : '0 20px 40px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Glowing Border Effect */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: '20px',
          background: isDark 
            ? 'linear-gradient(45deg, transparent, rgba(0, 128, 255, 0.1), transparent)'
            : 'linear-gradient(45deg, transparent, rgba(0, 128, 255, 0.05), transparent)',
          animation: 'borderGlow 3s ease-in-out infinite'
        }}></div>
        
        {/* Header Section */}
        <div style={{ 
          marginBottom: windowWidth <= 768 ? '20px' : '30px',
          position: 'relative',
          zIndex: 2
        }}>
          <h1 style={{ 
            fontSize: windowWidth <= 768 ? '1.5rem' : '2.5rem', 
            color: isDark ? '#ffffff' : '#1a202c', 
            margin: '0 0 10px 0',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textAlign: 'center',
            textShadow: isDark ? '0 0 20px rgba(0, 128, 255, 0.5)' : '0 0 10px rgba(0, 128, 255, 0.3)',
            letterSpacing: windowWidth <= 768 ? '1px' : '3px',
            animation: 'titleGlow 2s ease-in-out infinite alternate'
          }}>
            NKOSIMPHILE KHUMALO
          </h1>
          <div style={{ 
            fontSize: windowWidth <= 768 ? '0.7rem' : '0.9rem', 
            color: isDark ? '#c0c0c0' : '#4a5568', 
            lineHeight: '1.5',
            textAlign: 'center'
          }}>
            <div style={{ 
              display: 'flex', 
              gap: windowWidth <= 768 ? '10px' : '20px', 
              flexWrap: 'wrap', 
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '10px'
            }}>
              <span style={{ 
                background: isDark ? 'rgba(0, 128, 255, 0.1)' : 'rgba(0, 128, 255, 0.05)', 
                padding: windowWidth <= 768 ? '3px 8px' : '5px 15px', 
                borderRadius: '20px',
                border: isDark ? '1px solid rgba(0, 128, 255, 0.3)' : '1px solid rgba(0, 128, 255, 0.2)',
                fontSize: windowWidth <= 768 ? '0.6rem' : '0.9rem'
              }}>
                South Africa | +27 83 672 0752
              </span>
              <a href="mailto:Nkosi_10@outlook.com" style={{ 
                color: '#0080ff', 
                textDecoration: 'none',
                background: isDark ? 'rgba(0, 128, 255, 0.1)' : 'rgba(0, 128, 255, 0.05)',
                padding: windowWidth <= 768 ? '3px 8px' : '5px 15px',
                borderRadius: '20px',
                border: isDark ? '1px solid rgba(0, 128, 255, 0.3)' : '1px solid rgba(0, 128, 255, 0.2)',
                transition: 'all 0.3s ease',
                fontSize: windowWidth <= 768 ? '0.6rem' : '0.9rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = isDark ? 'rgba(0, 128, 255, 0.2)' : 'rgba(0, 128, 255, 0.1)';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = isDark ? 'rgba(0, 128, 255, 0.1)' : 'rgba(0, 128, 255, 0.05)';
                e.target.style.transform = 'scale(1)';
              }}>
                Nkosi_10@outlook.com
              </a>
            </div>
            <div style={{ 
              display: 'flex', 
              gap: windowWidth <= 768 ? '10px' : '20px', 
              flexWrap: 'wrap', 
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <a href="https://github.com/Nkosi-10" target="_blank" style={{ 
                color: '#0080ff', 
                textDecoration: 'none',
                background: isDark ? 'rgba(0, 128, 255, 0.1)' : 'rgba(0, 128, 255, 0.05)',
                padding: windowWidth <= 768 ? '3px 8px' : '5px 15px',
                borderRadius: '20px',
                border: isDark ? '1px solid rgba(0, 128, 255, 0.3)' : '1px solid rgba(0, 128, 255, 0.2)',
                transition: 'all 0.3s ease',
                fontSize: windowWidth <= 768 ? '0.6rem' : '0.9rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = isDark ? 'rgba(0, 128, 255, 0.2)' : 'rgba(0, 128, 255, 0.1)';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = isDark ? 'rgba(0, 128, 255, 0.1)' : 'rgba(0, 128, 255, 0.05)';
                e.target.style.transform = 'scale(1)';
              }}>
                GitHub: github.com/Nkosi-10
              </a>
              <a href="https://www.linkedin.com/in/nkosi231" target="_blank" style={{ 
                color: '#0080ff', 
                textDecoration: 'none',
                background: isDark ? 'rgba(0, 128, 255, 0.1)' : 'rgba(0, 128, 255, 0.05)',
                padding: windowWidth <= 768 ? '3px 8px' : '5px 15px',
                borderRadius: '20px',
                border: isDark ? '1px solid rgba(0, 128, 255, 0.3)' : '1px solid rgba(0, 128, 255, 0.2)',
                transition: 'all 0.3s ease',
                fontSize: windowWidth <= 768 ? '0.6rem' : '0.9rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = isDark ? 'rgba(0, 128, 255, 0.2)' : 'rgba(0, 128, 255, 0.1)';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = isDark ? 'rgba(0, 128, 255, 0.1)' : 'rgba(0, 128, 255, 0.05)';
                e.target.style.transform = 'scale(1)';
              }}>
                LinkedIn: www.linkedin.com/in/nkosi231
              </a>
            </div>
          </div>
        </div>

        <div style={{ 
          height: '2px', 
          background: 'linear-gradient(90deg, transparent, #0080ff, transparent)',
          margin: '20px 0',
          borderRadius: '1px',
          animation: 'lineGlow 2s ease-in-out infinite'
        }}></div>

        {/* Career Objective Section */}
        <div style={{ 
          marginBottom: windowWidth <= 768 ? '15px' : '25px',
          background: isDark ? 'rgba(0, 128, 255, 0.05)' : 'rgba(0, 128, 255, 0.02)',
          padding: windowWidth <= 768 ? '12px' : '20px',
          borderRadius: '15px',
          border: isDark ? '1px solid rgba(0, 128, 255, 0.2)' : '1px solid rgba(0, 128, 255, 0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '2px',
            background: 'linear-gradient(90deg, #0080ff, #c0c0c0, #0080ff)',
            animation: 'scanLine 3s linear infinite'
          }}></div>
          <h2 style={{ 
            fontSize: windowWidth <= 768 ? '1rem' : '1.2rem', 
            color: '#0080ff', 
            margin: '0 0 15px 0',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            textShadow: isDark ? '0 0 10px rgba(0, 128, 255, 0.5)' : '0 0 5px rgba(0, 128, 255, 0.3)'
          }}>
            PROFESSIONAL SUMMARY
          </h2>
          <p style={{ 
            fontSize: windowWidth <= 768 ? '0.8rem' : '0.95rem', 
            lineHeight: '1.6',
            margin: '0',
            color: isDark ? '#e0e0e0' : '#2d3748',
            textAlign: 'justify'
          }}>
            Software Developer and IT student with expertise in full-stack development, database management, and web technologies. 
            Proficient in Python, JavaScript, C++, and PHP with experience in React.js, SQL, and modern development tools. 
            Strong problem-solving skills and experience in software testing and debugging. Seeking software development opportunities.
          </p>
        </div>

        {/* Education Section */}
        <div style={{ 
          marginBottom: windowWidth <= 768 ? '15px' : '25px',
          background: isDark ? 'rgba(0, 128, 255, 0.05)' : 'rgba(0, 128, 255, 0.02)',
          padding: windowWidth <= 768 ? '12px' : '20px',
          borderRadius: '15px',
          border: isDark ? '1px solid rgba(0, 128, 255, 0.2)' : '1px solid rgba(0, 128, 255, 0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '2px',
            background: 'linear-gradient(90deg, #0080ff, #c0c0c0, #0080ff)',
            animation: 'scanLine 3s linear infinite'
          }}></div>
          <h2 style={{ 
            fontSize: windowWidth <= 768 ? '1rem' : '1.2rem', 
            color: '#0080ff', 
            margin: '0 0 15px 0',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            textShadow: isDark ? '0 0 10px rgba(0, 128, 255, 0.5)' : '0 0 5px rgba(0, 128, 255, 0.3)'
          }}>
            EDUCATION
          </h2>
          <div style={{ 
            fontSize: windowWidth <= 768 ? '0.8rem' : '0.95rem', 
            lineHeight: '1.6',
            color: isDark ? '#e0e0e0' : '#2d3748'
          }}>
            <div style={{ 
              fontWeight: 'bold', 
              color: isDark ? '#ffffff' : '#1a202c',
              marginBottom: '8px',
              fontSize: windowWidth <= 768 ? '0.9rem' : '1rem'
            }}>
              Bachelor of Science in Information Technology
            </div>
            <div style={{ 
              color: isDark ? '#c0c0c0' : '#4a5568',
              marginBottom: '8px',
              fontStyle: 'italic'
            }}>
              Richfield College : 2024 – Present
            </div>
            <div style={{ 
              color: isDark ? '#e0e0e0' : '#2d3748',
              fontSize: windowWidth <= 768 ? '0.75rem' : '0.9rem'
            }}>
              Relevant Coursework: Software Development, Database Management, Web Programming, System Analysis, Cloud Computing
            </div>
          </div>
        </div>

        {/* Technical Knowledge Section */}
        <div style={{ 
          marginBottom: '25px',
          background: isDark ? 'rgba(0, 128, 255, 0.05)' : 'rgba(0, 128, 255, 0.02)',
          padding: '20px',
          borderRadius: '15px',
          border: isDark ? '1px solid rgba(0, 128, 255, 0.2)' : '1px solid rgba(0, 128, 255, 0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '2px',
            background: 'linear-gradient(90deg, #0080ff, #c0c0c0, #0080ff)',
            animation: 'scanLine 3s linear infinite'
          }}></div>
          <h2 style={{ 
            fontSize: '1.2rem', 
            color: '#0080ff', 
            margin: '0 0 15px 0',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            textShadow: isDark ? '0 0 10px rgba(0, 128, 255, 0.5)' : '0 0 5px rgba(0, 128, 255, 0.3)'
          }}>
            TECHNICAL KNOWLEDGE
          </h2>
          <ul style={{ 
            fontSize: '0.95rem', 
            lineHeight: '1.6',
            margin: '0',
            paddingLeft: '20px',
            color: isDark ? '#e0e0e0' : '#2d3748'
          }}>
            <li style={{ 
              marginBottom: '8px',
              position: 'relative'
            }}>
              <span style={{ 
                color: '#0080ff', 
                fontWeight: 'bold',
                marginRight: '10px'
              }}>First Year:</span>
              HTML | CSS | JavaScript | Python | Networks | Microsoft 365 | Information Systems
            </li>
            <li style={{ 
              marginBottom: '8px',
              position: 'relative'
            }}>
              <span style={{ 
                color: '#0080ff', 
                fontWeight: 'bold',
                marginRight: '10px'
              }}>Second Year:</span>
              PHP | C++ | SQL | Cloud Computing | Internet Programming
            </li>
            <li style={{ 
              marginBottom: '8px',
              position: 'relative'
            }}>
              <span style={{ 
                color: isDark ? '#c0c0c0' : '#4a5568', 
                fontWeight: 'bold',
                marginRight: '10px'
              }}>Certification:</span>
              Career Essentials in Generative AI - Microsoft & LinkedIn (2025)
            </li>
          </ul>
        </div>

        {/* Projects Section */}
        <div style={{ 
          marginBottom: '25px',
          background: isDark ? 'rgba(0, 128, 255, 0.05)' : 'rgba(0, 128, 255, 0.02)',
          padding: '20px',
          borderRadius: '15px',
          border: isDark ? '1px solid rgba(0, 128, 255, 0.2)' : '1px solid rgba(0, 128, 255, 0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '2px',
            background: 'linear-gradient(90deg, #0080ff, #c0c0c0, #0080ff)',
            animation: 'scanLine 3s linear infinite'
          }}></div>
          <h2 style={{ 
            fontSize: '1.2rem', 
            color: '#0080ff', 
            margin: '0 0 20px 0',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            textShadow: isDark ? '0 0 10px rgba(0, 128, 255, 0.5)' : '0 0 5px rgba(0, 128, 255, 0.3)'
          }}>
            TECHNICAL PROJECTS
          </h2>
          
          <div style={{ marginBottom: '20px' }}>
            <div style={{
              background: isDark ? 'rgba(0, 128, 255, 0.1)' : 'rgba(0, 128, 255, 0.05)',
              padding: '15px',
              borderRadius: '10px',
              border: isDark ? '1px solid rgba(0, 128, 255, 0.3)' : '1px solid rgba(0, 128, 255, 0.2)',
              marginBottom: '15px'
            }}>
              <h3 style={{ 
                fontSize: '1rem', 
                color: isDark ? '#ffffff' : '#1a202c', 
                margin: '0 0 10px 0',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{
                  width: '8px',
                  height: '8px',
                  background: '#0080ff',
                  borderRadius: '50%',
                  animation: 'pulse 2s infinite'
                }}></span>
                School Registration System (Python, Tkinter, SQLite)
              </h3>
              <ul style={{ 
                fontSize: '0.9rem', 
                lineHeight: '1.5',
                margin: '0',
                paddingLeft: '20px',
                color: isDark ? '#e0e0e0' : '#2d3748'
              }}>
                <li style={{ marginBottom: '5px' }}>Developed GUI-based application for student registration and database storage using Python and Tkinter</li>
                <li style={{ marginBottom: '5px' }}>Implemented dynamic forms, user input validation, and SQLite database integration</li>
                <li style={{ marginBottom: '5px' }}>Utilized object-oriented programming principles and database management techniques</li>
              </ul>
            </div>
            
            <div style={{
              background: isDark ? 'rgba(0, 128, 255, 0.1)' : 'rgba(0, 128, 255, 0.05)',
              padding: '15px',
              borderRadius: '10px',
              border: isDark ? '1px solid rgba(0, 128, 255, 0.3)' : '1px solid rgba(0, 128, 255, 0.2)',
              marginBottom: '15px'
            }}>
              <h3 style={{ 
                fontSize: '1rem', 
                color: isDark ? '#ffffff' : '#1a202c', 
                margin: '0 0 10px 0',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{
                  width: '8px',
                  height: '8px',
                  background: isDark ? '#c0c0c0' : '#4a5568',
                  borderRadius: '50%',
                  animation: 'pulse 2s infinite 0.5s'
                }}></span>
                Disaster Relief Resource Management (C++)
              </h3>
              <ul style={{ 
                fontSize: '0.9rem', 
                lineHeight: '1.5',
                margin: '0',
                paddingLeft: '20px',
                color: isDark ? '#e0e0e0' : '#2d3748'
              }}>
                <li style={{ marginBottom: '5px' }}>Built console application for resource management with CRUD operations (Create, Read, Update, Delete)</li>
                <li style={{ marginBottom: '5px' }}>Implemented file I/O operations, data persistence and input validation</li>
                <li style={{ marginBottom: '5px' }}>Applied software engineering principles including error handling and data integrity</li>
              </ul>
            </div>
            
            <div style={{
              background: isDark ? 'rgba(0, 128, 255, 0.1)' : 'rgba(0, 128, 255, 0.05)',
              padding: '15px',
              borderRadius: '10px',
              border: isDark ? '1px solid rgba(0, 128, 255, 0.3)' : '1px solid rgba(0, 128, 255, 0.2)',
              marginBottom: '15px'
            }}>
              <h3 style={{ 
                fontSize: '1rem', 
                color: isDark ? '#ffffff' : '#1a202c', 
                margin: '0 0 10px 0',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{
                  width: '8px',
                  height: '8px',
                  background: '#0080ff',
                  borderRadius: '50%',
                  animation: 'pulse 2s infinite 1s'
                }}></span>
                Jobs for Software Engineers (React, Tailwind CSS, JSON)
              </h3>
              <ul style={{ 
                fontSize: '0.9rem', 
                lineHeight: '1.5',
                margin: '0',
                paddingLeft: '20px',
                color: isDark ? '#e0e0e0' : '#2d3748'
              }}>
                <li style={{ marginBottom: '5px' }}>Developed responsive job portal web application using React.js and modern CSS frameworks</li>
                <li style={{ marginBottom: '5px' }}>Implemented dynamic content management with JSON data and RESTful API concepts</li>
                <li style={{ marginBottom: '5px' }}>Focused on user experience optimization and frontend performance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Skills Section */}
        <div style={{ 
          marginBottom: '25px',
          background: isDark ? 'rgba(0, 128, 255, 0.05)' : 'rgba(0, 128, 255, 0.02)',
          padding: '20px',
          borderRadius: '15px',
          border: isDark ? '1px solid rgba(0, 128, 255, 0.2)' : '1px solid rgba(0, 128, 255, 0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '2px',
            background: 'linear-gradient(90deg, #0080ff, #c0c0c0, #0080ff)',
            animation: 'scanLine 3s linear infinite'
          }}></div>
          <h2 style={{ 
            fontSize: '1.2rem', 
            color: '#0080ff', 
            margin: '0 0 20px 0',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            textShadow: isDark ? '0 0 10px rgba(0, 128, 255, 0.5)' : '0 0 5px rgba(0, 128, 255, 0.3)'
          }}>
            TECHNICAL SKILLS
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: windowWidth <= 768 ? 'repeat(auto-fit, minmax(250px, 1fr))' : 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: windowWidth <= 768 ? '15px' : '20px'
          }}>
            {/* Programming Languages */}
            <div style={{
              background: isDark ? 'rgba(0, 128, 255, 0.1)' : 'rgba(0, 128, 255, 0.05)',
              padding: windowWidth <= 768 ? '10px' : '15px',
              borderRadius: '10px',
              border: isDark ? '1px solid rgba(0, 128, 255, 0.3)' : '1px solid rgba(0, 128, 255, 0.2)'
            }}>
              <h3 style={{
                color: isDark ? '#ffffff' : '#1a202c',
                fontSize: windowWidth <= 768 ? '0.8rem' : '1rem',
                margin: '0 0 15px 0',
                fontWeight: 'bold',
                textAlign: 'center'
              }}>
                Programming Languages
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: windowWidth <= 768 ? '4px' : '8px', justifyContent: 'center' }}>
                {['Python', 'JavaScript', 'C++', 'PHP', 'HTML5', 'CSS3', 'SQL'].map((skill, index) => (
                  <span key={skill} style={{
                    background: 'linear-gradient(45deg, #0080ff, #0066cc)',
                    color: 'white',
                    padding: windowWidth <= 768 ? '3px 8px' : '5px 12px',
                    borderRadius: '15px',
                    fontSize: windowWidth <= 768 ? '0.6rem' : '0.8rem',
                    fontWeight: 'bold',
                    animation: `skillGlow ${2 + index * 0.2}s ease-in-out infinite`
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div style={{
              background: isDark ? 'rgba(0, 128, 255, 0.1)' : 'rgba(0, 128, 255, 0.05)',
              padding: windowWidth <= 768 ? '10px' : '15px',
              borderRadius: '10px',
              border: isDark ? '1px solid rgba(0, 128, 255, 0.3)' : '1px solid rgba(0, 128, 255, 0.2)'
            }}>
              <h3 style={{
                color: isDark ? '#ffffff' : '#1a202c',
                fontSize: windowWidth <= 768 ? '0.8rem' : '1rem',
                margin: '0 0 15px 0',
                fontWeight: 'bold',
                textAlign: 'center'
              }}>
                Frameworks & Libraries
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: windowWidth <= 768 ? '4px' : '8px', justifyContent: 'center' }}>
                {['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Tkinter', 'NumPy', 'Bootstrap'].map((skill, index) => (
                  <span key={skill} style={{
                    background: 'linear-gradient(45deg, #c0c0c0, #a0a0a0)',
                    color: '#333',
                    padding: windowWidth <= 768 ? '3px 8px' : '5px 12px',
                    borderRadius: '15px',
                    fontSize: windowWidth <= 768 ? '0.6rem' : '0.8rem',
                    fontWeight: 'bold',
                    animation: `skillGlow ${2.5 + index * 0.2}s ease-in-out infinite`
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases & Tools */}
            <div style={{
              background: isDark ? 'rgba(0, 128, 255, 0.1)' : 'rgba(0, 128, 255, 0.05)',
              padding: windowWidth <= 768 ? '10px' : '15px',
              borderRadius: '10px',
              border: isDark ? '1px solid rgba(0, 128, 255, 0.3)' : '1px solid rgba(0, 128, 255, 0.2)'
            }}>
              <h3 style={{
                color: isDark ? '#ffffff' : '#1a202c',
                fontSize: windowWidth <= 768 ? '0.8rem' : '1rem',
                margin: '0 0 15px 0',
                fontWeight: 'bold',
                textAlign: 'center'
              }}>
                Databases & Tools
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: windowWidth <= 768 ? '4px' : '8px', justifyContent: 'center' }}>
                {['MySQL', 'SQLite', 'MongoDB', 'Git', 'GitHub', 'VS Code', 'Postman'].map((skill, index) => (
                  <span key={skill} style={{
                    background: 'linear-gradient(45deg, #0080ff, #0066cc)',
                    color: 'white',
                    padding: windowWidth <= 768 ? '3px 8px' : '5px 12px',
                    borderRadius: '15px',
                    fontSize: windowWidth <= 768 ? '0.6rem' : '0.8rem',
                    fontWeight: 'bold',
                    animation: `skillGlow ${3 + index * 0.2}s ease-in-out infinite`
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div style={{
              background: isDark ? 'rgba(0, 128, 255, 0.1)' : 'rgba(0, 128, 255, 0.05)',
              padding: windowWidth <= 768 ? '10px' : '15px',
              borderRadius: '10px',
              border: isDark ? '1px solid rgba(0, 128, 255, 0.3)' : '1px solid rgba(0, 128, 255, 0.2)'
            }}>
              <h3 style={{
                color: isDark ? '#ffffff' : '#1a202c',
                fontSize: windowWidth <= 768 ? '0.8rem' : '1rem',
                margin: '0 0 15px 0',
                fontWeight: 'bold',
                textAlign: 'center'
              }}>
                Soft Skills
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: windowWidth <= 768 ? '4px' : '8px', justifyContent: 'center' }}>
                {['Problem Solving', 'Team Collaboration', 'Communication', 'Debugging', 'Time Management', 'Agile'].map((skill, index) => (
                  <span key={skill} style={{
                    background: 'linear-gradient(45deg, #c0c0c0, #a0a0a0)',
                    color: '#333',
                    padding: windowWidth <= 768 ? '3px 8px' : '5px 12px',
                    borderRadius: '15px',
                    fontSize: windowWidth <= 768 ? '0.6rem' : '0.8rem',
                    fontWeight: 'bold',
                    animation: `skillGlow ${3.5 + index * 0.2}s ease-in-out infinite`
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Animated Download Button */}
      <div style={{
        position: 'fixed',
        top: '50%',
        right: windowWidth <= 768 ? '5px' : '30px',
        transform: 'translateY(-50%)',
        zIndex: 1000
      }}>
        <div style={{
          position: 'relative',
          width: windowWidth <= 768 ? '50px' : '120px',
          height: windowWidth <= 768 ? '50px' : '120px'
        }}>
                      {/* Outer ring animation */}
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              border: windowWidth <= 768 ? '1px solid transparent' : '3px solid transparent',
              borderTop: windowWidth <= 768 ? '1px solid #0080ff' : '3px solid #0080ff',
              borderRight: windowWidth <= 768 ? '1px solid #0080ff' : '3px solid #0080ff',
              borderRadius: '50%',
              animation: 'spin 2s linear infinite'
            }}></div>
            
            {/* Inner ring animation */}
            <div style={{
              position: 'absolute',
              top: windowWidth <= 768 ? '3px' : '10px',
              left: windowWidth <= 768 ? '3px' : '10px',
              width: windowWidth <= 768 ? '44px' : '100px',
              height: windowWidth <= 768 ? '44px' : '100px',
              border: windowWidth <= 768 ? '1px solid transparent' : '2px solid transparent',
              borderBottom: windowWidth <= 768 ? '1px solid #c0c0c0' : '2px solid #c0c0c0',
              borderLeft: windowWidth <= 768 ? '1px solid #c0c0c0' : '2px solid #c0c0c0',
              borderRadius: '50%',
              animation: 'spin 1.5s linear infinite reverse'
            }}></div>
          
                      {/* Download button */}
            <button
              onClick={handleDownload}
              style={{
                position: 'absolute',
                top: windowWidth <= 768 ? '3px' : '20px',
                left: windowWidth <= 768 ? '3px' : '20px',
                width: windowWidth <= 768 ? '44px' : '80px',
                height: windowWidth <= 768 ? '44px' : '80px',
                background: 'linear-gradient(45deg, #0080ff, #0066cc)',
                border: 'none',
                borderRadius: '50%',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: windowWidth <= 768 ? '6px' : '10px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                boxShadow: '0 4px 15px rgba(0, 128, 255, 0.4)',
                transition: 'all 0.3s ease',
                zIndex: 10
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)';
                e.target.style.boxShadow = '0 8px 25px rgba(0, 128, 255, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 4px 15px rgba(0, 128, 255, 0.4)';
              }}
            >
              <svg 
                width={windowWidth <= 768 ? "12" : "20"} 
                height={windowWidth <= 768 ? "12" : "20"} 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{
                  animation: 'bounce 1s infinite'
                }}
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7,10 12,15 17,10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <div style={{ marginTop: '2px' }}>CV</div>
            </button>
          
          {/* Floating particles - hidden on mobile */}
          {windowWidth > 768 && (
            <>
              <div style={{
                position: 'absolute',
                top: '-10px',
                left: '50%',
                width: '4px',
                height: '4px',
                background: '#0080ff',
                borderRadius: '50%',
                animation: 'float 3s ease-in-out infinite'
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: '-10px',
                right: '50%',
                width: '3px',
                height: '3px',
                background: '#c0c0c0',
                borderRadius: '50%',
                animation: 'float 2.5s ease-in-out infinite reverse'
              }}></div>
            </>
          )}
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-5px); }
          60% { transform: translateY(-3px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.6; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
        }
        
        @keyframes borderGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        
        @keyframes titleGlow {
          0% { text-shadow: 0 0 20px rgba(0, 128, 255, 0.5); }
          100% { text-shadow: 0 0 30px rgba(0, 128, 255, 0.8), 0 0 40px rgba(0, 128, 255, 0.3); }
        }
        
        @keyframes lineGlow {
          0%, 100% { box-shadow: 0 0 10px rgba(0, 128, 255, 0.3); }
          50% { box-shadow: 0 0 20px rgba(0, 128, 255, 0.6); }
        }
        
        @keyframes scanLine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes skillGlow {
          0%, 100% { box-shadow: 0 0 5px rgba(0, 128, 255, 0.3); }
          50% { box-shadow: 0 0 15px rgba(0, 128, 255, 0.6); }
        }
      `}</style>
    </div>
  );
};

export default Resume;