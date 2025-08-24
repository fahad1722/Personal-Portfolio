import React from 'react';
import { Calendar, MapPin, ExternalLink, Award, TrendingUp, Users } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Associate Software Engineer",
      company: "e2open Software India Pvt. Ltd",
      location: "Hyderabad, Telangana",
      period: "September 2024 - Present",
      type: "Full-time",
      description: "Working on enterprise supply chain management solutions, developing microservices and implementing cutting-edge technologies to enhance system performance and reliability across the LSP platform. Actively working on new feature development and resolving customer bugs in a timely manner to ensure optimal user experience.",
      technologies: ["Java 17", "Spring Boot 3.4", "Spring AOP", "Apache PDFBox", "Spring Security 6+", "Jakarta EE", "Microservices", "Data Streaming", "Oracle DB", "Swagger", "Postman", "Git", "Bitbucket", "JIRA", "IntelliJ IDEA", "STS", "Confluence"],
      companyUrl: "https://www.e2open.com",
      projects: [
        {
          name: "Document Merge Feature – PrintManager Service",
          description: "Enhanced document handling efficiency through asynchronous processing and inter-service integration",
          details: [
            "Designed and implemented document merge functionality in PrintManager service to efficiently handle asynchronously generated documents",
            "Enhanced Distributor logic to group jobs with the same jobGroupID and documentType, sending them to queue as a batch instead of individually",
            "Integrated PrintManager with DocServ service using inter-service communication (RestTemplate) to fetch generated documents",
            "Developed merging logic within PrintManager using Apache PDFBox library, improving efficiency in document handling"
          ]
        },
        {
          name: "Data Stream MasterData – EDG Service",
          description: "Real-time master data tracking system with hash-based change detection and streaming integration",
          details: [
            "Implemented functionality to track changes in master data (employees, users, business relations, invoices, etc.) within the LSP product",
            "Developed hash-based change detection logic by comparing current data hash values with previously stored values in the database",
            "Built efficient change identification system to minimize database overhead and improve performance",
            "Built data streaming pipeline to transmit detected changes to external Watermill service for further processing and integration"
          ]
        },
        {
          name: "Metrics Service – Spring AOP",
          description: "Comprehensive execution time monitoring system with reusable components and centralized metrics collection",
          details: [
            "Developed custom @TrackExecutionTime annotation using Spring AOP to measure and log method execution time for critical methods",
            "Applied the annotation to critical methods across services to monitor performance and identify bottlenecks",
            "Designed complete metrics architecture consisting of three components:",
            "   1. Metrics Producer → Generated execution time logs in JSON format for structured data collection",
            "   2. Metrics Transformer → Transferred logs containing method name and execution time (in ms) from services to Metrics Consumer",
            "   3. Metrics Consumer → Centralized and stored execution metrics for monitoring and analysis",
            "Packaged Metrics Producer as a reusable dependency, enabling other services to easily adopt execution-time monitoring via @TrackExecutionTime annotation"
          ]
        },
        {
          name: "Spring Boot 3.4 Upgrade – LSP Platform Services",
          description: "Complete platform modernization with enhanced security and long-term maintainability",
          details: [
            "Migrated 3 core services from Spring Boot 2.7 to 3.4, ensuring long-term support and stronger security compliance",
            "Upgraded tech stack to Java 17 and Spring Security 6+, modernizing the entire technology foundation",
            "Resolved 100+ compatibility issues during migration, ensuring seamless functionality across all services",
            "Modernized services with Jakarta EE standards, transitioning from javax.* to jakarta.* packages for future compatibility"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 pt-16">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
           A showcase of my professional career, highlighting my work, contributions, and the impact I've made as a Java Backend Developer.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-indigo-400"></div>

          {experiences.map((exp, index) => (
            <div key={exp.id} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}>
              {/* Timeline dot */}
              <div className={`absolute w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg ${
                index % 2 === 0 ? 'left-5 md:right-0 md:left-auto md:mr-3' : 'left-5 md:left-0 md:ml-3'
              } top-6 z-10`}></div>

              {/* Experience card */}
              <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                      <div className="flex items-center text-blue-600 font-semibold text-lg mb-2">
                        <a 
                          href={exp.companyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-blue-700 transition-colors duration-200 flex items-center"
                        >
                          {exp.company}
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{exp.location}</span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          exp.type === 'Full-time' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>

                  {/* Projects Section */}
                  {exp.projects && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Projects</h4>
                      <div className="space-y-6">
                        {exp.projects.map((project, idx) => (
                          <div key={idx} className="border-l-4 border-gradient-to-b from-blue-400 to-purple-400 pl-6 py-4 bg-gradient-to-r from-blue-50/30 to-purple-50/30 rounded-r-xl border border-blue-100/50">
                            <h5 className="font-bold text-gray-800 mb-2 text-lg">{project.name}</h5>
                            <p className="text-gray-600 mb-3 font-medium">{project.description}</p>
                            {project.details && (
                              <ul className="space-y-2">
                                {project.details.map((detail, detailIdx) => (
                                  <li key={detailIdx} className="flex items-start text-sm">
                                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span className="text-gray-700 leading-relaxed">{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100 hover:from-blue-100 hover:to-purple-100 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-blue-100 mb-6 text-lg">
            I'm always open to discussing new opportunities and exciting projects.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get In Touch
            <ExternalLink className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;