import React, { useState } from 'react';
import { Code, Server, TestTube, Cloud, Database, Sparkles } from 'lucide-react';
import { FaAws } from "react-icons/fa";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    { 
      title: "Programming & Core Java", 
      icon: Code,
      skills: [
        "Core Java", "Java 8", "OOPs", "Streams", 
        "Multithreading", "Executors", "JDBC", "Collections"
      ],
      gradient: "from-blue-600 via-blue-500 to-indigo-600",
      bgPattern: "bg-blue-50"
    },
    { 
      title: "Frameworks & Backend", 
      icon: Server,
      skills: [
        "Spring Boot", "Spring AOP", "Spring Security", "JWT Authentication",
        "Spring Data JPA", "Hibernate", "REST APIs", "Microservices"
      ],
      gradient: "from-blue-600 via-blue-500 to-indigo-600",
      bgPattern: "bg-blue-50"
    },
    { 
      title: "Testing & API Tools", 
      icon: TestTube,
      skills: [
        "JUnit", "Mockito", "RESTful APIs", "Postman", 
        "Swagger", "API Documentation", "Unit Testing", "Integration Testing"
      ],
      gradient: "from-blue-600 via-blue-500 to-indigo-600",
      bgPattern: "bg-blue-50"
    },
    { 
      title: "Cloud & DevOps", 
      icon: Cloud,
      skills: [
        "AWS EC2", "AWS S3", "AWS RDS", "AWS EBS", "AWS IAM", 
        "Elastic Beanstalk", "DynamoDB", "Custom VPCs", "CloudWatch", 
        "ELB", "Auto Scaling", "Docker"
      ],
      gradient: "from-blue-600 via-blue-500 to-indigo-600",
      bgPattern: "bg-blue-50"
    },
    { 
      title: "Development Tools & IDE", 
      icon: Database,
      skills: [
        "STS", "IntelliJ IDEA", "Maven", "MobaXterm", 
        "GitHub Copilot", "Debugging", "Linux", "MySQL", "Oracle"
      ],
      gradient: "from-blue-600 via-blue-500 to-indigo-600",
      bgPattern: "bg-blue-50"
    },
    { 
      title: "Version Control & Collaboration", 
      icon: Code,
      skills: [
        "Git", "GitHub", "Bitbucket", "JIRA", "Confluence"
      ],
      gradient: "from-blue-600 via-blue-500 to-indigo-600",
      bgPattern: "bg-blue-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with to build modern, scalable applications
          </p>
        </div>

        {/* Top Navigation Bar */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 mb-12 p-2">
          <div className="flex flex-wrap justify-center gap-2">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`group flex flex-col items-center px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 min-w-[140px] ${
                    activeCategory === index
                      ? `bg-gradient-to-r ${category.gradient} text-white shadow-md`
                      : 'text-gray-700 hover:bg-gray-100/80'
                  }`}
                >
                  <IconComponent className="w-6 h-6 mb-1 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-xs text-center leading-tight">{category.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Skills Display */}
        <div className="max-w-6xl mx-auto">
          <div className={`rounded-3xl p-8 ${skillCategories[activeCategory].bgPattern} backdrop-blur-sm border border-white/20 shadow-2xl`}>
            <div className="flex items-center mb-8">
              {React.createElement(skillCategories[activeCategory].icon, { 
                className: `w-8 h-8 mr-4 bg-gradient-to-r ${skillCategories[activeCategory].gradient} bg-clip-text text-transparent` 
              })}
              <h3 className={`text-3xl font-bold bg-gradient-to-r ${skillCategories[activeCategory].gradient} bg-clip-text text-transparent`}>
                {skillCategories[activeCategory].title}
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skillCategories[activeCategory].skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="group bg-white/70 backdrop-blur-sm rounded-xl py-6 px-4 hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer text-center flex flex-col items-center justify-center min-h-[100px]"
                >
                  <div className="flex items-center justify-center mb-3">
                    <Sparkles className={`w-5 h-5 bg-gradient-to-r ${skillCategories[activeCategory].gradient} bg-clip-text text-transparent group-hover:rotate-12 transition-transform duration-300`} />
                  </div>
                  <span className="text-sm font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Skills Overview */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8 flex items-center justify-center">
              <Code className="w-6 h-6 mr-2 text-blue-600" />
              Core Competencies
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Server className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Backend Development & Microservices</h4>
                <p className="text-gray-600">I have a strong interest in backend development with microservices architecture for building scalable and efficient applications that can handle complex business requirements</p>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-r from-orange-600 to-yellow-600 w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                 <FaAws className="w-10 h-10 text-white" />       
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">AWS Cloud Development</h4>
                <p className="text-gray-600">I'm passionate about cloud development in AWS with hands-on experience in EC2, EBS, IAM, S3, Elastic Beanstalk, RDS, DynamoDB, Custom VPCs, CloudWatch, ELB, and Auto Scaling to build modern, cloud-native solutions that are highly available and cost-effective</p>
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

export default Skills;