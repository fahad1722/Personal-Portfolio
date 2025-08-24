import React, { useState } from 'react';
import { Github, Code, Globe, Database, Brain, Shield, Cloud, FileText, CheckSquare } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
     {
      id: 1,
      title: "S3Drive",
      description: "Secure file management system with AWS S3 integration and JWT authentication. Features file upload, download, and deletion with metadata persistence using AWS RDS.",
      githubLink: "https://github.com/fahad1722/S3Drive",
      technologies: ["Spring Boot", "JWT", "AWS S3", "AWS RDS"],
      category: "Cloud",
      icon: Cloud,
      gradient: "from-sky-600 to-blue-600"
    },
      {
      id: 2,
      title: "Spring Security JWT",
      description: "Secure authentication system using Spring Security with JWT tokens and role-based access control. Implements admin and user roles with comprehensive security features.",
      githubLink: "https://github.com/fahad1722/spring-security-login-register-jwt",
      technologies: ["Spring Boot", "Spring Security", "JWT", "Java"],
      category: "Backend",
      icon: Shield,
      gradient: "from-emerald-600 to-cyan-600"
    },
       {
      id: 3,
      title: "Loan Prediction",
      description: "Machine learning project that predicts loan approval chances using various algorithms. Includes data preprocessing, model training, and performance evaluation.",
      githubLink: "https://github.com/fahad1722/loan-prediction",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      category: "Machine Learning",
      icon: Brain,
      gradient: "from-orange-600 to-red-600"
    },
      {
      id: 5,
      title: "Document Similarity BERT",
      description: "Django application using pre-trained BERT models to calculate document similarity with cosine metrics. Features T5 model for automatic summary generation.",
      githubLink: "https://github.com/fahad1722/Document-Similarity-using-BERT",
      technologies: ["Django", "BERT", "T5", "Python", "NLP"],
      category: "Machine Learning",
      icon: FileText,
      gradient: "from-violet-600 to-purple-600"
    },
    {
      id: 4,
      title: "CRUD Application",
      description: "Full-stack MERN application with complete Create, Read, Update, Delete functionality. Features modern UI/UX with responsive design and real-time data management.",
      githubLink: "https://github.com/fahad1722/mern",
      technologies: ["MongoDB", "React", "Node.js"],
      category: "Full Stack",
      icon: Database,
      gradient: "from-blue-600 to-purple-600"
    },
      {
      id: 6,
      title: "Todo App",
      description: "A  To-Do application that helps organize tasks and manage daily responsibilities. Features task addition, editing, deletion, and filtering based on status.",
      githubLink: "https://github.com/fahad1722/To-do-App",
      liveLink: "https://fahads-todo-app.netlify.app/",
      technologies: ["React", "Netlify"],
      category: "Frontend",
      icon: CheckSquare,
      gradient: "from-indigo-600 to-blue-600"
    },

    {
      id: 7,
      title: "Personal Portfolio",
      description: "Sleek and modern portfolio website showcasing projects, skills, and experience. Features smooth animations, responsive design, and optimized performance.",
      githubLink: "https://github.com/fahad1722/personal-portfolio",
      technologies: ["React", "Tailwind CSS"],
      category: "Frontend",
      icon: Code,
      gradient: "from-purple-600 to-pink-600"
    },
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
            A showcase of my development journey through various technologies and domains
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Header */}
                <div className={`relative p-6 bg-gradient-to-r ${project.gradient} text-white`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <IconComponent className="w-8 h-8 mr-3" />
                      <div>
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <span className="text-sm opacity-90">{project.category}</span>
                      </div>
                    </div>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors duration-200"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full text-xs font-medium text-gray-700 border border-gray-300/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors duration-200 font-medium shadow-lg text-sm"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 font-medium text-sm"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div 
                  className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}
                  style={{ 
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'xor',
                    WebkitMaskComposite: 'xor'
                  }}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Want to see more?
            </h3>
            <p className="text-gray-600 mb-6">
              Check out my GitHub for more projects
            </p>
            <a
              href="https://github.com/fahad1722"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 font-medium"
            >
              <Github className="w-5 h-5 mr-2" />
              Visit My GitHub
            </a>
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

export default Projects;