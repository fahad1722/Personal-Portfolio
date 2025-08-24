import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
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
      
      <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 backdrop-blur-md fixed top-0 w-full z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 group">
              <NavLink
                to="/"
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
              </NavLink>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={`group flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 ${
                        currentPath === item.path
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                          : 'text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm'
                      }`}
                    >
                      <IconComponent className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      {item.label}
                    </NavLink>
                  );
                })}
              </div>
            </div>

            {/* Social Icons - Desktop */}
            <div className="hidden lg:flex items-center space-x-3">
              {[
                { Icon: Github, url: 'https://github.com/fahad' },
                { Icon: Linkedin, url: 'https://linkedin.com/in/fahad' },
                { Icon: Twitter, url: 'https://twitter.com/fahad' }
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

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:scale-110"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6 rotate-180 transition-transform duration-300" />
                ) : (
                  <Menu className="block h-6 w-6 transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4 overflow-hidden'
        }`}>
          <div className="bg-slate-900/95 backdrop-blur-xl border-t border-white/10 shadow-2xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={closeMobileMenu}
                    className={`group flex items-center w-full px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:scale-105 ${
                      currentPath === item.path
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      animation: isMobileMenuOpen ? 'slideInLeft 0.5s ease-out forwards' : 'none'
                    }}
                  >
                    <IconComponent className="mr-4 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    {item.label}
                  </NavLink>
                );
              })}

              {/* Social Icons - Mobile */}
              <div className="flex justify-center space-x-6 pt-6 border-t border-white/10 mt-4">
                {[
                  { Icon: Github, url: 'https://github.com/fahad' },
                  { Icon: Linkedin, url: 'https://linkedin.com/in/fahad' },
                  { Icon: Twitter, url: 'https://twitter.com/fahad' }
                ].map(({ Icon, url }, index) => (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu backdrop */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
            onClick={closeMobileMenu}
          />
        )}

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