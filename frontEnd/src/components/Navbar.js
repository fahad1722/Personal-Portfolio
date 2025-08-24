import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Code, Folder, Mail, Github, Linkedin, Briefcase, Twitter } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState('/');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Update current path when location changes
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/skills', label: 'Skills', icon: Code },
    { path: '/experience', label: 'Experience', icon: Briefcase },
    { path: '/projects', label: 'Projects', icon: Folder },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      {/* Google Fonts Import */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Righteous&family=Audiowide&family=Exo+2:wght@400;700&display=swap" rel="stylesheet" />
      
      <nav className="bg-slate-900/95 md:bg-gradient-to-r md:from-slate-900 md:via-purple-900 md:to-slate-900 md:backdrop-blur-md fixed top-0 w-full z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 group">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className={`text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 ${
                  currentPath === '/' ? 'scale-105' : ''
                }`}
                style={{ 
                  fontFamily: 'Orbitron, sans-serif',
                  fontWeight: '900',
                  letterSpacing: '2px',
                  textShadow: '0 0 20px rgba(147, 51, 234, 0.3)'
                }}
              >
                FAHAD
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMobileMenu}
                      className={`group flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 ${
                        currentPath === item.path
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <IconComponent className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Resume Button & Social Icons - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Resume Button */}
              <a
                href="/resume.pdf" // Replace with your actual resume path
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center px-5 py-2.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white text-sm font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/30 border border-emerald-400/20 z-10"
                style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #14b8a6 50%, #06b6d4 100%)',
                  boxShadow: '0 0 20px rgba(16, 185, 129, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                {/* Background glow effect - contained within button bounds */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-xl group-hover:shadow-lg group-hover:shadow-emerald-500/20 transition-all duration-300"></div>
                
                {/* Document icon with better styling */}
                <svg 
                  className="w-4 h-4 mr-2 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 relative z-10" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                  <path d="M8,12H16V14H8V12M8,16H13V18H8V16Z" opacity="0.7"/>
                </svg>
                
                <span className="relative z-10">Resume</span>
                
                {/* Shine effect - contained within button */}
                <div className="absolute inset-0 rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </div>
              </a>
              
              {/* Social Icons */}
              <div className="flex items-center space-x-3">
                {[
                  { Icon: Github, url: 'https://github.com/fahad1722' },
                  { Icon: Linkedin, url: 'https://linkedin.com/in/fahad177' },
                  { Icon: Twitter, url: 'https://twitter.com/fahad177__' }
                ].map(({ Icon, url }, index) => (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Resume Button - Mobile (Top Right) */}
            <div className="md:hidden">
              <a
                href="/resume.pdf" // Replace with your actual resume path
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center px-3 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-xs font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
                style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
                  boxShadow: '0 0 15px rgba(16, 185, 129, 0.15)'
                }}
              >
                {/* Mobile document icon */}
                <svg 
                  className="w-3.5 h-3.5 mr-1.5 group-hover:rotate-12 transition-all duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-white/20 shadow-2xl z-50">
        <div className="flex justify-around items-center py-3 px-2">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMobileMenu}
                className={`flex flex-col items-center justify-center px-3 py-2 rounded-xl transition-all duration-300 ${
                  currentPath === item.path
                    ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <IconComponent className="w-5 h-5 mb-1" />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

        <style jsx>{`
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
      </nav>
    </>
  );
};

export default Navbar;