import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Code, Folder, Mail, Github, Linkedin, Briefcase, Twitter } from 'lucide-react';

const Navbar = () => {
  const [currentPath, setCurrentPath] = useState('/');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
              <a
                href="/"
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
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={item.path}
                      href={item.path}
                      className={`group flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 ${
                        currentPath === item.path
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <IconComponent className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Icons - Desktop */}
            <div className="hidden lg:flex items-center space-x-3">
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

            {/* Mobile menu button - Hidden since we're using bottom nav */}
            <div className="md:hidden opacity-0 pointer-events-none">
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

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-white/20 shadow-2xl z-50">
        <div className="flex justify-around items-center py-3 px-2">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.path}
                href={item.path}
                className={`flex flex-col items-center justify-center px-3 py-2 rounded-xl transition-all duration-300 ${
                  currentPath === item.path
                    ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <IconComponent className="w-5 h-5 mb-1" />
                <span className="text-xs font-medium">{item.label}</span>
              </a>
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