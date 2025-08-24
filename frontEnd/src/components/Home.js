
import React, { useEffect, useState } from 'react';
import { Download, Sparkles, Database, Server } from 'lucide-react';
import { SiSpringboot } from "react-icons/si";
import { FaAws, FaDocker, FaJava, FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Simple Icons CDN for brand icons */}
      <style jsx>{`
        .tech-icon {
          width: 24px;
          height: 24px;
          fill: white;
        }
      `}</style>
    
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center pt-20 lg:pt-24">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Left side - Personal info */}
            <div className={`space-y-8 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
              {/* Greeting and Name */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="text-gray-700 font-normal block mb-2">Hi, I'm</span>
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                    Fahad Mohammed
                  </span>
                </h1>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                  Java Backend Developer
                </h2>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-8 justify-center lg:justify-start mt-8 mb-2">
                {[
                  { 
                    icon: CiMail, 
                    href: 'mailto:mohammedfahad1905@example.com', 
                    color: 'hover:bg-red-100 hover:text-red-600 hover:border-red-300',
                    bg: 'bg-white/70 backdrop-blur-sm border-red-200'
                  },
                  { 
                    icon: FaGithub, 
                    href: 'https://github.com/fahad1722', 
                    color: 'hover:bg-gray-100 hover:text-gray-800 hover:border-gray-300',
                    bg: 'bg-white/70 backdrop-blur-sm border-gray-200'
                  },
                  { 
                    icon: FaLinkedin, 
                    href: 'https://linkedin.com/in/fahad177', 
                    color: 'hover:bg-blue-100 hover:text-blue-600 hover:border-blue-300',
                    bg: 'bg-white/70 backdrop-blur-sm border-blue-200'
                  }
                ].map(({ icon: Icon, href, color, bg }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 ${bg} rounded-2xl border-2 ${color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 hover:shadow-lg hover:bg-white`}
                  >
                    <Icon className="w-7 h-7" />
                  </a>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 pb-6">
                {[
                  { 
                    tech: 'Core Java', 
                    color: 'from-red-500 to-orange-600', 
                    svg: (
                      <FaJava className="w-6 h-6 text-white" />
                    )
                  },
                  { 
                    tech: 'Spring Boot', 
                    color: 'from-green-500 to-emerald-600', 
                    svg: (
                      <SiSpringboot className="w-6 h-6 text-white" />
                    )
                  },
                  { 
                    tech: 'Microservices', 
                    color: 'from-blue-500 to-cyan-600', 
                    icon: Server 
                  },
                  { 
                    tech: 'AWS Cloud', 
                    color: 'from-orange-500 to-yellow-600', 
                    svg: (
                      <FaAws className="w-6 h-6 text-white" />
                    )
                  },
                  { 
                    tech: 'Docker', 
                    color: 'from-blue-600 to-purple-600', 
                    svg: (
                      <FaDocker className="w-6 h-6 text-white" />
                    )
                  },
                  { 
                    tech: 'SQL/Oracle', 
                    color: 'from-indigo-500 to-purple-600', 
                    icon: Database 
                  }
                ].map(({ tech, color, svg, icon: IconComponent }) => (
                  <div
                    key={tech}
                    className="p-3 bg-white/70 backdrop-blur-sm rounded-2xl border-2 border-white/20 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex flex-col items-center gap-2"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-300`}>
                      {svg ? (
                        svg
                      ) : (
                        <IconComponent className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <p className="font-semibold text-gray-800 text-sm text-center">{tech}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Summary and Resume */}
            <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
              {/* Professional summary */}
              <div className="p-8 bg-white/70 backdrop-blur-sm rounded-3xl border-2 border-white/20 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-800">About Me</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    I am a passionate <span className="font-bold text-blue-600">Java Backend Developer</span> with 1+ years of experience in building 
                    <span className="font-bold text-purple-600"> scalable, secure, and high-performance backend systems</span>.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Proficient in <span className="font-semibold text-green-600">Core Java, Multithreading, and SQL/Oracle databases</span>, 
                    with strong expertise in the <span className="font-bold text-blue-600">Spring Boot ecosystem</span> for developing REST APIs and <span className="font-bold text-purple-600"> Microservices</span>.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    I bring hands-on experience with <span className="font-semibold text-orange-600">AWS (EC2, S3, RDS, VPC, IAM)</span> and 
                    <span className="font-semibold text-cyan-600"> Docker</span>, enabling the design and deployment of 
                    <span className="font-bold text-indigo-600"> cloud-native applications</span>.
                  </p>
            
                </div>
              </div>

              {/* Resume button */}
              <div className="pt-2">
                <a 
                  href="/Resume.pdf" // Updated to use public folder path
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block"
                >
                  <button className="w-full py-5 px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white rounded-2xl font-bold text-xl hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center gap-3 group">
                    <Download className="w-6 h-6 group-hover:animate-bounce" />
                    View My Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Home;